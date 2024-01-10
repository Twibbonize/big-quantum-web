import { defineStore } from 'pinia';

export const useShareStore = defineStore('shareStore', {
    state: () => ({
        open: false,
        link: null,
        thumbnail: null,
        type: null,
        creator: null
    }),

    actions: {
        openShare(link, thumbnail, type, creator = null) {
            this.open = true;
            this.link = link;
            this.thumbnail = thumbnail;
            this.type = type;
            this.creator = creator;
        },
        closeShare() {
            this.open = false;
        }
    }
});
