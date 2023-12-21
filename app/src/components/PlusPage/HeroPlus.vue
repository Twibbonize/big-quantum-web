<script setup>
import { onMounted, computed } from 'vue';

import BGHero from '@/components/HomePage/BGHero.vue';
import supportsJSON from '../../assets/lottie/supports.json';

const props = defineProps({
    width: Number,
    height: Number
});

const lottieDimension = computed(() => {
    if (props.width >= 640) return { w: 600, h: 200 };
    return { w: 300, h: 100 };
});

onMounted(() => {});
</script>

<template>
    <BGHero class="hero-plus">
        <div class="container mx-auto">
            <div class="w-full pages-title mx-auto">
                <div class="container z-20 absolute mx-auto">
                    <div class="mt-32 flex flex-col items-center">
                        <img
                            class="hidden sm:block logo"
                            src="/src/assets/img/logos/twibbonize-plus.svg"
                            alt="twibbonize-plus"
                        />
                        <h1 class="title mt-4">show your</h1>
                        <div class="animation">
                            <Vue3Lottie
                                :animationData="supportsJSON"
                                :height="lottieDimension.h"
                                :width="lottieDimension.w"
                                :loop="true"
                            />
                        </div>
                        <h1 class="title -mt-6">on a whole new level</h1>
                        <p class="description">
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
    overflow: hidden;
    height: 500px;

    .title {
        @apply text-3xl sm:text-7xl font-bold;
    }

    .animation {
        @apply -mt-4;
    }

    .description {
        @apply sm:text-xl text-center mt-6;
    }

    .pattern-center {
        @apply absolute;
        right: -120px;
        bottom: -440px;
        width: 757px;
        height: 1014px;
        mix-blend-mode: darken;
    }
}

@media screen and (min-width: 640px) {
    .hero-plus {
        overflow: hidden;
        height: 540px;
    }
}
</style>
