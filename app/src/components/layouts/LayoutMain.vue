<script setup>
import NavbarDefault from '@/components/organisms/NavbarDefault.vue';
import FooterDefault from '@/components/organisms/FooterDefault.vue';
import ExpandMenu from '@/components/organisms/ExpandMenu.vue';
import ModalRoot from '@/components/organisms/ModalRoot.vue';
</script>

<template>
    <div id="app__content">
        <NavbarDefault />
        <slot></slot>
        <FooterDefault />

        <div id="app__modal">
            <ModalRoot />
        </div>

        <ExpandMenu />
    </div>
</template>
