import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
        loading: false,
        modal: {
            show: false,
            authOption: 'sign-in'
        },
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
