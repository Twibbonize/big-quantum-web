<script setup>
import { computed, onMounted } from 'vue';

import * as LottiePlayer from "@lottiefiles/lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

const props = defineProps({
    width: Number,
    height: Number
});

const lottieDimension = computed(() => {
    if (props.width >= 640) return 'width: 250px;height: 100px;';
    return 'width: 125px;height: 50px;';
});

const creatorsLogo = [
    'creators-logo-1.svg',
    'creators-logo-2.svg',
    'creators-logo-3.svg',
    'creators-logo-4.svg',
    'creators-logo-5.svg'
];

import QButton from '@/components/atoms/QButton.vue';
import gatherJSON from '../../assets/lottie/gather.json';

onMounted(() => {
    let player = document.getElementById('lottieSupports');
    console.log(player);

    player.addEventListener('load',function() {

        create({
            player: '#lottieSupports',
            mode: 'scroll',
            actions: [
                {
                    visibility: [0.1, 1.0],
                    type: 'playOnce'
                }
            ]
        });
    })
})
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
            <div class="container z-30 mt-4 mx-auto">
                <div class="row justify-center">
                    <div class="col-xl-10">
                        <div class="tp-rated-title-box text-center mb-14">
                            <h5 class="text-4xl sm:text-7xl font-bold text-white pb-4">
                                <div class="flex justify-center items-center">
                                    <div class="flex relative">
                                        <lottie-player
                                            id="lottieSupports"
                                            src="https://big-quantum.twibbonize.com/assets/lottie/gather.json"
                                            :style="lottieDimension"
                                        />
                                    </div>
                                    <div class="-ml-2 sm:-ml-4 pb-3">your</div>
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
                                    class="!text-white text-sm ws-nowrap"
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
                    class="logo-set flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-14 gap-y-4 mt-14 mb-10 px-5"
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
