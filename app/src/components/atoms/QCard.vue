<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.card {
    @apply bg-white shadow-card rounded-3xl transition-all duration-200 ease-in-out p-2.5 pb-3.5;
}
</style>
