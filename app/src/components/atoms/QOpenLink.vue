<script setup>
const props = defineProps({
    url: String,
    text: String
});
</script>

<template>
    <div class="heading-section">
        <RouterLink class="flex items-center color_black" :to="url">
            {{ text }} <i class="ri-arrow-right-line"></i
        ></RouterLink>
    </div>
</template>

<style lang="scss">
.heading-section {
    @apply flex items-center justify-between flex-wrap;

    a {
        @apply text-sm font-extrabold leading-5 capitalize relative;
        transition: all 0.3s ease;
    }

    i {
        @apply p-1 ml-1.5 rounded-2xl bg-none no-underline;
    }
}
</style>
