<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import BannerCreators from '@/components/HomePage/BannerCreators.vue'; 
import CampaignTrending from '@/components/HomePage/CampaignTrending.vue';
import FooterDefault from '@/components/FooterDefault.vue';
import HeroParticipant from '@/components/HomePage/HeroParticipant.vue';
import NavigationHeader from '@/components/NavigationHeader.vue';
import TopCreators from '@/components/HomePage/TopCreators.vue';


const scrollPosition = ref(0)
 
const doScroll = (event: any) => {
  scrollPosition.value = window.scrollY;
}
 
onMounted(() => {
  window.addEventListener('scroll', doScroll)
})
   
onUnmounted(() => {
  window.removeEventListener('scroll', doScroll)
})
</script>

<template>
  <div class="home-page" ref="content">
    <NavigationHeader/>
    <HeroParticipant ref="hero"/>
    <CampaignTrending class="py-60"/>
    <TopCreators class="py--60"/>
    <BannerCreators/>
    <FooterDefault/>
  </div>
</template>

<style lang="scss">
  .home-page {
    &__navbar {
      background: #16DAC1 !important;
    }
  }
</style>