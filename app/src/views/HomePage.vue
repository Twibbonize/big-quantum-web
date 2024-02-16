<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import AOS from 'aos';

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import CampaignTrending from '@/components/HomePage/CampaignTrending.vue';
import HeroParticipant from '@/components/HomePage/HeroParticipant.vue';
import TopCreators from '@/components/HomePage/TopCreators.vue';
import BannerCreators from '@/components/HomePage/BannerCreators.vue';
import CampaignSwiper from '@/components/HomePage/CampaignSwiper.vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const { width, height } = useWindowSize();
const emit = defineEmits(['change-navbar']);

const content = ref(null);

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
        setCtaVariant('secondary');
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);
    AOS.init();

    setNavbarColor('gradient');
    setShadow(false);
    setLogoVariant('black');
    setCtaVariant('secondary');
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <LayoutMain>
        <div class="home-page">
            <HeroParticipant :width="width" :height="height" />
            <div ref="content"></div>
            <div class="bg-white">
                <CampaignTrending :key="width" :width="width" class="pt-8 md:pt-24 md:pb-16" />
                <TopCreators :width="width" :height="height" />
                <BannerCreators
                    data-aos="fade-in"
                    :width="width"
                    :height="height"
                    class="container rounded-[40px]"
                >
                    <CampaignSwiper />
                </BannerCreators>
            </div>
        </div>
    </LayoutMain>
</template>

<style lang="scss">
.home-page {
    .banner-creators {
        .bg::before {
            width: 100%;
            @apply sm:rounded-[40px];
        }
    }
}
</style>
