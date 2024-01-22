<script setup>
import { ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import QButton from '@/components/atoms/QButton.vue';
import CampaignSearchItem from '@/components/molecules/CampaignSearchItem.vue';
import CollectionSearchItem from '@/components/molecules/CollectionSearchItem.vue';
import CreatorBox from '@/components/elements/CreatorBox.vue';

import { publicCampaigns } from '@/mock/campaigns';
import { publicCollections } from '@/mock/collections';
import { creators } from '@/mock/creators';

defineProps({
    shadow: {
        type: Boolean,
        default: true
    }
});

const searchEl = ref(null);
const isFocus = ref(false);
const isShowResult = ref(false);
const searchQuery = ref('');
onClickOutside(searchEl, () => (isFocus.value = false));

watch(searchQuery, (newValue) => {
    isShowResult.value = newValue.length >= 3;
});
</script>

<template>
    <div ref="searchEl" :class="['search', shadow && 'search--shadow']">
        <div class="search__input-wrapper">
            <input
                v-model="searchQuery"
                type="search"
                class="search__input"
                id="search_lg"
                placeholder="Find Campaigns or Creators"
                @focus="isFocus = true"
            />
            <span class="search__input-icon">
                <i class="ri-search-line ri-lg" role="button"></i>
            </span>
        </div>

        <div v-show="isFocus" class="search__result">
            <div v-show="isShowResult" class="w-full">
                <TabGroup>
                    <TabList class="search__result-tablist">
                        <Tab as="template" v-slot="{ selected }">
                            <button
                                :class="[
                                    'search__result-tab',
                                    selected && 'search__result-tab--selected'
                                ]"
                            >
                                <span>Campaigns</span>
                            </button>
                        </Tab>

                        <Tab as="template" v-slot="{ selected }">
                            <button
                                :class="[
                                    'search__result-tab',
                                    selected && 'search__result-tab--selected'
                                ]"
                            >
                                Collections
                            </button>
                        </Tab>

                        <Tab as="template" v-slot="{ selected }">
                            <button
                                :class="[
                                    'search__result-tab',
                                    selected && 'search__result-tab--selected'
                                ]"
                            >
                                Creators
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="w-full">
                        <TabPanel>
                            <Transition name="fade" mode="out-in">
                                <div>
                                    <div>
                                        <CampaignSearchItem
                                            v-for="campaign in publicCampaigns.slice(0, 3)"
                                            :key="campaign.uri"
                                            v-bind="campaign"
                                        />
                                    </div>

                                    <div class="px-4 py-3">
                                        <QButton variant="black" size="sm" block>
                                            <i class="ri-search-line"></i>
                                            <span class="ml-2 text-xs">See All Campaigns</span>
                                        </QButton>
                                    </div>
                                </div>
                            </Transition>
                        </TabPanel>

                        <TabPanel>
                            <Transition name="fade" mode="out-in">
                                <div>
                                    <div>
                                        <CollectionSearchItem
                                            v-for="collection in publicCollections.slice(0, 3)"
                                            :key="collection.uri"
                                            v-bind="collection"
                                        />
                                    </div>

                                    <div class="px-4 py-3">
                                        <QButton variant="black" size="sm" block>
                                            <i class="ri-search-line"></i>
                                            <span class="ml-2 text-xs">See All Collections</span>
                                        </QButton>
                                    </div>
                                </div>
                            </Transition>
                        </TabPanel>
                        <TabPanel>
                            <Transition name="fade" mode="out-in">
                                <div>
                                    <div>
                                        <CreatorBox
                                            v-for="creator in creators.slice(0, 3)"
                                            v-bind="creator"
                                            size="sm"
                                            :bordered="false"
                                        />
                                    </div>
                                    <div class="px-4 py-3">
                                        <QButton variant="black" size="sm" block>
                                            <i class="ri-search-line"></i>
                                            <span class="ml-2 text-xs">See All Creators</span>
                                        </QButton>
                                    </div>
                                </div>
                            </Transition>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
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

    .search__result {
        @apply absolute left-1/2 z-10 mt-2 -translate-x-1/2 transform shadow-card flex flex-wrap rounded-lg;
        white-space: initial;
        min-width: 360px;
        backdrop-filter: blur(24px);
        background: rgba(255, 255, 255, 0.8);


        @include md_screen {
            max-width: 360px;
        }
        .search__result-tablist {
            @apply flex items-center space-x-4 border-b border-black/10 w-full px-4;

            .search__result-tab {
                @apply relative outline-none flex-shrink-0 py-4 flex items-center justify-center h-full text-black/50 tracking-wide font-semibold cursor-pointer transition-colors duration-200 ease-out;

                font-size: 14px;

                &:hover,
                &--selected {
                    @apply text-black;
                }

                &--selected::after {
                    width: 100%;
                    height: 2px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    content: '';
                    display: block;
                    background-color: black;
                    border-top-right-radius: 2px;
                    border-top-left-radius: 2px;
                }
            }
        }
    }
}
</style>
