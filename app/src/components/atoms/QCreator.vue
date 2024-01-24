<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    size: {
        type: String,
        validators: ['xs', 'sm', 'md', 'lg']
    }
});
</script>

<template>
    <div :class="['creator', `creator--${size}`]">
        <img :src="avatar" class="creator__avatar" />
        <RouterLink :to="{ name: 'profile' }" class="creator__name">
            {{ name }}
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
.creator {
    @apply flex items-center space-x-1;

    .creator__avatar {
        @apply w-6 h-6 rounded-full border border-white/10;
    }

    .creator__name {
        @apply text-sm font-medium;
    }

    &.creator--xs {
        .creator__avatar {
            @apply w-4 h-4;
        }
        .creator__name {
            @apply text-xs;
        }
    }

    &.creator--sm {
        .creator__avatar {
            @apply w-5 h-5;
        }

        .creator__name {
            @apply text-sm font-normal;
        }
    }

    &.creator--lg {
        .creator__avatar {
            @apply w-7 h-7;
        }

        .creator__name {
            @apply text-lg font-medium;
        }
    }
}
</style>
