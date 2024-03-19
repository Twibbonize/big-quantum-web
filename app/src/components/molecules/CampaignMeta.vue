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
    },
    hideTitle: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div :class="['meta', hideTitle && 'meta--no-title']">
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
    @apply flex items-center;

    @include md_screen {
        @apply space-x-2;
    }

    .meta__icon i,
    .meta__icon svg {
        @apply text-black;
    }

    .meta__copy {
        @apply h-full;
        margin-left: 6px;
    }

    .meta__title {
        @apply font-medium leading-none;
        font-size: 11px;
    }

    &.meta--no-title .meta__title {
        @apply hidden;
    }

    .meta__value {
        @apply text-black/50 font-medium leading-none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
    }
}
</style>
