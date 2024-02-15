<script setup>
import { string as yupString, object as yupObject } from 'yup';
import { Form as VeeForm } from 'vee-validate';
import { breakpointsTailwind, useBreakpoints, useDebounceFn } from '@vueuse/core';
import { onBeforeRouteLeave } from 'vue-router';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';

import QButton from '@/components/atoms/QButton.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputTextarea from '@/components/atoms/forms/QInputTextarea.vue';
import CollectionCard from '@/components/molecules/CollectionCard.vue';
import { useModal } from '@/composables/modal';
import { useCollectionStore } from '@/stores/collectionStore';

const props = defineProps({
    isDragging: {
        type: Boolean
    },
    campaign: {
        type: Object,
        required: true
    }
});
const collectionStore = useCollectionStore();
const { show, view, collections, filteredCollections, selectedCollections } =
    storeToRefs(collectionStore);
const { filterCollectionsByName, toggleSelection } = collectionStore;

const { close, update } = useModal();
const query = ref('');
const formValidation = yupObject().shape({
    name: yupString().required(),
    description: yupString()
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

watch(sm, (newValue) => {
    update({
        position: newValue ? 'bottom' : 'center'
    });
});

const onFilterCollection = useDebounceFn(() => {
    filterCollectionsByName(query.value);
}, 600);

onMounted(() => {
    filterCollectionsByName(query.value);
});

onBeforeRouteLeave(() => {
    if (show.value) {
        show.value = false;
        return;
    }
});
</script>
<template>
    <div class="collection-modal">
        <Teleport to=".dialog__header">
            <div class="collection-modal__header">
                <div v-if="view === 'selection'">
                    <h3 class="text-lg leading-snug max-w-xs md:max-w-none">
                        Add <span class="font-bold">{{ campaign.name }}</span> to Collections
                    </h3>

                    <div v-show="!sm" class="collection-modal__close">
                        <QButton variant="subtle" size="sm" square @click="close">
                            <i class="ri-close-fill ri-xl"></i>
                        </QButton>
                    </div>
                </div>
                <div v-else>
                    <h3 class="text-base leading-none font-semibold">Create New Collection</h3>

                    <div v-show="!sm" class="collection-modal__close">
                        <QButton variant="subtle" size="sm" square @click="close">
                            <i class="ri-close-fill ri-xl"></i>
                        </QButton>
                    </div>
                </div>
            </div>
        </Teleport>

        <div v-if="view === 'selection' && campaign" class="collection-modal__selection">
            <div class="collection-modal__body">
                <div class="collection-modal__filter">
                    <QInputText
                        v-model="query"
                        name="search"
                        size="sm"
                        placeholder="Search your Collections"
                        @input="onFilterCollection"
                    >
                        <template #prefix>
                            <div class="pl-3 pr-1 h-full">
                                <i class="ri-search-line text-content"></i>
                            </div>
                        </template>
                    </QInputText>
                </div>

                <div class="collection-modal__list">
                    <div
                        v-if="filteredCollections.length"
                        class="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        <CollectionCard
                            v-for="collection in filteredCollections"
                            v-bind="collection"
                            @click="toggleSelection(collection.id)"
                            checkable
                            :checked="selectedCollections.includes(collection.id)"
                        />
                    </div>

                    <div
                        v-else
                        class="flex flex-col items-center justify-center text-center py-5 space-y-1"
                    >
                        <div class="font-semibold">Collection not found</div>
                        <p class="text-content text-sm">Try filter with other keyword</p>
                    </div>
                </div>
            </div>

            <Teleport to="body" :disabled="!isDragging">
                <div class="collection-modal__footer">
                    <QButton variant="secondary" size="sm" @click="view = 'create'">
                        <i class="ri-add-line"></i>
                        <span class="ml-2">New Collection</span>
                    </QButton>

                    <QButton size="sm" @click="close">Done</QButton>
                </div>
            </Teleport>
        </div>

        <VeeForm
            v-if="view === 'create' && campaign"
            :validation-schema="formValidation"
            :initial-values="{ name: campaign.name }"
            class="collection-modal__create"
            v-slot="{ meta }"
        >
            <div class="collection-modal__body p-5">
                <div class="space-y-6">
                    <div class="space-y-3">
                        <label for="name" class="text-sm font-semibold">Name</label>
                        <QInputText id="name" name="name" placeholder="Enter name" />
                    </div>

                    <div class="space-y-3">
                        <label for="description" class="text-sm font-semibold"
                            >Description
                            <span class="font-normal text-content">(optional)</span></label
                        >
                        <QInputTextarea
                            id="description"
                            name="description"
                            placeholder="Enter description"
                        />
                    </div>
                </div>
            </div>

            <Teleport to="body" :disabled="!isDragging">
                <div class="collection-modal__footer">
                    <QButton
                        v-if="collections.length"
                        variant="secondary"
                        size="sm"
                        @click="view = 'selection'"
                    >
                        Cancel
                    </QButton>
                    <div v-else></div>
                    <QButton size="sm" :enabled="meta.valid"> Create </QButton>
                </div>
            </Teleport>
        </VeeForm>
    </div>
</template>

<style scoped lang="scss">
.collection-modal {
    height: 100%;
}

.collection-modal__footer {
    @apply fixed bottom-0 w-full;
    z-index: 9999;
}

.collection-modal__header {
    @apply p-5 pt-0 border-b border-stroke w-full;

    @include md_screen {
        @apply pt-5;
    }
}

.collection-modal__close {
    @apply absolute right-5 top-5 -translate-y-2;
}

.collection-modal__selection,
.collection-modal__create {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.collection-modal__filter {
    @apply px-5 py-3;
}

.collection-modal__body {
    flex: 1;
    overflow-y: auto;
}

.collection-modal__list {
    // height: 320px;
    min-height: 280px;
    overflow: auto;
    @apply px-5 pt-2;
    padding-bottom: 86px;
}

.collection-modal__footer {
    @apply flex items-center justify-between px-5 py-6 border-t border-stroke bg-white;
}
</style>
