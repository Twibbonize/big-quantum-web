<script setup>
import { computed, onMounted } from 'vue';
import QButton from '@/components/atoms/QButton.vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import numeral from 'numeral';

dayjs.extend(relativeTime);

const props = defineProps({
    thumbnail: String,
    name: String,
    avatar: String,
    creator: String,
    supports: Number,
    createdAt: Number
});

const campaignThumbnailUrl = computed(() => {
    return props.thumbnail;
    return `${import.meta.env.VITE_CAMPAIGN_THUMBNAIL_URL}/${props.thumbnail}`;
});

const avatarUrl = computed(() => {
    return props.avatar;
    // return `${import.meta.env.VITE_CAMPAIGN_THUMBNAIL_URL}/${props.avatar}`;
});

onMounted(() => {});
</script>

<template>
    <RouterLink to="/campaign">
        <div class="camp-card rounded-3xl pt-2.5 px-3.5 pb-3.5">
            <div class="img-container rounded-xl aspect-square flex items-center relative">
                <picture>
                    <img class="w-full rounded-xl" :src="campaignThumbnailUrl" :alt="name" />
                </picture>
                <div class="btn-view">
                    <QButton variant="primary">View</QButton>
                </div>
            </div>
            <div class="mt-3">
                <h6 class="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                    {{ name }}
                </h6>
                <div class="flex items-center mt-2.5">
                    <img class="avatar rounded-full mr-1.5" :src="avatarUrl" :alt="creator" />
                    <router-link
                        to="/u/universetech"
                        class="text-base text-ellipsis overflow-hidden whitespace-nowrap hover:underline"
                    >
                        {{ creator }}
                    </router-link>
                </div>
            </div>
            <div class="line mt-2.5"></div>
            <div class="flex content-between gap-2 mt-2.5">
                <div class="flex items-center flex-1">
                    <i class="ri-group-line text-base mr-1.5"></i>
                    <div class="flex flex-col">
                        <span
                            class="text-xs font-medium text-ellipsis overflow-hidden whitespace-nowrap"
                            >Supporters</span
                        >
                        <h6
                            class="text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap"
                        >
                            {{ numeral(props.supports).format('0.0a') }}
                        </h6>
                    </div>
                </div>
                <div class="flex items-center flex-1">
                    <i class="ri-time-line text-base mr-1.5"></i>
                    <div class="flex flex-col">
                        <span
                            class="text-xs font-medium text-ellipsis overflow-hidden whitespace-nowrap"
                            >Created</span
                        >
                        <h6
                            class="text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap"
                        >
                            {{ dayjs(props.createdAt).fromNow() }}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<style lang="scss">
.camp-card {
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;

    .img-container {
        overflow: hidden;

        picture,
        img {
            transition: all 0.2s ease;
        }
    }

    .btn-view {
        position: absolute;
        bottom: 0px;
        height: 44px;
        border-radius: 22px;
        transform: translateX(-50%);
        left: 50%;
        text-align: center;
        opacity: 0;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    .avatar {
        width: 22px;
        height: 22px;
    }

    .line {
        border-bottom: 1px solid rgba(#1b1b1b, 0.1);
    }

    &:hover {
        transform: translateY(-10px);
        cursor: pointer;

        picture,
        img {
            transform: scale(1.1);
        }

        .btn-view {
            bottom: 50%;
            transform: translate(-50%, 50%);
            opacity: 1;
        }
    }
}
</style>
