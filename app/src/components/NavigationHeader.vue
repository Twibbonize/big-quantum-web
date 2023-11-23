<script setup>
import { computed } from 'vue';

import TWButton from './base/TWButton.vue';

const props = defineProps({
  color: String
})

const buttonColor = computed(() => {
  if (/(gradient|transparent)/ig.test(props.color)) return 'white';
  return 'primary'
});

const navbarColor = computed(() => {
  if (props.color) return `navigation-header--${props.color}`;
  return '';
})
</script>

<template>
  <header class="navigation-header" :class="navbarColor">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-between">
        <router-link to="/" class="col-3">
          <picture class="navigation-header__logo">
            <source v-if="props.color === 'gradient'" srcset="/src/assets/img/logos/twibbonize-logo-black.svg">
            <source v-else-if="props.color === 'transparent'" srcset="/src/assets/img/logos/twibbonize-logo-white.svg">
            <img class="navigation-header__logo" src="/src/assets/img/logos/twibbonize-logo.svg" alt="twibbonize">
          </picture>
        </router-link>
        <div class="navigation-header__search d-flex p-0">
          <input type="text" name="navigation-search" id="navigation-search">
          <i class="ri-search-line" role="button"></i>
        </div>
        <div class="navigation-header__action col-3 d-flex align-items-center justify-content-end">
          <TWButton class="fs-12" :color="buttonColor" border-radius="circle">
            <i class="ri-add-line"></i>
            Start a Campaign
          </TWButton>
          <div class="navigation-header__menu d-flex align-items-center justify-content-center  ml-4">
            <i class="ri-menu-line color-black fs-3" role="button"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .navigation-header {
    background: #FFFFFF;
    gap: 10px;
    padding-top: 27px;
    padding-bottom: 18px;
    position: fixed;
    top: 0;
    z-index: 20;
    width: 100%;

    &__logo {
      height: 2rem;
      margin-top: -8px;
      display: block;
      
      &:hover {
        cursor: pointer;
      }
    }

    &__search {
      background: #FFFFFF;
      position: relative;
      height: 52px;
      border-radius: 26px;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
      max-width: 521px;
      width: 100%;

      input {
        width: 100%;
        border: none !important;
        height: 52px !important;
        border-radius: 26px;
        padding: 13.5px 54px 13.5px 18px;
      }

      i {
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &__action {
    }

    &__menu {
      width: 52px;
      height: 52px;
      border-radius: 26px;


      &:hover {
        cursor: pointer;
      }
    }
  }

  .navigation-header--gradient.navigation-header {
    background: linear-gradient(180deg, #16DAC1 0%, rgba(22, 218, 193, 0.00) 100%);
  }

  .navigation-header--transparent.navigation-header {
    background: transparent;
  }
</style>