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
    <div class="creator p-6 rounded-xl shadow-card">
        <div class="flex items-start justify-between">
            <div class="creator__avatar">
                <img class="w-16 h-16 rounded-full" :src="avatar" :alt="name" />
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div
                    class="border border-stroke rounded-lg flex flex-col items-center justify-center py-1 px-1.5 aspect-square"
                >
                    <div class="text-xs text-content">Campaigns</div>
                    <div class="leading-none mt-0.5 font-bold text-lg">
                        {{ totalCampaigns }}
                    </div>
                </div>

                <div
                    class="border border-stroke rounded-lg flex flex-col items-center justify-center py-1 px-1.5 aspect-square"
                >
                    <div class="text-xs text-content">Supports</div>
                    <div class="leading-none mt-0.5 font-bold text-lg">{{ totalSupports }}</div>
                </div>
            </div>
        </div>

        <div class="creator__info">
            <div class="flex items-start justify-between mt-5">
                <div class="space-y-1">
                    <div class="leading-none text-content text-sm">@{{ username }}</div>
                    <div class="font-semibold text-lg">{{ name }}</div>
                </div>
            </div>
        </div>
        <div class="creator__link mt-10">
            <div class="flex items-center justify-between">
                <a href="#" rel="nofollow" target="_blank" class="link text-sm">{{ website }}</a>

                <RouterLink :to="{ name: 'profile' }" class="flex items-center">
                    <span class="text-sm mr-1">View Profile</span>
                    <i class="ri-arrow-right-line ri-lg"></i>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style></style>
