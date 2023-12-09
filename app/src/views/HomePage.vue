<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';

import BannerCreators from '@/components/HomePage/BannerCreators.vue';
import CampaignTrending from '@/components/HomePage/CampaignTrending.vue';
import HeroParticipant from '@/components/HomePage/HeroParticipant.vue';
import TopCreators from '@/components/HomePage/TopCreators.vue';
import CampaignSwiper from '@/components/HomePage/CampaignSwiper.vue';

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
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <div class="home-page">
        <HeroParticipant :width="width" :height="height"/>
        <div ref="content"></div>
        <CampaignTrending class="py-24" />
        <TopCreators class="py--60" />
        <BannerCreators class="home-page__banner container">
            <CampaignSwiper />
        </BannerCreators>
    </div>
</template>

<style lang="scss">
.home-page {
    &__navbar {
        background: #16dac1 !important;
    }
    &__banner {
        .tp-rated-bg {
            border-radius: 60px;
        }
    }
}
</style>
