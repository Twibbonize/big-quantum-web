<script setup>
defineProps({
    avatar: {
        type: String
    },
    name: {
        type: String
    },
    username: {
        type: String
    },
    website: {
        type: String
    },
    totalCampaigns: {
        type: Number
    },
    totalSupports: {
        type: String
    }
});
</script>

<template>
    <div class="creator flex items-center">
        <div class="creator__avatar">
            <img class="w-16 h-16 rounded-full" :src="avatar" :alt="name" />
        </div>
        <div class="creator__info ml-4">
            <div class="space-y-1">
                <div class="font-bold text-lg hover:underline">{{ name }}</div>
                <div class="text-sm opacity-30">
                    <i class="ri-group-line"></i>
                    <span>785.5K</span>
                </div>
            </div>
        </div>
    </div>
</template>
