<script setup>
import { computed, ref, watch } from 'vue';
import { useMotionProperties, useSpring } from '@vueuse/motion';
import { useDrag } from '@vueuse/gesture';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    isStatic: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        default: 'center',
        validators: (value) => ['top', 'center', 'bottom', 'screen'].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validators: (value) => ['md', 'lg'].includes(value)
    },
    minHeight: {
        type: Number
    },
    closeBtn: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);
const dialogContentEl = ref(null);

const { motionProperties } = useMotionProperties(dialogContentEl, {
    cursor: 'default',
    x: 0,
    y: 0
});
const { set } = useSpring(motionProperties);
// const { push } = useMotionTransitions(motionProperties);

const dialogClasses = computed(() => {
    const { position, size, closeBtn } = props;
    return ['dialog', `dialog--${position}`, `dialog--${size}`, closeBtn && 'dialog--has-close'];
});

const handleClose = () => {
    emit('close');

    setTimeout(() => {
        set({ x: 0, y: 0, cursor: 'default' });
    }, 500);
};

const dragHandler = ({ movement: [_x, y], dragging }) => {
    if (props.position !== 'bottom') {
        return;
    }

    if (!dragging) {
        if (y >= dialogContentEl.value.clientHeight / 2) {
            handleClose();
            return;
        }

        set({ x: 0, y: 0, cursor: 'default' });
        return;
    } else {
        if (y < 0) return;

        set({
            cursor: 'default',
            y
        });
    }
};

useDrag(dragHandler, {
    domTarget: dialogContentEl,
    filterTaps: true,
    cursor: 'default'
});

onClickOutside(dialogContentEl, handleClose);

watch(
    () => props.show,
    (newValue) => {
        if (newValue) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
);
</script>

<template>
    <div :class="dialogClasses">
        <Transition>
            <div v-show="show" class="dialog__overlay" />
        </Transition>

        <Transition name="slide-up">
            <div v-show="show" class="dialog__wrapper">
                <div class="dialog__close-wrapper">
                    <button class="dialog__close-btn" @click="$emit('close')">
                        <i class="ri ri-close-line ri-lg"></i>
                    </button>
                </div>
                <div ref="dialogContentEl" class="dialog__content">
                    <div class="dialog__drag-handler">
                        <span class="dialog__drag-handler__thumb"></span>
                    </div>

                    <div v-if="$slots.header" class="dialog__header">
                        <slot name="header"></slot>
                    </div>
                    <div class="dialog__body">
                        <slot name="body"></slot>
                    </div>
                    <div v-if="$slots.footer" class="dialog__footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

@keyframes slide-up {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0%);
    }
}

.slide-up-enter-active {
    animation: slide-up 0.5s ease-out;
}

.slide-up-leave-active {
    animation: slide-up 0.5s reverse ease-out;
}

.dialog {
    @apply relative;
    z-index: 65;

    .dialog__overlay {
        @apply fixed inset-0 bg-black/60;
        z-index: 66;
        pointer-events: none;
    }

    .dialog__wrapper {
        @apply fixed inset-0 w-full flex flex-col items-center justify-center container px-2 md:px-4 lg:px-0;
        z-index: 67;
    }

    &.dialog--md .dialog__wrapper {
        @apply max-w-md;
    }

    &.dialog--lg .dialog__wrapper {
        @apply max-w-xl;
    }

    &.dialog--xl .dialog__wrapper {
        @apply max-w-5xl;
    }

    &.dialog--screen .dialog__wrapper {
        @apply px-0;
        max-width: unset;
        height: auto;
    }

    &.dialog--screen .dialog__wrapper .dialog__content {
        border-radius: 0px;
        max-height: calc(100dvh);
        height: 100%;
    }

    &.dialog--bottom .dialog__wrapper {
        @apply justify-end px-0 md:px-0 lg:px-0;
    }

    &.dialog--bottom .dialog__wrapper .dialog__content {
        @apply rounded-none rounded-tr-xl rounded-tl-xl;
        max-height: 95vh;
    }

    .dialog__content {
        @apply relative bg-white shadow-card w-full rounded-xl text-left flex flex-col max-h-full overflow-y-auto;
        z-index: 67;
        max-height: 80vh;
        min-height: 360px;
    }

    & .dialog__drag-handler {
        @apply hidden items-center justify-center pt-4;
    }

    .dialog__drag-handler__thumb {
        width: 32px;
        height: 4px;
        display: block;
        background: #79747e;
        border-radius: 100px;
    }

    &.dialog--bottom .dialog__content .dialog__drag-handler {
        @apply flex;
    }

    .dialog__header {
        @apply flex items-center flex-shrink-0 w-full;
    }

    .dialog__body {
        position: relative;
        flex: 1 1 auto;
        overflow-y: auto;
    }

    .dialog__close-wrapper {
        @apply hidden items-center w-full;
    }

    &.dialog--has-close .dialog__close-wrapper {
        @apply flex;
    }

    .dialog__close-btn {
        @apply rounded-full h-10 w-10 flex items-center justify-center text-white font-semibold bg-white/40 mt-8 mb-4 ml-4 transition-colors duration-200;

        &:hover {
            @apply bg-black/50 text-white;
        }
    }
}

/* .dialog__panel__body {
    @apply px-5;
} */
</style>
