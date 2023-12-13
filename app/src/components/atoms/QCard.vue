<script setup>
const props = defineProps({
    paddings: {
        type: String,
        validators: ['padless', 'compact', 'normal'],
        default: 'normal'
    },
    rounded: {
        type: Boolean,
        default: true
    },
    shadow: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <div
        :class="['card', `card--${paddings}`, shadow && 'card--shadow', rounded && 'card--rounded']"
    >
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.card {
    @apply bg-white transition-all duration-200 ease-in-out;

    &.card--normal {
        @apply p-2.5 pb-3.5;
    }

    &.card--padless {
        @apply p-0;
    }

    &.card--compact {
        @apply p-2;
    }

    &.card--rounded {
        @apply rounded-3xl;
    }

    &.card--shadow {
        @apply shadow-card;
    }
}
</style>
