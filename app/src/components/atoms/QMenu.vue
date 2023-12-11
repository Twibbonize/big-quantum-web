<script setup></script>

<template>
    <div class="menu btn-white">
        <i class="ri-menu-line" role="button"></i>
    </div>
</template>

<style lang="scss">
.menu {
    @apply flex items-center justify-center lg:ml-4;
    width: 52px;
    height: 52px;
    border-radius: 26px;
    background: var(--color-white);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);

    i {
        @apply text-black text-2xl;
    }

    &:hover {
        cursor: pointer;
    }
}
</style>
