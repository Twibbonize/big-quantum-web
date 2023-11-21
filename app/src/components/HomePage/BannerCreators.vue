<script setup >
import TWButton from '@/components/base/TWButton.vue';
</script>

<template>
  <div class="tp-rated-area overflow-hidden position-relative">
    <div class="banner-creators__ellipse"></div>
    <img class="banner-creators__bg" src="/src/assets/img/patterns/background-banner-creators.png" alt="">

    <div class="tp-rated-bg"  data-background="assets/img/rate/rated-bg.jpg">
      <div class="d-lg-flex justify-content-center">
          <img src="/src/assets/img/logos/twibbonize-creators.svg" alt="twibbonize-for-creators">
      </div>

      <div class="container z-index-6 mt-3">
          <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="tp-rated-title-box text-center mb-60">
                  <h5 class="tp-section-title-3 text-white pb-40">
                    <span class="position-relative">
                      <img class="banner-creators__spark position-absolute" src="/src/assets/img/items/banner-creators-spark.svg" alt="">
                      <span>gather</span>
                      <span class="banner-creators__highlight-line position-absolute">_____</span>
                    </span>
                    your<br> supporters with <br>Twibbonize</h5>
                  <div class="banner-creators__btn-container d-flex justify-content-center align-items-center mt-3">
                    <TWButton class="fs-14 ws-nowrap" color="secondary" border-radius="circle">
                      Learn More
                    </TWButton>
                    <span class="fs-14 color_white ml-4">or</span>
                    <TWButton class="color_white fs-14 ws-nowrap" color="transparent" border-radius="circle">
                      Try it now, Free!
                    </TWButton>
                  </div>
                </div>
            </div>
          </div>
          <div class="author-rated-big-img d-flex justify-content-center"  data-parallax='{"y": 100, "smoothness": 30}'>
            <img src="/src/assets/img/logos/creators-brand.png" alt="twibbonize-for-creators">
          </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .banner-creators {
    &__bg {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &__ellipse {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: 350px;
      height: 200px;
      border-radius: 350px;
      background: rgba(22, 218, 193, 0.30);
      filter: blur(77.16836547851562px);
    }
    &__spark {
      width: 35px;
      height: 42px;
      left: -26px;
      top: 2px;
    }
    &__highlight-line {
      left: 0;
      top: 5px;
    }
  }
</style>