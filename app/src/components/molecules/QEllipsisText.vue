<script setup>
import { computed, inject, ref } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    }
});

const showFullText = ref(false);
const textContainer = ref(null);

const isMobile = inject('isMobile');


const toggleText = () => {
    showFullText.value = !showFullText.value;
};

const toggleTextLabel = computed(() => {
    return showFullText.value ? 'Show less' : 'more';
});


const maxLength = computed(() => {
    if (!textContainer.value) {
        return 60;
    }

    const averageCharWidth = (isMobile.value ? 0.6 : 0.5 ) * 14;
    const maxCharacters = Math.floor(textContainer.value.offsetWidth / averageCharWidth) * 2 - 10;
    return maxCharacters;
});

const truncatedText = computed(() => {
    return props.text.length > maxLength.value
        ? props.text.slice(0, maxLength.value) + '...'
        : props.text;
});

</script>

<template>
    <div ref="textContainer" class="collapsible-text">
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
    @apply prose md:prose-sm prose-a:cursor-pointer prose-a:ml-1;
}
</style>
