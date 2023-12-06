<script setup>
import QButton from '@/components/base/QButton.vue';
import HomeSlider from '@/components/HomePage/HomeSlider.vue';
import BGHero from '@/components/HomePage/BGHero.vue';
import supportsJSON from '../../assets/lottie/supports.json';
</script>

<template>
  <BGHero class="hero-participant">
    <div class="container mx-auto">
      <div class="w-full pages-title mx-auto">
        <div class="container z-10 absolute mx-auto">
          <div class="w-4/12 content">
            <h1 class="hero-participant__text user-select-none pe-none lowercase">
              show your  
            </h1>
            <div class="hero-participant__text-animation">
              <Vue3Lottie :animationData="supportsJSON" :height="200" :width="600" :loop="true" />
            </div>
            <h4 class="hero-participant__description fw-normal text-xl	 user-select-none pe-none">
              Turn your passion into action; create custom images that show what you stand for and invite friends to join you
            </h4>
            <div class="hero-participant__btn-container flat-button flex items-center mt-6 gap-3">
              <QButton class="text-sm" color="yellow" border-radius="circle">
                <i class="ri-add-line"></i>
                Start a Campaign
              </QButton>
              <div class="hero-participant__or text-sm font-bold">or</div>
              <QButton class="text-sm !px-0" color="transparent" border-radius="circle">
                Find a Campaign
              </QButton>
            </div>
          </div>
        </div>
        <HomeSlider/>
      </div>
    </div>
  </BGHero>
</template>

<style lang="scss">
  .hero-participant {
    overflow: hidden;

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