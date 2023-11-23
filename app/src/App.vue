<script setup >
  import { ref } from 'vue';

  import NavigationHeader from '@/components/NavigationHeader.vue';
  import FooterDefault from '@/components/FooterDefault.vue';

  const navbarColor = ref('');
  

  function changeNavbarColor(value) {
    navbarColor.value = value;
  }
</script>

<template>
  <KeepAlive>
    <NavigationHeader :color="navbarColor"/>
  </KeepAlive>
  <RouterView @change-navbar="changeNavbarColor"></RouterView>
  <KeepAlive>
    <FooterDefault/>
  </KeepAlive>
</template>


<style lang="scss">

</style>
