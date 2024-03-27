<script setup>
import { computed, ref } from 'vue';
import dayjs from 'dayjs';
import { useElementSize, useBreakpoints, breakpointsTailwind } from '@vueuse/core';

import QPopover from '@/components/atoms/QPopover.vue';
import QPopoverMenu from '@/components/atoms/QPopoverMenu.vue';
import QPopoverMenuItem from '@/components/atoms/QPopoverMenuItem.vue';
import QDot from '@/components/atoms/QDot.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import QCreator from '@/components/atoms/QCreator.vue';
import relativeTime from 'dayjs/plugin/relativeTime';

import { useModal } from '@/composables/modal';
import { usePostStore } from '@/stores/postStore';
import { capitalizeFirstLetter } from '@/utils/string';
import ShareModal from '@/components/organisms/ShareModal.vue';
import PostModal from '@/components/organisms/PostModal.vue';

dayjs.extend(relativeTime);

const breakpoints = useBreakpoints(breakpointsTailwind);
const postStore = usePostStore();
const { showPost } = postStore;

const { open } = useModal();

const postEl = ref(null);
const captionContainer = ref(null);

const { width: captionContainerWidth } = useElementSize(captionContainer);

const sm = breakpoints.smallerOrEqual('sm');
const xl = breakpoints.isGreater('lg');

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

const handleOpenShare = () => {
    const { creator, createdAt, uri, image } = props;

    const { username } = creator;
    const datetime = dayjs(createdAt);
    const formattedDate = datetime.format('MMM D, YYYY');

    const shareProps = {
        link: `twibbo.nz/p/${uri}`,
        payload: { name: `Post shared on ${formattedDate}`, username: username, avatar: image },
        type: 'post'
    };
    open({ component: ShareModal, props: shareProps });
};

const createdOn = computed(() => {
    const { createdAt } = props;
    const datetime = dayjs(createdAt);

    return capitalizeFirstLetter(datetime.fromNow());
});

const captionFontSize = computed(() => {
    return xl ? '16' : 14;
});

const handleShowPost = () => {
    open({
        component: PostModal,
        props: { ...props },
        config: {
            size: 'xl'
        }
    });
};
</script>

<template>
    <div ref="postEl" class="post">
        <div class="post__main-wrapper">
            <div class="post__main-header">
                <div class="flex items-center space-x-1">
                    <QCreator v-bind="creator" size="md" />
                    <QDot />
                    <span class="post__time">{{ createdOn }}</span>
                </div>

                <QPopover v-if="!sm">
                    <template #trigger>
                        <span
                            class="w-8 h-8 hover:bg-black/10 inline-flex items-center justify-center rounded-lg transition-colors"
                        >
                            <i class="ri-more-line ri-lg"></i>
                        </span>
                    </template>

                    <QPopoverMenu>
                        <QPopoverMenuItem v-if="campaignOwnerPriviledge">
                            <i class="ri-pushpin-line ri-1x"></i>
                            <span>Pin Post</span>
                        </QPopoverMenuItem>

                        <QPopoverMenuItem v-if="campaignOwnerPriviledge">
                            <i class="ri-eye-off-line ri-1x"></i>
                            <span>Hide Post</span>
                        </QPopoverMenuItem>

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
            </div>
            <div class="post__main-body">
                <div class="post__image-wrapper">
                    <img class="post__image" :src="image" alt="Post Image" />
                </div>
                <div v-if="caption" ref="captionContainer" class="post__caption-wrapper">
                    <QEllipsisText
                        :text="caption"
                        :expandable="false"
                        :containerWidth="captionContainerWidth"
                        :lines="3"
                        :fontSize="captionFontSize"
                        @toggle="handleShowPost"
                    />
                </div>
            </div>

            <div class="post__main-footer">
                <button
                    class="flex items-center space-x-1 hover:text-main transition-colors"
                    @click="handleShowPost"
                >
                    <i class="ri ri-message-3-line ri-1x"></i>
                    <span v-if="comments.length" class="text-sm font-medium"
                        >{{ comments.length }} Comments</span
                    >
                    <span v-else class="text-sm font-medium">Comment</span>
                </button>

                <button
                    class="flex items-center space-x-1 hover:text-main transition-colors"
                    @click="handleOpenShare"
                >
                    <i class="ri ri-share-line ri-1x"></i>
                    <span class="text-sm font-medium">Share</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.post {
    @apply w-full relative md:px-4;

    .post__main-wrapper {
        @apply flex flex-col space-y-5 border-b border-stroke;
    }

    .post__main-header {
        @apply flex items-center justify-between;
    }

    .post__main-footer {
        @apply flex items-center justify-between space-x-4 pb-5;

        @include md_screen {
            @apply justify-start;
        }
    }

    // @include md_screen {
    //     @apply flex border items-center border-stroke rounded-xl w-full p-1 pr-4;
    // }

    // @include lg_screen {
    //     @apply items-center;
    // }

    .post__time {
        @apply text-content font-light text-xs;
    }

    .post__image-wrapper {
        aspect-ratio: 1/1;
        @apply cursor-pointer mr-3;
        min-width: 64px;
        max-height: 64px;

        @include md_screen {
            @apply mr-8;
            max-height: 180px;
        }

        // // max-width: 62px;
        // max-height: v-bind(maxHeightPostImage);

        .post__image {
            @apply rounded-lg;
        }
    }

    .post__main-body {
        @apply flex;
    }

    .post__caption-wrapper {
        // max-width: 420px;
        @apply max-w-2xl font-normal;
    }

    .post__caption {
        @apply px-3 py-2 mb-2 lg:mb-3;

        @include md_screen {
            @apply px-0 py-0;
        }
    }

    .post__main {
        @apply px-0 relative py-2;

        @include md_screen {
            @apply flex flex-col flex-grow px-0 ml-2;
        }

        @include lg_screen {
            @apply ml-4;
        }
    }
}
</style>
