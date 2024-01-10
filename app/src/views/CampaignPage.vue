<script setup>
import { ref } from 'vue';
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import MetaInfo from '@/components/molecules/MetaInfo.vue';

const isReadMore = ref(false);
const navbarColor = ref('transparent');

const clickReadMore = () => {
    isReadMore.value = true;
};
</script>

<template>
    <LayoutMain :navbarColor="navbarColor">
        <div class="campaign-page">
            <div class="container">
                <div class="action">
                    <div class="card campaign-detail">
                        <h1 class="campaign-title">
                            Hanoi Art Book Fair - Art and Import Book Fair
                        </h1>
                        <div class="flex items-center gap-1.5 mt-4">
                            <img
                                class="avatar"
                                src="/assets/img/creator/creator-default.jpg"
                                alt="-"
                            />
                            <p class="creator-name">Hanoi Art Book Fair</p>
                        </div>
                        <p
                            class="campaign-description mt-4"
                            :class="{ 'line-clamp-2': !isReadMore }"
                        >
                            Welcome to Hanoi Art Book Fair 2023. Our primary mission is to cultivate
                            reading habits, increase art literacy worldwide and build a new
                            generation of readers, by making books more affordable.
                        </p>
                        <p v-if="!isReadMore" @click="clickReadMore" class="read-more mt-2">
                            Read More
                        </p>
                        <div class="card-line mt-4"></div>
                        <MetaInfo />
                    </div>
                </div>
                <div class="feeds"></div>
            </div>
        </div>
    </LayoutMain>
</template>

<style lang="scss">
.campaign-page {
    background: linear-gradient(
            0deg,
            #dee8e8 9.54%,
            rgba(222, 232, 232, 0) 100.73%,
            rgba(222, 232, 232, 0) 100.73%
        ),
        url('/assets/img/background/bg-default.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: fit-content;

    .container {
        @apply mx-auto px-5 flex gap-6;
        padding-top: 10vh;
        padding-bottom: 10vh;
        height: fit-content;
    }

    .action {
        @apply h-full flex flex-col justify-between;
        width: 320px;
        height: 85vh;
    }

    .feeds {
        @apply w-full relative;
        height: 85vh;
    }

    .card {
        @apply bg-white rounded-3xl;
        border: 1px solid var(--White, #fff);
        box-shadow: 0px 5.064px 25.321px 0px rgba(0, 0, 0, 0.1);
    }

    .card-line {
        @apply w-full;
        border-top: rgba(27, 27, 27, 0.1) 1px solid;
    }

    .frame {
        @apply relative;
    }

    .campaign-frame {
        @apply p-2.5 rounded-3xl flex mx-4 z-20 relative;
    }

    .campaign-share {
        @apply flex gap-2 mt-4;
    }

    .campaign-link {
        @apply flex pl-3 pr-1.5 bg-white items-center rounded-full w-full gap-2 h-10;
        border: 1px solid var(--color-light);

        p {
            @apply w-full text-[#454546] text-ellipsis overflow-hidden whitespace-nowrap;
        }

        .share-icon {
            @apply bg-main h-7 w-7 rounded-full flex items-center justify-center aspect-square;
        }
    }
    .bookmark-icon {
        @apply h-10 w-10 rounded-full flex items-center justify-center aspect-square;
        border: 1px solid var(--color-light);

        i {
            @apply text-base;
        }
    }

    .frame-selector {
        @apply -mt-3.5 w-full z-10;
        border-radius: 14px 14px 20px 20px !important;
        border: none !important;
    }

    .frame-platform {
        @apply rounded-2xl h-7 bg-light w-full;
        border: 3px solid var(--color-white);
    }

    .frame-active {
        @apply w-full rounded-xl;
    }

    .frame-slider {
        @apply p-2 rounded-lg h-14 w-14 cursor-pointer;
        border: 1px solid var(--color-light);

        &.active {
            @apply cursor-default;
            border-color: var(--color-main);
            background: #dee8e8;
        }
    }

    .frame-button {
        @apply w-full text-base font-bold gap-2;
        padding: 13px 20px !important;
    }

    .campaign-detail {
        @apply p-4 mt-6;

        .avatar {
            @apply rounded-full;
            height: 28px;
            width: 28px;
        }

        .campaign-title {
            @apply text-2xl font-bold text-ellipsis overflow-hidden whitespace-nowrap;
        }

        .creator-name {
            @apply text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap;
        }

        .campaign-description {
            @apply text-base;
        }

        .read-more {
            @apply text-base font-bold underline cursor-pointer;
        }
    }

    .campaign-feeds {
        @apply w-full p-2.5 relative overflow-hidden;
        height: 85vh;
    }

    .feeds-empty-state {
        @apply grid grid-cols-3 gap-2.5;
    }

    .card-empty-state {
        @apply aspect-square relative;

        .overlay {
            @apply absolute w-full h-full bg-light opacity-[85%];
        }

        .sample-photo {
            @apply absolute;
        }
    }

    .feeds-action {
        @apply absolute bottom-0 w-full z-10 h-80 flex items-end px-3 pb-2.5 gap-4 pointer-events-none;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 83.09%);

        .icon {
            @apply bg-light h-14 w-14 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto;

            i {
                @apply text-[32px];
            }
        }
    }
}
</style>
