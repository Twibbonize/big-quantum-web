<script setup>
import { computed, watch } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import QButton from '@/components/atoms/QButton.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import QCollectionThumbnail from '@/components/atoms/QCollectionThumbnail.vue';
import { useModal } from '@/composables/modal';

const props = defineProps({
    link: {
        type: String
    },
    payload: {
        type: Object
    },
    type: {
        type: String
    }
});

const { close, update } = useModal();
const toast = useToast();

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

watch(sm, (newValue) => {
    update({ position: newValue ? 'bottom' : 'center' });
});

const onClickCopyURL = () => {
    const textToCopy = document.querySelector('.share-modal__copy-url');
    const range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges(); // Clear previous selection
    window.getSelection().addRange(range); // To select text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // To deselect

    toast.open({
        type: 'success',
        message: 'Link copied to clipboard',
        position: 'bottom'
    });
};

const thumbnail = computed(() => {
    const { payload, type } = props;

    if (type === 'profile' || type === 'post') {
        return payload.avatar;
    } else if (type === 'campaign') {
        return payload.thumbnail;
    }

    return null;
});
</script>
<template>
    <div :class="['share-modal', `share-modal--${type}`]">
        <div v-if="type !== 'collection'" class="share-modal__header">
            <img :src="thumbnail" class="share-modal__thumbnail" alt="share" />

            <div
                v-if="['profile', 'post'].includes(type)"
                class="share-modal__creator text-center mt-3"
            >
                <div class="text-xl font-semibold">{{ payload.name }}</div>
                <div class="text-content">
                    <span v-if="type === 'post'">by</span>
                    @{{ payload.username }}
                </div>
            </div>

            <div class="share-modal__close">
                <QButton variant="subtle" size="sm" square @click="close">
                    <i class="ri-close-fill ri-xl"></i>
                </QButton>
            </div>
        </div>

        <div v-else class="share-modal__header">
            <div class="h-32 md:h-40 flex items-center justify-center rounded-lg overflow-hidden">
                <QCollectionThumbnail :thumbnails="payload.thumbnails" />
            </div>
            <div class="mt-3">
                <div class="text-lg md:text-xl font-semibold text-center">
                    {{ payload.name }}
                </div>
            </div>

            <div class="share-modal__close">
                <QButton variant="subtle" size="sm" square @click="close">
                    <i class="ri-close-fill ri-xl"></i>
                </QButton>
            </div>
        </div>

        <div class="share-modal__body">
            <div class="space-y-6 flex flex-col items-center justify-center">
                <h3 class="share-modal__title">Share to your social media</h3>

                <div class="share-modal__buttons flex items-center space-x-3">
                    <QButton circle size="lg" variant="facebook">
                        <img
                            src="/assets/img/logos/facebook.svg"
                            class="w-full h-full"
                            alt="Facebook Logo"
                        />
                    </QButton>

                    <QButton circle size="lg" variant="twitter">
                        <img src="/assets/img/logos/x.svg" class="w-6 h-6" alt="Facebook Logo" />
                    </QButton>
                </div>

                <QSeparator alignment="center"> or copy link </QSeparator>

                <div class="share-modal__copy w-full">
                    <span class="share-modal__copy-url">{{ link }}</span>
                    <div class="share-modal__copy-action">
                        <button class="share-modal__copy-btn" @click="onClickCopyURL">Copy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.share-modal {
    .share-modal__header {
        @apply py-8 px-5 bg-gray-100 flex flex-col items-center justify-center border-b border-stroke relative rounded-t-3xl;

        @include md_screen {
            @apply p-10;
        }
    }

    .share-modal__thumbnail {
        @apply rounded-xl max-h-28;

        @include sm {
            @apply max-h-16;
        }
    }

    &.share-modal--profile .share-modal__thumbnail {
        @apply rounded-full;
    }

    &.share-modal--campaign .share-modal__thumbnail {
        @apply max-h-44;
    }

    .share-modal__close {
        @apply absolute right-5 top-5;
    }

    .share-modal__body {
        @apply py-8 px-5;

        @include md_screen {
            @apply px-10;
        }
    }

    .share-modal__title {
        @apply font-semibold text-xl text-center;
    }

    .share-modal__footer {
        @apply px-10 py-3 border-t border-stroke;
    }

    .share-modal__copy {
        @apply bg-white px-3 py-2 text-sm rounded-lg border border-stroke relative;

        .share-modal__copy-action {
            @apply absolute top-0 right-0 h-full;
        }

        .share-modal__copy-btn {
            @apply rounded-r-md h-full flex items-center px-3 bg-gray-100 border-l border-stroke text-xs font-semibold tracking-normal overflow-hidden;

            @include before {
                height: 0;
                width: 0;
                border-radius: 100%;
                @apply bg-black;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.2s var(--transition-function);
                opacity: 0.1;
            }

            &:hover {
                @include before {
                    height: 20rem;
                    width: 20rem;
                }
            }
        }
    }
}
</style>

<style>
.v-toast__item.v-toast__item--success .v-toast__icon {
    background: url(/assets/img/icons/success.svg) no-repeat;
}
</style>
