<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
</script>

<template>
    <Popover class="relative">
        <PopoverButton>
            <slot name="trigger"></slot>
        </PopoverButton>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <PopoverPanel class="popover__panel">
                <slot></slot>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<style scoped lang="scss">
.popover {
    @apply relative;

    &__panel {
        @apply absolute right-0 top-auto mt-2 z-10 bg-white shadow-card rounded-lg overflow-hidden;
        width: auto;
        min-width: 180px;
    }
}
</style>
