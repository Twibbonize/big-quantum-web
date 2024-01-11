<script setup>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { computed, onMounted } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QButton from '@/components/atoms/QButton.vue';
import QShareButton from '@/components/atoms/QShareButton.vue';
import CampaignCard from '@/components/molecules/CampaignCard.vue';
import { getAvatarUrl } from '@/utils/urls.js';
import { useShareStore } from '@/stores/shareStore';

dayjs.extend(relativeTime);

const campaigns = computed(() => {
    const samples = [
        {
            name: 'Purple and White Modern Happy Birthday',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 85500,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: '/assets/img/campaigns/campaign-hbd-1.jpg'
        },
        {
            name: 'Blue White Happy Birthday',
            campaignCreator: {
                name: 'Eleanor Pena',
                avatar: 'sample-avatar-7.jpg'
            },
            hit: 1470,
            createdAt: dayjs().subtract(3, 'week').fromNow(),
            thumbnail: '/assets/img/campaigns/campaign-hbd-2.jpg'
        },
        {
            name: 'Pink Colourful Happy Birthday',
            campaignCreator: {
                name: 'Albert Forest',
                avatar: 'sample-avatar-5.jpg'
            },
            hit: 15100,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: '/assets/img/campaigns/campaign-hbd-3.jpg'
        },
        {
            name: 'Water Colour Outer Space Happy Birthday',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 85500,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: '/assets/img/campaigns/campaign-hbd-4.webp'
        }
    ];

    return samples.map(({ thumbnail, campaignCreator, ...other }) => {
        const { name, avatar } = campaignCreator;
        return {
            ...other,
            thumbnail,
            campaignCreator: {
                name,
                avatar: getAvatarUrl(avatar)
            }
        };
    });
});

const shareStore = useShareStore();
const { openShare } = shareStore;

const thumbnails = computed(() => {
    return campaigns ? campaigns.value.map(({ thumbnail }) => thumbnail) : [];
});
</script>

<template>
    <LayoutMain>
        <div class="page collection">
            <div class="collection__upper">
                <div
                    class="container px-5 lg:px-0 flex flex-col md:flex-row justify-center border-b border-stroke pb-6 md:pb-10"
                >
                    <div class="space-y-6">
                        <div class="space-y-3">
                            <div class="collection__creator flex items-center justify-center">
                                <div class="text-sm">Collected by</div>
                                <div class="creator">
                                    <img
                                        src="/assets/img/sample/sample-avatar-1.jpg"
                                        class="creator__avatar"
                                    />
                                    <RouterLink :to="{ name: 'profile' }" class="creator__name">
                                        Universe Tech
                                    </RouterLink>
                                </div>
                            </div>
                            <h1 class="collection__name text-center">🥳 Happy Birthday!</h1>
                            <div class="collection__description text-center">
                                Examples of the best birthday celebration campaigns.
                            </div>
                            <div class="collection__meta">
                                <div class="meta">
                                    <div class="meta__icon">
                                        <i class="ri ri-megaphone-line ri-lg"></i>
                                    </div>

                                    <div class="meta__copy">
                                        <div class="meta__title">Campaigns</div>
                                        <div class="meta__value">4</div>
                                    </div>
                                </div>
                                <div class="meta">
                                    <div class="meta__icon">
                                        <i class="ri ri-user-line ri-lg"></i>
                                    </div>

                                    <div class="meta__copy">
                                        <div class="meta__title">Creators</div>

                                        <div class="meta__value">3</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="flex items-center justify-center space-x-2 w-full max-w-sm mx-auto"
                        >
                            <div class="flex-grow">
                                <QShareButton
                                    link="twb.nz/c/happy-birthday"
                                    @click="
                                        openShare(
                                            'twb.nz/c/happy-birthday',
                                            { thumbnails },
                                            'collection'
                                        )
                                    "
                                />
                            </div>

                            <Popover class="relative">
                                <QButton variant="secondary" circle size="sm">
                                    <PopoverButton
                                        as="span"
                                        class="h-full w-full flex items-center justify-center"
                                    >
                                        <i class="ri-more-line"></i>
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
                                    <PopoverPanel class="popover__panel">
                                        <div class="p-1">
                                            <ul class="menu">
                                                <li class="menu__item">
                                                    <a
                                                        class="menu__link"
                                                        @click="reportModal = true"
                                                    >
                                                        <i class="ri-flag-line ri-1x"></i>
                                                        <span>Report Collection</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </PopoverPanel>
                                </transition>
                            </Popover>
                        </div>
                    </div>

                    <!-- 
                    <div class="collection__stats w-full flex-grow">
                        <QCard paddings="padless" :shadow="false" :border="true">
                            <div class="p-5">
                                <ul class="space-y-4">
                                    <li>
                                        <div class="flex items-center justify-between text-sm">
                                            <div class="flex items-center space-x-2">
                                                <i class="ri-megaphone-line"></i>
                                                <span>Campaigns</span>
                                            </div>

                                            <div class="font-medium">3</div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="flex items-center justify-between text-sm">
                                            <div class="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M2.00065 14.6667C1.63246 14.6667 1.32961 14.3668 1.37508 14.0014C1.70256 11.3699 3.94711 9.33342 6.66732 9.33342C9.38753 9.33342 11.6321 11.3699 11.9596 14.0014C12.005 14.3668 11.7022 14.6667 11.334 14.6667C10.9658 14.6667 10.6731 14.366 10.6125 14.0029C10.2962 12.1097 8.65028 10.6667 6.66732 10.6667C4.68435 10.6667 3.03839 12.1097 2.72216 14.0029C2.66149 14.366 2.36884 14.6667 2.00065 14.6667ZM6.66732 8.66675C4.45732 8.66675 2.66732 6.87675 2.66732 4.66675C2.66732 2.45675 4.45732 0.666748 6.66732 0.666748C8.87732 0.666748 10.6673 2.45675 10.6673 4.66675C10.6673 6.87675 8.87732 8.66675 6.66732 8.66675ZM6.66732 7.33342C8.14065 7.33342 9.33398 6.14008 9.33398 4.66675C9.33398 3.19341 8.14065 2.00008 6.66732 2.00008C5.19398 2.00008 4.00065 3.19341 4.00065 4.66675C4.00065 6.14008 5.19398 7.33342 6.66732 7.33342ZM11.916 10.4104C12.0672 10.0744 12.4651 9.92134 12.7794 10.1136C14.1325 10.9411 15.088 12.3549 15.2929 14.0016C15.3384 14.367 15.0355 14.6667 14.6673 14.6667C14.2991 14.6667 14.0065 14.3661 13.9458 14.003C13.7609 12.8955 13.1208 11.942 12.2245 11.3414C11.9187 11.1365 11.7649 10.7461 11.916 10.4104ZM11.5196 3.01714C11.6325 2.62181 12.0695 2.40958 12.4083 2.6424C13.3702 3.30317 14.0007 4.41099 14.0007 5.66675C14.0007 7.3214 12.906 8.71921 11.401 9.17589C11.0163 9.29264 10.6673 8.97201 10.6673 8.5699C10.6673 8.2294 10.9239 7.95066 11.2378 7.81875C12.0778 7.46576 12.6673 6.63541 12.6673 5.66675C12.6673 4.95265 12.3469 4.31371 11.842 3.88579C11.5876 3.67024 11.428 3.33772 11.5196 3.01714Z"
                                                        fill="currentColor" />
                                                </svg>

                                                <span>Creators</span>
                                            </div>

                                            <div class="font-medium">2</div>
                                        </div>
                                    </li>


                                    <li>
                                        <div class="flex items-center justify-between text-sm">
                                            <div class="flex items-center space-x-2">
                                                <i class="ri-time-line"></i>
                                                <span>Last updated</span>
                                            </div>

                                            <div class="font-medium">3 Days Ago</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </QCard>
                    </div> -->
                </div>
            </div>

            <div class="collection__lower mt-10">
                <div class="container px-5 lg:px-0">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <CampaignCard v-for="campaign in campaigns" v-bind="campaign" />
                    </div>
                </div>
            </div>
        </div>
    </LayoutMain>
</template>

<style scoped lang="scss">
.collection {
    padding-bottom: 80px;
    @apply border-b border-stroke;

    .collection__upper {
        padding-top: 80px;
    }

    .collection__name {
        @apply text-3xl font-black;

        @include md_screen {
            @apply text-5xl;
        }
    }

    .collection__description {
        @apply text-sm font-light text-content;

        @include md_screen {
            @apply text-base;
        }
    }

    .collection__meta {
        @apply flex items-center justify-center space-x-4;

        .meta {
            @apply flex items-center space-x-2;

            .meta__icon i,
            .meta__icon svg {
                @apply text-black;
            }

            .meta__copy {
                @apply h-full;

                @include sm {
                    @apply flex-grow;
                }
            }

            .meta__title {
                @apply font-medium block leading-none;
                font-size: 12px;
            }

            .meta__value {
                @apply text-sm text-content w-full;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                @include sm {
                    @apply text-xs;
                }
            }
        }
    }

    .collection__stats {
        height: 100%;
        @apply mt-6;

        @include md_screen {
            margin-top: 0;
            max-width: 328px;
        }
    }

    .creator {
        @apply flex items-center space-x-1 ml-2;

        .creator__avatar {
            @apply w-6 h-6;
        }

        .creator__name {
            @apply text-sm font-semibold;
        }
    }
}

.popover {
    @apply relative;

    &__panel {
        @apply absolute right-0 top-auto mt-2 z-10 bg-white shadow rounded-xl overflow-hidden;
        width: auto;
        min-width: 180px;
    }
}

.menu {
    @apply flex flex-col space-y-1 w-full;

    .menu__link {
        @apply p-2 flex items-center space-x-2 text-sm rounded-lg transition-colors font-medium duration-200 cursor-pointer;

        &:hover {
            @apply bg-black/10;
        }
    }
}
</style>
