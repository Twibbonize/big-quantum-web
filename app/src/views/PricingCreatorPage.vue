<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';

import PricingCreatorHeader from '@/components/molecules/Pricing/Creator/Header.vue';
import PricingCreatorWatermark from '@/components/molecules/Pricing/Creator/Watermark.vue';
import PricingCreatorPrice from '@/components/molecules/Pricing/Creator/Price.vue';
import PricingBentoExtraFeatures from '@/components/molecules/Pricing/Creator/ExtraFeatures.vue';

import { onMounted, onUnmounted, ref } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const content = ref(null);

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();

    console.log(top);

    if (top < 97) {
        setNavbarColor('white');
        setShadow(true);
        setLogoVariant('main');
        setCtaVariant('accent');
    } else {
        setNavbarColor('transparent-white');
        setShadow(false);
        setLogoVariant('white');
        setCtaVariant('accent');
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);

    setNavbarColor('transparent-white');
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
        <div class="pricing-creator-header">
            <PricingCreatorHeader/>
            <div id="main-content" ref="content"></div>
            <div class="video-illustration">
                <h2 class="title">Looking for a full campaigning experience in Twibbonize?</h2>
                <p class="subtitle">Then Premium Creator is the right plan for you.</p>
                <div class="video-container">
                    <video
                        class="video-content"
                        autoplay
                        loop
                        muted
                        src="/assets/videos/creator-twibbon.mp4"
                    ></video>
                </div>
            </div>
            <PricingCreatorWatermark/>
            <div class="no-more-ads">
                <h2 class="title">No More Annoying Ads</h2>
                <p class="description">Enjoy uninterrupted experience with no ads on Twibbonize. Get ready to embrace a cleaner, more user-friendly version of Twibbonize.</p>
                <div class="bento">
                    <video
                        class="no-more-ads-video"
                        autoplay
                        loop
                        muted
                        src="/assets/videos/pricing-no-ads-hd.mp4"
                    ></video>
                </div>
            </div>
            <div class="extra-features">
                <h2 class="title">Equipping you with the right tools</h2>
                <p class="description">Scale up your campaign with our exclusive features.</p>
                <PricingBentoExtraFeatures class="bento-container"/>
            </div>
            <PricingCreatorPrice/>
        </div>
    </LayoutMain>
</template>

<style lang="scss">
    .pricing-creator-header {
        .video-illustration {
            @apply flex flex-col w-full items-center mt-20;

            .video-container {
                @apply relative mt-14 h-[220px] lg:h-[600px] w-full overflow-hidden;

                .video-content {
                    @apply h-full max-w-none absolute top-1/2 left-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
                }
            }

            .title {
                @apply font-bold text-2xl sm:text-[40px] lg:text-[64px] text-center leading-tight mx-5 sm:mx-14 lg:mx-20;
            }
            .subtitle {
                @apply font-medium text-base text-center sm:text-2xl text-[#667085] mt-6 mx-5 sm:mx-14 lg:mx-20;
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

        .extra-features {
            @apply flex flex-col max-w-[1100px] w-full mx-auto my-24 mb-14 lg:my-24 px-5 sm:px-14 lg:px-0;

            .title {
                @apply text-3xl sm:text-[40px] lg:text-5xl font-bold text-center;
            }

            .description {
                @apply text-base lg:text-2xl leading-tight text-gray-500 text-center mt-5;
            }

            .bento-container {
                @apply relative mt-14 w-full lg:mt-16 overflow-hidden;
                height: auto !important;
            }
        }

        .no-more-ads-video {
            @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-w-none pt-[5%];
        }
    }
</style>
