<script setup>
import AppDownload from '@/components/atoms/AppDownload.vue';
import MainLogo from '@/components/atoms/MainLogo.vue';
import FooterMenu from '@/components/molecules/FooterMenu.vue';
import FooterTerms from '@/components/molecules/FooterTerms.vue';
import FooterSocial from '@/components/molecules/FooterSocial.vue';

const discoverLinks = [
    {
        text: 'Explore',
        url: '/explore',
        isInAppPage: true
    },
    {
        text: 'Leaderboard',
        url: '/leaderboard',
        isInAppPage: true
    },
    {
        text: 'Pricing',
        url: '/creators',
        isInAppPage: true
    },
    {
        text: 'Help Center',
        url: '/',
        isInAppPage: false
    }
];

const resourceLinks = [
    {
        text: 'For Creators',
        url: '/',
        isInAppPage: true
    },
    {
        text: 'What is a Twibbon',
        url: '/',
        isInAppPage: true
    },
    {
        text: 'Use Cases',
        url: '/',
        isInAppPage: true
    },
    {
        text: 'Editor',
        url: '/',
        isInAppPage: false
    }
];

const companyLinks = [
    {
        text: 'About',
        url: 'https://about.twibbonize.com',
        isInAppPage: false
    },
    {
        text: 'Blog',
        url: 'https://news.twibbonize.com',
        isInAppPage: false
    },
    {
        text: 'Contact Us',
        url: 'https://about.twibbonize.com',
        isInAppPage: false
    }
];
</script>

<template>
    <footer id="footer">
        <div class="container px-5 mx-auto">
            <div class="flex row">
                <div class="w-full">
                    <div class="footer-content grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div class="widget-logo col-span-2 sm:col-span-1 flex flex-grow w-100">
                            <div class="logo-footer" id="logo-footer">
                                <MainLogo color="black" />
                                <div class="flex gap-2 flex-wrap mt-6">
                                    <AppDownload type="ios" />
                                    <AppDownload type="android" />
                                </div>
                            </div>
                        </div>
                        <FooterMenu title="Discover" :links="discoverLinks" />
                        <FooterMenu title="Resources" :links="resourceLinks" />
                        <div class="widget-last col-span-2 sm:col-span-1">
                            <FooterMenu title="Company" :links="companyLinks" />
                            <h5 class="title-widget font-extrabold whitespace-nowrap mt-6 mb-5">
                                Join the community
                            </h5>
                            <FooterSocial />
                        </div>
                    </div>
                </div>
            </div>
            <FooterTerms />
        </div>
    </footer>
</template>

<style lang="scss">
#footer {
    @apply mt-16 mb-8;
    background: var(--color-white);

    .widget {
        @apply mr-10;
    }
}
</style>
