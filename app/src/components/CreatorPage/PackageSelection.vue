<script setup>
import { computed } from 'vue';
import QSwitchTwo from '@/components/atoms/QSwitchTwo.vue';
import QButton from '@/components/atoms/QButton.vue';
import PackageCard from '@/components/molecules/Pricing/PackageCard.vue';

const freeFeatures = computed(() => {
    return ['Create Unlimited Campaign', 'Easy To Share Short URL', 'Frame Twibbon'];
});

const individualFeatures = computed(() => {
    return [
        'No Watermark for All',
        'Background Twibbon',
        'Multiple Frames per Campaign',
        'Instant Download for All'
    ];
});

const businessFeatures = computed(() => {
    return [
        'No Watermark for All',
        'Background Twibbon',
        'Multiple Frames per Campaign',
        'Instant Download for All'
    ];
});
</script>

<template>
    <div class="package-selection">
        <h4 class="text-center text-3xl lg:text-6xl font-bold text-white">Your supporters await</h4>
        <p class="text-center text-base sm:text-2xl mt-8 text-white">
            Try for free, find what you need, and choose the best plan
        </p>
        <QSwitchTwo class="mt-8" />
        <div class="package">
            <PackageCard
                class="package-free"
                :is-dark="true"
                title="Free"
                description="For people who are just getting started"
                :features="freeFeatures"
            >
                <template v-slot:cta-top>
                    <QButton variant="link" class="button-free"> Sign Up </QButton>
                </template>
                <template v-slot:cta-bottom>
                    <QButton variant="link" class="button-free mt-8"> Sign Up </QButton>
                </template>
            </PackageCard>
            <PackageCard
                class="package-individual"
                :is-dark="false"
                type="Premium"
                title="Individual"
                price="$12"
                description="For people who want more out of Twibbonize"
                :features="individualFeatures"
            >
                <template v-slot:cta-top>
                    <QButton variant="primary" class="gap-2 w-full">
                        Purchase Now
                        <i class="ri-arrow-right-line"></i>
                    </QButton>
                </template>
                <template v-slot:cta-bottom>
                    <QButton variant="primary" class="gap-2 w-full mt-8">
                        Purchase Now
                        <i class="ri-arrow-right-line"></i>
                    </QButton>
                </template>
            </PackageCard>
            <PackageCard
                class="package-business"
                :is-dark="false"
                type="Premium"
                title="Business"
                price="Start from $48"
                description="For businesses who need the ultimate Twibbonize experience "
                :features="businessFeatures"
            >
                <template v-slot:cta-top>
                    <QButton variant="black" class="gap-2 w-full">
                        Purchase Now
                        <i class="ri-arrow-right-line"></i>
                    </QButton>
                </template>
                <template v-slot:cta-bottom>
                    <QButton variant="black" class="gap-2 w-full mt-8">
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
.package-selection {
    @apply xl:rounded-3xl overflow-hidden bg-black relative flex flex-col py-14 px-5 lg:py-24 sm:px-10 xl:px-20 container items-center;

    .package {
        @apply flex flex-col lg:flex-row gap-8  w-full mt-8;
        max-width: 1200px;
    }

    .package-free {
        border: 1px solid #fff;
        box-shadow: 0px 1px 3px 0px rgba(18, 20, 32, 0.14);

        h5,
        p,
        i {
            @apply text-white;
        }

        .button-free {
            @apply w-full text-white;
            background: rgba(255, 255, 255, 0.08);
        }
    }

    .package-individual {
        @apply bg-white;
    }

    .package-business {
        background: linear-gradient(166deg, #16dac1 9.91%, #169b9a 122.8%);
    }

    .bg {
        position: absolute;
        bottom: 20%;
        left: 200%;
        width: 2000px;
        max-width: 2000px;
        transform: translateX(-50%);
        animation: 8s glow infinite ease-in-out alternate;
    }

    .line {
        @apply w-full my-8;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .line-black {
        @apply w-full my-8;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .icon-container {
        @apply flex items-center justify-center rounded-full px-1 mr-2;
        height: 24px;
        width: 24px;
        background: rgba(255, 255, 255, 0.2);
    }
}

@media screen and (min-width: 640px) {
    .package-selection {
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
