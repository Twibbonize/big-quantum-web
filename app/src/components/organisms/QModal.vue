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
    }
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};
</script>

<template>
    <TransitionRoot appear :show="show" as="template">
        <Dialog @close="!isStatic && $emit('close')">
            <div class="dialog">
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
                            <DialogPanel class="dialog__panel">
                                <div v-if="$slots.header" class="dialog__panel__header">
                                    <slot name="header"></slot>
                                </div>

                                <div class="dialog__panel__body">
                                    <slot name="body"></slot>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<style scoped>
.dialog {
    @apply relative;
    z-index: 9995;
}

.dialog__overlay {
    @apply fixed inset-0 bg-black/25;
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

.dialog__panel {
    @apply w-full max-w-md bg-white text-left relative rounded-3xl;
}

.dialog__panel__header {
    @apply px-5 py-2;
}

.dialog__panel__body {
    @apply px-5 pb-5;
}
</style>
