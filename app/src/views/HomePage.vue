<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import { useWindowSize } from '@vueuse/core';
import AOS from "aos";

import CampaignTrending from '@/components/HomePage/CampaignTrending.vue';
import HeroParticipant from '@/components/HomePage/HeroParticipant.vue';
import TopCreators from '@/components/HomePage/TopCreators.vue';

import BannerCreators from '@/components/HomePage/BannerCreators.vue';
import CampaignSwiper from '@/components/HomePage/CampaignSwiper.vue';

// const BannerCreators = defineAsyncComponent(() => 
//     import('@/components/HomePage/BannerCreators.vue')
// )

// const CampaignSwiper = defineAsyncComponent(() => 
//     import('@/components/HomePage/CampaignSwiper.vue')
// )

const { width, height } = useWindowSize();
const emit = defineEmits(['change-navbar']);

const content = ref(null);

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();
    if (top < 97) emit('change-navbar', '');
    else emit('change-navbar', 'gradient');
};

onMounted(() => {
    emit('change-navbar', 'gradient');
    window.addEventListener('scroll', doScroll);
    AOS.init();
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <div class="home-page">
        <HeroParticipant :width="width" :height="height" />
        <div ref="content"></div>
        <CampaignTrending :key="width" :width="width" class="pt-8 md:pt-24 md:pb-16" />
        <TopCreators :width="width" :height="height" />
        <BannerCreators data-aos="fade-in" :width="width" :height="height" class="container">
            <CampaignSwiper />
        </BannerCreators>
    </div>
</template>
