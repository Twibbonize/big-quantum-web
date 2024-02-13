<script setup>
defineProps({
    frame: {
        type: String
    },
    photo: {
        type: String
    },
    photoStyle: {
        type: Object,
        default: {}
    },
    rounded: {
        type: Boolean,
        default: true
    }
});
</script>
<template>
    <div class="pmm">
        <div class="pmm__media-wrapper">
            <img :src="photo" alt="photo" class="pmm__photo" :style="photoStyle" />
            <img :src="frame" alt="Frame" class="pmm__frame" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.pmm {
    @apply h-full w-full aspect-square relative overflow-hidden;

    &.pmm--rounded {
        @apply rounded-lg;
    }

    .pmm__media-wrapper {
        @apply relative flex flex-col items-center justify-center h-full;
    }

    .pmm__frame {
        @apply absolute top-0 left-0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .pmm__photo {
        @apply absolute;
    }

    .pmm__photo {
        z-index: 1;
    }

    .pmm__frame {
        z-index: 2;
    }
}
</style>
