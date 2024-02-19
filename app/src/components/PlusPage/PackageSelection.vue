<script setup>
import { computed } from 'vue';
import QSwitchTwo from '@/components/atoms/QSwitchTwo.vue';
import QButton from '@/components/atoms/QButton.vue';
import PackageCard from '@/components/molecules/Pricing/PackageCard.vue';

const freeFeatures = computed(() => {
    return ['Create Unlimited Campaign', 'Easy To Share Short URL', 'Frame Twibbon'];
});

const basicFeatures = computed(() => {
    return ['No Watermark', 'No Ads'];
});
</script>

<template>
    <div class="package-selection-plus flex flex-col items-center">
        <h4 class="text-center text-3xl lg:text-6xl font-bold text-black">Get on the next level</h4>
        <p class="text-center text-base sm:text-2xl mt-8 text-black">
            Upgrade to Premium plan and enhance your Twibbonize experience
        </p>
        <QSwitchTwo class="mt-8" />
        <div class="package">
            <PackageCard
                class="package-free"
                :is-dark="false"
                title="Free"
                description="For people who are just getting started"
                :features="freeFeatures"
            >
                <template v-slot:cta-top>
                    <QButton variant="link" class="button-free">Sign Up</QButton>
                </template>
                <template v-slot:cta-bottom>
                    <QButton variant="link" class="button-free"> Sign Up </QButton>
                </template>
            </PackageCard>
            <PackageCard
                class="package-basic"
                :is-dark="false"
                :is-premium="true"
                type="Premium"
                title="Basic"
                price="$4.99"
                description="For people who want a little bit more out of Twibbonize"
                :features="basicFeatures"
            >
                <template v-slot:cta-top>
                    <QButton variant="primary" class="w-full gap-2">
                        Purchase Now
                        <i class="ri-arrow-right-line"></i>
                    </QButton>
                </template>
                <template v-slot:cta-bottom>
                    <QButton variant="primary" class="w-full gap-2 mt-8">
                        Purchase Now
                        <i class="ri-arrow-right-line"></i>
                    </QButton>
                </template>
            </PackageCard>
        </div>
        <!-- Background -->
        <img class="bg" src="/src/assets/img/patterns/background-banner-creators.png" alt="" />
    </div>
</template>

<style lang="scss">
.package-selection-plus {
    @apply sm:rounded-3xl relative overflow-hidden bg-main relative
        py-14 sm:py-36 px-5 sm:px-20 container items-center;

    .package {
        @apply flex flex-col justify-center lg:flex-row gap-8  w-full mt-8;
        max-width: 1200px;
    }

    .package-free {
        @apply bg-main;
        border: 1px solid var(--color-black);
        box-shadow: 0px 1px 3px 0px rgba(18, 20, 32, 0.14);

        .button-free {
            @apply w-full text-black bg-white font-bold;
        }
    }

    .package-basic {
        @apply bg-white;
    }

    .bg {
        position: absolute;
        bottom: 0;
        left: 200%;
        width: 2000px;
        max-width: 2000px;
        transform: translateX(-50%);
        animation: 8s glow infinite ease-in-out alternate;
        z-index: 0;
    }
}

@media screen and (min-width: 640px) {
    .package-selection-plus {
        .bg {
            position: absolute;
            bottom: -40%;
            left: 50%;
            max-width: 100%;
            transform: translateX(-50%);
            animation: 8s glow infinite ease-in-out alternate;
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
