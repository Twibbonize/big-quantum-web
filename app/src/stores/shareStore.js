import { defineStore } from 'pinia';

export const useShareStore = defineStore('shareStore', {
    state: () => ({
        open: false,
        link: null,
        thumbnail: null,
        type: null
    }),

    actions: {
        openShare(link, thumbnail, type) {
            this.open = true;
            this.link = link;
            this.thumbnail = thumbnail;
            this.type = type;
        },
        closeShare() {
            this.open = false;
        }
    }
});
