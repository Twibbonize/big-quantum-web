<script setup>
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';

const supporterTitle = ref(null);

const { height } = useElementSize(supporterTitle);
</script>

<template>
    <div class="supporter-background-container">
        <img class="pattern" src="/assets/img/marketings/bg-pricing-supporter.png" alt="bg">
        <img class="overlay" src="/src/assets/img/patterns/background-banner-creators.png" alt="bg">
        <div class="shape-blob"></div>
        <div class="title-container">
            <img class="premium-title" src="/assets/img/marketings/premium-black.svg" alt="supporter">
            <img ref="supporterTitle" class="supporter-title" src="/assets/img/marketings/premium-supporter.svg" alt="supporter">
        </div>
        <div class="background-blank" :style="{ height: `${height/2}px` }"></div>
    </div>
</template>

<style lang="scss" scoped>
.supporter-background-container {
    @apply relative w-full h-full overflow-hidden lg:aspect-video;

    .pattern {
        @apply absolute w-full;
        z-index: 2;
    }

    .overlay {
        @apply absolute h-[1200px] w-[1260px] top-0 rotate-45 -translate-x-2/3 -translate-y-1/2 opacity-50;
        filter: blur(29px) hue-rotate(40deg);
        z-index: 1;
    }

    .shape-blob {
        @apply absolute opacity-70 z-0 top-[10%] h-[300px] w-[400px] lg:h-[900px] lg:w-[1000px];
        background: #46C3BD;
        filter: blur(77px);
        border-radius: 50% 40% 30% 40%;
        animation:
            transform 18s ease-in-out infinite both alternate,
            movementOne 12s ease-in-out infinite both;
        left: 25%;
    }

    .title-container {
        @apply mt-[200px] w-full flex flex-col z-20;

        .premium-title {
            @apply h-8 md:h-12 lg:h-16 z-20;
        }

        .supporter-title {
            @apply w-full mt-2 sm:mt-4 md:mt-6 lg:mt-9 px-5 sm:px-14 lg:px-20 z-20;
        }
    }


    .background-blank {
        @apply bg-white absolute bottom-0 w-full;
        z-index: 3;
    }

    @keyframes transform {
        0%,
        100% {
            border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%;
        }
        20% {
            border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%;
        }
        40% {
            border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%;
        }
        60% {
            border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%;
        }
        80% {
            border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%;
        }
    }

    @keyframes movementOne {
        0%,
        100% {
            transform: none;
        }
        50% {
            transform: translate(50%, 20%) rotateY(10deg) scale(1);
        }
    }
}
</style>