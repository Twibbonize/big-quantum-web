<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';

import {
    breakpointsTailwind,
    useBreakpoints,
    useResizeObserver,
    useWindowScroll,
    useWindowSize
} from '@vueuse/core';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QButton from '@/components/atoms/QButton.vue';
import QCreator from '@/components/atoms/QCreator.vue';
import QShareButton from '@/components/atoms/QShareButton.vue';
import QSkeleton from '@/components/atoms/QSkeleton.vue';
import QModal from '@/components/atoms/QModal.vue';

import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import CampaignMeta from '@/components/molecules/CampaignMeta.vue';
import PostWrapper from '@/components/molecules/PostWrapper.vue';
import CampaignCard from '@/components/molecules/CampaignCard.vue';

import { useCollectionStore } from '@/stores/collectionStore';
import { useShareStore } from '@/stores/shareStore';
import { publicPosts } from '@/mock/posts';
import { publicCampaigns } from '@/mock/campaigns';

gsap.registerPlugin(ScrollTrigger);

const frames = [
    '/assets/img/frames/hanoi-art-frame-1.png',
    '/assets/img/frames/hanoi-art-frame-2.png',
    '/assets/img/frames/hanoi-art-frame-3.png',
    '/assets/img/frames/hanoi-art-frame-4.png'
];

const navbarColor = ref('transparent');
const navbarShadow = ref(false);

const campaignPage = ref(null);
const campaignMain = ref(null);
const campaignFeeds = ref(null);
const campaignFeedsPanels = ref(null);

const selectedFrames = ref(frames[0]);
const posts = ref([...publicPosts]);
const isLoadingPost = ref(false);
const displayType = ref('grid');
// const isFullScreenFeedsOpen = ref(false);

const shareStore = useShareStore();
const collectionStore = useCollectionStore();
const breakpoints = useBreakpoints(breakpointsTailwind);
const { height: windowHeight } = useWindowSize();
const { y } = useWindowScroll();

const { openShare } = shareStore;
const { showCollectionModal } = collectionStore;

const sm = breakpoints.smallerOrEqual('sm');
const xl = breakpoints.greaterOrEqual('xl');

const itemsToAdd = 3;
const lazyLoad = () => {
    if (isLoadingPost.value) return;

    if (posts.value.length >= 21) {
        return;
    }

    isLoadingPost.value = true;

    setTimeout(() => {
        posts.value = [
            ...posts.value,
            ...publicPosts.slice(posts.value.length, posts.value.length + itemsToAdd)
        ];
        isLoadingPost.value = false;
    }, 1000);
};

const toggleDisplay = () => {
    displayType.value = displayType.value === 'grid' ? 'list' : 'grid';
};

const onClickShare = () => {
    // const { url, thumbnail } = props;
    openShare(
        'twb.nz/hanoi-art-2025',
        { thumbnail: '/assets/img/posts/hanoi-art-book-fair/art_book_fair_1.jpg' },
        'campaign'
    );
};

const onClickCollection = () => {
    showCollectionModal({
        name: 'Hanoi Art Book Fair 2025',
        thumbnail: '/assets/img/posts/hanoi-art-book-fair/art_book_fair_1.jpg'
    });
};

const scaleCampaignPage = () => {
    if (!xl.value) {
        return;
    }

    const campaignContent = document.querySelector('.campaign__content');
    const campaignContentRect = campaignContent.getBoundingClientRect();

    campaignContent.style.transform = `scale(${1}) translateY(${0}px)`;

    const { height: campaignContentHeight, top: campaignContentTop } = campaignContentRect;

    const totalCampaignContentHeight = campaignContentHeight + campaignContentTop;

    if (windowHeight.value > totalCampaignContentHeight) {
        return;
    }

    const additionalSpace = xl.value ? 88 : 0;
    const targetScale = windowHeight.value / (totalCampaignContentHeight + additionalSpace);
    const targetHeight = campaignContentHeight * targetScale;
    const translateY = (totalCampaignContentHeight - targetHeight) / 2 - 44;

    campaignContent.style.transform = `scale(${targetScale}) translateY(${-translateY}px)`;
};

watch(y, (newValue) => {
    if (newValue > 110) {
        navbarColor.value = 'white';
        navbarShadow.value = true;
    } else {
        navbarColor.value = 'transparent';
        navbarShadow.value = false;
    }

    const scrollMaxY =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (y.value >= scrollMaxY - 300) {
        document.querySelector('.campaign__background').style.opacity = '0';
    } else {
        document.querySelector('.campaign__background').style.opacity = '100';
    }
});

useResizeObserver(campaignMain, (entries) => {
    const entry = entries[0];
    const { height } = entry.contentRect;

    if (!sm.value) {
        campaignFeeds.value.style.height = `${height}px`;
    } else {
        campaignFeeds.value.style.height = 'fit-content';
    }
});

useResizeObserver(campaignPage, scaleCampaignPage);

onMounted(async () => {
    // gsap.to('.campaign-feeds__panels', {
    //     scrollTrigger: {
    //         trigger: '.campaign-feeds__panels',
    //         end: 'bottom top',
    //         start: 'bottom bottom',
    //         onUpdate: () => {
    //             lazyLoad();
    //         }
    //     }
    // });

    await nextTick();
    scaleCampaignPage();
});
</script>
<template>
    <LayoutMain :navbarColor="navbarColor" :navbarShadow="navbarShadow">
        <div ref="campaignPage" class="page campaign">
            <div class="campaign__background"></div>
            <div class="campaign__linear"></div>
            <div class="campaign__content container px-0 md:px-5 2xl:px-0">
                <div class="grid grid-cols-12 md:gap-6">
                    <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                        <div ref="campaignMain" class="campaign__main">
                            <div class="campaign__frames">
                                <div class="campaign__frames__stage">
                                    <img
                                        :src="selectedFrames"
                                        class="campaign__frames__stage__image"
                                    />
                                </div>

                                <div class="campaign__frames__card">
                                    <RadioGroup v-model="selectedFrames">
                                        <div class="campaign__frames__options">
                                            <RadioGroupOption
                                                v-for="(frame, i) in frames"
                                                :key="i"
                                                :value="frame"
                                                v-slot="{ checked }"
                                            >
                                                <div
                                                    :class="[
                                                        'campaign__frames__option',
                                                        checked &&
                                                            'campaign__frames__option--checked'
                                                    ]"
                                                >
                                                    <img :src="frame" :alt="i" />
                                                </div>
                                            </RadioGroupOption>
                                        </div>
                                    </RadioGroup>

                                    <div class="campaign__frames__action">
                                        <QButton :block="!sm">
                                            <span class="flex items-center font-semibold">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="21"
                                                    height="20"
                                                    viewBox="0 0 21 20"
                                                    fill="none"
                                                >
                                                    <g clip-path="url(#clip0_2061_6507)">
                                                        <path
                                                            d="M19.6663 15.8333C19.6663 16.2754 19.4907 16.6993 19.1782 17.0118C18.8656 17.3244 18.4417 17.5 17.9997 17.5H2.99967C2.55765 17.5 2.13372 17.3244 1.82116 17.0118C1.5086 16.6993 1.33301 16.2754 1.33301 15.8333V6.66667C1.33301 6.22464 1.5086 5.80072 1.82116 5.48816C2.13372 5.17559 2.55765 5 2.99967 5H6.33301L7.99967 2.5H12.9997L14.6663 5H17.9997C18.4417 5 18.8656 5.17559 19.1782 5.48816C19.4907 5.80072 19.6663 6.22464 19.6663 6.66667V15.8333Z"
                                                            stroke="#1B1B1B"
                                                            stroke-width="1.66667"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M10.5003 14.1669C12.3413 14.1669 13.8337 12.6745 13.8337 10.8336C13.8337 8.99263 12.3413 7.50024 10.5003 7.50024C8.65938 7.50024 7.16699 8.99263 7.16699 10.8336C7.16699 12.6745 8.65938 14.1669 10.5003 14.1669Z"
                                                            stroke="#1B1B1B"
                                                            stroke-width="1.66667"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2061_6507">
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                fill="white"
                                                                transform="translate(0.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span class="ml-1">Upload Your Photo</span>
                                            </span>
                                        </QButton>
                                    </div>
                                </div>
                            </div>

                            <div class="campaign__detail">
                                <div class="campaign__detail__title">Hanoi Art Book Fair 2025</div>

                                <div class="campaign__detail__creator">
                                    <QCreator
                                        name="Hanoi Art 2025"
                                        username="hanoiart"
                                        avatar="/assets/img/sample/sampel-avatar-18.jpg"
                                        size="md"
                                    />
                                </div>

                                <p class="campaign__detail__description">
                                    <QEllipsisText
                                        text="Welcome to Hanoi Art Book Fair 2023. Our primary mission is to cultivate reading habits,
                                increase art literacy worldwide and build a new generation of readers, by making books more
                                affordable."
                                    />
                                </p>

                                <div class="campaign__detail__meta">
                                    <div class="campaign__detail__meta-wrapper">
                                        <CampaignMeta title="Supporters" value="95.5K">
                                            <template #icon>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    :width="sm ? 20 : 16"
                                                    :height="sm ? 20 : 16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M2.00016 14.6667C1.63197 14.6667 1.32913 14.3668 1.37459 14.0014C1.70207 11.3699 3.94663 9.33342 6.66683 9.33342C9.38705 9.33342 11.6316 11.3699 11.9591 14.0014C12.0045 14.3668 11.7017 14.6667 11.3335 14.6667C10.9653 14.6667 10.6727 14.366 10.612 14.0029C10.2958 12.1097 8.6498 10.6667 6.66683 10.6667C4.68386 10.6667 3.0379 12.1097 2.72167 14.0029C2.66101 14.366 2.36835 14.6667 2.00016 14.6667ZM6.66683 8.66675C4.45683 8.66675 2.66683 6.87675 2.66683 4.66675C2.66683 2.45675 4.45683 0.666748 6.66683 0.666748C8.87683 0.666748 10.6668 2.45675 10.6668 4.66675C10.6668 6.87675 8.87683 8.66675 6.66683 8.66675ZM6.66683 7.33342C8.14016 7.33342 9.3335 6.14008 9.3335 4.66675C9.3335 3.19341 8.14016 2.00008 6.66683 2.00008C5.1935 2.00008 4.00016 3.19341 4.00016 4.66675C4.00016 6.14008 5.1935 7.33342 6.66683 7.33342ZM11.9155 10.4104C12.0667 10.0744 12.4646 9.92134 12.7789 10.1136C14.132 10.9411 15.0876 12.3549 15.2924 14.0016C15.3379 14.367 15.035 14.6667 14.6668 14.6667C14.2986 14.6667 14.006 14.3661 13.9453 14.003C13.7604 12.8955 13.1203 11.942 12.224 11.3414C11.9182 11.1365 11.7644 10.7461 11.9155 10.4104ZM11.5191 3.01714C11.632 2.62181 12.069 2.40958 12.4078 2.6424C13.3697 3.30317 14.0002 4.41099 14.0002 5.66675C14.0002 7.3214 12.9055 8.71921 11.4005 9.17589C11.0158 9.29264 10.6668 8.97201 10.6668 8.5699C10.6668 8.2294 10.9234 7.95066 11.2373 7.81875C12.0773 7.46576 12.6668 6.63541 12.6668 5.66675C12.6668 4.95265 12.3464 4.31371 11.8415 3.88579C11.5871 3.67024 11.4275 3.33772 11.5191 3.01714Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </template>
                                        </CampaignMeta>
                                    </div>
                                    <div class="campaign__detail__meta-separator"></div>
                                    <div class="campaign__detail__meta-wrapper">
                                        <CampaignMeta
                                            :iconClass="
                                                ['ri', 'ri-time-line', sm && 'ri-lg'].join(' ')
                                            "
                                            title="Created"
                                            value="5 days ago"
                                        />
                                    </div>
                                </div>
                                <div class="campaign__detail__actions">
                                    <div class="flex-grow">
                                        <QShareButton
                                            link="twb.nz/hanoi-art-2025"
                                            @click="onClickShare"
                                        />
                                    </div>

                                    <div class="flex-shrink-0">
                                        <QButton
                                            circle
                                            variant="secondary"
                                            @click="onClickCollection"
                                        >
                                            <i class="ri-bookmark-line"></i>
                                        </QButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 bg-white md:bg-transparent"
                    >
                        <div ref="campaignFeeds" class="campaign-feeds">
                            <div ref="campaignFeedsPanels" class="campaign-feeds__panels">
                                <div
                                    :class="
                                        displayType === 'grid'
                                            ? 'campaign-feeds__grid'
                                            : 'campaign-feeds__list'
                                    "
                                >
                                    <PostWrapper
                                        v-for="post in posts"
                                        :key="post.uri"
                                        v-bind="post"
                                        :campaignOwnerPriviledge="true"
                                        :display="displayType"
                                        :rounded="!sm"
                                    />

                                    <QSkeleton
                                        v-if="isLoadingPost && displayType === 'grid'"
                                        height="100%"
                                        square
                                    />
                                    <QSkeleton
                                        v-if="isLoadingPost && displayType === 'grid'"
                                        height="100%"
                                        square
                                    />
                                    <QSkeleton
                                        v-if="isLoadingPost && displayType === 'grid'"
                                        height="100%"
                                        square
                                    />

                                    <QSkeleton
                                        v-if="isLoadingPost && displayType === 'list'"
                                        height="200px"
                                        rounded
                                    />

                                    <Transition name="slide-fade">
                                        <div
                                            v-if="posts.length >= 21 && sm"
                                            class="col-span-3 md:col-span-2 lg:col-span-3"
                                        >
                                            <div class="campaign-feeds-all">
                                                <QButton
                                                    variant="secondary"
                                                    size="sm"
                                                    block
                                                    @click="
                                                        $router.push({ name: 'campaign-feeds' })
                                                    "
                                                >
                                                    View All
                                                </QButton>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>
                            </div>

                            <div class="campaign-feeds__control">
                                <QButton
                                    circle
                                    :variant="sm ? 'secondary' : 'neutral'"
                                    @click="toggleDisplay"
                                >
                                    <i
                                        :class="[
                                            displayType === 'grid'
                                                ? 'ri-list-unordered'
                                                : 'ri-layout-grid-line',
                                            'ri-lg',
                                            'font-normal'
                                        ]"
                                    ></i>
                                </QButton>

                                <QButton
                                    circle
                                    :variant="sm ? 'secondary' : 'neutral'"
                                    @click="$router.push({ name: 'campaign-feeds' })"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
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
        </div>

        <!-- fullscreen mode -->
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component
                    :is="Component"
                    :posts="posts"
                    :displayType="displayType"
                    @toggle-display="(newValue) => (displayType = newValue)"
                />
            </transition>
        </router-view>

        <div class="campaign-recommendations bg-gray-50 relative z-10">
            <div class="campaign-separator"></div>

            <div class="container px-4 2xl:px-0 pb-10">
                <h3 class="font-bold text-2xl mb-10">More Like This</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <CampaignCard
                        v-for="campaign in publicCampaigns"
                        :key="campaign.uri"
                        v-bind="campaign"
                    />
                </div>
            </div>
        </div>
    </LayoutMain>
</template>

<style scoped lang="scss">
.campaign {
    position: relative;
    z-index: 0;

    .campaign__background {
        width: 100%;
        top: 0;
        left: 0;
        height: 300px;
        position: absolute !important;

        @media screen and (min-width: 630px) {
            height: 244px;
            position: absolute;
        }

        @include before() {
            background-color: white;
            background: url('/assets/img/banners/hanoi.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: scroll;
            position: fixed;
            height: 300px;
            width: 100%;
            left: 0;
            top: 0;
        }

        @include md_screen {
            @include before() {
                background-image: url('/assets/img/banners/hanoi.jpg');
                position: fixed;
                top: 0;
                left: 0;
                height: calc(100vh);
                width: 100vw;
                background-attachment: scroll;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
        }
    }

    .campaign__linear {
        background: linear-gradient(0deg, #fff 0%, #dee8e8 22%, rgba(255, 255, 255, 0) 100%);
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 100%;
        width: 100%;
        display: none;

        @include md_screen {
            display: block;
        }
    }

    .campaign__content {
        position: relative;
        z-index: 1;
        width: 100%;
        padding-top: 24px;

        @include lg_screen {
            padding-top: 24px;
            padding-bottom: 24px;
        }

        @include xl_screen {
            padding-top: 12px;
            padding-bottom: 24px;
        }
    }

    .campaign__main {
        height: fit-content;
    }

    .campaign__frames {
        .campaign__frames__stage {
            @apply z-10 relative bg-white p-1 flex items-center mx-auto rounded-xl;
            width: fit-content;
            max-width: 120px;

            @include md_screen {
                @apply p-2;
                max-width: 94%;
                box-shadow: 0px 3.972px 3.972px 0px rgba(0, 0, 0, 0.25);
            }

            .campaign__frames__stage__image {
                @apply rounded-lg;
                max-width: 100%;
            }
        }

        .campaign__frames__card {
            @apply px-2.5 pt-16 pb-2.5 z-0 -mt-12 bg-white relative space-y-4;

            @include md_screen {
                @apply rounded-3xl pt-12 -mt-4;

                @include before {
                    @apply w-full bg-light border border-white top-0 left-0 rounded-3xl;
                    box-shadow: 0px 5.064px 25.321px 0px rgba(162, 150, 150, 0.1);
                    height: 28px;
                }
            }
        }

        .campaign__frames__options {
            @apply flex items-center justify-center space-x-2 max-w-full overflow-scroll;
            @include no_scrollbar();
        }

        .campaign__frames__option {
            @apply h-10 w-10 rounded-lg p-2 border border-stroke bg-white transition-colors duration-200 cursor-pointer;

            @include md_screen {
                @apply h-14 w-14;
            }

            &--checked {
                @apply border-main bg-gray-200;
            }
        }

        .campaign__frames__action {
            @apply flex items-center justify-center;
        }
    }

    .campaign__detail {
        @apply relative px-4 sm:mx-0 pt-8 bg-white space-y-4 flex flex-col justify-center;

        @include sm {
            @include before {
                height: 1px;
                width: calc(100% - 32px);
                left: 50%;
                transform: translate(-50%, 0%);
                @apply bg-stroke top-2;
            }
        }

        @include md_screen {
            @apply mx-0 mt-3 p-4 rounded-xl shadow-sm;
        }

        .campaign__detail__title {
            @apply text-lg lg:text-2xl font-bold text-ellipsis overflow-hidden truncate whitespace-nowrap leading-none text-center md:text-left;
        }

        .campaign__detail__description {
            @apply text-center md:text-left;
        }

        .campaign__detail__creator {
            @apply flex items-center justify-center md:justify-start;
        }

        .campaign__detail__actions {
            @apply flex items-center space-x-1 max-w-full;
        }

        .campaign__detail__meta {
            @apply flex items-center justify-center space-x-3 border-t border-transparent;

            @include md_screen {
                @apply border-stroke pt-2.5;
            }

            .campaign__detail__meta-wrapper {
                @include md_screen {
                    @apply flex-grow;
                }
            }

            .campaign__detail__meta-separator {
                @apply bg-stroke;
                width: 1px;
                height: 34px;
                display: block;
                min-height: 100%;
            }
        }
    }
}

// campaign feeds
.campaign-feeds {
    margin-top: 24px;
    @apply h-full w-full bg-white relative overflow-hidden;

    @include md_screen {
        @apply rounded-3xl shadow-sm border-transparent;
        max-height: unset;
        margin-top: 0px;
    }

    .campaign-feeds__header {
        @apply flex items-center justify-between w-full py-6 container;

        .campaign-feeds__header__left {
            @apply flex items-center;
        }
    }

    .campaign-feeds__panels {
        @apply absolute left-0 top-0 h-full w-full;

        @include sm {
            padding-top: 7px;

            @include before {
                height: 18px;
                top: -5px;
                left: 0;
                display: block;
                width: 100%;
                background: linear-gradient(0deg, rgba(194, 196, 203, 0) 18.65%, #d6d8de 100%);
            }
        }

        @include md_screen {
            @apply p-2 overflow-scroll pb-16;
        }
    }

    .campaign-feeds__grid {
        @apply container grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2.5;
    }

    .campaign-feeds__list {
        @apply flex flex-col space-y-2.5 mt-1;

        @include sm {
            @apply container px-4;
        }
    }

    .campaign-feeds-all {
        @apply container px-4 pt-6;
    }

    .campaign-feeds__control {
        @apply absolute w-full z-10 top-0 right-0 flex items-center justify-end pt-6 pr-5 space-x-2;

        @include md_screen {
            @apply bottom-0 justify-start pt-2 pb-2 pr-0 pl-2 bg-white;
            top: unset;
        }
    }

    &.campaign-feeds--fullscreen {
        @apply flex flex-col pt-0 mt-0 fixed top-0 left-0 bg-white z-50 rounded-none;

        & .campaign-feeds__panels {
            padding-top: 0px;
            @apply flex-grow overflow-y-auto;

            @include before() {
                display: none;
            }
        }

        & .campaign-feeds__grid {
            @apply justify-center grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-5;
        }
    }
}

.campaign-separator {
    height: 40px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.09);
    @apply bg-white mb-16;

    @include md_screen {
        height: 88px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(38px);
    opacity: 0;
}
</style>
