<script setup>
import TWToggleSwitch from '@/components/base/TWToggleSwitch.vue';
import QButton from '../base/QButton.vue';
</script>

<template>
    <div class="container mx-auto">
        <div class="package-selection flex flex-col items-center">
            <img
                class="package-selection__bg"
                src="/src/assets/img/patterns/background-banner-creators.png"
                alt=""
            />
            <h4 class="package-selection__title color_white">Your supporters await</h4>
            <p class="package-selection__description mt-6">
                Try for free, find what you need, and choose the best plan
            </p>
            <TWToggleSwitch class="mt-5" />
            <div class="package-selection__package w-100 row mt-5">
                <div class="package-selection__free col w-100 flex flex-col justify-between">
                    <div>
                        <h5>Free</h5>
                        <p class="mt-4">For people who are just getting started</p>
                        <div class="package-selection__line"></div>
                        <div class="flex items-center mb-6 mt-1">
                            <div class="package-selection__icon-container mr-2">
                                <i class="ri-check-line"></i>
                            </div>
                            <p>Create Unlimited Campaign</p>
                        </div>
                        <div class="flex items-center mb-6 mt-1">
                            <div class="package-selection__icon-container mr-2">
                                <i class="ri-check-line"></i>
                            </div>
                            <p>Easy To Share Short URL</p>
                        </div>
                        <div class="flex items-center mb-6 mt-1">
                            <div class="package-selection__icon-container mr-2">
                                <i class="ri-check-line"></i>
                            </div>
                            <p>Frame Twibbon</p>
                        </div>
                    </div>
                    <QButton
                        color="semi-transparent"
                        class="package-selection__btn w-100 color_white"
                    >
                        Sign Up
                    </QButton>
                </div>
                <div class="package-selection__individual col w-100">
                    <h6>Premium</h6>
                    <h5>Individual</h5>
                    <p class="mt-4 mb-6">For people who want more out of Twibbonize</p>
                    <span>$12</span>
                    <div class="package-selection__black-line"></div>
                    <div class="flex items-center mb-6 mt-1">
                        <div class="package-selection__icon-container mr-2">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>No Watermark for All</p>
                    </div>
                    <div class="flex items-center mb-6 mt-1">
                        <div class="package-selection__icon-container mr-2">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>Background Twibbon</p>
                    </div>
                    <div class="flex items-center mb-6 mt-1">
                        <div class="package-selection__icon-container mr-2">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>Multiple Frames per Campaign</p>
                    </div>
                    <div class="flex items-center mb-6 mt-1">
                        <div class="package-selection__icon-container mr-2">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>Instant Download for All</p>
                    </div>
                    <QButton color="primary" class="w-100 color_white mt-6">
                        Purchase Now <i class="ri-arrow-right-line mb-2"></i>
                    </QButton>
                </div>
                <div class="package-selection__business col w-100">
                    <h6>Premium</h6>
                    <h5>Business</h5>
                    <p class="mt-4 mb-6">For people who want more out of Twibbonize</p>
                    <span>Start from $48</span>
                    <div class="package-selection__black-line"></div>
                    <div class="flex items-center mb-6 mt-1">
                        <div class="package-selection__icon-container mr-2">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>No Watermark for All</p>
                    </div>
                    <div class="flex items-center mb-6 mt-1">
                        <div class="package-selection__icon-container mr-2">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>Background Twibbon</p>
                    </div>
                    <div class="flex items-center mb-6 mt-1">
                        <div class="package-selection__icon-container mr-2">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>Multiple Frames per Campaign</p>
                    </div>
                    <div class="flex items-center mb-6 mt-1">
                        <div class="package-selection__icon-container mr-2">
                            <i class="ri-check-line"></i>
                        </div>
                        <p>Instant Download for All</p>
                    </div>
                    <QButton color="black" class="w-100 color_white mt-6">
                        Purchase Now <i class="ri-arrow-right-line mb-2"></i>
                    </QButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.package-selection {
    overflow: hidden;
    border-radius: 20px;
    background: #1b1b1b;
    position: relative;
    margin: 96px 0;
    padding: 160px 80px;

    &__bg {
        position: absolute;
        bottom: -40%;
        left: 50%;
        transform: translateX(-50%);
        animation: 8s glow infinite ease-in-out alternate;
    }

    &__package {
        max-width: 1200px;
        gap: 32px;
    }

    &__title {
        color: #fff;
        text-align: center;
        font-family: Manrope;
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 56px */
        letter-spacing: -2.24px;
    }

    &__description {
        color: #fff;
        text-align: center;
        font-family: Manrope;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 22px */
    }

    &__line {
        width: 100%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin: 32px 0;
    }

    &__black-line {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin: 32px 0;
    }

    &__icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        padding: 0 5px;
    }

    &__free {
        border-radius: 20px;
        border: 1px solid #fff;
        box-shadow: 0px 1px 3px 0px rgba(18, 20, 32, 0.14);
        padding: 64px 64px 40px;

        h5 {
            color: #fff;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 22px */
        }

        p,
        i {
            color: #fff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
        }
    }

    &__individual {
        border-radius: 20px;
        background: #fff;
        padding: 64px 64px 40px;
        position: relative;

        h5 {
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 22px */
        }

        p,
        i {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
        }

        span {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 28px */
        }

        h6 {
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 12px */
            letter-spacing: 2.4px;
            text-transform: uppercase;
            position: absolute;
            top: 48px;
        }
    }

    &__business {
        border-radius: 20px;
        background: linear-gradient(166deg, #16dac1 9.91%, #169b9a 122.8%);
        padding: 64px 64px 40px;
        position: relative;

        h5 {
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 22px */
        }

        p,
        i {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
        }

        span {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 28px */
        }

        h6 {
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 12px */
            letter-spacing: 2.4px;
            text-transform: uppercase;
            position: absolute;
            top: 48px;
        }
    }
}

@keyframes glow {
    from {
        transform: translateX(-50%) scale(0.9) rotate(0deg);
    }
    to {
        transform: translateX(-60%) scale(1.1) rotate(10deg);
    }
}
</style>
