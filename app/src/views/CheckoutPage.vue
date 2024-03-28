<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import CheckoutOptions from '@/components/molecules/Checkout/Options.vue';
import CheckoutBrandingCreator from '@/components/molecules/Checkout/BrandingCreator.vue';
import CheckoutBrandingSupporter from '@/components/molecules/Checkout/BrandingSupporter.vue';
import QButton from '@/components/atoms/QButton.vue';

import { onMounted, ref, computed } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const isCreator = computed(() => {
    return /(creator)/ig.test(route.query.plan);
});

const setIsOpen = () => {
    isOpen.value = !isOpen.value;
};

const requestCheckout = () => {
    
};

const getPlan = () => {
    if (isCreator.value) return 'Premium Creator';
    return 'Premium Supporter';
};

const options = computed(() => {
    if (isCreator.value) {
        return [{
            key: 'monthly',
            value: 11.99,
        },{
            key: 'annual',
            value: 4.16,
        }];
    }
    return [{
        key: 'weekly',
        value: 2.99
    },{
        key: 'monthly',
        value: 4.99,
    },{
        key: 'annual',
        value: 6.99,
    }];
})

const checkoutPlan = ref(options.value[0]);
const isOpen = ref(false);

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
            <div class="page-container">
                <button class="button-back" @click="router.go(-1)">
                    <i class="ri-arrow-left-line"></i>
                    Back to plans
                </button>
                <h2 class="title">{{ `Upgrade to ${getPlan()}` }}</h2>
                <p class="description">Gather your supporters and scale up your campaign with our exclusive features.</p>
                <div class="checkout-container">
                    <div class="checkout-branding">
                        <CheckoutBrandingCreator v-if="isCreator"/>
                        <CheckoutBrandingSupporter v-else/>
                    </div>
                    <div class="checkout-detail">
                        <h3 class="checkout-detail__title">Billing Option</h3>
                        <CheckoutOptions v-model="checkoutPlan" :options="options"/>
                        <div class="price-summary">
                            <div class="flex items-center justify-between" @click="setIsOpen">
                                <p class="heading">{{ `$${checkoutPlan.value} / month` }}</p>
                                <div class="open-summary">
                                    Details
                                    <i class="ri-arrow-down-s-line arrow" :class="{ 'rotate-180': isOpen }"></i>
                                </div>
                            </div>
                            <div class="details" :class="{ '!max-h-40': isOpen }">
                                <p>{{ `$${checkoutPlan.value} / month / user` }}</p>
                                <p>{{ `Billed ${checkoutPlan.key}` }}</p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <QButton variant="primary" size="md" class="w-full flex gap-2 items-center mt-6" @click="requestCheckout">
                            Upgrade
                            <i class="ri-arrow-right-line"></i>
                        </QButton>
                        <p class="terms">
                            {{ `We'll bill you every month on ${billDate}, unless you cancel. You can cancel anytime.` }}
                        </p>
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

        .page-container {
            @apply pt-[100px] sm:pt-[140px] pb-14 sm:pb-20 xl:max-w-[1110px] mx-auto container px-5 2xl:px-0;
        }

        .button-back {
            @apply flex items-center gap-2 py-2.5 px-6 rounded-full border border-[#D0D5DD] border-solid font-semibold;

        }

        h2.title {
            @apply font-bold text-2xl sm:text-3xl lg:text-4xl mt-10;
            letter-spacing: -0.72px;
        }

        p.description {
            @apply mt-3;
        }

        .checkout-container {
            @apply grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-10 mt-10;
        }

        .checkout-branding {
            @apply flex-1 rounded-3xl;
        }

        .checkout-detail {
            @apply flex-1 rounded-3xl px-5 py-8 xl:p-10 bg-white;

            &__title {
                @apply font-bold;
            }
        }

        .price-summary {
            @apply mt-6 flex flex-col;

            .heading {
                @apply text-xl sm:text-2xl font-bold whitespace-nowrap;
            }

            .open-summary {
                @apply flex items-center gap-1 font-bold text-sm sm:text-base;
            }

            .details {
                @apply flex flex-col gap-3 my-5 max-h-0 h-fit overflow-hidden text-sm sm:text-base;
                transition: all 0.3s ease-in;
                color: #667085;
            }

            .arrow {
                @apply text-xl sm:text-2xl font-normal;
                transition: all 0.3s linear;
            }
        }

        .line {
            @apply border-b border-[#DEE8E8] border-solid mt-6;
        }

        .terms {
            @apply text-sm sm:text-base text-center mt-6;
            color: #667085;
        }
    }
</style>