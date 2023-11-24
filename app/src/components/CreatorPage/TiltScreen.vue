<script setup>
import { onMounted, ref } from 'vue';
import tilt from 'vanilla-tilt';

const tiltObject = ref(null);

onMounted(() => {
  tilt.init(document.getElementById('tiltImage'), {
		max: 10,
		speed: 400,
    startX: 0, // the starting tilt on the X axis, in degrees.
    startY: 10,
	});
})
</script>

<template>
  <div class="tilt-screen container">
    <div class="row">
      <div class="d-flex flex-column align-items-center">
        <h2 class="creators-features__title">Get it ready anytime <br>with our built in Twibbon Editor</h2>
        <h4 class="creators-features__subtitle mt-4">Effortless mobile-friendly editor with hundreds of pre-made templates for every occasions</h4>
      </div>
      <div class="d-flex justify-content-center container">
        <div id="tiltImage" ref="tiltImage" class="tilt-screen__wrapper position-relative d-flex align-items-center justify-content-center">
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
    }

    &__image {
      width: 100%;
    }
    &__frame-1 {
      position: absolute;
      height: 267px;
      width: 267px;
      top: -20px;
      left: -180px;
      z-index: 2;
    }
    &__frame-2 {
      position: absolute;
      width: 177px;
      height: 177px;
      right: 100px;
      bottom: -100px;
    }
    &__frame-3 {
      position: absolute;
      width: 207px;
      height: 207px;
      left: 10px;
      top: -150px;
      z-index: 1;
    }
    &__frame-4 {
      position: absolute;
      width: 257px;
      height: 257px;
      right: -100px;
      bottom: -40px;
    } 
    &__frame-5 {
      position: absolute;
      width: 140px;
      height: 140px;
      right: -80px;
      top: -80px;
    }
    &__frame-6 {
      position: absolute;
      width: 189px;
      height: 189px;
      left: -90px;
      bottom: -90px;
    }
  }
</style>