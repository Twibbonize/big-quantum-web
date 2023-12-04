<script setup>
import { computed } from 'vue';

import QButton from '@/components/base/QButton.vue';

const props = defineProps({
  color: String
})

const buttonColor = computed(() => {
  if (/(gradient|transparent)/ig.test(props.color)) return 'white';
  return 'main'
});

const navbarColor = computed(() => {
  if (props.color) return props.color;
  return '';
})
</script>

<template>
  <header class="navigation-header" :class="navbarColor">
    <div class="container mx-auto">
      <div class="flex flex-row items-center justify-between gap-x-4">
        <router-link to="/" class="col-3">
          <picture class="logo">
            <source v-if="color === 'gradient'" srcset="/src/assets/img/logos/twibbonize-logo-black.svg">
            <source v-else-if="color === 'transparent'" srcset="/src/assets/img/logos/twibbonize-logo-white.svg">
            <img class="logo" src="/src/assets/img/logos/twibbonize-logo.svg" alt="twibbonize">
          </picture>
        </router-link>
        <div class="search flex p-0">
          <input type="text" name="navigation-search" id="navigation-search" placeholder="Find Campaigns or Creators">
          <i class="ri-search-line text-xl font-bold" role="button"></i>
        </div>
        <div class="action col-3 flex items-center justify-end">
          <QButton class="text-xs	" :color="buttonColor" size="lg" border-radius="circle">
            <i class="ri-add-line"></i>
            Start a Campaign
          </QButton>
          <div class="menu flex items-center justify-center  ml-4">
            <i class="ri-menu-line color-black text-2xl" role="button"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  @import '@/assets/variables.scss';

  .navigation-header {
    background: $color_white;
    gap: 10px;
    padding-top: 27px;
    padding-bottom: 18px;
    position: fixed;
    top: 0;
    z-index: 20;
    width: 100%;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);

    .logo {
      height: 2rem;
      margin-top: -8px;
      display: block;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      filter: contrast(1);
      
      &:hover {
        cursor: pointer;
        filter: contrast(0.7);
      }
    }

    .search {
      background: $color_white;
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

    .menu {
      width: 52px;
      height: 52px;
      border-radius: 26px;
      background: $color_white;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);

      &:hover {
        cursor: pointer;
      }
    }
  }

  .navigation-header.gradient {
    background: linear-gradient(180deg, #16DAC1 0%, rgba(22, 218, 193, 0.00) 100%);
    box-shadow: none;
  }

  .navigation-header.transparent {
    background: transparent;
    box-shadow: none;
  }

  @keyframes tocontrast {
    0%   {
      filter: contrast(1);
      -webkit-filter: contrast(1);
    }
    50%  {
      filter: contrast(0.4);
      -webkit-filter: contrast(0.4);
    }
    100% {
      filter: contrast(1);
      -webkit-filter: contrast(1);
    }
  }
</style>