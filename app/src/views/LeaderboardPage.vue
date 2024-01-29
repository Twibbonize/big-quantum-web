<script setup>
import { breakpointsTailwind, useBreakpoints, useDebounceFn } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QTabs from '@/components/atoms/QTabs.vue';
import QButton from '@/components/atoms/QButton.vue';
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
    <LayoutMain navbarColor="white">
        <div class="page">
            <div class="leaderboard__list container px-4 lg:px-0 py-10">
                <div class="space-y-10">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-y-10 gap-x-6">
                        <div class="col-span-1 lg:col-span-2">
                            <h1 class="text-2xl lg:text-3xl font-bold">Top Creator Leaderboard</h1>
                        </div>

                        <div class="col-span-1 font-light leading-relaxed text-sm lg:text-base">
                            Discover the champions of support! Check out our leaderboard showcasing
                            creators who've gained the most support in the past 7 days, this month,
                            and all-time.
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="flex-grow md:max-w-[320px]">
                            <QTabs v-model="selectedRangeTime" :tabs="rangeTimeOptions" block />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-10 gap-x-6">
                        <CreatorBox v-for="creator in filteredCreators" v-bind="creator" />
                    </div>

                    <div class="flex justify-between">
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
