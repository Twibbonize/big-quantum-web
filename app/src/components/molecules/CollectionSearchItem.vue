<script setup>
import QCollectionThumbnail from '@/components/atoms/QCollectionThumbnail.vue';
import { computed } from 'vue';

const props = defineProps({
    name: {
        type: String
    },
    uri: {
        type: String
    },
    campaigns: {
        type: Array
    },
    creator: {
        type: Object
    },
    checkable: {
        type: Boolean,
        default: false
    },
    checked: {
        type: Boolean
    }
});

const thumbnails = computed(() => {
    const { campaigns } = props;

    if (!campaigns.length) {
        return [];
    }

    if (campaigns.length < 4) {
        return [campaigns[0].thumbnail];
    }

    return campaigns.map(({ thumbnail }) => thumbnail);
});
</script>
<template>
    <RouterLink
        :to="{ name: 'collection', params: { uri } }"
        class="flex items-center px-4 py-2 hover:bg-black/10"
    >
        <div class="w-16 h-16 rounded overflow-hidden mr-2 flex-shrink-0 border border-stroke">
            <QCollectionThumbnail :thumbnails="thumbnails" />
        </div>

        <div class="space-y-1 flex-grow w-0">
            <div class="font-semibold leading-none w-full truncate">
                {{ name }}
            </div>

            <div class="flex items-center space-x-2">
                <div class="flex items-center text-xs text-content space-x-1">
                    <i class="ri-megaphone-line"></i>
                    <span class="font-medium"> {{ campaigns.length }} Campaigns </span>
                </div>
            </div>
        </div>
    </RouterLink>
</template>
