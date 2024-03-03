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
    },
    onModified: {
        type: Function,
        default: () => {}
    },

    onRemove: {
        type: Function,
        default: () => {}
    },

    onAdd: {
        type: Function,
        default: () => {}
    },

    onSelect: {
        type: Function,
        default: () => {}
    },

    onZoom: {
        type: Function,
        default: () => {}
    },

    onDblClick: {
        type: Function,
        default: () => {}
    },

    onContext: {
        type: Function,
        default: () => {}
    },

    onTransaction: {
        type: Function,
        default: () => {}
    },

    onUngroup: {
        type: Function,
        default: () => {}
    },

    onGroup: {
        type: Function,
        default: () => {}
    }
});

const canvasEl = ref(null);
const editor = ref(null);

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
    const keyEvent = {
        move: true,
        all: false,
        copy: false,
        paste: false,
        esc: false,
        del: false,
        clipboard: false,
        transaction: false,
        zoom: false,
        cut: false,
        grab: false
    };

    const mouseEvent = {
        wheel: false
    };

    editor.value = markRaw(new Editor({ el: canvasEl.value, keyEvent, mouseEvent, ...props }));

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
