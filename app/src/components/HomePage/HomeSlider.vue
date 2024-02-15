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
    transform: rotate(-25deg) translateX(-40%);
    display: flex;
    gap: 21px;
    position: absolute;
    bottom: -200px;
    left: 50%;
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

@media screen and (min-width: 768px) {
    .home-slider {
        width: 720px;
        height: 1100px;
        transform: rotate(-25deg);
        display: flex;
        gap: 21px;
        position: absolute;
        left: 80%;
        top: -230px;
        z-index: 1;

        img {
            width: 230px;
            height: 345px;
        }
    }
}

@media screen and (min-width: 1024px) {
    .home-slider {
        width: 720px;
        height: 1100px;
        transform: rotate(-25deg);
        display: flex;
        gap: 21px;
        position: absolute;
        left: 70%;
        top: -230px;
        z-index: 1;

        img {
            width: 230px;
            height: 345px;
        }
    }
}

@media screen and (min-width: 1024px) {
    .home-slider {
        width: 720px;
        height: 1100px;
        transform: rotate(-25deg);
        display: flex;
        gap: 21px;
        position: absolute;
        left: 60%;
        top: -230px;
        z-index: 1;

        img {
            width: 230px;
            height: 345px;
        }
    }
}


@media screen and (min-width: 1536px) {
    .home-slider {
        width: 720px;
        height: 1100px;
        transform: rotate(-25deg);
        display: flex;
        gap: 21px;
        position: absolute;
        left: 50%;
        top: -230px;
        z-index: 1;

        img {
            width: 230px;
            height: 345px;
        }
    }
}
</style>
