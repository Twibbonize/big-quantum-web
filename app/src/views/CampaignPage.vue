<script setup>
import { ref, computed, onMounted } from 'vue';
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import MetaInfo from '@/components/molecules/MetaInfo.vue';
import QButton from '@/components/atoms/QButton.vue';
import QSlider from '@/components/atoms/QSlider.vue';
import CampaignCard from '@/components/campaign/CampaignCard.vue';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const isReadMore = ref(false);
const navbarColor = ref('transparent');

const clickReadMore = () => {
    isReadMore.value = true;
};

const frameLists = [
    'hanoi-art-frame-1',
    'hanoi-art-frame-2',
    'hanoi-art-frame-3',
    'hanoi-art-frame-4'
];

const frameIndex = ref(0);

const getFrameUrl = (frame) => {
    return `/assets/img/frames/${frame}.png`;
};

const setActiveFrame = (index) => {
    frameIndex.value = index;
};

const layout = ref('grid');

const changeLayout = () => {
    if (layout.value === 'grid') layout.value = 'list';
    else if (layout.value === 'list') layout.value = 'grid';
};

const action = ref(null);

const feedsHeight = computed(() => {
    if (action.value) {
        return `${action.value.clientHeight}px`;
    }

    return '100%';
});

const getSampleUser = (index) => {
    return `/assets/img/sample/sample-person-${index}.jpg`;
};

const moreCampaigns = [
    {
        name: 'UNIVERSE UNPACKED 2022',
        creator: 'Universe Tech',
        avatar: 'sample-avatar-1.jpg',
        supports: 85500,
        createdAt: dayjs().subtract(5, 'day').unix() * 1000,
        thumbnail: 'sample-campaign-1.jpg'
    },
    {
        name: 'Liberty Scholarship 2025',
        creator: 'Liberty Scholarship',
        avatar: 'sample-avatar-2.jpg',
        supports: 1470,
        createdAt: dayjs().subtract(3, 'week').unix() * 1000,
        thumbnail: 'sample-campaign-2.jpg'
    },
    {
        name: 'Bit by Bit - Retro Gaming',
        creator: 'Bit by Bit',
        avatar: 'sample-avatar-3.jpg',
        supports: 15100,
        createdAt: dayjs().subtract(5, 'day').unix() * 1000,
        thumbnail: 'sample-campaign-3.jpg'
    },
    {
        name: 'Digital Culture Webinar',
        creator: 'Digital Culture',
        avatar: 'sample-avatar-4.jpg',
        supports: 7700,
        createdAt: dayjs().subtract(1, 'week').unix() * 1000,
        thumbnail: 'sample-campaign-4.jpg'
    },
    {
        name: 'Candy Rush Treats or Treats!',
        creator: 'Candy Rush',
        avatar: 'sample-avatar-10.jpg',
        supports: 13600,
        createdAt: dayjs().subtract(3, 'week').unix() * 1000,
        thumbnail: 'sample-campaign-5.jpg'
    },
    {
        name: 'Nucleotide Labo Fashion Researcher Program',
        creator: 'Nucleotide Labo',
        avatar: 'sample-avatar-11.jpg',
        supports: 1300,
        createdAt: dayjs().subtract(2, 'day').unix() * 1000,
        thumbnail: 'sample-campaign-6.jpg'
    },
    {
        name: 'Fashion Week 2025',
        creator: 'Fashion Week',
        avatar: 'sample-avatar-12.jpg',
        supports: 180000,
        createdAt: dayjs().subtract(1, 'week').unix() * 1000,
        thumbnail: 'sample-campaign-7.jpg'
    },
    {
        name: 'ASO Rock Festa 2022',
        creator: 'ASO Rock Festa',
        avatar: 'sample-avatar-13.jpg',
        supports: 3400,
        createdAt: dayjs().subtract(2, 'week').unix() * 1000,
        thumbnail: 'sample-campaign-4.jpg'
    },
    {
        name: 'Celebrating Women’s History Month',
        creator: 'The National Library',
        avatar: 'sample-avatar-14.jpg',
        supports: 34500,
        createdAt: dayjs().subtract(5, 'day').unix() * 1000,
        thumbnail: 'sample-campaign-9.jpg'
    },
    {
        name: 'Fusion Beats Global Music Carnival',
        creator: 'World Rhythms Collective',
        avatar: 'sample-avatar-15.jpg',
        supports: 56200,
        createdAt: dayjs().subtract(2, 'week').unix() * 1000,
        thumbnail: 'sample-campaign-10.jpg'
    },
    {
        name: 'Blossom Serenity: Flower Watching Extravaganza',
        creator: 'Floral Harmony Events',
        avatar: 'sample-avatar-16.jpg',
        supports: 12800,
        createdAt: dayjs().subtract(6, 'day').unix() * 1000,
        thumbnail: 'sample-campaign-11.jpg'
    },
    {
        name: 'Eco-Fiesta: A Green Living Celebration',
        creator: 'Green Horizon Initiatives',
        avatar: 'sample-avatar-17.jpg',
        supports: 43000,
        createdAt: dayjs().subtract(3, 'week').unix() * 1000,
        thumbnail: 'sample-campaign-12.jpg'
    }
];

function getAvatarUrl(name) {
    const filename = `/assets/img/sample/${name}`;
    return new URL(filename, import.meta.url).href;
}
function getThumbnailUrl(name) {
    const filename = `/assets/img/sample/${name}`;
    return new URL(filename, import.meta.url).href;
}

onMounted(() => {
    emit('change-navbar', 'transparent');
});
</script>

<template>
    <LayoutMain :navbarColor="navbarColor">
        <div class="campaign-page">
            <div class="container">
                <div ref="action" class="action">
                    <div class="frame">
                        <div class="card campaign-frame">
                            <img
                                class="frame-active"
                                :src="getFrameUrl(frameLists[frameIndex])"
                                :alt="frameLists[frameIndex]"
                            />
                        </div>
                        <div class="card frame-selector">
                            <div class="frame-platform"></div>
                            <div class="p-2.5">
                                <QSlider
                                    class="mt-1.5 mb-4 w-fit"
                                    direction="horizontal"
                                    :centered-slides="false"
                                    :centered-slides-bounds="false"
                                    slides-per-view="auto"
                                >
                                    <swiper-slide
                                        v-for="(filename, i) in frameLists"
                                        :key="i"
                                        class="frame-slider mr-4 last:mr-0"
                                        :class="{ active: frameIndex === i }"
                                        @click="setActiveFrame(i)"
                                    >
                                        <img
                                            class="campaign"
                                            :src="getFrameUrl(filename)"
                                            :alt="filename"
                                        />
                                    </swiper-slide>
                                </QSlider>
                                <QButton variant="primary" class="frame-button">
                                    <i class="ri-camera-line"></i>
                                    <span>Upload Your Photo</span>
                                </QButton>
                            </div>
                        </div>
                    </div>
                    <div class="card campaign-detail">
                        <h1 class="campaign-title">
                            Hanoi Art Book Fair - Art and Import Book Fair
                        </h1>
                        <div class="flex items-center gap-1.5 mt-4">
                            <img
                                class="avatar"
                                src="/assets/img/creator/creator-default.jpg"
                                alt="-"
                            />
                            <p class="creator-name">Hanoi Art Book Fair</p>
                        </div>
                        <p
                            class="campaign-description mt-4"
                            :class="{ 'line-clamp-2': !isReadMore }"
                        >
                            Welcome to Hanoi Art Book Fair 2023. Our primary mission is to cultivate
                            reading habits, increase art literacy worldwide and build a new
                            generation of readers, by making books more affordable.
                        </p>
                        <p v-if="!isReadMore" @click="clickReadMore" class="read-more mt-2">
                            Read More
                        </p>
                        <div class="card-line mt-4"></div>
                        <MetaInfo :is-line="true" />
                        <div class="campaign-share">
                            <div class="campaign-link">
                                <i class="ri-links-line"></i>
                                <p class="text-sm leading-none">twb.nz/hanoi-art</p>
                                <div class="share-icon">
                                    <i class="ri-share-line"></i>
                                </div>
                            </div>

                            <QButton variant="secondary" :circle="true">
                                <i class="ri-bookmark-line"></i>
                            </QButton>
                        </div>
                    </div>
                </div>
                <div class="feeds">
                    <div class="card campaign-feeds">
                        <div class="feeds-empty-state">
                            <div v-for="i in 9" :key="i" class="card-empty-state">
                                <div class="overlay"></div>
                                <img
                                    class="frame"
                                    :src="getFrameUrl(frameLists[frameIndex])"
                                    :alt="getFrameUrl(frameIndex)"
                                />
                                <img class="user" :src="getSampleUser(i)" :alt="`user${i}`" />
                            </div>
                            <div class="empty-state-text">
                                <div class="title">No post yet</div>
                                <div class="description">
                                    Be the first to post your support here. <br />
                                    Start with uploading your photo!
                                </div>
                            </div>
                        </div>
                        <div class="feeds-action">
                            <QButton
                                @click="changeLayout"
                                v-if="layout === 'grid'"
                                variant="light"
                                :circle="true"
                                class="icon"
                            >
                                <i class="ri-layout-grid-line"></i>
                            </QButton>
                            <QButton
                                @click="changeLayout"
                                v-else-if="layout === 'list'"
                                variant="light"
                                :circle="true"
                                class="icon"
                            >
                                <i class="ri-list-unordered"></i>
                            </QButton>
                            <QButton variant="light" :circle="true" class="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M27 6V12C27 12.2652 26.8946 12.5196 26.7071 12.7071C26.5196 12.8946 26.2652 13 26 13C25.7348 13 25.4804 12.8946 25.2929 12.7071C25.1054 12.5196 25 12.2652 25 12V8.41375L18.7075 14.7075C18.5199 14.8951 18.2654 15.0006 18 15.0006C17.7346 15.0006 17.4801 14.8951 17.2925 14.7075C17.1049 14.5199 16.9994 14.2654 16.9994 14C16.9994 13.7346 17.1049 13.4801 17.2925 13.2925L23.5863 7H20C19.7348 7 19.4804 6.89464 19.2929 6.70711C19.1054 6.51957 19 6.26522 19 6C19 5.73478 19.1054 5.48043 19.2929 5.29289C19.4804 5.10536 19.7348 5 20 5H26C26.2652 5 26.5196 5.10536 26.7071 5.29289C26.8946 5.48043 27 5.73478 27 6ZM13.2925 17.2925L7 23.5863V20C7 19.7348 6.89464 19.4804 6.70711 19.2929C6.51957 19.1054 6.26522 19 6 19C5.73478 19 5.48043 19.1054 5.29289 19.2929C5.10536 19.4804 5 19.7348 5 20V26C5 26.2652 5.10536 26.5196 5.29289 26.7071C5.48043 26.8946 5.73478 27 6 27H12C12.2652 27 12.5196 26.8946 12.7071 26.7071C12.8946 26.5196 13 26.2652 13 26C13 25.7348 12.8946 25.4804 12.7071 25.2929C12.5196 25.1054 12.2652 25 12 25H8.41375L14.7075 18.7075C14.8951 18.5199 15.0006 18.2654 15.0006 18C15.0006 17.7346 14.8951 17.4801 14.7075 17.2925C14.5199 17.1049 14.2654 16.9994 14 16.9994C13.7346 16.9994 13.4801 17.1049 13.2925 17.2925Z"
                                        fill="#1B1B1B"
                                    />
                                </svg>
                            </QButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="more-campaign py-24">
            <div class="flex justify-between items-center gap-14 pb-10 w-full container px-5">
                <div class="line"></div>
                <h3 class="title">More Like This</h3>
                <div class="line"></div>
            </div>
            <div class="campaign-grid container px-5">
                <CampaignCard
                    v-for="(
                        { name, avatar, creator, createdAt, supports, thumbnail }, i
                    ) in moreCampaigns"
                    :key="i"
                    :name="name"
                    :creator="creator"
                    :avatar="getAvatarUrl(avatar)"
                    :supports="supports"
                    :created-at="createdAt"
                    :thumbnail="getThumbnailUrl(thumbnail)"
                />
            </div>
        </div>
    </LayoutMain>
</template>

<style lang="scss">
.campaign-page {
    background: linear-gradient(
            0deg,
            #dee8e8 9.54%,
            rgba(222, 232, 232, 0) 100.73%,
            rgba(222, 232, 232, 0) 100.73%
        ),
        url('/assets/img/background/bg-default.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: fit-content;

    .container {
        @apply mx-auto px-5 flex gap-6 pt-[200px] pb-[100px];
        height: fit-content;
    }

    .action {
        @apply h-full flex flex-col justify-between;
        width: 320px;
        height: 85vh;
    }

    .feeds {
        @apply w-full relative;
        height: 85vh;
    }

    .card {
        @apply bg-white rounded-3xl;
        border: 1px solid var(--White, #fff);
        box-shadow: 0px 5.064px 25.321px 0px rgba(0, 0, 0, 0.1);
    }

    .card-line {
        @apply w-full;
        border-top: rgba(27, 27, 27, 0.1) 1px solid;
    }

    .frame {
        @apply relative;
    }

    .campaign-frame {
        @apply p-2.5 rounded-3xl flex mx-4 z-20 relative;
    }

    .campaign-share {
        @apply flex gap-2 mt-4;
    }

    .campaign-link {
        @apply flex pl-3 pr-1.5 bg-white items-center rounded-full w-full gap-2 h-10;
        border: 1px solid var(--color-light);

        p {
            @apply w-full text-[#454546] text-ellipsis overflow-hidden whitespace-nowrap;
        }

        .share-icon {
            @apply bg-main h-7 w-7 rounded-full flex items-center justify-center aspect-square;
        }
    }
    .bookmark-icon {
        @apply h-10 w-10 rounded-full flex items-center justify-center aspect-square;
        border: 1px solid var(--color-light);

        i {
            @apply text-base;
        }
    }

    .frame-selector {
        @apply -mt-3.5 w-full z-10;
        border-radius: 14px 14px 20px 20px !important;
        border: none !important;
    }

    .frame-platform {
        @apply rounded-2xl h-7 bg-light w-full;
        border: 3px solid var(--color-white);
    }

    .frame-active {
        @apply w-full rounded-xl;
    }

    .frame-slider {
        @apply p-2 rounded-lg h-14 w-14 cursor-pointer;
        border: 1px solid var(--color-light);

        &.active {
            @apply cursor-default;
            border-color: var(--color-main);
            background: #dee8e8;
        }
    }

    .frame-button {
        @apply w-full text-base font-bold gap-2;
        padding: 13px 20px !important;
    }

    .campaign-detail {
        @apply p-4 mt-6;

        .avatar {
            @apply rounded-full;
            height: 28px;
            width: 28px;
        }

        .campaign-title {
            @apply text-2xl font-bold text-ellipsis overflow-hidden whitespace-nowrap;
        }

        .creator-name {
            @apply text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap;
        }

        .campaign-description {
            @apply text-base;
        }

        .read-more {
            @apply text-base font-bold underline cursor-pointer;
        }
    }

    .campaign-feeds {
        @apply w-full p-2.5 relative overflow-hidden;
        height: 85vh;
    }

    .feeds-empty-state {
        @apply grid grid-cols-3 gap-2.5;
    }

    .card-empty-state {
        @apply aspect-square relative;

        .overlay {
            @apply absolute w-full h-full bg-light opacity-[85%] z-20;
        }

        .frame {
            @apply absolute top-0 left-0 z-10;
        }

        .user {
        }
    }

    .empty-state-text {
        @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40;

        .title {
            @apply text-center font-bold text-2xl;
        }

        .description {
            @apply text-center text-xl mt-2.5;
        }
    }

    .feeds-action {
        @apply absolute bottom-0 w-full z-30 h-80 flex items-end px-3 pb-2.5 gap-4 pointer-events-none;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 83.09%);

        .icon {
            @apply font-normal bg-light h-14 w-14 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto;

            i {
                @apply text-[32px];
            }
        }
    }
}

.more-campaign {
    .campaign-grid {
        @apply grid grid-cols-4 gap-8;
    }

    .title {
        @apply font-bold text-3xl;
    }

    .line {
        @apply bg-light flex-1 w-full h-[1px];
    }
}
</style>
