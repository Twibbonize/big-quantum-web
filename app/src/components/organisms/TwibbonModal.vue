<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import {
    useResizeObserver,
    breakpointsTailwind,
    useBreakpoints,
    useElementSize
} from '@vueuse/core';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { useModal } from '@/composables/modal';
import fabric from '@/libs/editor/fabric';
import QButton from '@/components/atoms/QButton.vue';
import QCanvas from '@/components/atoms/QCanvas.vue';
import QConfirmDialog from '@/components/atoms/QConfirmDialog.vue';
import QSwitchToggle from '@/components/atoms/forms/QSwitchToggle.vue';
import RotateSlider from '@/components/molecules/TwibbonModal/RotateSlider.vue';
import TextModifier from '@/components/molecules/TwibbonModal/TextModifier.vue';
import PresetModifier from '@/components/molecules/TwibbonModal/PresetModifier.vue';

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

const showConfirmDiscard = ref(false);
const modalFooter = ref(null);
const canvas = ref(null);
const canvasInner = ref(null);
const activeObj = ref(null);
const editState = ref('crop');
const photoRotation = ref(0);
const selectedFrame = ref(props.frames[props.selectedFrameIdx]);
const removeWatermark = ref(false);

const { height: footerHeight } = useElementSize(modalFooter);
const { update, close } = useModal();
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

const modalBodyPaddingBottom = computed(() => {
    return `${footerHeight.value + 24}px`;
});

useResizeObserver(canvasInner, (entries) => {
    const wrapperEl = entries[0];
    const { editor } = canvas.value;

    const { width, height } = wrapperEl.contentRect;
    editor.handler.eventHandler.resize(width, height);
    editor.handler.zoomHandler.zoomToFit();
});

const modify = (changedKey, changedValue, target = null) => {
    const { editor } = canvas.value;

    const targetObj =
        (target && editor.handler.find(target)) || editor.handler.canvas.getActiveObject();

    if (changedKey === 'fontFamily') {
        const { family, googleFont } = changedValue;
        if (googleFont) {
            editor.handler.loadFont(family).then((font) => {
                editor.handler.set(changedKey, font);
                editor.handler.set('isGoogleFont', true);
                activeObj.value[changedKey] = family;
            });
            return;
        }

        editor.handler.set(changedKey, family, targetObj);
        activeObj.value[changedKey] = family;
        return;
    }

    if (changedKey === 'fontWeight') {
        const fontWeight = changedValue ? 'normal' : 'bold';
        editor.handler.set(changedKey, fontWeight, targetObj);
        activeObj.value[changedKey] = fontWeight;
        return;
    }

    if (changedKey === 'fontStyle') {
        const fontStyle = changedValue ? 'normal' : 'italic';
        editor.handler.set(changedKey, fontStyle, targetObj);
        activeObj.value[changedKey] = fontStyle;
        return;
    }

    if (changedKey === 'preset') {
        const currentPreset = targetObj.preset;
        const preset = changedValue;

        const mustResized =
            Math.max(targetObj.width, targetObj.height) > fabric.textureSize &&
            !targetObj.originalSrc;

        if (!currentPreset && mustResized) {
            editor.handler.resizeImage(targetObj).then((resizedImg) => {
                const originalSrc = targetObj.getSrc();
                const originalHeight = targetObj.height;
                const originalWidth = targetObj.width;

                targetObj.filters.push(
                    new fabric.Image.filters.Duotone({
                        duotone: false
                    })
                );

                targetObj.setSrc(resizedImg);
                targetObj.scaleToHeight(originalHeight);
                targetObj.scaleToWidth(originalWidth);
                let presetValue;

                for (const key in preset) {
                    if (key === 'highlightColor' || key === 'shadowColor') {
                        continue;
                    }

                    if (key === 'duotone') {
                        if (!preset[key]) {
                            continue;
                        }

                        presetValue = {
                            highlightColor: preset['highlightColor'],
                            shadowColor: preset['shadowColor']
                        };
                    } else if (key === 'vignette') {
                        presetValue = {
                            radius: preset[key]
                        };
                    } else {
                        presetValue = {};
                        presetValue[key] = preset[key];
                    }

                    editor.handler.imageHandler.applyFilterByType(
                        key,
                        preset[key] !== 0,
                        presetValue,
                        targetObj
                    );
                }

                editor.handler.setObject({ originalSrc, preset: preset.name }, targetObj);
            });

            return;
        }
        // console.log(currentPreset, target.preset)
        // const preset = changedValue;

        // if (!preset || preset.name !== currentPreset) {
        //     editor.handler.imageHandler.resetFilters(targetObj);
        // }

        let presetValue;

        for (const key in preset) {
            if (key === 'highlightColor' || key === 'shadowColor') {
                continue;
            }

            if (key === 'duotone') {
                if (!preset[key]) {
                    continue;
                }

                presetValue = {
                    highlightColor: preset['highlightColor'],
                    shadowColor: preset['shadowColor']
                };
            } else if (key === 'vignette') {
                presetValue = {
                    radius: preset[key]
                };
            } else {
                presetValue = {};
                presetValue[key] = preset[key];
            }

            editor.handler.imageHandler.applyFilterByType(
                key,
                preset[key] !== 0,
                presetValue,
                targetObj
            );
        }

        editor.handler.set('preset', preset.name, targetObj);

        return;
    }

    if (changedKey === 'rotate') {
        editor.handler.setObject({ rotate: changedValue }, targetObj);
        return;
    }

    editor.handler.set(changedKey, changedValue, targetObj);
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
    // const positionY = editor.height / 2;

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
            originY: 'bottom',
            globalCompositeOperation: 'source-atop'
        }
    };

    const createdObj = await editor.handler.add(obj, true);

    const additionalMultipler = sm.value ? 0.95 : 1;

    // createdObj.scaleToHeight(editor.handler.canvas.getHeight() * 0.33);
    createdObj.scaleToWidth(editor.handler.canvas.getWidth() * 0.33);

    const { width, height } = editor.handler.canvas;

    const positionX =
        (width / 2 + (width / 2 + createdObj.getScaledWidth() / 2)) * additionalMultipler;
    const positionY = (height * 2 + createdObj.getScaledHeight() / 2) * additionalMultipler;

    editor.handler.setObject({
        left: positionX,
        top: positionY
    });

    editor.handler.bringToFront(createdObj);
};

const toggleWatermark = (show) => {
    const { editor } = canvas.value;
    const opac = show ? 1 : 0;

    const watermarkObj = editor.handler.findByName('watermark');
    // editor.handler.remove(watermarkObj);
    // console.log(watermarkObj.name);
    modify('opacity', opac, watermarkObj);
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
        if (!target) return;

        const { editor } = canvas.value;
        const { propertiesToInclude } = editor.handler;
        const properties = target.toObject(propertiesToInclude);
        const { angle, name } = properties;

        if (name === 'photo') {
            photoRotation.value = angle;
            return;
        }

        if (activeObj.value && target.id === activeObj.value.id) {
            activeObj.value = properties;
            return;
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

const backToCropState = () => {
    editState.value = 'crop';
    const { editor } = canvas.value;
    editor.handler.clearSelection();
};

const handleDownload = async () => {
    const { editor } = canvas.value;
    editor.handler.saveCanvasImage();
};

const resetFilter = () => {
    const { editor } = canvas.value;
    const photo = editor.handler.findByName('photo');
    editor.handler.imageHandler.resetFilters(photo);
};

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

watch(removeWatermark, (newValue) => {
    toggleWatermark(!newValue);
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
        <Teleport to="body">
            <QConfirmDialog :show="showConfirmDiscard">
                <div
                    class="absolute top-0 left-1/2 w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center text-4xl -mt-10 -translate-x-1/2"
                >
                    <i class="ri-question-mark"></i>
                </div>

                <div
                    class="confirm__body pt-14 pb-6 px-5 flex flex-col items-center justify-center text-center"
                >
                    <div class="flex flex-col text-center space-y-2">
                        <h3 class="font-semibold text-xl">Discard edits?</h3>
                        <p class="text-sm">
                            If you go back now, you'll lose all the edits you've made.
                        </p>
                    </div>

                    <div class="flex flex-col items-center space-y-2 mt-6 w-full">
                        <QButton variant="subtle" @click="close" block>
                            <span class="text-red-500">Discard</span>
                        </QButton>
                        <QButton @click="showConfirmDiscard = false" block>Keep Editing</QButton>
                    </div>
                </div>
            </QConfirmDialog>
        </Teleport>

        <div class="canvas-wrapper">
            <div ref="canvasInner" class="canvas-inner">
                <QCanvas ref="canvas" v-bind="canvasListeners" />
            </div>
        </div>

        <Teleport to=".modal__header">
            <div
                class="container flex items-center justify-between px-4 py-3 border-b border-stroke"
            >
                <QButton variant="subtle" square class="-ml-2" @click="showConfirmDiscard = true">
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
                <TextModifier
                    :editor="canvas.editor"
                    :modify="modify"
                    :activeObject="activeObj && activeObj.type === 'textbox' ? activeObj : null"
                />
            </div>
            <!-- end of text state -->

            <div v-if="editState === 'filter'">
                <div class="py-4">
                    <PresetModifier :editor="canvas.editor" :modify="modify" />
                </div>
            </div>
        </div>

        <Teleport to="body" :disabled="!isDragging">
            <div ref="modalFooter" class="twibbon-modal__footer">
                <!-- footer for crop state -->
                <div v-if="editState === 'crop'">
                    <div class="watermark-banner">
                        <div class="watermark-banner__copy">
                            <img
                                class="watermark-banner__icon"
                                src="/assets/img/brandings/no-watermark.webp"
                                alt="no-watermark"
                            />
                            <div class="flex flex-col">
                                <div class="watermark-banner__title">Remove Watermark For You</div>
                                <span class="watermark-banner__desc"
                                    >Upgrade to Premium start from
                                    <span class="font-semibold">$2.99</span>/week
                                </span>
                            </div>
                        </div>

                        <div class="watermark-banner__arrow">
                            <i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>
                    <div class="flex items-center justify-between space-x-3 h-16 px-4 pb-3 pt-2">
                        <QButton variant="secondary" size="auto" circle @click="openInputPhoto">
                            <i class="ri-camera-line ri-lg font-light"></i>
                        </QButton>
                        <QButton block @click="handleDownload"> Download </QButton>
                    </div>
                </div>

                <!-- footer for text state -->
                <div
                    v-if="editState === 'text'"
                    class="flex items-center px-4 py-3 border-t border-stroke bg-white"
                >
                    <QButton variant="secondary" block class="mr-2" @click="addText">
                        <span>Add Text</span>
                    </QButton>
                    <QButton block @click="backToCropState"> Done </QButton>
                </div>

                <div
                    v-if="editState === 'filter'"
                    class="flex items-center px-4 py-3 border-t border-stroke bg-white"
                >
                    <QButton variant="secondary" block class="mr-2" @click="resetFilter">
                        <i class="ri-refresh-line"></i>
                        <span class="ml-2">Reset</span>
                    </QButton>

                    <QButton block @click="backToCropState"> Done </QButton>
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
    @apply flex-grow;
    padding-bottom: v-bind(modalBodyPaddingBottom);
}

.twibbon-modal__tools {
    @apply px-4 flex flex-col space-y-3;

    @include md_screen {
        @apply flex-row space-x-3 space-y-0;
    }
}

.twibbon-modal__footer {
    @apply fixed bottom-0 w-full bg-white overflow-hidden;
    z-index: 100;
}

.frame-options {
    @apply flex items-center justify-center space-x-4 max-w-full px-4;
    @include no_scrollbar();
}

.frame {
    @apply h-12 w-12 rounded-lg p-1 border border-stroke bg-white transition-colors duration-200 cursor-pointer mt-4;

    img {
        @apply rounded;
    }

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

.watermark-banner {
    @apply flex items-center justify-between mb-4 px-4 py-3 cursor-pointer;
    background-image: url('/assets/img/background/bg-supporters.jpg');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;

    .watermark-banner__copy {
        @apply flex items-center space-x-2;
    }

    .watermark-banner__icon {
        @apply h-8 w-8;

        @include md_screen {
            @apply h-10 w-10;
        }
    }

    .watermark-banner__title {
        font-size: 14px;
        font-weight: 600;

        @include md_screen {
            font-size: 15px;
        }
    }

    .watermark-banner__desc {
        font-size: 12px;

        @include md_screen {
            font-size: 13px;
        }
    }

    .watermark-banner__arrow {
        @apply flex-shrink-0 ml-1;
        font-size: 24px;
    }
}
</style>
