<script setup>
import QDot from '@/components/atoms/QDot.vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ref } from 'vue';
dayjs.extend(relativeTime);

defineEmits(['reply']);

defineProps({
    creator: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
});

const showReplies = ref(false);
const replyPage = 1;
</script>

<template>
    <div class="comment">
        <div class="comment__avatar">
            <img :src="creator.avatar" :alt="creator.name" />
        </div>
        <div class="comment__body">
            <div class="comment__header">
                <div class="flex items-center">
                    <div class="comment__creator">
                        {{ creator.name }}
                    </div>

                    <QDot />

                    <div class="comment__time">
                        {{ dayjs(createdAt).fromNow() }}
                    </div>
                </div>

                <div class="comment__actions"></div>
            </div>
            <div class="comment__content">
                {{ comment }}
            </div>

            <div class="comment__likes-replies">
                <div class="comment__react">
                    <i class="ri-thumb-up-line"></i>
                    <span>{{ likes }}</span>
                </div>

                <a class="comment__react" @click="$emit('reply', creator)">
                    <span>Reply</span>
                </a>
            </div>

            <div class="comment__replies">
                <slot name="replies"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.comment {
    @apply flex py-3;

    .comment__avatar {
        @apply flex-shrink-0;

        img {
            @apply w-7 h-7 rounded-full border border-stroke;
        }
    }

    .comment__body {
        @apply ml-3;
    }
    .comment__creator {
        @apply text-sm font-semibold;
    }

    .comment__time {
        @apply text-xs text-content;
    }

    .comment__content {
        @apply leading-relaxed my-1;
        font-size: 0.8rem;
    }

    .comment__likes-replies {
        @apply flex items-center space-x-2;
    }

    .comment__react {
        @apply font-medium text-black/70 flex items-center space-x-1 text-xs hover:text-main cursor-pointer;
    }
}
</style>
