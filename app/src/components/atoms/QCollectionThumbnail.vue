<script setup>
import { computed } from 'vue';

const props = defineProps({
    thumbnails: {
        type: Array,
        required: true
    }
});

const finalThumbnails = computed(() => {
    const { thumbnails } = props;

    if (!thumbnails.length) {
        return [];
    }

    if (thumbnails.length < 4) {
        return [thumbnails[0]];
    }

    return thumbnails.slice(0, 4);
});
</script>

<template>
    <div
        :class="['collection-thumbnail', thumbnails.length < 4 && 'collection-thumbnail--autofill']"
    >
        <div v-for="(thumbnail, i) in finalThumbnails" :key="i" class="collection-thumbnail__img">
            <img :src="thumbnail" :alt="i" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.collection-thumbnail {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    @apply transition-all duration-300 ease-in-out h-full aspect-square;

    &--autofill .collection-thumbnail__img {
        grid-row: span 2;
        grid-column: span 2;
    }

    .collection-thumbnail__img {
        @apply bg-gray-200 overflow-hidden w-full aspect-square;
    }

    .collection-thumbnail__img img {
        @apply w-full h-full object-cover object-center scale-105;
    }
}
</style>
