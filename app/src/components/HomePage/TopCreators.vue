<script setup>
import { ref, computed, onMounted } from 'vue';
import CreatorBox from '@/components/elements/CreatorBox.vue';
import TWToggleSwitch3State from '@/components/base/TWToggleSwitch3State.vue';
import QSlider from '@/components/base/QSlider.vue';

const creators = ref([
    {
        name: 'Universe Tech',
        avatar: 'sample-avatar-1.jpg',
        supports: 585040
    },
    {
        name: 'Fashion Week',
        avatar: 'sample-avatar-2.jpg',
        supports: 182200
    },
    {
        name: 'David Alexander',
        avatar: 'sample-avatar-3.jpg',
        supports: 632100
    },
    {
        name: 'Liberty Scholarship',
        avatar: 'sample-avatar-4.jpg',
        supports: 385700
    },
    {
        name: 'Albert Forest',
        avatar: 'sample-avatar-5.jpg',
        supports: 785500
    },
    {
        name: 'Eleanor Pena',
        avatar: 'sample-avatar-6.jpg',
        supports: 124100
    },
    {
        name: 'Ronald Richard',
        avatar: 'sample-avatar-7.jpg',
        supports: 825000
    },
    {
        name: 'Bit by Bit',
        avatar: 'sample-avatar-8.jpg',
        supports: 284300
    },
    {
        name: 'Arlene McCoy',
        avatar: 'sample-avatar-9.jpg',
        supports: 199100
    }
]);

const pages = ref(3);
const activePage = ref(0);
const progress = ref(0);

const creatorsChunks = computed(() => {
    const chunkSize = 3;

    if (creators.value.length > 0) {
        let chunks = [];

        for (let i = 0; i < creators.value.length; i += chunkSize) {
            const chunk = creators.value.slice(i, i + chunkSize);
            chunks.push(chunk);
        }

        return chunks;
    }

    return [];
});

function getImageUrl(name) {
    const filename = `/assets/img/sample/${name}`;
    return new URL(filename, import.meta.url).href;
}

function setProgress(activeIndex) {
    activePage.value = activeIndex;
    let timer = 0;
    let interval = setInterval(() => {
        if (timer === 100) {
            const swiperCreators = document.getElementById('swiperCreators');
            clearInterval(interval);
        } else {
            timer++;
            progress.value = timer;
        }
    }, 50);
}

onMounted(() => {
    const swiperCreators = document.getElementById('swiperCreators');

    swiperCreators.addEventListener('swiperslidechange', (event) => {
        const [swiper] = event.detail;

        setProgress(swiper.activeIndex);
    });

    setProgress(0);
});
</script>

<template>
    <div class="tf-section seller background-white">
        <div class="container mx-auto">
            <div class="row">
                <div class="flex items-center justify-between md:w-full pb-8">
                    <div class="heading-section">
                        <h2 class="tf-title">Top Creators</h2>
                    </div>
                    <div class="heading-section flex gap-4 items-center">
                        <TWToggleSwitch3State />
                        <a class="flex items-center color_black" href="explore-3.html"
                            >View All<i class="ri-arrow-right-line"></i
                        ></a>
                    </div>
                </div>
                <div
                    v-for="({ name, avatar, supports }, i) in creators"
                    :key="i + 1"
                    class="wow fadeInUp col-md-4"
                >
                    <CreatorBox
                        :number="i + 1"
                        :name="name"
                        :avatar="getImageUrl(avatar)"
                        :supports="supports"
                    />
                </div>
            </div>
            <QSlider
                id="swiperCreators"
                :loop="false"
                :slides-per-view="1"
                :space-between="30"
                :autoplay-delay="5000"
            >
                <swiper-slide
                    v-for="(chunks, index) in creatorsChunks"
                    :key="`col-creators-${index}`"
                    class="flex flex-col"
                >
                    <CreatorBox
                        v-for="({ name, avatar, supports }, i) in chunks"
                        :key="index * 3 + i + 1"
                        :number="index * 3 + i + 1"
                        :name="name"
                        :avatar="getImageUrl(avatar)"
                        :supports="supports"
                    />
                </swiper-slide>
            </QSlider>
            <div class="creators-pagination flex gap-2 justify-center">
                <div
                    v-for="index in pages"
                    :key="`creators-page-${index}`"
                    class="bullet"
                    :style="`--progress: ${3.6 * progress}deg`"
                >
                    <div v-if="index - 1 === activePage" class="active"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.creators-pagination {
    .bullet {
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background: $color_light;
        position: relative;
    }

    .active {
        width: 14px;
        height: 14px;
        border-radius: 7px;
        position: absolute;
        top: 0;
        left: 0;
        // background: conic-gradient($color_main 90deg, #DEE8E8 0deg);
        background: conic-gradient($color_light var(--progress), $color_main 0deg);
    }
}
</style>
