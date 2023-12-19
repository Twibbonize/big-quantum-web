<script setup>
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();
</script>

<template>
    <div class="bg-hero relative">
        <slot></slot>
        <img class="pattern-left z-0" src="/src/assets/img/patterns/hero-left-bottom.png" alt="" />
        <img class="pattern-right z-0" src="/src/assets/img/patterns/hero-right-top.png" alt="" />
        <div v-if="width < 640" class="pattern-gradient"></div>
        <img
            v-else
            class="pattern-center z-0"
            src="/src/assets/img/patterns/hero-texture.png"
            alt=""
        />
    </div>
</template>

<style lang="scss">
.bg-hero {
    overflow: hidden;
    background: #16dac1;

    .pattern-left {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
    }

    .pattern-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
    }

    .pattern-gradient {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, #16dac1ff, #16dac1ff, #ffffff00, #ffffff00);
    }
}

@media screen and (min-width: 640px) {
    .bg-hero {
        overflow: hidden;
        background: #16dac1;

        .pattern-left {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 30%;
        }

        .pattern-right {
            position: absolute;
            top: 0;
            right: 0;
            width: 30%;
        }

        .pattern-center {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            bottom: -200px;
            background-position: right bottom;
            background-size: 1900px 1000px;
            background: url('../../assets/img/patterns/background-banner-creators.png');
            filter: blur(15.4px) grayscale(100%);
            mix-blend-mode: darken;
            background-repeat: no-repeat;
            animation: 8s move infinite ease-in-out alternate;
            opacity: 0.5;
        }
    }
}

@keyframes move {
    from {
        transform: scale(1) rotate(0deg);
    }
    to {
        transform: scale(1.2) rotate(30deg);
    }
}
</style>
