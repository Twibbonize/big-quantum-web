<script setup>
import { onMounted } from 'vue';
import { register } from 'swiper/element/bundle';

const props = defineProps({
  direction: String,
  spaceBetween: Number,
  grabCursor: Boolean,
  speed: Number,
  centeredSlides: Boolean,
  loop: Boolean,
  slidesPerView: String,
  breakpoints: Object,
  observer: Boolean,
  observeParent: Boolean,
  autoplayDelay: {
    type: Number,
    default: null,
  },
  autoplayDisableOnInteraction: {
    type: Boolean,
    default: null,
  },
  autoplayReverseDirection: {
    type: Boolean,
    default: null,
  },
})

onMounted(() => {
  register();
});
</script>

<template>
  <swiper-container
    style="--swiper-wrapper-transition-timing-function: linear;"
    :direction="direction"
    :space-between="spaceBetween"
    :grab-cursor="grabCursor"
    :speed="speed"
    :centered-slides="centeredSlides"
    :loop="loop"
    :slides-per-view="slidesPerView"
    :autoplay-delay="autoplayDelay"
    :autoplay-disable-on-interaction="autoplayDisableOnInteraction"
    :autoplay-reverse-direction="autoplayReverseDirection"
    :breakpoints="JSON.stringify(breakpoints)"
    :observer-parent="observeParent"
    :observer="observer"
  >
    <slot></slot>
  </swiper-container>
</template>

<style lang="scss">
</style>