<script setup>
import { Form as VeeForm } from 'vee-validate';
import { object as yupObject, string as yupString } from 'yup';
import { watch, computed, ref } from 'vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

import QButton from '@/components/atoms/QButton.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import QPopover from '@/components/atoms/QPopover.vue';
import QPopoverMenu from '@/components/atoms/QPopoverMenu.vue';
import QPopoverMenuItem from '@/components/atoms/QPopoverMenuItem.vue';
import CommentWrapper from '@/components/molecules/CommentWrapper.vue';
import CommentInput from '@/components/molecules/CommentInput.vue';

import { useModal } from '@/composables/modal';

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    campaign: {
        type: Object,
        required: true
    },
    caption: {
        type: String
    },
    creator: {
        type: Object,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    uri: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        default: []
    },
    campaignBanner: {
        type: Boolean,
        default: true
    },
    campaignOwnerPriviledge: {
        type: Boolean,
        default: false
    }
});

const captionContainer = ref(null);
const { update, close } = useModal();
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');

const modalPosition = computed(() => {
    return sm.value ? 'screen' : 'center';
});

watch(sm, (newValue) => {
    update({
        position: newValue ? 'screen' : 'center'
    });
});

const commentValidation = yupObject().shape({
    comment_input: yupString().required()
});
</script>
<template>
    <div class="post-modal max-h-full flex flex-col">
        <Teleport to=".dialog__header">
            <div class="post-modal__header w-full">
                <div
                    class="flex md:hidden items-center justify-between px-4 py-3 w-full border-b border-stroke"
                >
                    <div class="w-10">
                        <a @click="close">
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
                        <img class="w-8 h-8" :src="creator.avatar" alt="Universe Tech" />
                        <div class="flex flex-col">
                            <div class="font-semibold leading-tight text-xs">
                                {{ creator.name }}
                            </div>
                            <div class="text-xs text-content">@{{ creator.username }}</div>
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
                            <QButton variant="subtle" size="sm" square @click="close">
                                <i class="ri-close-line ri-lg"></i>
                            </QButton>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>

        <div class="post-modal__upper">
            <div class="post-modal__image">
                <img :src="image" alt="Universe Tech" />
            </div>

            <div class="bg-black text-white px-3 py-2 pb-3">
                <div class="flex items-center justify-between space-x-2">
                    <div class="flex flex-col w-0 flex-grow">
                        <div
                            class="text-sm font-semibold leading-tight w-full text-ellipsis truncate overflow-hidden"
                        >
                            {{ campaign.name }}
                        </div>
                        <div class="text-xxs text-content mt-1">twb.nz/{{ campaign.url }}</div>
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
                            {{ creator.name }}
                        </div>

                        <div class="dot"></div>

                        <div class="text-xs text-content">an hour ago</div>
                    </div>
                    <div ref="captionContainer" class="post-modal__caption">
                        <QEllipsisText
                            v-if="caption"
                            :text="caption"
                            :lines="3"
                            :containerWidth="
                                (captionContainer && captionContainer.offsetWidth) || 240
                            "
                        />
                    </div>
                </div>
            </div>

            <div class="post-modal__comments">
                <div class="post-modal__comments__form p-4 border-y border-stroke space-y-3">
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
                    <CommentWrapper v-for="(comment, i) in comments" v-bind="comment" :key="i" />
                </div>
            </div>
        </div>
        <div class="post-modal__body overflow-auto"></div>
    </div>
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
