<script setup>
import { onMounted, onUnmounted } from 'vue';
import QSlider from '@/components/atoms/QSlider.vue'

const coverflowImages = [
    '/assets/img/campaigns/usecases/coverflow-7.jpg',
    '/assets/img/campaigns/usecases/coverflow-1.jpg',
    '/assets/img/campaigns/usecases/coverflow-2.jpg',
    '/assets/img/campaigns/usecases/coverflow-3.jpg',
    '/assets/img/campaigns/usecases/coverflow-4.jpg',
    '/assets/img/campaigns/usecases/coverflow-5.jpg',
    '/assets/img/campaigns/usecases/coverflow-6.jpg',
];

const doScroll = () => {
    const { top } = lottieScroll.value.getBoundingClientRect();
    if (top < 500) lottieSupports.value.play();
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <div class="banner-use-cases tp-rated-area mx-auto overflow-hidden relative">
        <div ref="bgHero" class="bg relative py-14" :class="{ bottom: scrollPosition > 300 }">
            <div class="flex flex-col justify-center items-center h-full">
                <h1 class="title">Use Cases</h1>
                <h2 class="subtitle">For Every Ocassions</h2>
                <p class="description">Learn more how a diverse set of businesses, organizations, and individuals can maximize Twibbonize for their own use.</p>
                <div class="coverflow-slider mt-16 overflow-hidden">
                    <QSlider
                        direction="horizontal"
                        :grab-cursor="true"
                        :centered-slides="true"
                        slides-per-view="auto"
                        :loop="true"
                        effect="coverflow"
                        :coverflow-effect-rotate="22"
                        :coverflow-effect-modifier="1"
                        :coverflow-effect-stretch="100"
                        :coverflow-effect-depth="150"
                        :coverflow-effect-slide-shadows="false"
                        :initial-slide="4"
                    >
                        <swiper-slide
                            v-for="(image, i) in coverflowImages"
                            :key="i"
                            class="w-[250px] h-[250px]"
                        >
                            <img :src="image" class="max-h-full max-w-full rounded-[30px]" alt="danone" />
                        </swiper-slide>
                    </QSlider>
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

.banner-use-cases {
    @apply xl:h-[834px];

    .bg {
        @apply xl:h-[834px];
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
        @apply absolute pointer-events-none;
        bottom: -700px;
        left: 50%;
        transform: translateX(-50%);
        animation: 8s glow infinite ease-in-out alternate;
        width: 1840px;
        height: 1280px;
        mix-blend-mode: lighten;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }

    .title {
        @apply font-semibold xl:text-2xl text-white uppercase;
        letter-spacing: 5px;
    }

    .subtitle {
        @apply font-bold xl:text-[65px] text-white mt-8;
    }

    .description {
        @apply text-2xl text-center text-white max-w-[820px] mt-8;
    }

    .coverflow-slider {
        @apply max-w-[820px];
    }

    swiper-slide {
        img {
            filter: blur(4px);
        }
    }

    swiper-slide.swiper-slide-active {
        img {
            filter: blur(0);
        }
    }

    swiper-slide.swiper-slide-next, swiper-slide.swiper-slide-prev {
        img {
            filter: blur(1.5px);
        }
    }
}
</style>
