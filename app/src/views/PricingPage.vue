<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import PricingBanner from '@/components/organisms/PricingBanner.vue';
import PricingFAQ from '@/components/organisms/PricingFAQ.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

const content = ref(null);

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();

    if (top < 97) {
        setNavbarColor('white');
        setShadow(true);
        setLogoVariant('main');
        setCtaVariant('accent');
    } else {
        setNavbarColor('transparent');
        setShadow(false);
        setLogoVariant('white');
        setCtaVariant('accent');
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);

    setNavbarColor('transparent');
    setShadow(false);
    setLogoVariant('white');
    setCtaVariant('accent');
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <LayoutMain>
        <PricingBanner/>
        <div ref="content"></div>
        <PricingFAQ class="py-14 lg:py-18"/>
    </LayoutMain>
</template>

<style lang="scss">
</style>