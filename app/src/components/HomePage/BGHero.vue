<script setup>
import { useWindowSize, useWindowScroll } from '@vueuse/core';

const { width, height } = useWindowSize();
const { y } = useWindowScroll();
</script>

<template>
    <div class="bg-hero relative" :class="{ bottom: y > 300 }">
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

    &.bottom {
        &::before {
            background: var(--color-white) !important;
        }
    }
    &::before {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        z-index: -1;
        -moz-pointer-events: none;
        -webkit-pointer-events: none;
        -ms-pointer-events: none;
        pointer-events: none;
        transform: scale(1);
        background-attachment: scroll;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        background: #16dac1;
    }

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
        background-image: linear-gradient(
            to bottom,
            #16dac1ff,
            #16dac1ff,
            #16dac1ff,
            #16dac1ff,
            #ffffff00,
            #ffffff00
        );
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
            width: 2954px;
            height: 2374px;
            position: absolute;
            left: 0;
            bottom: -150%;
            background-position: right bottom;
            background-size: 4000px 2000px;
            filter: blur(15.4px) grayscale(100%);
            mix-blend-mode: darken;
            background-repeat: no-repeat;
            animation: 8s move infinite ease-in-out alternate;
            opacity: 0.3;
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
