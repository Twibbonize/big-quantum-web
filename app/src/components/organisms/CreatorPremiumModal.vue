<script setup>
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PricingCardPremium from '@/components/molecules/Pricing/CardPremium.vue';
import PricingBentoNoAds from '@/components/molecules/Pricing/Bento/NoAds.vue';
import PricingBentoRemoveWatermarkCreators from '@/components/molecules/Pricing/Bento/RemoveWatermarkCreators.vue';
import PricingBentoExtraFeatures from '@/components/molecules/Pricing/Bento/ExtraFeatures.vue';
import PricingAction from '@/components/molecules/Pricing/Action.vue';
import PricingExtraFeaturesLine from '@/components/molecules/Pricing/ExtraFeaturesLine.vue';
import { onMounted } from 'vue';

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

onMounted(() => {
    new Swiper('#features', {
        modules: [Pagination],
        slidesPerView: 1
    });
});
</script>

<template>
    <PricingCardPremium
        premium-image="/assets/img/marketings/premium-white.svg"
        premium-type-image="/assets/img/marketings/premium-creator.svg"
        premium-description="For people who need the ultimate Twibbonize experience"
        :options="creatorOptions"
        :price="creatorPrice"
        variant="primary"
        class="card-creators"
        link="/pricing/creators"
        :is-creator="true"
    >
        <div id="features" class="swiper py-20">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <PricingBentoNoAds />
                </div>
                <div class="swiper-slide">
                    <PricingBentoRemoveWatermarkCreators />
                </div>
                <div class="swiper-slide">
                    <PricingBentoExtraFeatures />
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        </div>

        <PricingAction
            class="absolute w-full bottom-0 left-0"
            variant="primary"
            link="/pricing/creators"
        />
    </PricingCardPremium>
</template>

<style scoped lang="scss">
#features {
    margin-top: -24px;
}
.swiper-slide {
    @apply border border-light text-black rounded-3xl overflow-hidden;
}
</style>
