<script setup>
import { RouterLink } from 'vue-router';
import QCreator from '@/components/atoms/QCreator.vue';
import numeral from 'numeral';

defineProps({
    creator: {
        type: Object,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    uuid: {
        type: String
    },
    thumbnail: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    uri: {
        type: String
    },
    hit: {
        type: Number,
        required: true
    }
});
</script>

<template>
    <RouterLink
        :to="{ name: 'campaign', params: { uri } }"
        class="flex items-center space-x-2 px-4 py-3 w-full hover:bg-black/10"
    >
        <div class="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 border border-stroke">
            <img :src="thumbnail" :alt="name" />
        </div>

        <div class="space-y-1 flex-grow w-0">
            <div class="text-sm md:text-base font-semibold w-full truncate">{{ name }}</div>
            <div>
                <QCreator v-bind="creator" size="xs" />
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex items-center text-xs text-content space-x-1">
                    <i class="ri ri-user-line"></i>
                    <span class="font-medium uppercase">
                        {{ numeral(hit).format('0.0a') }}
                    </span>
                </div>

                <div class="flex items-center text-xs text-content space-x-1">
                    <i class="ri ri-time-line"></i>
                    <span class="font-medium">{{ createdAt }}</span>
                </div>
            </div>
        </div>
    </RouterLink>
</template>
