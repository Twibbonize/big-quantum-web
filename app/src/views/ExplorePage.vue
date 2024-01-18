<script setup>
import { computed } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import CampaignCard from '@/components/molecules/CampaignCard.vue';
import CollectionCard from '@/components/molecules/CollectionCard.vue';

import { getAvatarUrl, getThumbnailUrl } from '@/utils/urls.js';

const campaigns = computed(() => {
    const samples = [
        {
            name: 'UNIVERSE UNPACKED 2022',
            creator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 85500,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'sample-campaign-1.jpg'
        },
        {
            name: 'Universe Tech Future Developers Bootcamp',
            creator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 1470,
            createdAt: dayjs().subtract(3, 'week').fromNow(),
            thumbnail: 'future-developers.jpg'
        },
        {
            name: 'Universe Tech Innovation Day',
            creator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 15100,
            createdAt: dayjs().subtract(5, 'day').fromNow(),
            thumbnail: 'innovation-day-1.jpg'
        },
        {
            name: 'Shot on Universe Phone',
            creator: {
                name: 'Universe Tech',
                avatar: 'sample-avatar-1.jpg'
            },
            hit: 7700,
            createdAt: dayjs().subtract(1, 'week').fromNow(),
            thumbnail: 'shot-on.jpg'
        }
    ];

    return samples.map(({ thumbnail, creator, ...other }) => {
        const { name, avatar } = creator;
        return {
            ...other,
            thumbnail: getThumbnailUrl(thumbnail),
            creator: {
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
</script>
<template>
    <LayoutMain>
        <div class="page mt-8">
            <div class="container">
                <div class="space-y-24">
                    <div class="space-y-10">
                        <div class="flex items-end justify-between">
                            <div class="space-y-3">
                                <div class="text-sm">Campaign</div>
                                <div class="text-4xl font-bold max-w-lg">
                                    Latest trending in your country
                                </div>
                            </div>
                            <p>
                                Don't miss the latest happenings in
                                <span class="font-semibold text-black">Indonesia</span>.
                            </p>
                        </div>

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <campaign-card v-for="campaign in campaigns" v-bind="campaign" />
                        </div>

                        <div class="flex items-center justify-center space-x-2">
                            <div class="text-content">Discover a huge of inspiring campaigns</div>
                            <button class="space-x-1 font-semibold">
                                <i class="ri-arrow-right-line"></i>
                                <span>View More Campaigns</span>
                            </button>
                        </div>
                    </div>

                    <div class="space-y-10">
                        <div class="flex items-end justify-between">
                            <div class="space-y-3">
                                <div class="text-sm">Creators</div>
                                <div class="text-4xl font-bold max-w-lg">Top Creators</div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center space-x-2">
                            <div class="text-content">Explore with over 5,191 Creators</div>
                            <button class="space-x-1 font-semibold">
                                <i class="ri-arrow-right-line"></i>
                                <span>View More Creators</span>
                            </button>
                        </div>
                    </div>

                    <div class="space-y-10">
                        <div class="flex items-end justify-between">
                            <div class="space-y-3">
                                <div class="text-sm">Collections</div>
                                <div class="text-4xl font-bold max-w-lg">
                                    Explore a wide variety of collections.
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2` lg:grid-cols-4 gap-6">
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

                        <div class="flex items-center justify-center space-x-2">
                            <div class="text-content">Browse specially curated campaigns</div>
                            <button class="space-x-1 font-semibold">
                                <i class="ri-arrow-right-line"></i>
                                <span>View More Collections</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LayoutMain>
</template>
