<script setup>
defineProps({
    iconClass: {
        type: String
    },
    title: {
        type: String
    },
    value: {
        type: String
    }
});
</script>

<template>
    <div class="meta">
        <div class="meta__icon">
            <slot v-if="$slots.icon" name="icon"></slot>
            <i v-else :class="iconClass"></i>
        </div>
        <div class="meta__copy">
            <h4 class="meta__title">{{ title }}</h4>
            <span class="meta__value">{{ value }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.meta {
    @apply flex items-center space-x-1;

    @include md_screen {
        @apply space-x-2;
    }

    .meta__icon i,
    .meta__icon svg {
        @apply text-black;
    }

    .meta__copy {
        @apply h-full;
    }

    .meta__title {
        @apply font-medium leading-none;
        font-size: 12px;
    }

    .meta__value {
        @apply text-sm text-black/50 font-medium w-full;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @include sm {
            @apply text-xs;
        }
    }
}
</style>
