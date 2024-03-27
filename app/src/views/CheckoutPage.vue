<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import CheckoutOptions from '@/components/molecules/Checkout/Options.vue';

import { onMounted, ref, computed } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const options = computed(() => {
    return [{
        key: 'monthly',
        value: 11.99,
    },{
        key: 'annual',
        value: 4.16,
    }];
})

const checkoutPlan = ref(options.value[0]);
const isMonthly = ref(true);

onMounted(() => {
    setNavbarColor('white');
    setShadow(true);
    setLogoVariant('main');
    setCtaVariant('accent');
});
</script>

<template>
    <LayoutMain>
        <div class="checkout-page">
            <div class="container">
                <button class="button-back">
                    <i class="ri-arrow-left-line"></i>
                    Back to plans
                </button>
                <h2 class="title">Upgrade to Premium Creator</h2>
                <p class="description">Gather your supporters and scale up your campaign with our exclusive features.</p>
                <div class="checkout-container">
                    <div class="checkout-branding"></div>
                    <div class="checkout-detail">
                        <h3 class="checkout-detail__title">Billing Option</h3>
                        <CheckoutOptions v-model="checkoutPlan" :options="options"/>
                    </div>
                </div>
            </div>
        </div>
    </LayoutMain>
</template>

<style lang="scss">
    .checkout-page {
        @apply w-full;
        background: #EDF8F8;

        .container {
            @apply pt-[140px] pb-20 max-w-[1110px] mx-auto;
        }

        .button-back {
            @apply flex items-center gap-2 py-2.5 px-6 rounded-full border border-[#D0D5DD] border-solid font-semibold;

        }

        h2.title {
            @apply font-bold text-4xl mt-10;
            letter-spacing: -0.72px;
        }

        p.description {
            @apply mt-3;
        }

        .checkout-container {
            @apply flex gap-10 mt-10;
        }

        .checkout-branding {
            @apply flex-1 rounded-3xl;
        }

        .checkout-detail {
            @apply flex-1 rounded-3xl p-10 bg-white;

            &__title {
                @apply font-bold;
            }
        }
    }
</style>