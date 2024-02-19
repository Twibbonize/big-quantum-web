<script setup>
import QOpenLink from '@/components/atoms/QOpenLink.vue';
import CampaignSlider from '@/components/molecules/CampaignSlider.vue';

const bentoLists = [
    {
        title: 'How Twibbonize Innovates Government Communication in the Digital Age',
        theme: 'government',
        link: '/',
        bg: '/assets/img/background/bg-government.svg',
        color: '#2D9292',
        classes: 'sm:col-span-1',
        campaigns: [

        ],
    },
    {
        title: 'How Twibbonize Becomes a Visual Marvel for Various Events',
        theme: 'events',
        link: '/',
        bg: '/assets/img/background/bg-events.svg',
        color: '#4D41B9',
        classes: 'sm:col-span-2',
        titleClasses: 'sm:text-4xl',
        campaigns: [

        ],
    },
    {
        title: 'Twibbonize Elevate Personal Celebrations with Customized Digital Flair',
        theme: 'personal',
        link: '/',
        bg: '/assets/img/background/bg-personal.svg',
        color: '#448DBC',
        classes: 'sm:col-span-1',
        campaigns: [

        ],
    },
    {
        title: 'Twibbonize Personalizes Digital Commemorations into United Experiences',
        theme: 'commemorations',
        link: '/',
        bg: '/assets/img/background/bg-commemorations.svg',
        color: '#2E2E77',
        classes: 'sm:col-span-1',
        campaigns: [

        ],
    },
    {
        title: 'How Twibbonize Innovates Government Communication in the Digital Age',
        theme: 'politics',
        link: '/',
        bg: '/assets/img/background/bg-politics.svg',
        color: '#37667E',
        classes: 'sm:col-span-1',
        campaigns: [

        ],
    },
    {
        title: 'Utilizing Twibbonize in Corporate & Business Environments',
        theme: 'corporate & business',
        link: '/',
        bg: '/assets/img/background/bg-business.svg',
        color: '#0B5D99',
        classes: 'sm:col-span-2',
        titleClasses: 'sm:text-4xl',
        campaigns: [

        ],
    },
    {
        title: 'Craft Personalized Digital Flair for Diverse Entertainment Experiences with Twibbonize',
        theme: 'entertainment',
        link: '/',
        bg: '/assets/img/background/bg-entertainmend.svg',
        color: '#7A2997',
        classes: 'sm:col-span-1',
        campaigns: [

        ],
    },
    {
        title: 'Empowering Social Causes Through Twibbonize\'s Visual Impact',
        theme: 'social causes',
        link: '/',
        bg: '/assets/img/background/bg-social.svg',
        color: '#536A75',
        classes: 'sm:col-span-1',
        campaigns: [

        ],
    },
    {
        title: 'How Twibbonize Enhances Celebrations in the Education Field',
        theme: 'education',
        link: '/',
        bg: '/assets/img/background/bg-education.svg',
        color: '#2266ED',
        classes: 'sm:col-span-2',
        titleClasses: 'sm:text-4xl',
        campaigns: [

        ],
    },
]

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
</script>

<template>
    <div class="use-case-bento">
        <div class="bento-container">
            <div
                v-for="bento, i in bentoLists"
                :key="`bento-${i}`"
                class="bento card" :style="`--bg-color: ${bento.color}; --bg-image: ${bento.bg};`"
                :class="bento.classes"
            >
                <div class="px-5">
                    <h6 class="text-white text-xs uppercase tracking-widest">{{ bento.theme }}</h6>
                    <h5 class="font-semibold text-white text-xl mt-2.5" :class="bento.titleClasses ? bento.titleClasses : 'sm:text-2xl'">
                        {{ bento.title }}
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
                <img class="bg-pattern" :src="bento.bg" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .use-case-bento {
        @apply bg-white;

        .bento-container {
            @apply w-full max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-5 sm:px-0;
        }

        .bento {
            @apply relative rounded-3xl pt-5 pb-8 flex flex-col justify-between;
            background-color: var(--bg-color);

            .bg-pattern {
                @apply absolute top-0 right-0 max-w-[250px] z-0;
            }
        }
    }
</style>