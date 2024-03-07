<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import CampaignSlider from '@/components/molecules/CampaignSlider.vue';

const listLogos = [
    '/assets/img/logos/allianz-white.svg',
    '/assets/img/logos/yamaha-white.svg',
    '/assets/img/logos/dhl-white.svg',
    '/assets/img/logos/bosch-white.svg',
    '/assets/img/logos/landell-mills-white.svg',
    '/assets/img/logos/acer-white.svg',
    '/assets/img/logos/danone-white.svg',
    '/assets/img/logos/chevron-white.svg',
    '/assets/img/logos/siemens-white.svg',
    '/assets/img/logos/bayer-white.svg',
    '/assets/img/logos/unicef-white.svg',
    '/assets/img/logos/johnson-and-johnson-white.svg',
    '/assets/img/logos/loreal-white.svg',
    '/assets/img/logos/huawei-white.svg',
    '/assets/img/logos/grab-white.svg'
];

const { width } = useWindowSize();
</script>

<template>
    <div class="banner-testimonial tp-rated-area mx-auto overflow-hidden relative">
        <div ref="bgHero" class="bg relative py-14" :class="{ bottom: scrollPosition > 300 }">
            <div class="flex flex-col justify-center items-center h-full">
                <h1 class="title">Testimonial</h1>
                <h2 class="subtitle">Trusted by names you trusted</h2>
                <p class="description">
                    Read stories from companies and organizations who successfully utilized our
                    platfrom for their campaign programs.
                </p>
                <div class="logos">
                    <div class="scrim"></div>
                    <CampaignSlider
                        :campaigns="listLogos"
                        :space-between="25"
                        campaign-classes="w-auto h-4 sm:h-14"
                        slide-classes="h-4 sm:h-14 flex items-center"
                    />
                </div>
            </div>
            <img
                class="blob-bg"
                src="/src/assets/img/patterns/background-banner-creators.png"
                alt=""
            />
        </div>
    </div>
</template>

<style lang="scss">
@keyframes glow {
    from {
        transform: translateX(-50%) scale(0.9) rotate(0deg);
    }
    to {
        transform: translateX(-60%) scale(1.1) rotate(10deg);
    }
}

.banner-testimonial {
    @apply h-[600px] sm:h-[720px] lg:h-[820px] xl:h-[834px];
    background: #202124;

    .bg {
        @apply h-[600px] sm:h-[720px] lg:h-[820px] xl:h-[834px];
        background: #202124;

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

    .blob-bg {
        @apply absolute pointer-events-none  w-[920px] h-[1280px] lg:w-[1840px] lg:h-[1280px] bottom-[-850px] lg:bottom-[-850px];
        left: 50%;
        transform: translateX(-50%) rotate(30deg);
        animation: 8s glow infinite ease-in-out alternate;
        mix-blend-mode: lighten;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        max-width: none;
    }

    .logos {
        @apply relative lg:max-w-[1300px] mt-10 px-5 sm:px-8;

        .scrim {
            @apply w-full h-full absolute top-0 left-0 z-10;
            background: linear-gradient(
                90deg,
                #202124 0%,
                #636363 5%,
                #ffffff 10%,
                #ffffff 90%,
                #636363 95%,
                #202124 100%
            );
            mix-blend-mode: darken;
        }
    }

    .title {
        @apply font-semibold text-center text-base sm:text-xl md:text-2xl text-white uppercase px-5 sm:px-8;
        letter-spacing: 5px;
    }

    .subtitle {
        @apply font-bold text-center text-4xl xl:text-[65px] text-white mt-4 sm:mt-6 xl:mt-8 px-5 sm:px-8;
    }

    .description {
        @apply text-base sm:text-xl md:text-2xl text-center text-white max-w-[820px] mt-4 sm:mt-6 xl:mt-8 px-5 sm:px-8;
    }

    .coverflow-slider {
        @apply max-w-[820px];
    }
}
</style>
