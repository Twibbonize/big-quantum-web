<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

import PricingPrice from '@/components/molecules/Pricing/Price.vue';
import PricingBackgroundSlideContainer from '@/components/molecules/Pricing/BackgroundSlideContainer.vue';
import QSwitchThree from '@/components/atoms/QSwitchThree.vue';
import PricingBlobBackground from '@/components/molecules/Pricing/BlobBackgroundSupporter.vue';

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('md');

defineProps({
    premiumImage: String,
    premiumTypeImage: String,
    premiumDescription: String,
    options: Array,
    price: Object,
    variant: String,
    link: String,
    isCreator: Boolean
});
</script>

<template>
    <div class="card-premium">
        <div class="background card-header">
            <div v-if="isCreator" class="absolute top-0 -mt-12 z-0">
                <PricingBackgroundSlideContainer />
            </div>
            <div v-else class="absolute top-0 w-full h-[500px] z-0">
                <PricingBlobBackground />
            </div>
            <img class="premium z-10" :src="premiumImage" alt="premium" />
            <img class="premium-type z-10" :src="premiumTypeImage" alt="supporter" />
            <p class="premium-description z-10">{{ premiumDescription }}</p>
            <div class="text-black z-10">
                <QSwitchThree
                    :size="sm ? 'sm' : ''"
                    :options="options"
                    :name="`card-premium-${isCreator ? 'creator' : 'supporter'}`"
                    class="mt-4 w-[220px] lg:w-[270px]"
                />
            </div>
            <PricingPrice
                :currency="price.currency"
                :number="price.number"
                :decimal="price.decimal"
                class="mt-4 z-10"
            />
            <p>{{ `per ${options[0].duration}` }}</p>
        </div>
        <div class="content">
            <div class="bento-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card-premium {
    @apply bg-white w-full overflow-hidden relative;

    .card-header {
        @apply flex flex-col items-center px-5 pt-10 sm:p-12 pb-20 relative;
    }

    .premium {
        @apply h-5;
    }

    .premium-type {
        @apply h-20;
    }

    .premium-description {
        @apply text-center text-base mt-4 sm:h-20 lg:h-16;
    }

    .content {
        @apply bg-white mx-5 lg:mx-12 rounded-3xl;
    }

    .bento-container {
        @apply top-9 w-full bg-transparent;
    }

    .bento {
        @apply rounded-3xl bg-white text-black w-full overflow-hidden;
        border: 1px solid #dee8e8;
        box-shadow: 0px 12px 24px 0px rgba(27, 82, 78, 0.04);

        .text-container {
            @apply p-4 rounded-3xl;
        }

        .text {
            @apply text-center text-xl sm:text-2xl;
        }
    }

    .bento-height {
        @apply h-[240px] lg:h-[300px];
    }
}

.card-supporters {
    &.card-premium {
        .background {
            @apply flex flex-col items-center px-5 pt-10 sm:p-10 xl:p-12;
            background: url('/assets/img/marketings/bg-supporters.png'),
                url('/assets/img/marketings/bg-supporters-blob.png');
            background-size:
                auto 100%,
                940px 900px;
            background-position: center, 0px;
        }
    }
    .background-slide-container {
        @apply hidden;
    }
}

.card-creators {
    @apply text-white;
    &.card-premium {
        .background {
            @apply flex flex-col items-center px-5 pt-10 sm:p-10 xl:p-12;
            background: linear-gradient(237deg, rgba(3, 69, 61, 0.8) 2.65%, #03352f 102.96%);
            background-size:
                574px 500px,
                contain;
            background-position: center, center;
        }
    }
}
</style>
