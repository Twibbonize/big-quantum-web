<script setup>
import { computed, inject, ref, watch } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    containerWidth: {
        type: Number,
        default: 240
    },
    expandable: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(['toggle']);

const showFullText = ref(false);

const toggleText = () => {
    const { expandable } = props;

    if (expandable) {
        showFullText.value = !showFullText.value;
    }

    emit('toggle');
};

const toggleTextLabel = computed(() => {
    return showFullText.value ? 'Show less' : 'more';
});

const maxLength = computed(() => {
    const averageCharWidth = 7;
    const maxCharacters = Math.floor(props.containerWidth / averageCharWidth) * 2 - 8;
    return maxCharacters;
});

const truncatedText = computed(() => {
    return props.text.length > maxLength.value
        ? props.text.slice(0, maxLength.value) + '...'
        : props.text;
});
</script>

<template>
    <div class="collapsible-text w-full">
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
    @apply prose prose-sm prose-a:cursor-pointer prose-a:ml-1 max-w-none;
}
</style>
