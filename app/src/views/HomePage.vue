<template>
  <div class="home-page">
    <NavigationHeader/>
    <HeroParticipant/>
    <CampaignTrending class="py-60"/>
    <TopCreators class="py--60"/>
    <BannerCreators/>
    <FooterDefault/>
  </div>
</template>

<script lang="ts">
import BannerCreators from '@/components/HomePage/BannerCreators.vue'; 
import CampaignTrending from '@/components/HomePage/CampaignTrending.vue';
import FooterDefault from '@/components/FooterDefault.vue';
import HeroParticipant from '@/components/HomePage/HeroParticipant.vue';
import NavigationHeader from '@/components/NavigationHeader.vue';
import TopCreators from '@/components/HomePage/TopCreators.vue';

export default {
  name: 'HomePage',
  components: {
    BannerCreators,
    CampaignTrending,
    FooterDefault,
    HeroParticipant,
    NavigationHeader,
    TopCreators,
  },
}

</script>

<style lang="scss">
  .home-page {
    // background: #16DAC1 !important;
  }
</style>