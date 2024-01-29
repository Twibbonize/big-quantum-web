import { defineStore } from 'pinia';

export const usePostStore = defineStore('postStore', {
    state: () => ({
        show: false,
        post: null
    }),

    actions: {
        showPost(post) {
            this.show = true;
            this.post = post;
        },
        closePost() {
            this.show = false;
            this.post = null;
        }
    }
});
