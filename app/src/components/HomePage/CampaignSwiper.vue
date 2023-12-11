<script setup>
import { ref } from 'vue';

import QSlider from '@/components/atoms/QSlider.vue';

const galleries = ref([
    'art-book-fair-1.png',
    'art-book-fair-2.png',
    'art-book-fair-3.png',
    'art-book-fair-4.png',
    'art-book-fair-5.png',
    'art-book-fair-6.png',
    'art-book-fair-7.png',
    'art-book-fair-8.png',
    'art-book-fair-9.png',
    'art-book-fair-10.png',
    'art-book-fair-11.png',
    'art-book-fair-12.png',
    'art-book-fair-13.png',
    'art-book-fair-14.png',
    'art-book-fair-15.png',
    'art-book-fair-16.png',
    'art-book-fair-17.png',
    'art-book-fair-18.png',
    'art-book-fair-19.png',
    'art-book-fair-20.png',
    'art-book-fair-21.png',
    'art-book-fair-22.png',
    'art-book-fair-23.png',
    'art-book-fair-24.png'
]);

function getImageUrl(name) {
    const filename = `/assets/img/campaigns/${name}`;
    return new URL(filename, import.meta.url).href;
}
</script>

<template>
    <QSlider
        class="campaign-swiper mt-6"
        style="--swiper-wrapper-transition-timing-function: linear"
        direction="horizontal"
        :space-between="10"
        :grab-cursor="false"
        :speed="5000"
        :centered-slides="false"
        :loop="true"
        slides-per-view="auto"
        :autoplay-delay="0"
        :autoplay-disable-on-interaction="false"
        :autoplay-reverse-direction="true"
    >
        <swiper-slide v-for="(filename, i) in galleries" :key="i" class="campaign-slider">
            <img class="campaign" :src="getImageUrl(filename)" :alt="filename" />
        </swiper-slide>
    </QSlider>
</template>

<style lang="scss">
.campaign-swiper {
    .campaign-slider {
        width: 130px;
        height: 130px;
    }
    .campaign {
        width: 130px;
        height: 130px;
        border-radius: 3px;
        box-shadow: 0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.1);
    }
}
</style>
