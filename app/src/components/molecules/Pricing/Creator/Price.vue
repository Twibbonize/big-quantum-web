<script setup>
import PricingPrice from '@/components/molecules/Pricing/Price.vue';
import QButton from '@/components/atoms/QButton.vue';
import QSwitchThree from '@/components/atoms/QSwitchThree.vue';
import PricingBackgroundSlideContainer from '@/components/molecules/Pricing/BackgroundSlideContainer.vue';


import { ref } from 'vue';

const optionIndex = ref(0);

const creatorOptions = [
    {
        key: 'creator-monthly',
        text: 'Monthly',
        duration: 'month'
    },
    {
        key: 'creator-yearly',
        text: 'Yearly',
        duration: 'year'
    }
];

const creatorPrice = {
    number: 11,
    decimal: 99,
    currency: '$'
};


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
    <div class="pricing-creator-price">
        <h2 class="title">The top-notch plan we’ve ever launched</h2>
        <p class="description">Considering all the conveniences, it’s worth it.</p>
        <div class="bento">
            <div class="detail">
                <div class="flex flex-col items-center w-fit">
                    <img class="premium-title" src="/assets/img/marketings/premium-white.svg" alt="premium">
                    <img class="creator-title" src="/assets/img/marketings/premium-creator.svg" alt="creator">
                </div>
                <div
                    v-for="({ text }, i) in creatorFeatures"
                    :key="`${title}-feature-${i}`"
                    class="flex items-center mt-5 sm:mt-9 text-white"
                >
                    <div>
                        <div class="icon-container">
                            <i class="ri-check-line"></i>
                        </div>
                    </div>
                    <p class="text-base">{{ text }}</p>
                </div>
            </div>
            <div class="price">
                <div class="switch mt-4">
                    <QSwitchThree
                        v-model="optionIndex"
                        size="sm"
                        :options="creatorOptions"
                        name="price-creator-marketing"
                        class="w-[220px] lg:w-[270px]"
                    />
                </div>
                <PricingPrice
                    :currency="creatorPrice.currency"
                    :number="creatorPrice.number"
                    :decimal="creatorPrice.decimal"
                    class="text-white mt-4"
                />
                <p class="text-white">{{ `per ${creatorOptions[optionIndex].duration}` }}</p>
                <QButton variant="white" class="gap-2 w-full mt-4">
                    Purchase Now
                    <i class="ri-arrow-right-line"></i>
                </QButton>
            </div>
        </div>
        <div class="absolute top-0 -mt-32 z-0">
            <PricingBackgroundSlideContainer size="lg"/>
        </div>
    </div>
</template>

<style lang="scss">
.pricing-creator-price {
    @apply flex flex-col max-w-[1100px] w-full mx-auto my-24 relative overflow-hidden px-5 sm:px-14 lg:px-0;

    .pattern {
        @apply h-full w-auto lg:h-auto lg:w-full absolute top-0 left-0 z-[2];
    }

    .overlay {
        @apply absolute h-[1200px] w-[1260px] top-0 rotate-45 -translate-x-2/3 -translate-y-1/2 opacity-50;
        filter: blur(29.675495147705078px) hue-rotate(40deg);
        z-index: 1;
    }

    .shape-blob {
        @apply absolute z-[1] lg:opacity-70 top-1/2 -left-1/4 sm:left-1/4 sm:top-[10%] h-[300px] w-[400px] sm:h-[450px] sm:w-[500px] lg:h-[900px] lg:w-[1000px];
        background: #46C3BD;
        filter: blur(77.16836547851562px);
        border-radius: 50% 40% 30% 40%;
        animation:
            transform 18s ease-in-out infinite both alternate,
            movementOne 12s ease-in-out infinite both;

        &.two {
            @apply z-0 opacity-100;
            background: #F1FFFE;
            top: 0;
        }
    }

    .title {
        @apply text-3xl sm:text-[40px] lg:text-5xl font-bold text-center;
    }

    .description {
        @apply text-base lg:text-2xl leading-tight text-gray-500 text-center mt-5;
    }

    .bento {
        @apply p-10 sm:px-10 sm:py-14 lg:p-20 rounded-[32px] flex flex-col sm:flex-row justify-between relative overflow-hidden mt-20 gap-14 lg:gap-0;
        border-top: 2px solid rgba(255, 255, 255, 0.40);
        border-bottom: 2px solid rgba(255, 255, 255, 0.40);
        background: linear-gradient(262deg, #32A092 3.54%, #03352F 100%);

        .detail {
            @apply z-10;

            .premium-title {
                @apply h-6 lg:h-9;
            }
            .creator-title {
                @apply w-full lg:w-auto lg:h-32;
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
}
</style>