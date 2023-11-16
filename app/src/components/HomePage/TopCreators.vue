<script setup lang="ts">
import CreatorBox from '@/components/elements/CreatorBox.vue'
</script>

<template>
  <div class="tf-section-3 seller background-white">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="heading-section pb-30">
                    <h2 class="tf-title ">Top Creators</h2>
                </div>
            </div>
            <div v-for="number in [1,2,34,5,6,7,8,9,10,11,12]" :key="number" class="wow fadeInUp col-md-4">
                <CreatorBox :number="number"/>
            </div>
        </div>
    </div>
</div>
</template>