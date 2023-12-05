<script setup>
</script>

<template>
  <div class="bg-hero relative">
    <slot></slot>
    <img class="pattern-left z-0" src="/src/assets/img/patterns/hero-left-bottom.png" alt="">
    <img class="pattern-right z-0" src="/src/assets/img/patterns/hero-right-top.png" alt="">
    <img class="pattern-center z-0" src="/src/assets/img/patterns/hero-texture.png" alt="">
  </div>
</template>

<style lang="scss">
  .bg-hero {
    overflow: hidden;
    background: #16DAC1;

    .pattern-left {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .pattern-right {
      position: absolute;
      top: 0;
      right: 0;
    }

    .pattern-center {
      position: absolute;
      top: 0;
      left: 40%;
      filter: blur(15.4px);
      mix-blend-mode: darken;
      animation: 8s move infinite ease-in-out alternate;
    }
  }

  @keyframes move {
    from {
      transform: scale(1) translateX(-50%) rotate(0deg);
    }
    to {
      transform: scale(1.2) translateX(-50%) rotate(30deg);
    }
  }
</style>