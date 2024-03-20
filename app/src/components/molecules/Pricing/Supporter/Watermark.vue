<script setup>
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
</script>

<template>
    <div class="remove-watermark">
        <img class="overlay" src="/src/assets/img/patterns/background-banner-creators.png" alt="bg">
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
        <div class="remove-watermark-title">
            <div class="flex items-center">
                <h2 class="remove-watermark-title-text">Remove</h2>
                <img
                    class="remove-watermark-title-logo"
                    src="/assets/img/campaigns/watermark.png"
                />
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
    @apply rounded-3xl pt-16 pb-12 mx-14 mt-[120px] flex flex-col items-center relative overflow-hidden aspect-video;
    background: linear-gradient(162deg, #EFF7F7 7.87%, #CFECEB 87.63%);

    .remove-watermark-container {
        @apply max-w-[1100px] w-full mt-11 grid grid-cols-3 gap-6;

        .card {
            @apply bg-white p-10 rounded-3xl flex flex-col gap-4;
            box-shadow: 0px 12px 24px 0px rgba(27, 82, 78, 0.04);

            img {
                @apply rounded-[24px];
            }

            p {
                @apply text-center;
            }
        }
    }

    .remove-watermark-title {
        @apply text-[54px] leading-tight z-10;
    }

    .remove-watermark-logo {
        @apply h-[54px];
        filter: drop-shadow(0px 3.291px 8.228px rgba(0, 0, 0, 0.30));
        backdrop-filter: blur(2.0569987297058105px);
    }

    .overlay {
        @apply absolute h-[1200px] w-[1260px] bottom-0 right-0 rotate-45 opacity-50;
        filter: blur(29.675495147705078px) hue-rotate(40deg);
        z-index: 1;
    }

    .shape-blob {
        @apply absolute opacity-70 z-0;
        background: #46C3BD;
        filter: blur(77.16836547851562px);
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
    @apply rounded-3xl py-6 px-8 mt-12 z-10;
    background: linear-gradient(237deg, rgba(3, 69, 61, 0.80) 2.65%, #03352F 102.96%);

    p {
        @apply text-white text-xl;
    }

    a {
        @apply font-bold underline;
        text-decoration-line: 1px;
    }
}
</style>