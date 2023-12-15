<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import HeroPlus from '@/components/PlusPage/HeroPlus.vue';

const emit = defineEmits(['change-navbar']);
const content = ref(null);
const { width, height } = useWindowSize

const doScroll = () => {
    const { top } = content.value.getBoundingClientRect();
    if (top < 97) emit('change-navbar', '');
    else emit('change-navbar', 'gradient');
};

onMounted(() => {
    emit('change-navbar', 'gradient');
    window.addEventListener('scroll', doScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll);
});
</script>

<template>
    <div class="plus-page">
        <HeroPlus :width="width" :height="height"/>
        <div ref="content"></div>
    </div>
</template>

<style></style>
