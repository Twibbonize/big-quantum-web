<script setup>
const swiperData = `{
  "direction": "vertical",
  "spaceBetween": 45,
  "grabCursor": false,
  "speed": 10000,
  "centeredSlides": false,
  "loop": true,
  "slidesPerView": "auto",
  "autoplay": {
    "delay": "0",
    "disableOnInteraction": false
  }
}`;
const swiperDataReverse = `{
  "direction": "vertical",
  "spaceBetween": 45,
  "grabCursor": false,
  "speed": 10000,
  "centeredSlides": false,
  "loop": true,
  "slidesPerView": "auto",
  "autoplay": {
    "delay": "0",
    "disableOnInteraction": false,
    "reverseDirection": true
  }
}`;
</script>

<template>
    <div class="home-slider user-select-none pe-none">
        <div class="swiper-container autoslider1" :data-swiper="swiperData">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-09.png" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-05.png" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-11.png" alt="" />
                </div>
            </div>
        </div>
        <div class="swiper-container autoslider1" :data-swiper="swiperDataReverse">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-04.png" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-10.png" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-03.png" alt="" />
                </div>
            </div>
        </div>
        <div class="swiper-container autoslider1" :data-swiper="swiperData">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-06.png" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-07.png" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-02.png" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-01.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.home-slider {
    width: 577px;
    height: 435px;
    transform: rotate(-25deg);
    display: flex;
    gap: 21px;
    position: absolute;
    right: 80px;
    top: 0;
    z-index: 1;
}

.home-slider .swiper-container {
    overflow: unset;
}

.home-slider .swiper-container .swiper-wrapper {
    transition-timing-function: linear !important;
}

.home-slider .swiper-container .swiper-slide {
    height: auto;
}

.home-slider img {
    width: 178px;
    height: 269px;
}

@media screen and (min-width: 1400px) {
    .home-slider {
        gap: 27px;
        width: 742px;
        height: 590px;

        img {
            width: 230px;
            height: 345px;
        }
    }
}

@media screen and (min-width: 1600px) {
    .home-slider {
        gap: 30px;
        width: 825px;
        height: 622px;

        img {
            width: 255px;
            height: 384px;
        }
    }
}

.slider-scroll-page .home-slider {
    transform: rotate(0);
    right: -291px;
}
</style>
