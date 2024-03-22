<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
    breakpointsTailwind,
    useBreakpoints,
    useResizeObserver,
    useWindowScroll,
    useWindowSize,
    useScroll,
    useDebounceFn,
    useMounted,
    useElementSize,
    computedAsync
} from '@vueuse/core';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QButton from '@/components/atoms/QButton.vue';
import QCreator from '@/components/atoms/QCreator.vue';
import QShareButton from '@/components/atoms/QShareButton.vue';
import QSkeleton from '@/components/atoms/QSkeleton.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import CampaignMeta from '@/components/molecules/CampaignMeta.vue';
import PostWrapper from '@/components/molecules/PostWrapper.vue';
import PostMockup from '@/components/molecules/PostMockup.vue';
import CampaignCard from '@/components/molecules/CampaignCard.vue';

import CollectionModal from '@/components/organisms/CollectionModal.vue';
import ShareModal from '@/components/organisms/ShareModal.vue';

import { useModal } from '@/composables/modal';
import { publicPosts } from '@/mock/posts';
import { publicCampaigns, mockCampaigns } from '@/mock/campaigns';
import { useNavbarStore } from '@/stores/navbarStore';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const frames = [
    '/assets/img/frames/hanoi-art-frame-1.png',
    '/assets/img/frames/hanoi-art-frame-2.png',
    '/assets/img/frames/hanoi-art-frame-3.png',
    '/assets/img/frames/hanoi-art-frame-4.png'
];

const props = defineProps({
    transitioned: {
        type: Boolean
    }
});
const campaignPage = ref(null);
const campaignMain = ref(null);
const campaignContent = ref(null);
const campaignFeeds = ref(null);
const campaignFeedsPanels = ref(null);
const campaignFeedsWrapper = ref(null);
const inputPhoto = ref(null);
const selectedFrame = ref(frames[0]);
const selectedPhoto = ref(null);
const posts = ref([]);
const isLoadingPost = ref(false);
const displayType = ref('grid');

const mocks = [...mockCampaigns];

const router = useRouter();
const { open: openModal } = useModal();
const { height: windowHeight } = useWindowSize();
const campaignContentSize = useElementSize(campaignContent);
const { y } = useWindowScroll();
const isMounted = useMounted();
const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');
const xl = breakpoints.greaterOrEqual('xl');
const { isScrolling, y: feedsScrollY } = useScroll(campaignFeedsWrapper);

const selectedFrameIdx = computed(() => frames.findIndex((fr) => fr === selectedFrame.value));

const campaignContentStyle = computed(() => {
    if (!campaignContent.value) {
        return {
            transform: `scale(1) translateY(0)`
        };
    }

    const { height: contentHeight } = campaignContentSize;

    const totalContentHeight = contentHeight.value;
    const additionalSpace = 88 + 12 + 24; // topY + padding-top + padding-bottom

    if (!xl.value || windowHeight.value - additionalSpace > totalContentHeight) {
        return {
            transform: `scale(1) translateY(0)`
        };
    }

    const targetScale = (windowHeight.value - additionalSpace) / totalContentHeight;
    const targetHeight = totalContentHeight * targetScale;
    const translateY = (totalContentHeight - targetHeight) / 2;

    return {
        transform: `scale(${targetScale}) translateY(${-translateY}px)`
    };
});

const campaignPageStyle = computedAsync(async () => {
    if (!xl.value) {
        return {
            height: 'auto'
        };
    }
    const scaleRegex = /scale\(([^)]+)\)/;

    const match = scaleRegex.exec(campaignContentStyle.value.transform);
    const scale = parseFloat(match[1]);

    await nextTick();

    const { height: contentHeight } = campaignContentSize;

    const parsedScale = parseFloat(scale);

    if (parsedScale === 1) {
        return {
            height: 'auto'
        };
    }

    const additionalSpace = 88 + 36; // topY + padding-top + padding-bottom

    const targetHeight = contentHeight.value * parsedScale + additionalSpace;
    return {
        height: `${targetHeight}px`
    };
});

const toggleDisplay = () => {
    displayType.value = displayType.value === 'grid' ? 'list' : 'grid';
};

const openInputPhoto = (e) => {
    e.preventDefault();
    inputPhoto.value.value = null;
    inputPhoto.value.click();
};

const onInputPhotoChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        selectedPhoto.value = selectedFile;
        router.push({ name: 'campaign-support' });
    }
};

const onClickShare = () => {
    openModal({
        component: ShareModal,
        config: {
            position: sm.value ? 'bottom' : 'center',
            draggable: false,
            transition: 'fade'
        },
        props: {
            link: 'twb.nz/hanoi-art-2025',
            payload: { thumbnail: '/assets/img/posts/hanoi-art-book-fair/art_book_fair_1.jpg' },
            type: 'campaign'
        }
    });
};

const onClickCollection = () => {
    // size="lg" :position="sm ? 'bottom' : 'center'"
    openModal({
        component: CollectionModal,
        props: {
            campaign: {
                name: 'Hanoi Art Book Fair 2025',
                thumbnail: '/assets/img/posts/hanoi-art-book-fair/art_book_fair_1.jpg'
            }
        },
        config: { size: 'lg', position: sm.value ? 'bottom' : 'center', transition: 'slide-up' }
    });
};

let autoScrollTween;

const calcDuration = () => {
    const context = document.querySelector('.campaign-feeds__wrapper');

    if (!context) {
        return 30;
    }
    const item = context.querySelector('.post-wrapper');

    const etaDuration = item.clientHeight / (displayType.value === 'grid' ? 4.5 : 1.6);

    // Get the maximum scroll position
    const maxScroll = context.scrollHeight - context.offsetHeight;

    // Calculate the remaining distance to scroll
    const remainingDistance = maxScroll - feedsScrollY.value;

    // Adjust the duration based on the remaining distance
    const adjustedDuration = (remainingDistance / maxScroll) * etaDuration;
    return Math.round(adjustedDuration);
};

const initAutoScrollTween = () => {
    const duration = calcDuration();

    if (autoScrollTween) {
        autoScrollTween.kill();
    }

    autoScrollTween = gsap.to('.campaign-feeds__wrapper', {
        scrollTo: {
            y: 'max',
            autoKill: true
        },
        ease: 'none',
        duration: duration
    });
};

useResizeObserver(campaignMain, (entries) => {
    const entry = entries[0];
    const { height } = entry.contentRect;

    if (!sm.value) {
        campaignFeeds.value.style.height = `${height}px`;
    } else {
        campaignFeeds.value.style.height = 'fit-content';
    }
});

watch(y, (newValue) => {
    if (newValue > 110) {
        setNavbarColor('white');
        setShadow(true);
        setLogoVariant('main');
        setCtaVariant('accent');
    } else {
        setNavbarColor('transparent');
        setShadow(false);
        setLogoVariant('white');
        setCtaVariant('accent');
    }

    const scrollMaxY =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (y.value >= scrollMaxY - 300) {
        document.querySelector('.campaign__background').style.opacity = '0';
    } else {
        document.querySelector('.campaign__background').style.opacity = '100';
    }
});

watch(
    isScrolling,
    useDebounceFn(() => isMounted.value && initAutoScrollTween(), 1500)
);
watch(displayType, () => {
    nextTick();
    initAutoScrollTween();
});

watch(
    posts,
    useDebounceFn((newValue) => {
        if (newValue.length) {
            initAutoScrollTween();
        }
    }, 300)
);

onMounted(async () => {
    await nextTick();

    setNavbarColor('transparent');
    setShadow(false);
    setLogoVariant('white');
    setCtaVariant('accent');

    posts.value = [...publicPosts];
});
</script>

<template>
    <LayoutMain>
        <div ref="campaignPage" class="page campaign" :style="campaignPageStyle">
            <div class="campaign__background"></div>
            <div class="campaign__linear"></div>
            <div ref="campaignContent" class="campaign__content" :style="campaignContentStyle">
                <div class="grid grid-cols-12 md:gap-6">
                    <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                        <div ref="campaignMain" class="campaign__main">
                            <div class="campaign__frames">
                                <div class="campaign__frames__stage">
                                    <router-link :to="{ name: 'campaign-support' }">
                                        <img
                                            :src="selectedFrame"
                                            class="campaign__frames__stage__image"
                                        />
                                    </router-link>
                                </div>

                                <div class="campaign__frames__card">
                                    <RadioGroup v-model="selectedFrame">
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
                                        <QButton :block="!sm" @click="openInputPhoto">
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
                                                <span class="ml-1">Choose Your Photo</span>
                                            </span>
                                        </QButton>

                                        <input
                                            ref="inputPhoto"
                                            type="file"
                                            name="photo"
                                            id="photo"
                                            class="hidden"
                                            @change="onInputPhotoChange"
                                            accept="image/png, image/jpg, image/jpeg, image/webp"
                                        />
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
                                    ref="campaignFeedsWrapper"
                                    :class="[
                                        'campaign-feeds__wrapper',
                                        !posts.length && 'campaign-feeds__wrapper--mock',
                                        displayType === 'grid'
                                            ? 'campaign-feeds__grid'
                                            : 'campaign-feeds__list'
                                    ]"
                                >
                                    <PostMockup
                                        v-if="!posts.length"
                                        v-for="(mock, i) in mocks"
                                        :key="i"
                                        v-bind="mock"
                                        :display="displayType"
                                        :rounded="!sm"
                                    />
                                    <PostWrapper
                                        v-else
                                        v-for="post in posts"
                                        :key="post.uri"
                                        v-bind="post"
                                        :campaignOwnerPriviledge="false"
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
                                    v-if="!sm"
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

                        <div v-if="sm" class="pt-8 px-4">
                            <QButton
                                variant="secondary"
                                size="sm"
                                block
                                @click="$router.push({ name: 'campaign-feeds' })"
                            >
                                View All
                            </QButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- fullscreen mode -->
        <router-view v-slot="{ Component, route }">
            <transition name="fade">
                <template v-if="route.name === 'campaign-support'">
                    <component
                        :is="Component"
                        :frames="frames"
                        :selectedFrameIdx="selectedFrameIdx"
                        :photo="selectedPhoto"
                        :openInputPhoto="openInputPhoto"
                    />
                </template>

                <template v-else>
                    <component
                        :is="Component"
                        :posts="posts"
                        :displayType="displayType"
                        @toggle-display="(newValue) => (displayType = newValue)"
                    />
                </template>
            </transition>
        </router-view>

        <div class="campaign-recommendations bg-gray-50 relative z-10">
            <div class="campaign-separator"></div>
            <div class="container px-4 2xl:px-0 pb-10">
                <h3 class="font-bold text-2xl mb-10">More Like This</h3>
                <div class="campaign-recommendations__grid">
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
                height: calc(100dvh);
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
        @apply px-0 md:px-5 2xl:px-0;

        @include md_screen {
            @apply container;
        }

        @include lg_screen {
            padding-top: 24px;
            padding-bottom: 24px;
        }

        @include xl_screen {
            padding-top: 12px;
            padding-bottom: 24px;
        }
    }

    .campaign__analytic {
        @apply relative z-50 container mx-auto px-0 md:px-5 2xl:px-0;

        &-wrapper {
            @apply bg-white px-6 flex flex-col pt-10 border-t;

            @include lg_screen {
                @apply flex-row items-center justify-between py-6 rounded-2xl;
            }
        }

        &-stats {
            @apply flex items-center justify-between w-full overflow-hidden;

            @include lg_screen {
                @apply w-fit;
            }
        }

        &-stat {
            @apply flex flex-col items-center border-r border-stroke flex-grow flex-shrink-0 w-0;

            @include lg_screen {
                @apply w-fit items-start px-10;
            }

            &:first-of-type {
                @apply pl-0;
            }

            &:last-of-type {
                @apply border-r-0;
            }
        }

        &-detail {
            @apply flex flex-col-reverse items-center mt-10 text-center;

            @include lg_screen {
                @apply flex-row mt-0;
            }

            &__note {
                @apply text-sm text-content mt-3;

                @include lg_screen {
                    @apply mt-0 mr-3;
                }
            }
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
        margin-top: -1px;
        padding-bottom: 24px;
        box-shadow: 0 19px 24px rgba(0, 0, 0, 0.15);

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

.campaign-edit {
    @apply fixed bottom-0 right-0 w-full z-50 py-5;
}

// campaign feeds
.campaign-feeds {
    @apply h-full w-full bg-white relative overflow-hidden;

    // opacity: 0;
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
        @include no_scrollbar();

        @include sm {
            @include before {
                height: 16px;
                top: -24px;
                left: 0;
                display: block;
                width: 100%;
                background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 91%);
                filter: blur(10px);
                z-index: 10;
                pointer-events: none;
            }

            @include after {
                height: 24px;
                bottom: -24px;
                left: 0px;
                display: block;
                width: 100%;
                background: linear-gradient(0deg, rgb(0 0 0) 0%, rgba(0, 0, 0, 0.1) 100%);
                filter: blur(10px);
                z-index: 10;
                pointer-events: none;
            }
        }

        @include md_screen {
            @apply absolute left-0 top-0 h-full w-full overflow-y-auto p-2 overflow-scroll pb-16;
        }
    }

    .campaign-feeds__wrapper {
        // padding: 7px 0px;
        padding-top: 8px;
        position: relative;
        z-index: 0;

        @apply rounded-none;

        @include md_screen {
            padding-top: 0px;
            @apply rounded-xl;
        }
    }

    .campaign-feeds__grid {
        @apply container grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2.5 overflow-y-auto;
        max-height: 420px;
        @include no_scrollbar();

        @include sm {
            @include before {
                height: 8px;
                top: 0px;
                left: 0;
                display: block;
                width: 100%;
                @apply bg-stroke;
            }

            @include after {
                height: 8px;
                position: relative;
                display: block;
                width: 100%;
                margin-top: -4px;
                @apply bg-stroke col-span-3;
            }
        }

        @include md_screen {
            max-height: 100%;
        }
    }

    .campaign-feeds__list {
        @apply flex flex-col space-y-5 pt-4 overflow-y-auto;

        max-height: 420px;
        @include no_scrollbar();

        @include sm {
            @apply container px-4;
        }

        @include md_screen {
            max-height: 100%;
        }
    }

    .campaign-feeds__wrapper.campaign-feeds__wrapper--mock.campaign-feeds__grid,
    .campaign-feeds__wrapper.campaign-feeds__wrapper--mock.campaign-feeds__list {
        @apply overflow-y-hidden;
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

.campaign-recommendations {
    .campaign-recommendations__grid {
        @apply grid grid-cols-2 md:grid-cols-4 gap-6;

        @include xs {
            @apply gap-3;
        }
    }
}
</style>
