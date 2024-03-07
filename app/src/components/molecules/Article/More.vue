<script setup>
defineProps({
    links: {
        type: Array
    },
    title: {
        type: String
    }
});
</script>

<template>
    <div class="more-link">
        <h4>{{ title }}</h4>
        <div class="content">
            <template v-for="{ title, link } in links">
                <div class="line"></div>
                <a :href="link">
                    {{ title }}
                </a>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.more-link {
    h4 {
        @apply text-[#667085] sm:text-base font-medium capitalize mb-4;
    }
    .content {
        @apply flex flex-col gap-4 items-start w-full;
    }

    .line {
        @apply w-full;
        border-top: 1px solid var(--color-light);
    }

    a {
        @apply sm:text-base font-semibold text-black cursor-pointer;
    }
}
</style>
