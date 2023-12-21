<script setup>
import QSlider from '@/components/atoms/QSlider.vue';
</script>

<template>
    <div class="home-slider user-select-none pe-none">
        <QSlider
            class="autoslider"
            style="--swiper-wrapper-transition-timing-function: linear"
            direction="vertical"
            :space-between="45"
            :grab-cursor="false"
            :speed="8000"
            :centered-slides="false"
            :loop="true"
            slides-per-view="auto"
            :autoplay-delay="0"
            :autoplay-disable-on-interaction="false"
            :autoplay-reverse-direction="false"
        >
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-09.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-05.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-11.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-09.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-05.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-11.png" alt="" />
            </swiper-slide>
        </QSlider>
        <QSlider
            class="autoslider"
            style="--swiper-wrapper-transition-timing-function: linear"
            direction="vertical"
            :space-between="45"
            :grab-cursor="false"
            :speed="8000"
            :centered-slides="false"
            :loop="true"
            slides-per-view="auto"
            :autoplay-delay="0"
            :autoplay-disable-on-interaction="false"
            :autoplay-reverse-direction="true"
        >
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-04.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-10.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-03.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-04.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-10.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-03.png" alt="" />
            </swiper-slide>
        </QSlider>
        <QSlider
            class="autoslider"
            style="--swiper-wrapper-transition-timing-function: linear"
            direction="vertical"
            :space-between="45"
            :grab-cursor="false"
            :speed="10000"
            :centered-slides="false"
            :loop="true"
            slides-per-view="auto"
            :autoplay-delay="0"
            :autoplay-disable-on-interaction="false"
            :autoplay-reverse-direction="false"
        >
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-06.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-07.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-02.png" alt="" />
            </swiper-slide>
            <swiper-slide class="h-auto">
                <img src="/src/assets/img/campaigns/sample-campaign-01.png" alt="" />
            </swiper-slide>
        </QSlider>
    </div>
</template>

<style lang="scss">
.home-slider {
    width: 412px;
    height: 550px;
    transform: rotate(-25deg);
    display: flex;
    gap: 21px;
    position: absolute;
    bottom: -200px;
    right: 0;
    z-index: 1;

    .autoslider {
        overflow: unset;
    }

    .swiper-wrapper {
        transition-timing-function: linear;
    }

    img {
        width: 128px;
        height: 192px;
    }
}

@media screen and (min-width: 640px) {
    .home-slider {
        width: 825px;
        height: 1100px;
        transform: rotate(-25deg);
        display: flex;
        gap: 21px;
        position: absolute;
        right: 100px;
        top: -230px;
        z-index: 1;

        img {
            width: 255px;
            height: 384px;
        }
    }
}
</style>
