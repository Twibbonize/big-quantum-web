<script setup>
import ModalRoot from '@/components/organisms/ModalRoot.vue';
</script>

<template>
    <div id="app__content">
        <slot></slot>

        <div id="app__modal">
            <ModalRoot />
        </div>
    </div>
</template>
