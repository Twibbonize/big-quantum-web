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
            'Twibbonize links atrracts the curious, drawing them to your cause and sparking interest in your campaign'
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
            'Twibbonize engages your supporters by providing a shareable virtual Twibbon for social media and messaging.'
    },
    {
        icon: '/assets/img/icons/grow.svg',
        title: 'Grow',
        video: '/assets/videos/grow.mp4',
        subtitle: 'your supporters',
        description:
            "Gain more support with a Twibbonize campaign: it not only garners attetion but also creates a bandwagon effect, attracting a growing audience who don't want to miss out on your cause."
    }
];

let timerId = ref(null);
let counter = ref(0);

const index = computed(() => {
    return counter.value % 4;
});

function advance() {
    timerId = setTimeout(timer, 15000);
}

function timer() {
    counter.value = counter.value += 1;
    advance();
}

function setIndex(index) {
    clearTimeout(timerId);
    counter.value = index;
    advance();
}

onMounted(() => {
    advance();
});
</script>

<template>
    <div class="creators-values container">
        <div class="content flex justify-center xl:justify-between flex-col sm:flex-row gap-8 xl:gap-16 2xl:gap-8">
            <div class="flex w-full sm:w-1/2 xl:w-5/12 flex-col justify-center col h-100">
                <div
                    v-for="({ icon, title, subtitle, description, video }, i) in values"
                    :key="`value-${i}`"
                    class="tab flex flex-col"
                    :class="{
                        'tab-active': i === index || isMobile,
                        'cursor-pointer': i !== index
                    }"
                    @click="setIndex(i)"
                >
                    <div class="relative overflow-hidden rounded-xl py-4 px-[1px]">
                        <div class="bg"></div>
                        <video class="video-mobile" muted autoplay loop :src="video"></video>
                        <div class="flex w-full">
                            <img class="icon mr-3" :src="icon" :alt="title" />
                            <div class="flex flex-col">
                                <div class="flex">
                                    <h5 :class="{ 'title-active': i === index || isMobile }">
                                        <span class="title mr-1">{{ title }}</span
                                        ><span class="subtitle">{{ subtitle }}</span>
                                    </h5>
                                </div>
                                <div :class="index === i ? 'description-active' : 'description'">
                                    <p>{{ description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="i === index && !isMobile" class="bar-active">
                        <i v-if="i === index" class="loader-active ri-shining-fill"></i>
                    </div>
                </div>
            </div>
            <div v-if="!isMobile" class="video-container content">
                <video
                    :class="{ ' video-active': index === 0 }"
                    class="video"
                    muted
                    autoplay
                    loop
                    :src="values[0].video"
                ></video>
                <video
                    :class="{ ' video-active': index === 1 }"
                    class="video"
                    muted
                    autoplay
                    loop
                    :src="values[1].video"
                ></video>
                <video
                    :class="{ ' video-active': index === 2 }"
                    class="video"
                    muted
                    autoplay
                    loop
                    :src="values[2].video"
                ></video>
                <video
                    :class="{ ' video-active': index === 3 }"
                    class="video"
                    muted
                    autoplay
                    loop
                    :src="values[3].video"
                ></video>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.creators-values {
    @apply px-5 sm:px-10 xl:px-0 pt-8 sm:pt-24 lg:pb-10 mx-auto;

    .icon {
        @apply w-7 h-7 sm:w-8 sm:h-8;
    }

    .content {
        @apply sm:h-[400px] lg:h-[500px] xl:h-[600px];
    }
    .video-container {
        @apply h-full max-w-full relative pt-8 sm:pt-0 flex justify-center sm:justify-center;
        aspect-ratio: 1/1;
    }

    .video {
        @apply h-full max-w-full absolute rounded-3xl;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        outline: 1px solid rgba(27, 27, 27, 0.2);
        animation: opac 1s;
        opacity: 0;
        transition: opacity 1s ease;
    }

    .video-active {
        opacity: 1;
        transition: opacity 1s ease;
    }

    .video-mobile {
        @apply rounded-xl sm:hidden mb-6;
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
            // @apply lowercase text-3xl sm:text-5xl;
            // font-family: Marck Script;
            // font-style: normal;
            // font-weight: 400;
            // line-height: 100%; /* 48px */
            // letter-spacing: -2.4px;
            // text-decoration: underline;
            // transform: rotate(-3.671deg);
        }

        .subtitle {
            // @apply opacity-100 text-xl sm:text-3xl;
        }

        // @apply text-2xl text-3xl;
        // font-size: 24px;
        // font-style: normal;
        // font-weight: 600;
        // line-height: 100%; /* 24px */
        // letter-spacing: -0.48px;
    }
    .tab {
        @apply mb-2;
        border-bottom: 1px solid #dee8e800;
        // transition: border 1s ease;
    }
    .tab-active {
        @apply mb-2;
        border-bottom: 1px solid #dee8e8;
        transition: border 1s ease;
    }

    .description,
    .description-active {
        @apply text-sm sm:text-base;
    }
}

@media screen and (min-width: 640px) {
    .creators-values {
        .icon {
            height: 32px;
            width: 32px;
        }

        .description {
            height: 0;
            transition: height 1s ease;
            overflow: hidden;
            will-change: height;
        }

        .description-active {
            height: calc(2lh);
            transition: height 1s ease;
            overflow: hidden;
            will-change: height;
        }

        .tab {
            @apply rounded-xl relative mb-0 bg-transparent;
            border: 1px solid rgba(27, 27, 27, 0);
            // transition: border 2s ease;

            .bg {
                @apply absolute w-full h-[300px] -z-10 rounded-xl;
                top: 0;
                left: -1000px;
                transition: left 1s ease;
                background: linear-gradient(103deg, #dee8e8 23.92%, rgba(222, 232, 232, 0) 105.14%);
            }
        }

        .tab-active {
            @apply rounded-xl relative mb-0 bg-transparent;
            border: 1px solid rgba(27, 27, 27, 0.2);
            transition: border 1s ease 1s;

            .bg {
                @apply absolute w-full h-60 -z-10 rounded-xl;
                top: 0;
                left: 0;
                transition: left 1s ease;
                background: linear-gradient(103deg, #dee8e8 23.92%, rgba(222, 232, 232, 0) 105.14%);
            }
        }

        .loader-active {
            position: absolute;
            font-size: 12px;
            bottom: -9px;
            animation: opac 3s ease;
        }
        .bar-active {
            position: absolute;
            height: 1px;
            bottom: -1px;
            right: 10px;
            width: 100%;
            background-image: linear-gradient(
                to right,
                #ffffff,
                #f3f3f3,
                #e8e8e8,
                #dcdcdc,
                #d1d1d1
            );
            animation:
                opac 3s ease,
                loadingbar 15.1s linear infinite;
        }
    }
}

@keyframes opac {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
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
</style>
