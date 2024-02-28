<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import { useResizeObserver, breakpointsTailwind, useBreakpoints } from '@vueuse/core';
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
    },
    selectedFrameIdx: {
        type: Number,
        default: 0
    },
    openInputPhoto: {
        type: Function
    }
});

const canvas = ref(null);
const canvasInner = ref(null);
const selectedFrame = ref(props.frames[props.selectedFrameIdx]);

const { update } = useModal();
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

const modify = (changedKey, changedValue) => {
    const { editor } = canvas.value;

    const activeObject = editor.handler.canvas.getActiveObject();

    if (changedKey === 'rotate') {
        editor.handler.setObject({ rotate: changedValue }, activeObject);
    }
};

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

    let targetIndex = 2;
    const prevFrame = editor.handler.findByName('frame');
    const watermark = editor.handler.findByName('watermark');

    if (watermark) {
        const watermarkIndex = editor.handler.getIndex(watermark);
        targetIndex = watermarkIndex - 1;
    }

    if (prevFrame) {
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
            originY: 'center'
        }
    };

    const createObj = await editor.handler.add(obj);
    createObj.scaleToHeight(editor.handler.canvas.getHeight());
    createObj.scaleToWidth(editor.handler.canvas.getWidth());
    editor.handler.moveToIndex(createObj, targetIndex, false);
};

const addWatermark = async () => {
    const { editor } = canvas.value;

    //  Calculate position for the bottom right
    const positionX = editor.width / 2 - 40;
    const positionY = editor.height / 2 + 100;

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
            top: positionY,
            globalCompositeOperation: 'source-atop'
        }
    };

    const createObj = await editor.handler.add(obj, false);
    createObj.scaleToHeight(editor.handler.canvas.getHeight() * 0.33);
    createObj.scaleToWidth(editor.handler.canvas.getWidth() * 0.33);

    editor.handler.bringToFront(createObj);
};

const handleInputRange = (e) => {
    const value = e.target.value;
    const snapThreshold = 5;

    if (Math.abs(value) <= snapThreshold) {
        e.target.value = 0;
        modify('rotate', 0);
    } else {
        modify('rotate', value);
    }
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

        <Teleport to=".dialog__header">
            <div class="container flex items-center justify-between px-4 pb-3">
                <QButton variant="subtle" square class="-ml-2">
                    <i class="ri-close-line ri-2x font-light"></i>
                </QButton>

                <h1 class="text-lg font-semibold">Create Twibbon</h1>

                <div class="w-10"></div>
            </div>
        </Teleport>

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

            <div class="px-4">
                <div class="rotate-slider flex items-center space-x-4 p-3 bg-gray-150 rounded-xl">
                    <QButton square size="sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M4 6V11H9"
                                stroke="#1B1B1B"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.00814 14.9922C6.52689 16.5259 7.51012 17.8424 8.80967 18.7434C10.1092 19.6444 11.6547 20.081 13.2132 19.9876C14.7718 19.8942 16.2589 19.2757 17.4507 18.2253C18.6424 17.175 19.4741 15.7497 19.8205 14.1642C20.1669 12.5787 20.0092 10.9189 19.3712 9.43481C18.7332 7.95076 17.6494 6.72289 16.2831 5.9362C14.9169 5.1495 13.3422 4.84661 11.7963 5.07316C10.2504 5.2997 8.81707 6.04341 7.71226 7.19222L4 10.8256"
                                stroke="#1B1B1B"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </QButton>

                    <input
                        type="range"
                        name="rotate"
                        id="rotate"
                        min="-180"
                        max="180"
                        value="0"
                        class="flex-grow"
                        @input="handleInputRange"
                    />

                    <QButton square size="sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M20.001 6V11H15.001"
                                stroke="#1B1B1B"
                                stroke-width="1.55556"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M17.9928 14.9922C17.4741 16.5259 16.4909 17.8424 15.1913 18.7434C13.8918 19.6444 12.3463 20.081 10.7878 19.9876C9.22922 19.8942 7.74205 19.2757 6.55032 18.2253C5.3586 17.175 4.52688 15.7497 4.18048 14.1642C3.83408 12.5787 3.99177 10.9189 4.62979 9.43481C5.26781 7.95076 6.35159 6.72289 7.71784 5.9362C9.08409 5.1495 10.6588 4.84661 12.2047 5.07316C13.7506 5.2997 15.1839 6.04341 16.2887 7.19222L20.001 10.8256"
                                stroke="#1B1B1B"
                                stroke-width="1.94444"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </QButton>
                </div>
            </div>

            <div class="flex items-center space-x-5 px-4">
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
                <QButton variant="secondary" size="auto" circle @click="openInputPhoto">
                    <i class="ri-camera-line ri-lg font-light"></i>
                </QButton>
                <QButton block>Download</QButton>
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
    @apply fixed bottom-0 w-full px-4 py-4 flex items-center justify-between space-x-3 shadow-card;
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

.rotate-slider {
    @apply flex items-center space-x-4 p-3 bg-gray-150 rounded-xl relative;

    @include before {
        width: 6px;
        height: 10px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(22, 218, 193, 0.2);
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    @include after {
        width: 6px;
        height: 10px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(22, 218, 193, 0.2);
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
}

/* Style for the range slider */
input[type='range'] {
    -webkit-appearance: none;
    height: 8px;
    /* Set the height of the track */
    border-radius: 100px;
    /* Set the border-radius to 100 */
    background: rgba(22, 218, 193, 0.2);
}

/* Style for the slider thumb (handle) */
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 8px;
    background: #16dac1;
    border-radius: 50%;
    cursor: pointer;
}

/* Style for the slider track */
input[type='range']::-webkit-slider-runnable-track {
    height: 8px;
    /* Set the height of the track */
    border-radius: 100px;
    /* Set the border-radius to 100 */
    background: rgba(22, 218, 193, 0.2);
}
</style>
