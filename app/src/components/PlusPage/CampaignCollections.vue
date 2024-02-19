<script setup>
import { computed, ref } from 'vue';
import QSlider from '@/components/atoms/QSlider.vue';
import QPills from '@/components/atoms/QPills.vue';
import QOpenLink from '@/components/atoms/QOpenLink.vue';
import CollectionsCard from '@/components/PlusPage/CollectionsCard.vue';

const moods = computed(() => {
    return ['😃 Enthusiasm', '🥺 Gratitude', '🥲 Sympathy', '😊 Participation'];
});

const collectionsCard = computed(() => {
    return [
        {
            title: '🥳 Happy Birthday!',
            sum: 21,
            campaigns: ['campaign-hbd-1.jpg', 'campaign-hbd-2.jpg', 'campaign-hbd-3.jpg'],
            url: '/collections/happy-birthday'
        },
        {
            title: '💍 Wedding Celebration',
            sum: 12,
            campaigns: [
                'campaign-wedding-celebration-1.jpg',
                'campaign-wedding-celebration-2.jpg',
                'campaign-wedding-celebration-3.jpg'
            ],
            url: '/collections/wedding-celebration'
        },
        {
            title: '🎓 Graduation',
            sum: 10,
            campaigns: [
                'campaign-graduation-1.jpg',
                'campaign-graduation-2.jpg',
                'campaign-graduation-3.jpg'
            ],
            url: '/collections/graduation'
        },
        {
            title: '👶 New Baby',
            sum: 12,
            campaigns: [
                'campaign-new-baby-1.jpg',
                'campaign-new-baby-2.jpg',
                'campaign-new-baby-3.jpg'
            ],
            url: '/collections/new-baby'
        }
    ];
});

const props = defineProps({
    width: Number
});

let moodIndex = ref(0);

const setMoodIndex = (index) => {
    moodIndex.value = index;
};
</script>

<template>
    <div class="campaign-collections">
        <h2 class="title">There's always a template for that</h2>
        <p class="description">
            Make any moments special with our curated collection of templates. Perfect for every
            occasions.
        </p>
        <div
            class="container sm:flex sm:flex-col sm:items-center mx-auto md:w-full pt-10 overflow-hidden"
        >
            <QSlider
                class="-mx-5"
                direction="horizontal"
                :loop="false"
                slides-per-view="auto"
                :observer="true"
                :observe-parent="true"
                :space-between="30"
                :grab-cursor="true"
            >
                <swiper-slide
                    class="w-fit first:ml-5"
                    v-for="(mood, i) in moods"
                    :key="`mood-${i}`"
                >
                    <QPills
                        class="p-4 w-fit font-bold text-"
                        :class="{ 'mood-active': moodIndex === i }"
                        @click="setMoodIndex(i)"
                    >
                        {{ mood }}
                    </QPills>
                </swiper-slide>
            </QSlider>
        </div>
        <div class="container mx-auto md:w-full pt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <CollectionsCard
                v-for="(collection, i) in collectionsCard"
                :key="`colllection-${i}`"
                :title="collection.title"
                :sum="collection.sum"
                :campaigns="collection.campaigns"
                :url="collection.url"
            />
        </div>
        <div class="flex justify-center mt-6">
            <QOpenLink classes="text-base" url="/collections" text="Explore More Collections" />
        </div>
    </div>
</template>

<style lang="scss">
.campaign-collections {
    @apply container mx-auto px-5 py-14 flex flex-col items-center;

    .title {
        @apply text-center text-[28px] sm:text-[56px] font-bold;
    }

    .description {
        @apply text-center text-base sm:text-2xl mt-6;
    }

    .mood-active {
        @apply bg-main cursor-default;
    }
}
</style>
