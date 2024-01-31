import { defineStore } from 'pinia';
import { ownCollections } from '@/mock/collections';

export const useCollectionStore = defineStore('collectionStore', {
    state: () => ({
        show: false,
        view: 'selection',
        campaign: null,
        collections: [...ownCollections],
        filteredCollections: [],
        selectedCollections: []
    }),

    actions: {
        showCollectionModal(campaign) {
            this.show = true;
            this.campaign = campaign;
            this.view = this.collections.length ? 'selection' : 'create';
        },
        closeCollectionModal() {
            this.show = false;
            this.campaign = null;
        },
        filterCollectionsByName(query) {
            if (query === '') {
                this.filteredCollections = this.collections;
                return;
            }

            // Filter collections based on the search query
            this.filteredCollections = this.collections.filter((collection) =>
                collection.name.toLowerCase().includes(query.toLowerCase())
            );
        },
        toggleSelection(id) {
            if (this.selectedCollections.includes(id)) {
                this.selectedCollections = this.selectedCollections.filter(
                    (collectionId) => collectionId !== id
                );
            } else {
                this.selectedCollections.push(id);
            }
        }
    }
});
