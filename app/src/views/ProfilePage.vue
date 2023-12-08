<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import dayjs from 'dayjs';
import CampaignCard from '@/components/campaign/CampaignCard.vue';
import { getAvatarUrl, getThumbnailUrl } from '@/utils/urls.js';

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
                    <div class="flex items-center space-x-4">
                        <img
                            class="rounded-full w-24 h-24"
                            src="/assets/img/sample/sample-avatar-1.jpg"
                            alt=""
                        />
                        <div class="flex flex-col">
                            <h1 class="text-5xl font-bold">Universe Tech</h1>
                            <div class="text-gray-500 font-medium">@universetech</div>
                        </div>
                    </div>
                </div>
                <div class="profile-top__card__lower">
                    <div class="flex items-center justify-between">
                        <ul class="flex space-x-6">
                            <li>
                                <div class="flex flex-col space-y-1 justify-between">
                                    <div class="text-sm font-medium tracking-wide">Campaigns</div>
                                    <div class="font-medium text-black opacity-60">3</div>
                                </div>
                            </li>
                            <li>
                                <div class="flex flex-col space-y-1 justify-between">
                                    <div class="text-sm font-medium tracking-wide">Supporters</div>
                                    <div class="font-medium text-black opacity-60">85.5k</div>
                                </div>
                            </li>

                            <li>
                                <div class="flex flex-col space-y-1 justify-between">
                                    <div class="text-sm font-medium tracking-wide">Joined</div>
                                    <div class="font-medium text-black opacity-60">2 Dec 2023</div>
                                </div>
                            </li>

                            <li>
                                <div class="flex flex-col space-y-1 justify-between">
                                    <div class="text-sm font-medium tracking-wide">Website</div>
                                    <button
                                        class="rounded-full px-3 py-1 text-xs bg-gray-200 space-x-1"
                                    >
                                        <i class="ri-global-line"></i>
                                        <span class="font-semibold text-black">Website</span>
                                    </button>
                                </div>
                            </li>
                        </ul>

                        <div class="flex items-center">
                            <button
                                class="w-8 h-8 p-1 flex items-center justify-center bg-gray-200 rounded-full font-semibold"
                            >
                                <i class="ri-more-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-main border-b border-stroke pb-12 pt-8">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-12 gap-10">
                    <div class="col-span-8">
                        <tab-group as="div" class="tab">
                            <tab-list class="tab__group">
                                <tab v-slot="{ selected }">
                                    <button
                                        :class="[
                                            'tab__button',
                                            selected && 'tab__button--selected'
                                        ]"
                                    >
                                        Campaign
                                    </button>
                                </tab>

                                <tab v-slot="{ selected }">
                                    <button
                                        :class="[
                                            'tab__button',
                                            selected && 'tab__button--selected'
                                        ]"
                                    >
                                        Posts
                                    </button>
                                </tab>
                            </tab-list>

                            <tab-panels class="mt-6">
                                <tab-panel>
                                    <div class="grid grid-cols-3 gap-6">
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
                                </tab-panel>

                                <tab-panel> Posts Tab </tab-panel>
                            </tab-panels>
                        </tab-group>
                    </div>
                    <div class="col-span-4">
                        <div class="card">
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
    &__banner {
        height: 360px;
        background-image: url('/assets/img/banners/banner-1.jpg');
        background-position: no-repeat;
        background-size: cover;
        background-position: center;
    }

    &__card {
        @apply bg-white max-w-7xl mx-auto rounded-3xl -mt-24;
        box-shadow: 0 4px 20px #0000001a;
    }

    &__card__upper {
        @apply px-5 py-6;
    }

    &__card__lower {
        @apply px-5 py-3 border-t border-stroke bg-gray-50 rounded-b-3xl;
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
</style>
