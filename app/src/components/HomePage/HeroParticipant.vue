
import type { endianness } from 'os';
<template>
  <div class="hero-participant position-relative">
    <div class="hero-participant__bg"></div>
    <!-- <div class="tf-bg-line"></div> -->
    <div class="container">
      <div class="row">
          <div class="col-12 pages-title">
            <div class="row">
              <div class="col-4 content">
                <h1 class="hero-participant__text">
                  <span class="hero-participant__text-highlight">show</span>
                  your <br> supports
                </h1>
                <h4 class="hero-participant__description mt-3 fw-normal fs-5">
                  Turn your passion into action; create custom images that show what you stand for and invite friends to join you
                </h4>
                <div class="hero-participant__btn-container flat-button flex mt-4">
                  <a href="#" class="btn hero-participant__primary-btn">
                    <i class="ri-add-line"></i>
                    Create a Campaign
                  </a>
                  <a href="#" class="btn hero-participant__secondary-btn" >
                    Find a Campaign
                  </a>
                </div>
              </div>
            </div>
            <div class="bg-home7">
              <div class="swiper-container autoslider1reverse" :data-swiper="swiperData">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/src/assets/img/home/example-campaign-1.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/home/example-campaign-2.png" alt="">
                  </div>
                </div>
              </div>
              <div class="swiper-container autoslider1reverse" :data-swiper="swiperDataReverse">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/src/assets/img/home/example-campaign-3.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/home/example-campaign-4.png" alt="">
                  </div>
                </div>
              </div>
              <div class="swiper-container autoslider1reverse" :data-swiper="swiperData">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/src/assets/img/home/example-campaign-5.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="/src/assets/img/home/example-campaign-6.png" alt="">
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
export default {
  name: 'HeroParticipant',
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
    &__bg {
      position: absolute;
      background: #16DAC1;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    &__text {
      font-size: 80px;
      color: #1B1B1B;
      line-height: 1;
    }

    &__text-highlight {
      font-family: 'Marck Script';
      color: #FFEF5F;
      font-size: 105px;
      text-decoration: underline;
      font-weight: 400;
      line-height: 80px;
      margin-right: -1rem;
    }

    &__description {
      color: #1B1B1B;
      font-size: 22px !important;
      line-height: 27px !important;
      font-weight: 500;
    }

    &__btn-container {
      gap: 10px;
    }

    &__primary-btn {
      background: #FFEF5F !important;
      color: #1B1B1B !important;
      font-weight: 800;;
    }

    &__secondary-btn {
      color: #1B1B1B !important;
      font-weight: 800;;
    }
  }

  /* home-7 */
  .hero-participant {
    overflow: hidden;
    // margin-top: 40px;
    // margin-bottom: 60px;
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

  .hero-participant::after {
    position: absolute;
    width: 100%;
    height: 130px;
    top: 0;
    left: 0;
    content: '';
    background: linear-gradient(180deg, #16DAC1 0%, rgba(22, 22, 22, 0.00) 100%);
    z-index: 2;
  }

  .hero-participant::before {
    position: absolute;
    width: 100%;
    height: 130px;
    bottom: 0;
    left: 0;
    content: '';
    background: linear-gradient(0deg, #16DAC1 0%, rgba(22, 22, 22, 0.00) 100%);
    z-index: 2;
  }

  .hero-participant .content {
    margin-top: 131px;
    margin-bottom: 215px;
    text-align: start;
    padding-left: 8px;
  }

  .hero-participant .icon-background .item1 {
    top: 171px;
    left: -250px;
    z-index: 1;
    animation: move1 7s infinite linear ;
  }

  .hero-participant .icon-background .item2 {
    top: 328px;
    left: -169px;
    z-index: 1;
    animation: flicker 3s infinite linear alternate;
    animation-delay: 0.5s;
  }

  .hero-participant .icon-background .item3 {
    top: 165px;
    left: -86px;
    z-index: 1;
    animation: flicker 3s infinite linear alternate;
    animation-delay: 1s;
  }

  .hero-participant .icon-background .item4 {
    bottom: 216px;
    left: -30px;
    z-index: 1;
    animation: movedown 3s infinite linear alternate;
  }

  .hero-participant .icon-background .item5 {
    top: 81px;
    left: 85px;
    z-index: 1;
    animation: rotate360 1.5s infinite linear;
  }

  .hero-participant .icon-background .item6 {
    bottom: 173px;
    left: 170px;
    z-index: 1;
    animation: flicker 3s infinite linear alternate;
    animation-delay: 1.5s;
  }

  .hero-participant .icon-background .item7 {
    bottom: 95px;
    left: 264px;
    z-index: 1;
    animation: moveleft 3s infinite linear;
  }

  .hero-participant .icon-background .item8 {
    bottom: 300px;
    left: 460px;
    z-index: 1;
    animation: flicker 3s infinite linear alternate;
    animation-delay: 2s;
  }

  .hero-participant .icon-background .item9 {
    top: 109px;
    right: -293px;
    z-index: 1;
    animation: flicker 3s infinite linear alternate;
    animation-delay: 2.5s;
  }

  .hero-participant .icon-background .item10 {
    top: 249px;
    right: -336px;
    z-index: 1;
    animation: rotate360 1.5s infinite linear;
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
    background-image: url(../images/item-background/bg-home7.png);
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