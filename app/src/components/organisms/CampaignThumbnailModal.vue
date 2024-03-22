<script setup>
import { computed, markRaw, onMounted, ref, watch, shallowRef } from 'vue';

import {
    useResizeObserver,
    useBreakpoints,
    breakpointsTailwind,
    useWindowSize,
    useElementSize,
    useFileDialog,
    useObjectUrl,
    useElementVisibility,
    useDebounceFn
} from '@vueuse/core';
import { RadioGroup, RadioGroupOption, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import Editor from '@/libs/editor';
import QButton from '@/components/atoms/QButton.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import RangeSlider from '@/components/molecules/ThumbnailModal/RangeSlider.vue';
import CampaignCardPreview from '@/components/molecules/CampaignCardPreview.vue';
import { useModal } from '@/composables/modal';

const props = defineProps({
    frame: {
        type: String,
        required: true
    },
    creator: {
        type: Object,
        required: true
    },
    loading: {
        type: Boolean
    },
    handlePublish: {
        type: Function
    }
});

// responsiveness of the modal
const { update, close } = useModal();
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');
const modalEl = ref(null);
const { height: modalHeight } = useElementSize(modalEl);
const { height: windowSize } = useWindowSize();
const modalStyle = computed(() => {
    if (sm.value) {
        return {};
    }

    const targetScale = Math.min(1, modalHeight.value / windowSize.value);

    return {
        transform: `scale(${targetScale})`
    };
});

watch(sm, (newValue) => {
    update({ position: newValue ? 'bottom' : 'center' });
});

// cropper canvas
const cropperBody = ref(null);
const cropperIsVisible = useElementVisibility(cropperBody);
const canvasInner = ref(null);
const canvasEl = ref(null);
const editor = ref(null);
const thumbnailObjectUrl = ref(null);

const minScale = ref({ scaleX: 1, scaleY: 1 });
const zoom = ref(1);
const rotation = ref(0);

const onMouseWheel = (opt) => {
    const e = opt.e;

    e.preventDefault();
    e.stopPropagation();

    const { handler } = editor.value;
    const photo = handler.findByName('photo');

    const { scaleX, scaleY } = photo.getObjectScaling();

    if (photo) {
        const delta = -e.deltaY;
        const scalingFactor = 0.003; // Adjust this value to control the scaling sensitivity

        const newScaleX = scaleX + delta * scalingFactor;
        const newScaleY = scaleY + delta * scalingFactor;

        const minSc = 1;
        const maxSc = 5;

        const newScale = Math.min(Math.max(newScaleX, minSc), maxSc);
        modify('scale', newScale, photo);
    }
};

const modify = (changedKey, changedValue, target = null) => {
    const { handler } = editor.value;

    const targetObj = (target && handler.find(target)) || handler.canvas.getActiveObject();

    if (targetObj.name !== 'photo') {
        return;
    }

    if (changedKey === 'rotate') {
        handler.setObject({ rotate: changedValue }, targetObj);
        return;
    }

    if (changedKey === 'scale') {
        handler.setObject(
            { scaleX: parseFloat(changedValue), scaleY: parseFloat(changedValue) },
            targetObj
        );
        return;
    }

    handler.set(changedKey, changedValue, targetObj);
    targetObj.value[changedKey] = changedValue;
};

watch(zoom, (newValue) => {
    const { handler } = editor.value;
    const photoObj = handler.findByName('photo');

    // const currentScale =
    // let { scaleX, scaleY } = minScale.value;

    // scaleX = scaleX * newValue;
    // scaleY = scaleY * newValue;

    modify('scale', newValue, photoObj);
});

watch(rotation, (newValue) => {
    const { handler } = editor.value;
    const photoObj = handler.findByName('photo');

    modify('rotate', newValue, photoObj);
});

const canvasListeners = {
    onModified: useDebounceFn(async (target) => {
        const { handler } = editor.value;
        const { propertiesToInclude } = handler;
        const properties = target.toObject(propertiesToInclude);
        const { name, angle } = properties;

        const { scaleX } = target.getObjectScaling();

        if (name === 'photo') {
            zoom.value = scaleX;
            rotation.value = angle;
        }

        thumbnailObjectUrl.value = await handler.export();
    }, 300),
    onTransaction: async () => {
        const { handler } = editor.value;
        thumbnailObjectUrl.value = await handler.export();
    }
};

const insertFrame = async () => {
    const { handler } = editor.value;

    const obj = {
        src: props.frame,
        type: 'image',
        opt: {
            name: 'frame',
            lockMovementX: true,
            lockMovementY: true,
            locked: true,
            selectable: false,
            evented: false,
            hasControls: false,
            originX: 'center',
            originY: 'center'
        }
    };

    const createdObj = await handler.add(obj, true);
    handler.moveToIndex(createdObj, 2, false);
    handler.scaleTo('Width', handler.canvas.getWidth(), createdObj);
    handler.canvas.requestRenderAll();

    return createdObj;
};

const insertPhoto = async (src) => {
    const { handler } = editor.value;

    const existingPhoto = handler.findByName('photo');

    if (existingPhoto) {
        handler.remove(existingPhoto);
    }

    const obj = {
        src,
        type: 'image',
        opt: {
            name: 'photo',
            hasControls: false,
            hasBorders: false,
            evented: true,
            selectable: true,
            deleteable: true,
            originX: 'center',
            originY: 'center'
        }
    };

    const createdObj = await handler.add(obj, true);
    handler.moveToIndex(createdObj, 1, false);
    minScale.value = handler.scaleTo('Width', handler.canvas.getWidth(), createdObj);
    return createdObj;
};

useResizeObserver(canvasInner, (entries) => {
    const innerEl = entries[0];
    const { width, height } = innerEl.contentRect;
    editor.value.handler.eventHandler.resize(width, height);
    editor.value.handler.zoomHandler.zoomToFit();
});

// photo selector
const photos = ref([
    '/assets/img/avatars/for-thumbnail/1.jpg',
    '/assets/img/avatars/for-thumbnail/2.jpg',
    '/assets/img/avatars/for-thumbnail/3.jpg'
]);
const photoIdx = ref(0);

const { open, reset, onChange } = useFileDialog({
    accept: 'image/*', // Set to accept only image files
    directory: false,
    multiple: false
});

const uploadedFile = shallowRef(null);
const uploadedDataURL = useObjectUrl(uploadedFile);

onChange((files) => {
    if (files) {
        uploadedFile.value = files[0];
        photoIdx.value = 3; // choose the uploaded file
        return;
    }

    photoIdx.value = 2;
    uploadedFile.value = null;
});

watch(photoIdx, (newValue) => {
    // if is uploaded file
    if (newValue === 3) {
        insertPhoto(uploadedDataURL.value);
        return;
    }

    const newSrc = photos.value[newValue];

    insertPhoto(newSrc);
});

const adjustModal = ref(false);

const saveAdjustChanges = () => {
    const { handler } = editor.value;
    handler.transactionHandler.save('checkpoint');
    adjustModal.value = false;
};

const discardAdjustChanges = () => {
    const { handler } = editor.value;
    handler.transactionHandler.undo();
    adjustModal.value = false;
};

watch(adjustModal, (newValue) => {
    // handle transaction here
    const { handler } = editor.value;

    if (newValue) {
        handler.transactionHandler.save('checkpoint');
        handler.transactionHandler.deactivate();
        return;
    }

    handler.transactionHandler.activate();
});

onMounted(async () => {
    const keyEvent = {
        move: false,
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

    editor.value = markRaw(
        new Editor({
            keyEvent,
            mouseEvent,
            el: canvasEl.value,
            width: 1080,
            height: 1080,
            ...canvasListeners
        })
    );

    const { canvas } = editor.value.handler;
    canvas.on({
        'mouse:wheel': onMouseWheel
    });

    const photoSrc = photos.value[photoIdx.value];
    await insertPhoto(photoSrc);
    await insertFrame();
    // editor.value.handler.eventHandler.resize(200, 200);
});
</script>
<template>
    <div ref="modalEl" class="thumbnail-modal" :style="modalStyle">
        <Teleport to="body">
            <Dialog
                :open="adjustModal"
                as="div"
                @close="discardAdjustChanges"
                class="relative z-[300]"
                :unmount="false"
            >
                <Transition
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-black/90" />
                </Transition>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-2 md:p-4 text-center">
                        <Transition
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel class="cropper">
                                <div class="cropper__header">
                                    <DialogTitle
                                        as="h3"
                                        class="text-base md:text-lg font-semibold leading-6 text-gray-900"
                                    >
                                        Adjust Thumbnail
                                    </DialogTitle>

                                    <QButton
                                        variant="subtle"
                                        circle
                                        size="sm"
                                        @click="discardAdjustChanges"
                                    >
                                        <i class="ri ri-close-line ri-lg"></i>
                                    </QButton>
                                </div>
                                <div ref="cropperBody" class="cropper__body">
                                    <div class="cropper__canvas"></div>
                                    <div class="cropper__controls space-x-5">
                                        <div class="space-y-3 flex-grow">
                                            <label for="zoom" class="font-semibold">Zoom</label>
                                            <RangeSlider
                                                v-model="zoom"
                                                :min="1"
                                                :max="5"
                                                :step="0.1"
                                            />
                                        </div>

                                        <div class="space-y-3 flex-grow hidden md:block">
                                            <label for="rotate" class="font-semibold">Rotate</label>
                                            <RangeSlider
                                                v-model="rotation"
                                                :min="-180"
                                                :max="180"
                                                :step="1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="cropper__footer">
                                    <QButton
                                        variant="secondary"
                                        size="sm"
                                        @click="discardAdjustChanges"
                                    >
                                        <span class="px-2">Cancel</span>
                                    </QButton>
                                    <QButton variant="primary" size="sm" @click="saveAdjustChanges">
                                        <span class="px-2"> Done </span>
                                    </QButton>
                                </div>
                            </DialogPanel>
                        </Transition>
                    </div>
                </div>
            </Dialog>
        </Teleport>

        <Teleport to=".cropper__canvas" :disabled="!cropperIsVisible">
            <div class="cvs-wrapper">
                <div ref="canvasInner" class="cvs-inner">
                    <canvas ref="canvasEl" id="canvas"></canvas>
                </div>
            </div>
        </Teleport>

        <div class="preview-wrapper">
            <CampaignCardPreview
                v-if="thumbnailObjectUrl"
                title="Hanoi Art Book Fair 2025"
                :creator="creator"
                :thumbnail="thumbnailObjectUrl"
                link="twibbo.nz/hanoi-art-2025"
            />
        </div>

        <div class="thumbnail-modal__body">
            <div class="px-4 md:px-10">
                <div class="flex justify-center mt-4">
                    <QButton
                        variant="secondary"
                        size="sm"
                        @click="adjustModal = true"
                        :enabled="!loading"
                    >
                        <div class="flex px-1 py-0.5">
                            <i class="ri-crop-line"></i>
                            <span class="ml-2 font-normal">Adjust Thumbnail</span>
                        </div>
                    </QButton>
                </div>
                <div class="my-4 sm:my-6">
                    <QSeparator alignment="center">
                        <span class="select-cover tracking-widest"> SELECT COVER </span>
                    </QSeparator>
                </div>

                <RadioGroup v-model="photoIdx" :disabled="loading">
                    <div class="photo-selector pb-2">
                        <RadioGroupOption
                            as="template"
                            v-for="(photo, i) in photos"
                            :key="i"
                            :value="i"
                            v-slot="{ checked, active, disabled }"
                        >
                            <div
                                :class="[
                                    'photo-selector__item',
                                    (checked || active) && 'photo-selector__item--checked',
                                    disabled && 'disabled'
                                ]"
                            >
                                <img
                                    :src="photo"
                                    :alt="`photo ${i}`"
                                    class="photo-selector__item-img"
                                />
                            </div>
                        </RadioGroupOption>

                        <RadioGroupOption
                            v-if="uploadedDataURL"
                            as="template"
                            :value="3"
                            v-slot="{ checked }"
                        >
                            <div
                                :class="[
                                    'photo-selector__item',
                                    checked && 'photo-selector__item--checked'
                                ]"
                            >
                                <button class="photo-selector__item-remove" @click="reset">
                                    <span class="ri-delete-bin-line"></span>
                                </button>
                                <img
                                    :src="uploadedDataURL"
                                    alt="uploaded photo"
                                    class="photo-selector__item-img"
                                />
                            </div>
                        </RadioGroupOption>

                        <button
                            v-if="!uploadedDataURL"
                            class="photo-selector__upload"
                            @click="open"
                            :disabled="loading"
                        >
                            <div class="photo-selector__upload-inner">
                                <i class="ri-upload-line"></i>
                                <span class="text-xs font-semibold">Upload</span>
                            </div>
                        </button>
                    </div>
                </RadioGroup>

                <div class="flex flex-col pt-2 pb-4 space-y-2">
                    <QButton
                        variant="primary"
                        block
                        :enabled="!loading"
                        :loading="loading"
                        @click="() => handlePublish(thumbnailObjectUrl)"
                        size="md"
                    >
                        <span class="flex items-center"> Publish Now </span>
                    </QButton>
                    <QButton variant="subtle" block @click="close" :enabled="!loading"
                        >Go Back
                    </QButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.thumbnail-modal {
    transform-origin: center top;
    max-width: 412px;

    .thumbnail-modal__body {
        padding-top: 165px;
        @apply bg-white shadow-card w-full rounded-none;

        @include xs {
            padding-top: 150px;
        }

        @include md_screen {
            @apply rounded-xl;
        }
    }
}

.cropper {
    @apply w-full transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all;
    max-width: 744px;

    .cropper__header {
        @apply flex items-center justify-between px-4 md:px-6 py-4;
    }

    .cropper__body {
        @apply flex flex-col items-center justify-center;

        .cropper__canvas {
            @apply w-full;
        }

        .cropper__controls {
            @apply flex items-center px-4 md:px-6 py-4 w-full;
        }

        .cvs-wrapper {
            visibility: visible;
            pointer-events: unset;
            position: relative;
            left: unset;
            // max-height: 300px;
        }
    }

    .cropper__footer {
        @apply flex items-center justify-between px-4 md:px-6 py-4 border-t border-light;
    }
}

// canvas

.cvs-wrapper {
    // display: none;
    @apply bg-black w-full h-full px-4 md:px-6;
    visibility: hidden;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: -30000px;
    // height: 100%;
}

.cvs-inner {
    aspect-ratio: 1/1;
    max-width: 390px;
    max-height: 390px;
    position: relative;
    z-index: 0;
    overflow: hidden;
}

.preview-wrapper {
    margin-top: -165px;
    transform: translateY(50%);
}

// photo selector

.photo-selector {
    @apply flex items-center justify-between space-x-1;

    .photo-selector__item {
        @apply bg-white transition-colors aspect-square;
        height: 80px;
        width: 80px;
        border: 2px solid transparent;
        border-radius: 8px;
        padding: 4px;
        position: relative;

        @include xs {
            width: auto;
            height: auto;
        }

        &.photo-selector__item--checked {
            @apply border-black;
        }

        &.disabled {
            @apply opacity-30;
        }

        img.photo-selector__item-img {
            width: 100%;
            height: 100%;
            max-height: 100%;
            border-radius: 6px;
        }

        .photo-selector__item-remove {
            position: absolute;
            right: 0;
            top: 0;
            width: 24px;
            height: 24px;
            z-index: 10;
            transform: translate(35%, -35%);
            font-size: 12px;
            @apply bg-red-600 hover:bg-red-500 text-red-50 border border-red-50 rounded-full;
        }
    }

    .photo-selector__upload {
        height: 80px;
        width: 80px;
        // border: 2px solid transparent;
        // padding: 4px;x/
        @apply aspect-square;

        @include xs {
            width: 100%;
            height: 100%;
        }

        .photo-selector__upload-inner {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border: 1px dashed #d5dcdc;
            background-color: rgba(22, 218, 193, 0.04);

            border-radius: 6px;
            height: 100%;
            width: 100%;
        }

        &[disabled] {
            @apply opacity-40 pointer-events-none;
        }
    }
}

.select-cover {
    @include xs {
        @apply text-xs;
    }
}
</style>
