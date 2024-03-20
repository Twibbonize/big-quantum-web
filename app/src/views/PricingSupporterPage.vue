<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import PricingPrice from '@/components/molecules/Pricing/Price.vue';
import QButton from '@/components/atoms/QButton.vue';
import QSwitchThree from '@/components/atoms/QSwitchThree.vue';

import PricingSupporterHeader from '@/components/molecules/Pricing/Supporter/Header.vue';

import { onMounted, onUnmounted, ref } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const content = ref(null);

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();

    if (top < 97) {
        setNavbarColor('white');
        setShadow(true);
        setLogoVariant('main');
        setCtaVariant('accent');
    } else {
        setNavbarColor('transparent-white');
        setShadow(false);
        setLogoVariant('white');
        setCtaVariant('accent');
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);

    setNavbarColor('transparent-white');
    setShadow(false);
    setLogoVariant('white');
    setCtaVariant('accent');
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});

const optionIndex = ref(0);

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

const supporterFeatures = [
    {
        text: 'Remove watermark for your own account',
    },
    {
        text: 'Use Twibbonize without Ads',
    },
];

const supporterOptions = [
    {
        key: 'supporter-weekly',
        text: 'Weekly',
        duration: 'week'
    },
    {
        key: 'supporter-monthly',
        text: 'Monthly',
        duration: 'month'
    },
    {
        key: 'supporter-yearly',
        text: 'Yearly',
        duration: 'year'
    }
];

const supporterPrice = {
    number: 2,
    decimal: 99,
    currency: '$'
};
</script>

<template>
    <LayoutMain>
        <div class="pricing-supporter-header">
            <PricingSupporterHeader/>
            <div class="video-illustration">
                <h2 class="title">Do you like supporting  <br> different campaigns?</h2>
                <p class="subtitle">Then Premium Supporter is the right plan for you.</p>
                <div class="video-container">
                    <video
                        class="w-full"
                        autoplay
                        loop
                        muted
                        src="/assets/videos/supporter-twibbon.mp4"
                    ></video>
                </div>
            </div>
            <div class="remove-watermark">
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
            <div class="no-more-ads">
                <h2 class="title">No More Annoying Ads</h2>
                <p class="description">Enjoy uninterrupted experience with no ads on Twibbonize. Get ready to embrace a cleaner, more user-friendly version of Twibbonize.</p>
                <div class="bento">
                    <video
                        autoplay
                        loop
                        muted
                        src="/assets/videos/pricing-no-ads.mp4"
                    ></video>
                </div>
            </div>
            <div class="pricing-supporter-price">
                <h2 class="title">The top-notch plan we’ve ever launched</h2>
                <p class="description">Considering all the conveniences, it’s worth it.</p>
                <div class="bento">
                    <div class="detail">
                        <img class="premium-title" src="/assets/img/marketings/premium-black.svg" alt="premium">
                        <img class="supporter-title" src="/assets/img/marketings/premium-supporter.svg" alt="supporter">
                        <div
                            v-for="({ text }, i) in supporterFeatures"
                            :key="`${title}-feature-${i}`"
                            class="flex items-center mt-5"
                        >
                            <div class="icon-container">
                                <i class="ri-check-line"></i>
                            </div>
                            <p>{{ text }}</p>
                        </div>
                    </div>
                    <div class="price">
                        <div class="switch mt-4">
                            <QSwitchThree
                                v-model="optionIndex"
                                size="sm"
                                :options="supporterOptions"
                                :name="`price-supporter-${isCreator ? 'creator' : 'supporter'}`"
                                class="w-[220px] lg:w-[270px]"
                            />
                        </div>
                        <PricingPrice
                            :currency="supporterPrice.currency"
                            :number="supporterPrice.number"
                            :decimal="supporterPrice.decimal"
                            class="mt-4"
                        />
                        <p>{{ `per ${supporterOptions[optionIndex].duration}` }}</p>
                        <QButton variant="black" class="gap-2 w-full mt-4">
                            Purchase Now
                            <i class="ri-arrow-right-line"></i>
                        </QButton>
                    </div>
                </div>
            </div>
        </div>
        <div ref="content"></div>
    </LayoutMain>
</template>

<style lang="scss">
    .pricing-supporter-header {
        .video-illustration {
            @apply flex flex-col w-full items-center;

            .video-container {
                @apply mt-14;
            }

            .title {
                @apply font-bold text-[64px] text-center leading-tight;
            }
            .subtitle {
                @apply font-medium text-2xl text-[#667085] mt-6;
            }
            .video {
                @apply w-full;
            }
        }

        .remove-watermark {
            @apply rounded-3xl pt-16 pb-12 mx-14 mt-[120px] flex flex-col items-center;
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
                @apply text-[54px] leading-tight;
            }

            .remove-watermark-logo {
                @apply h-[54px];
                filter: drop-shadow(0px 3.291px 8.228px rgba(0, 0, 0, 0.30));
                backdrop-filter: blur(2.0569987297058105px);
            }
        }

        .remove-watermark-link {
            @apply rounded-3xl py-6 px-8 mt-12;
            background: linear-gradient(237deg, rgba(3, 69, 61, 0.80) 2.65%, #03352F 102.96%);

            p {
                @apply text-white text-xl;
            }

            a {
                @apply font-bold underline;
                text-decoration-line: 1px;
            }
        }

        .no-more-ads{
            @apply flex flex-col max-w-[1100px] w-full mx-auto my-24;
            .title {
                @apply text-5xl font-bold text-center;
            }

            .description {
                @apply text-2xl leading-tight text-gray-500 text-center mt-5;
            }

            .bento {
                @apply pt-10 mt-16 h-[500px] flex justify-center bg-white rounded-[32px];
                box-shadow: 0px 12px 80px 0px rgba(27, 82, 78, 0.11);
            }
        }

        .pricing-supporter-price {
            @apply flex flex-col max-w-[1100px] w-full mx-auto my-24;

            .title {
                @apply text-5xl font-bold text-center;
            }

            .description {
                @apply text-2xl leading-tight text-gray-500 text-center mt-5;
            }

            .bento {
                @apply p-20 bg-white rounded-[32px] flex justify-between;
                border-top: 2px solid rgba(255, 255, 255, 0.40);
                border-bottom: 2px solid rgba(255, 255, 255, 0.40);

                .detail {
                    .premium-title {
                        @apply h-9 mx-auto;
                    }
                    .supporter-title {
                        @apply h-32 mx-auto;
                    }
                    .icon-container {
                        @apply w-8 h-8 rounded-2xl flex justify-center items-center mr-2;
                        background: rgba(27, 27, 27, 0.10);

                        i {
                            @apply text-xl;
                        }
                    }
                }

                .price {
                    @apply flex flex-col items-center justify-center;

                    .switch {
                        @apply text-black rounded-3xl;
                        background: rgba(222, 232, 232, 0.50);
                        box-shadow: 0px 0px 17.345px 0px rgba(157, 170, 170, 0.08) inset;
                    }
                }
            }
        }
    }
</style>
