<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

import QOpenLink from '@/components/atoms/QOpenLink.vue';
import QButton from '@/components/atoms/QButton.vue';
import CampaignSlider from '@/components/molecules/CampaignSlider.vue';
import QSlider from '@/components/atoms/QSlider.vue';

const breakpoints = useBreakpoints(breakpointsTailwind);

const mediumBreakpoints = breakpoints.smallerOrEqual('md');

const props = defineProps({
    width: Number,
    height: Number
});

const corporateCampaigns = [
    '/assets/img/campaigns/corporate/twibbon-1.png',
    '/assets/img/campaigns/corporate/twibbon-2.png',
    '/assets/img/campaigns/corporate/twibbon-3.png',
    '/assets/img/campaigns/corporate/twibbon-4.png',
    '/assets/img/campaigns/corporate/twibbon-5.png',
    '/assets/img/campaigns/corporate/twibbon-1.png',
    '/assets/img/campaigns/corporate/twibbon-2.png',
    '/assets/img/campaigns/corporate/twibbon-3.png',
    '/assets/img/campaigns/corporate/twibbon-4.png',
    '/assets/img/campaigns/corporate/twibbon-5.png'
];

const educationCampaigns = [
    '/assets/img/campaigns/education/twibbon-1.png',
    '/assets/img/campaigns/education/twibbon-2.png',
    '/assets/img/campaigns/education/twibbon-3.png',
    '/assets/img/campaigns/education/twibbon-4.png',
    '/assets/img/campaigns/education/twibbon-5.png',
    '/assets/img/campaigns/education/twibbon-1.png',
    '/assets/img/campaigns/education/twibbon-2.png',
    '/assets/img/campaigns/education/twibbon-3.png',
    '/assets/img/campaigns/education/twibbon-4.png',
    '/assets/img/campaigns/education/twibbon-5.png'
];

const eventsCampaigns = [
    '/assets/img/campaigns/events/twibbon-1.png',
    '/assets/img/campaigns/events/twibbon-2.png',
    '/assets/img/campaigns/events/twibbon-3.png',
    '/assets/img/campaigns/events/twibbon-4.png',
    '/assets/img/campaigns/events/twibbon-5.png',
    '/assets/img/campaigns/events/twibbon-1.png',
    '/assets/img/campaigns/events/twibbon-2.png',
    '/assets/img/campaigns/events/twibbon-3.png',
    '/assets/img/campaigns/events/twibbon-4.png',
    '/assets/img/campaigns/events/twibbon-5.png'
];

const firstLogos = [
    '/assets/img/logos/allianz-white.svg',
    '/assets/img/logos/yamaha-white.svg',
    '/assets/img/logos/dhl-white.svg',
    '/assets/img/logos/bosch-white.svg',
    '/assets/img/logos/landell-mills-white.svg',
    '/assets/img/logos/allianz-white.svg',
    '/assets/img/logos/yamaha-white.svg',
    '/assets/img/logos/dhl-white.svg',
    '/assets/img/logos/bosch-white.svg',
    '/assets/img/logos/landell-mills-white.svg',
    '/assets/img/logos/allianz-white.svg',
    '/assets/img/logos/yamaha-white.svg',
    '/assets/img/logos/dhl-white.svg',
    '/assets/img/logos/bosch-white.svg',
    '/assets/img/logos/landell-mills-white.svg'
];

const secondLogos = [
    '/assets/img/logos/acer-white.svg',
    '/assets/img/logos/danone-white.svg',
    '/assets/img/logos/chevron-white.svg',
    '/assets/img/logos/siemens-white.svg',
    '/assets/img/logos/bayer-white.svg',
    '/assets/img/logos/unicef-white.svg',
    '/assets/img/logos/acer-white.svg',
    '/assets/img/logos/danone-white.svg',
    '/assets/img/logos/chevron-white.svg',
    '/assets/img/logos/siemens-white.svg',
    '/assets/img/logos/bayer-white.svg',
    '/assets/img/logos/unicef-white.svg',
    '/assets/img/logos/acer-white.svg',
    '/assets/img/logos/danone-white.svg',
    '/assets/img/logos/chevron-white.svg',
    '/assets/img/logos/siemens-white.svg',
    '/assets/img/logos/bayer-white.svg',
    '/assets/img/logos/unicef-white.svg'
];

const thirdLogos = [
    '/assets/img/logos/johnson-and-johnson-white.svg',
    '/assets/img/logos/loreal-white.svg',
    '/assets/img/logos/huawei-white.svg',
    '/assets/img/logos/grab-white.svg',
    '/assets/img/logos/johnson-and-johnson-white.svg',
    '/assets/img/logos/loreal-white.svg',
    '/assets/img/logos/huawei-white.svg',
    '/assets/img/logos/grab-white.svg',
    '/assets/img/logos/johnson-and-johnson-white.svg',
    '/assets/img/logos/loreal-white.svg',
    '/assets/img/logos/huawei-white.svg',
    '/assets/img/logos/grab-white.svg'
];

const testimonials = [
    {
        text: 'How Danone Does Their Internal Giveaway Competitions Using Twibbonize',
        image: '/assets/img/logos/danone-color.png'
    },
    {
        text: "Acer's Practical Way In Utilizing Twibbonize",
        image: '/assets/img/logos/acer-color.png'
    }
];
</script>

<template>
    <div class="creator-stories">
        <h4 class="text-center text-3xl lg:text-6xl font-bold max-container">
            Ideas to use Twibbonize for
        </h4>
        <p class="text-center text-base lg:text-2xl mt-4 sm:mt-8 max-container">
            Jumpstart your exploration with hand-picked examples from our 5,000,000+ Twibbonize
            campaigns
        </p>
        <div
            class="bento-container container max-container w-full grid grid-cols-1 sm:grid-cols-6 gap-6 mt-6 sm:mt-12 lg:mt-20"
        >
            <div class="bento-1 sm:col-span-2 card py-5">
                <div class="px-5">
                    <h6 class="text-white text-xs uppercase tracking-widest">Corporate</h6>
                    <h5 class="font-semibold text-white text-xl sm:text-base lg:text-2xl mt-2.5">
                        Utilize the power of the abundance of your personnels and customers
                    </h5>
                    <QOpenLink
                        class="mt-5"
                        classes="text-white text-xs"
                        text="Read Case Study"
                        url="/"
                    />
                </div>
                <CampaignSlider
                    class="mt-8"
                    :campaigns="corporateCampaigns"
                    campaign-classes="h-20 w-20 rounded slide"
                />
                <img class="bg-pattern" src="/assets/img/background/bg-corporate.svg" alt="" />
            </div>
            <div class="bento-2 sm:col-span-2 card py-5">
                <div class="px-5">
                    <h6 class="text-white text-xs uppercase tracking-widest">Education</h6>
                    <h5 class="font-semibold text-white text-xl sm:text-base lg:text-2xl mt-2.5">
                        It’s a fun way to add to the learning process
                    </h5>
                    <QOpenLink
                        class="mt-5"
                        classes="text-white text-xs"
                        text="Read Article"
                        url="/"
                    />
                </div>
                <CampaignSlider
                    class="mt-8"
                    :campaigns="educationCampaigns"
                    campaign-classes="h-20 w-20 rounded slide"
                />
                <img class="bg-pattern" src="/assets/img/background/bg-education.svg" alt="" />
            </div>
            <div class="bento-3 sm:col-span-2 card py-5">
                <div class="px-5">
                    <h6 class="text-white text-xs uppercase tracking-widest">Events</h6>
                    <h5 class="font-semibold text-white text-xl sm:text-base lg:text-2xl mt-2.5">
                        Hype up your event with the power of instant virality
                    </h5>
                    <QOpenLink
                        class="mt-5"
                        classes="text-white text-xs"
                        text="Read Article"
                        url="/"
                    />
                </div>
                <CampaignSlider
                    class="mt-8"
                    :campaigns="eventsCampaigns"
                    campaign-classes="h-20 w-20 rounded slide"
                />
                <img class="bg-pattern" src="/assets/img/background/bg-events.svg" alt="" />
            </div>
            <div class="bento-4 card sm:col-span-6 pt-5 px-5 sm:pt-7 sm:px-7 lg:pt-9 lg:px-9 gap-8 sm:gap-10">
                <div class="col-span-1 sm:col-span-7 lg:col-span-8 relative">
                    <h6 class="text-white text-[10px] sm:text-xs uppercase tracking-widest">Testimonials</h6>
                    <h5 class="text-white text-2xl lg:text-4xl font-semibold mt-2">
                        Trusted by names you trusted
                    </h5>
                    <div class="flex flex-col gap-4 sm:gap-8 lg:gap-12 mt-6 sm:mt-12 lg:mt-20">
                        <div class="logos">
                            <div class="scrim"></div>
                            <CampaignSlider
                                :campaigns="firstLogos"
                                :space-between="25"
                                campaign-classes="w-auto h-4 h-14"
                                slide-classes="h-4 h-14 flex items-center"
                            />
                        </div>
                        <div class="logos">
                            <div class="scrim"></div>
                            <CampaignSlider
                                :campaigns="secondLogos"
                                :space-between="25"
                                campaign-classes="w-auto h-4 h-14"
                                slide-classes="h-4 h-14 flex items-center"
                            />
                        </div>
                        <div class="logos">
                            <div class="scrim"></div>
                            <CampaignSlider
                                :campaigns="thirdLogos"
                                :space-between="25"
                                campaign-classes="w-auto h-4 h-14"
                                slide-classes="h-4 h-14 flex items-center"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-span-1 sm:col-span-5 lg:col-span-4 testimonial-container">
                    <QSlider
                        class="campaign-slider h-full"
                        style="--swiper-wrapper-transition-timing-function: linear"
                        direction="vertical"
                        :space-between="24"
                        :grab-cursor="false"
                        :speed="5000"
                        :centered-slides="false"
                        :loop="false"
                        slides-per-view="1.2"
                        :scrollbar="!mediumBreakpoints"
                        >
                        <swiper-slide
                            v-for="({ text, image }, i) in testimonials"
                            :key="i"
                            class="w-auto h-auto mr-0 sm:mr-4"
                            :class="slideClasses"
                        >
                            <div class="testimonial">
                                <div class="w-1/2">
                                    <img :src="image" class="max-h-full max-w-full" alt="danone" />
                                </div>
                                <div>
                                    <h5 class="font-bold text-sm lg:text-2xl">{{ text }}</h5>
                                    <QOpenLink
                                        class="mt-1 sm:mt-5"
                                        classes="sm:text-xs"
                                        text="Read More"
                                        url="/"
                                    />
                                </div>
                            </div>
                        </swiper-slide>
                    </QSlider>
                </div>
                <img
                    class="blob-bg"
                    src="/src/assets/img/patterns/background-banner-creators.png"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.creator-stories {
    @apply px-5 sm:px-10 xl:px-0 py-14 lg:py-24 flex flex-col items-center;
    background: #dee8e8;

    .card {
        @apply bg-white rounded-3xl overflow-hidden relative flex flex-col justify-between;
        border: 0.659px solid rgba(27, 27, 27, 0.1);

        .bg-pattern {
            @apply absolute top-0 right-0 w-2/3 z-0;
        }

        .slide {
            box-shadow: 0px 1.11px 5.549px 0px rgba(0, 0, 0, 0.1);
        }
    }

    .bento-1 {
        background: #0b5d99;
    }

    .bento-2 {
        background: #2266ed;
    }

    .bento-3 {
        background: #4d41b9;
    }

    .bento-4 {
        @apply bg-black grid grid-cols-1 sm:grid-cols-12;

        .logos {
            @apply relative;

            .scrim {
                @apply w-full h-full absolute top-0 left-0 z-10;
                background: linear-gradient(
                    90deg,
                    #636363 0%,
                    #ffffff 10%,
                    #ffffff 90%,
                    #636363 100%
                );
                // background: linear-gradient(90deg, #1B1B1BFF 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, #1B1B1B 100%);
                mix-blend-mode: darken;
            }
        }

        .blob-bg {
            @apply absolute pointer-events-none opacity-50;
            bottom: -150%;
            left: -20%;
            transform: translateX(-50%);
            animation: 4s glow infinite ease-in-out alternate;
            width: 1880px;
            height: 1280px;
            max-width: 1880px;
            mix-blend-mode: lighten;
        }
    }

    .testimonial {
        @apply bg-white rounded-lg px-3 py-5 sm:px-5 sm:py-7 aspect-[4/3] sm:aspect-square flex flex-col justify-between;
    }

    .testimonial-container {
        @apply aspect-[8/7] sm:aspect-[5/6];
    }

    @keyframes glow {
        from {
            transform: translateX(-50%) scale(0.9) rotate(0deg);
        }
        to {
            transform: translateX(-60%) scale(1.1) rotate(10deg);
        }
    }
}
</style>
