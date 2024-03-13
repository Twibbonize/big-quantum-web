<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String
    }
});

const categoryColor = computed(() => {
    if (/(events)/gi.test(props.title))
        return '--category-primary: #4D41B9; --category-secondary: #F9F5FF;';
    if (/(government)/gi.test(props.title))
        return '--category-primary: #2D9292; --category-secondary: #E5F9F9;';
    if (/(personal)/gi.test(props.title))
        return '--category-primary: #448DBC; --category-secondary: #E8F5FD;';
    if (/(commemorations)/gi.test(props.title))
        return '--category-primary: #2E2E77; --category-secondary: #EEEEFC;';
    if (/(corporate)/gi.test(props.title))
        return '--category-primary: #0B5D99; --category-secondary: #E8F5FE;';
    if (/(education)/gi.test(props.title))
        return '--category-primary: #2266ED; --category-secondary: #EEF3FD;';
    if (/(entertainment)/gi.test(props.title))
        return '--category-primary: #7A2997; --category-secondary: #FBF2FF;';
    if (/(politics)/gi.test(props.title))
        return '--category-primary: #37667E; --category-secondary: #E3F5FE;';
    if (/(social)/gi.test(props.title))
        return '--category-primary: #536A75; --category-secondary: #E8F3F8;';
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
        color: var(--category-primary);
        letter-spacing: 2.5px;
    }
}
</style>
