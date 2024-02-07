<script setup>
import PostMedia from '@/components/molecules/PostMedia.vue';
import PostCard from '@/components/molecules/PostCard.vue';

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    campaign: {
        type: Object,
        required: true
    },
    caption: {
        type: String
    },
    creator: {
        type: Object,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    uri: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        default: []
    },
    rounded: {
        type: Boolean,
        default: true
    },
    display: {
        type: String,
        default: 'grid',
        validators: (value) => ['grid', 'list'].includes(value)
    },
    campaignOwnerPriviledge: {
        type: Boolean,
        default: false
    }
});
</script>
<template>
    <div class="post-wrapper">
        <component
            :is="display === 'grid' ? PostMedia : PostCard"
            v-bind="props"
            :campaignBanner="false"
        />
    </div>
</template>
