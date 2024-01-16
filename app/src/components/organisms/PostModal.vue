<script setup>
import { Form as VeeForm } from 'vee-validate';
import { object as yupObject, string as yupString } from 'yup';
import { inject, computed } from 'vue';
import QButton from '@/components/atoms/QButton.vue';
import QInputTextarea from '@/components/atoms/forms/QInputTextarea.vue';
import QModal from '@/components/atoms/QModal.vue';
import QPopover from '@/components/atoms/QPopover.vue';
import QPopoverMenu from '@/components/atoms/QPopoverMenu.vue';
import QPopoverMenuItem from '@/components/atoms/QPopoverMenuItem.vue';

import { usePostStore } from '@/stores/postStore';
import { storeToRefs } from 'pinia';

const isMobile = inject('isMobile');

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
    <QModal :show="show" :closeBtn="!isMobile" :position="modalPosition" @close="closePost">
        <template #header>
            <div v-if="post" class="post-modal__header w-full">
                <div
                    class="flex items-center justify-between px-4 py-3 w-full border-b border-stroke"
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

                    <div class="flex items-center space-x-1">
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
                    </div>
                </div>
            </div>
        </template>
        <template #body>
            <div v-if="post" class="post-modal max-h-full flex flex-col">
                <div class="post-modal__body overflow-auto">
                    <div
                        class="post-modal__image bg-gray-100 px-4 py-6 flex items-center justify-center"
                    >
                        <img class="rounded-xl max-w-full" :src="post.image" alt="Universe Tech" />
                    </div>

                    <div class="post-modal__caption px-4 py-3">
                        <div class="space-y-2">
                            <div class="text-black font-semibold text-base">
                                {{ post.creator.name }}
                            </div>
                            <p class="prose prose-sm">
                                {{ post.caption }}
                            </p>

                            <div class="text-xs text-content">1 hours ago</div>
                        </div>
                    </div>

                    <div class="post-modal__comment px-4 py-3 border-t border-stroke space-y-3">
                        <div class="flex items-center justify-between sticky top-0">
                            <div class="text-lg font-semibold">Comments</div>

                            <div class="flex items-center space-x-1">
                                <i class="ri-sort-desc"></i>
                                <span class="text-xs">Sort</span>
                            </div>
                        </div>

                        <VeeForm :validation-schema="commentValidation" v-slot="{ meta }">
                            <QInputTextarea
                                name="comment_input"
                                placeholder="share your message"
                                variant="white"
                            >
                                <template #suffix>
                                    <div class="flex justify-end w-full pb-2 pr-2">
                                        <QButton size="sm" :enabled="meta.valid">Post</QButton>
                                    </div>
                                </template>
                            </QInputTextarea>
                        </VeeForm>
                    </div>
                </div>
            </div>
        </template>
    </QModal>
</template>
