<script setup >
import TWButton from '@/components/base/TWButton.vue';
</script>

<template>
  <div class="tp-rated-area overflow-hidden position-relative">
    <div class="banner-creators__ellipse"></div>
    
    <div class="tp-rated-bg position-relative"  data-background="assets/img/rate/rated-bg.jpg">
      <img class="banner-creators__bg" src="/src/assets/img/patterns/background-banner-creators.png" alt="">
      <div class="d-lg-flex justify-content-center">
          <img src="/src/assets/img/logos/twibbonize-creators.svg" alt="twibbonize-for-creators">
      </div>

      <div class="container z-index-6 mt-3">
          <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="tp-rated-title-box text-center mb-60">
                  <h5 class="tp-section-title-3 text-white pb-40">
                    <div class="d-flex justify-content-center">
                      <div class="d-flex position-relative">
                        <span>
                          <VueWriter :array="['gather', 'inspire', 'unite', 'entertain', 'grow']" />
                        </span>
                        <img class="banner-creators__spark position-absolute" src="/src/assets/img/items/banner-creators-spark.svg" alt="">
                        <span class="banner-creators__highlight-line position-absolute">
                          <VueWriter :array="['______', '_______', '_____', '_________', '____']" />
                        </span>
                        your
                      </div>
                    </div>
                    supporters with <br>Twibbonize</h5>
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
  @keyframes glow {
    from {
      transform: translateX(-50%) scale(0.9) rotate(0deg);
    }
    to {
      transform: translateX(-60%) scale(1.1) rotate(10deg);
    }
    // 0%, 100% {
    // border-radius: 33% 67% 70% 30%/30% 40% 70% 70%;
    // }
    // 20% {
    //     border-radius: 37% 63% 51% 49%/37% 35% 35% 63%;
    // }
    // 40% {
    //     border-radius: 36% 64% 64% 36%/64% 48% 52% 26%;
    // }
    // 60% {
    //     border-radius: 37% 63% 51% 49%/30% 30% 70% 73%;
    // }
    // 80% {
    //     border-radius: 40% 60% 42% 58%/51% 51% 49% 59%;
    // }
  }

  .banner-creators {
    &__bg {
      position: absolute;
      bottom: -40%;
      left: 50%;
      transform: translateX(-50%);
      animation: 8s glow infinite ease-in-out alternate;
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
      left: -30px;
      top: 2px;
    }
    &__highlight-line {
      font-size: 50px !important;
      left: -15px;
      top: 5px;
    }
  }
</style>