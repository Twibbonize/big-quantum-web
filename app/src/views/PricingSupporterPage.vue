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
            <div ref="content"></div>
            <div class="video-illustration">
                <h2 class="title">Do you like supporting  <br> different campaigns?</h2>
                <p class="subtitle">Then Premium Supporter is the right plan for you.</p>
                <div class="video-container">
                    <video
                        class="video-content"
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
                        class="no-more-ads-video"
                        autoplay
                        loop
                        muted
                        src="/assets/videos/pricing-no-ads.mp4"
                    ></video>
                </div>
            </div>
            <PricingSupporterPrice/>
        </div>
    </LayoutMain>
</template>

<style lang="scss">
    .pricing-supporter-header {
        .video-illustration {
            @apply flex flex-col w-full items-center mt-20;

            .video-container {
                @apply relative mt-14 h-[220px] lg:h-[600px] w-full overflow-hidden;

                .video-content {
                    @apply h-full max-w-none absolute top-1/2 left-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
                }
            }

            .title {
                @apply font-bold text-2xl sm:text-[40px] lg:text-[64px] text-center leading-tight;
            }
            .subtitle {
                @apply font-medium text-base text-center sm:text-2xl text-[#667085] mt-6 px-5 lg:px-0;
            }
            .video {
                @apply w-full;
            }
        }

        .no-more-ads {
            @apply flex flex-col max-w-[1100px] w-full mx-auto my-24 mb-14 lg:my-24 px-5 sm:px-14 lg:px-0;

            .title {
                @apply text-3xl sm:text-[40px] lg:text-5xl font-bold text-center;
            }

            .description {
                @apply text-base lg:text-2xl leading-tight text-gray-500 text-center mt-5;
            }

            .bento {
                @apply relative pt-10 mt-14 w-full lg:mt-16 h-[240px] sm:h-[500px] flex justify-center bg-white rounded-2xl overflow-hidden;
                box-shadow: 0px 12px 80px 0px rgba(27, 82, 78, 0.11);
            }
        }

        .no-more-ads-video {
            @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-w-none pt-[5%];
        }
    }
</style>
