<script setup>
import { breakpointsTailwind, useBreakpoints, useDebounceFn } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QTabs from '@/components/atoms/QTabs.vue';
import QButton from '@/components/atoms/QButton.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import CreatorBox from '@/components/elements/CreatorBox.vue';
import QPagination from '@/components/molecules/QPagination.vue';

import { creators } from '@/mock/creators';

const currentPage = ref(1);
const searchQuery = ref('');
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');
const allCreators = ref(creators.map((creator, i) => ({ ...creator, number: i + 1 })));
const filteredCreators = ref([]);

const rangeTimeOptions = [
    {
        title: '7 Days',
        value: '7_days'
    },
    {
        title: '30 Days',
        value: '30_days'
    },
    {
        title: 'All Time',
        value: 'all_time'
    }
];

const selectedRangeTime = ref(0);

const searchCreatorsBySubstring = (substring) => {
    // Convert the substring to lowercase for case-insensitive search
    const lowerCaseSubstring = substring.toLowerCase();

    // Use filter method to search for creators whose names contain the substring
    const matchingCreators = allCreators.value.filter((creator) =>
        creator.name.toLowerCase().includes(lowerCaseSubstring)
    );

    return matchingCreators; // Return an array of matching creators
};

const updateFilteredCreators = useDebounceFn(() => {
    if (searchQuery.value === '') {
        filteredCreators.value = [...allCreators.value];
    } else {
        filteredCreators.value = searchCreatorsBySubstring(searchQuery.value);
    }
}, 300);

onMounted(() => {
    updateFilteredCreators(searchQuery.value);
});
</script>

<template>
    <LayoutMain navbarColor="white" :navbarShadow="false">
        <div class="page">
            <div class="tabs-wrapper wrapper">
                <div class="container px-4 py-4 lg:px-0">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div class="col-span-2">
                            <div class="md:max-w-[280px]">
                                <QInputText
                                    v-model="searchQuery"
                                    name="search"
                                    size="sm"
                                    placeholder="Search in Leaderboard"
                                    @input="updateFilteredCreators"
                                >
                                    <template #prefix>
                                        <span class="text-content pl-2 pr-1">
                                            <i class="ri ri-search-line"></i>
                                        </span>
                                    </template>
                                </QInputText>
                            </div>
                        </div>

                        <div class="col-span-1 hidden lg:block">
                            <QTabs v-model="selectedRangeTime" :tabs="rangeTimeOptions" block />
                        </div>
                    </div>
                </div>
            </div>

            <div class="leaderboard__list container px-4 lg:px-0">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-y-10 gap-x-6 py-10">
                    <div class="col-span-1 lg:col-span-2">
                        <h1 class="text-3xl font-bold">Top Creator Leaderboard</h1>
                    </div>

                    <div class="col-span-1 font-light leading-relaxed">
                        Discover the champions of support! Check out our leaderboard showcasing
                        creators who've gained the most support in the past 7 days, this month, and
                        all-time.
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-10 gap-x-6"
                >
                    <CreatorBox v-for="creator in filteredCreators" v-bind="creator" />
                </div>

                <div class="flex justify-between mt-10">
                    <div>
                        <QButton circle variant="secondary" @click="currentPage -= 1">
                            <i class="ri-arrow-left-s-line ri-lg"></i>
                        </QButton>
                    </div>
                    <QPagination
                        :total-pages="5"
                        :current-page="currentPage"
                        @change="(val) => (currentPage = val)"
                    />

                    <div>
                        <QButton circle variant="secondary" @click="currentPage += 1">
                            <i class="ri-arrow-right-s-line ri-lg"></i>
                        </QButton>
                    </div>
                </div>
            </div>
        </div>
    </LayoutMain>
</template>

<style scoped lang="scss">
.wrapper {
    @apply border-b border-stroke;
}

.tabs-wrapper {
    @apply sticky bg-white z-40 border-t border-stroke;
    top: 76px;

    @include md_screen {
        top: 88px;
    }
}
</style>
