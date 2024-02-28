<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import { useResizeObserver, breakpointsTailwind, useBreakpoints, useDebounce } from '@vueuse/core';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { useModal } from '@/composables/modal';
import QButton from '@/components/atoms/QButton.vue';
import QCanvas from '@/components/atoms/QCanvas.vue';

const props = defineProps({
    isDragging: {
        type: Boolean,
        default: false
    },
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

const canvas = ref(null);
const canvasInner = ref(null);
const selectedFrame = ref(props.frames[0]);

const { update } = useModal();
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

const handleInsertPhoto = (file) => {
    const reader = new FileReader();

    // Define the onload event handler for FileReader
    reader.onload = async (e) => {
        // e.target.result contains the data URL
        const dataURL = e.target.result;

        const { editor } = canvas.value;

        const obj = {
            src: dataURL,
            type: 'image',
            opt: {
                name: 'photo',
                hasControls: false,
                hasBorders: false,
                deleteable: false,
                originX: 'center',
                originY: 'center'
            }
        };

        const createObj = await editor.handler.add(obj);
        editor.handler.sendToBack(createObj);
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
};

const handleInsertFrame = async (src) => {
    const { editor } = canvas.value;
    // const { width, heg}

    const prevFrame = editor.handler.findByName('frame');

    if (prevFrame) {
        console.log('here');
        editor.handler.remove(prevFrame);
    }

    const obj = {
        src,
        type: 'image',
        opt: {
            name: 'frame',
            lockMovementX: true,
            lockMovementY: true,
            selectable: false,
            evented: false,
            hasControls: false,
            originX: 'center',
            originY: 'center',
            globalCompositeOperation: 'source-atop'
        }
    };

    const createObj = await editor.handler.add(obj);
    createObj.scaleToHeight(editor.handler.canvas.getHeight());
    createObj.scaleToWidth(editor.handler.canvas.getWidth());

    editor.handler.bringToFront(createObj);
};

const addWatermark = async () => {
    const { editor } = canvas.value;

    //  Calculate position for the bottom right
    const positionX = editor.width / 2 - 40;
    const positionY = editor.height / 2 + 80;

    const obj = {
        src: 'assets/img/brandings/watermark.png',
        type: 'image',
        opt: {
            name: 'watermark',
            hasControls: false,
            hasBorders: false,
            evented: false,
            selectable: false,
            originX: 'center',
            originY: 'center',
            left: positionX,
            top: positionY
        }
    };

    const createObj = await editor.handler.add(obj, false);
    createObj.scaleToHeight(editor.handler.canvas.getHeight() * 0.33);
    createObj.scaleToWidth(editor.handler.canvas.getWidth() * 0.33);

    editor.handler.bringToFront(createObj);
};

useResizeObserver(canvasInner, (entries) => {
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

watch(selectedFrame, (newValue) => {
    handleInsertFrame(newValue);
});

onMounted(async () => {
    const { photo } = props;

    await handleInsertFrame(selectedFrame.value);
    await addWatermark();
    handleInsertPhoto(photo, { name: 'photo' });
});
</script>

<template>
    <div class="twibbon-modal h-full">
        <div class="canvas-wrapper">
            <div ref="canvasInner" class="canvas-inner">
                <QCanvas ref="canvas" />
            </div>
        </div>

        <div class="twibbon-modal__body space-y-5">
            <RadioGroup v-model="selectedFrame" as="template">
                <div class="frame-options">
                    <RadioGroupOption
                        v-for="(frame, i) in frames"
                        :key="i"
                        :value="frame"
                        v-slot="{ checked }"
                    >
                        <div :class="['frame', checked && 'frame--checked']">
                            <img :src="frame" :alt="i" />
                        </div>
                    </RadioGroupOption>
                </div>
            </RadioGroup>

            <div class="flex items-center space-x-5 px-5">
                <QButton variant="neutral" block>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                    >
                        <path
                            d="M9.5 10V9H15.5V10"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11.5 15H13.5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12.5 9V15"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <circle
                            cx="6"
                            cy="5.5"
                            r="1.75"
                            fill="#16DAC1"
                            stroke="currentColor"
                            stroke-width="1.5"
                        />
                        <path
                            d="M20.75 5.5C20.75 6.4665 19.9665 7.25 19 7.25C18.0335 7.25 17.25 6.4665 17.25 5.5C17.25 4.5335 18.0335 3.75 19 3.75C19.9665 3.75 20.75 4.5335 20.75 5.5Z"
                            fill="#16DAC1"
                            stroke="currentColor"
                            stroke-width="1.5"
                        />
                        <circle
                            cx="19"
                            cy="18.5"
                            r="1.75"
                            fill="#16DAC1"
                            stroke="currentColor"
                            stroke-width="1.5"
                        />
                        <path
                            d="M7.75 18.5C7.75 19.4665 6.9665 20.25 6 20.25C5.0335 20.25 4.25 19.4665 4.25 18.5C4.25 17.5335 5.0335 16.75 6 16.75C6.9665 16.75 7.75 17.5335 7.75 18.5Z"
                            fill="#16DAC1"
                            stroke="currentColor"
                            stroke-width="1.5"
                        />
                        <path d="M7.5 5.5L17.5 5.5" stroke="currentColor" stroke-width="1.5" />
                        <path d="M7.5 18.5L17.5 18.5" stroke="currentColor" stroke-width="1.5" />
                        <path d="M6 7L6 17" stroke="currentColor" stroke-width="1.5" />
                        <path d="M19 7L19 17" stroke="currentColor" stroke-width="1.5" />
                    </svg>
                    <span class="ml-1">Text</span>
                </QButton>

                <QButton variant="neutral" block>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                    >
                        <path
                            d="M12.4993 21.0005C17.47 21.0005 21.4995 16.9709 21.4995 12.0002C21.4995 7.02955 17.47 3 12.4993 3C7.52857 3 3.49902 7.02955 3.49902 12.0002C3.49902 16.9709 7.52857 21.0005 12.4993 21.0005Z"
                            stroke="currentColor"
                            stroke-width="1.35004"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14.5791 8.40039L19.7452 17.3466"
                            stroke="currentColor"
                            stroke-width="1.35004"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M10.4209 8.40039H20.7532"
                            stroke="currentColor"
                            stroke-width="1.35004"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8.3418 12.0004L13.5079 3.0542"
                            stroke="currentColor"
                            stroke-width="1.35004"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M10.421 15.6003L5.25488 6.65405"
                            stroke="currentColor"
                            stroke-width="1.35004"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14.5794 15.6001H4.24707"
                            stroke="currentColor"
                            stroke-width="1.35004"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M16.6583 12.0002L11.4922 20.9465"
                            stroke="currentColor"
                            stroke-width="1.35004"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span class="ml-1"> Filter </span>
                </QButton>
            </div>
        </div>

        <Teleport to="body" :disabled="!isDragging">
            <div class="twibbon-modal__footer">
                <QButton variant="secondary" size="auto" circle>
                    <i class="ri-camera-line ri-lg font-light"></i>
                </QButton>
                <QButton block>Next</QButton>
            </div>
        </Teleport>
    </div>
</template>

<style scoped lang="scss">
.canvas-wrapper {
    max-height: 390px;
    display: flex;
    align-items: center;
    justify-content: center;

    @apply bg-gray-200;
}

.canvas-inner {
    aspect-ratio: 1/1;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    z-index: 0;
    padding: 20px;
    overflow: hidden;
}

.twibbon-modal {
    @apply flex flex-col h-full;
    padding-bottom: 82px;
}

.twibbon-modal__body {
    position: relative;
    z-index: 1;
    @apply flex-grow;
}

.twibbon-modal__footer {
    @apply fixed bottom-0 w-full px-5 py-4 flex items-center justify-between space-x-3;
    z-index: 9999;
    height: 82px;
}

.frame-options {
    @apply flex items-center justify-center space-x-4 max-w-full overflow-scroll;
    @include no_scrollbar();
}

.frame {
    @apply h-16 w-16 rounded-lg p-2 border border-stroke bg-white transition-colors duration-200 cursor-pointer mt-4;

    @include md_screen {
        @apply h-20 w-20;
    }

    &--checked {
        @apply border-main bg-gray-200;
    }
}

.twibbon-tab {
    @apply flex items-center justify-center space-x-1 py-4 font-medium text-sm text-content flex-grow flex-shrink-0 w-0 border-b border-stroke transition-all duration-200;
    height: 48px;

    &.twibbon-tab--selected {
        @apply text-black border-black;
    }
}
</style>
