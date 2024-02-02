import { defineStore } from 'pinia';
import { publicCampaigns } from '@/mock/campaigns';
import { publicCollections } from '@/mock/collections';
import { creators } from '@/mock/creators';

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        query: '',
        campaigns: [],
        collections: [],
        creators: []
    }),
    actions: {
        updateCampaigns() {
            const $query = this.query.toLowerCase();
            this.campaigns = [
                ...publicCampaigns.filter((campaign) => campaign.keywords.includes($query))
            ];
        },
        updateCollections() {
            const $query = this.query.toLowerCase();
            this.collections = [
                ...publicCollections.filter((collection) => collection.keywords.includes($query))
            ];
        },

        updateCreators() {
            const $query = this.query.toLowerCase();
            this.creators = [
                ...creators.filter((creator) => creator.name.toLowerCase().includes($query))
            ];
        }
    }
});
