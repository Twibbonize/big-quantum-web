<script setup>
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';

import PricingBackgroundSlideContainer from '@/components/molecules/Pricing/BackgroundSlideContainer.vue';

const creatorTitle = ref(null);

const { height } = useElementSize(creatorTitle);
</script>

<template>
    <div class="creator-background-container">
        <div class="absolute top-0 -mt-12 z-0">
            <PricingBackgroundSlideContainer size="lg"/>
        </div>
        <div class="title-container">
            <img class="premium-title" src="/assets/img/marketings/premium-white.svg" alt="creator">
            <img ref="creatorTitle" class="creator-title" src="/assets/img/marketings/premium-creator.svg" alt="creator">
        </div>
        
        <div class="background-blank" :style="{ height: `${height/2}px` }">
            <div class="relative h-full mx-5 sm:mx-14 lg:mx-20 overflow-hidden">
                <div class="text-mask"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.creator-background-container {
    @apply relative w-full h-full overflow-hidden;
    background: linear-gradient(262deg, #32A092 3.54%, #03352F 100%);

    .title-container {
        @apply mt-[200px] w-full flex flex-col z-10;

        .premium-title {
            @apply h-3 sm:h-5 md:h-8 lg:h-16 z-20;
        }

        .creator-title {
            @apply w-full mt-2 sm:mt-4 md:mt-6 lg:mt-9 px-5 sm:px-14 lg:px-20 z-20;
        }
    }

    .text-mask {
        @apply absolute top-0 w-full h-full;
        background: linear-gradient(262deg, #32A092 3.54%, #03352F 100%);
        mask-image: url('/assets/img/marketings/premium-creator.svg');
        mask-position: bottom;
        mask-repeat: no-repeat;
        mask-size: cover;
        mask-mode: alpha;
    }


    .background-blank {
        @apply bg-white absolute bottom-0 w-full;
        border: 1px solid #FFFFFF;
        z-index: 20;
    }

    @keyframes transform {
        0%,
        100% {
            border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%;
        }
        20% {
            border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%;
        }
        40% {
            border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%;
        }
        60% {
            border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%;
        }
        80% {
            border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%;
        }
    }

    @keyframes movementOne {
        0%,
        100% {
            transform: none;
        }
        50% {
            transform: translate(50%, 20%) rotateY(10deg) scale(1);
        }
    }
}
</style>