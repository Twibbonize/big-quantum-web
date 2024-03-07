<script setup>
import QSlider from '@/components/atoms/QSlider.vue';

const images = [
    {
        image: '/assets/img/marketings/campaign-creators-1.jpg',
    },
    {
        image: '/assets/img/marketings/campaign-creators-2.jpg',
    },
    {
        image: '/assets/img/marketings/campaign-creators-3.jpg',
    },
    {
        image: '/assets/img/marketings/campaign-creators-4.jpg',
    },
    {
        image: '/assets/img/marketings/campaign-creators-5.jpg',
    },
];
</script>

<template>
    <div class="flex flex-col">
        <div class="campaign-creator-image-container">
            <QSlider
                class="campaign-creator-image-slider"
                style="--swiper-wrapper-transition-timing-function: linear"
                direction="horizontal"
                :space-between="50"
                :grab-cursor="false"
                :speed="5000"
                :centered-slides="false"
                :loop="true"
                slides-per-view="auto"
                :allow-touch-move="false"
                :autoplay-delay="0"
                :autoplay-disable-on-interaction="false"
                :autoplay-reverse-direction="true"
                >
                <swiper-slide v-for="{ image } in images" class="campaign-creator-image-content">
                    <img class="campaign-creator-image" :src="image" alt="creators" />
                    <img class="campaign-creator-watermark" src="/assets/img/campaigns/watermark.png"/>
                </swiper-slide>
            </QSlider>
        </div>
        <div class="p-4">
            <p class="text-center text-xl sm:text-2xl">Remove watermark</p>
            <p class="text-center text-xl sm:text-2xl">
                <strong>all of your campaign users</strong>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.campaign-creator-image-container {
    @apply overflow-hidden aspect-video relative;
}

.campaign-creator-image-slider {
    @apply absolute bottom-0 w-full;
}

.campaign-creator-image-content {
    @apply relative h-[320px] w-[320px] rounded-2xl mb-8;
}

.campaign-creator-image {
    @apply h-[320px] w-[320px] rounded-2xl;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.25);
}

.campaign-creator-watermark {
    @apply absolute bottom-[4%] right-[4%] w-[50%];
    opacity:1;  
    animation: flickerAnimation 1.5s infinite;
}

@keyframes flickerAnimation { /* flame pulses */
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
</style>
