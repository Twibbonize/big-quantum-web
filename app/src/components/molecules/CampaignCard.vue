<script setup>
import QCard from '@/components/atoms/QCard.vue';

const props = defineProps({
    campaignCreator: {
        type: Object,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    hit: {
        type: Number,
        required: true
    }
});
</script>


<template>
    <QCard>
        <div class="campaign">
            <figure class="campaign__thumbnail">
                <img :src="thumbnail" class="campaign__thumbnail__img">
            </figure>
            <h3 class="campaign__title">
                {{ name }}
            </h3>
            <div class="campaign__creator">
                <img :src="campaignCreator.avatar" class="campaign___creator__avatar">
                <h4 class="campaign__creator__name">{{ campaignCreator.name }}</h4>
            </div>

            <div class="campaign__meta">
                <div class="campaign__stat">
                    {{ hit }}
                </div>
                <div class="campaign__stat"> {{ createdAt }}</div>
            </div>
        </div>
    </QCard>
</template>

<style scoped lang="scss">
.campaign {


    &:hover {
        @apply 
    }
}
</style>