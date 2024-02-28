<script setup>
import { markRaw, onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import Editor from '@/libs/editor';

const props = defineProps({
    width: {
        type: Number,
        default: 1080
    },
    height: {
        type: Number,
        default: 1080
    }
});

const canvasEl = ref(null);
const editor = ref(null);

const eventListeners = {
    onModified: (target) => {
        // console.log(target)
    }
};

const onMouseWheel = (opt) => {
    const e = opt.e;

    e.preventDefault();
    e.stopPropagation();

    const { handler } = editor.value;
    const { canvas } = handler;
    const photo = canvas.getItemByName('photo');
    const frame = canvas.getItemByName('frame');

    handler.setObject({ opacity: 0.4 }, frame);

    if (photo) {
        const delta = -e.deltaY;
        const scalingFactor = 0.003; // Adjust this value to control the scaling sensitivity

        const newScaleX = photo.scaleX + delta * scalingFactor;
        const newScaleY = photo.scaleY + delta * scalingFactor;

        const minScale = 0.1;
        const maxScale = 10;

        handler.setObject(
            {
                scaleX: Math.min(Math.max(newScaleX, minScale), maxScale),
                scaleY: Math.min(Math.max(newScaleY, minScale), maxScale)
            },
            photo
        );
    }

    setTimeout(() => {
        handler.setObject({ opacity: 1 }, frame);
    }, 200);
};

const onMouseDown = () => {
    const { handler } = editor.value;
    const { canvas } = handler;
    const frame = canvas.getItemByName('frame');
    const activeObject = canvas.getActiveObject();

    if (activeObject && activeObject.name !== 'photo') {
        return;
    }

    handler.setObject({ opacity: 0.4 }, frame);
    // frame.
};

const onMouseUp = () => {
    const { handler } = editor.value;
    const { canvas } = handler;
    const frame = canvas.getItemByName('frame');

    handler.setObject({ opacity: 1 }, frame);
};

onMounted(() => {
    editor.value = markRaw(new Editor({ el: canvasEl.value, ...props, ...eventListeners }));

    const { canvas } = editor.value.handler;
    canvas.on({
        'mouse:wheel': onMouseWheel,
        'mouse:down': onMouseDown,
        'mouse:up': onMouseUp
    });
});

onBeforeUnmount(() => {
    const { canvas } = editor.value.handler;
    canvas.off({
        'mouse:wheel': onMouseWheel,
        'mouse:down': onMouseDown,
        'mouse:up': onMouseUp
    });
});

defineExpose({ editor });
</script>

<template>
    <canvas ref="canvasEl" class="canvas"></canvas>
</template>
