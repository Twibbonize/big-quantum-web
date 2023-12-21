<script setup>
import QSlider from '@/components/atoms/QSlider.vue';

const props = defineProps({
    galleries: Array,
});

function getImageUrl(name) {
    const filename = `/assets/img/frames/${name}`;
    return new URL(filename, import.meta.url).href;
}
</script>

<template>
    <QSlider
        style="--swiper-wrapper-transition-timing-function: linear"
        class="frame-swiper"
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
.frame-swiper {
    .campaign-slider {
        width: auto;
        height: auto;
    }
    .campaign {
        width: 130px;
        height: 130px;
        border-radius: 3px;
        box-shadow: 0px 0.49456px 2.47279px 0px rgba(0, 0, 0, 0.1);
    }
}
</style>
