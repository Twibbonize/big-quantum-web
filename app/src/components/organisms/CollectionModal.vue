<script setup>
import { string as yupString, object as yupObject } from 'yup';
import { Field, Form as VeeForm } from 'vee-validate';

import QModal from '@/components/atoms/QModal.vue';
import QButton from '@/components/atoms/QButton.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputTextarea from '@/components/atoms/forms/QInputTextarea.vue';
import CollectionCardSelection from '@/components/molecules/CollectionCardSelection.vue';

import { useCollectionStore } from '@/stores/collectionStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';

const collectionStore = useCollectionStore();
const { show, campaign, view, collections, filteredCollections, selectedCollections } =
    storeToRefs(collectionStore);
const { closeCollectionModal, filterCollectionsByName, toggleSelection } = collectionStore;

const query = ref('');
const formValidation = yupObject().shape({
    name: yupString().required(),
    description: yupString()
});

const onFilterCollection = useDebounceFn(() => {
    filterCollectionsByName(query.value);
}, 600);

onMounted(() => {
    filterCollectionsByName(query.value);
});
</script>
<template>
    <QModal :show="show" @close="show = false" size="lg">
        <template #body>
            <div class="collection-modal">
                <div v-if="view === 'selection' && campaign" class="collection-modal__selection">
                    <div class="collection-modal__header">
                        <h3 class="text-base font-light leading-none">
                            Collect <span class="font-semibold">{{ campaign.name }}</span>
                        </h3>

                        <div class="collection-modal__close">
                            <QButton
                                variant="subtle"
                                size="sm"
                                square
                                @click="closeCollectionModal"
                            >
                                <i class="ri-close-fill ri-xl"></i>
                            </QButton>
                        </div>
                    </div>

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
                                <CollectionCardSelection
                                    v-for="collection in filteredCollections"
                                    v-bind="collection"
                                    @click="toggleSelection(collection.id)"
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

                    <div class="collection-modal__footer">
                        <QButton variant="secondary" size="sm" @click="view = 'create'"
                            >Create a New Collection</QButton
                        >
                        <QButton size="sm" @click="closeCollectionModal">Done</QButton>
                    </div>
                </div>

                <VeeForm
                    v-if="view === 'create' && campaign"
                    :validation-schema="formValidation"
                    :initial-values="{ name: campaign.name }"
                    class="collection-modal__create"
                    v-slot="{ meta }"
                >
                    <div class="collection-modal__header">
                        <h3 class="text-base leading-none font-semibold">Create New Collection</h3>

                        <div class="collection-modal__close">
                            <QButton
                                variant="subtle"
                                size="sm"
                                square
                                @click="closeCollectionModal"
                            >
                                <i class="ri-close-fill ri-xl"></i>
                            </QButton>
                        </div>
                    </div>

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
                    <div class="collection-modal__footer">
                        <QButton
                            v-if="collections.length"
                            variant="secondary"
                            size="sm"
                            @click="view = 'selection'"
                            >Cancel
                        </QButton>
                        <div v-else></div>
                        <QButton size="sm" :enabled="meta.valid"> Create </QButton>
                    </div>
                </VeeForm>
            </div>
        </template>
    </QModal>
</template>

<style scoped lang="scss">
.collection-modal {
    .collection-modal__header {
        @apply p-5 border-b border-stroke;
    }

    .collection-modal__close {
        @apply absolute right-5 top-5 -translate-y-2;
    }

    .collection-modal__filter {
        @apply px-5 py-3;
    }

    // .collection-modal__body {
    //     @apply p-5;
    // }

    .collection-modal__list {
        height: 320px;
        overflow: auto;
        @apply px-5 pt-2 pb-5;
    }

    .collection-modal__footer {
        @apply flex items-center justify-between p-5 border-t border-stroke;
    }
}
</style>
