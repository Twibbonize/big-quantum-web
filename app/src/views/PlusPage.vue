<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import HeroPlus from '@/components/PlusPage/HeroPlus.vue';
import CampaignCollections from '@/components/PlusPage/CampaignCollections.vue';
import FeaturesList from '@/components/PlusPage/FeaturesList.vue';
import PackageSelection from '@/components/PlusPage/PackageSelection.vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const content = ref(null);

const { width, height } = useWindowSize;

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();

    if (top < 97) {
        setNavbarColor('white');
        setShadow(true);
        setLogoVariant('main');
        setCtaVariant('accent');
    } else {
        setNavbarColor('gradient');
        setShadow(false);
        setLogoVariant('black');
        setCtaVariant('accent');
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);
    setNavbarColor('gradient');
    setShadow(false);
    setLogoVariant('black');
    setCtaVariant('accent');
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <LayoutMain>
        <div class="plus-page">
            <HeroPlus :width="width" :height="height" />
            <div ref="content"></div>
            <div class="bg-white">
                <CampaignCollections :width="width" />
                <FeaturesList />
                <PackageSelection class="sm:my-14" />
            </div>
        </div>
    </LayoutMain>
</template>

<style></style>
