<script setup>
import PostMockupMedia from '@/components/molecules/PostMockupMedia.vue';
const props = defineProps({
    frame: {
        type: String
    },
    photo: {
        type: String
    },
    photoStyle: {
        type: Object,
        default: {}
    },
    display: {
        type: String,
        default: 'grid',
        validators: (value) => ['grid', 'list'].includes(value)
    },
    rounded: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <div class="post-wrapper post-wrapper--mockup">
        <component :is="PostMockupMedia" v-bind="props" />
    </div>
</template>

<style scoped lang="scss">
.post-wrapper.post-wrapper--mockup {
    opacity: 0.18;
}
</style>
