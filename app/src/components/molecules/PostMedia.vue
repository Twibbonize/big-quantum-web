<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import QPopoverMenu from '@/components/atoms/QPopoverMenu.vue';
import QPopoverMenuItem from '@/components/atoms/QPopoverMenuItem.vue';
import { usePostStore } from '@/stores/postStore';

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
    },
    comments: {
        type: Array,
        default: []
    },
    rounded: {
        type: Boolean,
        default: true
    }
});

const postStore = usePostStore();
const { showPost } = postStore;

const handleShowPost = () => {
    showPost({
        ...props
    });
};
</script>

<template>
    <div :class="['post', rounded && 'post--rounded']">
        <a class="post__thumbnail" @click="handleShowPost">
            <img :src="image" alt="frame" class="post__thumbnail-frame" />
            <div class="post__thumbnail-overlay"></div>
        </a>

        <Menu as="div" class="post__more-menu">
            <MenuButton class="post__more-menu__button">
                <i class="ri-more-line ri-lg"></i>
            </MenuButton>
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    class="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                    <QPopoverMenu>
                        <MenuItem>
                            <QPopoverMenuItem>
                                <i class="ri-pushpin-line"></i>
                                <span>Pin Post</span>
                            </QPopoverMenuItem>
                        </MenuItem>

                        <MenuItem>
                            <QPopoverMenuItem>
                                <i class="ri-eye-off-line"></i>
                                <span>Hide Post</span>
                            </QPopoverMenuItem>
                        </MenuItem>

                        <MenuItem>
                            <QPopoverMenuItem>
                                <i class="ri-share-line"></i>
                                <span>Share</span>
                            </QPopoverMenuItem>
                        </MenuItem>

                        <MenuItem>
                            <QPopoverMenuItem>
                                <div class="flex items-center text-red-500 space-x-2">
                                    <i class="ri-flag-line"></i>
                                    <span>Report</span>
                                </div>
                            </QPopoverMenuItem>
                        </MenuItem>
                    </QPopoverMenu>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<style scoped lang="scss">
.post {
    @apply h-full w-full aspect-square relative overflow-hidden cursor-pointer;

    &.post--rounded {
        @apply rounded-lg;
    }

    .post__thumbnail {
        @apply relative flex flex-col items-center justify-center h-full;
    }

    .post__thumbnail-frame {
        @apply absolute top-0 left-0;
        z-index: 2;
    }

    .post__thumbnail-overlay {
        transition:
            opacity 0.1s ease-in-out,
            visibility 0.1s ease-in-out;
        opacity: 0;
        @apply w-full h-full absolute top-0 left-0;
        z-index: 3;
        border-radius: 8px 8px 0px 0px;
        background: linear-gradient(
            180deg,
            #00000057 0,
            rgba(0, 0, 0, 0.338) 3.5%,
            rgba(0, 0, 0, 0.324) 7%,
            rgba(0, 0, 0, 0.306) 10.35%,
            rgba(0, 0, 0, 0.285) 13.85%,
            rgba(0, 0, 0, 0.262) 17.35%,
            rgba(0, 0, 0, 0.237) 20.85%,
            rgba(0, 0, 0, 0.213) 24.35%,
            rgba(0, 0, 0, 0.188) 27.85%,
            rgba(0, 0, 0, 0.165) 31.35%,
            rgba(0, 0, 0, 0.144) 34.85%,
            rgba(0, 0, 0, 0.126) 38.35%,
            rgba(0, 0, 0, 0.112) 41.85%,
            rgba(0, 0, 0, 0.103) 45.35%,
            #0000001a 48.85%,
            rgba(0, 0, 0, 0.103) 52.35%,
            rgba(0, 0, 0, 0.112) 55.85%,
            rgba(0, 0, 0, 0.126) 59.35%,
            rgba(0, 0, 0, 0.144) 62.85%,
            rgba(0, 0, 0, 0.165) 66.35%,
            rgba(0, 0, 0, 0.188) 69.85%,
            rgba(0, 0, 0, 0.213) 73.35%,
            rgba(0, 0, 0, 0.237) 76.85%,
            rgba(0, 0, 0, 0.262) 80.35%,
            rgba(0, 0, 0, 0.285) 83.85%,
            rgba(0, 0, 0, 0.306) 87.35%,
            rgba(0, 0, 0, 0.324) 90.85%,
            rgba(0, 0, 0, 0.338) 94.35%,
            rgba(0, 0, 0, 0.347) 97.85%,
            #00000059
        );
    }

    .post__more-menu {
        @apply absolute top-2 right-2 z-10 font-semibold;
        transition:
            opacity 0.1s ease-in-out,
            visibility 0.1s ease-in-out;
        opacity: 0;

        .post__more-menu__button {
            @apply h-8 w-8 flex items-center justify-center overflow-hidden rounded-lg bg-gray-200;

            @include before {
                height: 0;
                width: 0;
                border-radius: 100%;
                @apply bg-black;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s var(--transition-function);
                opacity: 0.2;
            }

            &:hover {
                @include before {
                    height: 20rem;
                    width: 20rem;
                }
            }
        }
    }

    @include md_screen {
        &:hover {
            .post__thumbnail-overlay {
                opacity: 100;
            }

            .post__more-menu {
                opacity: 100;
            }
        }
    }
}
</style>
