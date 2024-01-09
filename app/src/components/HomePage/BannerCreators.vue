<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
    width: Number,
    height: Number
});

const lottieDimension = computed(() => {
    if (props.width >= 640) return { w: 360, h: 140 };
    return { w: 180, h: 70 };
});

const creatorsLogo = [
    'creators-logo-1.svg',
    'creators-logo-2.svg',
    'creators-logo-3.svg',
    'creators-logo-4.svg',
    'creators-logo-5.svg'
];

const lottieScroll = ref(null);
const lottieSupports = ref(null);

import QButton from '@/components/atoms/QButton.vue';
import gatherJSON from '../../assets/lottie/gather.json';

const doScroll = () => {
    const { top } = lottieScroll.value.getBoundingClientRect();
    if (top < 500) lottieSupports.value.play();
};

const isAutoPlay = computed(() => {
    return /(creators)/gi.test(route.path);
});

onMounted(() => {
    window.addEventListener('scroll', doScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <div class="banner-creators tp-rated-area mx-auto overflow-hidden relative">
        <div class="banner-creators__ellipse"></div>

        <div class="bg relative py-14">
            <img
                class="blob-bg"
                src="/src/assets/img/patterns/background-banner-creators.png"
                alt=""
            />
            <div class="flex flex-wrap justify-center items-center">
                <img
                    src="/assets/img/logos/twibbonize-creators.svg"
                    alt="twibbonize-for-creators"
                />
            </div>
            <div ref="lottieScroll"></div>
            <div class="container z-30 mt-4 mx-auto">
                <div class="row justify-center">
                    <div class="col-xl-10">
                        <div class="tp-rated-title-box text-center mb-14">
                            <h5 class="text-4xl sm:text-7xl font-bold text-white pb-4 px-5">
                                <div class="flex justify-center items-center sm:-mb-5">
                                    <div class="flex relative -mb-2.5 sm:-mb-5 -ml-2 sm:-ml-8">
                                        <Vue3Lottie
                                            ref="lottieSupports"
                                            :animationData="gatherJSON"
                                            :height="lottieDimension.h"
                                            :width="lottieDimension.w"
                                            :loop="false"
                                            :autoPlay="isAutoPlay"
                                        />
                                    </div>
                                    <div class="-ml-2 sm:-ml-8 sm:-mb-4">your</div>
                                    <br />
                                </div>
                                supporters with <br />Twibbonize
                            </h5>
                            <div
                                class="banner-creators__btn-container flex justify-center items-center mt-4"
                            >
                                <QButton
                                    class="text-sm ws-nowrap"
                                    variant="accent"
                                    border-radius="circle"
                                    @click="$router.push('/creators')"
                                >
                                    Learn More
                                </QButton>
                                <span class="text-sm text-white ml-4">or</span>
                                <QButton
                                    class="!text-white text-sm ws-nowrap !pl-3 !pr-1"
                                    variant="link"
                                    border-radius="circle"
                                >
                                    Try it now, Free!
                                </QButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="logo-set flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-14 gap-y-4 mt-14 mb-10"
                >
                    <img
                        v-for="url in creatorsLogo"
                        :key="url"
                        :src="`/assets/img/logos/${url}`"
                        alt="twibbonize-for-creators"
                    />
                </div>
            </div>
            <div>
                <slot></slot>
            </div>
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

.banner-creators {
    .bg {
        background: #202124;
        @apply sm:rounded-[40px];
    }

    .blob-bg {
        @apply absolute pointer-events-none;
        bottom: -30%;
        left: 50%;
        transform: translateX(-50%);
        animation: 8s glow infinite ease-in-out alternate;
        width: 920px;
        height: 640px;
        max-width: 940px;
        mix-blend-mode: lighten;
    }
    &__ellipse {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        width: 350px;
        height: 200px;
        border-radius: 350px;
        background: rgba(22, 218, 193, 0.3);
        filter: blur(77.16836547851562px);
    }
    &__spark {
        width: 35px;
        height: 42px;
        left: -30px;
        top: 2px;
    }
    &__highlight-line {
        // font-size: 50px !important;
        left: 0;
        top: 5px;
    }
}

@media screen and (min-width: 640px) {
    .banner-creators {
        .blob-bg {
            @apply absolute pointer-events-none;
            bottom: -40%;
            left: 50%;
            transform: translateX(-50%);
            animation: 8s glow infinite ease-in-out alternate;
            mix-blend-mode: lighten;
        }
    }
}
</style>
