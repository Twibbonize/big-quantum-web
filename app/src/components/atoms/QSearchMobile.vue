<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { breakpointsTailwind, useBreakpoints, useDebounceFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '@/stores/searchStore';
import SearchResult from '@/components/molecules/SearchResult.vue';

defineProps({
    variant: {
        type: String,
        default: 'black'
    }
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const xs = breakpoints.smallerOrEqual('sm');

const route = useRoute();
const searchStore = useSearchStore();
const { navbarSearch } = route.meta;
const { query, campaigns, collections, creators } = storeToRefs(searchStore);
const { updateCampaigns, updateCollections, updateCreators } = searchStore;

const isSearchOpen = ref(false);
const isShowResult = ref(false);

watch(xs, (newValue) => {
    if (newValue === false) {
        isSearchOpen.value = false;
    }
});

const onInputQuery = useDebounceFn(() => {

    if (!navbarSearch) return 

    
    updateCampaigns();
    updateCollections();
    updateCreators();
}, 300);

watch(query, (newValue) => {
    isShowResult.value = newValue.length >= 3 && navbarSearch;
});
</script>

<template>
    <div :class="['search', `search--${variant}`]">
        <button class="search__button" @click="isSearchOpen = true">
            <i class="ri-search-line ri-lg"></i>
        </button>

        <Teleport to="#app">
            <Transition name="slide-fade">
                <div v-if="isSearchOpen && xs" class="search-mobile">
                    <div class="search-mobile__header">
                        <div class="search-mobile__input-wrapper">
                            <button class="search-mobile__input-prefix">
                                <i class="ri-search-line"></i>
                            </button>
                            <input
                                v-model="query"
                                class="search-mobile__input"
                                type="text"
                                placeholder="Find campaigns, collections, or creators"
                                @input="onInputQuery"
                                autocomplete="off"
                            />
                        </div>

                        <button class="search-mobile__close" @click="isSearchOpen = false">
                            <i class="ri-close-line"></i>
                        </button>
                    </div>

                    <Transition name="slide-fade">
                        <div v-show="isShowResult" class="search-mobile__body">
                            <SearchResult
                                :campaigns="campaigns"
                                :collections="collections"
                                :creators="creators"
                            />
                        </div>
                    </Transition>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style scoped lang="scss">
.search {
    .search__button {
        @apply flex items-center justify-center bg-white border border-stroke rounded-full;

        padding: 12px;
        height: 40px;
        width: 40px;
    }
}

.search-mobile {
    @apply fixed top-0 left-0 w-full bg-white border-b border-stroke;
    z-index: 999;

    .search-mobile__header {
        height: 76px;
        @apply flex items-center container px-4 space-x-1;
    }

    .search-mobile__input-wrapper {
        @apply flex-grow rounded-full overflow-hidden transition-all duration-100 ease-in-out flex items-center;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
        height: 40px;

        &:focus-within {
            @apply outline outline-offset-1 outline-main-darker;
        }
    }

    .search-mobile__input-prefix {
        @apply flex items-center h-full px-2 text-content;
    }

    .search-mobile__input {
        @apply w-full py-3 pr-1 rounded-lg;
        font-size: 12px;

        &:focus {
            @apply outline-none;
        }
    }

    .search-mobile__close {
        height: 40px;
        width: 40px;
        @apply rounded-lg transition-colors duration-200;

        &:focus {
            @apply outline-none bg-gray-200;
        }
    }

    .search-mobile__body {
        @apply w-full bg-white;
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
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
