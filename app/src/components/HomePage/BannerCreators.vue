<script setup>
import QButton from '@/components/atoms/QButton.vue';
import gatherJSON from '../../assets/lottie/gather.json';
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
            <div class="flex justify-center">
                <img
                    src="/src/assets/img/logos/twibbonize-creators.svg"
                    alt="twibbonize-for-creators"
                />
            </div>

            <div class="container z-10 mt-4 mx-auto">
                <div class="row justify-center">
                    <div class="col-xl-10">
                        <div class="tp-rated-title-box text-center mb-14">
                            <h5 class="tp-section-title-3 text-white pb-4">
                                <div class="flex justify-center items-center">
                                    <div class="flex relative">
                                        <Vue3Lottie
                                            :animationData="gatherJSON"
                                            :height="100"
                                            :width="250"
                                            :loop="false"
                                        />
                                    </div>
                                    <div class="pr-4 pb-3">your</div>
                                    <br />
                                </div>
                                supporters with <br />Twibbonize
                            </h5>
                            <div
                                class="banner-creators__btn-container flex justify-center items-center mt-4"
                            >
                                <RouterLink to="/creators">
                                    <QButton
                                        class="text-sm ws-nowrap"
                                        color="yellow"
                                        border-radius="circle"
                                    >
                                        Learn More
                                    </QButton>
                                </RouterLink>
                                <span class="text-sm text-white ml-4">or</span>
                                <QButton
                                    class="!text-white text-sm ws-nowrap"
                                    color="transparent"
                                    border-radius="circle"
                                >
                                    Try it now, Free!
                                </QButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="author-rated-big-img flex justify-center">
                    <img
                        class="w-full px-5 sm:px-32 z-30"
                        src="/src/assets/img/logos/creators-brand.png"
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
        position: absolute;
        bottom: -30%;
        left: 50%;
        transform: translateX(-50%);
        animation: 8s glow infinite ease-in-out alternate;
        width: 920px;
        height: 640px;
        max-width: 940px;
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
            position: absolute;
            bottom: -40%;
            left: 50%;
            transform: translateX(-50%);
            animation: 8s glow infinite ease-in-out alternate;
        }
    }
}
</style>
