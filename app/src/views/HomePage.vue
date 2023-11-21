<script setup >
import { ref, onMounted, onUnmounted } from 'vue';

import BannerCreators from '@/components/HomePage/BannerCreators.vue'; 
import CampaignTrending from '@/components/HomePage/CampaignTrending.vue';
import HeroParticipant from '@/components/HomePage/HeroParticipant.vue';
import TopCreators from '@/components/HomePage/TopCreators.vue';


const scrollPosition = ref(0)
 
const doScroll = (any) => {
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
    <HeroParticipant ref="hero"/>
    <CampaignTrending class="py-60"/>
    <TopCreators class="py--60"/>
    <BannerCreators class="home-page__banner container"/>
  </div>
</template>

<style lang="scss">
  .home-page {
    &__navbar {
      background: #16DAC1 !important;
    }
    &__banner {
      .tp-rated-bg {
        border-radius: 60px;
      }
    }
  }
</style>