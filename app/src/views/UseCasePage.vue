<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import UsecaseBanner from '@/components/organisms/UsecaseBanner.vue';
import { onMounted, nextTick } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

onMounted(async () => {
    await nextTick();

    console.log('Mantap');

    setNavbarColor('transparent');
    setShadow(false);
    setLogoVariant('white');
    setCtaVariant('accent');
});
</script>

<template>
   <LayoutMain>
        <UsecaseBanner/>
   </LayoutMain>
</template>

<style lang="scss">
</style>
