<template>
  <header class="navigation-header">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-between">
        <div class="col-3">
          <img class="navigation-header__logo" src="/src/assets/img/logos/twibbonize-logo-black.svg" alt="twibbonize">
        </div>
        <div class="navigation-header__search d-flex p-0">
          <input type="text" name="navigation-search" id="navigation-search">
          <i class="ri-search-line" role="button"></i>
        </div>
        <div class="navigation-header__action col-3 d-flex align-items-center justify-content-end">
          <TWButton class="fs-12" color="white" border-radius="circle">
            <i class="ri-add-line"></i>
            Start a Campaign
          </TWButton>
          <i class="ri-menu-line color_white fs-2 ml-4" role="button"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import TWButton from './base/TWButton.vue';

export default {
  name: 'NavigationHeader',
  components: {
    TWButton,
  }
};
</script>

<style lang="scss">
  .navigation-header {
    background: #16DAC1;
    border-bottom: rgba(#1B1B1B, .08) 1px solid;
    gap: 10px;
    padding-top: 27px;
    padding-bottom: 18px;

    &__logo {
      height: 3rem;
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
  }
</style>