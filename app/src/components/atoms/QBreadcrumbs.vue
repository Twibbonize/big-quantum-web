<script setup>
defineProps({
    links: {
        type: Array,
    }
});
</script>

<template>
    <div class="breadcrumbs">
        <template v-for="{ title, link }, i in links">
            <i v-if="i > 0" class="ri-arrow-right-s-line"></i>
            <a :href="link" :class="{ 'disabled': !Boolean(link) }">
                {{ title }}
            </a>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
    @apply flex flex-row gap-2 items-center w-full;
    i {
        @apply sm:text-2xl text-[#858D9D];
    }

    a {
        @apply sm:text-base text-ellipsis overflow-hidden text-[#858D9D] cursor-pointer;

        &.disabled {
            @apply font-medium text-black pointer-events-none cursor-default;
        }
    }
}
</style>