<script setup></script>

<template>
    <div class="search">
        <div class="search__input-wrapper">
            <input
                type="search"
                class="search__input"
                id="search_lg"
                placeholder="Find Campaigns or Creators"
            />
            <span class="search__input-icon">
                <i class="ri-search-line ri-lg" role="button"></i>
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.search {
    @apply relative;
    .search__input-wrapper {
        @apply bg-white rounded-full flex items-center border border-transparent transition-colors duration-200;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
        height: 52px;
        min-width: 320px;

        &:focus-within {
            @apply border-main-darker;
        }

        @include lg_screen {
            min-width: 360px;
        }
    }

    .search__input {
        @apply flex-grow h-full bg-transparent border-0 border-transparent text-sm outline-none;
        padding: 13.5px 13.5px;
        padding-left: 18px;

        &:focus {
            @apply outline-none;
        }
    }

    .search__input-icon {
        @apply h-full w-14 flex items-center justify-center font-medium;
    }
}
</style>
