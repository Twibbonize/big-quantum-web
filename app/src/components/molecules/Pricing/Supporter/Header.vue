<template>
    <div class="supporter-background-container">
        <img class="pattern" src="/assets/img/marketings/bg-pricing-supporter.png" alt="bg">
        <img class="overlay" src="/src/assets/img/patterns/background-banner-creators.png" alt="bg">
        <div class="shape-blob"></div>
        <div class="title-container">
            <img class="premium-title" src="/assets/img/marketings/premium-black.svg" alt="supporter">
            <img class="supporter-title" src="/assets/img/marketings/premium-supporter.svg" alt="supporter">
        </div>
        <div class="background-blank"></div>
    </div>
</template>

<style lang="scss" scoped>
.supporter-background-container {
    @apply relative w-full h-full overflow-hidden aspect-video;

    .pattern {
        @apply absolute w-full;
        z-index: 2;
    }

    .overlay {
        @apply absolute h-[1200px] w-[1260px] top-0 rotate-45 -translate-x-2/3 -translate-y-1/2 opacity-50;
        filter: blur(29.675495147705078px) hue-rotate(40deg);
        z-index: 1;
    }

    .shape-blob {
        @apply absolute opacity-70 z-0 top-[10%];
        background: #46C3BD;
        filter: blur(77.16836547851562px);
        height: 900px;
        width: 1000px;
        border-radius: 50% 40% 30% 40%;
        animation:
            transform 18s ease-in-out infinite both alternate,
            movementOne 12s ease-in-out infinite both;
        left: 25%;
    }

    .title-container {
        @apply top-[200px] absolute w-full flex flex-col z-20;

        .premium-title {
            @apply lg:h-16;
        }

        .supporter-title {
            @apply w-full mt-10 px-20;
        }
    }


    .background-blank {
        @apply bg-white absolute bottom-0 h-2/6 w-full;
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