<script setup>
import { computed, ref } from 'vue';
import dayjs from 'dayjs';

import { useShareStore } from '@/stores/shareStore';
import QPopover from '@/components/atoms/QPopover.vue';
import QPopoverMenu from '@/components/atoms/QPopoverMenu.vue';
import QPopoverMenuItem from '@/components/atoms/QPopoverMenuItem.vue';
import QButton from '@/components/atoms/QButton.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import relativeTime from 'dayjs/plugin/relativeTime';
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
</script>

<template>
    <div class="border border-stroke rounded-xl w-full">
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
                        class="text-black/70 text-sm font-medium cursor-pointer hover:text-black transition-colors"
                    >
                        <i class="ri ri-message-2-line"></i>
                        <span class="ml-1 text-xs md:text-sm">Comment</span>
                    </a>

                    <a
                        class="text-black/70 text-sm font-medium cursor-pointer hover:text-black transition-colors"
                        @click="handleOpenShare"
                    >
                        <i class="ri ri-share-line"></i>
                        <span class="ml-1 text-xs md:text-sm">Share</span>
                    </a>
                </div>

                <div class="flex items-center space-x-2">
                    <a
                        class="text-black/70 text-sm font-medium cursor-pointer hover:text-black transition-colors"
                    >
                        <i class="ri ri-question-answer-line"></i>
                        <span class="ml-1 text-xs md:text-sm">5</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
