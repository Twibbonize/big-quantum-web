<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QListbox from '@/components/atoms/forms/QListbox.vue';
import CampaignCard from '@/components/molecules/CampaignCard.vue';
import CollectionCard from '@/components/molecules/CollectionCard.vue';
import CreatorBox from '@/components/elements/CreatorBox.vue';
import { useSearchStore } from '@/stores/searchStore';
import { useNavbarStore } from '@/stores/navbarStore';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { publicCampaigns } from '@/mock/campaigns';
import { publicCollections } from '@/mock/collections';
import { creators } from '@/mock/creators';
import { storeToRefs } from 'pinia';

const props = defineProps({
    tab: {
        type: String,
        default: 'campaign'
    }
});

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const searchStore = useSearchStore();
const { query } = storeToRefs(searchStore);

const router = useRouter();
const route = useRoute();
const tabs = ['campaign', 'collection', 'creator'];

const sortCampaignOptions = [{ name: 'Trending' }, { name: 'Most Popular' }];
const selectedSortCampaign = ref(sortCampaignOptions[0]);

const onChangeTab = (index) => {
    const nextTab = tabs[index];
    router.push({ name: 'explore', params: { tab: nextTab } });
};

const selectedTabIndex = computed(() => {
    const paramTab = props.tab;
    return tabs.findIndex((item) => paramTab === item);
});

onMounted(() => {
    setNavbarColor('white');
    setShadow(false);
    setLogoVariant('main');
    setCtaVariant('accent');
});
</script>

<template>
    <LayoutMain>
        <div class="page explore">
            <TabGroup
                :selectedIndex="selectedTabIndex"
                as="div"
                class="explore__tab-group"
                @change="onChangeTab"
            >
                <div class="explore__wrapper explore__tabs-wrapper border-t border-stroke">
                    <div class="container px-4 xl:px-0">
                        <div class="flex items-center justify-between">
                            <TabList class="explore__tab-list w-full md:w-auto">
                                <Tab v-slot="{ selected }" as="template">
                                    <button
                                        :class="[
                                            'explore__tab',
                                            selected && 'explore__tab--selected'
                                        ]"
                                    >
                                        <i class="ri-megaphone-line"></i>
                                        <span class="ml-1.5 lg:flex-grow-1">Campaigns</span>
                                    </button>
                                </Tab>

                                <Tab v-slot="{ selected }" as="template">
                                    <button
                                        :class="[
                                            'explore__tab',
                                            selected && 'explore__tab--selected'
                                        ]"
                                    >
                                        <i class="ri-folder-image-line"></i>
                                        <span class="ml-1.5 lg:flex-grow-1"> Collections </span>
                                    </button>
                                </Tab>

                                <Tab v-slot="{ selected }" as="template">
                                    <button
                                        :class="[
                                            'explore__tab',
                                            selected && 'explore__tab--selected'
                                        ]"
                                    >
                                        <i class="ri-user-line"></i>
                                        <span class="ml-1.5 lg:flex-grow-1"> Creators </span>
                                    </button>
                                </Tab>
                            </TabList>

                            <div
                                v-show="selectedTabIndex === 0"
                                class="max-w-xs flex-grow hidden md:block"
                            >
                                <QListbox
                                    v-model="selectedSortCampaign"
                                    :options="sortCampaignOptions"
                                    name="campaigns_sort"
                                    prefix="Sort by: "
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <TabPanels>
                    <TabPanel>
                        <Transition name="fade" mode="out-in">
                            <div class="explore__tab-panel">
                                <div class="container px-4 xl:px-0 py-6">
                                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        <CampaignCard
                                            v-for="campaign in publicCampaigns"
                                            v-bind="campaign"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </TabPanel>

                    <TabPanel>
                        <Transition name="fade" mode="out-in">
                            <div class="explore__tab-panel">
                                <div class="container px-4 xl:px-0 py-6">
                                    <div
                                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                    >
                                        <RouterLink
                                            v-for="collection in publicCollections"
                                            :key="collection.uri"
                                            :to="{
                                                name: 'collection',
                                                params: { uri: collection.uri }
                                            }"
                                        >
                                            <CollectionCard v-bind="collection" />
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </TabPanel>

                    <TabPanel>
                        <Transition name="fade" mode="out-in">
                            <div class="explore__tab-panel">
                                <div class="container px-4 xl:px-0 py-6">
                                    <div
                                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6"
                                    >
                                        <CreatorBox v-for="creator in creators" v-bind="creator" />
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </LayoutMain>
</template>

<style scoped lang="scss">
.explore {
    .explore__wrapper {
        @apply border-b border-stroke;
    }

    .explore__tabs-wrapper {
        @apply sticky bg-white z-40;
        top: 76px;

        @include xs {
            top: 68px;
        }

        @include md_screen {
            top: 88px;
        }
    }

    .explore__tab-list {
        @apply flex items-center justify-between space-x-2 md:space-x-6;
    }

    .explore__tab {
        @apply relative outline-none flex-shrink-0 py-4 md:py-6 flex items-center justify-center h-full text-black/50 tracking-wide font-medium cursor-pointer transition-colors duration-200 ease-out flex-grow;

        font-size: 0.75rem;

        @include sm {
            @apply flex-grow;
        }

        @include md_screen {
            font-size: 0.9rem;
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
            border-top-right-radius: 0.5px;
            border-top-left-radius: 0.5px;
        }
    }
}
</style>
