<script setup>
import { onMounted, computed } from 'vue';
import QSlider from '@/components/atoms/QSlider.vue';

const props = defineProps({
    width: Number,
    height: Number,
})

const slidesPerView = computed(() => {
    if (props.width >= 640) return 3.5;
    return 1.5;
});

const stories = [
    {
        image: 'https://placehold.co/600x400',
        title: 'The 2024 State of the Website',
        description:
            'Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024'
    },
    {
        image: 'https://placehold.co/600x400',
        title: 'The 2024 State of the Website',
        description:
            'Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024'
    },
    {
        image: 'https://placehold.co/600x400',
        title: 'The 2024 State of the Website',
        description:
            'Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024'
    },
    {
        image: 'https://placehold.co/600x400',
        title: 'The 2024 State of the Website',
        description:
            'Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024'
    }
];

</script>

<template>
    <div class="creator-stories py-24 flex flex-col items-center">
        <h4 class="text-center text-3xl	sm:text-6xl font-bold">Stories from our Creators</h4>
        <p class="text-center text-base sm:text-2xl mt-8">Unique campaigns brought to life with Twibbonize</p>
        <div class="container mx-auto">
            <QSlider
                class="slider mt-16 w-100"
                :slides-per-view="slidesPerView"
                space-between="32"
            >
                <swiper-slide
                    v-for="({ image, title, description }, i) in stories"
                    :key="`stories-${i}`"
                    class="card"
                >
                    <img class="w-100" :src="image" :alt="title" />
                    <h5>{{ title }}</h5>
                    <p>{{ description }}</p>

                    <div class="heading-section flex items-end mt-5">
                        <RouterLink class="flex items-center text-black" to="/explore">
                            View All<i class="ri-arrow-right-line"></i>
                        </RouterLink>
                    </div>
                </swiper-slide>
            </QSlider>
        </div>
    </div>
</template>

<style lang="scss">
.creator-stories {
    background: #dee8e8;

    .card {
        @apply p-4 sm:p-8 first:ml-8 first:sm:ml-0 rounded-2xl bg-white;
        border: 1px solid rgba(27, 27, 27, 0.1);

        img {
            @apply rounded-xl;
        }

        h5 {
            @apply text-left mt-8 text-3xl font-bold leading-7;
            letter-spacing: -1.12px;
        }

        p {
            @apply text-left mt-4 text-lg font-medium;
            line-height: 115%; /* 20.7px */
        }
    }
}
</style>
