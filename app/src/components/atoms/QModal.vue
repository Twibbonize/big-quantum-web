<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
defineProps({
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
</script>

<template>
    <TransitionRoot appear :show="show" as="template">
        <Dialog @close="!isStatic && $emit('close')">
            <div
                :class="[
                    'dialog',
                    `dialog--${position}`,
                    `dialog--${size}`,
                    closeBtn && 'dialog--has-close'
                ]"
            >
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="dialog__overlay" />
                </TransitionChild>

                <div class="dialog__wrapper">
                    <div class="dialog__close-wrapper">
                        <button class="dialog__close-btn" @click="$emit('close')">
                            <i class="ri ri-close-line ri-lg"></i>
                        </button>
                    </div>
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel as="template">
                            <div class="dialog__content">
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
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<style scoped lang="scss">
.dialog {
    @apply relative;
    z-index: 65;

    .dialog__overlay {
        @apply fixed inset-0 bg-black/60;
        z-index: 66;
        pointer-events: none;
    }

    .dialog__wrapper {
        @apply fixed inset-0 w-full max-w-md m-auto flex flex-col container px-2 md:px-0;
        z-index: 67;
        height: fit-content;
    }

    &.dialog--md .dialog__wrapper {
        @apply max-w-md;
    }

    &.dialog--lg .dialog__wrapper {
        @apply max-w-xl;
    }

    &.dialog--screen .dialog__wrapper {
        @apply px-0;
        max-width: unset;
        height: auto;
    }
    &.dialog--screen .dialog__wrapper .dialog__content {
        border-radius: 0px;
        max-height: calc(100dvh);
    }

    .dialog__content {
        @apply relative bg-white shadow-card rounded-xl text-left flex flex-col max-h-full overflow-y-auto flex-grow;
        z-index: 67;
        max-height: 80dvh;
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
