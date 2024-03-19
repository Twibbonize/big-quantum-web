<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
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
        setNavbarColor('transparent-white');
        setShadow(false);
        setLogoVariant('black');
        setCtaVariant('accent');
    }
};

onMounted(() => {
    window.addEventListener('scroll', doScroll);

    setNavbarColor('transparent-white');
    setShadow(false);
    setLogoVariant('black');
    setCtaVariant('accent');
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <LayoutMain>
        <div ref="content"></div>
    </LayoutMain>
</template>

<style lang="scss"></style>
