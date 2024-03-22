<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch, toRefs } from 'vue';
import {
    useResizeObserver,
    breakpointsTailwind,
    useBreakpoints,
    useElementSize,
    useScroll
} from '@vueuse/core';
import { useMotionProperties, useSpring } from '@vueuse/motion';
import { useDrag } from '@vueuse/gesture';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import fabric from '@/libs/editor/fabric';
import QButton from '@/components/atoms/QButton.vue';
import QCanvas from '@/components/atoms/QCanvas.vue';
import QConfirmDialog from '@/components/atoms/QConfirmDialog.vue';
import QSwitchToggle from '@/components/atoms/forms/QSwitchToggle.vue';
import RotateSlider from '@/components/molecules/TwibbonModal/RotateSlider.vue';
import TextModifier from '@/components/molecules/TwibbonModal/TextModifier.vue';
import PresetModifier from '@/components/molecules/TwibbonModal/PresetModifier.vue';
import AuthUpgrade from '@/components/organisms/AuthUpgrade.vue';
import PricingSheet from '@/components/molecules/campaign-support/PricingSheet.vue';

const props = defineProps({
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

const STEPS = {
    TWIBBON: 1,
    ADS: 2,
    POST: 3
};

const step = ref(STEPS.TWIBBON);

const contentEl = ref(null);
const sheetEl = ref(null);
const sheetContent = ref(null);
const sheetFullyVisible = ref(false);
const canvas = ref(null);
const canvasInner = ref(null);
const twibbonResult = ref(null);
const showConfirmDiscard = ref(false);
const activeObj = ref(null);
const editState = ref('crop');
const photoRotation = ref(0);
const selectedFrame = ref(props.frames[props.selectedFrameIdx]);

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

useResizeObserver(canvasInner, (entries) => {
    const wrapperEl = entries[0];
    const { editor } = canvas.value;

    const { width, height } = wrapperEl.contentRect;
    editor.handler.eventHandler.resize(width, height);
    editor.handler.zoomHandler.zoomToFit();
});

const { height } = useElementSize(sheetEl);
const { isScrolling, arrivedState } = useScroll(sheetEl, { behavior: 'smooth' });
const { top } = toRefs(arrivedState);
const bodyPb = computed(() => `${Math.min(170, height.value + 24)}px`);
// const upperLimitY = computed(() => (56 / 100) * windowWidth.value);

const { motionProperties } = useMotionProperties(sheetEl, {
    cursor: 'default',
    x: 0,
    y: 0
});

const { set, stop } = useSpring(motionProperties, {
    stiffness: 200, // Adjust stiffness to control the bounce
    damping: 20, // Adjust damping to control the bounce
    duration: 500 // Adjust duration to control the animation speed
});

const showPricingPlan = () => {
    sheetContent.value = 'upgrade';
    sheetFullyVisible.value = true;
};

const dragHandler = ({ movement: [_x, y], dragging, tap, axis }) => {
    // console.log(axis, y)

    if (y <= 0) {
        return;
    }

    if (tap) {
        return;
    }

    if (!sheetFullyVisible.value) {
        return;
    }

    if (!dragging) {
        // console.log('here')

        if (y > height.value * (40 / 100)) {
            set({ y: height.value - 143 });

            sheetContent.value = null;
            sheetFullyVisible.value = false;
            setTimeout(() => {
                stop();
                set({ y: 0 });
            }, 10);

            return;
        }

        set({ y: 0 });
        return;
    }

    if (isScrolling.value && !top.value) {
        return;
    }

    set({
        cursor: 'default',
        y
    });
};

useDrag(dragHandler, {
    domTarget: sheetEl,
    filterTaps: true,
    cursor: 'default'
});

const closeSheet = () => {
    sheetFullyVisible.value = false;
    sheetContent.value = 'action';
};

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
        src: '/assets/img/brandings/watermark.png',
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

const resetFilter = () => {
    const { editor } = canvas.value;
    const photo = editor.handler.findByName('photo');
    editor.handler.imageHandler.resetFilters(photo);
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

const changeStep = (nextStep) => {
    step.value = nextStep;
};

const handleDownload = async () => {
    const { editor } = canvas.value;
    editor.handler.saveCanvasImage();
};

watch(photoRotation, handleInputRange);

watch(() => props.photo, handleInsertPhoto);

watch(selectedFrame, (newValue) => {
    handleInsertFrame(newValue);
});

watch(step, async (newValue) => {
    if (newValue === STEPS.ADS) {
        const { editor } = canvas.value;

        twibbonResult.value = await editor.handler.export();

        setTimeout(() => {
            step.value = STEPS.POST;

            if (twibbonResult.value) {
                const anchorEl = document.createElement('a');
                anchorEl.href = twibbonResult.value;
                anchorEl.download = `twibbon-result.jpg`;
                document.body.appendChild(anchorEl);
                anchorEl.click();
                anchorEl.remove();
            }
        }, 7000);
    }

    if (newValue === STEPS.POST) {
        // start download
    }
});

onMounted(async () => {
    const { photo } = props;

    document.body.style.overflow = 'hidden';

    // console.log(height.value)

    await handleInsertFrame(selectedFrame.value);
    await addWatermark();

    if (photo) {
        handleInsertPhoto(photo, { name: 'photo' });
    }

    // set({ y: -height.value });
    // onMounted()
});

onBeforeUnmount(() => {
    document.body.style.overflow = '';
});
</script>

<template>
    <div class="support-page">
        <!-- outer backdrop -->
        <div class="support-page__backdrop"></div>
        <!-- end of outer backdrop -->

        <!-- actual support page -->
        <div ref="contentEl" class="support-page__content">
            <!-- inner backdrop -->
            <div v-show="sheetFullyVisible" class="support-page__overlay" @click="closeSheet"></div>
            <!-- end of inner backdrop -->

            <!-- page header -->
            <div class="support-page__header">
                <QButton variant="subtle" square class="-ml-2" @click="showConfirmDiscard = true">
                    <i class="ri-close-line ri-2x font-light"></i>
                </QButton>
            </div>
            <!-- end of page header -->

            <!-- page main content -->
            <div v-show="step === STEPS.TWIBBON" class="support-page__main">
                <!-- canvas -->
                <div class="canvas-wrapper">
                    <div ref="canvasInner" class="canvas-inner">
                        <QCanvas ref="canvas" v-bind="canvasListeners" />
                    </div>
                </div>
                <!-- end of canvas -->

                <!-- crop state -->
                <div v-if="editState === 'crop'" class="space-y-5">
                    <!-- frame selector -->
                    <RadioGroup v-model="selectedFrame" as="template">
                        <div class="frame-selector">
                            <RadioGroupOption
                                v-for="(frame, i) in frames"
                                :key="i"
                                :value="frame"
                                v-slot="{ checked }"
                            >
                                <div
                                    :class="[
                                        'frame-selector__item',
                                        checked && 'frame-selector__item--checked'
                                    ]"
                                >
                                    <img :src="frame" :alt="i" />
                                </div>
                            </RadioGroupOption>
                        </div>
                    </RadioGroup>
                    <!-- end of frame-selector -->

                    <!-- canvas tools  -->
                    <div class="support-page__tools">
                        <!-- rotate slider -->
                        <RotateSlider
                            v-model="photoRotation"
                            @increate="rotatePhoto(45)"
                            @decrease="rotatePhoto(-45)"
                        />
                        <!-- end of rotate slider -->

                        <!-- text and presets -->
                        <div class="text-presets">
                            <!-- text modifier entry pointer -->
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
                                    <path
                                        d="M19 7L19 17"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                    />
                                </svg>
                                <span class="ml-1">Text</span>
                            </QButton>
                            <!-- end of text modifier entry point -->

                            <!-- preset modifier entry point -->
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
                            <!-- end of preset modifier entry point -->
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

                <!-- filter state -->
                <div v-if="editState === 'filter'" class="preset-modifier-wrapper">
                    <PresetModifier :editor="canvas.editor" :modify="modify" />
                </div>
                <!-- end of filter state -->
            </div>

            <div v-if="step === STEPS.ADS" class="p-4 bg-[#E0F8F5] h-full">
                <img src="/assets/img/sample/sample-ad.jpg" alt="Ads" />
            </div>

            <div v-if="step === STEPS.POST" class="p-4">
                <img :src="twibbonResult" alt="Twibbon" />
            </div>

            <!-- page bottom sheet -->
            <div
                ref="sheetEl"
                :class="['support-page__sheet', sheetFullyVisible && 'support-page__sheet--full']"
            >
                <Transition name="delay-fade">
                    <button
                        v-show="
                            !sheetFullyVisible && step === STEPS.TWIBBON && editState === 'crop'
                        "
                        class="watermark-banner"
                        @click="showPricingPlan"
                    >
                        <div class="watermark-banner__copy">
                            <div class="flex flex-col">
                                <div class="watermark-banner__title">Remove Watermark For You</div>
                                <span class="watermark-banner__desc"
                                    >Upgrade to Premium start from
                                    <span class="font-semibold">$2.99</span>/week
                                </span>
                            </div>
                        </div>

                        <div class="watermark-banner__cta">
                            <QSwitchToggle id="remove_watermark" name="remove_watermark" />
                        </div>
                    </button>
                </Transition>

                <Transition name="delay-fade">
                    <button
                        v-show="!sheetFullyVisible && step === STEPS.ADS"
                        class="watermark-banner"
                        @click="showPricingPlan"
                    >
                        <div class="watermark-banner__copy">
                            <div class="flex flex-col">
                                <p class="text-left font-medium text-sm">
                                    Skip the ads and download instantly!
                                </p>
                            </div>
                        </div>

                        <div class="watermark-banner__cta ml-2">
                            <QButton variant="black" size="sm">
                                <span class="text-xs">Upgrade Now</span>
                            </QButton>
                        </div>
                    </button>
                </Transition>

                <Transition name="sheet-fade">
                    <template v-if="sheetContent === 'upgrade'">
                        <PricingSheet :close="closeSheet" />
                    </template>
                </Transition>

                <Transition name="sheet-fade">
                    <template v-if="sheetContent === 'auth'">
                        <AuthUpgrade />
                    </template>
                </Transition>

                <Transition name="slide-down">
                    <div
                        v-show="step === STEPS.TWIBBON && !sheetFullyVisible"
                        class="support-page__actions"
                    >
                        <!-- footer for crop state -->
                        <div v-if="editState === 'crop'">
                            <div
                                v-if="photo"
                                class="flex items-center justify-between space-x-3 h-20 p-4"
                            >
                                <QButton
                                    variant="secondary"
                                    size="auto"
                                    circle
                                    @click="openInputPhoto"
                                >
                                    <i class="ri-camera-line ri-lg font-light"></i>
                                </QButton>
                                <QButton block @click="() => changeStep(STEPS.ADS)">Next</QButton>
                            </div>

                            <div
                                v-else
                                class="flex items-center justify-between space-x-3 h-20 p-4"
                            >
                                <QButton block @click="openInputPhoto">
                                    <span class="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="20"
                                            viewBox="0 0 21 20"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_2061_6507)">
                                                <path
                                                    d="M19.6663 15.8333C19.6663 16.2754 19.4907 16.6993 19.1782 17.0118C18.8656 17.3244 18.4417 17.5 17.9997 17.5H2.99967C2.55765 17.5 2.13372 17.3244 1.82116 17.0118C1.5086 16.6993 1.33301 16.2754 1.33301 15.8333V6.66667C1.33301 6.22464 1.5086 5.80072 1.82116 5.48816C2.13372 5.17559 2.55765 5 2.99967 5H6.33301L7.99967 2.5H12.9997L14.6663 5H17.9997C18.4417 5 18.8656 5.17559 19.1782 5.48816C19.4907 5.80072 19.6663 6.22464 19.6663 6.66667V15.8333Z"
                                                    stroke="#1B1B1B"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M10.5003 14.1669C12.3413 14.1669 13.8337 12.6745 13.8337 10.8336C13.8337 8.99263 12.3413 7.50024 10.5003 7.50024C8.65938 7.50024 7.16699 8.99263 7.16699 10.8336C7.16699 12.6745 8.65938 14.1669 10.5003 14.1669Z"
                                                    stroke="#1B1B1B"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2061_6507">
                                                    <rect
                                                        width="20"
                                                        height="20"
                                                        fill="white"
                                                        transform="translate(0.5)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span class="ml-2 font-semibold">Choose Your Photo</span>
                                    </span>
                                </QButton>
                            </div>
                        </div>

                        <!-- footer for text state -->
                        <div
                            v-if="editState === 'text'"
                            class="flex items-center p-4 border-t border-stroke bg-white"
                        >
                            <QButton variant="secondary" block class="mr-2" @click="addText">
                                <span>Add Text</span>
                            </QButton>
                            <QButton block @click="backToCropState"> Done </QButton>
                        </div>

                        <div
                            v-if="editState === 'filter'"
                            class="flex items-center p-4 border-t border-stroke bg-white"
                        >
                            <QButton variant="secondary" block class="mr-2" @click="resetFilter">
                                <i class="ri-refresh-line"></i>
                                <span class="ml-2">Reset</span>
                            </QButton>

                            <QButton block @click="backToCropState"> Done </QButton>
                        </div>
                    </div>
                </Transition>

                <div
                    v-if="step === STEPS.ADS"
                    :class="['ads-progress', sheetFullyVisible && 'ads-progress--hide']"
                >
                    <div class="ads-progress-loading">
                        <span class="ads-progress-loading__text">Processing Your Photo</span>
                    </div>
                </div>
            </div>
            <!-- end of page bottom sheet -->
        </div>

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
                        <QButton variant="subtle" @click="$router.back" block>
                            <span class="text-red-500">Discard</span>
                        </QButton>
                        <QButton @click="showConfirmDiscard = false" block>Keep Editing</QButton>
                    </div>
                </div>
            </QConfirmDialog>
        </Teleport>
    </div>
</template>

<style scoped lang="scss">
@keyframes progress {
    0% {
        clip-path: inset(0% 100% 0% 0%);
    }

    10% {
        clip-path: inset(0% 90% 0% 0%);
    }

    20% {
        clip-path: inset(0% 80% 0% 0%);
    }

    30% {
        clip-path: inset(0% 70% 0% 0%);
    }

    40% {
        clip-path: inset(0% 60% 0% 0%);
    }

    50% {
        clip-path: inset(0% 50% 0% 0%);
    }

    60% {
        clip-path: inset(0% 40% 0% 0%);
    }

    70% {
        clip-path: inset(0% 30% 0% 0%);
    }

    80% {
        clip-path: inset(0% 20% 0% 0%);
    }

    90% {
        clip-path: inset(0% 10% 0% 0%);
    }

    100% {
        clip-path: inset(0% 0% 0% 0%);
    }
}

.ads-progress {
    @apply flex items-center p-4 border-t border-stroke bg-white;

    &.ads-progress--hide {
        position: fixed;
        top: -100vh;
    }

    .ads-progress-loading {
        padding: 16px 20px;
        border-radius: 100px;
        background-color: #e0f8f5;
        @apply leading-none rounded-full w-full font-semibold border border-transparent overflow-hidden;
        display: block;

        @include before {
            @apply bg-main w-full h-full left-0 top-0 text-black flex items-center justify-center;
            animation: progress 7s ease-in-out forwards;
            z-index: 2;
            content: 'Processing Your Photo';
            clip-path: inset(0% 100% 0% 0%);
        }

        .ads-progress-loading__text {
            @apply text-content block text-center;
            position: relative;
            z-index: 1;
        }
    }
}

.canvas-wrapper {
    @include xs {
        max-height: 350px;
    }

    max-height: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;

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

.support-page {
    @apply fixed top-0 left-0 flex flex-col;
    z-index: 100;
    overflow-y: auto;
    width: 100vw;
    height: 100dvh;

    .support-page__backdrop {
        @apply absolute inset-0 bg-black/60;
        pointer-events: none;
    }

    .support-page__content {
        @apply bg-white relative flex flex-col overflow-hidden h-full w-full mx-auto;
        z-index: 101;
        max-width: 524px;

        @include md_screen {
            @apply m-auto rounded-xl;
            max-height: 98vh;
        }
    }

    .support-page__overlay {
        @apply absolute inset-0 bg-black/70;
        z-index: 102;
    }

    .support-page__header {
        @apply container flex items-center justify-between px-4 py-3 border-b border-stroke;
    }

    .support-page__main {
        position: relative;
        padding-bottom: v-bind(bodyPb);
        @apply flex-grow overflow-y-auto flex flex-col;
    }

    .support-page__sheet {
        @apply w-full bg-white overflow-hidden absolute bottom-0 rounded-t-2xl overflow-y-auto;
        z-index: 104;
        box-shadow: 0px 3px 8px 1px rgba(163, 163, 163, 1);
        -webkit-box-shadow: 0px 3px 8px 1px rgba(163, 163, 163, 1);
        -moz-box-shadow: 0px 3px 8px 1px rgba(163, 163, 163, 1);
        transition: all 300ms linear;
        max-height: 146px;
        height: fit-content;

        &.support-page__sheet--full {
            max-height: 98%;
        }
    }

    .support-page__actions {
        @apply sticky bottom-0 w-full bg-white;
    }
}

.support-page__tools {
    @apply px-4 flex flex-col space-y-3;

    @include md_screen {
        @apply flex-row space-x-3 space-y-0;
    }
}

.frame-selector {
    @apply flex items-center justify-center space-x-4 max-w-full px-4;
    @include no_scrollbar();

    .frame-selector__item {
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
}

.text-presets {
    @apply flex items-center space-x-3 flex-grow;
}

.watermark-banner {
    @apply flex items-center justify-between px-4 py-3 cursor-pointer w-full;
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
        text-align: left;

        @include xs {
            font-size: 13px;
        }

        @include md_screen {
            font-size: 15px;
        }
    }

    .watermark-banner__desc {
        font-size: 12px;
        text-align: left;

        @include xs {
            font-size: 10px;
        }

        @include md_screen {
            font-size: 13px;
        }
    }

    .watermark-banner__cta {
        @apply flex-shrink-0 ml-1;
        font-size: 24px;
    }
}

.preset-modifier-wrapper {
    @apply h-full py-4 flex items-center overflow-x-auto;

    @include no_scrollbar;
}
</style>
