<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import QButton from '@/components/atoms/QButton.vue';
import CampaignSearchItem from '@/components/molecules/CampaignSearchItem.vue';
import CollectionSearchItem from '@/components/molecules/CollectionSearchItem.vue';
import CreatorBox from '@/components/elements/CreatorBox.vue';

defineProps({
    collections: {
        type: Array,
        default: []
    },
    campaigns: {
        type: Array,
        default: []
    },
    creators: {
        type: Array,
        default: []
    }
});
</script>

<template>
    <div class="search__result">
        <TabGroup>
            <TabList class="search__result-tablist">
                <Tab as="template" v-slot="{ selected }">
                    <button
                        :class="['search__result-tab', selected && 'search__result-tab--selected']"
                    >
                        <span>Campaigns</span>
                    </button>
                </Tab>

                <Tab as="template" v-slot="{ selected }">
                    <button
                        :class="['search__result-tab', selected && 'search__result-tab--selected']"
                    >
                        Collections
                    </button>
                </Tab>

                <Tab as="template" v-slot="{ selected }">
                    <button
                        :class="['search__result-tab', selected && 'search__result-tab--selected']"
                    >
                        Creators
                    </button>
                </Tab>
            </TabList>

            <TabPanels class="w-full">
                <TabPanel>
                    <Transition name="fade" mode="out-in">
                        <div>
                            <div v-if="campaigns.length">
                                <div>
                                    <CampaignSearchItem
                                        v-for="campaign in campaigns.slice(0, 3)"
                                        :key="campaign.uri"
                                        v-bind="campaign"
                                    />
                                </div>

                                <div class="px-4 py-3">
                                    <QButton
                                        variant="black"
                                        size="sm"
                                        block
                                        @click="
                                            $router.push({
                                                name: 'explore',
                                                params: { tab: 'campaign' }
                                            })
                                        "
                                    >
                                        <i class="ri-search-line"></i>
                                        <span class="ml-2 text-xs">See All Campaigns</span>
                                    </QButton>
                                </div>
                            </div>

                            <div v-else>
                                <div
                                    class="flex flex-col space-y-1 items-center justify-center text-center px-10 py-4"
                                >
                                    <h4 class="text-sm font-semibold">
                                        Oops, no campaigns were found :(
                                    </h4>
                                    <p class="text-content text-xs">
                                        Please check your spelling or try other keywords!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </TabPanel>

                <TabPanel>
                    <Transition name="fade" mode="out-in">
                        <div>
                            <div v-if="collections.length">
                                <div>
                                    <CollectionSearchItem
                                        v-for="collection in collections.slice(0, 3)"
                                        :key="collection.uri"
                                        v-bind="collection"
                                    />
                                </div>

                                <div class="px-4 py-3">
                                    <QButton
                                        variant="black"
                                        size="sm"
                                        block
                                        @click="
                                            $router.push({
                                                name: 'explore',
                                                params: { tab: 'collection' }
                                            })
                                        "
                                    >
                                        <i class="ri-search-line"></i>
                                        <span class="ml-2 text-xs">See All Collections</span>
                                    </QButton>
                                </div>
                            </div>

                            <div v-else>
                                <div
                                    class="flex flex-col space-y-1 items-center justify-center text-center px-10 py-4"
                                >
                                    <h4 class="text-sm font-semibold">
                                        Oops, no collections were found :(
                                    </h4>
                                    <p class="text-content text-xs">
                                        Please check your spelling or try other keywords!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </TabPanel>
                <TabPanel>
                    <Transition name="fade" mode="out-in">
                        <div>
                            <div v-if="creators.length">
                                <div>
                                    <CreatorBox
                                        v-for="creator in creators.slice(0, 3)"
                                        v-bind="creator"
                                        size="sm"
                                        :bordered="false"
                                    />
                                </div>
                                <div class="px-4 py-3">
                                    <QButton
                                        variant="black"
                                        size="sm"
                                        block
                                        @click="
                                            $router.push({
                                                name: 'explore',
                                                params: { tab: 'creator' }
                                            })
                                        "
                                    >
                                        <i class="ri-search-line"></i>
                                        <span class="ml-2 text-xs">See All Creators</span>
                                    </QButton>
                                </div>
                            </div>

                            <div v-else>
                                <div
                                    class="flex flex-col space-y-1 items-center justify-center text-center px-10 py-4"
                                >
                                    <h4 class="text-sm font-semibold">
                                        Oops, no creators were found :(
                                    </h4>
                                    <p class="text-content text-xs">
                                        Please check your spelling or try other keywords!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>

<style scoped lang="scss">
.search__result {
    @apply flex flex-wrap rounded-lg w-full;

    @include md_screen {
        @apply absolute left-1/2 z-10 mt-2 -translate-x-1/2 transform shadow-card;
        min-width: 360px;
        max-width: 360px;
        white-space: initial;
        min-width: 360px;
        backdrop-filter: blur(24px);
        background: rgba(255, 255, 255, 0.8);
    }

    .search__result-tablist {
        @apply flex items-center space-x-4 border-b border-black/10 w-full px-4;

        .search__result-tab {
            @apply relative outline-none flex-shrink-0 flex-grow py-4 flex items-center justify-center h-full text-black/50 tracking-wide font-semibold cursor-pointer transition-colors duration-200 ease-out;

            font-size: 12px;

            @include md_screen {
                font-size: 14px;
                @apply flex-grow-0;
            }

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
</style>
