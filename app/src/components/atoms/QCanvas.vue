<script setup>
import { markRaw, onMounted, ref } from 'vue';
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

const canvasWrapper = ref(null);
const canvasEl = ref(null);
const editor = ref(null);

// useResizeObserver(canvasWrapper, (entries) => {

// });

onMounted(() => {
    editor.value = markRaw(new Editor({ el: canvasEl.value, ...props }));
});

defineExpose({ editor });
</script>

<template>
    <div ref="canvasWrapper" class="canvas-wrapper">
        <canvas ref="canvasEl" class="canvas"></canvas>
    </div>
</template>
