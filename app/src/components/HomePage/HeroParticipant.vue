
import type { endianness } from 'os';
<template>
  <div class="hero-participant position-relative">
    <div class="hero-participant__bg"></div>
    <img class="hero-participant__pattern-left" src="/src/assets/img/patterns/hero-left-bottom.png" alt="">
    <img class="hero-participant__pattern-right" src="/src/assets/img/patterns/hero-right-top.png" alt="">
    <img class="hero-participant__pattern-center" src="/src/assets/img/patterns/hero-texture.png" alt="">
    <!-- <div class="tf-bg-line"></div> -->
    <div class="container">
      <div class="row">
          <div class="col-12 pages-title">
            <div class="row">
              <div class="col-4 content">
                <h1 class="hero-participant__text user-select-none pe-none text-lowercase">
                  show your  
                </h1>
                <h1 class="hero-participant__text-highlight text-lowercase user-select-none pe-none">
                  supports
                </h1>
                <h1 class="hero-participant__text-highlight-line">_______</h1>
                <h4 class="hero-participant__description mt-3 fw-normal fs-5 user-select-none pe-none">
                  Turn your passion into action; create custom images that show what you stand for and invite friends to join you
                </h4>
                <div class="hero-participant__btn-container flat-button d-flex align-items-center mt-4">
                  <TWButton class="fs-14" color="secondary" border-radius="circle">
                    <i class="ri-add-line"></i>
                    Start a Campaign
                  </TWButton>
                  <div class="hero-participant__or fs-14 fw-bold ml-4 mr-1">or</div>
                  <TWButton class="fs-14 px-0" color="transparent" border-radius="circle">
                    Find a Campaign
                  </TWButton>
                </div>
              </div>
            </div>
            <div class="bg-home7 user-select-none pe-none">
              <div class="swiper-container autoslider1" :data-swiper="swiperData">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-09.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-05.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-11.png" alt="">
                  </div>
                </div>
              </div>
              <div class="swiper-container autoslider1" :data-swiper="swiperDataReverse">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-04.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-10.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-03.png" alt="">
                  </div>
                </div>
              </div>
              <div class="swiper-container autoslider1" :data-swiper="swiperData">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-06.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-07.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-02.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/campaigns/sample-campaign-01.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import TWButton from '../base/TWButton.vue';

export default {
  name: 'HeroParticipant',
  components: {
    TWButton,
  },
  data() {
    return {
      swiperData: `{
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
      }`,
      swiperDataReverse: `{
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
      }`,
    };
  },
};
</script>

<style lang="scss">
  .hero-participant {
    overflow: hidden;

    &__bg {
      position: absolute;
      background: #16DAC1;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    &__pattern-left {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &__pattern-right {
      position: absolute;
      top: 0;
      right: 0;
    }

    &__pattern-center {
      position: absolute;
      bottom: -10px;
      right: 0;
      filter: blur(15.4px);
      mix-blend-mode: darken;
    }

    &__text {
      font-size: 80px !important;
      color: #1B1B1B;
      line-height: 1;
    }

    &__text-highlight {
      color: #FFEF5F;
      font-family: 'Marck Script' !important;
      font-size: 163.879px !important;
      font-style: normal;
      font-weight: 400 !important;
      line-height: 152.092px; /* 92.807% */
      letter-spacing: -9.833px;
      // text-decoration-line: underline;
      transform: rotate(-2deg);
      margin-top: -20px;

      &-line {
        color: #FFEF5F;
        font-family: 'Marck Script' !important;
        font-size: 163.879px !important;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 152.092px; /* 92.807% */
        letter-spacing: -9.833px;
        transform: rotate(-2deg);
        margin-top: -110px;
      }
    }

    &__description {
      color: #1B1B1B;
      font-size: 22px !important;
      line-height: 27px !important;
      font-weight: 500;
      margin-top: 90px !important;
      letter-spacing: 0.1px;
    }
  }

  .hero-participant__or {
    z-index: 1;
    color: #1B1B1B;
    text-decoration: none !important;
  }

  .hero-participant .tf-bg-line {
    position: absolute;
    width: 100%;
    height: 622px;
    content: "";
    bottom: 0px;
    left: 0;
    background-image: url(../images/item-background/bg-home7.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 1;
  }

  .hero-participant .content {
    margin-top: 130px;
    height: 470px;
    text-align: start;
    padding-left: 8px;
  }



  .bg-home7 {
    width: 825px;
    height: 622px;
    transform: rotate(-25deg);
    display: flex;
    gap: 30px;
    position: absolute; 
    right: 80px;
    top: 0;
    z-index: 1;
  }

  .bg-home7 .swiper-container {
    overflow: unset;
  }

  .bg-home7 .swiper-container .swiper-wrapper {
    transition-timing-function: linear !important;
  }

  .bg-home7 .swiper-container .swiper-slide {
    height: auto;
  }

  .bg-home7  img {
    width: 255px;
    height: 384px;
  }

  /* slider-scroll-page */
  .slider-scroll-page .hero-participant {
    margin: 35px 0 51px;
  }

  .slider-scroll-page::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 514px;
    bottom: 0px;
    left: 0;
    z-index: 1;
    background-repeat: no-repeat;
  }

  .slider-scroll-page .hero-participant::after {
    display: none;
  }

  .slider-scroll-page .bg-home7 {
    transform: rotate(0);
    right: -291px;
  }

  .slider-scroll-page .hero-participant .content {
    margin-top: 76px;
    padding-left: 0;
    margin-bottom: 260px;
  }

  .slider-scroll-page .hero-participant .content h1 {
    max-width: unset;
    text-transform: none;
  }

  .slider-scroll-page .hero-participant .icon-background .item9 {
    right: unset;
    left: 440px;
  }

  .slider-scroll-page .hero-participant .icon-background .item10 {
    left: 460px;
    right: unset;
    bottom: 190px;
    top: unset;
  }

</style>