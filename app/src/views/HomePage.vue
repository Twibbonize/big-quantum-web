<template>
  <div class="home-page">
    <HeroParticipant/>
  </div>
</template>

<script lang="ts">
import HeroParticipant from '@/components/HomePage/HeroParticipant.vue';

export default {
  name: 'HomePage',
  components: {
    HeroParticipant,
  },
}

</script>

<style lang="scss">
  .home-page {
    // background: #16DAC1 !important;
  }
</style>