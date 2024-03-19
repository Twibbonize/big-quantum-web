<script setup>
import { computed, markRaw, onMounted, ref, watch } from 'vue';
import {
    useResizeObserver,
    useBreakpoints,
    breakpointsTailwind,
    useWindowSize,
    useElementSize
} from '@vueuse/core';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import Editor from '@/libs/editor';
import QButton from '@/components/atoms/QButton.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import QCreator from '@/components/atoms/QCreator.vue';
import CampaignMeta from '@/components/molecules/CampaignMeta.vue';
import { useModal } from '@/composables/modal';

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

// canvas
const canvasInner = ref(null);
const canvasEl = ref(null);
const editor = ref(null);

// photo selector
const photos = ref([
    '/assets/img/avatars/for-thumbnail/3.jpg',
    '/assets/img/avatars/for-thumbnail/2.jpg',
    '/assets/img/avatars/for-thumbnail/1.jpg'
]);
const photoIdx = ref(0);

useResizeObserver(canvasInner, (entries) => {
    const innerEl = entries[0];

    const { width, height } = innerEl.contentRect;
    editor.value.handler.eventHandler.resize(width, height);
    editor.value.handler.zoomHandler.zoomToFit();
});

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
    createdObj.scaleToWidth(handler.canvas.getWidth());
    handler.canvas.requestRenderAll();
};

const insertPhoto = async (src) => {
    const { handler } = editor.value;

    const obj = {
        src,
        type: 'image',
        opt: {
            name: 'photo',
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
    createdObj.scaleToWidth(handler.canvas.getWidth());
    handler.canvas.requestRenderAll();
};

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
        new Editor({ keyEvent, mouseEvent, el: canvasEl.value, width: 1080, height: 1080 })
    );

    const photoSrc = photos.value[photoIdx.value];
    await insertPhoto(photoSrc);

    await insertFrame();
    // editor.value.handler.eventHandler.resize(200, 200);
});
</script>
<template>
    <div ref="modalEl" class="thumbnail-modal" :style="modalStyle">
        <div class="preview">
            <div class="preview__cvs-wrapper">
                <div ref="canvasInner" class="preview__cvs-inner">
                    <canvas ref="canvasEl" id="preview__canvas"></canvas>
                </div>
            </div>

            <div class="preview__campaign-detail">
                <h3 class="preview__campaign-title">Hanoi Art Book Fair 2025</h3>

                <QCreator v-bind="creator" :clickable="false" />
            </div>

            <div class="preview__campaign-meta">
                <CampaignMeta title="Supporters" value="-">
                    <template #icon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            :width="16"
                            :height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M2.00016 14.6667C1.63197 14.6667 1.32913 14.3668 1.37459 14.0014C1.70207 11.3699 3.94663 9.33342 6.66683 9.33342C9.38705 9.33342 11.6316 11.3699 11.9591 14.0014C12.0045 14.3668 11.7017 14.6667 11.3335 14.6667C10.9653 14.6667 10.6727 14.366 10.612 14.0029C10.2958 12.1097 8.6498 10.6667 6.66683 10.6667C4.68386 10.6667 3.0379 12.1097 2.72167 14.0029C2.66101 14.366 2.36835 14.6667 2.00016 14.6667ZM6.66683 8.66675C4.45683 8.66675 2.66683 6.87675 2.66683 4.66675C2.66683 2.45675 4.45683 0.666748 6.66683 0.666748C8.87683 0.666748 10.6668 2.45675 10.6668 4.66675C10.6668 6.87675 8.87683 8.66675 6.66683 8.66675ZM6.66683 7.33342C8.14016 7.33342 9.3335 6.14008 9.3335 4.66675C9.3335 3.19341 8.14016 2.00008 6.66683 2.00008C5.1935 2.00008 4.00016 3.19341 4.00016 4.66675C4.00016 6.14008 5.1935 7.33342 6.66683 7.33342ZM11.9155 10.4104C12.0667 10.0744 12.4646 9.92134 12.7789 10.1136C14.132 10.9411 15.0876 12.3549 15.2924 14.0016C15.3379 14.367 15.035 14.6667 14.6668 14.6667C14.2986 14.6667 14.006 14.3661 13.9453 14.003C13.7604 12.8955 13.1203 11.942 12.224 11.3414C11.9182 11.1365 11.7644 10.7461 11.9155 10.4104ZM11.5191 3.01714C11.632 2.62181 12.069 2.40958 12.4078 2.6424C13.3697 3.30317 14.0002 4.41099 14.0002 5.66675C14.0002 7.3214 12.9055 8.71921 11.4005 9.17589C11.0158 9.29264 10.6668 8.97201 10.6668 8.5699C10.6668 8.2294 10.9234 7.95066 11.2373 7.81875C12.0773 7.46576 12.6668 6.63541 12.6668 5.66675C12.6668 4.95265 12.3464 4.31371 11.8415 3.88579C11.5871 3.67024 11.4275 3.33772 11.5191 3.01714Z"
                                fill="currentColor"
                            />
                        </svg>
                    </template>
                </CampaignMeta>
                <CampaignMeta
                    :iconClass="['ri', 'ri-time-line'].join(' ')"
                    title="Created"
                    value="-"
                />
            </div>
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
                        <RadioGroupOption
                            as="template"
                            v-for="(photo, i) in photos"
                            :key="i"
                            :value="i"
                            v-slot="{ checked }"
                        >
                            <div
                                :class="[
                                    'photo-selector__item',
                                    checked && 'photo-selector__item--checked'
                                ]"
                            >
                                <img
                                    :src="photo"
                                    :alt="`photo ${i}`"
                                    class="photo-selector__item-img"
                                />
                            </div>
                        </RadioGroupOption>

                        <button class="photo-selector__upload">
                            <div class="photo-selector__upload-inner">
                                <i class="ri-upload-line"></i>
                                <span class="text-xs ml-1 font-semibold">Upload</span>
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

.preview {
    max-width: 220px;
    padding: 10px 10px 12px;
    margin: 0 auto;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin-top: -165px;
    transform: translateY(50%);
    @apply bg-white;

    .preview__cvs-wrapper {
        border-radius: 12px;
        overflow: hidden;
    }

    .preview__cvs-inner {
        max-width: 200px;
        max-height: 200px;
        height: 100%;
        width: 100%;
    }

    // preview campaign details
    .preview__campaign-detail {
        @apply space-y-1;
        margin: 10px 0 8px;
    }

    .preview__campaign-title {
        @apply text-lg font-bold w-full;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    // preview campaign meta
    .preview__campaign-meta {
        @apply border-t border-black/10 flex items-center space-x-3 pt-2;
    }
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
        overflow: hidden;

        &.photo-selector__item--checked {
            @apply border-black;
        }

        img.photo-selector__item-img {
            width: 100%;
            height: 100%;
            max-height: 100%;
            border-radius: 6px;
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
