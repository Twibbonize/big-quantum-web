<script setup>
import QButton from '@/components/atoms/QButton.vue';
import PostWrapper from '@/components/molecules/PostWrapper.vue';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { useRouter } from 'vue-router';

const props = defineProps({
    posts: {
        type: Array
    },
    displayType: {
        type: String
    }
});

const router = useRouter();
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');
const innerDisplayType = ref(props.displayType);

const emit = defineEmits(['toggle-display']);

const minimizeRoute = computed(() => {
    const previousPath = router.options.history.state.back;
    return previousPath || '/hanoi-art';
});

watch(innerDisplayType, (newValue) => {
    emit('toggle-display', newValue);
});

onMounted(() => {
    document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
    document.body.style.overflow = '';
});
</script>

<template>
    <div class="feeds">
        <div class="feeds__header">
            <div class="feeds__header__left">
                <QButton circle variant="subtle" size="sm" @click="$router.replace(minimizeRoute)">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M4 14H10V20"
                            stroke="#1B1B1B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M20 10H14V4"
                            stroke="#1B1B1B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14 10L21 3"
                            stroke="#1B1B1B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3 21L10 14"
                            stroke="#1B1B1B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </QButton>

                <div class="ml-2">
                    <h3 class="font-semibold leading-none">Hanoi Art Book Fair 2025</h3>
                    <span class="text-content text-sm">twibbo.nz/hanoi-art</span>
                </div>
            </div>
            <div class="feeds__header__right">
                <RadioGroup v-model="innerDisplayType">
                    <div class="feeds__toggle">
                        <RadioGroupOption value="grid" v-slot="{ checked }">
                            <button
                                :class="[
                                    'feeds__toggle-btn',
                                    checked && 'feeds__toggle-btn--active'
                                ]"
                            >
                                <i class="ri ri-layout-grid-line"></i>
                                <span class="ml-1 hidden md:inline">Grid</span>
                            </button>
                        </RadioGroupOption>

                        <RadioGroupOption value="list" v-slot="{ checked }">
                            <button
                                :class="[
                                    'feeds__toggle-btn',
                                    checked && 'feeds__toggle-btn--active'
                                ]"
                            >
                                <i class="ri ri-list-unordered"></i>
                                <span class="ml-1 hidden md:inline">List</span>
                            </button>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
        </div>

        <div class="feeds__body">
            <div :class="displayType === 'grid' ? 'feeds__grid' : 'feeds__list'">
                <PostWrapper
                    v-for="post in posts"
                    :key="post.uri"
                    v-bind="post"
                    :campaignOwnerPriviledge="true"
                    :display="displayType"
                    :rounded="!sm"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.feeds {
    @apply flex flex-col pt-0 mt-0 fixed h-screen w-screen top-0 left-0 bg-white z-50 rounded-none;

    .feeds__header {
        @apply flex items-center justify-between w-full py-6 container px-4 xl:px-0;

        .feeds__header__left {
            @apply flex items-center;
        }
    }

    .feeds__display-control {
    }

    .feeds__body {
        @apply flex-grow overflow-y-auto container;
        @include no_scrollbar();
    }

    .feeds__grid {
        @apply justify-center grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2 md:gap-5;
    }

    .feeds__list {
        @apply flex flex-col space-y-6 mt-1 max-w-3xl mx-auto;

        @include sm {
            @apply container px-4;
        }
    }

    .feeds__toggle {
        @apply border border-stroke rounded flex items-center overflow-hidden;

        @include md_screen {
            @apply rounded-xl;
        }

        .feeds__toggle-btn {
            @apply py-2 px-3 text-sm font-medium text-content transition-colors duration-200 h-10 w-10;

            @include md_screen {
                @apply w-auto h-auto;
            }

            &.feeds__toggle-btn--active {
                @apply bg-gray-200 text-black;
            }
        }
    }
}
</style>
