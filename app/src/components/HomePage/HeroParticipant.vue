<script setup>
import { computed } from 'vue';

import QButton from '@/components/atoms/QButton.vue';
import HomeSlider from '@/components/HomePage/HomeSlider.vue';
import BGHero from '@/components/HomePage/BGHero.vue';
import supportsJSON from '../../assets/lottie/supports.json';

const props = defineProps({
    width: Number,
    height: Number
});

const lottieDimension = computed(() => {
    if (props.width >= 640) return { w: 450, h: 200 };
    return { w: 300, h: 100 };
});
</script>

<template>
    <BGHero class="hero-participant">
        <div class="container mx-auto">
            <div class="w-full pages-title mx-auto">
                <div class="container z-20 absolute mx-auto h-full">
                    <div
                        class="w-full h-full sm:w-8/12 lg:w-6/12 2xl:w-5/12 content flex flex-col items-center md:items-start justify-center px-5"
                    >
                        <h1 class="title z-30 user-select-none pe-none lowercase">show your</h1>
                        <h1 class="opacity-0 w-0 h-0">supports</h1>
                        <div class="title-animation z-30">
                            <Vue3Lottie
                                :animationData="supportsJSON"
                                :height="lottieDimension.h"
                                :width="lottieDimension.w"
                                :loop="false"
                            />
                        </div>
                        <h4 class="description z-30 fw-normal text-xl user-select-none pe-none">
                            Turn your passion into action; create custom images that show what you
                            stand for and invite friends to join you
                        </h4>
                        <div class="btn-container flat-button">
                            <QButton class="text-sm" variant="accent" border-radius="circle">
                                <i class="ri-add-line mr-1"></i>
                                Start a Campaign
                            </QButton>
                            <!-- <div class="hero-participant__or  font-bold">or</div>
                            <QButton class="text-sm font-bold !px-0" variant="link" border-radius="circle">
                                Find a Campaign
                            </QButton> -->
                        </div>
                    </div>
                </div>
                <HomeSlider class="z-10" />
            </div>
        </div>
    </BGHero>
</template>

<style lang="scss">
.hero-participant {
    overflow: hidden;
    height: 540px;

    .title {
        @apply text-4xl sm:text-7xl text-black leading-4 font-bold;
    }

    .title-animation {
        @apply pl-4;
        margin-top: -12px;
    }

    .description {
        @apply text-black text-base text-center sm:text-left sm:text-xl leading-5 font-medium tracking-wide;
    }

    .btn-container {
        @apply flex flex-col sm:flex-row items-center mt-4 sm:mt-6 gap-2 sm:gap-3;
    }

    .or {
        @apply no-underline;
    }
}

@media screen and (min-width: 768px) {
    .hero-participant {
        height: 640px;

        .title-animation {
            margin-left: -20px;
            margin-top: -50px;
        }

        .content {
            text-align: start;
            padding-left: 24px;
        }
    }
}
</style>
