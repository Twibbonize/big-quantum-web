<template>
  <div class="home-page">
    <NavigationHeader/>
    <HeroParticipant/>
  </div>
</template>

<script lang="ts">
import HeroParticipant from '@/components/HomePage/HeroParticipant.vue';
import NavigationHeader from '@/components/NavigationHeader.vue';

export default {
  name: 'HomePage',
  components: {
    HeroParticipant,
    NavigationHeader,
  },
}

</script>

<style lang="scss">
  .home-page {
    // background: #16DAC1 !important;
  }
</style>