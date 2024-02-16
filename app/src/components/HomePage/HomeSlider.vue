<script setup>
import QSlider from '@/components/atoms/QSlider.vue';

const campaigns = [
    {
        speed: 8000,
        reverse: false,
        datas: [
            '/src/assets/img/campaigns/sample-campaign-09.png',
            '/src/assets/img/campaigns/sample-campaign-05.png',
            '/src/assets/img/campaigns/sample-campaign-11.png',
            '/src/assets/img/campaigns/sample-campaign-09.png',
            '/src/assets/img/campaigns/sample-campaign-05.png',
            '/src/assets/img/campaigns/sample-campaign-11.png',
        ],
    },
    {
        speed: 8000,
        reverse: true,
        datas: [
            '/src/assets/img/campaigns/sample-campaign-04.png',
            '/src/assets/img/campaigns/sample-campaign-10.png',
            '/src/assets/img/campaigns/sample-campaign-03.png',
            '/src/assets/img/campaigns/sample-campaign-04.png',
            '/src/assets/img/campaigns/sample-campaign-10.png',
            '/src/assets/img/campaigns/sample-campaign-03.png',
        ],
    },
    {
        speed: 10000,
        reverse: false,
        datas:  [
            '/src/assets/img/campaigns/sample-campaign-06.png',
            '/src/assets/img/campaigns/sample-campaign-07.png',
            '/src/assets/img/campaigns/sample-campaign-02.png',
            '/src/assets/img/campaigns/sample-campaign-01.png',
        ],
    }
];
</script>

<template>
    <div class="home-slider user-select-none pe-none">
        <QSlider
            v-for="{ speed, reverse, datas } in campaigns"
            style="--swiper-wrapper-transition-timing-function: linear"
            direction="vertical"
            :space-between="32"
            :grab-cursor="false"
            :speed="speed"
            :centered-slides="false"
            :loop="true"
            slides-per-view="auto"
            :autoplay-delay="0"
            :autoplay-disable-on-interaction="false"
            :autoplay-reverse-direction="reverse"
            >
            <swiper-slide v-for="campaign in datas" class="h-auto">
                <img :src="campaign" alt="" />
            </swiper-slide>
        </QSlider>
    </div>
</template>

<style lang="scss">
.home-slider {
    @apply gap-6 flex absolute z-10 rotate-[-25deg] translate-x-[-40%] md:translate-x-[0%]
    w-[432px] md:w-[738px] 2xl:w-[807px]
    h-[550px] md:h-[1100px]
    bottom-[-80px] md:bottom-auto
    top-auto md:top-[-230px]
    left-[40%] md:left-[80%] lg:left-[70%] xl:left-[60%] 2xl:left-[50%];


    img {
        @apply w-32 md:w-[230px] 2xl:w-[253px]
        h-48 md:h-[345px] 2xl:h-[380px];
    }
}
</style>
