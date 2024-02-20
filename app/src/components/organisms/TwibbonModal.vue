<script setup>
import { onMounted, ref, watch } from 'vue';
import { useResizeObserver, breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { useModal } from '@/composables/modal';

import QCanvas from '@/components/atoms/QCanvas.vue';

const props = defineProps({
    campaign: {
        type: Object,
        required: true
    },
    frames: {
        type: Array
    },
    photo: {
        type: File
    }
});

const canvasWrapper = ref(null);
const canvas = ref(null);
const selectedFrame = ref(props.frames[0]);

const { update } = useModal();
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

const handleInsertPhoto = (file) => {
    const reader = new FileReader();

    // Define the onload event handler for FileReader
    reader.onload = function (e) {
        // e.target.result contains the data URL
        const dataURL = e.target.result;

        const { editor } = canvas.value;

        editor.insertImage(dataURL, { name: 'photo' });
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
};

useResizeObserver(canvasWrapper, (entries) => {
    const wrapperEl = entries[0];
    const { editor } = canvas.value;

    const { width, height } = wrapperEl.contentRect;
    editor.handler.eventHandler.resize(width, height);
    editor.handler.zoomHandler.zoomToFit();
});

watch(() => props.photo, handleInsertPhoto);

watch(sm, (newValue) => {
    update({
        position: newValue ? 'bottom' : 'center'
    });
});

onMounted(() => {
    const { photo } = props;
    const { editor } = canvas.value;

    // handleInsertPhoto(selectedFrame.value, { name: 'frame' });
    handleInsertPhoto(photo, { name: 'photo' });
    editor.insertImage(selectedFrame.value, { name: 'frame' });
});
</script>

<template>
    <div class="twibbon-modal">
        <div ref="canvasWrapper" class="canvas-wrapper">
            <QCanvas ref="canvas" />
        </div>

        <RadioGroup v-model="selectedFrame">
            <div class="frames__options">
                <RadioGroupOption
                    v-for="(frame, i) in frames"
                    :key="i"
                    :value="frame"
                    v-slot="{ checked }"
                >
                    <div :class="['frames__option', checked && 'frames__option--checked']">
                        <img :src="frame" :alt="i" />
                    </div>
                </RadioGroupOption>
            </div>
        </RadioGroup>
    </div>
</template>

<style scoped lang="scss">
.canvas-wrapper {
    max-height: 390px;
    padding: 24px 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @apply bg-gray-200;
}

.frames__options {
    @apply flex items-center justify-center space-x-2 max-w-full overflow-scroll;
    @include no_scrollbar();
}

.frames__option {
    @apply h-16 w-16 rounded-lg p-2 border border-stroke bg-white transition-colors duration-200 cursor-pointer mt-4;

    @include md_screen {
        @apply h-20 w-20;
    }

    &--checked {
        @apply border-main bg-gray-200;
    }
}
</style>
