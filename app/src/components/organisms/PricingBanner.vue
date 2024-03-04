<script setup>
</script>

<template>
    <div class="banner-pricing tp-rated-area mx-auto overflow-hidden relative">
        <div ref="bgHero" class="bg relative py-14" :class="{ bottom: scrollPosition > 300 }">
            <div class="text flex flex-col justify-center items-center h-full">
                <h1 class="title">Pricing</h1>
                <h2 class="subtitle">Find the right Premium plan for your need</h2>
            </div>
            <img
                class="blob-bg"
                src="/src/assets/img/patterns/background-banner-creators.png"
                alt=""
            />
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

.banner-pricing {
    @apply h-[600px] sm:h-[720px] lg:h-[820px] xl:h-[834px];
    background: #202124;

    .bg {
        @apply h-[600px] sm:h-[720px] lg:h-[820px] xl:h-[834px] max-w-[1100px] mx-auto;
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
</style>
