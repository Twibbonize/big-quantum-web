<script setup>
import { ref } from 'vue';
import QTabs from '@/components/base/QTabs.vue';
import dayjs from 'dayjs';
import CampaignCard from '@/components/elements/CampaignCard.vue';
import { getAvatarUrl, getThumbnailUrl } from '@/utils/urls.js';

const tabs = [
    {
        title: 'Campaigns',
        slot: 'campaigns',
        props: {
            static: true
        }
    },
    {
        title: 'Posts',
        slot: 'posts',
        props: {
            static: true
        }
    }
];

const campaigns = [
    {
        name: 'UNIVERSE UNPACKED 2022',
        creator: 'Universe Tech',
        avatar: 'sample-avatar-1.jpg',
        supports: 85500,
        createdAt: dayjs().subtract(5, 'day').unix(),
        thumbnail: 'sample-campaign-1.jpg'
    },
    {
        name: 'Liberty Scholarship 2025',
        creator: 'Liberty Scholarship',
        avatar: 'sample-avatar-2.jpg',
        supports: 1470,
        createdAt: dayjs().subtract(3, 'week').unix(),
        thumbnail: 'sample-campaign-2.jpg'
    },
    {
        name: 'Bit by Bit - Retro Gaming',
        creator: 'Bit by Bit',
        avatar: 'sample-avatar-3.jpg',
        supports: 15100,
        createdAt: dayjs().subtract(5, 'day').unix(),
        thumbnail: 'sample-campaign-3.jpg'
    },
    {
        name: 'Digital Culture Webinar',
        creator: 'Digital Culture',
        avatar: 'sample-avatar-4.jpg',
        supports: 7700,
        createdAt: dayjs().subtract(1, 'week').unix(),
        thumbnail: 'sample-campaign-4.jpg'
    },
    {
        name: 'UNIVERSE UNPACKED 2022',
        creator: 'Universe Tech',
        avatar: 'sample-avatar-1.jpg',
        supports: 85500,
        createdAt: dayjs().subtract(5, 'day').unix(),
        thumbnail: 'sample-campaign-1.jpg'
    },
    {
        name: 'Liberty Scholarship 2025',
        creator: 'Liberty Scholarship',
        avatar: 'sample-avatar-2.jpg',
        supports: 14700,
        createdAt: dayjs().subtract(3, 'week').unix(),
        thumbnail: 'sample-campaign-2.jpg'
    },
    {
        name: 'Bit by Bit - Retro Gaming',
        creator: 'Bit by Bit',
        avatar: 'sample-avatar-3.jpg',
        supports: 15100,
        createdAt: dayjs().subtract(5, 'day').unix(),
        thumbnail: 'sample-campaign-3.jpg'
    },
    {
        name: 'Digital Culture Webinar',
        creator: 'Digital Culture',
        avatar: 'sample-avatar-4.jpg',
        supports: 7700,
        createdAt: dayjs().subtract(1, 'week').unix(),
        thumbnail: 'sample-campaign-4.jpg'
    }
];
</script>

<template>
    <div class="page">
        <div class="profile-top">
            <div class="profile-top__banner"></div>
            <div class="profile-top__card">
                <div class="profile-top__card__upper">
                    <div class="profile-avatar">
                        <img
                            class="profile-avatar__img"
                            src="/assets/img/sample/sample-avatar-1.jpg"
                            alt=""
                        />
                        <div class="profile-avatar__name-wrapper">
                            <h1 class="profile-avatar__name">Universe Tech</h1>
                            <div class="profile-avatar__username">@universetech</div>
                        </div>
                    </div>
                </div>
                <div class="profile-top__card__lower">
                    <div class="flex items-center justify-between">
                        <ul class="stats">
                            <li class="stats__item">
                                <div class="stats__item__wrapper">
                                    <div class="stats__item__title">Campaigns</div>
                                    <div class="stats__item__value">3</div>
                                </div>
                            </li>
                            <li class="stats__item">
                                <div class="stats__item__wrapper">
                                    <div class="stats__item__title">Supporters</div>
                                    <div class="stats__item__value">85.5k</div>
                                </div>
                            </li>

                            <li class="stats__item">
                                <div class="stats__item__wrapper">
                                    <div class="stats__item__title">Joined</div>
                                    <div class="stats__item__value">2 Dec 2023</div>
                                </div>
                            </li>

                            <li class="stats__item hidden md:block">
                                <div class="stats__item__wrapper">
                                    <div class="stats__item__title">Website</div>
                                    <button
                                        class="rounded-full px-3 py-1 text-xs bg-gray-100 space-x-1"
                                    >
                                        <i class="ri-global-line"></i>
                                        <span class="font-semibold text-black">Website</span>
                                    </button>
                                </div>
                            </li>
                        </ul>

                        <!-- <div class="flex items-center">
                            <button
                                class="w-8 h-8 p-1 flex items-center justify-center bg-gray-100 rounded-full font-bold"
                            >
                                <i class="ri-more-fill"></i>
                            </button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-main">
            <div class="px-6 max-w-full md:max-w-7xl mx-auto w-full">
                <div class="grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-10 w-full">
                    <div class="order-2 md:order-1 col-span-12 md:col-span-8">
                        <q-tabs :tabs="tabs">
                            <template #campaigns>
                                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                                    <campaign-card
                                        v-for="(
                                            {
                                                name,
                                                avatar,
                                                creator,
                                                createdAt,
                                                supports,
                                                thumbnail
                                            },
                                            i
                                        ) in campaigns"
                                        :name="name"
                                        :creator="creator"
                                        :avatar="getAvatarUrl(avatar)"
                                        :supports="supports"
                                        :created-at="createdAt"
                                        :thumbnail="getThumbnailUrl(thumbnail)"
                                    />
                                </div>
                            </template>

                            <template #posts>
                                <h1>Posts Tab Content</h1>
                            </template>
                        </q-tabs>
                    </div>
                    <div class="order-1 md:order-2 col-span-12 md:col-span-4 w-full">
                        <div class="about">
                            <div class="space-y-3">
                                <h3 class="font-semibold">About</h3>
                                <p class="leading-relaxed text-base">
                                    The ultimate community for enthusiasts who are passionate about
                                    exploring the cosmos and staying on the forefront of the latest
                                    technology trends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.page {
    min-height: 100vh;
    padding-top: 97px;
}

.profile-top {
    @apply w-full;

    &__banner {
        height: 360px;
        background-image: url('/assets/img/banners/banner-1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    &__card {
        @apply max-w-7xl mx-auto -mt-24 bg-gray-50;

        @include md_screen {
            @apply rounded-3xl;
            box-shadow: 0 4px 20px #0000001a;
        }
    }

    &__card__upper {
        @apply p-6;

        @include md_screen {
            @apply rounded-t-3xl;
        }
    }

    &__card__lower {
        @apply px-6 pt-6 pb-10 border-t border-stroke;

        @include md_screen {
            @apply rounded-b-3xl py-4;
        }
    }
}

.profile-avatar {
    @apply flex flex-col space-y-4;

    @include md_screen {
        @apply flex flex-row items-center space-y-0 space-x-4;
    }

    &__img {
        @apply rounded-full w-20 h-20 -mt-16;

        @include md_screen {
            @apply mt-0;
        }
    }

    &__name {
        @apply text-3xl font-bold;

        @include md_screen {
            @apply text-5xl;
        }
    }

    &__username {
        @apply text-sm text-gray-500 font-medium;

        @include md_screen {
            @apply text-base;
        }
    }
}

.stats {
    @apply flex items-center space-x-6 overflow-auto w-full;

    &__item {
        @apply flex-grow flex-shrink-0;

        @include md_screen {
            @apply flex-grow-0;
        }

        &__wrapper {
            @apply flex flex-col items-center justify-center space-y-1;

            @include md_screen {
                @apply items-start;
            }
        }

        &__title {
            @apply text-sm font-medium tracking-wide;
        }

        &__value {
            @apply text-content font-medium;
        }
    }
}

.profile-main {
    @apply border-b border-stroke pb-12 -mt-6 bg-white pt-6 rounded-t-3xl;
    box-shadow: 0 4px 20px #0000001a;

    @include md_screen {
        @apply mt-0 pt-8 bg-transparent;
        box-shadow: none;
    }
}

.card {
    @apply bg-white rounded-3xl p-4;
    box-shadow: 0px 5.064px 25.321px 0px rgba(0, 0, 0, 0.1);
}

.tab {
    .tab__group {
        @apply bg-light inline-flex space-x-2 p-1 rounded-full;
    }

    .tab__button {
        height: 48px;
        padding: 0 18px;
        @apply rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-500;

        &--selected {
            @apply bg-white font-semibold;
        }
    }
}

.about {
    @include md_screen {
        @apply bg-white rounded-3xl p-4;
        box-shadow: 0px 5.064px 25.321px 0px rgba(0, 0, 0, 0.1);
    }
}

// .about {
//     @include md_screen {
//         @extend .card;
//     }
// }
</style>
