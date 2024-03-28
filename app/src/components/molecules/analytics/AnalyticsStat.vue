<script setup>
defineProps({
    active: {
        type: Boolean,
        default: false
    },
    value: {
        type: [Number, String],
        default: 0
    }
});
</script>

<template>
    <div :class="['stat', active && 'stat--active']">
        <div class="stat__icon">
            <slot name="icon"></slot>
        </div>
        <div class="stat__title">
            <div class="stat__title-text">
                <slot></slot>
            </div>
            <button class="stat__title-info">
                <i class="ri-information-line"></i>
            </button>
        </div>

        <div class="stat__value">
            {{ value }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.stat {
    @apply flex flex-col items-start transition-all duration-200 cursor-pointer;
    width: 100px;

    .stat__icon {
        @apply w-8 h-8 rounded-full flex items-center justify-center;
    }

    .stat__title {
        @apply opacity-30 text-content flex items-center;

        .stat__title-text {
            @apply font-medium;

            font-size: 0.7rem;

            @include md_screen {
                font-size: 0.9rem;
            }
        }

        .stat__title-info {
            @apply ml-1;
        }
    }

    .stat__value {
        @apply opacity-30 text-xl font-bold;
    }

    // active state
    &.stat--active,
    &:hover {
        .stat__title,
        .stat__value {
            @apply opacity-100;
        }
    }
}
</style>
