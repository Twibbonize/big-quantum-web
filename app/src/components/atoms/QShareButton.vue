<script setup>
defineProps({
    link: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['click']);

function handleClick(e) {
    e.preventDefault();
    emit('click');
}
</script>

<template>
    <div class="share flex-grow md:flex-grow-0 flex-shrink-0">
        <button class="share__wrapper w-full" @click="handleClick">
            <div class="share__link">
                <i class="ri-links-line"></i>
                <span class="share__link__text">{{ link }}</span>
            </div>
            <div class="share__icon">
                <i class="ri-share-line ri-sm"></i>
            </div>
        </button>
    </div>
</template>

<style scoped lang="scss">
.share {
    .share__wrapper {
        height: 40px;
        padding: 10px 6px;
        padding-left: 12px;
        @apply rounded-full border border-stroke inline-flex items-center justify-between space-x-6 relative;

        .share__link {
            @apply space-x-1 h-full flex items-center;
            width: calc(100% - 32px);

            @include md_screen {
                width: auto;
            }

            .share__link__text {
                @apply text-sm block flex-grow text-left;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .share__icon {
        @apply h-7 w-7 rounded-full flex items-center justify-center bg-main absolute right-1;
    }
}
</style>
