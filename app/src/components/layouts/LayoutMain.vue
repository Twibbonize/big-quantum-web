<script setup>
import { ref } from 'vue';

import NavbarDefault from '@/components/organisms/NavbarDefault.vue';
import FooterDefault from '@/components/organisms/FooterDefault.vue';
import AuthModal from '@/components/organisms/AuthModal.vue';
import ExpandMenu from '@/components/organisms/ExpandMenu.vue';
import ShareModal from '@/components/organisms/ShareModal.vue';
import CollectionModal from '@/components/organisms/CollectionModal.vue';
import PostModal from '@/components/organisms/PostModal.vue';

defineProps({
    navbarColor: {
        type: String,
        default: 'white'
    }
});
</script>

<template>
    <KeepAlive>
        <NavbarDefault :color="navbarColor" />
    </KeepAlive>

    <div id="app__content">
        <slot></slot>
    </div>

    <KeepAlive>
        <FooterDefault />
    </KeepAlive>

    <AuthModal />
    <ShareModal />
    <CollectionModal />
    <PostModal />
    <ExpandMenu />
</template>
