<script setup>
import AuthModal from '@/components/organisms/AuthModal.vue';
import ShareModal from '@/components/organisms/ShareModal.vue';
import CollectionModal from '@/components/organisms/CollectionModal.vue';
import PostModal from '@/components/organisms/PostModal.vue';
</script>

<template>
    <div id="app__content">
        <slot></slot>

        <AuthModal />
        <ShareModal />
        <CollectionModal />
        <PostModal />
    </div>
</template>
