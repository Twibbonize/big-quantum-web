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
        validators: (value) => ['md', 'lg']
    },
    minHeight: {
        type: Number
    }
});

const emit = defineEmits(['close']);
</script>

<template>
    <TransitionRoot appear :show="show" as="template">
        <Dialog @close="!isStatic && $emit('close')">
            <div :class="['dialog', `dialog--${position}`, `dialog--${size}`]">
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

                <div class="dialog__content">
                    <div class="dialog__panel-wrapper">
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
                                <div
                                    class="dialog__panel"
                                    :style="{ minHeight: minHeight ? `${minHeight}px` : 'auto' }"
                                >
                                    <div v-if="$slots.header" class="dialog__panel__header">
                                        <slot name="header"></slot>
                                    </div>

                                    <div class="dialog__panel__body">
                                        <slot name="body"></slot>
                                    </div>

                                    <div v-if="$slots.footer" class="dialog__panel__footer">
                                        <slot name="footer"></slot>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<style scoped lang="scss">
.dialog {
    @apply relative;
    z-index: 9995;

    .dialog__overlay {
        @apply fixed inset-0 bg-black/60;
        z-index: 9996;
        pointer-events: none;
    }

    .dialog__content {
        @apply fixed inset-0 overflow-y-auto;
        z-index: 9997;
    }

    .dialog__panel-wrapper {
        @apply flex min-h-full items-center justify-center p-4 text-center;
    }

    &.dialog--top .dialog__panel-wrapper {
        @apply items-start;
    }

    &.dialog--bottom .dialog__panel-wrapper {
        @apply items-end;
    }

    &.dialog--screen .dialog__panel-wrapper {
        @apply items-start p-0;
    }

    &.dialog--screen .dialog__panel {
        @apply h-screen rounded-none shadow-none overflow-auto;

        max-height: 100vh;
    }

    &.dialog--md .dialog__panel {
        @apply max-w-md;
    }

    &.dialog--lg .dialog__panel {
        @apply max-w-xl;
    }

    .dialog__panel {
        @apply w-full max-w-md bg-white shadow-card text-left relative rounded-3xl overflow-auto flex flex-col;
        max-height: 90vh;
        // min-height: 693px;
    }

    .dialog__panel__header {
        @apply p-5 absolute left-0 top-0 w-full z-10;
    }

    .dialog__panel__footer {
        @apply p-5;
    }

    .dialog__panel__body {
        @apply max-h-full overflow-auto;
    }
}

/* .dialog__panel__body {
    @apply px-5;
} */
</style>
