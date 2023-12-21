import { defineStore } from 'pinia';

export const useAccountStore = defineStore('accountStore', {
    state: () => ({
        user: null,
        loading: false,
        error: null,
        verifyPayload: {
            otp: null,
            email: null,
            case: null
        }
    }),
    getters: {
        isLoggedIn() {
            return this.user !== null;
        }
    },
    actions: {}
});
