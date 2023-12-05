<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: String,
  size: String,
  borderRadius: String,
});

const colorClass = computed(() => {
  return props.color ? `btn-${props.color}` : 'btn-primary';
})

const sizeClass = computed(() => {
  return props.size ? props.size : '';
})

const borderRadiusClass = computed(() => {
  return props.borderRadius ? `rounded-${props.borderRadius}` : '';
})
</script>

<template>
  <button class="btn font-extrabold" :class="`${colorClass} ${sizeClass} ${borderRadiusClass}`">
    <slot></slot>
  </button>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

input[type='submit'],
.btn,
a.btn input.btn,
a.button,
span.button,
div.button {
  color: --color-white;
  padding: 11px 23px;
  min-height: 20px;
  line-height: 20px;
  @include border_radius();
  text-decoration: none;
  vertical-align: middle;
  outline: none;
  position: relative;
  text-align: center;
  border-radius: 100px !important;
  overflow: hidden;
  will-change: transform, box-shadow;
  &:not(.btn-outline):not(.btn-flat):not(.btn-link) {
    .text {
      color: --color-white;
    }
  }

  &.sm {
    height: 34px;
  }
  &.md {
    height: 42px;
  }
  &.lg {
    height: 52px;
  }

  i {
    vertical-align: middle;
    margin-top: -16px !important;
    position: relative;
    top: -1px;
    font-size: 20px;
    position: relative;
    stroke: 2px;
    min-width: 20px;
    height: 20px;
    &-left {
      margin-right: 5px;
    }

    &-right {
      margin-left: 5px;
    }
    &.sm {
      font-size: 12px;
    }
    &.md {
      font-size: 16px;
    }
    &.lg {
      font-size: 18px;
    }
  }

  &:not(.text-hover) {
    &:hover {
      .icon {
        &.icon-right {
          &:before,
          svg {
            animation: hoverBtn ease-out 0.3s;
          }
        }

        &.icon-left {
          &:before,
          svg {
            animation: hoverBtn ease-out 0.3s reverse;
          }
        }

        &:before {
          color: inherit;
        }
      }
    }

    @keyframes hoverBtn {
      0% {
        transform: translateX(0px);
      }

      51% {
        transform: translateX(20px);
        opacity: 1;
      }

      52% {
        opacity: 0;
        transform: translateX(-20px);
      }

      53% {
        opacity: 0;
      }

      54% {
        opacity: 1;
      }

      100% {
        transform: translateX(0px);
      }
    }
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: --color-main;
    border-color: --color-main;
    opacity: 0.9;
    outline: none;
    box-shadow: inherit;
    opacity: 0.9;
  }

  &.text-hover {
    overflow: hidden;
    position: relative;

    .icon, .text {
      @include animate();
    }

    .icon {
      max-width: 100%;
      text-align: center;
      height: 26px;
      position: absolute;
      top: calc(50% - 10px);
      font-size: 20px;
      left: 50%;
      top: 50%;
      margin: 0;
      transform: translate(-50%, -50%);
    }

    .text {
      display: inline-block;
      transform: translateY(-120%);
      opacity: 0;
    }

    &:hover {
      .icon {
        transform: translate(-50%, 120%);
        opacity: 0;
      }

      .text {
        transform: none;
        opacity: 1;
      }
    }
  }
}

.btn-main {
  color: $color_black;
  border: none !important ;
  transition: all 0.4s ease-in-out !important;
  background: $color_main !important;
  position: relative;

  @include before {
    height: 0;
    width: 0;
    border-radius: 100%;
    background: $color_black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.3s $transition_function;
    opacity: 0.3;
  }

  &:hover {
    color: $color_white;
    @include before {
      height: 20rem;
      width: 20rem;
    }
  }
}

.btn-black {
  color: $color_white;
  border: none !important ;
  transition: all 0.4s ease-in-out !important;
  background: $color_black !important;
  position: relative;

  @include before {
    height: 0;
    width: 0;
    border-radius: 100%;
    background: $color_white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.3s $transition_function;
    opacity: 0.3;
  }

  &:hover {
    @include before {
      height: 20rem;
      width: 20rem;
    }
  }
}

.btn-white {
  background: $color_white;
  border: solid 1px rgba(10, 33, 65, 0.05);
  color: $color_black;
  box-shadow: 0px 2px 4px #7e8eb11f !important;
  &:focus,
  &:active {
    opacity: 0.9;
    background: $color_white !important;
    border: solid 1px rgba(10, 33, 65, 0.05);
    color: $color_black;
    box-shadow: 0px 2px 4px #7e8eb11f !important;
  }
  &.dropdown-toggle {
    &:focus,
    &:active {
      opacity: 0.8;
      background: white !important;
      color: $color_main !important;
      box-shadow:
        0 9px 6px rgba(0, 0, 0, 0.1),
        0 -50px 0 rgba(0, 0, 0, 0) inset;
      border: solid 1px rgba(10, 33, 65, 0.05) !important;
    }
  }

  span::after {
    color: $color_black !important;
  }

  &.btn-outline {
    color: $color_white;
    border: solid 2px $color_white;
  }
  &:hover {
    opacity: 0.8;
    background: $color_white !important;
    color: $color_black !important;
    box-shadow:
      0 9px 6px rgba(0, 0, 0, 0.1),
      0 -50px 0 rgba(0, 0, 0, 0) inset;
    border: solid 1px rgba(10, 33, 65, 0.05) !important;
  }
}

.btn-yellow {
  color: $color_black;
  border: none !important ;
  transition: all 0.4s ease-in-out !important;
  background: $color_yellow !important;
  position: relative;

  @include before {
    height: 0;
    width: 0;
    border-radius: 100%;
    background: $color_black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.3s $transition_function;
    opacity: 0.3;
  }

  &:hover {
    @include before {
      height: 20rem;
      width: 20rem;
    }
  }
}

.btn-light {
  color: $color_black;
  border: none !important ;
  transition: all 0.4s ease-in-out !important;
  background: $color_light !important;
  position: relative;

  @include before {
    height: 0;
    width: 0;
    border-radius: 100%;
    background: $color_black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.3s $transition_function;
    opacity: 0.3;
  }

  &:hover {
    color: $color_white;
    @include before {
      height: 20rem;
      width: 20rem;
    }
  }
}

.btn-transparent {
  color: $color_black;
  border: none !important ;
  transition: all 0.4s ease-in-out !important;
  background: transparent !important;
  position: relative;

  &:hover {
    color: $color_black;
    text-decoration: underline;
  }
}
</style>