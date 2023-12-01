<script setup>
import TWToggleSwitch from '@/components/base/TWToggleSwitch.vue';
import TWButton from '../base/TWButton.vue';

</script>

<template>
  <div class="container">
    <div class="package-selection d-flex flex-column align-items-center">
      <img class="package-selection__bg" src="/src/assets/img/patterns/background-banner-creators.png" alt="">
      <h4 class="package-selection__title color_white">Your supporters await</h4>
      <p class="package-selection__description mt-4">Try for free, find what you need, and choose the best plan</p>
      <TWToggleSwitch class="mt-5"/>
      <div class="package-selection__package w-100 row mt-5">
        <div class="package-selection__free col w-100 d-flex flex-column justify-content-between">
          <div>
            <h5>Free</h5>
            <p class="mt-3">For people who are just getting started</p>
            <div class="package-selection__line"></div>
            <div class="d-flex align-items-center mb-4 mt-1">
              <div class="package-selection__icon-container mr-2">
                <i class="ri-check-line"></i>
              </div>
              <p>Create Unlimited Campaign</p>
            </div>
            <div class="d-flex align-items-center mb-4 mt-1">
              <div class="package-selection__icon-container mr-2">
                <i class="ri-check-line"></i>
              </div>
              <p>Easy To Share Short URL</p>
            </div>
            <div class="d-flex align-items-center mb-4 mt-1">
              <div class="package-selection__icon-container mr-2">
                <i class="ri-check-line"></i>
              </div>
              <p>Frame Twibbon</p>
            </div>
          </div>
          <TWButton color="semi-transparent" class="package-selection__btn w-100 color_white">
            Sign Up
          </TWButton>
        </div>
        <div class="package-selection__individual col w-100">
          <h6>Premium</h6>
          <h5>Individual</h5>
          <p class="mt-3 mb-4">For people who want more out of Twibbonize</p>
          <span>$12</span>
          <div class="package-selection__black-line"></div>
          <div class="d-flex align-items-center mb-4 mt-1">
            <div class="package-selection__icon-container mr-2">
              <i class="ri-check-line"></i>
            </div>
            <p>No Watermark for All</p>
          </div>
          <div class="d-flex align-items-center mb-4 mt-1">
            <div class="package-selection__icon-container mr-2">
              <i class="ri-check-line"></i>
            </div>
            <p>Background Twibbon</p>
          </div>
          <div class="d-flex align-items-center mb-4 mt-1">
            <div class="package-selection__icon-container mr-2">
              <i class="ri-check-line"></i>
            </div>
            <p>Multiple Frames per Campaign</p>
          </div>
          <div class="d-flex align-items-center mb-4 mt-1">
            <div class="package-selection__icon-container mr-2">
              <i class="ri-check-line"></i>
            </div>
            <p>Instant Download for All</p>
          </div>
          <TWButton color="primary" class="w-100 color_white mt-4">
            Purchase Now <i class="ri-arrow-right-line mb-2"></i>
          </TWButton>
        </div>
        <div class="package-selection__business col w-100">
          <h6>Premium</h6>
          <h5>Business</h5>
          <p class="mt-3 mb-4">For people who want more out of Twibbonize</p>
          <span>Start from $48</span>
          <div class="package-selection__black-line"></div>
          <div class="d-flex align-items-center mb-4 mt-1">
            <div class="package-selection__icon-container mr-2">
              <i class="ri-check-line"></i>
            </div>
            <p>No Watermark for All</p>
          </div>
          <div class="d-flex align-items-center mb-4 mt-1">
            <div class="package-selection__icon-container mr-2">
              <i class="ri-check-line"></i>
            </div>
            <p>Background Twibbon</p>
          </div>
          <div class="d-flex align-items-center mb-4 mt-1">
            <div class="package-selection__icon-container mr-2">
              <i class="ri-check-line"></i>
            </div>
            <p>Multiple Frames per Campaign</p>
          </div>
          <div class="d-flex align-items-center mb-4 mt-1">
            <div class="package-selection__icon-container mr-2">
              <i class="ri-check-line"></i>
            </div>
            <p>Instant Download for All</p>
          </div>
          <TWButton color="black" class="w-100 color_white mt-4">
            Purchase Now <i class="ri-arrow-right-line mb-2"></i>
          </TWButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .package-selection {
    overflow: hidden;
    border-radius: 20px;
    background: #1B1B1B;
    position: relative;
    margin: 96px 0;
    padding: 160px 80px;

    &__bg {
      position: absolute;
      bottom: -40%;
      left: 50%;
      transform: translateX(-50%);
      animation: 8s glow infinite ease-in-out alternate;
    }

    &__package {
      max-width: 1200px;
      gap: 32px;
    }

    &__title {
      color: #FFF;
      text-align: center;
      font-family: Manrope;
      font-size: 56px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 56px */
      letter-spacing: -2.24px;
    }

    &__description {
        color: #FFF;
        text-align: center;
        font-family: Manrope;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 22px */
    }

    &__line {
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.20);
      margin: 32px 0;
    }

    &__black-line {
      width: 100%;
      border: 1px solid rgba(0,0,0, 0.20);
      margin: 32px 0;
    }

    &__icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.20);
      padding: 0 5px;
    }

    &__free {
      border-radius: 20px;
      border: 1px solid #FFF;
      box-shadow: 0px 1px 3px 0px rgba(18, 20, 32, 0.14);
      padding: 64px 64px 40px;

      h5 {
        color: #FFF;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 22px */
      }

      p, i {
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
    }

    &__individual {
      border-radius: 20px;
      background: #FFF;
      padding: 64px 64px 40px;
      position: relative;

      h5 {
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 22px */
      }

      p, i {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }

      span {
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 28px */
      }

      h6 {
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 12px */
        letter-spacing: 2.4px;
        text-transform: uppercase;
        position: absolute;
        top: 48px;
      }
    }

    &__business {
      border-radius: 20px;
      background: linear-gradient(166deg, #16DAC1 9.91%, #169B9A 122.8%);
      padding: 64px 64px 40px;
      position: relative;

      h5 {
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 22px */
      }

      p, i {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }

      span {
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 28px */
      }

      h6 {
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 12px */
        letter-spacing: 2.4px;
        text-transform: uppercase;
        position: absolute;
        top: 48px;
      }
    }
  }

  @keyframes glow {
    from {
      transform: translateX(-50%) scale(0.9) rotate(0deg);
    }
    to {
      transform: translateX(-60%) scale(1.1) rotate(10deg);
    }
  }
</style>