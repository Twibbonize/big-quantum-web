<script setup>
import QModal from '@/components/atoms/QModal.vue';
import QButton from '@/components/atoms/QButton.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import { useShareStore } from '@/stores/shareStore';
import { storeToRefs } from 'pinia';

const shareStore = useShareStore();
const { open, link, thumbnail, type } = storeToRefs(shareStore);
const { closeShare } = shareStore;
</script>
<template>
    <QModal :show="open" @close="closeShare">
        <template #body>
            <div :class="['share-modal', `share-modal--${type}`]">
                <div class="share-modal__header">
                    <img :src="thumbnail" class="share-modal__thumbnail" alt="share" />

                    <div class="share-modal__close">
                        <QButton variant="subtle" size="sm" square @click="closeShare">
                            <i class="ri-close-fill ri-xl"></i>
                        </QButton>
                    </div>
                </div>
                <div class="share-modal__body">
                    <div class="space-y-6 flex flex-col items-center justify-center">
                        <h3 class="share-modal__title">Share to your social media</h3>

                        <div class="share-modal__buttons flex items-center space-x-3">
                            <QButton circle size="lg" variant="facebook">
                                <i class="ri-facebook-circle-fill ri-2x"></i>
                            </QButton>

                            <QButton circle size="lg" variant="twitter">
                                <i class="ri-twitter-x-line ri-2x"></i>
                            </QButton>
                        </div>

                        <QSeparator alignment="center"> or copy link </QSeparator>

                        <div class="share-modal__copy w-full">
                            <span>https://{{ link }}</span>
                            <button class="share-modal__copy-btn">Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </QModal>
</template>

<style scoped lang="scss">
.share-modal {
    .share-modal__header {
        @apply p-10 bg-gray-100 flex items-center justify-center border-b border-stroke relative;
    }

    .share-modal__thumbnail {
        @apply rounded-full max-h-28;
    }

    .share-modal__close {
        @apply absolute right-5 top-5;
    }

    .share-modal__body {
        @apply py-8 px-10;
    }

    .share-modal__title {
        @apply font-semibold text-xl text-center;
    }

    .share-modal__footer {
        @apply px-10 py-3 border-t border-stroke;
    }

    .share-modal__copy {
        @apply bg-white px-3 py-2 text-sm rounded-lg border border-stroke relative;

        .share-modal__copy-btn {
            @apply absolute top-0 rounded-r-lg right-0 h-full flex items-center px-3 bg-gray-100 border-l border-stroke text-xs font-semibold tracking-normal;
        }
    }
}
</style>
