<script setup>
import QCard from '@/components/atoms/QCard.vue';
import QButton from '@/components/atoms/QButton.vue';
import { abbreviateNumber } from '@/utils/numbers';
import { RouterLink } from 'vue-router';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { onClickOutside } from '@vueuse/core';
import { useShareStore } from '@/stores/shareStore';
import { useCollectionStore } from '@/stores/collectionStore';
import { ref } from 'vue';

const props = defineProps({
    campaignCreator: {
        type: Object,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    uuid: {
        type: String
    },
    thumbnail: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    hit: {
        type: Number,
        required: true
    },
    actions: {
        type: Boolean,
        default: false
    },
    deleteAble: {
        type: Boolean,
        default: false
    }
});

const campaignCardEl = ref(null);

const isPopoverOpen = ref(false);
const isMobilePopoverOpen = ref(false);

const shareStore = useShareStore();
const collectionStore = useCollectionStore();
const { showCollectionModal } = collectionStore;
const { openShare } = shareStore;

onClickOutside(campaignCardEl, () => {
    isPopoverOpen.value = false;
    isMobilePopoverOpen.value = false;
});

const onClickShare = () => {
    const { url, thumbnail } = props;
    openShare(url, { thumbnail }, 'campaign');
};

const onClickCollection = () => {
    const { name, thumbnail } = props;
    showCollectionModal({ name, thumbnail });
};
</script>

<template>
    <RouterLink :to="{ name: 'campaign' }">
        <div ref="campaignCardEl" @mouseleave="isPopoverOpen = false">
            <QCard class="campaign">
                <figure class="campaign__thumbnail">
                    <img :src="thumbnail" class="campaign__thumbnail__img" />
                    <div class="campaign__thumbnail__overlay">
                        <div class="campaign__thumbnail__actions">
                            <QButton circle variant="action" size="sm" @click="onClickCollection">
                                <i class="ri-bookmark-line ri-lg"></i>
                            </QButton>

                            <Popover class="relative">
                                <QButton circle variant="action" size="sm">
                                    <PopoverButton
                                        as="span"
                                        class="h-full w-full flex items-center justify-center"
                                        @click="isPopoverOpen = !isPopoverOpen"
                                    >
                                        <i class="ri-more-line ri-lg"></i>
                                    </PopoverButton>
                                </QButton>

                                <transition
                                    enter-active-class="transition duration-200 ease-out"
                                    enter-from-class="translate-y-1 opacity-0"
                                    enter-to-class="translate-y-0 opacity-100"
                                    leave-active-class="transition duration-150 ease-in"
                                    leave-from-class="translate-y-0 opacity-100"
                                    leave-to-class="translate-y-1 opacity-0"
                                >
                                    <div v-if="isPopoverOpen">
                                        <PopoverPanel static class="popover__panel">
                                            <ul class="menu">
                                                <li class="menu__item">
                                                    <a
                                                        v-if="deleteAble"
                                                        class="menu__link text-red-500"
                                                        @click.prevent="console.log('delete')"
                                                    >
                                                        <i class="ri-delete-bin-7-line"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                    <a
                                                        v-else
                                                        class="menu__link text-black"
                                                        @click.prevent="console.log('delete')"
                                                    >
                                                        <i class="ri-flag-line"></i>
                                                        <span>Report</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </PopoverPanel>
                                    </div>
                                </transition>
                            </Popover>
                        </div>
                        <QButton
                            size="sm"
                            variant="primary"
                            @click="$router.push({ name: 'campaign' })"
                        >
                            View
                        </QButton>
                    </div>
                </figure>
                <h3 class="campaign__title">
                    {{ name }}
                </h3>
                <div class="campaign__creator">
                    <img :src="campaignCreator.avatar" class="campaign__creator__avatar" />
                    <RouterLink :to="{ name: 'profile' }" class="campaign__creator__name">
                        {{ campaignCreator.name }}
                    </RouterLink>
                </div>

                <div class="campaign__meta">
                    <div class="meta">
                        <div class="meta__icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M2.00016 14.6667C1.63197 14.6667 1.32913 14.3668 1.37459 14.0014C1.70207 11.3699 3.94663 9.33342 6.66683 9.33342C9.38705 9.33342 11.6316 11.3699 11.9591 14.0014C12.0045 14.3668 11.7017 14.6667 11.3335 14.6667C10.9653 14.6667 10.6727 14.366 10.612 14.0029C10.2958 12.1097 8.6498 10.6667 6.66683 10.6667C4.68386 10.6667 3.0379 12.1097 2.72167 14.0029C2.66101 14.366 2.36835 14.6667 2.00016 14.6667ZM6.66683 8.66675C4.45683 8.66675 2.66683 6.87675 2.66683 4.66675C2.66683 2.45675 4.45683 0.666748 6.66683 0.666748C8.87683 0.666748 10.6668 2.45675 10.6668 4.66675C10.6668 6.87675 8.87683 8.66675 6.66683 8.66675ZM6.66683 7.33342C8.14016 7.33342 9.3335 6.14008 9.3335 4.66675C9.3335 3.19341 8.14016 2.00008 6.66683 2.00008C5.1935 2.00008 4.00016 3.19341 4.00016 4.66675C4.00016 6.14008 5.1935 7.33342 6.66683 7.33342ZM11.9155 10.4104C12.0667 10.0744 12.4646 9.92134 12.7789 10.1136C14.132 10.9411 15.0876 12.3549 15.2924 14.0016C15.3379 14.367 15.035 14.6667 14.6668 14.6667C14.2986 14.6667 14.006 14.3661 13.9453 14.003C13.7604 12.8955 13.1203 11.942 12.224 11.3414C11.9182 11.1365 11.7644 10.7461 11.9155 10.4104ZM11.5191 3.01714C11.632 2.62181 12.069 2.40958 12.4078 2.6424C13.3697 3.30317 14.0002 4.41099 14.0002 5.66675C14.0002 7.3214 12.9055 8.71921 11.4005 9.17589C11.0158 9.29264 10.6668 8.97201 10.6668 8.5699C10.6668 8.2294 10.9234 7.95066 11.2373 7.81875C12.0773 7.46576 12.6668 6.63541 12.6668 5.66675C12.6668 4.95265 12.3464 4.31371 11.8415 3.88579C11.5871 3.67024 11.4275 3.33772 11.5191 3.01714Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div class="meta__copy">
                            <div class="meta__title">Supporters</div>
                            <div class="meta__value">
                                {{ abbreviateNumber(hit) }}
                                <span class="md:hidden">Supporters</span>
                            </div>
                        </div>
                    </div>
                    <div class="meta">
                        <div class="meta__icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                            >
                                <path
                                    d="M8.39979 14.9055C4.30652 14.9055 0.988281 11.5873 0.988281 7.49403C0.988281 3.40076 4.30652 0.0825195 8.39979 0.0825195C12.493 0.0825195 15.8113 3.40076 15.8113 7.49403C15.8113 11.5873 12.493 14.9055 8.39979 14.9055ZM8.39979 13.4232C11.6744 13.4232 14.329 10.7687 14.329 7.49403C14.329 4.21942 11.6744 1.56482 8.39979 1.56482C5.12518 1.56482 2.47058 4.21942 2.47058 7.49403C2.47058 10.7687 5.12518 13.4232 8.39979 13.4232ZM9.14094 7.49403H11.3644C11.7737 7.49403 12.1055 7.82585 12.1055 8.23518C12.1055 8.6445 11.7737 8.97633 11.3644 8.97633H8.39979C7.99046 8.97633 7.65864 8.6445 7.65864 8.23518V4.52942C7.65864 4.1201 7.99046 3.78827 8.39979 3.78827C8.80911 3.78827 9.14094 4.1201 9.14094 4.52942V7.49403Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div class="meta__copy">
                            <div class="meta__title">Created</div>

                            <div class="meta__value">
                                {{ createdAt }}
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="actions" class="campaign__actions">
                    <div class="flex-grow flex-shrink-0 w-full md:w-fit">
                        <QButton variant="secondary" block size="sm">
                            <i class="ri-pencil-line"></i>
                            <span class="ml-1 text-xs sm:text-sm">Edit</span>
                        </QButton>
                    </div>

                    <div class="hidden md:block">
                        <QButton circle variant="secondary" size="sm" @click="onClickShare">
                            <i class="ri-share-line"></i>
                        </QButton>
                    </div>
                </div>
            </QCard>
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
.campaign {
    @apply transition-all duration-300 ease-in-out cursor-pointer space-y-3;

    &__thumbnail {
        @apply w-full aspect-square overflow-hidden relative;
        border-radius: 14px;

        &__img {
            @apply absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 ease-in-out;
        }

        &__overlay {
            @apply absolute inset-0 h-full w-full bg-black/10 z-10 opacity-0 flex items-center justify-center transition-opacity duration-300;
        }

        &__actions {
            @apply absolute right-2 top-2 flex items-center text-white;

            @include sm_screen {
                display: none;
            }
        }

        @include before {
            height: 88px;
            width: 100%;
            opacity: 0;
            background: linear-gradient(180deg, #282828 0%, rgba(0, 0, 0, 0) 100%);
            z-index: 10;

            @include sm_screen {
                display: none;
            }
        }
    }

    &:hover {
        transform: translateY(-10px);
    }

    &:hover &__thumbnail__img {
        transform: scale(1.1);
    }

    &:hover &__thumbnail__overlay,
    &:hover .campaign__thumbnail::before {
        @apply opacity-100;
        opacity: 100;
    }

    &__title {
        @apply text-lg font-bold w-full;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @include sm_screen {
            @apply text-base;
        }
    }

    &__creator {
        @apply flex items-center space-x-2;

        &__avatar {
            @apply h-6 w-6 rounded-full border border-stroke;
        }

        &__name {
            @apply text-base font-medium flex-grow-0 hover:underline;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @include sm_screen {
                @apply text-sm;
            }
        }
    }

    &__meta {
        @apply border-t border-black/10 flex flex-col space-y-2 pt-2.5;

        @include md_screen {
            @apply flex-row items-center space-x-3.5 space-y-0;
        }
    }

    .campaign__actions {
        @apply flex items-center space-x-1;

        @include sm_screen {
            @apply flex-col space-y-1 space-x-0;
        }
    }

    .meta {
        @apply flex items-center space-x-1;

        @include md_screen {
            @apply space-x-2;
        }

        .meta__icon i,
        .meta__icon svg {
            @apply text-black;
        }

        .meta__copy {
            @apply h-full;

            @include sm {
                @apply flex-grow w-0;
            }
        }

        .meta__title {
            @apply font-medium hidden leading-none;
            font-size: 12px;

            @include md_screen {
                @apply block;
            }
        }

        .meta__value {
            @apply text-sm text-black/50 font-medium w-full;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @include sm {
                @apply text-xs;
            }
        }
    }
}

.button-group {
    @apply relative items-center align-middle;

    button {
        height: 38px;
        @apply text-black bg-white border-y border-r border-stroke transition-colors duration-300 flex-grow;

        &:first-of-type {
            @apply rounded-l-full border-l;
        }

        &:last-of-type {
            @apply rounded-r-full;
        }
    }
}
.campaign-btn {
    // width: 45px;
    height: 38px;
    @apply text-black bg-white border border-stroke transition-colors duration-300 flex-grow px-2 rounded-xl;
}

.popover {
    @apply relative;

    &__panel {
        @apply absolute right-0 top-auto mt-2 z-30 bg-white shadow rounded-lg overflow-hidden;
    }

    &__panel.popover__panel--top {
        @apply bottom-12 left-auto;
        top: unset;
    }
}

.menu {
    @apply space-y-1 w-full p-1;

    .menu__link {
        @apply p-2 flex items-center space-x-2 text-sm rounded-lg transition-colors font-medium duration-200 cursor-pointer;

        &:hover {
            @apply bg-black/10;
        }
    }
}
</style>
