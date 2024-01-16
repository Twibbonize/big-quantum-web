<script setup>
import QOpenLink from '@/components/atoms/QOpenLink.vue';
import QSlider from '@/components/atoms/QSlider.vue';

const props = defineProps({
    title: String,
    sum: Number,
    campaigns: Array,
    url: String
});
</script>

<template>
    <div class="collections-card">
        <h4 class="card-title">{{ title }}</h4>
        <p class="sum">{{ `${sum} Items` }}</p>
        <QSlider
            class="-mx-5 mt-8"
            direction="horizontal"
            :loop="false"
            slides-per-view="auto"
            :observer="true"
            :observe-parent="true"
            :space-between="30"
            :grab-cursor="true"
        >
            <swiper-slide
                v-for="(campaign, i) in campaigns"
                :key="`${title}-${i}`"
                class="w-fit first:ml-5 last:mr-5"
            >
                <img class="image-slide" :src="`/assets/img/campaigns/${campaign}`" />
            </swiper-slide>
        </QSlider>
        <QOpenLink class="mt-8" text="Explore Collections" :url="url" />
    </div>
</template>

<style lang="scss">
.collections-card {
    @apply rounded-2xl bg-white p-5;
    border: 1px solid rgba(27, 27, 27, 0.1);

    .card-title {
        @apply font-bold text-xl text-left;
    }

    .sum {
        @apply text-lg text-black/40 mt-1;
    }

    .image-slide {
        @apply rounded-xl;
        height: 180px;
        width: 180px;
    }
}
</style>
