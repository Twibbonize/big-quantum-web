<script setup>
import { computed, ref } from 'vue';
import dayjs from 'dayjs';

import QCard from '@/components/atoms/QCard.vue';
import QTabs from '@/components/atoms/QTabs.vue';
import QButton from '@/components/atoms/QButton.vue';
import QModal from '@/components/organisms/QModal.vue';
import CampaignCard from '@/components/molecules/CampaignCard.vue';
import { getAvatarUrl, getThumbnailUrl } from '@/utils/urls.js';

import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

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
    },
    {
        title: 'Collections',
        slot: 'collections'
    }
];

const activeTab = ref(0);
const showAbout = ref(false);

// const campaigns = /

const campaigns = computed(() => {
    const samples = [
        {
            name: 'UNIVERSE UNPACKED 2022',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 85500,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'sample-campaign-1.jpg'
        },
        {
            name: 'Liberty Scholarship 2025',
            campaignCreator: {
                name: 'Liberty Scholarship',
                avatar: 'sample-avatar-2.jpg'
            },
            hit: 1470,
            createdAt: dayjs().subtract(3, 'week').fromNow(),
            thumbnail: 'sample-campaign-2.jpg'
        },
        {
            name: 'Bit by Bit - Retro Gaming',
            campaignCreator: {
                name: 'Bit by Bit',
                avatar: 'sample-avatar-3.jpg'
            },
            hit: 15100,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'sample-campaign-3.jpg'
        },
        {
            name: 'Digital Culture Webinar',
            campaignCreator: {
                name: 'Digital Culture',
                avatar: 'sample-avatar-4.jpg'
            },
            hit: 7700,
            createdAt: dayjs().subtract(1, 'week').fromNow(),
            thumbnail: 'sample-campaign-4.jpg'
        },
        {
            name: 'UNIVERSE UNPACKED 2022',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 85500,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'sample-campaign-1.jpg'
        },
        {
            name: 'Liberty Scholarship 2025',
            campaignCreator: {
                name: 'Liberty Scholarship',
                avatar: 'sample-avatar-2.jpg'
            },
            hit: 14700,
            createdAt: dayjs().subtract(3, 'week').fromNow(),
            thumbnail: 'sample-campaign-2.jpg'
        },
        {
            name: 'Bit by Bit - Retro Gaming',
            campaignCreator: {
                name: 'Bit by Bit',
                avatar: 'sample-avatar-3.jpg'
            },
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'sample-campaign-3.jpg',
            hit: 14929
        },
        {
            name: 'Digital Culture Webinar',
            campaignCreator: {
                name: 'Digital Culture',
                avatar: 'sample-avatar-4.jpg'
            },
            hit: 7700,
            createdAt: dayjs().subtract(1, 'week').fromNow(),
            thumbnail: 'sample-campaign-4.jpg'
        }
    ];

    return samples.map(({ thumbnail, campaignCreator, ...other }) => {
        const { name, avatar } = campaignCreator;
        return {
            ...other,
            thumbnail: getThumbnailUrl(thumbnail),
            campaignCreator: {
                name,
                avatar: getAvatarUrl(avatar)
            }
        };
    });
});
</script>

<template>
    <div class="page">
        <QModal :show="showAbout" @close="showAbout = false">
            <template #header v-slot="{ close }">
                <div class="flex items-center justify-between w-full">
                    <h2 class="text-lg font-semibold">About</h2>

                    <QButton variant="subtle" size="sm" square @click="showAbout = false">
                        <i class="ri-close-fill ri-lg"></i>
                    </QButton>
                </div>
            </template>

            <template #body>
                <div class="space-y-3">
                    <div class="prose prose-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus
                        ipsum, consequatur earum inventore eum blanditiis. Repudiandae, nihil,
                        quaerat earum illo magnam laboriosam omnis debitis nisi, dolores
                        voluptatibus ipsum doloremque.
                    </div>

                    <div class="border-t border-light pt-3">
                        <h3 class="font-semibold">Details</h3>

                        <ul class="space-y-2 pt-3">
                            <li>
                                <div class="flex items-center space-x-2">
                                    <i class="ri-layout-bottom-line ri-xl"></i>
                                    <span class="text-sm font-light"> 2 Campaigns</span>
                                </div>
                            </li>

                            <li>
                                <div class="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M3.5 20.5C3.5 16.7129 6.57005 13.6429 10.3571 13.6429C14.1443 13.6429 17.2143 16.7129 17.2143 20.5H15.5C15.5 17.6597 13.1975 15.3571 10.3571 15.3571C7.51682 15.3571 5.21429 17.6597 5.21429 20.5H3.5ZM10.3571 12.7857C7.51571 12.7857 5.21429 10.4843 5.21429 7.64286C5.21429 4.80143 7.51571 2.5 10.3571 2.5C13.1986 2.5 15.5 4.80143 15.5 7.64286C15.5 10.4843 13.1986 12.7857 10.3571 12.7857ZM10.3571 11.0714C12.2514 11.0714 13.7857 9.53714 13.7857 7.64286C13.7857 5.74857 12.2514 4.21429 10.3571 4.21429C8.46286 4.21429 6.92857 5.74857 6.92857 7.64286C6.92857 9.53714 8.46286 11.0714 10.3571 11.0714ZM17.4575 14.2453C19.8409 15.3195 21.5 17.716 21.5 20.5H19.7857C19.7857 18.412 18.5414 16.6147 16.7538 15.8089L17.4575 14.2453ZM16.8682 4.56847C18.5809 5.2746 19.7857 6.96024 19.7857 8.92857C19.7857 11.3887 17.9036 13.4073 15.5 13.6237V11.8982C16.9543 11.6905 18.0714 10.4406 18.0714 8.92857C18.0714 7.74516 17.3871 6.72231 16.3923 6.23401L16.8682 4.56847Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span class="text-sm font-light">85.539 Supporters</span>
                                </div>
                            </li>

                            <li>
                                <div class="flex items-center space-x-2">
                                    <i class="ri-calendar-check-line ri-xl"></i>
                                    <span class="text-sm font-light">Joined Since Dec 2023</span>
                                </div>
                            </li>

                            <li>
                                <div class="flex items-center space-x-2">
                                    <i class="ri-global-line ri-xl"></i>
                                    <span class="text-sm font-light">www.universe-tech.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </QModal>
        <div class="profile-top">
            <div class="profile-top__banner"></div>
            <div class="profile-top__wrapper container grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-8">
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
                                            <div class="text-sm font-medium tracking-wide">
                                                Campaigns
                                            </div>
                                            <div class="font-medium text-black opacity-60">3</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex flex-col space-y-1 justify-between">
                                            <div class="text-sm font-medium tracking-wide">
                                                Supporters
                                            </div>
                                            <div class="font-medium text-black opacity-60">
                                                85.5k
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="flex flex-col space-y-1 justify-between">
                                            <div class="text-sm font-medium tracking-wide">
                                                Joined
                                            </div>
                                            <div class="font-medium text-black opacity-60">
                                                2 Dec 2023
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="flex flex-col space-y-1 justify-between">
                                            <div class="text-sm font-medium tracking-wide">
                                                Website
                                            </div>

                                            <QButton variant="neutral" size="xs">
                                                <i class="ri-global-line mr-1"></i>
                                                <span class="font-semibold text-black"
                                                    >Website</span
                                                >
                                            </QButton>
                                        </div>
                                    </li>
                                </ul>

                                <div class="flex items-center">
                                    <QButton variant="neutral" size="sm" circle>
                                        <i class="ri-more-line"></i>
                                    </QButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-4 flex flex-col space-y-3">
                    <QCard paddings="padless">
                        <div class="space-y-2 p-5">
                            <h3 class="text-sm font-medium tracking-wide">About</h3>
                            <p class="prose prose-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
                                rerum facere repellendus esse amet veritatis...
                            </p>

                            <div class="flex justify-end">
                                <a
                                    class="flex items-center space-x-2 cursor-pointer"
                                    @click="showAbout = true"
                                >
                                    <span class="text-xs font-semibold">Read More</span>
                                    <QButton circle variant="neutral" size="xs">
                                        <i class="ri-arrow-right-line"></i>
                                    </QButton>
                                </a>
                            </div>
                        </div>
                    </QCard>

                    <QCard paddings="padless" class="flex-grow">
                        <div class="px-5 py-3 h-full flex items-center">
                            <div class="flex items-center justify-between w-full">
                                <div class="text-sm font-medium tracking-wide leading-none">
                                    Share this Profile
                                </div>

                                <div class="flex space-x-2">
                                    <QButton variant="neutral" circle size="sm">
                                        <i class="ri-facebook-fill"></i>
                                    </QButton>

                                    <QButton variant="neutral" circle size="sm">
                                        <i class="ri-whatsapp-line ri-lg"></i>
                                    </QButton>

                                    <QButton variant="neutral" circle size="sm">
                                        <i class="ri-twitter-x-line"></i>
                                    </QButton>
                                </div>
                            </div>
                        </div>
                    </QCard>
                </div>
            </div>
        </div>

        <div class="profile-main border-b border-stroke py-10">
            <div class="container px-5 md:px-0">
                <q-tabs :tabs="tabs">
                    <template #campaigns>
                        <div class="grid grid-cols-4 gap-8 mt-10">
                            <campaign-card v-for="campaign in campaigns" v-bind="campaign" />
                        </div>
                    </template>

                    <template #posts>
                        <h1>Posts Tab Content</h1>
                    </template>
                </q-tabs>
                <!-- <div class="grid grid-cols-12 gap-10">
                    <div class="col-span-8">

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
                </div> -->
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

    &__wrapper {
        @apply -mt-24;
    }

    &__card {
        @apply bg-white rounded-3xl;
        box-shadow: 0 4px 20px #0000001a;
    }

    &__card__upper {
        @apply px-5 py-6;
    }

    &__card__lower {
        @apply px-5 py-3 border-t border-stroke bg-gray-50 rounded-b-3xl;
    }
}

// .card {
//     @apply bg-white rounded-3xl p-4;
//     box-shadow: 0px 5.064px 25.321px 0px rgba(0, 0, 0, 0.1);
// }

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
