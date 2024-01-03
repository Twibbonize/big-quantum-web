<script setup>
defineProps({
    alignment: {
        type: String,
        validators: (value) => ['start', 'center', 'end'].includes(value),
        default: 'start'
    }
});
</script>

<template>
    <div :class="['separator', `separator--${alignment}`]">
        <div class="separator__line"></div>
        <div class="separator__text">
            <slot />
        </div>
        <div class="separator__line"></div>
    </div>
</template>

<style scoped lang="scss">
.separator {
    @apply flex items-center space-x-3 w-full;

    &--start &__line:first-of-type {
        display: none;
    }

    &--end &__line:last-of-type {
        display: none;
    }

    &__text {
        @apply text-sm text-content;
    }

    &__line {
        @apply flex-grow bg-stroke;
        height: 1px;
        width: 0;
        transform: translateY(2px);
    }
}
</style>
