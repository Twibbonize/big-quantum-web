<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    maxLength: {
        type: Number,
        default: 148
    }
});

const showFullText = ref(false);

const truncatedText = computed(() => {
    return props.text.length > props.maxLength
        ? props.text.slice(0, props.maxLength) + '...'
        : props.text;
});

const toggleText = () => {
    showFullText.value = !showFullText.value;
};

const toggleTextLabel = computed(() => {
    return showFullText.value ? 'Show less' : 'more';
});
</script>

<template>
    <div class="collapsible-text">
        <span v-if="!showFullText" class="collapsible-text__truncated">
            {{ truncatedText }}
        </span>

        <span v-else class="collasipble-text__full">
            {{ text }}
        </span>
        <a @click="toggleText">{{ toggleTextLabel }}</a>
    </div>
</template>

<style scoped lang="scss">
.collapsible-text {
    @apply prose prose-sm prose-a:cursor-pointer prose-a:ml-1;
}
</style>
