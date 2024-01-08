<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import MetaInfo from '@/components/molecules/MetaInfo.vue';
import QButton from '@/components/atoms/QButton.vue';
import QSlider from '@/components/atoms/QSlider.vue';

const emit = defineEmits(['change-navbar']);

const { width, height } = useWindowSize();

const isReadMore = ref(false);

const clickReadMore = () => {
    isReadMore.value = true;
};

const frameLists = [
    'hanoi-art-frame-1',
    'hanoi-art-frame-2',
    'hanoi-art-frame-3',
    'hanoi-art-frame-4',
];

const frameIndex = ref(0);

const getFrameUrl = (frame) => {
    return `/assets/img/frames/${frame}.png`;
}

const setActiveFrame = (index) => {
    frameIndex.value = index;
}

onMounted(() => {
    emit('change-navbar', 'transparent');
});
</script>

<template>
    <div class="campaign-page">
        <div class="container">
            <div class="action">
                <div class="frame">
                    <div class="card campaign-frame">
                        <img class="frame-active" :src="getFrameUrl(frameLists[frameIndex])" :alt="frameLists[frameIndex]">
                    </div>
                    <div class="card frame-selector">
                        <div class="frame-platform">
                        </div>
                        <div class="p-2.5">
                            <QSlider
                                class="mt-1.5 mb-4 w-fit"
                                direction="horizontal"
                                :centered-slides="false"
                                :centered-slides-bounds="false"
                                slides-per-view="auto"
                            >
                                <swiper-slide
                                    v-for="(filename, i) in frameLists" :key="i"
                                    class="frame-slider mr-4 last:mr-0"
                                    :class="{ 'active': frameIndex === i }"
                                    @click="setActiveFrame(i)"
                                >
                                    <img class="campaign" :src="getFrameUrl(filename)" :alt="filename" />
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
                    <h1 class="campaign-title">Hanoi Art Book Fair - Art and Import Book Fair</h1>
                    <div class="flex items-center gap-1.5 mt-4">
                        <img class="avatar" src="/assets/img/creator/creator-default.jpg" alt="-" />
                        <p class="creator-name">Hanoi Art Book Fair</p>
                    </div>
                    <p class="campaign-description mt-4" :class="{ 'line-clamp-2': !isReadMore }">
                        Welcome to Hanoi Art Book Fair 2023. Our primary mission is to cultivate
                        reading habits, increase art literacy worldwide and build a new generation
                        of readers, by making books more affordable.
                    </p>
                    <p v-if="!isReadMore" @click="clickReadMore" class="read-more mt-2">
                        Read More
                    </p>
                    <div class="card-line mt-4"></div>
                    <MetaInfo />
                </div>
            </div>
            <div class="feeds"></div>
        </div>
    </div>
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
    height: 100vh;

    .container {
        @apply mx-auto px-5 flex gap-6;
        padding-top: 20vh;
        height: 70vh;
    }

    .action {
        @apply h-full;
        width: 320px;
    }

    .feeds {
        @apply h-full;
        height: 100%;
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
        @apply p-2.5 rounded-3xl flex mt-4 mx-4 z-20 relative;
    }

    .frame-selector {
        @apply -mt-3.5 w-full z-10;
        border-radius: 14px 14px 20px 20px !important;
        border: none !important;
    }

    .frame-platform {
        @apply rounded-2xl h-7 bg-light w-full;
        border: 1.2px solid var(--color-white);
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
            background: #DEE8E8;
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
}
</style>
