<script setup>
import QOpenLink from '@/components/atoms/QOpenLink.vue';
import QButton from '@/components/atoms/QButton.vue';

const props = defineProps({
    width: Number,
    height: Number
});
</script>

<template>
    <div class="creator-stories py-14 sm:py-24 flex flex-col items-center">
        <h4 class="text-center text-3xl sm:text-6xl font-bold">Stories from our Creators</h4>
        <p class="text-center text-base sm:text-2xl mt-4 sm:mt-8">
            Unique campaigns brought to life with Twibbonize
        </p>
        <div
            class="bento-container container w-full grid grid-cols-1 sm:grid-cols-6 gap-6 sm:px-5 mt-6 sm:mt-20"
        >
            <div class="bento-1 sm:col-span-2 card">
                <div class="pb-40 sm:pb-5 p-5">
                    <h5 class="font-bold text-xl">
                        Hanoi Art Book Fair Maximized Their Reach With Twibbonize
                    </h5>
                    <p class="text-xs">
                        Discover key challenges today’s marketing teams are facing, as well as
                        opportunities for businesses in 2024
                    </p>
                    <QOpenLink class="mt-6" classes="text-xs" text="Read Report" url="/" />
                </div>
                <div class="phone-bg"></div>
                <div class="green-bg"></div>
                <div class="blue-bg"></div>
            </div>
            <div class="bento-2 sm:col-span-2 card">
                <div class="pb-20 sm:pb-5 p-5">
                    <h5>“Twibbonize really helps us grow our audience with very little effort.”</h5>
                    <p class="font-bold text-xs mt-6">Clarissa May</p>
                    <p class="text-xs">Creative Director</p>
                    <QOpenLink class="mt-6" classes="text-xs" text="Read Her Story" url="/" />
                </div>
                <div class="girl-bg"></div>
                <div class="yellow-bg"></div>
            </div>
            <div class="bento-3 sm:col-span-2 card">
                <img class="w-full" src="/assets/img/stories/stories-bento-3.png" alt="" />
                <div class="p-5">
                    <h5 class="font-bold text-xl">
                        How Twibbonize Enhances Celebrations in Education
                    </h5>
                    <p class="text-xs mt-2">
                        Discover key challenges today’s marketing teams are facing, as well as
                        opportunities for businesses in 2024
                    </p>
                    <QOpenLink class="mt-6" classes="text-xs" text="Read Our Article" url="/" />
                </div>
            </div>
            <div class="bento-4 card sm:col-span-6 p-5 sm:p-10">
                <h5 class="text-xl sm:text-4xl font-semibold w-1/2">
                    Turn your creative ideas into actionable & marketable social campaigns
                </h5>
                <QButton variant="primary" class="mt-6">
                    Create Yours Now <i class="ri-arrow-right-line ml-1.5"></i>
                </QButton>
            </div>
            <!-- <div class="grid grid-cols-1 col-span-3 gap-6">
                <div class="bento-5 card p-5">
                    <h5 class="font-bold text-xl w-1/3">Ultimate Ways To More Engaging Campaign</h5>
                    <QButton variant="primary" class="mt-6">
                        Create Yours Now
                    </QButton>
                </div>
                <div class="bento-6 card p-5">
                    <h5 class="font-bold text-xl w-2/3">How Danone Does Their Internal Giveaways Competition Using Twibbonize</h5>
                    <QOpenLink class="mt-6" classes="text-xs" text="Read Report" url="/"/>
                </div>
            </div>
            <div class="bento-7 col-span-3 card p-5">
                <h5 class="text-xl font-bold">
                    Twibbonize in Corporate & Business Environments
                </h5>
                <p class="text-xs">
                    Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024
                </p>
                <QOpenLink class="mt-6" classes="text-xs" text="Read Report" url="/"/>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss">
.creator-stories {
    @apply px-8 sm:px-0;
    background: #dee8e8;

    .card {
        @apply bg-white rounded-3xl overflow-hidden relative;
        border: 0.659px solid rgba(27, 27, 27, 0.1);
    }

    .bento-1 {
        .phone-bg {
            @apply absolute;
            height: 50%;
            width: 100%;
            bottom: 0;
            background-image: url('/assets/img/stories/stories-bento-1.png');
            background-size: 50%;
            background-repeat: no-repeat;
            background-position: bottom center;
            z-index: 2;
        }

        .green-bg {
            @apply absolute;
            bottom: -20%;
            left: 0;
            width: 531px;
            height: 214px;
            transform: rotate(-230deg);
            border-radius: 531.499px;
            opacity: 0.4;
            background: #16dac1;
            filter: blur(65px);
        }

        .blue-bg {
            @apply absolute;
            bottom: -20%;
            right: 0;
            width: 531px;
            height: 214px;
            transform: rotate(62deg);
            flex-shrink: 0;
            border-radius: 531px;
            opacity: 0.4;
            background: #0095f5;
            filter: blur(65px);
        }
    }

    .bento-2 {
        h5 {
            @apply font-bold text-3xl;
            line-height: 110%; /* 35.2px */
            letter-spacing: -1.28px;
        }

        .girl-bg {
            @apply absolute;
            height: 50%;
            width: 100%;
            bottom: 0;
            background-image: url('/assets/img/stories/stories-bento-2.png');
            background-size: 50%;
            background-repeat: no-repeat;
            background-position: bottom right;
            z-index: 2;
        }

        .yellow-bg {
            @apply absolute;
            left: -20%;
            right: 0;
            width: 531px;
            height: 214px;
            transform: rotate(37deg);
            flex-shrink: 0;
            border-radius: 531px;
            opacity: 0.4;
            background: #f8ff35;
            filter: blur(65px);
        }
    }

    .bento-3 {
        @apply overflow-hidden;
    }

    .bento-4 {
        @apply bg-cover sm:bg-contain bg-left sm:bg-right bg-no-repeat;
        background-image: url('/assets/img/stories/stories-bento-4.png');
    }
}
</style>
