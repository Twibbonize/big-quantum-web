<script setup>
import PricingPrice from '@/components/molecules/Pricing/Price.vue';
import PricingAction from '@/components/molecules/Pricing/Action.vue';
import QSwitchThree from '@/components/atoms/QSwitchThree.vue';
import QSwitchTwo from '@/components/atoms/QSwitchTwo.vue';
import { ref } from 'vue';

defineProps({
    premiumImage: String,
    premiumTypeImage: String,
    premiumDescription: String,
    options: Array,
    price: Object,
    variant: String,
    link: String
});

const activeIndex = ref(0);
</script>

<template>
    <div class="card-premium">
        <div class="background card-header">
            <img class="premium" :src="premiumImage" alt="premium" />
            <img class="premium-type" :src="premiumTypeImage" alt="supporter" />
            <p class="premium-description">{{ premiumDescription }}</p>
            <div class="text-black">
                <QSwitchThree
                    v-if="options.length === 3"
                    :options="options"
                    class="mt-4 !w-[270px]"
                />
                <QSwitchTwo
                    v-if="options.length === 2"
                    :options="options"
                    class="mt-4 !w-[237px]"
                />
            </div>
            <PricingPrice
                :currency="price.currency"
                :number="price.number"
                :decimal="price.decimal"
                class="mt-4"
            />
            <p>{{ `per ${options[0].duration}` }}</p>
        </div>
        <div class="content">
            <div class="bento-container">
                <slot></slot>
            </div>
        </div>
        <PricingAction :variant="variant" :link="link" />
    </div>
</template>

<style lang="scss">
.card-premium {
    @apply sm:rounded-3xl bg-white w-full overflow-hidden relative border-none sm:border-[3px];
    border-color: rgba(255, 255, 255, 0.2);
    border-style: solid;

    .card-header {
        @apply flex flex-col items-center px-5 pt-10 sm:p-12 pb-20;
    }

    .premium {
        @apply h-5;
    }

    .premium-type {
        @apply h-20;
    }

    .premium-description {
        @apply text-center text-base mt-2;
    }

    .content {
        @apply bg-white mx-5 sm:mx-12 rounded-3xl;
    }

    .bento-container {
        @apply top-9 w-full pb-[182px] bg-transparent;
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
}

.card-supporters {
    &.card-premium {
        .background {
            @apply flex flex-col items-center px-5 pt-10 sm:p-12 sm:pb-20;
            background: url('/assets/img/marketings/bg-supporters.jpg'),
                linear-gradient(
                    117deg,
                    rgba(22, 218, 193, 0.8) 14.55%,
                    rgba(22, 155, 154, 0.8) 100%
                );
            background-size:
                auto 100%,
                contain;
            background-position: center, center;
        }
    }
}

.card-creators {
    @apply text-white;
    &.card-premium {
        .background {
            @apply flex flex-col items-center px-5 pt-10 sm:p-12 sm:pb-20;
            background: url('/assets/img/marketings/bg-creators.png'),
                linear-gradient(237deg, rgba(3, 69, 61, 0.8) 2.65%, #03352f 102.96%);
            background-size:
                574px 500px,
                contain;
            background-position: center, center;
        }
    }
}
</style>
