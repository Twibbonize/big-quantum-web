import { defineStore } from 'pinia';

export const useNavbarStore = defineStore('navbarStore', {
    state: () => ({
        navbarColor: 'white',
        shadow: false,
        logoVariant: 'main',
        ctaVariant: 'accent'
    }),
    actions: {
        setNavbarColor(color) {
            this.navbarColor = color;
        },
        setShadow(shadow) {
            this.shadow = shadow;
        },
        setLogoVariant(variant) {
            this.logoVariant = variant;
        },
        setCtaVariant(variant) {
            this.ctaVariant = variant;
        }
    }
});
