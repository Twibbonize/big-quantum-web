<script setup>
defineProps({
    variant: {
        type: String,
        default: 'netral',
        validators: (value) => ['success', 'warning', 'danger', 'netral'].includes(value)
    }
});
</script>

<template>
    <div :class="['badge', `badge--${variant}`]">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.badge {
    padding: 6px 12px;
    border-radius: 4px;
    @apply text-xs font-medium border border-transparent;

    &.badge--success {
        @apply bg-green-100 text-green-600;
    }
    &.badge--secondary {
        @apply bg-white text-black border-stroke;
    }
    &.badge--warning {
        @apply bg-orange-50 text-orange-400;
    }
    &.badge--danger {
        @apply bg-red-100 text-red-500;
    }
    &.badge--netral {
        @apply bg-black/10 text-black;
    }
}
</style>
