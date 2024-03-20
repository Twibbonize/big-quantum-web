<script setup>
import { computed, markRaw, onMounted, ref, watch, shallowRef } from 'vue';
import {
    useResizeObserver,
    useBreakpoints,
    breakpointsTailwind,
    useWindowSize,
    useElementSize,
    useFileDialog,
    useObjectUrl
} from '@vueuse/core';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import Editor from '@/libs/editor';
import QButton from '@/components/atoms/QButton.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
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

    // console.log(modalHeight.value, windowSize.value)

    const targetScale = Math.min(1, modalHeight.value / windowSize.value);

    return {
        transform: `scale(${targetScale})`
    };
});

watch(sm, (newValue) => {
    update({ position: newValue ? 'bottom' : 'center' });
});

// canvas
// const canvasInner = ref(null);
const canvasEl = ref(null);
const editor = ref(null);
const thumbnailObjectUrl = ref(null);

const canvasListeners = {
    onAdd: async () => {
        const { handler } = editor.value;
        thumbnailObjectUrl.value = await handler.export();
    },
    onModified: async () => {
        const { handler } = editor.value;
        thumbnailObjectUrl.value = await handler.export();
    }
}

// useResizeObserver(canvasInner, (entries) => {
//     const innerEl = entries[0];

//     const { width, height } = innerEl.contentRect;
//     editor.value.handler.eventHandler.resize(width, height);
//     editor.value.handler.zoomHandler.zoomToFit();
// });

const insertFrame = async () => {
    const { handler } = editor.value;

    const obj = {
        src: props.frame,
        type: 'image',
        opt: {
            name: 'frame',
            hasControls: false,
            hasBorders: false,
            evented: false,
            selectable: false,
            deleteable: false,
            originX: 'center',
            originY: 'center'
        }
    };

    const createdObj = await handler.add(obj, true);

    handler.moveToIndex(createdObj, 2, false);
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
            evented: false,
            selectable: false,
            deleteable: true,
            originX: 'center',
            originY: 'center'
        }
    };

    const createdObj = await handler.add(obj, true);
    handler.moveToIndex(createdObj, 1, false);
    handler.scaleTo('Width', handler.canvas.getWidth(), createdObj);

    // createdObj.scaleToWidth(handler.canvas.getWidth());

    // canvasListeners.onModified(createdObj);
    // console.log(handler);
    return createdObj;
};

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
        new Editor({ keyEvent, mouseEvent, el: canvasEl.value, width: 1080, height: 1080, ...canvasListeners })
    );

    const photoSrc = photos.value[photoIdx.value];
    await insertPhoto(photoSrc);
    await insertFrame();
    // editor.value.handler.eventHandler.resize(200, 200);
});
</script>
<template>
    <div ref="modalEl" class="thumbnail-modal" :style="modalStyle">
        <div class="canvas-wrapper">
            <canvas ref="canvasEl" id="canvas"></canvas>
        </div>


        <div class="preview-wrapper">
            <CampaignCardPreview v-if="thumbnailObjectUrl" title="Hanoi Art Book Fair 2025" :creator="creator" :thumbnail="thumbnailObjectUrl" link="twibbo.nz/hanoi-art-2025" />
        </div>

        <div class="thumbnail-modal__body">
            <div class="px-10">
                <div class="flex justify-center mt-4">
                    <QButton variant="secondary" size="sm">
                        <div class="flex px-1 py-0.5">
                            <i class="ri-crop-line"></i>
                            <span class="ml-2 font-normal">Adjust Thumbnail</span>
                        </div>
                    </QButton>
                </div>
                <div class="my-6">
                    <QSeparator alignment="center">
                        <span class="tracking-widest"> SELECT COVER </span>
                    </QSeparator>
                </div>

                <RadioGroup v-model="photoIdx">
                    <div class="photo-selector pb-2">
                        <RadioGroupOption as="template" v-for="(photo, i) in photos" :key="i" :value="i"
                            v-slot="{ checked, active }">
                            <div :class="[
                                'photo-selector__item',
                                (checked || active) && 'photo-selector__item--checked'
                            ]">
                                <img :src="photo" :alt="`photo ${i}`" class="photo-selector__item-img" />
                            </div>
                        </RadioGroupOption>

                        <RadioGroupOption v-if="uploadedDataURL" as="template" :value="3" v-slot="{ checked }">
                            <div :class="['photo-selector__item', checked && 'photo-selector__item--checked']">
                                <button class="photo-selector__item-remove" @click="reset">
                                    <span class="ri-delete-bin-line"></span>
                                </button>
                                <img :src="uploadedDataURL" alt="uploaded photo" class="photo-selector__item-img" />
                            </div>
                        </RadioGroupOption>

                        <button v-if="!uploadedDataURL" class="photo-selector__upload" @click="open">
                            <div class="photo-selector__upload-inner">
                                <i class="ri-upload-line"></i>
                                <span class="text-xs font-semibold">Upload</span>
                            </div>
                        </button>
                    </div>
                </RadioGroup>

                <div class="flex flex-col pt-2 pb-4 space-y-2">
                    <QButton variant="primary" block>Publish Now</QButton>
                    <QButton variant="subtle" block>Go Back</QButton>
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

        @include md_screen {
            @apply rounded-xl;
        }
    }
}

.canvas-wrapper {
    display: none;
    pointer-events: none;
}


.preview-wrapper {
    margin-top: -165px;
    transform: translateY(50%);
}
// photo selector

.photo-selector {
    @apply flex items-center justify-between;

    .photo-selector__item {
        @apply bg-white transition-colors;
        height: 80px;
        width: 80px;
        border: 2px solid transparent;
        border-radius: 8px;
        padding: 4px;
        position: relative;

        &.photo-selector__item--checked {
            @apply border-black;
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
        padding: 4px;
        border: 2px solid transparent;

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
    }
}
</style>
