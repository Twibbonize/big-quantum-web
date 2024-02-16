<script setup>
import { onMounted, ref } from 'vue';
import tilt from 'vanilla-tilt';

const tiltObject = ref(null);

onMounted(() => {
    tilt.init(document.getElementById('tiltImage'), {
        max: 10,
        speed: 400,
        startX: 0,
        startY: 10,
        glare: true,
        'max-glare': 0.8,
        perspective: 1000,
        reverse: true,
        'reset-to-start': false,
        'full-page-listening': true
    });
});
</script>

<template>
    <div class="tilt-screen container mx-auto px-5 sm:px-10 xl:px-0">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-3xl lg:text-6xl font-bold">
                Get it ready anytime <br />with our built in Twibbon Editor
            </h2>
            <h4 class="text-center text-base sm:text-2xl mt-8">
                Effortless mobile-friendly editor with hundreds of pre-made templates for every
                occasions
            </h4>
        </div>
        <div class="flex justify-center container my-20 sm:my-40">
            <div
                id="tiltImage"
                ref="tiltImage"
                class="wrapper relative flex items-center justify-center"
            >
                <img class="image" src="/src/assets/img/campaigns/frame-editor.png" alt="" />
                <img class="frame-1" src="/src/assets/img/campaigns/frame-1.png" alt="" />
                <img class="frame-2" src="/src/assets/img/campaigns/frame-2.png" alt="" />
                <img class="frame-3" src="/src/assets/img/campaigns/frame-3.png" alt="" />
                <img class="frame-4" src="/src/assets/img/campaigns/frame-4.png" alt="" />
                <img class="frame-5" src="/src/assets/img/campaigns/frame-5.png" alt="" />
                <img class="frame-6" src="/src/assets/img/campaigns/frame-6.png" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tilt-screen {
    .wrapper {
        width: 60% !important;
        transform-style: preserve-3d;
        transform: perspective(1000px);
    }

    .image {
        @apply w-full;
        transform-style: preserve-3d;
        transform: perspective(1000px);
    }
    .frame-bg {
        border-radius: 23px;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4.675px 23.376px 0px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.844026565551758px);
    }
    .frame-1 {
        @apply absolute aspect-square top-0 left-0 z-20;
        width: 30%;
        transform: translate3d(-58%, 0%, 100px);
    }
    .frame-2 {
        @apply absolute aspect-square top-0 left-0 z-10;
        width: 20%;
        transform: translate3d(30%, -55%, 100px);
    }
    .frame-3 {
        @apply absolute aspect-square top-0 left-0 z-10;
        width: 20%;
        transform: translate3d(-40%, 200%, 100px);
    }
    .frame-4 {
        @apply absolute aspect-square top-0 left-0 z-10;
        width: 14%;
        transform: translate3d(640%, -40%, 100px);
    }
    .frame-5 {
        @apply absolute aspect-square top-0 left-0 z-20;
        width: 35%;
        transform: translate3d(250%, 70%, 100px);
    }
    .frame-6 {
        @apply absolute aspect-square top-0 left-0 z-10;
        width: 18%;
        transform: translate3d(450%, 270%, 100px);
    }
}

@media screen and (min-width: 640px) {
    .tilt-screen {
        .wrapper {
            transform-style: preserve-3d;
            transform: perspective(1000px);
        }
    }
}
</style>
