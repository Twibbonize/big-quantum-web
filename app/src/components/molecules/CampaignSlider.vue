<script setup>
import QSlider from '@/components/atoms/QSlider.vue';

const props = defineProps({
    campaigns: Array,
    campaignClasses: String,
    slideClasses: String,
    spaceBetween: {
        type: Number,
        default: 10
    }
});
</script>

<template>
    <QSlider
        class="campaign-slider"
        style="--swiper-wrapper-transition-timing-function: linear"
        direction="horizontal"
        :space-between="spaceBetween"
        :grab-cursor="false"
        :speed="5000"
        :centered-slides="false"
        :loop="true"
        slides-per-view="auto"
        :autoplay-delay="0"
        :autoplay-disable-on-interaction="false"
        :autoplay-reverse-direction="true"
        :allow-touch-move="false"
    >
        <swiper-slide
            v-for="(filename, i) in props.campaigns"
            :key="i"
            class="w-auto h-auto"
            :class="slideClasses"
        >
            <img :class="campaignClasses" :src="filename" :alt="filename" />
        </swiper-slide>
    </QSlider>
</template>

<style lang="scss"></style>
