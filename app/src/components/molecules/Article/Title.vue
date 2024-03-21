<script setup>
import { computed } from 'vue';
import dayjs from 'dayjs';

const props = defineProps({
    title: {
        type: String
    },
    publishedDate: {
        type: [Number, String]
    },
    readtime: {
        type: [Number, String],
        default: 2
    },
    content: {
        type: Array
    }
});

const formattedPublishedDate = computed(() => {
    return `Published ${dayjs(props.publishedDate).format('MMMM DD, YYYY')}`;
});

const formattedReadtime = computed(() => {
    return `${props.readtime} min read`;
});
</script>

<template>
    <div class="article-title">
        <h1 class="title">{{ title }}</h1>
        <div class="article-information">
            <span class="published">
                {{ formattedPublishedDate }}
            </span>
            <span class="dot">·</span>
            <span class="read-time">
                {{ formattedReadtime }}
            </span>
        </div>
    </div>
</template>

<style lang="scss">
.article-title {
    @apply flex flex-col;

    .title {
        @apply text-3xl sm:text-[40px] lg:text-5xl font-bold text-black mt-5;
        letter-spacing: -0.96px;
    }

    .article-information {
        @apply gap-2 flex items-center mt-4;
    }

    .dot {
        @apply text-xl;
    }

    span {
        @apply text-sm font-medium;
        color: #858d9d;
    }
}
</style>
