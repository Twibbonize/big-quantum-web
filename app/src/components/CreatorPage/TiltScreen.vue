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
    <div class="tilt-screen container mx-auto px-5">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-3xl	sm:text-6xl font-bold">
                Get it ready anytime <br />with our built in Twibbon Editor
            </h2>
            <h4 class="text-center text-base sm:text-2xl mt-8">
                Effortless mobile-friendly editor with hundreds of pre-made templates for every
                occasions
            </h4>
        </div>
        <div class="flex justify-center container">
            <div
                id="tiltImage"
                ref="tiltImage"
                class="wrapper relative flex items-center justify-center"
            >
                <img
                    class="image"
                    src="/src/assets/img/campaigns/frame-editor.png"
                    alt=""
                />
                <img
                    class="frame-1"
                    src="/src/assets/img/campaigns/frame-1.png"
                    alt=""
                />
                <img
                    class="frame-2"
                    src="/src/assets/img/campaigns/frame-2.png"
                    alt=""
                />
                <img
                    class="frame-3"
                    src="/src/assets/img/campaigns/frame-3.png"
                    alt=""
                />
                <img
                    class="frame-4"
                    src="/src/assets/img/campaigns/frame-4.png"
                    alt=""
                />
                <img
                    class="frame-5"
                    src="/src/assets/img/campaigns/frame-5.png"
                    alt=""
                />
                <img
                    class="frame-6"
                    src="/src/assets/img/campaigns/frame-6.png"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tilt-screen {
    .wrapper {
        margin-top: 100px;
        margin-bottom: 140px;
        width: 250px;
        height: 160px;
        transform-style: preserve-3d;
        transform: perspective(1000px);
    }

    .image {
        width: 100%;
        transform-style: preserve-3d;
        transform: perspective(1000px);
    }
    .frame-1 {
        position: absolute;
        height: 80px;
        width: 80px;
        top: 5px;
        left: -10px;
        z-index: 2;
        transform: translateZ(100px);
    }
    .frame-2 {
        position: absolute;
        width: 55px;
        height: 55px;
        right: 24px;
        bottom: -28px;
        transform: translateZ(100px);
    }
    .frame-3 {
        position: absolute;
        width: 66px;
        height: 66px;
        left: 39px;
        top: -20px;
        z-index: 1;
        transform: translateZ(70px);
    }
    .frame-4 {
        position: absolute;
        width: 80px;
        height: 80px;
        right: -30px;
        bottom: -10px;
        transform: translateZ(100px);
    }
    .frame-5 {
        position: absolute;
        width: 45px;
        height: 45px;
        right: -5px;
        top: -5px;
        transform: translateZ(100px);
    }
    .frame-6 {
        position: absolute;
        width: 60px;
        height: 60px;
        left: -10px;
        bottom: -20px;
        transform: translateZ(100px);
    }
}

@media screen and (min-width: 640px) {
    .tilt-screen {
        .wrapper {
            margin-top: 260px;
            margin-bottom: 290px;
            width: 1000px;
            height: 567px;
            transform-style: preserve-3d;
            transform: perspective(1000px);
        }

        .image {
            width: 100%;
            transform-style: preserve-3d;
            transform: perspective(1000px);
        }
        .frame-1 {
            position: absolute;
            height: 267px;
            width: 267px;
            top: -10px;
            left: -140px;
            z-index: 2;
            transform: translateZ(100px);
        }
        .frame-2 {
            position: absolute;
            width: 177px;
            height: 177px;
            right: 118px;
            bottom: -83px;
            transform: translateZ(100px);
        }
        .frame-3 {
            position: absolute;
            width: 207px;
            height: 207px;
            left: 39px;
            top: -130px;
            z-index: 1;
            transform: translateZ(70px);
        }
        .frame-4 {
            position: absolute;
            width: 257px;
            height: 257px;
            right: -77px;
            bottom: -28px;
            transform: translateZ(100px);
        }
        .frame-5 {
            position: absolute;
            width: 140px;
            height: 140px;
            right: -33px;
            top: -60px;
            transform: translateZ(100px);
        }
        .frame-6 {
            position: absolute;
            width: 189px;
            height: 189px;
            left: -30px;
            bottom: -50px;
            transform: translateZ(100px);
        }
        }
}
</style>
