import { defineStore } from 'pinia';
import { publicCampaigns } from '@/mock/campaigns';
import { publicCollections } from '@/mock/collections';

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        query: '',
        campaigns: [],
        collections: []
    }),
    getters: {},
    actions: {
        updateCampaigns() {
            const $query = this.query;
            this.campaigns = [
                ...publicCampaigns.filter((campaign) => campaign.keywords.includes($query))
            ];
        },
        updateCollections() {
            const $query = this.query;
            this.collections = [
                ...publicCollections.filter((collection) => collection.keywords.includes($query))
            ];
        }
    }
});
