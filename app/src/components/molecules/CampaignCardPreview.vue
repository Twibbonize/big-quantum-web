<script setup>
import QCreator from '@/components/atoms/QCreator.vue';
import CampaignMeta from '@/components/molecules/CampaignMeta.vue';

defineProps({
    creator: {
        type: Object,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    uri: {
        type: String
    }
});
</script>

<template>
    <div class="preview">
        <div class="preview__thumbnail-wrapper">
            <div ref="canvasInner" class="preview__thumbnail-inner">
                <img :src="thumbnail" id="preview__thumbnail" />
            </div>
        </div>

        <div class="preview__campaign-detail">
            <h3 class="preview__campaign-title">{{ title }}</h3>
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
            <CampaignMeta :iconClass="['ri', 'ri-time-line'].join(' ')" title="Created" value="-" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.preview {
    max-width: 220px;
    padding: 10px 10px 12px;
    margin: 0 auto;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    @apply bg-white;

    .preview__thumbnail-wrapper {
        border-radius: 12px;
        overflow: hidden;
    }

    .preview__thumbnail-inner {
        max-width: 200px;
        max-height: 200px;
        height: 100%;
        width: 100%;

        img {
            pointer-events: none;
        }
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
</style>
