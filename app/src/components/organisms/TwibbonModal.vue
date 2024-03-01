<script setup>
import { onMounted, ref, watch } from 'vue';
import { useResizeObserver, breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { useModal } from '@/composables/modal';
import QButton from '@/components/atoms/QButton.vue';
import QCanvas from '@/components/atoms/QCanvas.vue';
import QSwitchToggle from '@/components/atoms/forms/QSwitchToggle.vue';
import RotateSlider from '@/components/molecules/TwibbonModal/RotateSlider.vue';
import TextModifier from '@/components/molecules/TwibbonModal/TextModifier.vue';

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
const activeObj = ref(null);
const editState = ref('crop');
const photoRotation = ref(0);
const selectedFrame = ref(props.frames[props.selectedFrameIdx]);
const removeWatermark = ref(false);

const { update, close } = useModal();
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

const modify = (changedKey, changedValue, target = null) => {
    const { editor } = canvas.value;

    const targetObj = target || editor.handler.canvas.getActiveObject();

    if (changedKey === 'fontFamily') {
        const { family, isGoogleFont } = changedValue;
        if (isGoogleFont) {
            editor.handler.loadFont(family).then((font) => {
                editor.handler.set(changedKey, font);
                editor.handler.set('isGoogleFont', true);
                activeObj.value[changedKey] = family;
            });
            return;
        }

        editor.handler.set(changedKey, family);
        activeObj.value[changedKey] = family;
        return;
    }

    if (changedKey === 'fontWeight') {
        const fontWeight = changedValue ? 'normal' : 'bold';
        editor.handler.set(changedKey, fontWeight);
        activeObj.value[changedKey] = fontWeight;
        return;
    }

    if (changedKey === 'fontStyle') {
        const fontStyle = changedValue ? 'normal' : 'italic';
        editor.handler.set(changedKey, fontStyle);
        activeObj.value[changedKey] = fontStyle;
        return;
    }

    if (changedKey === 'rotate') {
        editor.handler.setObject({ rotate: changedValue }, targetObj);
        return;
    }

    editor.handler.set(changedKey, changedValue);
    activeObj.value[changedKey] = changedValue;
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

        const createdObj = await editor.handler.add(obj);
        editor.handler.sendToBack(createdObj);
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

    const createdObj = await editor.handler.add(obj);
    createdObj.scaleToHeight(editor.handler.canvas.getHeight());
    createdObj.scaleToWidth(editor.handler.canvas.getWidth());
    editor.handler.moveToIndex(createdObj, targetIndex, false);
};

const addWatermark = async () => {
    const { editor } = canvas.value;

    //  Calculate position for the bottom right
    const positionX = editor.width / 2;
    const positionY = editor.height / 2;

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
            globalCompositeOperation: 'source-atop'
        }
    };

    const createdObj = await editor.handler.add(obj, true);
    createdObj.scaleToHeight(editor.handler.canvas.getHeight() * 0.33);
    createdObj.scaleToWidth(editor.handler.canvas.getWidth() * 0.33);
    editor.handler.setObject({
        left: positionX - 40,
        top: positionY + createdObj.height * 2
    });

    editor.handler.bringToFront(createdObj);
};

const addText = () => {
    const obj = {
        type: 'text',
        texts: [
            {
                defaultText: 'Enter your text',
                config: {
                    fontFamily: 'Roboto',
                    fontSize: 42,
                    color: '#000000',
                    isGoogleFont: true
                }
            }
        ]
    };

    const { editor } = canvas.value;

    editor.handler.add(obj);
};

const handleInputRange = (value) => {
    const snapThreshold = 5;

    const { editor } = canvas.value;
    const target = editor.handler.findByName('photo');

    if (Math.abs(value) <= snapThreshold) {
        modify('rotate', 0, target);
    } else {
        modify('rotate', value, target);
    }
};

const rotatePhoto = (degree) => {
    const step = 45;
    const currentRotation = parseInt(photoRotation.value);
    const newRotation = Math.round(currentRotation / step) * step + degree;
    const adjustedNewRotation = ((newRotation + 540) % 360) - 180;

    const { editor } = canvas.value;

    const target = editor.handler.findByName('photo');

    modify('rotate', adjustedNewRotation, target);
};

const canvasListeners = {
    onModified: (target) => {
        const properties = target.toObject(['name']);

        const { angle, name } = properties;

        if (name === 'photo') {
            photoRotation.value = angle;
        }
    },
    onSelect: (target) => {
        if (!target) {
            activeObj.value = null;
            return;
        }

        if (target.type === 'textbox') {
            editState.value = 'text';
        }

        const { editor } = canvas.value;
        const { propertiesToInclude } = editor.handler;
        const properties = target.toObject(propertiesToInclude);
        activeObj.value = properties;
    }
};

const closeTextState = () => {
    editState.value = 'crop';
    const { editor } = canvas.value;
    editor.handler.clearSelection();
};

const removeText = () => {
    console.log('triggered');
    if (!activeObj.value) {
        console.log('no object!');
    }

    // const { editor } = canvas.value;
};

useResizeObserver(canvasInner, (entries) => {
    const wrapperEl = entries[0];
    const { editor } = canvas.value;

    const { width, height } = wrapperEl.contentRect;
    editor.handler.eventHandler.resize(width, height);
    editor.handler.zoomHandler.zoomToFit();
});

watch(photoRotation, handleInputRange);

watch(() => props.photo, handleInsertPhoto);

watch(sm, (newValue) => {
    update({
        position: newValue ? 'screen' : 'center'
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
                <QCanvas ref="canvas" v-bind="canvasListeners" />
            </div>
        </div>

        <Teleport to=".modal__header">
            <div class="container flex items-center justify-between px-4 py-3">
                <QButton variant="subtle" square class="-ml-2" @click="close">
                    <i class="ri-close-line ri-2x font-light"></i>
                </QButton>

                <h1 class="text-lg md:text-xl font-semibold">Create Twibbon</h1>

                <div class="w-10"></div>
            </div>
        </Teleport>

        <div class="twibbon-modal__body">
            <!-- crop state -->
            <div v-if="editState === 'crop'" class="space-y-5">
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
                <div class="twibbon-modal__tools">
                    <RotateSlider
                        v-model="photoRotation"
                        @increate="rotatePhoto(45)"
                        @decrease="rotatePhoto(-45)"
                    />
                    <div class="text-filter">
                        <QButton variant="neutral" block @click="editState = 'text'">
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
                                <path
                                    d="M7.5 5.5L17.5 5.5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                />
                                <path
                                    d="M7.5 18.5L17.5 18.5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                />
                                <path d="M6 7L6 17" stroke="currentColor" stroke-width="1.5" />
                                <path d="M19 7L19 17" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                            <span class="ml-1">Text</span>
                        </QButton>

                        <QButton variant="neutral" block @click="editState = 'filter'">
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
            </div>
            <!-- end of crop state -->

            <!-- text state -->
            <div v-if="editState === 'text'" class="space-y-5">
                <div class="px-4 py-4">
                    <TextModifier
                        :editor="canvas.editor"
                        :modify="modify"
                        :activeObject="activeObj && activeObj.type === 'textbox' ? activeObj : null"
                    />
                </div>
            </div>
            <!-- end of text state -->
        </div>

        <Teleport to="body" :disabled="!isDragging">
            <div class="twibbon-modal__footer">
                <!-- footer for crop state -->
                <div v-if="editState === 'crop'">
                    <div class="flex items-center justify-between mb-4 bg-main/20 px-4 py-3">
                        <div class="flex items-center space-x-2">
                            <img
                                class="h-10 w-10"
                                src="/assets/img/brandings/no-watermark.webp"
                                alt="no-watermark"
                            />
                            <div class="flex flex-col">
                                <div class="flex items-center">
                                    <span class="text-sm font-bold">Remove Watermark</span>
                                    <img
                                        class="h-4 ml-1"
                                        src="/assets/img/brandings/badge-gold.png"
                                        alt=""
                                    />
                                </div>
                                <span class="text-xs mt-1"
                                    >Upgrade to Premium, only
                                    <span class="font-semibold">Rp45,000</span> per year</span
                                >
                            </div>
                        </div>

                        <QSwitchToggle
                            v-model="removeWatermark"
                            id="remove_watermark"
                            name="remove_watermark"
                            :checked-value="true"
                            :unchecked-value="false"
                        />
                    </div>
                    <div class="flex items-center justify-between space-x-3 h-16 px-4 pb-3 pt-2">
                        <QButton variant="secondary" size="auto" circle @click="openInputPhoto">
                            <i class="ri-camera-line ri-lg font-light"></i>
                        </QButton>
                        <QButton block>
                            <span v-if="removeWatermark">Upgrade and </span>
                            <span class="ml-1"> Download</span>
                        </QButton>
                    </div>
                </div>

                <!-- footer for text state -->
                <div
                    v-if="editState === 'text'"
                    class="flex items-center px-4 py-3 border-t border-stroke bg-white"
                >
                    <QButton
                        circle
                        variant="danger"
                        outlined
                        class="!h-10 !w-10 mr-2"
                        @click="removeText"
                    >
                        <i class="ri-delete-bin-5-line ri-lg font-light"></i>
                    </QButton>

                    <QButton variant="secondary" block class="mr-2" @click="addText">
                        <i class="ri-text-block"></i>
                        <span class="ml-2">Add Text</span>
                    </QButton>

                    <QButton block @click="closeTextState"> Save </QButton>
                </div>
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

    @include md_screen {
        max-height: 360px;
    }
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
    padding-bottom: 180px;
    overflow-y: auto;

    // transform: scale(0.8);
    // &::-webkit-scrollbar {
    //     width: 5px;
    // }

    // &::-webkit-scrollbar-track {
    //     background: #fff;
    // }

    // &::-webkit-scrollbar-thumb {
    //     background: #16DAC1;
    //     border-radius: 0;
    // }
}

.twibbon-modal__body {
    position: relative;
    z-index: 1;
    @apply flex-grow;
}

.twibbon-modal__tools {
    @apply px-4 flex flex-col space-y-3;

    @include md_screen {
        @apply flex-row space-x-3 space-y-0;
    }
}

.twibbon-modal__footer {
    @apply fixed bottom-0 w-full bg-white overflow-hidden;
    z-index: 9999;
}

.frame-options {
    @apply flex items-center justify-center space-x-4 max-w-full px-4;
    @include no_scrollbar();
}

.frame {
    @apply h-12 w-12 rounded-lg p-2 border border-stroke bg-white transition-colors duration-200 cursor-pointer mt-4;

    @include md_screen {
        @apply h-16 w-16;
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

    .rotate-slider__input {
        @apply flex-grow;
        -webkit-appearance: none;
        height: 8px;
        border-radius: 100px;
        background: rgba(22, 218, 193, 0.2);

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 6px;
            height: 8px;
            background: #16dac1;
            border-radius: 50%;
            cursor: pointer;
        }

        &::-webkit-slider-runnable-track {
            height: 8px;
            border-radius: 100px;
            background: rgba(22, 218, 193, 0.2);
        }
    }
}

.text-filter {
    @apply flex items-center space-x-3 flex-grow;
}
</style>
