<script setup>
import { Form as VeeForm } from 'vee-validate';
import { object as yupObject, string as yupString } from 'yup';
import { ref } from 'vue';

import QButton from '@/components/atoms/QButton.vue';
import CommentItem from '@/components/molecules/CommentItem.vue';
import CommentInput from '@/components/molecules/CommentInput.vue';

const props = defineProps({
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
    },
    replies: {
        type: Array,
        default: []
    }
});

const replyInputEl = ref(null);
const reply = ref('');
const targetReply = ref(null);
const showReplies = ref(false);
const showCommentInput = ref(false);
const page = ref(1);

const commentValidation = yupObject().shape({
    comment_input: yupString().required()
});

const handleOpenReply = (creator = null) => {
    showCommentInput.value = true;
    targetReply.value = creator;
    replyInputEl.value.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
    <CommentItem v-bind="props" @reply="handleOpenReply">
        <template v-if="replies.length" #replies>
            <div class="replies">
                <div v-if="showReplies" class="replies__list">
                    <CommentItem v-for="reply in replies" v-bind="reply" @reply="handleOpenReply" />
                </div>

                <div v-show="showCommentInput" ref="replyInputEl" class="replies__input">
                    <VeeForm :validation-schema="commentValidation" v-slot="{ meta }">
                        <CommentInput
                            v-model="reply"
                            name="comment_input"
                            placeholder="Reply as Universe Tech"
                        >
                            <template #suffix>
                                <QButton size="sm" :enabled="meta.valid">Post</QButton>
                            </template>
                        </CommentInput>
                    </VeeForm>
                </div>

                <div class="replies__loader">
                    <a
                        v-if="!showReplies && replies.length"
                        class="replies__loader__link"
                        @click="showReplies = true"
                    >
                        <i class="ri-arrow-down-s-fill ri-lg"></i>
                        <span>{{ replies.length }} replies</span>
                    </a>
                </div>
            </div>
        </template>
    </CommentItem>
</template>

<style scoped lang="scss">
.replies__list {
    @apply mt-3 space-y-3;
}

.replies__input {
    @apply my-3;
}

.replies__loader__link {
    @apply text-main hover:text-main-darker text-sm font-medium cursor-pointer;
}
</style>
