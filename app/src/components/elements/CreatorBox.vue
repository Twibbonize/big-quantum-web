<script setup>
import numeral from 'numeral';
import { RouterLink } from 'vue-router';

const props = defineProps({
    number: Number,
    name: String,
    avatar: String,
    supports: Number,
    bordered: {
        type: Boolean,
        default: true
    },
    size: {
        type: String,
        default: 'md',
        validators: (value) => ['sm', 'md'].includes(value)
    }
});
</script>

<template>
    <RouterLink to="/u/universetech" class="block">
        <div :class="['creator-box', bordered && 'creator-box--bordered', `creator-box--${size}`]">
            <div v-if="number" class="order">{{ `#${props.number}` }}</div>
            <img :src="avatar" :alt="name" class="avatar" />
            <div class="info">
                <h5 class="name">{{ name }}</h5>
                <p class="supporters">
                    <i class="ri-group-line"></i>
                    <span class="ml-1">{{ numeral(props.supports).format('0.0a') }}</span>
                </p>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
.creator-box {
    @apply flex items-center hover:cursor-pointer;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &.creator-box--bordered {
        @apply pb-8 mb-6;
        border-bottom: 1px solid rgb(217, 217, 217);

        &:hover {
            box-shadow: 0px 30px 50px rgb(0 0 0 / 35%);
            box-shadow: 0px 25px 20px -10px rgb(0 0 2 / 5%);
        }
    }

    &.creator-box--sm {
        @apply px-4 py-2 hover:bg-black/10;
        .avatar {
            @apply w-10 h-10 mr-2;
        }

        .info .name {
            @apply text-sm font-semibold;
        }

        .info .supporters {
            @apply text-xs text-content opacity-100;
        }

        .info .supporters span {
            @apply ml-1;
        }
    }

    .order {
        @apply font-bold text-3xl text-black/20 mr-5;
    }

    .avatar {
        @apply w-[64px] sm:w-[80px] aspect-square mr-4 rounded-full;
    }

    .info {
        .name {
            @apply font-bold text-lg hover:underline;
        }

        .supporters {
            @apply text-sm opacity-30;
        }
    }
}
</style>
