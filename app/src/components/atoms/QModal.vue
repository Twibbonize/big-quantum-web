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
        default: true
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
const dialogContentHeaderEl = ref(null);
const dialogContentEl = ref(null);
const isDragging = ref(false);
const isFullyDragged = ref(false);
const { width: windowWidth, height: windowHeight } = useWindowSize();

const upperLimitY = (56 / 100) * windowWidth.value;
const initialHeight = windowHeight.value - (56 / 100) * windowWidth.value - 24;

const { motionProperties } = useMotionProperties(dialogContentEl, {
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

const dialogClasses = computed(() => {
    const { position, size, closeBtn, show } = props;
    return [
        'dialog',
        show && 'dialog--show',
        `dialog--${position}`,
        `dialog--${size}`,
        closeBtn && 'dialog--has-close',
        isDragging.value && 'dialog--dragging',
        isFullyDragged.value && 'dialog--dragged'
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
    domTarget: dialogContentHeaderEl,
    filterTaps: true,
    cursor: 'default'
});

onClickOutside(dialogContentEl, () => {
    if (props.static && props.show) {
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
</script>

<template>
    <div :class="dialogClasses">
        <Transition name="fade">
            <div v-show="show" class="dialog__overlay" />
        </Transition>

        <Transition :name="transition">
            <div v-show="show" class="dialog__wrapper">
                <div class="dialog__close-wrapper">
                    <button class="dialog__close-btn" @click="$emit('close')">
                        <i class="ri ri-close-line ri-lg"></i>
                    </button>
                </div>
                <div ref="dialogContentEl" class="dialog__content">
                    <div ref="dialogContentHeaderEl" class="dialog__header">
                        <div class="dialog__drag-handler">
                            <span class="dialog__drag-handler__thumb"></span>
                        </div>

                        <div v-if="title" class="flex items-center flex-shrink-0 w-full">
                            <div>{{ title }}</div>
                            <!-- <slot name="header"></slot> -->
                        </div>
                    </div>

                    <div class="dialog__body">
                        <slot :close="handleClose" :isDragging="isDragging"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="scss">
.dialog {
    z-index: 66;
    position: fixed;
    @apply inset-0 pointer-events-none;

    &.dialog--show {
        @apply pointer-events-auto;
    }

    .dialog__overlay {
        @apply absolute inset-0 bg-black/60;
        z-index: 67;
        pointer-events: none;
    }

    .dialog__wrapper {
        @apply absolute inset-0 w-full flex flex-col items-center justify-center container px-2 md:px-4 lg:px-0 transition-all duration-300;
        z-index: 68;
    }

    &.dialog--md .dialog__wrapper {
        @apply max-w-md;
    }

    &.dialog--lg .dialog__wrapper {
        @apply max-w-xl;
        // max-width: 540px;
    }

    &.dialog--xl .dialog__wrapper {
        // @apply max-w-3xl;
        max-width: 52rem;
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
        bottom: 0;
        top: calc(56vw + 24px);
    }

    &.dialog--bottom.dialog--dragging .dialog__wrapper,
    &.dialog--bottom.dialog--dragged .dialog__wrapper {
        height: calc(100% - 24px);
        // background-color: white;
    }

    &.dialog--bottom .dialog__wrapper .dialog__content {
        @apply rounded-none rounded-tr-xl rounded-tl-xl;
        height: 100%;
        max-height: unset;
        min-height: unset;
        // max-height: 95vh;
    }

    &.dialog--bottom.dialog--dragging .dialog__body {
        overflow: hidden;
    }

    .dialog__content {
        @apply relative bg-white shadow-card w-full rounded-xl text-left flex flex-col max-h-full overflow-y-auto;
        z-index: 69;
        max-height: calc(100dvh - 24px);
        min-height: 360px;
    }

    & .dialog__drag-handler {
        @apply hidden items-center justify-center pt-4 pb-8;
    }

    .dialog__drag-handler__thumb {
        width: 48px;
        height: 4px;
        display: block;
        background: #79747e;
        border-radius: 100px;
    }

    &.dialog--bottom .dialog__content .dialog__drag-handler {
        @apply flex;
    }

    // .dialog__header {
    //     @apply flex items-center flex-shrink-0 w-full;
    // }

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
