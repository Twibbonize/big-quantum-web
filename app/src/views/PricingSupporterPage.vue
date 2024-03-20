<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';

import PricingSupporterHeader from '@/components/molecules/Pricing/Supporter/Header.vue';
import PricingSupporterWatermark from '@/components/molecules/Pricing/Supporter/Watermark.vue';
import PricingSupporterPrice from '@/components/molecules/Pricing/Supporter/Price.vue';

import { onMounted, onUnmounted, ref } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const content = ref(null);

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();

    if (top < 97) {
        setNavbarColor('white');
        setShadow(true);
        setLogoVariant('main');
        setCtaVariant('accent');
    } else {
        setNavbarColor('transparent-white');
        setShadow(false);
        setLogoVariant('black');
        setCtaVariant('accent');
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);

    setNavbarColor('transparent-white');
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
        <div class="pricing-supporter-header">
            <PricingSupporterHeader/>
            <div class="video-illustration">
                <h2 class="title">Do you like supporting  <br> different campaigns?</h2>
                <p class="subtitle">Then Premium Supporter is the right plan for you.</p>
                <div class="video-container">
                    <video
                        class="w-full"
                        autoplay
                        loop
                        muted
                        src="/assets/videos/supporter-twibbon.mp4"
                    ></video>
                </div>
            </div>
            <PricingSupporterWatermark/>
            <div class="no-more-ads">
                <h2 class="title">No More Annoying Ads</h2>
                <p class="description">Enjoy uninterrupted experience with no ads on Twibbonize. Get ready to embrace a cleaner, more user-friendly version of Twibbonize.</p>
                <div class="bento">
                    <video
                        autoplay
                        loop
                        muted
                        src="/assets/videos/pricing-no-ads.mp4"
                    ></video>
                </div>
            </div>
            <PricingSupporterPrice/>
        </div>
        <div ref="content"></div>
    </LayoutMain>
</template>

<style lang="scss">
    .pricing-supporter-header {
        .video-illustration {
            @apply flex flex-col w-full items-center;

            .video-container {
                @apply mt-14;
            }

            .title {
                @apply font-bold text-[64px] text-center leading-tight;
            }
            .subtitle {
                @apply font-medium text-2xl text-[#667085] mt-6;
            }
            .video {
                @apply w-full;
            }
        }

        .no-more-ads{
            @apply flex flex-col max-w-[1100px] w-full mx-auto my-24;

            .title {
                @apply text-5xl font-bold text-center;
            }

            .description {
                @apply text-2xl leading-tight text-gray-500 text-center mt-5;
            }

            .bento {
                @apply pt-10 mt-16 h-[500px] flex justify-center bg-white rounded-[32px];
                box-shadow: 0px 12px 80px 0px rgba(27, 82, 78, 0.11);
            }
        }
    }
</style>
