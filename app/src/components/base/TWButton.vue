<template>
  <button class="btn fw-bolder" :class="`${colorClass} ${sizeClass} ${borderRadiusClass}`">
    <slot></slot>
  </button>
</template>

<script >
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'TWButton',
  props: {
    id: [Number, String],
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    borderRadius: {
      type: String,
    },
  },
  computed: {
    colorClass() {
      return this.color ? `btn-${this.color}` : 'btn-primary';
    },
    sizeClass() {
      return this.size ? `btn-${this.size}` : '';
    },
    borderRadiusClass() {
      return this.borderRadius ? `rounded-${this.borderRadius}` : '';
    }
  }
})
</script>