import { defineStore } from 'pinia';

export const useShareStore = defineStore('shareStore', {
    state: () => ({
        open: false,
        link: null,
        payload: null,
        type: null
    }),

    actions: {
        openShare(link, payload, type) {
            this.open = true;
            this.link = link;
            this.payload = payload;
            this.type = type;
        },
        closeShare() {
            this.open = false;
        }
    }
});
