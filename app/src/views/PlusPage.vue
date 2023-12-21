<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import HeroPlus from '@/components/PlusPage/HeroPlus.vue';
import CampaignCollections from '@/components/PlusPage/CampaignCollections.vue';
import FeaturesList from '@/components/PlusPage/FeaturesList.vue';
import PackageSelection from '@/components/PlusPage/PackageSelection.vue';

const emit = defineEmits(['change-navbar']);
const content = ref(null);
const { width, height } = useWindowSize;

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
    <div class="plus-page">
        <HeroPlus :width="width" :height="height" />
        <div ref="content"></div>
        <CampaignCollections :width="width"/>
        <FeaturesList />
        <PackageSelection />
    </div>
</template>

<style></style>
