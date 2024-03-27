<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';

defineProps({
    show: {
        type: Boolean
    },
    confirm: {
        type: Function
    }
});

defineEmits(['close']);
</script>

<template>
    <TransitionRoot appear :show="show" as="template">
        <Dialog as="div" @close="$emit('close')" class="dialog">
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
                <div class="flex min-h-full items-center justify-center p-4">
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
                            <slot></slot>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<style lang="scss">
.dialog {
    z-index: 200;
    position: relative;

    .dialog__overlay {
        @apply fixed inset-0 bg-black/70;
    }

    .dialog__wrapper {
        @apply fixed inset-0 overflow-y-auto;
    }

    .dialog__panel {
        max-width: 320px;
        @apply w-full transform rounded-2xl bg-white shadow-xl transition-all;
    }
}
</style>
