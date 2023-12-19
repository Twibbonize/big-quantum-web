<script setup>
import { computed } from 'vue';

const props = defineProps({
  prevDisabled: Boolean,
  nextDisabled: Boolean,
})

const emit = defineEmits(['next', 'prev']);

</script>

<template>
    <div class="slider-navigation flex items-center gap-x-6">
      <div class="arrow" :class="{ 'active': !prevDisabled }" @click="$emit('prev')">
        <i class="ri-arrow-left-s-line"></i>
      </div>
      <div class="arrow" :class="{ 'active': !nextDisabled }" @click="$emit('next')">
        <i class="ri-arrow-right-s-line"></i>
      </div>
    </div>
</template>

<style lang="scss">
  .slider-navigation {
    .arrow {
      @apply rounded-3xl flex items-center justify-center;
      width: 40px;
      height: 40px;

      i {
        @apply text-2xl;
      }

      &.active {
        @apply bg-main cursor-pointer;
      }
    }
  }
</style>