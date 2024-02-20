<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import QSlider from '@/components/atoms/QSlider.vue'

const coverflowImages = [
    '/assets/img/campaigns/usecases/coverflow-7.jpg',
    '/assets/img/campaigns/usecases/coverflow-1.jpg',
    '/assets/img/campaigns/usecases/coverflow-2.jpg',
    '/assets/img/campaigns/usecases/coverflow-3.jpg',
    '/assets/img/campaigns/usecases/coverflow-4.jpg',
    '/assets/img/campaigns/usecases/coverflow-5.jpg',
    '/assets/img/campaigns/usecases/coverflow-6.jpg',
    '/assets/img/campaigns/usecases/coverflow-7.jpg',
    '/assets/img/campaigns/usecases/coverflow-1.jpg',
    '/assets/img/campaigns/usecases/coverflow-2.jpg',
    '/assets/img/campaigns/usecases/coverflow-3.jpg',
    '/assets/img/campaigns/usecases/coverflow-4.jpg',
    '/assets/img/campaigns/usecases/coverflow-5.jpg',
    '/assets/img/campaigns/usecases/coverflow-6.jpg',
];

const { width } = useWindowSize();

const coverflowEffectOpts = computed(() => {
    if (width >= 1280) return { rotate: 22, stretch: 100, depth: 150, slideShadow: false, };
    if (width >= 1024) return { rotate: 22, stretch: 100, depth: 150, slideShadow: false, };
    if (width >= 640) return { rotate: 22, stretch: 100, depth: 150, slideShadow: false, };
    return { rotate: 25, stretch: 40, depth: 150, slideShadow: false, };
})
</script>

<template>
    <div class="banner-use-cases tp-rated-area mx-auto overflow-hidden relative">
        <div ref="bgHero" class="bg relative py-14" :class="{ bottom: scrollPosition > 300 }">
            <div class="flex flex-col justify-center items-center h-full">
                <h1 class="title">Use Cases</h1>
                <h2 class="subtitle">For Every Ocassions</h2>
                <p class="description">Learn more how a diverse set of businesses, organizations, and individuals can maximize Twibbonize for their own use.</p>
                <div class="coverflow-slider mt-14 xl:mt-16 overflow-hidden">
                    <QSlider
                        direction="horizontal"
                        :grab-cursor="true"
                        :centered-slides="true"
                        slides-per-view="auto"
                        :loop="true"
                        effect="coverflow"
                        :initial-slide="4"
                        :coverflow-effect-modifier="1"
                        :coverflow-effect-rotate="coverflowEffectOpts.rotate"
                        :coverflow-effect-stretch="coverflowEffectOpts.stretch"
                        :coverflow-effect-depth="coverflowEffectOpts.depth"
                        :coverflow-effect-slide-shadows="coverflowEffectOpts.slideShadow"
                        >
                        <swiper-slide
                            v-for="(image, i) in coverflowImages"
                            :key="i"
                            class="banner-slide"
                        >
                            <img
                                :src="image"
                                class="banner-image"
                                alt="danone"
                            />
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
    @apply h-[600px] sm:h-[720px] lg:h-[820px] xl:h-[834px];
    background: #202124;

    .bg {
        @apply h-[600px] sm:h-[720px] lg:h-[820px] xl:h-[834px];
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
        @apply absolute pointer-events-none  w-[920px] h-[1280px] lg:w-[1840px] lg:h-[1280px] bottom-[-700px] lg:bottom-[-700px];
        left: 50%;
        transform: translateX(-50%);
        animation: 8s glow infinite ease-in-out alternate;
        mix-blend-mode: lighten;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        max-width: none;
    }

    .banner-slide {
        @apply w-[105px] h-[105px] sm:w-[200px] sm:h-[200px];
    }

    .banner-image {
        @apply max-h-full max-w-full rounded-[10px] sm:rounded-[20px];
    }

    .title {
        @apply font-semibold text-center text-base sm:text-xl md:text-2xl text-white uppercase px-5 sm:px-8;
        letter-spacing: 5px;
    }

    .subtitle {
        @apply font-bold text-center text-4xl xl:text-[65px] text-white mt-4 sm:mt-6 xl:mt-8 px-5 sm:px-8;
    }

    .description {
        @apply text-base sm:text-xl md:text-2xl text-center text-white max-w-[820px] mt-4 sm:mt-6 xl:mt-8 px-5 sm:px-8;
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
