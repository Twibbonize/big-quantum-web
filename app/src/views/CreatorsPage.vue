<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize, useWindowScroll } from '@vueuse/core';

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import BannerCreators from '@/components/HomePage/BannerCreators.vue';
import CampaignSwiper from '@/components/HomePage/CampaignSwiper.vue';
import VerticalCarousel from '@/components/CreatorPage/VerticalCarousel.vue';
import BentoGrid from '@/components/CreatorPage/BentoGrid.vue';
import TiltScreen from '@/components/CreatorPage/TiltScreen.vue';
import CreatorStories from '@/components/CreatorPage/CreatorStories.vue';
import FrameSelection from '@/components/CreatorPage/FrameSelection.vue';
import PackageSelection from '@/components/CreatorPage/PackageSelection.vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const content = ref(null);

const { width, height } = useWindowSize();
const { y } = useWindowScroll();

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();

    if (top < 97) {
        setNavbarColor('white');
        setShadow(true);
        setLogoVariant('main');
        setCtaVariant('accent');
    } else {
        setNavbarColor('transparent');
        setShadow(false);
        setLogoVariant('white');
        setCtaVariant('accent');
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);
    setNavbarColor('transparent');
    setShadow(false);
    setLogoVariant('white');
    setCtaVariant('accent');
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <LayoutMain>
        <div class="creators-page">
            <BannerCreators :width="width" :height="height" :scroll-position="y" />
            <div ref="content"></div>
            <CampaignSwiper class="swiper" />
            <div class="bg-white">
                <VerticalCarousel :width="width" :height="height" />
                <BentoGrid />
                <TiltScreen />
                <CreatorStories :width="width" :height="height" />
                <FrameSelection />
                <PackageSelection />
            </div>
        </div>
    </LayoutMain>
</template>

<style lang="scss">
.creators-page {
    .tp-rated-bg {
        height: 650px;
        padding-top: 139px;
        box-sizing: border-box;
    }

    .banner-creators {
        .bg {
            border-radius: 0 !important;
        }

        .logo-set {
            opacity: 0;
            height: 0px;
        }
    }

    .banner-creators__spark {
        top: 24px;
    }

    .banner-creators__highlight-line {
        top: 5px;
    }

    .banner-creators__btn-container,
    .author-rated-big-img {
        display: none !important;
    }

    .swiper {
        margin-top: -80px !important;
    }

    .campaign-swiper__campaign {
        height: 160px;
        width: 160px;
        margin: 0 4px;
        border-radius: 8px;
    }

    .banner-creators {
        .bg {
            @apply pt-32;
        }
    }
}
</style>
