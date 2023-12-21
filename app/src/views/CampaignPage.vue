<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import MetaInfo from '@/components/molecules/MetaInfo.vue';

const emit = defineEmits(['change-navbar']);

const { width, height } = useWindowSize();

const isReadMore = ref(false);

const clickReadMore = () => {
    isReadMore.value = true;
};

onMounted(() => {
    emit('change-navbar', 'transparent');
});
</script>

<template>
    <div class="campaign-page">
        <div class="container">
            <div class="action">
                <div class="card campaign-detail">
                    <h1 class="campaign-title">Hanoi Art Book Fair - Art and Import Book Fair</h1>
                    <div class="flex items-center gap-1.5 mt-4">
                        <img class="avatar" src="/assets/img/creator/creator-default.jpg" alt="-" />
                        <p class="creator-name">Hanoi Art Book Fair</p>
                    </div>
                    <p class="campaign-description mt-4" :class="{ 'line-clamp-2': !isReadMore }">
                        Welcome to Hanoi Art Book Fair 2023. Our primary mission is to cultivate
                        reading habits, increase art literacy worldwide and build a new generation
                        of readers, by making books more affordable.
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
    height: 100vh;

    .container {
        @apply mx-auto px-5 flex gap-6;
        padding-top: 20vh;
        height: 70vh;
    }

    .action {
        @apply h-full;
        width: 320px;
    }

    .feeds {
        @apply h-full;
        height: 100%;
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

    .campaign-detail {
        @apply p-4;

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
}
</style>
