<script setup>
import { computed } from 'vue';

const cards = computed(() => {
    return [
        {
            title: 'Ad-Free Experience',
            description:
                'Enjoy uninterrupted experience with no ads on Twibbonize. Get ready to embrace a cleaner, more user-friendly version of Twibbonize',
            image: 'feature-ad-free.png'
        },
        {
            title: 'No Watermark',
            description:
                'Delight in your uniquely pure and personalized twibbon, free from any intrusive watermarks',
            image: 'feature-no-watermark.png'
        }
    ];
});
</script>

<template>
    <div class="plus-feature">
        <div class="container flex flex-col px-5 py-14">
            <h2 class="title">What you will get from <span>plus</span></h2>
            <p class="description">
                Experience an enhanced Twibbonize experience with Premium Basic plan
            </p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 mt-10 sm:mt-14">
                <div class="card" v-for="(card, i) in cards" :key="`feature-${i}`">
                    <h4 class="card-title">{{ card.title }}</h4>
                    <p class="card-description">
                        {{ card.description }}
                    </p>
                    <img
                        class="card-image"
                        :src="`/assets/img/campaigns/${card.image}`"
                        :alt="card.title"
                    />
                    <div class="card-gradient"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.plus-feature {
    @apply bg-light;

    .title {
        @apply text-3xl sm:text-6xl font-bold text-center;

        span {
            @apply text-4xl sm:text-7xl font-serif underline;
        }
    }

    .description {
        @apply font-medium text-center mt-6;
    }

    .card {
        @apply rounded-3xl p-6 sm:p-10 relative bg-white overflow-hidden;
        border: 1px solid rgba(27, 27, 27, 0.1);

        .card-title {
            @apply text-xl sm:text-3xl font-bold;
        }

        .card-description {
            @apply text-sm sm:text-base mt-4;
        }

        .card-gradient {
            @apply absolute w-full;
            left: 0;
            bottom: 0;
            height: 150px;
            background: linear-gradient(331deg, #fff 3.18%, rgba(255, 255, 255, 0) 56.81%);
            z-index: 10;
        }

        .card-image {
            @apply mt-10 sm:mt-9 float-right max-h-[210px] sm:max-h-[220px] lg:max-h-[230px] xl:max-h-[270px];
        }
    }
}
</style>
