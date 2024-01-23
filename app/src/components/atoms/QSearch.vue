<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { onClickOutside } from '@vueuse/core';
import { useSearchStore } from '@/stores/searchStore';
import { useDebounceFn } from '@vueuse/core';
import SearchResult from '@/components/molecules/SearchResult.vue';
import { storeToRefs } from 'pinia';

defineProps({
    shadow: {
        type: Boolean,
        default: true
    }
});

const route = useRoute();
const searchStore = useSearchStore();
const { navbarSearch } = route.meta;
const { query, campaigns, collections, creators } = storeToRefs(searchStore);
const { updateCampaigns, updateCollections, updateCreators } = searchStore;

const searchEl = ref(null);
const isFocus = ref(false);
const isShowResult = ref(false);
onClickOutside(searchEl, () => (isFocus.value = false));

const onInputQuery = useDebounceFn(() => {
    if (navbarSearch) {
        updateCampaigns();
        updateCollections();
        updateCreators();
    }

}, 300);

watch(query, (newValue) => {
    isShowResult.value = newValue.length >= 3 && navbarSearch;
});
</script>

<template>
    <div ref="searchEl" :class="['search', shadow && 'search--shadow']">
        <div class="search__input-wrapper">
            <input v-model="query" type="search" class="search__input" id="search_lg"
                placeholder="Find Campaigns, Collections, or Creators" @focus="isFocus = true" @input="onInputQuery" />
            <span class="search__input-icon">
                <i class="ri-search-line ri-lg" role="button"></i>
            </span>
        </div>

        <div v-show="isShowResult" class="search__result-wrapper">
            <SearchResult :campaigns="campaigns" :collections="collections" :creators="creators" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.search {
    @apply relative;

    .search__input-wrapper {
        @apply bg-white rounded-full flex items-center border border-transparent transition-colors duration-200;
        height: 52px;
        min-width: 320px;

        &:focus-within {
            @apply border-main-darker;
        }

        @include lg_screen {
            min-width: 360px;
        }
    }

    &.search--shadow .search__input-wrapper {
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
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
