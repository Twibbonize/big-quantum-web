<script setup>
import { onMounted } from 'vue';

import supportsJSON from '../../assets/lottie/supports.json';

onMounted(() => {
  
})
</script>

<template>
  <div class="hero-participant position-relative">
    <div class="hero-participant__bg"></div>
    <img class="hero-participant__pattern-left" src="/src/assets/img/patterns/hero-left-bottom.png" alt="">
    <img class="hero-participant__pattern-right" src="/src/assets/img/patterns/hero-right-top.png" alt="">
    <img class="hero-participant__pattern-center" src="/src/assets/img/patterns/hero-texture.png" alt="">

    <div class="hero-plus__content d-flex flex-column align-items-center">
      <img class="hero-plus__logo" src="/src/assets/img/logos/twibbonize-plus.svg" alt="twibbonize-plus">
      <h1>show your</h1>
      <div class="hero-plus__animated-text">
        <Vue3Lottie :animationData="supportsJSON" :height="250" :width="800" :loop="true" />
      </div>
      <h1>on a whole new level</h1>
      <p>Take action and make the most out of your moments with the help of our personalized templates suitable for every occassions</p>
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

  .hero-plus {
    &__content {
      margin-top: 130px;
      z-index: 3;
    }

    &__logo {
      height: 45px;
      z-index: 3;
    }

    &__animated-text {
      height: 180px;
      margin-top: -50px;
    }

    h1 {
      text-align: center;
      font-size: 80.34px;
      font-style: normal;
      font-weight: 700;
      line-height: 78.221px; /* 97.362% */
      letter-spacing: -3.214px;
    }

    p {
      z-index: 3;
      max-width: 560px;
      color: #1B1B1B;
      text-align: center;
      font-family: Manrope;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 28.6px */
    }
  }

  .hero-participant {
    overflow: hidden;
    height: 650px;

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
  }
</style>
