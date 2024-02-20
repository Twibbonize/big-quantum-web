<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
    }
});

const categoryColor = computed(() => {
    if (/(events)/ig.test(props.title)) return '--category-primary: #4D41B9; --category-secondary: #F9F5FF;';
    return '--category-primary: #4D41B9; --category-secondary: #F9F5FF;';
});
</script>

<template>
    <div class="article-category" :style="categoryColor">
        <h4>{{ title }}</h4>
    </div>
</template>

<style lang="scss" scoped>
.article-category {
    @apply py-1 px-3 rounded-2xl w-max;
    background: var(--category-secondary);

    h4 {
        @apply text-[#667085] sm:text-base font-medium uppercase;
        color:  var(--category-primary);
        letter-spacing: 2.5px;
    }
}
</style>