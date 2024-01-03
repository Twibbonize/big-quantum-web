<script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    width: Number,
    height: Number
});

const isMobile = computed(() => {
    if (props.width < 640) return true;
    return false;
});

const values = [
    {
        icon: '/assets/img/icons/inspire.svg',
        title: 'Inspire',
        video: '/assets/videos/inspire.mp4',
        subtitle: 'your supporters',
        description:
            'Bring all your campaign’s supporter community  on your Twibbonize page; where supporters connect and you see the impact!'
    },
    {
        icon: '/assets/img/icons/unite.svg',
        title: 'Unite',
        video: '/assets/videos/unite.mp4',
        subtitle: 'your supporters',
        description:
            'Bring all your campaign’s supporter community  on your Twibbonize page; where supporters connect and you see the impact!'
    },
    {
        icon: '/assets/img/icons/entertain.svg',
        title: 'Entertain',
        video: '/assets/videos/entertain.mp4',
        subtitle: 'your supporters',
        description:
            'Bring all your campaign’s supporter community  on your Twibbonize page; where supporters connect and you see the impact!'
    },
    {
        icon: '/assets/img/icons/grow.svg',
        title: 'Grow',
        video: '/assets/videos/grow.mp4',
        subtitle: 'your supporters',
        description:
            'Bring all your campaign’s supporter community  on your Twibbonize page; where supporters connect and you see the impact!'
    }
];

let counter = ref(0);

const index = computed(() => {
    return counter.value % 4;
});

function advance() {
    setTimeout(timer, 15000);
}

function timer() {
    counter.value = counter.value += 1;
    advance();
}

function setIndex(index) {
    counter.value = index;
    advance();
}

onMounted(() => {
    advance();
});
</script>

<template>
    <div class="creators-values container px-5 pt-8 sm:pt-24 pb-10 mx-auto">
        <div class="flex pt-5 flex-col sm:flex-row gap-8">
            <div class="flex flex-1 flex-col justify-center col h-100">
                <div
                    v-for="({ icon, title, subtitle, description, video }, i) in values"
                    :key="`value-${i}`"
                    class="flex flex-col p-4"
                    :class="{
                        'tab-active': i === index || isMobile,
                        'tab': i !== index && !isMobile,
                        'cursor-pointer': i !== index,
                        'items-center': i !== index
                    }"
                    @click="setIndex(i)"
                >
                    <video class="video sm:hidden mb-6" muted autoplay :src="video"></video>
                    <div class="flex w-full" :class="{ 'items-center': i !== index && !isMobile }">
                        <img class="icon mr-3" :src="icon" :alt="title" />
                        <div class="flex flex-col">
                            <div class="flex">
                                <h5  :class="{ 'title-active mb-4': i === index || isMobile }">
                                    <span class="title mr-1">{{ title }}</span><span class="subtitle">{{ subtitle }}</span>
                                </h5>
                            </div>
                            <p :class="index === i ? 'description-active' : 'description'">{{ description }}</p>
                        </div>
                        <div v-if="i === index && !isMobile" class="bar-active">
                            <i v-if="i === index" class="loader-active ri-shining-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!isMobile" class="pt-8 sm:pt-0 flex flex-1 justify-center sm:justify-end">
                <video class="video" muted autoplay :src="values[index].video"></video>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.creators-values {
    .icon {
        height: 40px;
        width: 40px;
    }
    .video {
        border-radius: 20px;
        outline: 1px solid rgba(27, 27, 27, 0.2);
    }

    .title {
        @apply text-2xl font-bold;
    }

    .subtitle {
        @apply opacity-0;
    }

    .title-active {
        .title {
            @apply lowercase text-3xl sm:text-5xl;
            font-family: Marck Script;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 48px */
            letter-spacing: -2.4px;
            text-decoration: underline;
            transform: rotate(-3.671deg);
        }

        .subtitle {
            @apply opacity-100 text-xl sm:text-3xl;
        }

        @apply text-2xl text-3xl;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 24px */
        letter-spacing: -0.48px;
    }
    .tab-active {
        border-bottom: 1px solid #dee8e8;
        padding-bottom: 24px;
        margin-bottom: 8px;
    }

    .description, .description-active {
        @apply text-sm sm:text-base;
    }
}

@media screen and (min-width: 640px) {
    .creators-values {
        .description {
            height: 0;
            transition: height .6s ease;
            overflow: hidden;
        }

        .description-active {
            height: 60px;
            transition: height .6s ease;
        }

        .tab {
            border-radius: 10px;
            background: #FFFFFF;
            border: none;
            padding-bottom: 16px;
            margin-bottom: 0;
            // position: relative;
        }

        .tab-active {
            border-radius: 10px;
            border: 1px solid rgba(27, 27, 27, 0.2);
            border-bottom: 1px solid #dee8e8;
            background: linear-gradient(103deg, #dee8e8 23.92%, rgba(222, 232, 232, 0) 105.14%);
            position: relative;
            padding-bottom: 16px;
            margin-bottom: 0;
            transition: background .6s ease;
        }

        

        .loader-active {
            position: absolute;
            font-size: 12px;
            bottom: -9px;
        }
        .bar-active {
            position: absolute;
            height: 1px;
            bottom: -1px;
            right: 10px;
            width: 100%;
            background-image: linear-gradient(to right, #ffffff, #f3f3f3, #e8e8e8, #dcdcdc, #d1d1d1);
            animation: loadingbar 15s linear infinite;
        }
    }
}

@keyframes loadingbar {
    from {
        width: 100%;
    }

    to {
        width: 0%;
    }
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
