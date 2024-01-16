<script setup>
import { computed, ref } from 'vue';
import dayjs from 'dayjs';

import { useShareStore } from '@/stores/shareStore';
import QPopover from '@/components/atoms/QPopover.vue';
import QPopoverMenu from '@/components/atoms/QPopoverMenu.vue';
import QPopoverMenuItem from '@/components/atoms/QPopoverMenuItem.vue';
import QButton from '@/components/atoms/QButton.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import QCreator from '@/components/atoms/QCreator.vue';
import relativeTime from 'dayjs/plugin/relativeTime';

import { usePostStore } from '@/stores/postStore';
import { storeToRefs } from 'pinia';

const postStore = usePostStore();
const { showPost } = postStore;

dayjs.extend(relativeTime);

const shareStore = useShareStore();
const { openShare } = shareStore;
const captionContainer = ref(null);

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
        type: String,
        required: true
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
    }
});

const handleOpenShare = () => {
    const { creator, createdAt, uri, image } = props;

    const { username } = creator;
    const datetime = dayjs(createdAt);
    const formattedDate = datetime.format('MMM D, YYYY');

    openShare(
        `twb.nz/p/${uri}`,
        { name: `Post shared on ${formattedDate}`, username: username, avatar: image },
        'post'
    );
};

const createdOn = computed(() => {
    const { createdAt } = props;
    const datetime = dayjs(createdAt);

    return datetime.fromNow();
});

const handleShowPost = () => {
    showPost({
        ...props
    });
};
</script>

<template>
    <div class="profile-card">
        <div class="px-3 py-3 border-b border-stroke flex md:hidden items-center justify-between">
            <div class="flex items-center space-x-1">
                <img
                    src="/assets/img/sample/sample-avatar-1.jpg"
                    alt="Avatar"
                    class="w-8 h-8 border border-white/70 rounded-full"
                />

                <div class="flex flex-col">
                    <div class="font-semibold leading-tight text-sm">Universe Tech</div>
                    <div class="text-content text-xs">{{ createdOn }}</div>
                </div>
            </div>

            <QPopover>
                <template #trigger>
                    <span
                        class="w-8 h-8 hover:bg-black/10 inline-flex items-center justify-center rounded-lg transition-colors"
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
        </div>

        <div class="profile-card__image-wrapper">
            <img
                class="h-full object-cover object-center md:rounded-xl"
                :src="image"
                :alt="campaign.name"
            />
        </div>

        <div class="profile-card__main md:ml-4">
            <div class="hidden md:flex items-center justify-between">
                <div class="flex items-center space-x-3 flex-shrink-0">
                    <div class="flex flex-col flex-shrink-0">
                        <div
                            class="text-sm font-semibold leading-tight w-full text-ellipsis truncate overflow-hidden"
                        >
                            {{ campaign.name }}
                        </div>
                        <div class="text-xs text-content mt-1">twb.nz/{{ campaign.url }}</div>
                    </div>

                    <div class="flex-shrink-0">
                        <QButton
                            size="xs"
                            variant="secondary"
                            @click="$router.push({ name: 'campaign' })"
                        >
                            <span class="text-xs">Get Yours</span>
                        </QButton>
                    </div>
                </div>

                <div class="flex items-center space-x-2">
                    <QPopover>
                        <template #trigger>
                            <span
                                class="w-8 h-8 hover:bg-black/10 inline-flex items-center justify-center rounded-lg transition-colors"
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
                </div>
            </div>

            <div ref="captionContainer" class="profile-card__caption">
                <QEllipsisText
                    :text="caption"
                    :containerWidth="(captionContainer && captionContainer.offsetWidth) || 240"
                />
            </div>

            <div class="hidden md:flex">
                <QCreator v-bind="creator" />
            </div>

            <div class="hidden md:flex items-center space-x-2">
                <a
                    class="text-xs md:text-sm cursor-pointer transition-colors"
                    @click="handleShowPost"
                >
                    <i class="ri ri-message-3-line ri-lg"></i>
                    <span class="ml-1 text-content hover:text-black">View all 3 Comments</span>
                </a>
            </div>

            <div class="block md:hidden border-t border-stroke px-3 py-3 rounded-b-xl">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <a
                            class="text-black/70 text-xs md:text-sm font-medium cursor-pointer hover:text-black transition-colors"
                            @click="handleShowPost"
                        >
                            <i class="ri ri-message-3-line ri-lg"></i>
                            <span class="ml-1">3 Comments</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="border border-stroke rounded-xl w-full">
        <div class="px-3 py-3 border-b border-stroke flex items-center justify-between">
            <div class="flex items-center space-x-1">
                <img
                    src="/assets/img/sample/sample-avatar-1.jpg"
                    alt="Avatar"
                    class="w-8 h-8 border border-white/70 rounded-full"
                />

                <div class="flex flex-col">
                    <div class="font-semibold leading-tight text-sm">Universe Tech</div>
                    <div class="text-content text-xs">{{ createdOn }}</div>
                </div>
            </div>

            <QPopover>
                <template #trigger>
                    <span
                        class="w-8 h-8 hover:bg-black/10 inline-flex items-center justify-center rounded-lg transition-colors"
                    >
                        <i class="ri-more-line ri-lg"></i>
                    </span>
                </template>

                <QPopoverMenu>
                    <QPopoverMenuItem>
                        <i class="ri-flag-line ri-1x"></i>
                        <span>Report</span>
                    </QPopoverMenuItem>
                </QPopoverMenu>
            </QPopover>
        </div>

        <div>
            <img :src="image" :alt="campaign.name" />
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
                    <QButton size="sm" variant="secondary">
                        <span class="text-xs">Get Yours</span>
                    </QButton>
                </div>
            </div>
        </div>

        <div ref="captionContainer" class="px-3 py-3">
            <QEllipsisText
                :text="caption"
                :containerWidth="(captionContainer && captionContainer.offsetWidth) || 240"
            />
        </div>

        <div class="border-t border-stroke px-3 py-3 rounded-b-xl">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <a
                        class="text-black/70 text-xs md:text-sm font-medium cursor-pointer hover:text-black transition-colors"
                    >
                        <i class="ri ri-message-3-line ri-lg"></i>
                        <span class="ml-1 ">3 Comments</span>
                    </a>

                    <a
                        class="text-black/70 text-xs md:text-sm font-medium cursor-pointer hover:text-black transition-colors"
                        @click="handleOpenShare"
                    >
                        <i class="ri ri-share-line ri-lg"></i>
                        <span class="ml-1">Share</span>
                    </a>
                </div>

                
            </div>
        </div>
    </div> -->
</template>

<style scoped lang="scss">
.profile-card {
    @apply border border-stroke rounded-xl w-full block;

    @include md_screen {
        @apply flex items-center border border-stroke rounded-xl w-full p-1 pr-4;
    }

    .profile-card__image-wrapper {
        @include md_screen {
            @apply h-52 w-52 flex items-center justify-center flex-shrink-0;
        }
    }

    .profile-card__caption {
        @apply px-3 py-2;

        @include md_screen {
            @apply px-0 py-0;
        }
    }

    .profile-card__main {
        @apply px-0;

        @include md_screen {
            @apply flex flex-col flex-grow space-y-3 h-full px-0 py-0;
        }
    }
}
</style>
