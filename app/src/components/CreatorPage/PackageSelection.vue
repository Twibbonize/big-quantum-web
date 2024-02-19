<script setup>
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import QSwitchTwo from '@/components/atoms/QSwitchTwo.vue';
import QButton from '../atoms/QButton.vue';

const { width } = useWindowSize();
const isTablet = computed(() => {
    return width >= 640 && width <= 1280;
});

const freeFeatures = computed(() => {
    return ['Create Unlimited Campaign', 'Easy To Share Short URL', 'Frame Twibbon'];
});

const individualFeatures = computed(() => {
    return [
        'No Watermark for All',
        'Background Twibbon',
        'Multiple Frames per Campaign',
        'Instant Download for All'
    ];
});

const businessFeatures = computed(() => {
    return [
        'No Watermark for All',
        'Background Twibbon',
        'Multiple Frames per Campaign',
        'Instant Download for All'
    ];
});
</script>

<template>
    <div class="package-selection">
        <img class="bg" src="/src/assets/img/patterns/background-banner-creators.png" alt="" />
        <h4 class="text-center text-3xl lg:text-6xl font-bold text-white">Your supporters await</h4>
        <p class="text-center text-base sm:text-2xl mt-8 text-white">
            Try for free, find what you need, and choose the best plan
        </p>
        <QSwitchTwo class="mt-8" />
        <div class="package">
            <div class="package-card free justify-between">
                <div
                    class="w-full flex flex-col sm:flex-row lg:flex-col gap-8 justify-between items-center"
                >
                    <div class="flex-1">
                        <h5>Free</h5>
                        <p class="mt-4">For people who are just getting started</p>
                        <QButton
                            v-if="width >= 640 && width <= 1280"
                            variant="link"
                            class="btn-free mt-8"
                        >
                            Sign Up
                        </QButton>
                        <div v-else class="line"></div>
                    </div>
                    <div class="flex flex-col flex-1 gap-6">
                        <div
                            v-for="(feature, i) in freeFeatures"
                            :key="`free-feature-${i}`"
                            class="flex items-center"
                        >
                            <div class="icon-container">
                                <i class="ri-check-line"></i>
                            </div>
                            <p>{{ feature }}</p>
                        </div>
                    </div>
                </div>
                <QButton v-if="width <= 640 || width >= 1280" variant="link" class="btn-free mt-8">
                    Sign Up
                </QButton>
            </div>
            <div class="package-card individual">
                <div
                    class="w-full flex flex-col sm:flex-row lg:flex-col gap-8 justify-between items-center"
                >
                    <div class="flex-1">
                        <h6>Premium</h6>
                        <h5>Individual</h5>
                        <p class="mt-4 mb-6">For people who want more out of Twibbonize</p>
                        <span>$12</span>
                        <QButton
                            v-if="width >= 640 && width <= 1280"
                            variant="primary"
                            class="flex items-center gap-2 w-full mt-8"
                        >
                            Purchase Now
                            <i class="ri-arrow-right-line"></i>
                        </QButton>
                        <div v-else class="line-black"></div>
                    </div>
                    <div class="flex flex-col flex-1 gap-6">
                        <div
                            v-for="(feature, i) in individualFeatures"
                            :key="`ind-feature-${i}`"
                            class="flex items-center"
                        >
                            <div class="icon-container">
                                <i class="ri-check-line"></i>
                            </div>
                            <p>{{ feature }}</p>
                        </div>
                    </div>
                </div>
                <QButton
                    v-if="width <= 640 || width >= 1280"
                    variant="primary"
                    class="flex items-center gap-2 w-full mt-8"
                >
                    Purchase Now
                    <i class="ri-arrow-right-line"></i>
                </QButton>
            </div>
            <div class="package-card business">
                <div
                    class="w-full flex flex-col sm:flex-row lg:flex-col gap-8 justify-between items-center"
                >
                    <div class="flex-1">
                        <h6>Premium</h6>
                        <h5>Business</h5>
                        <p class="mt-4 mb-6">For people who want more out of Twibbonize</p>
                        <span>Start from $48</span>
                        <QButton
                            v-if="width >= 640 && width <= 1280"
                            variant="black"
                            class="flex items-center gap-2 w-full mt-8"
                        >
                            Purchase Now
                            <i class="ri-arrow-right-line"></i>
                        </QButton>
                        <div v-else class="line-black"></div>
                    </div>
                    <div class="flex flex-col flex-1 gap-6">
                        <div
                            v-for="(feature, i) in businessFeatures"
                            :key="`free-feature-${i}`"
                            class="flex items-center"
                        >
                            <div class="icon-container">
                                <i class="ri-check-line"></i>
                            </div>
                            <p>{{ feature }}</p>
                        </div>
                    </div>
                </div>
                <QButton
                    v-if="width <= 640 || width >= 1280"
                    variant="black"
                    class="flex items-center gap-2 w-full mt-8"
                >
                    Purchase Now
                    <i class="ri-arrow-right-line"></i>
                </QButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.package-selection {
    @apply xl:rounded-3xl overflow-hidden bg-black relative flex flex-col py-14 px-5 lg:py-24 sm:px-10 xl:px-20 container items-center;

    .package {
        @apply flex flex-col lg:flex-row gap-8  w-full mt-8;
        max-width: 1200px;
    }

    .package-card {
        @apply py-16 px-8 xl:px-16 w-full flex flex-col sm:flex-row lg:flex-col rounded-3xl relative;

        h6 {
            @apply text-xxs font-bold uppercase absolute;
            letter-spacing: 2.4px;
            top: 48px;
        }

        h5 {
            @apply font-bold text-xl lg:text-2xl;
        }

        p {
            @apply text-sm lg:text-base;
        }

        span {
            @apply text-2xl	font-bold;
        }

        &.free {
            border: 1px solid #fff;
            box-shadow: 0px 1px 3px 0px rgba(18, 20, 32, 0.14);

            h5,
            p,
            i {
                @apply text-white;
            }
        }

        .btn-free {
            @apply w-full text-white;
            background: rgba(255, 255, 255, 0.08);
        }

        &.individual {
            @apply bg-white;
        }

        &.business {
            background: linear-gradient(166deg, #16dac1 9.91%, #169b9a 122.8%);
        }
    }

    .bg {
        position: absolute;
        bottom: 20%;
        left: 200%;
        width: 2000px;
        max-width: 2000px;
        transform: translateX(-50%);
        animation: 8s glow infinite ease-in-out alternate;
    }

    .line {
        @apply w-full my-8;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .line-black {
        @apply w-full my-8;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .icon-container {
        @apply flex items-center justify-center rounded-full px-1 mr-2;
        height: 24px;
        width: 24px;
        background: rgba(255, 255, 255, 0.2);
    }
}

@media screen and (min-width: 640px) {
    .package-selection {
        .bg {
            position: absolute;
            bottom: -40%;
            left: 50%;
            max-width: 100%;
            transform: translateX(-50%);
            animation: 8s glow infinite ease-in-out alternate;
        }
    }
}

@keyframes glow {
    from {
        transform: translateX(-50%) scale(0.9) rotate(0deg);
    }
    to {
        transform: translateX(-60%) scale(1.1) rotate(10deg);
    }
}
</style>
