<script setup>
import QOpenLink from '@/components/atoms/QOpenLink.vue';

const bentoLists = [
    {
        title: 'How Danone Does Their Internal Giveaway Competitions Using Twibbonize',
        link: '/',
        logo: '/assets/img/marketings/danone-color.png',
        bg: '/assets/img/marketings/testimonials-danone-bg.jpg',
        gradient: '/assets/img/marketings/testimonials-danone-gradient.png',
        classes: 'sm:col-span-2',
        titleClasses: 'lg:text-2xl xl:text-[2rem] xl:leading-9',
        iconClasses: 'h-14',
        campaigns: '/assets/img/marketings/testimonials-danone.png'
    },
    {
        title: "Acer's Practical Way In Utilizing Twibbonize",
        link: '/',
        logo: '/assets/img/marketings/acer-color.png',
        bg: '/assets/img/marketings/testimonials-acer-bg.jpg',
        gradient: '/assets/img/marketings/testimonials-acer-gradient.png',
        classes: 'sm:col-span-1',
        titleClasses: 'lg:text-2xl xl:text-[2rem] xl:leading-9',
        iconClasses: 'h-7 sm:h-10',
        frames: [
            '/assets/img/marketings/testimonials-acer-twibbon-1.jpg',
            '/assets/img/marketings/testimonials-acer-twibbon-2.jpg'
        ]
    },
    {
        title: 'Embracing The Convenience Of Twibbonize, Just Like AIESEC',
        link: '/',
        logo: '/assets/img/marketings/aiesec-color.png',
        bg: '/assets/img/marketings/testimonials-aiesec-bg.jpg',
        gradient: '/assets/img/marketings/testimonials-aiesec-gradient.png',
        classes: 'sm:col-span-1',
        titleClasses: 'lg:text-2xl xl:text-[2rem] xl:leading-9',
        iconClasses: 'h-7 sm:h-10',
        frames: [
            '/assets/img/marketings/testimonials-aiesec-twibbon-1.jpg',
            '/assets/img/marketings/testimonials-aiesec-twibbon-2.jpg'
        ]
    }
];
</script>

<template>
    <div class="testimonial-bento">
        <div class="bento-container">
            <div
                v-for="(bento, i) in bentoLists"
                :key="`bento-${i}`"
                class="bento card"
                :style="`--bg-image: url(${bento.bg}); --gradient-image: url(${bento.gradient});`"
                :class="bento.classes"
            >
                <div class="flex flex-col justify-between px-5 h-full">
                    <div>
                        <img :src="bento.logo" :class="bento.iconClasses" alt="" />
                        <div v-if="bento.campaigns" class="mt-10 block sm:hidden">
                            <img :src="bento.campaigns" alt="" />
                        </div>
                        <div v-else class="flex gap-3 mt-10">
                            <img
                                class="frame"
                                v-for="frame in bento.frames"
                                :src="frame"
                                :alt="frame"
                            />
                        </div>
                    </div>
                    <div>
                        <h5
                            class="font-bold text-xl mt-2.5"
                            :class="bento.titleClasses ? bento.titleClasses : 'sm:text-2xl'"
                        >
                            {{ bento.title }}
                        </h5>
                        <QOpenLink
                            class="mt-4"
                            classes="text-xs"
                            text="Read Their Success Story"
                            url="/"
                        />
                    </div>
                </div>
                <div v-if="bento.campaigns" class="py-2.5 px-10 hidden sm:block">
                    <img :src="bento.campaigns" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.testimonial-bento {
    @apply bg-white;

    .bento-container {
        @apply w-full max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-5 sm:px-8 xl:px-0;
    }

    .bento {
        @apply relative py-5 rounded-lg flex items-center min-h-[380px] bg-no-repeat bg-right;
        background-size: auto 100%;
        background-image: var(--gradient-image), var(--bg-image);
        border: 0.517px solid rgba(27, 27, 27, 0.1);
    }

    .frame {
        @apply rounded-md h-20 sm:h-24 w-20 sm:w-24;
        box-shadow: 0px 1.133px 5.664px 0px rgba(0, 0, 0, 0.5);
    }
}
</style>
