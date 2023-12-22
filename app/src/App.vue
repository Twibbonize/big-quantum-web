<script setup>
import { ref } from 'vue';

import NavbarDefault from '@/components/organisms/NavbarDefault.vue';
import FooterDefault from '@/components/organisms/FooterDefault.vue';
import AuthModal from '@/components/organisms/AuthModal.vue';
import ExpandMenu from '@/components/organisms/ExpandMenu.vue';

const navbarColor = ref('');

function changeNavbarColor(value) {
    navbarColor.value = value;
}
</script>

<template>
    <KeepAlive>
        <NavbarDefault :color="navbarColor" />
    </KeepAlive>
    <RouterView @change-navbar="changeNavbarColor" />
    <KeepAlive>
        <FooterDefault />
    </KeepAlive>

    <AuthModal />
    <ExpandMenu />
</template>
