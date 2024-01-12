<template>
    <div class="p-1">
        <ul class="menu">
            <slot></slot>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.menu {
    @apply flex flex-col space-y-1 w-full;
}
</style>
