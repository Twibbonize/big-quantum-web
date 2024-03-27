<script setup>
import { Form as VeeForm } from 'vee-validate';
import { object as yupObject, string as yupString } from 'yup';
import { computed, inject, ref } from 'vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import LayoutBlank from '@/components/layouts/LayoutBlank.vue';
import QButton from '@/components/atoms/QButton.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import QPopover from '@/components/atoms/QPopover.vue';
import QPopoverMenu from '@/components/atoms/QPopoverMenu.vue';
import QPopoverMenuItem from '@/components/atoms/QPopoverMenuItem.vue';
import CommentWrapper from '@/components/molecules/CommentWrapper.vue';
import CommentInput from '@/components/molecules/CommentInput.vue';

import { usePostStore } from '@/stores/postStore';

import { publicPosts } from '@/mock/posts';

const props = defineProps({
    uri: {
        type: String,
        required: true
    }
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

const post = computed(() => {
    return publicPosts.find((p) => p.uri === props.uri);
});

const captionContainer = ref(null);
const postStore = usePostStore();
const { closePost } = postStore;

import { useShareStore } from '@/stores/shareStore';
const shareStore = useShareStore();
const { openShare } = shareStore;

const commentValidation = yupObject().shape({
    comment_input: yupString().required()
});

const handleOpenShare = () => {
    const { creator, createdAt, uri, image } = post.value;

    const { username } = creator;
    const datetime = dayjs(createdAt);
    const formattedDate = datetime.format('MMM D, YYYY');

    openShare(
        `twibbo.nz/p/${uri}`,
        { name: `Post shared on ${formattedDate}`, username: username, avatar: image },
        'post'
    );
};
</script>

<template>
    <Transition name="fade">
        <Component :is="LayoutBlank">
            <div :class="[!sm && 'page']">
                <div v-if="post" class="post">
                    <div class="flex flex-col h-full">
                        <div class="post__header">
                            <div class="post__header w-full border-b border-stroke">
                                <div
                                    class="flex md:hidden items-center justify-between px-4 py-3 w-full border-b border-stroke"
                                >
                                    <div class="w-10">
                                        <a @click="closePost">
                                            <i class="ri-arrow-left-s-line ri-lg"></i>
                                        </a>
                                    </div>
                                    <div
                                        class="text-sm font-semibold flex-grow flex-shrink-0 text-center"
                                    >
                                        Post
                                    </div>
                                    <div class="w-10"></div>
                                </div>

                                <div
                                    class="flex items-center justify-between container px-4 py-3 xl:px-0 w-full"
                                >
                                    <div class="flex items-center space-x-1 flex-shrink-0">
                                        <img
                                            class="w-8 h-8"
                                            :src="post.creator.avatar"
                                            alt="Universe Tech"
                                        />
                                        <div class="flex flex-col">
                                            <div class="font-semibold leading-tight text-xs">
                                                {{ post.creator.name }}
                                            </div>
                                            <div class="text-xs text-content">
                                                @{{ post.creator.username }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex items-center space-x-2">
                                        <QPopover>
                                            <template #trigger>
                                                <span
                                                    class="w-10 h-10 hover:bg-black/10 inline-flex items-center justify-center rounded-lg transition-colors"
                                                >
                                                    <i class="ri-more-line ri-lg"></i>
                                                </span>
                                            </template>

                                            <QPopoverMenu>
                                                <QPopoverMenuItem @click="handleOpenShare">
                                                    <i class="ri-share-line ri-1x"></i>
                                                    <span>Share</span>
                                                </QPopoverMenuItem>

                                                <QPopoverMenuItem>
                                                    <div class="text-red-400 space-x-2">
                                                        <i class="ri-flag-line ri-1x"></i>
                                                        <span>Report</span>
                                                    </div>
                                                </QPopoverMenuItem>
                                            </QPopoverMenu>
                                        </QPopover>

                                        <div class="hidden md:block">
                                            <QButton
                                                variant="subtle"
                                                size="sm"
                                                square
                                                @click="closePost"
                                            >
                                                <i class="ri-close-line ri-lg"></i>
                                            </QButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="post__body">
                            <div class="post__wrapper max-h-full flex flex-col">
                                <div class="post__upper">
                                    <div class="post__image">
                                        <img :src="post.image" alt="Universe Tech" />
                                    </div>

                                    <div class="bg-black text-white px-3 py-2 pb-3">
                                        <div class="flex items-center justify-between space-x-2">
                                            <div class="flex flex-col w-0 flex-grow">
                                                <div
                                                    class="text-sm font-semibold leading-tight w-full text-ellipsis truncate overflow-hidden"
                                                >
                                                    {{ post.campaign.name }}
                                                </div>
                                                <div class="text-xxs text-content mt-1">
                                                    twibbo.nz/{{ post.campaign.url }}
                                                </div>
                                            </div>

                                            <div class="flex-shrink-0">
                                                <QButton
                                                    size="sm"
                                                    variant="secondary"
                                                    @click="$router.push({ name: 'campaign' })"
                                                >
                                                    <span class="text-xs">Get Yours</span>
                                                </QButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post__lower container pr-[80px]">
                                    <div class="px-4 py-6">
                                        <div class="space-y-2">
                                            <div class="flex items-center">
                                                <div class="text-black font-semibold text-base">
                                                    {{ post.creator.name }}
                                                </div>

                                                <div class="dot"></div>

                                                <div class="text-xs text-content">an hour ago</div>
                                            </div>
                                            <div
                                                v-if="post.caption"
                                                ref="captionContainer"
                                                class="post__caption"
                                            >
                                                <QEllipsisText
                                                    :text="post.caption"
                                                    :lines="3"
                                                    :containerWidth="
                                                        (captionContainer &&
                                                            captionContainer.offsetWidth) ||
                                                        240
                                                    "
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="post__comments">
                                        <div
                                            class="post__comments__form p-4 border-y border-stroke space-y-3"
                                        >
                                            <div class="flex items-center justify-between">
                                                <div class="text-sm font-semibold">Comments</div>

                                                <div class="flex items-center space-x-1">
                                                    <i class="ri-sort-desc"></i>
                                                    <span class="text-xs">Sort</span>
                                                </div>
                                            </div>

                                            <VeeForm
                                                :validation-schema="commentValidation"
                                                v-slot="{ meta }"
                                            >
                                                <CommentInput
                                                    name="comment_input"
                                                    placeholder="Share your message"
                                                >
                                                    <template #suffix>
                                                        <QButton size="sm" :enabled="meta.valid">
                                                            <span class="text-xs">Post</span>
                                                        </QButton>
                                                    </template>
                                                </CommentInput>
                                            </VeeForm>
                                        </div>
                                        <div class="post__comments__forum p-4">
                                            <CommentWrapper
                                                v-for="(comment, i) in post.comments"
                                                v-bind="comment"
                                                :key="i"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Component>
    </Transition>
</template>

<style scoped lang="scss">
.post {
    @apply mx-auto flex flex-col h-full border-t border-stroke;

    .post__body {
        @apply flex flex-col flex-grow;

        @include md_screen {
            @apply h-0;
        }
    }

    .post__wrapper {
        @apply flex flex-col max-h-full h-full;

        @include md_screen {
            @apply grid grid-cols-12;
        }
    }

    .post__upper {
        height: 100%;
        @apply flex flex-col col-span-8;
    }

    .post__lower {
        @apply col-span-4 border-l border-stroke;

        @include md_screen {
            height: 100%;
            overflow-y: auto;
        }
    }

    .post__image {
        @apply max-w-full flex items-center justify-center flex-grow;

        @include lg_screen {
            @apply h-0 py-6;
            // min-height: 450px;

            img {
                @apply rounded-xl max-h-full;
            }
        }

        img {
            @apply max-w-full;
        }
    }

    .post__caption {
        @apply leading-relaxed my-1;
        font-size: 0.8rem;
    }

    .dot {
        @apply w-1 h-1 bg-black/20 mx-2 rounded-full;
    }
}
</style>
