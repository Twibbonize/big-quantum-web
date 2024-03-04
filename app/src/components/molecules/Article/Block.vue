<script setup>
const props = defineProps({
    block: {
      type: Object,
    },
});
</script>

<template>
  <div class="article-block prose">
    <h3 v-if="block.subtitle" class="subtitle">{{ block.subtitle }}</h3>
    <p v-if="block.paragraph" class="paragraph">{{ block.paragraph }}</p>
    <blockquote v-if="block.tip">
      <span class="tip">Tip:</span>
      <p class="blockquote">{{ block.tip }}</p>
    </blockquote>
    <hr v-if="block.line" class="line"/>
    <figure v-if="block.image">
      <img :src="block.image" alt="-">
      <hr class="mt-4 mb-2">
      <figcaption class="caption">{{ block.caption }}</figcaption>
    </figure>
  </div>
</template>

<style lang="scss">
  .article-block {
    --tw-prose-quote-borders: #16DAC1;

    @apply mt-12;
    color: #475467;
    max-width: 100%;

    .tip {
      @apply not-italic;
      color: #475467;
    }

    .blockquote {
      @apply mt-2;
    }

    .line {
      @apply mt-8;
    }
  }
</style>