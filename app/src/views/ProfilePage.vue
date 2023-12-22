<script setup>
import { computed, inject, ref } from 'vue';
import dayjs from 'dayjs';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import QCard from '@/components/atoms/QCard.vue';
import QTabs from '@/components/atoms/QTabs.vue';
import QButton from '@/components/atoms/QButton.vue';
import QModal from '@/components/atoms/QModal.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import ReportModal from '@/components/organisms/ReportModal.vue';
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

const profile = {
    name: 'Universe Tech',
    username: '@universetech',
    bio: 'Embark on a cosmic journey with Universe Tech! 🌌✨ Discover a world where style meets innovation. Elevate your tech game with sleek designs and powerful performance. Join us inredefining the future of connectivity. 🚀 #UniverseTech #InnovationUnleashed #TechStyle',
    link: 'www.universe-tech.com'
};

const activeTab = ref(0);
const creatorUuid = '1920371293719237912';
const showAbout = ref(false);
const reportModal = ref(false);
const isMobile = inject('isMobile');

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
    <div class="page profile">
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
                <div class="space-y-3 px-5 pt-3 pb-6">
                    <div class="prose prose-sm">
                        {{ profile.bio }}
                    </div>

                    <div class="border-t border-light pt-3">
                        <h3 class="font-semibold">Details</h3>

                        <ul class="space-y-3 pt-3">
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
                                    <a href="#" class="text-sm font-light underline"
                                        >www.universe-tech.com</a
                                    >
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </QModal>

        <ReportModal :show="reportModal" :uuid="creatorUuid" @close="reportModal = false" />
        <div class="profile__top">
            <div class="profile__banner"></div>

            <div class="profile__avatar">
                <img
                    class="profile__avatar__img"
                    src="/assets/img/sample/sample-avatar-1.jpg"
                    alt="Universe Tech"
                />
            </div>

            <div class="container px-5 lg:px-0">
                <div class="flex items-center justify-between">
                    <div class="profile__common">
                        <h1 class="profile__name">Universe Tech</h1>
                        <p class="profile__username">@universetech</p>
                        <QEllipsisText :text="profile.bio" />
                        <div class="profile__web">
                            <i class="ri-links-line"></i>
                            <a
                                href="www.universe-tech.com"
                                target="_blank"
                                rel="nofollow"
                                class="link"
                                >www.universe-tech.com</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-main border-b border-stroke py-6 md:py-10">
            <div class="container px-5 md:px-0">
                <QTabs :tabs="tabs" :block="isMobile">
                    <template #campaigns>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-10">
                            <campaign-card v-for="campaign in campaigns" v-bind="campaign" />
                        </div>
                    </template>

                    <template #posts>
                        <h1>Posts Tab Content</h1>
                    </template>
                </QTabs>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.profile {
    .profile__top .profile__banner {
        height: 160px;
        background-image: url('/assets/img/banners/banner-1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin-top: -16px;

        @include lg_screen {
            height: 360px;
        }
    }

    .profile__avatar {
        @apply container px-5 lg:px-0 -mt-16;

        .profile__avatar__img {
            height: 132px;
            width: 132px;
            @apply rounded-full border-2 border-stroke;
        }
    }

    .profile__common {
        @apply mt-6 space-y-1;
        max-width: 720px;
    }

    .profile__name {
        @apply text-4xl font-semibold;
    }

    .profile__username {
        @apply text-content;
    }

    .profile__web {
        @apply flex items-center space-x-1 text-content;
    }
}

.profile-top {
    &__wrapper {
        @include lg_screen {
            @apply -mt-24;
        }
    }

    &__main {
        @include lg_screen {
            @apply bg-white rounded-3xl shadow-card;
        }
    }

    &__main__upper {
        @apply px-5 py-4 relative;

        @include lg_screen {
            @apply px-5 py-6 rounded-t-3xl;
        }
    }

    &__main__lower {
        @apply px-5 py-6 border-t border-stroke;

        @include lg_screen {
            @apply rounded-b-3xl py-3 bg-gray-50;
        }
    }

    &__trivial {
        @apply flex flex-col overflow-hidden;

        @include sm {
            border-radius: 24px;
            -webkit-box-shadow: 0px -4px 3px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0px -4px 3px rgba(0, 0, 0, 0.1);
            box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.06);
        }

        @include lg_screen {
            @apply space-y-2 overflow-visible;
            border-radius: 0px;
            box-shadow: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
        }
    }

    &__more {
        @apply block absolute;
        right: 20px;
        bottom: 24px;

        @include lg_screen {
            @apply hidden;
        }
    }
}

.profile-creator {
    @apply flex flex-col;

    @include lg_screen {
        @apply flex-row items-center space-x-4;
    }

    &__avatar {
        @apply rounded-full w-16 h-16 -mt-12 border border-white;

        @include lg_screen {
            @apply w-24 h-24 -mt-0;
        }
    }

    &__ids {
        @apply flex flex-col mt-3;

        @include lg_screen {
            @apply mt-0;
        }
    }

    &__name {
        @apply text-3xl font-bold;

        @include lg_screen {
            @apply text-5xl;
        }
    }

    &__username {
        @apply text-content font-medium text-sm;

        @include lg_screen {
            @apply text-base;
        }
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

.menu {
    &__title {
        @apply block px-4 py-1 text-sm font-medium text-content;
    }

    &__link {
        @apply px-4 py-2 font-medium text-sm flex items-center space-x-2 transition-colors duration-300 cursor-pointer;

        i {
            width: 24px;
            height: 24px;
            text-align: center;
            @apply inline-flex items-center justify-center;
        }

        &:hover {
            @apply bg-stroke;
        }
    }

    &__separator {
        height: 1px;
        @apply w-full bg-stroke my-2;
    }
}
</style>
