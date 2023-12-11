<script setup>
import { ref } from 'vue';

import NavbarDefault from '@/components/organisms/NavbarDefault.vue';
import FooterDefault from '@/components/organisms/FooterDefault.vue';

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
</template>
