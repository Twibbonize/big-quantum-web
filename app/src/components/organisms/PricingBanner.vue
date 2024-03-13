<script setup>
import PricingBlobBackground from '@/components/molecules/Pricing/BlobBackground.vue';
import PricingCardPremium from '@/components/molecules/Pricing/CardPremium.vue';
import PricingBentoRemoveWatermarkSupporters from '@/components/molecules/Pricing/Bento/RemoveWatermarkSupporters.vue';
import PricingBentoNoAds from '@/components/molecules/Pricing/Bento/NoAds.vue';
import PricingBentoNoExtraFeatures from '@/components/molecules/Pricing/Bento/NoExtraFeatures.vue';
import PricingBentoRemoveWatermarkCreators from '@/components/molecules/Pricing/Bento/RemoveWatermarkCreators.vue';
import PricingBentoExtraFeatures from '@/components/molecules/Pricing/Bento/ExtraFeatures.vue';
import PricingExtraFeaturesLine from '@/components/molecules/Pricing/ExtraFeaturesLine.vue';
import PricingAction from '@/components/molecules/Pricing/Action.vue';

import ScrollMagic from 'scrollmagic';
import { onMounted } from 'vue';

import 'animate.css';


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

const creatorPrice = {
    number: 11,
    decimal: 99,
    currency: '$'
};

onMounted(() => {
    const controller = new ScrollMagic.Controller({ globalSceneOptions: {duration: 1000} });

    new ScrollMagic.Scene({triggerElement: "#initial-page"})
        .setClassToggle("#pricing-title", "animate__fadeInUp")// add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#pricing-compare"})
        .setClassToggle("#pricing-title", "animate__fadeOutUp")// add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#pricing-compare-supporters",
            duration: '100%',											 // start a little later
            triggerHook: 0.28,
        })
        .setClassToggle("#pricing-action", "show")// add class toggle
        .addTo(controller);

    // new ScrollMagic.Scene({
    //         triggerElement: "#pricing-action-supporters",
    //         offset: 300,
    //         triggerHook: 1,
    //     })
    //     .setClassToggle("#pricing-action", "hide")// add class toggle
    //     .addTo(controller);
})
</script>

<template>
    <div id="initial-page" class="banner-pricing">
        <PricingBlobBackground/>
        <div class="background relative sm:pb-24">
            <div id="pricing-title" class="animate__animated opacity-0 text flex flex-col justify-center items-center h-full">
                <h1 class="title">Pricing</h1>
                <h2 class="subtitle">Find the right Premium plan for your need</h2>
            </div>
            <div id="pricing-compare" class="pricing-compare">
                <PricingCardPremium
                    id="pricing-compare-supporters"
                    premium-image="/assets/img/marketings/premium-black.svg"
                    premium-type-image="/assets/img/marketings/premium-supporter.svg"
                    premium-description="For people who want more out of Twibbonize"
                    :options="supporterOptions"
                    :price="supporterPrice"
                    variant="black"
                    class="card-supporters"
                    link="/pricing/supporters"
                >
<<<<<<< HEAD
                    <PricingBentoRemoveWatermarkSupporters class="bento -mt-9"/>
                    <PricingBentoNoAds class="bento mt-5"/>
                    <PricingExtraFeaturesLine/>
                    <PricingBentoNoExtraFeatures class="bento mb-[182px]"/>
                    <PricingAction
                        class="absolute"
                        variant="black"
                        link="/pricing/supporters"
                    />
=======
                    <PricingBentoRemoveWatermarkSupporters class="bento -mt-9" />
                    <PricingBentoNoAds class="bento mt-5" />
                    <PricingExtraFeaturesLine />
                    <PricingBentoNoExtraFeatures class="bento" />
>>>>>>> dev
                </PricingCardPremium>
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
<<<<<<< HEAD
                    <PricingBentoRemoveWatermarkCreators class="bento -mt-9"/>
                    <PricingBentoNoAds class="bento mt-5"/>
                    <PricingExtraFeaturesLine/>
                    <PricingBentoExtraFeatures class="mb-[182px]"/>
                    <PricingAction
                        class="absolute"
                        variant="primary"
                        link="/pricing/creators"
                    />
=======
                    <PricingBentoRemoveWatermarkCreators class="bento -mt-9" />
                    <PricingBentoNoAds class="bento mt-5" />
                    <PricingExtraFeaturesLine />
                    <PricingBentoExtraFeatures />
>>>>>>> dev
                </PricingCardPremium>
            </div>
            <div id="pricing-action-supporters"></div>
            <div id="pricing-action-creators"></div>
            <div id="pricing-action" class="pricing-action-container">
                <PricingAction variant="black" link="/pricing/supporters"/>
                <PricingAction variant="primary" link="/pricing/creators"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.banner-pricing {
    @apply pt-[200px] sm:pt-[260px] mx-auto overflow-hidden relative;
    background: #202124;

    .background {
        @apply max-w-[1120px] mx-auto;

        &::before {
            @apply h-[300px] md:h-[586px] w-full fixed block top-0 left-0 z-[-1] scale-100 bg-cover bg-no-repeat;
            content: '';
            -moz-pointer-events: none;
            -webkit-pointer-events: none;
            -ms-pointer-events: none;
            pointer-events: none;
            background-attachment: scroll;
            background-position: 50%;
            background: #202124;
        }
    }

    .title {
        @apply font-medium text-center text-base sm:text-xl md:text-2xl text-white uppercase px-5 sm:px-8;
        letter-spacing: 5px;
    }

    .subtitle {
        @apply font-bold text-center text-5xl xl:text-[102px] leading-none text-white mt-4 sm:mt-6 px-5 sm:px-0;
    }

    .description {
        @apply text-base sm:text-xl md:text-2xl text-center text-white max-w-[820px] mt-4 sm:mt-6 xl:mt-8 px-5 sm:px-8;
    }
}

.pricing-compare {
    @apply flex flex-col-reverse sm:flex-row w-full sm:gap-14 mt-48;
}

.pricing-action-container {
    @apply max-w-[1120px] mx-auto sm:gap-14 bottom-0 h-min w-full z-20 fixed;
    display: none;

    &.show {
        display: flex !important;

        &.hide {
            display: none !important;
        }
    }
}
</style>
