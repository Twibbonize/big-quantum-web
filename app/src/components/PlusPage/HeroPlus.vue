<script setup>
import { onMounted, computed } from 'vue';

import BGHero from '@/components/HomePage/BGHero.vue';
import supportsJSON from '../../assets/lottie/supports.json';

const props = defineProps({
    width: Number,
    height: Number
});

const lottieDimension = computed(() => {
    if (props.width >= 1280) return { w: 800, h: 200 };
    if (props.width >= 640) return { w: 500, h: 140 };
    return { w: 300, h: 100 };
});

onMounted(() => {});
</script>

<template>
    <BGHero class="hero-plus">
        <div class="container mx-auto">
            <div class="w-full pages-title mx-auto">
                <div class="container z-20 absolute mx-auto">
                    <div class="mt-32 flex flex-col items-center px-5">
                        <img
                            class="hidden sm:block logo"
                            src="/src/assets/img/logos/twibbonize-plus.svg"
                            alt="twibbonize-plus"
                        />
                        <h1 class="title mt-4 sm:mt-6 text-center">show your</h1>
                        <h1 class="opacity-0 w-0 h-0">supports</h1>
                        <div class="animation mb-4">
                            <Vue3Lottie
                                :animationData="supportsJSON"
                                :height="lottieDimension.h"
                                :width="lottieDimension.w"
                                :loop="true"
                            />
                        </div>
                        <h1 class="title -mt-6 text-center">on a whole new level</h1>
                        <p class="description pb-8">
                            Take action and make the most out of your moments with the help of our
                            personalized templates suitable for every occassions
                        </p>
                    </div>
                </div>
                <HomeSlider class="z-10" />
            </div>
        </div>
        <img class="pattern-center z-0" src="/src/assets/img/patterns/hero-texture.png" alt="" />
    </BGHero>
</template>

<style lang="scss">
.hero-plus {
    @apply overflow-hidden h-[520px] sm:h-[640px] xl:h-[700px];

    .title {
        @apply text-4xl sm:text-[56px] xl:text-[80px] font-bold;
    }

    .animation {
        @apply -mt-4;
    }

    .description {
        @apply text-base leading-[130%] sm:text-[22px] font-medium text-center mt-12 max-w-[560px] xl:max-w-[720px];
    }

    .pattern-center {
        @apply absolute;
        right: -120px;
        bottom: -440px;
        width: 757px;
        height: 1014px;
        background-position: right bottom;
        background-size: 4000px 2000px;
        filter: blur(15.4px) grayscale(100%);
        mix-blend-mode: darken;
        background-repeat: no-repeat;
        animation: 8s move infinite ease-in-out alternate;
        opacity: 0.3;
    }
}
</style>
