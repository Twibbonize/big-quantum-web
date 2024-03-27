<script setup>
import { onMounted } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

onMounted(() => {
    setNavbarColor('transparent-white');
    setShadow(false);
    setLogoVariant('white');
    setCtaVariant('accent');
});
</script>

<template></template>

<style lang="scss"></style>
