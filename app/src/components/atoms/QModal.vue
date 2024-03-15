<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useMotionProperties, useSpring } from '@vueuse/motion';
import { useDrag } from '@vueuse/gesture';
import { onClickOutside, onKeyStroke, useWindowSize } from '@vueuse/core';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    title: {
        type: String
    },
    static: {
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
        validators: (value) => ['md', 'lg', 'xl'].includes(value)
    },
    minHeight: {
        type: Number
    },
    closeBtn: {
        type: Boolean,
        default: false
    },
    keyboard: {
        type: Boolean,
        default: true
    },
    transition: {
        type: String,
        default: 'fade'
    },
    initialSheetSize: {
        type: String,
        default: 'half',
        validators: (value) => ['half', 'full'].includes(value)
    }
});

const emit = defineEmits(['close']);
const modalContentHeaderEl = ref(null);
const modalContentEl = ref(null);
const isDragging = ref(false);
const isFullyDragged = ref(false);
const { width: windowWidth, height: windowHeight } = useWindowSize();

const upperLimitY = (56 / 100) * windowWidth.value;
const initialHeight = windowHeight.value - (56 / 100) * windowWidth.value - 24;

const { motionProperties } = useMotionProperties(modalContentEl, {
    cursor: 'default',
    x: 0,
    y: 0
});
const { set, stop } = useSpring(motionProperties, {
    stiffness: 200, // Adjust stiffness to control the bounce
    damping: 20, // Adjust damping to control the bounce
    duration: 500 // Adjust duration to control the animation speed
});
// const { push } = useMotionTransitions(motionProperties);

const modalClasses = computed(() => {
    const { position, size, closeBtn, show } = props;
    return [
        'modal',
        show && 'modal--show',
        `modal--${position}`,
        `modal--${size}`,
        closeBtn && 'modal--has-close',
        isDragging.value && 'modal--dragging',
        isFullyDragged.value && 'modal--dragged'
    ];
});

const handleClose = () => {
    isDragging.value = false;

    if (props.position === 'bottom') {
        set({ y: initialHeight });

        setTimeout(() => {
            emit('close');
        }, 300);

        setTimeout(() => {
            set({ x: 0, y: 0, cursor: 'default' });
        }, 500);
    } else {
        emit('close');
    }
};

const dragHandler = ({ movement: [_x, y], dragging, tap, axis }) => {
    if (props.position !== 'bottom') {
        return;
    }

    if (tap) {
        return;
    }

    if (!dragging) {
        // threshold for fully dragged
        if (y <= -(upperLimitY / 2)) {
            set({ x: 0, y: -upperLimitY, cursor: 'default' });
            isFullyDragged.value = true;
        } else {
            isFullyDragged.value = false;
            set({ x: 0, y: 0, cursor: 'default' });
        }

        if (y >= initialHeight / 3 && !isFullyDragged.value) {
            handleClose();
        }

        setTimeout(() => {
            isDragging.value = false;
        }, 500);

        return;
    } else {
        isFullyDragged.value = false;
        isDragging.value = true;

        if (y <= -upperLimitY && !isFullyDragged.value) {
            return;
        }

        set({
            cursor: 'default',
            y
        });
    }
};

useDrag(dragHandler, {
    domTarget: modalContentHeaderEl,
    filterTaps: true,
    cursor: 'default'
});

onClickOutside(modalContentEl, () => {
    if (!props.static && props.show) {
        handleClose();
    }
});

onKeyStroke('Escape', () => {
    if (props.keyboard) {
        handleClose();
    }
});

watch(
    () => props.show,
    (newValue) => {
        if (newValue) {
            document.body.style.overflow = 'hidden';

            if (props.initialSheetSize === 'full' && props.position === 'bottom') {
                set({ x: 0, y: -upperLimitY, cursor: 'default' });
                isFullyDragged.value = true;
            } else {
                set({ x: 0, y: 0, cursor: 'default' });
                isFullyDragged.value = false;
            }

            // nextTick(() => {
            //     isFullyDragged.value = true;
            //     set({ x: 0, y: -upperLimitY, cursor: 'default' });
            // })
        } else {
            document.body.style.overflow = '';
            stop();
        }
    }
);

watch(
    () => props.position,
    (newValue) => {
        if (newValue !== 'bottom') {
            set({ x: 0, y: 0, cursor: 'default' });
            isFullyDragged.value = false;
        }
    }
);
</script>

<template>
    <div :class="modalClasses">
        <Transition name="fade">
            <div v-show="show" class="modal__overlay" />
        </Transition>

        <Transition :name="transition">
            <div v-show="show" class="modal__wrapper">
                <div class="modal__close-wrapper">
                    <button class="modal__close-btn" @click="$emit('close')">
                        <i class="ri ri-close-line ri-lg"></i>
                    </button>
                </div>
                <div ref="modalContentEl" class="modal__content">
                    <div ref="modalContentHeaderEl" class="modal__header">
                        <div class="modal__drag-handler">
                            <span class="modal__drag-handler__thumb"></span>
                        </div>

                        <div v-if="title" class="flex items-center flex-shrink-0 w-full">
                            <div>{{ title }}</div>
                            <!-- <slot name="header"></slot> -->
                        </div>
                    </div>

                    <div class="modal__body">
                        <slot :close="handleClose" :isDragging="isDragging"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="scss">
.modal {
    z-index: 66;
    position: fixed;
    @apply inset-0 pointer-events-none;

    &.modal--show {
        @apply pointer-events-auto;
    }

    .modal__overlay {
        @apply absolute inset-0 bg-black/60;
        z-index: 67;
        pointer-events: none;
    }

    .modal__wrapper {
        @apply absolute inset-0 w-full flex flex-col items-center justify-center container px-2 md:px-4 lg:px-0 transition-all duration-300;
        z-index: 68;
    }

    &.modal--sm .modal__wrapper {
        max-width: 380px;
    }

    &.modal--md .modal__wrapper {
        @apply max-w-md;
    }

    &.modal--lg .modal__wrapper {
        // @apply max-w-/;
        max-width: 544px;
    }

    &.modal--xl .modal__wrapper {
        // @apply max-w-3xl;
        max-width: 52rem;
    }

    &.modal--screen .modal__wrapper {
        @apply px-0;
        max-width: unset;
        height: auto;
    }

    &.modal--screen .modal__wrapper .modal__content {
        border-radius: 0px;
        max-height: calc(100dvh);
        height: 100%;
    }

    &.modal--bottom .modal__wrapper {
        @apply justify-end px-0 md:px-0 lg:px-0;
        bottom: 0;
        top: calc(56vw + 24px);
    }

    &.modal--bottom.modal--dragging .modal__wrapper,
    &.modal--bottom.modal--dragged .modal__wrapper {
        height: calc(100% - 24px);
        // background-color: white;
    }

    &.modal--bottom .modal__wrapper .modal__content {
        @apply rounded-none rounded-tr-xl rounded-tl-xl;
        height: 100%;
        max-height: unset;
        min-height: unset;
        // max-height: 95vh;
    }

    &.modal--bottom.modal--dragging .modal__body {
        overflow: hidden;
    }

    .modal__content {
        @apply relative bg-white shadow-card w-full rounded-xl text-left flex flex-col max-h-full overflow-y-auto;
        z-index: 69;
        max-height: calc(100dvh - 24px);
        min-height: 360px;
    }

    & .modal__drag-handler {
        @apply hidden items-center justify-center pt-4 pb-6;
    }

    .modal__drag-handler__thumb {
        width: 48px;
        height: 4px;
        display: block;
        background: #79747e;
        border-radius: 100px;
    }

    &.modal--bottom .modal__content .modal__drag-handler {
        @apply flex;
    }

    // .modal__header {
    //     @apply flex items-center flex-shrink-0 w-full;
    // }

    .modal__body {
        position: relative;
        flex: 1 1 auto;
        overflow-y: auto;
    }

    .modal__close-wrapper {
        @apply hidden items-center w-full;
    }

    &.modal--has-close .modal__close-wrapper {
        @apply flex;
    }

    .modal__close-btn {
        @apply rounded-full h-10 w-10 flex items-center justify-center text-white font-semibold bg-white/40 mt-8 mb-4 ml-4 transition-colors duration-200;

        &:hover {
            @apply bg-black/50 text-white;
        }
    }
}

/* .modal__panel__body {
    @apply px-5;
} */
</style>
