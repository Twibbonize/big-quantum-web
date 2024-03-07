<script setup>
import { computed } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

const baseSize = computed(() => {
    if (breakpoints.greater('lg')) return 100;
    if (breakpoints.greater('sm')) return 84;
    return 72;
});

const vectorCreators = [
    {
        image: '/assets/img/marketings/vector-creators-2.png',
        isReverse: true,
    },
    {
        image: '/assets/img/marketings/vector-creators-2.png',
        isReverse: false,
    },
    {
        image: '/assets/img/marketings/vector-creators-3.png',
        isReverse: true,
    },
    {
        image: '/assets/img/marketings/vector-creators-4.png',
        isReverse: false,
    },

    {
        image: '/assets/img/marketings/vector-creators-5.png',
        isReverse: true,
    },
];
</script>
<template>
    <div class="bg-creators-slider" :style="`--base-size: ${baseSize}px`">
        <div
            v-for="{ image, isReverse } in vectorCreators"
            class="bg-creators-slide-track"
            :class="{ 'reverse': isReverse }"
        >
            <div v-for="i in 32" class="bg-creators-slide" :id="i">
                <img :src="image" class="bg-creators-image" alt="bg-creators" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes scroll {
	0% {
        transform: translateX(0);
    }
	100% { transform: translateX(calc(-100px * 16))}
}

@keyframes scrollReverse {
	0% {
        transform: translateX(calc(-100px * 16));
    }
	100% { transform: translateX(0)}
}


.bg-creators-slider {
    @apply flex flex-col;
	height: calc(5.8 * var(--base-size));
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 100%;
    gap: calc(0.2 *var(--base-size));
	
	.bg-creators-slide-track {
		animation: scroll 40s linear infinite;
		display: flex;
		width: calc((1.2 * var(--base-size)) * 32);
	}

    .bg-creators-slide-track.reverse {
		animation: scrollReverse 40s linear infinite;
	}
	
	.bg-creators-slide {
		height: var(--base-size);
		width: var(--base-size);
        margin-right: calc(0.2 *var(--base-size));;
	}
}
</style>


