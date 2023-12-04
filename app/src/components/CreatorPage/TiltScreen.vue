<script setup>
import { onMounted, ref } from 'vue';
import tilt from 'vanilla-tilt';

const tiltObject = ref(null);

onMounted(() => {
  tilt.init(document.getElementById('tiltImage'), {
		max: 10,
		speed: 400,
    startX: 0,
    startY: 10,
    glare: true,
    'max-glare': 0.8,
    perspective: 1000,
    reverse: true,
    'reset-to-start': false,
    'full-page-listening': true
	});
})
</script>

<template>
  <div class="tilt-screen container">
    <div class="row">
      <div class="flex flex-col items-center">
        <h2 class="creators-features__title">Get it ready anytime <br>with our built in Twibbon Editor</h2>
        <h4 class="creators-features__subtitle mt-6">Effortless mobile-friendly editor with hundreds of pre-made templates for every occasions</h4>
      </div>
      <div class="flex justify-center container">
        <div id="tiltImage" ref="tiltImage" class="tilt-screen__wrapper relative flex items-center justify-center">
          <img class="tilt-screen__image" src="/src/assets/img/campaigns/frame-editor.png" alt="">
          <img class="tilt-screen__frame-1" src="/src/assets/img/campaigns/frame-1.png" alt="">
          <img class="tilt-screen__frame-2" src="/src/assets/img/campaigns/frame-2.png" alt="">
          <img class="tilt-screen__frame-3" src="/src/assets/img/campaigns/frame-3.png" alt="">
          <img class="tilt-screen__frame-4" src="/src/assets/img/campaigns/frame-4.png" alt="">
          <img class="tilt-screen__frame-5" src="/src/assets/img/campaigns/frame-5.png" alt="">
          <img class="tilt-screen__frame-6" src="/src/assets/img/campaigns/frame-6.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .tilt-screen {
    &__wrapper {
      margin-top: 260px;
      margin-bottom: 290px;
      width: 1000px;
      height: 567px;
      transform-style: preserve-3d;
      transform: perspective(1000px);
    }

    &__image {
      width: 100%;
      transform-style: preserve-3d;
      transform: perspective(1000px);
    }
    &__frame-1 {
      position: absolute;
      height: 267px;
      width: 267px;
      top: -10px;
      left: -140px;
      z-index: 2;
      transform: translateZ(100px)
    }
    &__frame-2 {
      position: absolute;
      width: 177px;
      height: 177px;
      right: 118px;
      bottom: -83px;
      transform: translateZ(100px)
    }
    &__frame-3 {
      position: absolute;
      width: 207px;
      height: 207px;
      left: 39px;
      top: -130px;
      z-index: 1;
      transform: translateZ(70px)
    }
    &__frame-4 {
      position: absolute;
      width: 257px;
      height: 257px;
      right: -77px;
      bottom: -28px;
      transform: translateZ(100px)
    } 
    &__frame-5 {
      position: absolute;
      width: 140px;
      height: 140px;
      right: -33px;
      top: -60px;
      transform: translateZ(100px)
    }
    &__frame-6 {
      position: absolute;
      width: 189px;
      height: 189px;
      left: -30px;
      bottom: -50px;
      transform: translateZ(100px)
    }
  }
</style>