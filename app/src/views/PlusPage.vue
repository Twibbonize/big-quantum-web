<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import HeroPlus from '@/components/PlusPage/HeroPlus.vue';
import CampaignCollections from '@/components/PlusPage/CampaignCollections.vue';
import FeaturesList from '@/components/PlusPage/FeaturesList.vue';
import PackageSelection from '@/components/PlusPage/PackageSelection.vue';

const content = ref(null);
const navbarColor = ref('gradient');
const navbarShadow = ref(false);

const { width, height } = useWindowSize;

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();

    if (top < 97) {
        navbarColor.value = 'white';
        navbarShadow.value = true;
    } else {
        navbarColor.value = 'gradient';
        navbarShadow.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <LayoutMain :navbarColor="navbarColor" :navbarShadow="navbarShadow">
        <div class="plus-page">
            <HeroPlus :width="width" :height="height" />
            <div ref="content"></div>
            <CampaignCollections :width="width" />
            <FeaturesList />
            <PackageSelection class="sm:my-14" />
        </div>
    </LayoutMain>
</template>

<style></style>
