import { defineStore } from 'pinia';
import { useModal } from '@/composables/modal';

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
    actions: {
        login() {
            this.user = {
                name: 'Universe Tech',
                avatar: '/assets/img/sample/sample-avatar-1.jpg',
                username: 'universetech'
            };
        },

        logout() {
            this.user = null;
        }
    }
});
