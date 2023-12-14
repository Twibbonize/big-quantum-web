<script setup>
</script>

<template>
  <div class="pills rounded-4xl">
    <slot></slot>
  </div>
</template>

<style lang="scss">
    .pills {
      @apply bg-white;
      border: 1px solid var(--color-light);
      box-shadow: 0px 3.921px 23.523px 0px rgba(157, 170, 170, 0.12);
    }
</style>