<script setup>
import { onMounted, ref } from 'vue';
import ScrollMagic from 'scrollmagic';
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import 'animate.css';

const removeWatermarkLists = [
    {
        image: '/assets/img/marketings/supporter-watermark-1.jpg',
        text: 'As a free user, your Twibbon always features <strong>a watermark.</strong>',
    },
    {
        image: '/assets/img/marketings/supporter-watermark-2.jpg',
        text: '<strong>Premium Supporter</strong> removes the watermark for a cleaner image.',
    },
    {
        image: '/assets/img/marketings/supporter-watermark-3.jpg',
        text: 'Now you can <strong>support any campaign</strong> without watermark.',
    }
];

onMounted(() => {
    const controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 1000 } });

    new ScrollMagic.Scene({ triggerElement: '#remove-watermark-container' })
        .setClassToggle('#watermark-logo', 'animate__fadeOutUp') // add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '#remove-watermark-container' })
        .setClassToggle('#watermark-text', 'animate__fadeInUp') // add class toggle
        .addTo(controller);
})
</script>

<template>
    <div id="remove-watermark-container" class="remove-watermark">
        <img class="overlay" src="/src/assets/img/patterns/background-banner-creators.png" alt="bg">
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
        <div class="remove-watermark-title">
            <div class="flex items-center gap-2">
                <h2 class="remove-watermark-title-text">Remove</h2>
                <div class="relative">
                    <img
                        id="watermark-logo"
                        class="animate__animated animate__slow remove-watermark-logo"
                        src="/assets/img/campaigns/watermark.png"
                    />
                    <h2
                        id="watermark-text"
                        class="animate__animated animate__delay-1s remove-watermark-title-text opacity-0"
                    >
                        Watermark
                    </h2>
                </div>
            </div>
            <h2 class="remove-watermark-title-text">for <strong>your own account</strong></h2>
        </div>
        <div class="remove-watermark-container">
            <div v-for="{ image, text },i in removeWatermarkLists" class="card">
                <img :src="image" :alt="`remove-watermark-${i}`">
                <p v-html="text"></p>
            </div>
        </div>
        <div class="remove-watermark-link">
            <p>Looking to Remove Watermark for all of your campaign users? Try <router-link to="/pricing/creators">Premium Creator</router-link>.</p>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.remove-watermark {
    @apply lg:rounded-3xl py-14 lg:pt-16 lg:pb-12 sm:px-14 lg:mx-14 mt-[100px] lg:mt-[120px] flex flex-col items-center relative overflow-hidden;
    background: linear-gradient(162deg, #EFF7F7 7.87%, #CFECEB 87.63%);

    .remove-watermark-container {
        @apply max-w-[1100px] w-full mt-11 grid grid-cols-1 sm:grid-cols-3 gap-6 z-10 px-5 sm:px-0;

        .card {
            @apply bg-white p-5 pb-10 lg:p-10 rounded-3xl flex flex-col gap-4;
            box-shadow: 0px 12px 24px 0px rgba(27, 82, 78, 0.04);

            img {
                @apply rounded-[24px];
            }

            p {
                @apply text-sm lg:text-base text-center;
            }
        }
    }

    .remove-watermark-title {
        @apply flex flex-col items-center;
    }

    .remove-watermark-title-text {
        @apply text-[32px] lg:text-[54px] text-center leading-tight z-10;
    }

    .remove-watermark-logo {
        @apply h-[32px] lg:h-[54px] absolute top-1/2 -translate-y-1/2;
        filter: drop-shadow(0px 3.291px 8.228px rgba(0, 0, 0, 0.30));
        backdrop-filter: blur(2.0569987297058105px);
    }

    .overlay {
        @apply absolute h-[300px] w-[350px] lg:h-[1200px] lg:w-[1260px] bottom-0 right-0 rotate-45 opacity-50;
        filter: blur(29.675495147705078px) hue-rotate(40deg);
        z-index: 1;
    }

    .shape-blob {
        @apply absolute opacity-70 z-0;
        background: #46C3BD;
        filter: blur(77px);
        height: 900px;
        width: 1000px;
        border-radius: 50% 40% 30% 40%;
        animation:
            transform 18s ease-in-out infinite both alternate,
            movementOne 12s ease-in-out infinite both;

        .one {
            @apply right-0 top-0;
        }

        .two {
            @apply bottom-0 left-0
        }
    }
}

.remove-watermark-link {
    @apply rounded-3xl py-3 lg:py-6 px-5 lg:px-8 mt-10 lg:mt-12 z-10 m-5 sm:mx-0;
    background: linear-gradient(237deg, rgba(3, 69, 61, 0.80) 2.65%, #03352F 102.96%);

    p {
        @apply text-white text-center text-sm lg:text-xl;
    }

    a {
        @apply font-bold underline;
        text-decoration-line: 1px;
    }
}
</style>