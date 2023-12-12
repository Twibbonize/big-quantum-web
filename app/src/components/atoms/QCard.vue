<script setup>
const props = defineProps({
    paddings: {
        type: String,
        validators: ['padless', 'compact', 'normal'],
        default: 'normal'
    }
});
</script>

<template>
    <div :class="['card', `card--${paddings}`]">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.card {
    @apply bg-white shadow-card rounded-3xl transition-all duration-200 ease-in-out;

    &.card--normal {
        @apply p-2.5 pb-3.5;
    }

    &.card--padless {
        @apply p-0;
    }

    &.card--compact {
        @apply p-2;
    }
}
</style>
