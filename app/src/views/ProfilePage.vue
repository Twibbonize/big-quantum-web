<script setup>
import { computed, inject, onMounted, ref } from 'vue';
import dayjs from 'dayjs';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QCard from '@/components/atoms/QCard.vue';
import QTabs from '@/components/atoms/QTabs.vue';
import QButton from '@/components/atoms/QButton.vue';
import QModal from '@/components/atoms/QModal.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QListbox from '@/components/atoms/forms/QListbox.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import ReportModal from '@/components/organisms/ReportModal.vue';
import CampaignCard from '@/components/molecules/CampaignCard.vue';
import QShareButton from '@/components/atoms/QShareButton.vue';
// import CollectionsCard from '@/components/PlusPage/CollectionsCard.vue';
import CollectionCard from '../components/molecules/CollectionCard.vue';

import { useShareStore } from '@/stores/shareStore';
import { getAvatarUrl, getThumbnailUrl } from '@/utils/urls.js';

import relativeTime from 'dayjs/plugin/relativeTime';
import { RouterLink } from 'vue-router';
dayjs.extend(relativeTime);

const emit = defineEmits(['change-navbar']);

const tabs = [
    {
        title: 'Campaigns',
        slot: 'campaigns',
        props: {
            static: true
        }
    },
    {
        title: 'Collections',
        slot: 'collections'
    },
    {
        title: 'Posts',
        slot: 'posts',
        props: {
            static: true
        }
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
const shareStore = useShareStore();

const { openShare } = shareStore;

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
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 1470,
            createdAt: dayjs().subtract(3, 'week').fromNow(),
            thumbnail: 'sample-campaign-2.jpg'
        },
        {
            name: 'Bit by Bit - Retro Gaming',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 15100,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'sample-campaign-3.jpg'
        },
        {
            name: 'Digital Culture Webinar',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 7700,
            createdAt: dayjs().subtract(1, 'week').fromNow(),
            thumbnail: 'sample-campaign-4.jpg'
        },
        {
            name: 'Candy Rush Treats or Treats',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 85500,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'sample-campaign-5.jpg'
        },
        {
            name: 'Nucleotide Labo Fashion Researcher Program',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 14700,
            createdAt: dayjs().subtract(3, 'week').fromNow(),
            thumbnail: 'sample-campaign-6.jpg'
        },
        {
            name: 'Fashion Week 2025',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'sample-campaign-7.jpg',
            hit: 14929
        },
        {
            name: 'ASO Rock Festa 2024',
            campaignCreator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 7700,
            createdAt: dayjs().subtract(1, 'week').fromNow(),
            thumbnail: 'sample-campaign-8.jpg'
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

const collections = [
    {
        name: '🥳 Happy Birthday!',
        campaigns: [
            {
                name: 'Purple and White Modern Happy Birthday',
                thumbnail: '/assets/img/campaigns/campaign-hbd-1.jpg'
            },
            {
                name: 'Blue White Happy Birthday',
                thumbnail: '/assets/img/campaigns/campaign-hbd-2.jpg'
            },
            {
                name: 'Pink Colourful Happy Birthday',
                thumbnail: '/assets/img/campaigns/campaign-hbd-3.jpg'
            },
            {
                name: 'Water Colour Outer Space Happy Birthday',
                thumbnail: '/assets/img/campaigns/campaign-hbd-4.webp'
            }
        ],
        uri: 'happy-birthday',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        }
    },
    {
        name: '👶 New Baby',
        campaigns: [
            {
                name: 'Neutral New Baby Born',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-1.jpg'
            },
            {
                name: 'Beige White New Baby Born',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-2.jpg'
            },
            {
                name: 'Pink White Baby Birth',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-3.jpg'
            },
            {
                name: 'Pink and Orange Playful Little Family Twibbon',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-4.webp'
            }
        ],
        uri: 'new-baby',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        }
    },
    {
        name: '🎓 Graduation',
        campaigns: [
            {
                name: 'Brown and Cream Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-1.jpg'
            },
            {
                name: 'Pink Cute Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-2.jpg'
            },
            {
                name: 'Yellow and Green Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-3.jpg'
            },
            {
                name: 'Blue and Yellow Modern Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-4.webp'
            }
        ],
        uri: 'graduation',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        }
    },
    {
        name: '💍 Wedding Celebration',
        campaigns: [
            {
                name: 'Brown and Cream Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-wedding-celebration-1.jpg'
            }
        ],
        uri: 'graduation',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        }
    }
];

const sortCampaignOptions = [{ name: 'Recent' }, { name: 'Most Supported' }];
const selectedSortCampaign = ref(sortCampaignOptions[0]);

onMounted(() => {
    emit('change-navbar', 'black');
});
</script>

<template>
    <LayoutMain>
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
                                        <span class="text-sm font-light"
                                            >Joined Since Dec 2023</span
                                        >
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
                    <div
                        class="flex flex-col md:flex-row justify-between border-b border-stroke pb-6 md:pb-10"
                    >
                        <div class="profile__common">
                            <div class="space-y-1">
                                <h1 class="profile__name">Universe Tech</h1>
                                <p class="profile__username">@universetech</p>
                                <div class="profile__bio">
                                    <QEllipsisText :text="profile.bio" />
                                </div>
                                <div class="profile__web text-content">
                                    <i class="ri-links-line"></i>
                                    <a
                                        href="https://www.universe-tech.com"
                                        target="_blank"
                                        rel="nofollow"
                                        class="link"
                                        >www.universe-tech.com</a
                                    >
                                </div>
                            </div>

                            <div class="profile__actions">
                                <div class="w-full md:w-60">
                                    <QShareButton
                                        link="twb.nz/u/universetech"
                                        @click="
                                            openShare(
                                                'twb.nz/u/universetech',
                                                getAvatarUrl('sample-avatar-1.jpg'),
                                                'profile'
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
                                                            <span>Report Profile</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </PopoverPanel>
                                    </transition>
                                </Popover>
                            </div>
                        </div>

                        <div class="profile__stats w-full flex-grow">
                            <QCard paddings="padless" :shadow="false" :border="true">
                                <div class="p-5">
                                    <ul class="space-y-4">
                                        <li>
                                            <div class="flex items-center justify-between text-sm">
                                                <div class="flex items-center space-x-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M2.00065 14.6667C1.63246 14.6667 1.32961 14.3668 1.37508 14.0014C1.70256 11.3699 3.94711 9.33342 6.66732 9.33342C9.38753 9.33342 11.6321 11.3699 11.9596 14.0014C12.005 14.3668 11.7022 14.6667 11.334 14.6667C10.9658 14.6667 10.6731 14.366 10.6125 14.0029C10.2962 12.1097 8.65028 10.6667 6.66732 10.6667C4.68435 10.6667 3.03839 12.1097 2.72216 14.0029C2.66149 14.366 2.36884 14.6667 2.00065 14.6667ZM6.66732 8.66675C4.45732 8.66675 2.66732 6.87675 2.66732 4.66675C2.66732 2.45675 4.45732 0.666748 6.66732 0.666748C8.87732 0.666748 10.6673 2.45675 10.6673 4.66675C10.6673 6.87675 8.87732 8.66675 6.66732 8.66675ZM6.66732 7.33342C8.14065 7.33342 9.33398 6.14008 9.33398 4.66675C9.33398 3.19341 8.14065 2.00008 6.66732 2.00008C5.19398 2.00008 4.00065 3.19341 4.00065 4.66675C4.00065 6.14008 5.19398 7.33342 6.66732 7.33342ZM11.916 10.4104C12.0672 10.0744 12.4651 9.92134 12.7794 10.1136C14.1325 10.9411 15.088 12.3549 15.2929 14.0016C15.3384 14.367 15.0355 14.6667 14.6673 14.6667C14.2991 14.6667 14.0065 14.3661 13.9458 14.003C13.7609 12.8955 13.1208 11.942 12.2245 11.3414C11.9187 11.1365 11.7649 10.7461 11.916 10.4104ZM11.5196 3.01714C11.6325 2.62181 12.0695 2.40958 12.4083 2.6424C13.3702 3.30317 14.0007 4.41099 14.0007 5.66675C14.0007 7.3214 12.906 8.71921 11.401 9.17589C11.0163 9.29264 10.6673 8.97201 10.6673 8.5699C10.6673 8.2294 10.9239 7.95066 11.2378 7.81875C12.0778 7.46576 12.6673 6.63541 12.6673 5.66675C12.6673 4.95265 12.3469 4.31371 11.842 3.88579C11.5876 3.67024 11.428 3.33772 11.5196 3.01714Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>

                                                    <span>Supporters</span>
                                                </div>

                                                <div class="font-medium">85.5k</div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="flex items-center justify-between text-sm">
                                                <div class="flex items-center space-x-2">
                                                    <i class="ri-megaphone-line"></i>
                                                    <span>Campaigns</span>
                                                </div>

                                                <div class="font-medium">8</div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="flex items-center justify-between text-sm">
                                                <div class="flex items-center space-x-2">
                                                    <i class="ri-calendar-line"></i>
                                                    <span>Joined Since</span>
                                                </div>

                                                <div class="font-medium">20 Jun 2022</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </QCard>
                        </div>
                    </div>
                </div>
            </div>

            <div class="profile-main overflow-x-hidden border-b border-stroke py-6 md:py-10">
                <div class="container px-5 md:px-0">
                    <QTabs :tabs="tabs" :block="isMobile">
                        <template #campaigns>
                            <div class="space-y-6 mt-6">
                                <div class="filters">
                                    <div class="filters__search">
                                        <QInputText
                                            name="search"
                                            size="sm"
                                            placeholder="Search Campaigns"
                                        >
                                            <template #prefix>
                                                <div class="pl-3 pr-1 h-full">
                                                    <i class="ri-search-line text-content"></i>
                                                </div>
                                            </template>
                                        </QInputText>
                                    </div>

                                    <div class="filters__sort">
                                        <QListbox
                                            v-model="selectedSortCampaign"
                                            :options="sortCampaignOptions"
                                            name="campaigns_sort"
                                        />
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 md:mt-10">
                                    <campaign-card
                                        v-for="campaign in campaigns"
                                        v-bind="campaign"
                                    />
                                </div>
                            </div>
                        </template>

                        <template #collections>
                            <div class="space-y-6 mt-6">
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    <RouterLink
                                        v-for="collection in collections"
                                        :key="collection.uri"
                                        :to="{
                                            name: 'collection',
                                            params: { uri: collection.uri }
                                        }"
                                    >
                                        <CollectionCard v-bind="collection" />
                                    </RouterLink>
                                </div>
                            </div>
                        </template>

                        <template #posts>
                            <div
                                class="flex flex-col items-center justify-center py-20 space-y-3 max-w-md mx-auto text-center"
                            >
                                <h4 class="text-xl font-semibold">No Posts Yet</h4>
                            </div>
                        </template>
                    </QTabs>
                </div>
            </div>
        </div>
    </LayoutMain>
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
        @apply container px-5 lg:px-0 -mt-10;

        @include md_screen {
            @apply -mt-24;
        }

        .profile__avatar__img {
            height: 72px;
            width: 72px;

            @apply rounded-full border-2 border-stroke;

            @include md_screen {
                height: 132px;
                width: 132px;
            }
        }
    }

    .profile__common {
        @apply mt-2 w-full;
        max-width: 720px;

        @include md_screen {
            @apply mt-6;
        }
    }

    .profile__name {
        @apply text-2xl font-semibold;

        @include md_screen {
            @apply text-4xl;
        }
    }

    .profile__username {
        @apply text-sm md:text-base text-content;
    }

    .profile__web {
        @apply flex items-center space-x-1 text-sm;
    }

    .profile__stats {
        height: 100%;

        @apply mt-6;

        @include md_screen {
            max-width: 328px;
        }
    }

    .profile__actions {
        margin-top: 24px;
        @apply flex items-center space-x-2 w-full;
    }
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

.popover {
    @apply relative;

    &__panel {
        @apply absolute right-0 top-auto mt-2 z-10 bg-white shadow rounded-lg overflow-hidden;
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

// campaigns filter
.filters {
    @apply flex items-center space-x-4;

    @include sm {
        @apply flex flex-col space-x-0 space-y-4;

        .filters__search,
        .filters__sort {
            @apply w-full;
        }
    }

    .filters__search,
    .filters__sort {
        @apply flex-grow;
    }

    .filters__search {
        @include md_screen {
            @apply max-w-xs;
        }
    }

    .filters__sort {
        // @apply max-w-xs;

        @include md_screen {
            max-width: 240px;
        }
    }
}
</style>
