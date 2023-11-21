<script setup >
  import { useRoute } from 'vue-router'

  import NavigationHeader from '@/components/NavigationHeader.vue';
  import FooterDefault from '@/components/FooterDefault.vue';

  const route = useRoute();
  
  function getNavbarClass() {
    if (/(creators)/ig.test(route.name)) return 'navbar--black';
    return '';
  }
</script>

<template>
  <KeepAlive>
    <NavigationHeader :class="getNavbarClass()"/>
  </KeepAlive>
  <RouterView></RouterView>
  <KeepAlive>
    <FooterDefault/>
  </KeepAlive>
</template>


<style lang="scss">
  .navbar {
    &--black {
      background: #1B1B1B !important;
      // mix-blend-mode: color-dodge;
    }
  }
</style>
