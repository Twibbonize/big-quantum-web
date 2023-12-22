import { defineStore } from 'pinia';

export const useExpandMenuStore = defineStore('expandMenuStore', {
    state: () => ({
        open: false
    })
});
