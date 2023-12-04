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
}`,)

const galleries = ref([
  'art-book-fair-1.png', 'art-book-fair-2.png', 'art-book-fair-3.png', 'art-book-fair-4.png',
  'art-book-fair-5.png', 'art-book-fair-6.png', 'art-book-fair-7.png', 'art-book-fair-8.png',
  'art-book-fair-9.png', 'art-book-fair-10.png', 'art-book-fair-11.png', 'art-book-fair-12.png',
  'art-book-fair-13.png', 'art-book-fair-14.png', 'art-book-fair-15.png', 'art-book-fair-16.png',
  'art-book-fair-17.png', 'art-book-fair-18.png', 'art-book-fair-19.png', 'art-book-fair-20.png',
  'art-book-fair-21.png', 'art-book-fair-22.png', 'art-book-fair-23.png', 'art-book-fair-24.png',
]);

function getImageUrl(name) {
  const filename = `/assets/img/campaigns/${name}`; 
  return new URL(filename, import.meta.url).href;
}
</script>

<template>
  <div class="campaign-swiper__swiper swiper-container autoslider1 mt-6" :data-swiper="swiperData">
    <div class="swiper-wrapper campaign-swiper__slider-wrapper">
      <div v-for="(filename, i) in galleries" :key="i" class="swiper-slide campaign-swiper__campaign-slider">
        <img class="campaign-swiper__campaign" :src="getImageUrl(filename)" :alt="filename">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.campaign-swiper {
  &__swiper {
    touch-action: none !important;
    pointer-events: none !important;;
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
    box-shadow: 0px 0.49456px 2.47279px 0px rgba(0, 0, 0, 0.10);
  }
}
</style>