<script setup>
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
</script>

<template>
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
    </div>
</template>

<style lang="scss">
</style>