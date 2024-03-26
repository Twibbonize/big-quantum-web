<script setup>
import { computed } from 'vue';

const props = defineProps({
    as: {
        type: [String, Object],
        default: 'button'
    },
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
                'action',
                'subtle',
                'connect',
                'facebook',
                'twitter',
                'pinterest'
            ].includes(value)
    },
    outlined: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'md',
        validators: (value) => ['xs', 'sm', 'md', 'lg', 'auto'].includes(value)
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
    },
    loading: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(['click']);

const buttonClasses = computed(() => {
    const { size, variant, circle, square, block, outlined, loading } = props;
    return [
        'btn',
        `btn--${size}`,
        `btn--${variant}`,
        outlined && 'btn--outlined',
        square && !circle && 'btn--square',
        circle && !block && !square && 'btn--circle',
        block && 'btn--block',
        loading && 'btn--loading'
    ];
});

function handleClick(e) {
    e.preventDefault();
    emit('click', e);
}
</script>
<template>
    <button :class="buttonClasses" :disabled="!enabled" @click="handleClick">
        <slot v-if="!loading"></slot>
        <span v-else class="btn__loader"></span>
    </button>
</template>

<style scoped lang="scss">
.btn {
    @apply font-semibold text-sm flex items-center justify-center relative overflow-hidden transition-colors duration-200;
    border-radius: 100px;

    .btn__loader {
        border-radius: 50%;
        animation: spin 1s linear infinite;
        border: 2.5px solid #16dac1;
        border-top: 2.5px solid transparent;
        width: 20px;
        height: 20px;
    }

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
        @apply text-black/30 cursor-default bg-gray-100;

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

        &.btn--outlined {
            @apply bg-white text-main border-main;
        }

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
                width: 100%;
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
                width: 100%;
            }
        }

        &:disabled {
            @apply cursor-default border-transparent;
        }
    }

    &--light {
        @apply text-black bg-light border border-stroke transition-colors duration-300;

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
                width: 100%;
            }
        }
    }

    &--accent {
        @apply text-black bg-yellow border border-transparent;

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

    &--neutral {
        @apply text-black bg-gray-150;

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

        &:hover {
            @apply bg-black/80;
        }
    }

    &--white {
        @apply text-black bg-white;

        &:hover {
            @apply bg-black/80;
        }
    }

    &--link {
        @apply text-black bg-transparent;

        &:hover {
            @apply underline;
        }
    }

    &--action {
        @apply text-white/80 bg-transparent cursor-pointer;

        &:hover {
            @apply text-white;
        }
    }

    &--subtle {
        @apply text-black bg-transparent border border-transparent;

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

                @include md_screen {
                    height: 30rem;
                    width: 30rem;
                }
            }
        }

        &:disabled {
            @apply cursor-default bg-transparent;
        }
    }

    &--danger {
        @apply text-red-50 bg-red-500 border border-transparent;

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

        &.btn--outlined {
            @apply text-red-500 bg-white border-red-500;

            @include before {
                height: 0;
                width: 0;
                border-radius: 100%;
                @apply bg-red-500;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s var(--transition-function);
                opacity: 1;
            }

            &:hover {
                @apply text-white;

                @include before {
                    height: 20rem;
                    width: 20rem;
                }
            }
        }
    }

    &--square,
    &--circle {
        width: 40px;
        height: 40px;
        @apply flex-shrink-0 p-0;
    }

    &.btn--xs.btn--square {
        width: 32px;
        height: 32px;
    }

    &--facebook {
        @apply text-white transition-opacity duration-150;

        &:hover {
            @apply opacity-80;
        }
    }

    &--twitter {
        background-color: #000000;
        @apply text-white transition-opacity duration-150;

        &:hover {
            @apply opacity-80;
        }
    }

    &.btn--xs.btn--circle,
    &.btn--xs.btn--square {
        height: 20px;
        width: 20px;
        flex-shrink: 0;
        @apply p-1;
    }

    &.btn--sm.btn--circle,
    &.btn--sm.btn--square {
        height: 32px;
        width: 32px;
    }

    &.btn--lg.btn--circle,
    &.btn--lg.btn--square {
        height: 52px;
        width: 52px;
    }

    &.btn--auto.btn--circle {
        width: auto;
        height: 100%;
        aspect-ratio: 1/1;
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
