<script setup >
import { ref, onMounted, onUnmounted } from 'vue';

import BannerCreators from '@/components/HomePage/BannerCreators.vue';
import CampaignSwiper from '@/components/HomePage/CampaignSwiper.vue';
import VerticalCarousel from '@/components/CreatorPage/VerticalCarousel.vue';
import BentoGrid from '@/components/CreatorPage/BentoGrid.vue';
import TiltScreen from '@/components/CreatorPage/TiltScreen.vue';

const emit = defineEmits(['change-navbar']);

const content = ref(null);
 
const doScroll = () => {
  const { top } = content.value.getBoundingClientRect();
  if (top < 97) emit('change-navbar', '');
  else emit('change-navbar', 'transparent');
}
 
onMounted(() => {
  emit('change-navbar', 'transparent')
  window.addEventListener('scroll', doScroll)
})
   
onUnmounted(() => {
  window.removeEventListener('scroll', doScroll)
})
</script>

<template>
  <div class="creators-page">
    <BannerCreators/>
    <div ref="content"></div>
    <CampaignSwiper class="creators-page__swiper"/>
    <VerticalCarousel/>
    <BentoGrid/>
    <TiltScreen/>
  </div>
</template>

<style lang="scss">
.creators-page {
  .tp-rated-bg {
    height: 767px;
    padding-top: 139px;
    box-sizing: border-box;
  }

  .tp-section-title-3 {
    font-size: 105px;
    line-height: 100px;
    
    span {
      font-size: 130px;
    }
  }

  .banner-creators__spark {
    top: 24px;
  }

  .banner-creators__highlight-line {
    top: 5px;
  }

  .banner-creators__btn-container, .author-rated-big-img {
    display: none !important;
  }

  &__swiper {
    margin-top: -150px !important;
  }

  .campaign-swiper__campaign {
    height: 235px;
    width: 235px;
    margin: 0 4px;
  }

}
</style>