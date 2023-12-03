<script setup>
import { computed, onMounted } from 'vue';

const props = defineProps({
  thumbnail: String,
  title: String,
  avatar: String,
  creator: String,
  supports: Number,
  createdAt: Number,
});

const campaignThumbnailUrl = computed(() => {
  return 'https://placehold.co/350x350?text=Thumbnail'
  // return `${import.meta.env.VITE_CAMPAIGN_THUMBNAIL_URL}/${props.thumbnail}`;
});

const avatarUrl = computed(() => {
  return 'https://placehold.co/80x80?text=Avatar'
})

onMounted(() => {

})
</script>

<template>
  <div class="camp-card rounded-3xl pt-2.5 px-3.5 pb-3.5">
    <div class="img-container aspect-square	flex items-center relative">
      <picture>
        <img class="w-full rounded-xl" :src="campaignThumbnailUrl" :alt="title">
      </picture>
    </div>
    <div class="mt-3">
      <h6 class="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap">Campaign Title with Long Words</h6>
      <div class="flex items-center mt-2.5">
        <img class="avatar rounded-full mr-1.5" :src="avatarUrl" :alt="creator">
        <p class="text-base text-ellipsis overflow-hidden whitespace-nowrap">Creator with Very Long Name</p>
      </div>
    </div>
    <div class="line mt-2.5"></div>
    <div class="flex content-between gap-x-4 mt-2.5">
      <div class="flex items-center">
        <i class="ri-group-line text-base mr-1.5"></i>
        <div class="flex flex-col">
          <span class="text-xs font-bold">Supporters</span>
          <h6 class="text-sm">1.5K</h6>
        </div>
      </div>
      <div class="flex items-center">
        <i class="ri-time-line text-base mr-1.5"></i>
        <div class="flex flex-col">
          <span class="text-xs font-bold">Created</span>
          <h6 class="text-sm font-medium">1 Day Ago</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.camp-card {
  background: #FFF;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, .1);

  .img-container {

  }

  .avatar {
    width: 22px;
    height: 22px;
  }

  .line {
    border-bottom: 1px solid rgba(#1B1B1B, .1);
  }
}
</style>