<script setup>
defineProps({
    variant: {
        type: String,
        default: 'black'
    }
});
</script>

<template>
    <div :class="['search', `search--${variant}`]">
        <button class="search__button">
            <i class="ri-search-line ri-lg"></i>
        </button>
    </div>
    <!-- <div class="search-mobile flex p-0">
        <i class="ri-search-line text-xl font-bold" role="button"></i>
    </div> -->
</template>

<style scoped lang="scss">
.search {
    .search__button {
        @apply flex items-center justify-center bg-white border border-stroke rounded-full;

        @include sm {
            padding: 12px;
            height: 40px;
            width: 40px;
        }
    }
}
// .search-mobile {
//     background: var(--color-white);
//     position: relative;
//     height: 52px;
//     width: 52px;
//     border-radius: 26px;
//     box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
//     @apply flex items-center justify-center;
// }
</style>
