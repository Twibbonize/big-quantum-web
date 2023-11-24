<script setup>
// import { ref, onMounted } from 'vue';
import TWButton from '../base/TWButton.vue';
import HomeSlider from './HomeSlider.vue';
import supportsJSON from '../../assets/lottie/supports.json';

// const tagline = ['supports', 'enthusiasm', 'gratitude', 'sympathy', 'participation'];
</script>

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
                <div class="hero-participant__text-animation">
                  <Vue3Lottie :animationData="supportsJSON" :height="200" :width="600" :loop="true" />
                </div>
                <!-- <h1 id="hero-typed" class="hero-participant__text-highlight text-lowercase user-select-none pe-none">
                  supports
                </h1> -->
                <!-- <h1 id="hero-line-typed" class="hero-participant__text-highlight-line">
                  _______
                </h1> -->
                <h4 class="hero-participant__description fw-normal fs-5 user-select-none pe-none">
                  Turn your passion into action; create custom images that show what you stand for and invite friends to join you
                </h4>
                <div class="hero-participant__btn-container flat-button d-flex align-items-center mt-4 gap-3">
                  <TWButton class="fs-14" color="secondary" border-radius="circle">
                    <i class="ri-add-line"></i>
                    Start a Campaign
                  </TWButton>
                  <div class="hero-participant__or fs-14 fw-bold">or</div>
                  <TWButton class="fs-14 px-0" color="transparent" border-radius="circle">
                    Find a Campaign
                  </TWButton>
                </div>
              </div>
            </div>
            <HomeSlider/>
          </div>
      </div>
    </div>
</div>
</template>

<style lang="scss">
  @keyframes move {
    from {
      transform: scale(1) translateX(-50%) rotate(0deg);
    }
    to {
      transform: scale(1.2) translateX(-50%) rotate(30deg);
    }
  }


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
      bottom: -250%;
      left: 20%;
      filter: blur(15.4px);
      mix-blend-mode: darken;
      animation: 8s move infinite ease-in-out alternate;
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
      letter-spacing: -9.833px !important;
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
        letter-spacing: -14px !important;
        transform: rotate(-2deg);
        margin-top: -110px;
      }
    }

    &__text-animation {
      margin-left: -35px;
      margin-top: -50px;
    }

    &__description {
      color: #1B1B1B;
      font-size: 22px !important;
      line-height: 27px !important;
      font-weight: 500;
      margin-top: 30px !important;
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
    background-image: url(../images/item-background/home-slider.png);
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