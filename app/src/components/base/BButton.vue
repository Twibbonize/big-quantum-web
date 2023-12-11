<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validators: (value) => ['primary', 'secondary', 'accent', 'neutral', 'link'].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validators: ['sm', 'md', 'lg']
    },
    square: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: false
    },
    enabled: {
        type: Boolean,
        default: true
    }
});
const emit = defineEmits(['click']);

const buttonClasses = computed(() => {
    const { size, variant, circle, square, block } = props;
    return [
        'btn',
        `btn--${size}`,
        `btn--${variant}`,
        square && !circle && 'btn--square',
        circle && !block && !square && 'btn--circle'
    ];
});
</script>
<template>
    <button :class="buttonClasses" :disabled="!enabled">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    @apply font-bold text-sm flex items-center justify-center;
    border-radius: 100px;

    @include before {
        height: 0;
        width: 0;
        border-radius: 100%;
        @apply bg-black;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transition: all 0.3s var(--transition-function);
        opacity: 0.1;
    }

    &:hover {
        color: var(--color-white);

        @include before {
            height: 20rem;
            width: 20rem;
        }
    }

    // sizes
    &--sm {
    }

    &--md {
        padding: 16px 20px;
    }

    &--lg {
    }

    // variants
    &--primary {
        @apply text-black bg-main;
    }

    &--secondary {
        @apply text-black bg-white shadow-card;
    }

    &--accent {
        @apply text-black bg-yellow;
    }

    &--neutral {
        @apply text-black bg-gray-200;
    }

    &--link {
        @apply text-black bg-transparent;

        &:hover {
            @apply underline;
        }
    }

    &--circle {
        width: 40px;
        height: 40px;
    }
}
</style>
