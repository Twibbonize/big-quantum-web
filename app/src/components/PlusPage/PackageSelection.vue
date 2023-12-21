<script setup>
import { computed } from 'vue';
import QSwitchTwo from '@/components/atoms/QSwitchTwo.vue';
import QButton from '../atoms/QButton.vue';

const freeFeatures = computed(() => {
    return ['Create Unlimited Campaign', 'Easy To Share Short URL', 'Frame Twibbon'];
});

const basicFeatures = computed(() => {
    return ['No Watermark', 'No Ads'];
});
</script>

<template>
    <div class="package-selection-plus flex flex-col items-center">
        <img class="bg" src="/src/assets/img/patterns/background-banner-creators.png" alt="" />
        <h4 class="text-center text-3xl sm:text-6xl font-bold text-black">Get on the next level</h4>
        <p class="text-center text-base sm:text-2xl mt-8 text-black">
            Upgrade to Premium plan and enhance your Twibbonize experience
        </p>
        <QSwitchTwo class="mt-8" />
        <div class="package free">
            <div class="package-card free col justify-between">
                <div>
                    <h5>Free</h5>
                    <p class="mt-4">For people who are just getting started</p>
                    <div class="line"></div>
                    <div class="flex flex-col gap-6">
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
                <QButton variant="black" class="mt-8"> Sign Up </QButton>
            </div>
            <div class="package-card basic">
                <h6>Premium</h6>
                <h5>Basic</h5>
                <p class="mt-4 mb-6">For people who want a little bit more out of Twibbonize</p>
                <span>$4.99</span>
                <div class="line-black"></div>
                <div class="flex flex-col gap-6">
                    <div
                        v-for="(feature, i) in basicFeatures"
                        :key="`ind-feature-${i}`"
                        class="flex items-center"
                    >
                        <div class="icon-container">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>{{ feature }}</p>
                    </div>
                </div>
                <QButton variant="primary" class="flex items-center gap-2 w-full mt-8">
                    Purchase Now
                    <i class="ri-arrow-right-line"></i>
                </QButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.package-selection-plus {
    @apply sm:rounded-3xl relative overflow-hidden bg-main relative
        py-14 sm:py-36 px-5 sm:px-20 container items-center;

    .package {
        @apply flex flex-col sm:flex-row gap-8  w-full mt-8 gap-8;
        max-width: 1200px;
    }

    .package-card {
        @apply py-16 px-8 sm:px-16 w-full flex flex-col rounded-3xl relative;

        h6 {
            @apply text-xxs font-bold uppercase absolute;
            letter-spacing: 2.4px;
            top: 48px;
        }

        h5 {
            @apply font-bold text-2xl;
        }

        p {
            @apply text-sm sm:text-base;
        }

        span {
            @apply text-2xl	font-bold;
        }

        &.free {
            @apply bg-main;
            border: 1px solid var(--color-black);
            box-shadow: 0px 1px 3px 0px rgba(18, 20, 32, 0.14);

            h5,
            p,
            i {
                @apply text-black;
            }
        }

        .btn-free {
            @apply w-full text-black;
            background: rgba(255, 255, 255, 0.08);
        }

        &.basic {
            @apply bg-white;
        }
    }

    .bg {
        position: absolute;
        bottom: 0;
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
    .package-selection-plus {
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
