<script setup>
defineEmits(['click']);
</script>

<template>
    <li class="menu__item">
        <a class="menu__link" @click="$emit('click')">
            <slot></slot>
        </a>
    </li>
</template>

<style scoped lang="scss">
.menu__link {
    @apply p-2 flex items-center space-x-2 text-sm rounded-lg transition-colors font-medium duration-200 cursor-pointer;

    &:hover {
        @apply bg-black/10;
    }
}
</style>
