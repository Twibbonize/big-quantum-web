<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validators: (value) =>
            [
                'primary',
                'secondary',
                'accent',
                'neutral',
                'danger',
                'link',
                'subtle',
                'connect'
            ].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validators: (value) => ['xs', 'sm', 'md', 'lg'].includes(value)
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
        circle && !block && !square && 'btn--circle',
        block && 'btn--block'
    ];
});

function handleClick(e) {
    e.preventDefault();
    emit('click');
}
</script>
<template>
    <button :class="buttonClasses" :disabled="!enabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    @apply font-semibold text-sm flex items-center justify-center relative overflow-hidden;
    border-radius: 100px;

    // sizes
    &--xs {
        @apply px-3 py-1 text-xs;
    }

    &--sm {
        padding: 8px 16px;
        @apply text-sm;
    }

    &--md {
        padding: 16px 20px;
        @apply leading-none;
    }

    &--connect {
        height: 58px;
        @apply text-black bg-white border border-stroke transition-colors duration-300 pl-1 pr-4 py-1;

        &:hover {
            @apply bg-gray-200;
        }
    }

    &:disabled {
        @apply opacity-60 cursor-default bg-light;

        &:hover {
            @include before {
                height: 0px;
                width: 0px;
            }
        }
    }

    &--block {
        @apply w-full;
    }

    // variants
    &--primary {
        @apply text-black bg-main border border-transparent;

        @include before {
            height: 0;
            width: 0;
            border-radius: 100%;
            @apply bg-black;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s var(--transition-function);
            opacity: 0.1;
        }

        &:hover {
            @include before {
                height: 20rem;
                width: 20rem;
            }
        }
    }

    &--secondary {
        @apply text-black bg-white border border-stroke transition-colors duration-300;

        @include before {
            height: 0;
            width: 0;
            border-radius: 100%;
            @apply bg-black;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s var(--transition-function);
            opacity: 0.1;
        }

        &:hover {
            @include before {
                height: 20rem;
                width: 20rem;
            }
        }
    }

    &--accent {
        @apply text-black bg-yellow;
    }

    &--neutral {
        @apply text-black bg-gray-200;

        @include before {
            height: 0;
            width: 0;
            border-radius: 100%;
            @apply bg-black;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s var(--transition-function);
            opacity: 0.1;
        }

        &:hover {
            @include before {
                height: 20rem;
                width: 20rem;
            }
        }
    }

    &--black {
        @apply text-white bg-black;
    }

    &--link {
        @apply text-black bg-transparent;

        &:hover {
            @apply underline;
        }
    }

    &--subtle {
        @apply text-black bg-transparent;

        @include before {
            height: 0;
            width: 0;
            border-radius: 100%;
            @apply bg-black;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s var(--transition-function);
            opacity: 0.1;
        }

        &:hover {
            @include before {
                height: 20rem;
                width: 20rem;
            }
        }
    }

    &--danger {
        @apply text-red-50 bg-red-500;

        @include before {
            height: 0;
            width: 0;
            border-radius: 100%;
            @apply bg-black;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s var(--transition-function);
            opacity: 0.1;
        }

        &:hover {
            @include before {
                height: 20rem;
                width: 20rem;
            }
        }
    }

    &--square,
    &--circle {
        width: 40px;
        height: 40px;
        @apply flex-shrink-0 p-0;
    }

    &.btn--xs.btn--circle,
    &.btn--xs.btn--square {
        height: 20px;
        width: 20px;
        flex-shrink: 0;
        @apply p-1;
    }

    &.btn--lg.btn--circle,
    &.btn--lg.btn--square {
        height: 52px;
        width: 52px;
    }

    &--circle {
        @apply rounded-full;
    }

    &--square {
        @apply rounded-lg;
    }
}
</style>

<style>
.btn * {
    z-index: 1;
}
</style>
