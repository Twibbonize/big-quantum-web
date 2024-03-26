<script setup>
import { onMounted, ref } from 'vue';
import ScrollMagic from 'scrollmagic';
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import 'animate.css';

const removeWatermarkLists = [
    {
        image: '/assets/img/marketings/creator-watermark-1.jpg',
        text: 'As a free user, your Twibbon always features <strong>a watermark.</strong>',
    },
    {
        image: '/assets/img/marketings/creator-watermark-2.jpg',
        text: '<strong>Premium Supporter</strong> removes the watermark for a cleaner image.',
    },
    {
        image: '/assets/img/marketings/creator-watermark-3.jpg',
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
            <h2 class="remove-watermark-title-text">for <strong>you & your audience</strong></h2>
        </div>
        <div class="remove-watermark-container">
            <div v-for="{ image, text },i in removeWatermarkLists" class="card">
                <img :src="image" :alt="`remove-watermark-${i}`">
                <p v-html="text"></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.remove-watermark {
    @apply lg:rounded-3xl py-14 lg:pt-16 lg:pb-12 sm:px-14 lg:mx-14 mt-[100px] lg:mt-[120px] flex flex-col items-center relative overflow-hidden;
    background: linear-gradient(262deg, #27B4A3 3.54%, #136258 100%);

    .remove-watermark-container {
        @apply max-w-[1100px] w-full mt-11 grid grid-cols-1 sm:grid-cols-3 gap-6 z-10 px-5 sm:px-0;

        .card {
            @apply p-5 pb-10 lg:p-10 rounded-3xl flex flex-col gap-4;
            background: #75C1B8;
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
        @apply flex flex-col items-center text-white;
    }

    .remove-watermark-title-text {
        @apply text-[32px] lg:text-[54px] text-center leading-tight z-10;
    }

    .remove-watermark-logo {
        @apply w-full absolute top-1/2 -translate-y-1/2;
        filter: drop-shadow(0px 3.291px 8.228px rgba(0, 0, 0, 0.30));
        backdrop-filter: blur(2.0569987297058105px);
    }

    .overlay {
        @apply absolute h-[300px] w-[350px] lg:h-[1200px] lg:w-[1260px] bottom-0 right-0 rotate-45 opacity-50;
        filter: blur(29.675495147705078px) hue-rotate(40deg);
        z-index: 1;
    }

    .shape-blob {
        @apply absolute opacity-50 z-0;
        background: #BDDDD9;
        filter: blur(120px);
        height: 900px;
        width: 1000px;
        border-radius: 50% 40% 30% 40%;
        animation:
            transform 18s ease-in-out infinite both alternate,
            movementOne 12s ease-in-out infinite both;

        .one {
            @apply left-0 top-0;
        }

        .two {
            @apply bottom-0 right-0
        }
    }
}
</style>