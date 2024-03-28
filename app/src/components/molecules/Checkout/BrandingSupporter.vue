<script setup>
import PricingPrice from '@/components/molecules/Pricing/Price.vue';
import QButton from '@/components/atoms/QButton.vue';
import QSwitchThree from '@/components/atoms/QSwitchThree.vue';

import { ref } from 'vue';

const optionIndex = ref(0);

const supporterOptions = [
    {
        key: 'supporter-weekly',
        text: 'Weekly',
        duration: 'week'
    },
    {
        key: 'supporter-monthly',
        text: 'Monthly',
        duration: 'month'
    },
    {
        key: 'supporter-yearly',
        text: 'Yearly',
        duration: 'year'
    }
];

const supporterPrice = {
    number: 2,
    decimal: 99,
    currency: '$'
};


const supporterFeatures = [
    {
        text: 'Remove watermark for your own account',
    },
    {
        text: 'Use Twibbonize without Ads',
    },
];
</script>

<template>
    <div class="branding-supporter">
        <div class="detail">
            <div class="flex flex-col items-center w-full">
                <img class="premium-title" src="/assets/img/marketings/premium-black.svg" alt="premium">
                <img class="supporter-title" src="/assets/img/marketings/premium-supporter.svg" alt="supporter">
            </div>
            <div
                v-for="({ text }, i) in supporterFeatures"
                :key="`${title}-feature-${i}`"
                class="flex items-center mt-4"
            >
                <div>
                    <div class="icon-container">
                        <i class="ri-check-line"></i>
                    </div>
                </div>
                <p class="text-base">{{ text }}</p>
            </div>
        </div>
        <img class="pattern" src="/assets/img/marketings/bg-pricing-supporter.png" alt="bg">
        <img class="overlay" src="/src/assets/img/patterns/background-banner-creators.png" alt="bg">
        <div class="shape-blob"></div>
        <div class="shape-blob two"></div>
    </div>
</template>

<style lang="scss">
    .branding-supporter {
		@apply bg-white px-5 py-8 sm:px-10 rounded-[32px] flex flex-col sm:flex-row justify-between relative overflow-hidden gap-14 lg:gap-0;

		.pattern {
			@apply h-full w-auto lg:h-auto lg:w-full absolute top-0 left-0 z-[2];
		}

		.overlay {
			@apply absolute h-[400px] w-[500px] top-0 rotate-45 -translate-x-2/3 -translate-y-1/2 opacity-50;
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

        .detail {
            @apply z-10 w-full;

            .premium-title {
                @apply h-5 lg:h-6;
            }
            .supporter-title {
                @apply h-16 lg:h-20;
            }
            .icon-container {
                @apply w-6 h-6 lg:w-8 lg:h-8 rounded-2xl flex justify-center items-center mr-2.5;
                background: rgba(27, 27, 27, 0.10);

                i {
                    @apply text-base lg:text-xl;
                }
            }
        }
    }
</style>