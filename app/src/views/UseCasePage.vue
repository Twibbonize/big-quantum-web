<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import UsecaseBanner from '@/components/organisms/UsecaseBanner.vue';
import UsecaseBento from '@/components/organisms/UsecaseBento.vue';
import { onMounted, nextTick } from 'vue';
import { useNavbarStore } from '@/stores/navbarStore';

const navbarStore = useNavbarStore();
const { setShadow, setNavbarColor, setLogoVariant, setCtaVariant } = navbarStore;

onMounted(async () => {
    await nextTick();

    setNavbarColor('transparent');
    setShadow(false);
    setLogoVariant('white');
    setCtaVariant('accent');
});
</script>

<template>
   <LayoutMain>
        <UsecaseBanner/>
        <UsecaseBento class="py-14 lg:py-18"/>
   </LayoutMain>
</template>

<style lang="scss">
</style>
