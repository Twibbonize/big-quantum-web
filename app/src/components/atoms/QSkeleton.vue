<template>
    <div
        :class="[
            'skeleton-loader',
            { 'skeleton-loader--rounded': rounded, 'skeleton-loader--square': square }
        ]"
        :style="{ width, height }"
    ></div>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '1em'
        },
        rounded: {
            type: Boolean,
            default: false
        },
        square: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
.skeleton-loader {
    @apply bg-light;
    /* Placeholder color with higher contrast */
    background-image: linear-gradient(90deg, #dee8e8 25%, #f0f0f0 50%, #dee8e8 75%);
    /* Placeholder color */
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}

.skeleton-loader--rounded {
    @apply rounded-lg;
}

.skeleton-loader--square {
    @apply aspect-square;
    height: auto !important;
}

@keyframes shimmer {
    0% {
        background-position: 100% 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>
