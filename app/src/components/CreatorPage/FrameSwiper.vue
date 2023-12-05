<script setup>
import { ref } from 'vue';

const swiperData = ref(`{
  "direction": "horizontal",
  "spaceBetween": 10,
  "grabCursor": false,
  "speed": 5000,
  "centeredSlides": false,
  "loop": true,
  "slidesPerView": "auto",
  "autoplay": {
    "delay": "0",
    "disableOnInteraction": false,
    "reverseDirection": true
  }
}`);

const galleries = ref([
    'frame-1.png',
    'frame-2.png',
    'frame-3.png',
    'frame-4.png',
    'frame-5.png',
    'frame-6.png'
]);

function getImageUrl(name) {
    const filename = `/assets/img/frames/${name}`;
    return new URL(filename, import.meta.url).href;
}
</script>

<template>
    <div class="frame-swiper__swiper swiper-container autoslider1 mt-6" :data-swiper="swiperData">
        <div class="swiper-wrapper frame-swiper__slider-wrapper">
            <div
                v-for="(filename, i) in galleries"
                :key="i"
                class="swiper-slide frame-swiper__campaign-slider"
            >
                <img class="frame-swiper__campaign" :src="getImageUrl(filename)" :alt="filename" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.frame-swiper {
    &__swiper {
        touch-action: none !important;
        pointer-events: none !important;
    }
    &__slider-wrapper {
        transition-timing-function: linear;
    }
    &__campaign-slider {
        width: auto;
        height: auto;
    }
    &__campaign {
        width: 130px;
        height: 130px;
        border-radius: 3px;
        box-shadow: 0px 0.49456px 2.47279px 0px rgba(0, 0, 0, 0.1);
    }
}
</style>
