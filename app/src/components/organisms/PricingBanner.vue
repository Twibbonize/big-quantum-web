<script setup>
import QSwitchTwo from '@/components/atoms/QSwitchTwo.vue';
import QSwitchThree from '@/components/atoms/QSwitchThree.vue';
import QButton from '@/components/atoms/QButton.vue';

const creatorOptions = [
  {
    key: 'creator-monthly',
    text: 'Monthly',
  },
  {
    key: 'creator-yearly',
    text: 'Yearly'
  }
];

const supporterOptions = [
  {
    key: 'supporter-weekly',
    text: 'Weekly',
  },
  {
    key: 'supporter-monthly',
    text: 'Monthly',
  },
  {
    key: 'supporter-yearly',
    text: 'Yearly',
  }
];
</script>

<template>
    <div class="banner-pricing tp-rated-area" style="--tw-bg-opacity: .4;">
        <div ref="bgHero" class="bg relative py-14" :class="{ bottom: scrollPosition > 300 }">
            <div class="text flex flex-col justify-center items-center h-full">
                <h1 class="title">Pricing</h1>
                <h2 class="subtitle">Find the right Premium plan for your need</h2>
            </div>
            <div class="pricing-compare">
              <div class="supporters card">
                    <div class="bg">
                        <img class="premium" src="/assets/img/marketings/premium-black.svg" alt="premium">
                        <img class="premium-type" src="/assets/img/marketings/premium-supporter.svg" alt="supporter">
                        <p class="premium-description">For people who want more out of Twibbonize</p>
                        <QSwitchThree :options="supporterOptions" class="mt-4 sm:!w-[270px]"/>
                        <div class="price">
                            <span class="currency">$</span>
                            <span class="dollar">2</span>
                            <span class="sen">.99</span>
                        </div>
                    </div>
                    <div class="content">
                        <div class="bento-container">
                            <div class="bento flex flex-col -mt-9">
                                <video
                                    class="w-full"
                                    autoplay loop muted
                                    src="/assets/videos/pricing-no-watermark-premium-supporters.mp4"
                                />
                                <div class="text-container">
                                    <p class="text">Remove watermark</p>
                                    <p class="text">on <strong>your own account</strong></p>
                                </div>
                            </div>
                            <div class="bento flex mt-5">
                                <div class="flex flex-col justify-between">
                                    <video
                                        class="w-full"
                                        autoplay loop muted
                                        src="/assets/videos/pricing-no-ads.mp4"
                                    />
                                    <div class="text-container">
                                        <p class="text">Use Twibbonize</p>
                                        <p class="text"><strong>without Ads</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div class="extra-features">
                                <div class="line"></div>
                                <span>Extra Features</span>
                                <div class="line"></div>
                            </div>
                            <div class="bento flex flex-col items-center justify-center h-[320px]">
                                <p class="text-7xl">😔</p>
                                <p class="font-bold text-xl sm:text-2xl">No Extra Features</p>
                                <p class="text-xl sm:text-2xl">Available</p>
                            </div>
                        </div>
                    </div>
                    <div class="action">
                        <QButton size="md" variant="black" class="w-full">
                            <span class="text-base gap-4 flex items-center">Purchase Now <i class="ri-arrow-right-line"></i></span>
                        </QButton>
                        <span>Learn More</span>
                    </div>
              </div>
              <div class="creators card">
                    <div class="bg">
                        <img class="premium" src="/assets/img/marketings/premium-white.svg" alt="premium">
                        <img class="premium-type" src="/assets/img/marketings/premium-creator.svg" alt="creator">
                        <p class="premium-description">For people who need the ultimate Twibbonize experience</p>
                        <QSwitchTwo :options="creatorOptions" class="text-black mt-4"/>
                        <div class="price">
                            <span class="currency">$</span>
                            <span class="dollar">11</span>
                            <span class="sen">.99</span>
                        </div>
                    </div>
                    <div class="content">
                        <div class="bento-container">
                            <div class="bento flex flex-col -mt-9">
                                <video
                                    class="w-full"
                                    autoplay loop muted
                                    src="/assets/videos/pricing-no-watermark-premium-supporters.mp4"
                                />
                                <div class="text-container">
                                    <p class="text">Remove watermark on</p>
                                    <p class="text"><strong>all of your campaign users</strong></p>
                                </div>
                            </div>
                            <div class="bento mt-5">
                                <video
                                    class="w-full"
                                    autoplay loop muted
                                    src="/assets/videos/pricing-no-ads.mp4"
                                />
                                <div class="text-container">
                                    <p class="text">Use Twibbonize</p>
                                    <p class="text"><strong>without Ads</strong></p>
                                </div>
                            </div>
                            <div class="extra-features">
                                <div class="line"></div>
                                <span>Extra Features</span>
                                <div class="line"></div>
                            </div>
                            <div class="bento feature grid grid-cols-2 grid-row-5 h-[305px] gap-3 p-3">
                                <div class="bento overflow-hidden row-span-3 p-2.5">
                                    <div class="flex flex-col">
                                        <div>
                                            <p>Campaign</p>
                                            <p class="font-bold">Analytics</p>
                                        </div>
                                        <div class="w-[250px] mt-2">
                                            <video
                                                class="w-full"
                                                autoplay loop muted
                                                src="/assets/videos/pricing-analytics.mp4"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="bento row-span-2 pt-4 pr-4">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <img src="/assets/img/marketings/campaign-private.png" alt="private">
                                        </div>
                                        <div class="-ml-2">
                                            <p class="font-bold">Private</p>
                                            <p class="font-bold">Campaign</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bento row-span-3 p-4 text-center">
                                    <div class="flex flex-col justify-between">
                                        <div>
                                            <p>Campaign</p>
                                            <p class="font-bold">Customization</p>
                                        </div>
                                        <video
                                            class="w-full"
                                            autoplay loop muted
                                            src="/assets/videos/pricing-campaign-customization.mp4"
                                        />
                                    </div>
                                </div>
                                <div class="bento row-span-2 p-2.5 text-center">
                                    <div class="flex flex-col justify-between">
                                        <div class="h-8 relative overflow-hidden">
                                            <video
                                                class="h-12 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
                                                autoplay loop muted
                                                src="/assets/videos/pricing-multiple-frames.mp4"
                                            />
                                        </div>
                                        <div>
                                            <p class="font-bold">Multiple Frames</p>
                                            <p>per campaign</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="action">
                            <QButton size="md" variant="primary" class="w-full">
                                <span class="text-base gap-4 flex items-center">Purchase Now <i class="ri-arrow-right-line"></i></span>
                            </QButton>
                            <span>Learn More</span>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes glow {
    from {
        transform: translateX(-50%) scale(0.9) rotate(0deg);
    }
    to {
        transform: translateX(-60%) scale(1.1) rotate(10deg);
    }
}

.banner-pricing {
    @apply mt-[260px] mx-auto overflow-hidden relative;
    background: #202124;

    .bg {
        @apply max-w-[1100px] mx-auto;
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
        @apply absolute pointer-events-none  w-[920px] h-[1280px] lg:w-[1840px] lg:h-[1280px] bottom-[-850px] lg:bottom-[-850px];
        left: 50%;
        transform: translateX(-50%) rotate(30deg);
        animation: 8s glow infinite ease-in-out alternate;
        mix-blend-mode: lighten;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        max-width: none;
    }

    .logos {
        @apply relative lg:max-w-[1300px] mt-10 px-5 sm:px-8;

        .scrim {
            @apply w-full h-full absolute top-0 left-0 z-10;
            background: linear-gradient(
                90deg,
                #202124 0%,
                #636363 5%,
                #ffffff 10%,
                #ffffff 90%,
                #636363 95%,
                #202124 100%
            );
            mix-blend-mode: darken;
        }
    }

    .title {
        @apply font-semibold text-center text-base sm:text-xl md:text-2xl text-white uppercase px-5 sm:px-8;
        letter-spacing: 5px;
    }

    .subtitle {
        @apply font-bold text-center text-4xl xl:text-[65px] leading-none text-white mt-4 sm:mt-6 xl:mt-8 px-5 sm:px-8;
    }

    .description {
        @apply text-base sm:text-xl md:text-2xl text-center text-white max-w-[820px] mt-4 sm:mt-6 xl:mt-8 px-5 sm:px-8;
    }

    .coverflow-slider {
        @apply max-w-[820px];
    }
}

.pricing-compare {
  @apply flex flex-col-reverse sm:flex-row w-full gap-14 mt-48;

  .card {
    @apply rounded-3xl bg-white w-full overflow-hidden relative;
    border: 3px solid rgba(255, 255, 255, 0.20);

    .premium {
      @apply h-5;
    }

    .premium-type {
      @apply h-20;
    }

    .premium-description {
      @apply text-center text-base mt-2;
    }

    .content {
        @apply bg-white mx-12 rounded-3xl;
    }

    .bento-container {
        @apply top-9 w-full pb-[182px] bg-transparent;
    }

    .bento {
        @apply rounded-3xl bg-white text-black w-full overflow-hidden;
        border: 1px solid  #DEE8E8;
        box-shadow: 0px 12px 24px 0px rgba(27, 82, 78, 0.04);

        .text-container {
            @apply p-4 rounded-3xl;
        }

        .text {
            @apply text-center text-xl sm:text-2xl;
        }
    }

    .extra-features {
        @apply text-[#5F6168] font-semibold uppercase text-[10px] flex items-center gap-5 my-8 whitespace-nowrap;
        letter-spacing: 2px;

        .line {
            @apply w-full;
            border-bottom: 1px solid #DEE8E8;
        }
    }

    .feature {
        p {
            @apply text-sm sm:text-base lg:text-lg;
            line-height: 100% !important;
        }
    }

    .action {
        @apply text-black absolute bottom-0 left-0 w-full bg-white flex flex-col items-center py-8 px-12 gap-4;
        box-shadow: 0px -4px 32px 0px rgba(27, 82, 78, 0.08);
    }
  }

  .supporters {
    .bg {
      @apply flex flex-col items-center p-12 pb-20;
      background: linear-gradient(117deg, rgba(22, 218, 193, 0.80) 14.55%, rgba(22, 155, 154, 0.80) 100%), url(<path-to-image>), lightgray -144.115px 0px / 159.794% 99.468% no-repeat;
    }
  }

  .creators {
    @apply text-white;
    .bg {
      @apply flex flex-col items-center p-12 pb-20;
      background: linear-gradient(117deg, #16DAC1 14.55%, #169B9A 100%);
    }
  }

  .price {
    @apply flex mt-10;

    .currency {
        @apply self-start text-3xl font-bold py-[12px];
    }

    .dollar {
        @apply self-center text-[105px] font-bold leading-none;
    }

    .sen {
        @apply self-end text-3xl font-bold py-[7px];
    }
  }
}
</style>
