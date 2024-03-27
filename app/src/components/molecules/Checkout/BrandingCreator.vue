<script setup>
import PricingBackgroundSlideContainer from '@/components/molecules/Pricing/BackgroundSlideContainer.vue';


const creatorFeatures = [
    {
        text: 'Remove watermark for all of your campaign users',
    },
    {
        text: 'Use Twibbonize without Ads',
    },
    {
        text: 'Exclusive Features for your Campaign'
    }
];
</script>

<template>
    <div class="branding-creator">
        <div class="detail">
            <div class="flex flex-col items-center w-full">
                <img class="premium-title" src="/assets/img/marketings/premium-white.svg" alt="premium">
                <img class="creator-title" src="/assets/img/marketings/premium-creator.svg" alt="creator">
            </div>
            <div
                v-for="({ text }, i) in creatorFeatures"
                :key="`${title}-feature-${i}`"
                class="flex items-center mt-4 text-white"
            >
                <div>
                    <div class="icon-container">
                        <i class="ri-check-line"></i>
                    </div>
                </div>
                <p class="text-sm sm:text-base">{{ text }}</p>
            </div>
        </div>
        <div class="absolute top-0 left-0 -mt-32 z-0">
            <PricingBackgroundSlideContainer size="lg"/>
        </div>
    </div>
</template>

<style lang="scss">
    .branding-creator {
        @apply px-5 py-8 sm:px-10 rounded-[32px] flex flex-col sm:flex-row justify-between relative overflow-hidden gap-14 lg:gap-0;
        border-top: 2px solid rgba(255, 255, 255, 0.40);
        border-bottom: 2px solid rgba(255, 255, 255, 0.40);
        background: linear-gradient(262deg, #32A092 3.54%, #03352F 100%);

        .detail {
            @apply z-10 ;

            .premium-title {
                @apply h-5 lg:h-6;
            }
            .creator-title {
                @apply h-16 lg:h-20;
            }
            .icon-container {
                @apply w-6 h-6 lg:w-8 lg:h-8 rounded-2xl flex justify-center items-center mr-2;
                background: rgba(255,255,255, 0.10);

                i {
                    @apply text-base lg:text-xl;
                }
            }
        }

        .price {
            @apply z-10;

            @apply flex flex-col items-center justify-center;

            .switch {
                @apply text-black rounded-3xl;
                background: rgba(222, 232, 232, 0.50);
                box-shadow: 0px 0px 17.345px 0px rgba(157, 170, 170, 0.08) inset;
            }
        }
    }
</style>