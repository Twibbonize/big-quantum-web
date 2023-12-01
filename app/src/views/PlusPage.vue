<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeroPlus from '@/components/PlusPage/HeroPlus.vue';

const emit = defineEmits(['change-navbar']);
const content = ref(null);
 
const doScroll = () => {
  const { top } = content.value.getBoundingClientRect();
  if (top < 97) emit('change-navbar', '');
  else emit('change-navbar', 'gradient');
}
 
onMounted(() => {
  emit('change-navbar', 'gradient')
  window.addEventListener('scroll', doScroll)
})
   
onUnmounted(() => {
  window.removeEventListener('scroll', doScroll)
})

</script>

<template>
  <div class="plus-page">
    <HeroPlus/>
    <div ref="content"></div>
  </div>
</template>

<style>
</style>