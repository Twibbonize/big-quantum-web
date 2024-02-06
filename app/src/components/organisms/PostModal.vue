<script setup>
import { Form as VeeForm } from 'vee-validate';
import { object as yupObject, string as yupString } from 'yup';
import { inject, computed, ref } from 'vue';
import QButton from '@/components/atoms/QButton.vue';
import QModal from '@/components/atoms/QModal.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import QPopover from '@/components/atoms/QPopover.vue';
import QPopoverMenu from '@/components/atoms/QPopoverMenu.vue';
import QPopoverMenuItem from '@/components/atoms/QPopoverMenuItem.vue';
import CommentWrapper from '@/components/molecules/CommentWrapper.vue';
import CommentInput from '@/components/molecules/CommentInput.vue';

import { usePostStore } from '@/stores/postStore';
import { storeToRefs } from 'pinia';

const isMobile = inject('isMobile');
const captionContainer = ref(null);
const postStore = usePostStore();
const { closePost } = postStore;
const { show, post } = storeToRefs(postStore);

const modalPosition = computed(() => {
    return isMobile.value ? 'screen' : 'center';
});

const commentValidation = yupObject().shape({
    comment_input: yupString().required()
});
</script>
<template>
    <QModal :show="show" :closeBtn="false" :position="modalPosition" @close="closePost" size="xl">
        <template #header>
            <div v-if="post" class="post-modal__header w-full">
                <div
                    class="flex md:hidden items-center justify-between px-4 py-3 w-full border-b border-stroke"
                >
                    <div class="w-10">
                        <a @click="closePost">
                            <i class="ri-arrow-left-s-line ri-lg"></i>
                        </a>
                    </div>
                    <div class="text-sm font-semibold flex-grow flex-shrink-0 text-center">
                        Post
                    </div>
                    <div class="w-10"></div>
                </div>

                <div
                    class="flex items-center justify-between px-4 py-3 w-full border-b border-stroke"
                >
                    <div class="flex items-center space-x-1 flex-shrink-0">
                        <img class="w-8 h-8" :src="post.creator.avatar" alt="Universe Tech" />
                        <div class="flex flex-col">
                            <div class="font-semibold leading-tight text-xs">
                                {{ post.creator.name }}
                            </div>
                            <div class="text-xs text-content">@{{ post.creator.username }}</div>
                        </div>
                    </div>

                    <div class="flex items-center space-x-2">
                        <!-- <button
                            class="w-auto px-2.5 h-10 aspect-square md:aspect-auto hover:bg-black/10 inline-flex items-center justify-center rounded-lg transition-colors">
                            <i class="ri-pushpin-line ri-lg"></i>
                            <span class="text-xs font-semibold ml-1 hidden md:inline">Pin Post</span>
                        </button> -->

                        <QPopover>
                            <template #trigger>
                                <span
                                    class="w-10 h-10 hover:bg-black/10 inline-flex items-center justify-center rounded-lg transition-colors"
                                >
                                    <i class="ri-more-line ri-lg"></i>
                                </span>
                            </template>

                            <QPopoverMenu>
                                <QPopoverMenuItem>
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
                            <QButton variant="subtle" size="sm" square @click="closePost">
                                <i class="ri-close-line ri-lg"></i>
                            </QButton>
                        </div>
                       
                    </div>
                </div>
            </div>
        </template>
        <template #body>
            <div v-if="post" class="post-modal max-h-full flex flex-col">
                <div class="post-modal__upper">
                    <div class="post-modal__image">
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
                                    twb.nz/{{ post.campaign.url }}
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
                <div class="post-modal__lower">
                    <div class="px-4 py-6">
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <div class="text-black font-semibold text-base">
                                    {{ post.creator.name }}
                                </div>

                                <div class="dot"></div>

                                <div class="text-xs text-content">an hour ago</div>
                            </div>
                            <div ref="captionContainer" class="post-modal__caption">
                                <QEllipsisText
                                    :text="post.caption"
                                    :lines="3"
                                    :containerWidth="
                                        (captionContainer && captionContainer.offsetWidth) || 240
                                    "
                                />
                            </div>
                        </div>
                    </div>

                    <div class="post-modal__comments">
                        <div
                            class="post-modal__comments__form p-4 border-y border-stroke space-y-3"
                        >
                            <div class="flex items-center justify-between">
                                <div class="text-sm font-semibold">Comments</div>

                                <div class="flex items-center space-x-1">
                                    <i class="ri-sort-desc"></i>
                                    <span class="text-xs">Sort</span>
                                </div>
                            </div>

                            <VeeForm :validation-schema="commentValidation" v-slot="{ meta }">
                                <CommentInput name="comment_input" placeholder="Share your message">
                                    <template #suffix>
                                        <QButton size="sm" :enabled="meta.valid">
                                            <span class="text-xs">Post</span>
                                        </QButton>
                                    </template>
                                </CommentInput>
                            </VeeForm>
                        </div>
                        <div class="post-modal__comments__forum p-4">
                            <CommentWrapper
                                v-for="(comment, i) in post.comments"
                                v-bind="comment"
                                :key="i"
                            />
                        </div>
                    </div>
                </div>
                <div class="post-modal__body overflow-auto"></div>
            </div>
        </template>
    </QModal>
</template>

<style scoped lang="scss">
.post-modal {
    @apply flex flex-col max-h-full;

    @include md_screen {
        @apply grid grid-cols-12;
    }

    .post-modal__upper {
        height: 100%;
        max-height: 512px;
        @apply flex flex-col col-span-7;
    }

    .post-modal__lower {
        @apply col-span-5;

        @include md_screen {
            height: 100%;
            max-height: 512px;
            overflow-y: auto;
        }
    }

    .post-modal__image {
        @apply max-w-full bg-gray-100 px-4 py-6 flex items-center justify-center flex-grow;

        @include lg_screen {
            @apply h-0;
            min-height: 450px;

            img {
                @apply max-h-full;
            }
        }

        img {
            @apply rounded-xl max-w-full;
        }
    }

    .post-modal__caption {
        @apply leading-relaxed my-1;
        font-size: 0.8rem;
    }

    .dot {
        @apply w-1 h-1 bg-black/20 mx-2 rounded-full;
    }
}
</style>
