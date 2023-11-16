<script setup lang="ts">
import { ref } from 'vue';

import TWButton from '@/components/base/TWButton.vue';

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
  'art-book-fair-1.jpg', 'art-book-fair-2.jpg', 'art-book-fair-3.jpg', 'art-book-fair-4.jpg',
  'art-book-fair-5.jpg', 'art-book-fair-6.jpg', 'art-book-fair-7.jpg', 'art-book-fair-8.jpg',
  'art-book-fair-9.jpg', 'art-book-fair-10.jpg', 'art-book-fair-11.jpg', 'art-book-fair-12.jpg',
  'art-book-fair-13.jpg', 'art-book-fair-14.jpg', 'art-book-fair-15.jpg', 'art-book-fair-16.jpg',
  'art-book-fair-17.jpg', 'art-book-fair-18.jpg', 'art-book-fair-19.jpg', 'art-book-fair-20.jpg',
  'art-book-fair-21.jpg', 'art-book-fair-22.jpg', 'art-book-fair-23.jpg', 'art-book-fair-24.jpg',
]);

function getImageUrl(name: String) {
  const filename = `/assets/img/campaigns/${name}`; 
  console.log(new URL(filename, import.meta.url).href);
  return new URL(filename, import.meta.url).href;
}
</script>

<template>
  <div class="tp-rated-area overflow-hidden position-relative container">
    <div class="banner-creators__ellipse"></div>
    <img class="banner-creators__bg" src="/src/assets/img/patterns/background-banner-creators.png" alt="">

    <div class="tp-rated-bg"  data-background="assets/img/rate/rated-bg.jpg">
      <div class="d-lg-flex justify-content-center">
          <img src="src/assets/img/logos/twibbonize-creators.png" alt="twibbonize-for-creators">
      </div>

      <div class="container z-index-6 mt-3">
          <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="tp-rated-title-box text-center mb-60">
                  <h5 class="tp-section-title-3 text-white pb-40"><span>gather</span> your<br> supporters with <br>Twibbonize</h5>
                  <div class="d-flex justify-content-center align-items-center mt-3">
                    <TWButton class="fs-14 ws-nowrap" color="secondary" border-radius="circle">
                      Learn More
                    </TWButton>
                    <span class="fs-14 color_white ml-4">or</span>
                    <TWButton class="color_white fs-14 ws-nowrap" color="transparent" border-radius="circle">
                      Try it now, Free!
                    </TWButton>
                  </div>
                </div>
            </div>
          </div>
          <div class="author-rated-big-img d-flex justify-content-center"  data-parallax='{"y": 100, "smoothness": 30}'>
            <img src="src/assets/img/logos/creators-brand.png" alt="twibbonize-for-creators">
          </div>
      </div>
      <div>
        <div class="swiper-container autoslider1 mt-4" :data-swiper="swiperData">
          <div class="swiper-wrapper banner-creators__slider-wrapper">
            <div v-for="(filename, i) in galleries" :key="i" class="swiper-slide banner-creators__campaign-slider">
              <img class="banner-creators__campaign" :src="getImageUrl(filename)" :alt="filename">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .banner-creators {
    &__bg {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &__ellipse {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: 350px;
      height: 200px;
      border-radius: 350px;
      background: rgba(22, 218, 193, 0.30);
      filter: blur(77.16836547851562px);
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
    }
  }
</style>