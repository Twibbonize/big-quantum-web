<script setup lang="ts">
import { ref } from 'vue';
import CreatorBox from '@/components/elements/CreatorBox.vue';
import TWToggleSwitch3State from '@/components/base/TWToggleSwitch3State.vue';

const creators = ref([
  {
    name: 'Universe Tech',
    avatar: 'sample-avatar-1.jpg',
    supports: 585040,
  },
  {
    name: 'Fashion Week',
    avatar: 'sample-avatar-2.jpg',
    supports: 182200,
  },
  {
    name: 'David Alexander',
    avatar: 'sample-avatar-3.jpg',
    supports: 632100,
  },
  {
    name: 'Liberty Scholarship',
    avatar: 'sample-avatar-4.jpg',
    supports: 385700,
  },
  {
    name: 'Albert Forest',
    avatar: 'sample-avatar-5.jpg',
    supports: 785500,
  },
  {
    name: 'Eleanor Pena',
    avatar: 'sample-avatar-6.jpg',
    supports: 124100,
  },
  {
    name: 'Ronlad Richard',
    avatar: 'sample-avatar-7.jpg',
    supports: 825000,
  },
  {
    name: 'Bit by Bit',
    avatar: 'sample-avatar-8.jpg',
    supports: 284300,
  },
  {
    name: 'Arlene McCoy',
    avatar: 'sample-avatar-9.jpg',
    supports: 199100,
  },
])

function getImageUrl(name: String) {
  const filename = `/assets/img/sample/${name}`; 
  return new URL(filename, import.meta.url).href;
}
</script>

<template>
  <div class="tf-section seller background-white">
    <div class="container">
        <div class="row">
            <div class="d-flex align-items-center justify-content-between col-md-12 pb-30">
                <div class="heading-section">
                    <h2 class="tf-title ">Top Creators</h2>
                </div>
                <div class="heading-section d-flex gap-3 align-items-center">
                  <TWToggleSwitch3State/>
                  <a class="d-flex align-items-center color_black" href="explore-3.html">View All<i class="ri-arrow-right-line"></i></a>
                </div>
            </div>
            <div v-for="{ name, avatar, supports }, i in creators" :key="i + 1" class="wow fadeInUp col-md-4">
                <CreatorBox
                  :number="i + 1"
                  :name="name"
                  :avatar="getImageUrl(avatar)"
                  :supports="supports"
                />
            </div>
        </div>
    </div>
</div>
</template>