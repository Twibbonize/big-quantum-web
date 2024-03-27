<script setup>
defineProps({
    thumbnail: {
        type: String
    },
    title: {
        type: String
    }
});
</script>

<template>
    <div class="tpl__item">
        <img :src="thumbnail" :alt="title" />
    </div>
</template>

<style scoped lang="scss">
.tpl__item {
    @apply aspect-square bg-gray-150 border border-light flex items-center justify-center rounded-md overflow-hidden;

    img {
        max-height: 100%;
        max-width: 100%;
    }
}
</style>
