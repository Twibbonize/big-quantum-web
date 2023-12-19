<script setup>
import { onMounted } from 'vue';
import { register } from 'swiper/element/bundle';

const emit = defineEmits(['swiper']);

const props = defineProps({
    id: String,
    direction: String,
    spaceBetween: Number,
    grabCursor: Boolean,
    speed: Number,
    centeredSlides: Boolean,
    loop: Boolean,
    slidesPerView: Number | String,
    breakpoints: Object,
    navigation: Boolean,
    observer: Boolean,
    observeParent: Boolean,
    autoplayDelay: {
        type: Number,
        default: null
    },
    autoplayDisableOnInteraction: {
        type: Boolean,
        default: null
    },
    autoplayReverseDirection: {
        type: Boolean,
        default: null
    },
    gridRows: Number,
    gridFill: String
});

onMounted(() => {
    register();
});
</script>

<template>
    <swiper-container
        :id="id"
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
        :navigation="navigation"
        :observer-parent="observeParent"
        :observer="observer"
        :grid-rows="gridRows"
        :grid-fill="gridFill"
    >
        <slot></slot>
    </swiper-container>
</template>

<style lang="scss"></style>
