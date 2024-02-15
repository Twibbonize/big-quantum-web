<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useResizeObserver } from '@vueuse/core';

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
    },
    lines: {
        type: Number,
        default: 2
    },
    fontSize: {
        type: Number,
        default: 13
    }
});

const emit = defineEmits(['toggle']);

const wrapperEl = ref(null);
const showFullText = ref(false);
const maxLength = ref(240);

const toggleText = () => {
    const { expandable } = props;

    if (expandable) {
        showFullText.value = !showFullText.value;
    }

    emit('toggle');
};

const toggleTextLabel = computed(() => {
    return showFullText.value ? 'Read Less' : 'More';
});

const calculateMaxLength = () => {
    const { lines } = props;
    const averageCharWidth = 8;
    const maxCharacters = Math.floor(props.containerWidth / averageCharWidth) * lines - 8;
    return maxCharacters;
};

const truncatedText = computed(() => {
    return props.text.length > maxLength.value
        ? props.text.slice(0, maxLength.value) + '...'
        : props.text;
});

const computedFontSize = computed(() => `${props.fontSize}px`);

watch(
    () => props.containerWidth,
    (newValue) => {
        maxLength.value = calculateMaxLength();
    }
);

onMounted(() => {
    maxLength.value = calculateMaxLength();
});
</script>

<template>
    <div ref="wrapperEl" class="collapsible-text w-full">
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
    @apply prose prose-lg prose-a:cursor-pointer prose-a:ml-1 max-w-none text-black;
    font-size: v-bind(computedFontSize);
}
</style>
