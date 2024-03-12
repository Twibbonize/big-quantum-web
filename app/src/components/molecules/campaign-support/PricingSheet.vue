<script setup>
import { computed, ref } from 'vue';
import { RadioGroup, RadioGroupOption, RadioGroupLabel } from '@headlessui/vue';
import QButton from '@/components/atoms/QButton.vue';

const planDurations = [
    {
        name: 'weekly',
        price: 2.99,
        per: 'week'
    },
    {
        name: 'monthly',
        price: 4.99,
        per: 'month'
    },
    {
        name: 'yearly',
        price: 6.99,
        per: 'year'
    }
];

const selectedPlanDuration = ref(planDurations[0]);
const pricePartsOfPlan = computed(() => selectedPlanDuration.value.price.toString().split('.'));

defineProps({
    close: {
        type: Function
    }
});
</script>

<template>
    <div class="premium">
        <div class="space-y-4">
            <img
                src="/assets/img/brandings/premium-supporter.svg"
                class="text-center mx-auto"
                alt="Premium Supporter Logo"
            />
            <p class="font-medium text-center">
                For people who want more <br />
                out of Twibbonize
            </p>
        </div>

        <div class="mt-6">
            <RadioGroup v-model="selectedPlanDuration">
                <div class="premium__plan-duration">
                    <RadioGroupOption
                        as="template"
                        v-for="duration in planDurations"
                        :value="duration"
                        v-slot="{ checked }"
                    >
                        <RadioGroupLabel
                            :class="[
                                'premium__plan-duration__item',
                                checked && 'premium__plan-duration__item--checked'
                            ]"
                        >
                            {{ duration.name }}</RadioGroupLabel
                        >
                    </RadioGroupOption>
                </div>
            </RadioGroup>
        </div>

        <div class="flex flex-col items-center mt-6">
            <div class="premium__price">
                <span class="premium__price-currency">$</span>
                <span class="premium__price-lead">{{ pricePartsOfPlan[0] }}</span>
                <span class="premium__price-cent">.{{ pricePartsOfPlan[1] }}</span>
            </div>
            <div class="premium__per-duration">per {{ selectedPlanDuration.per }}</div>
        </div>

        <div class="space-y-2 mt-8">
            <QButton block variant="black">
                <span class="mr-2 font-bold">Purchase Now</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                        d="M1.98438 8H14.0243"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M8 2L14.02 8L8 14"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </QButton>

            <QButton block variant="subtle" @click="close">
                <span class="font-bold">No, Thank you</span>
            </QButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.premium {
    background-image: url('/assets/img/background/bg-premium-supporter.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 466px;
    display: flex;
    flex-direction: column;
    @apply pt-10 px-10 pb-3;

    .premium__plan-duration {
        @apply flex items-center bg-gray-100 p-1 rounded-full mx-auto;
        max-width: 258px;

        .premium__plan-duration__item {
            @apply block text-center flex-grow capitalize text-sm font-semibold text-black/70 py-2 px-4 rounded-full transition-colors duration-200;

            &.premium__plan-duration__item--checked {
                @apply bg-white text-black;
            }
        }
    }

    .premium__price {
        display: flex;
        justify-content: center;
        @apply font-bold;

        .premium__price-currency {
            font-size: 31px;
        }

        .premium__price-lead {
            font-size: 105px;
            line-height: 100%;
        }

        .premium__price-cent {
            font-size: 31px;
            align-self: flex-end;
        }
    }
}
</style>
