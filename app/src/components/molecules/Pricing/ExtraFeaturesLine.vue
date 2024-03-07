<template>
    <div class="extra-features">
        <div class="line"></div>
        <span>Extra Features</span>
        <div class="line"></div>
    </div>
</template>

<style lang="scss" scoped>
.extra-features {
    @apply text-[#5F6168] font-semibold uppercase text-[10px] flex items-center gap-5 my-8 whitespace-nowrap;
    letter-spacing: 2px;

    .line {
        @apply w-full;
        border-bottom: 1px solid #dee8e8;
    }
}
</style>
