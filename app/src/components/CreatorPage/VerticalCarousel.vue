<script setup>
import { computed, onMounted, ref } from 'vue';

const values = [
    {
        icon: '/assets/img/icons/inspire.svg',
        title: 'Inspire',
        video: '/assets/videos/unite.mp4',
        subtitle: 'your supporters',
        description:
            'Bring all your campaign’s supporter community  on your Twibbonize page; where supporters connect and you see the impact!'
    },
    {
        icon: '/assets/img/icons/unite.svg',
        title: 'unite',
        video: '/assets/videos/unite.mp4',
        subtitle: 'your supporters',
        description:
            'Bring all your campaign’s supporter community  on your Twibbonize page; where supporters connect and you see the impact!'
    },
    {
        icon: '/assets/img/icons/entertain.svg',
        title: 'Entertain',
        video: '/assets/videos/unite.mp4',
        subtitle: 'your supporters',
        description:
            'Bring all your campaign’s supporter community  on your Twibbonize page; where supporters connect and you see the impact!'
    },
    {
        icon: '/assets/img/icons/grow.svg',
        title: 'Grow',
        video: '/assets/videos/unite.mp4',
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
    setTimeout(timer, 5000);
}

function timer() {
    counter.value = counter.value += 1;
    advance();
}

onMounted(() => {
    advance();
});
</script>

<template>
    <div class="container px-5 pt-24 pb-10 mx-auto">
        <div class="flex pt-5 flex-col sm:flex-row">
            <div class="flex flex-col justify-center col">
                <div
                    v-for="({ icon, title, subtitle, description }, i) in values"
                    :key="`value-${i}`"
                    class="flex p-4"
                    :class="{
                        'creators-values__tab-active': i === index,
                        'items-center': i !== index
                    }"
                >
                    <img class="icon mr-3" :src="icon" :alt="title" />
                    <div v-if="i === index" class="flex flex-col">
                        <div class="flex">
                            <h5 class="title-active">
                                <span class="mr-1">{{ title }}</span
                                >{{ subtitle }}
                            </h5>
                        </div>
                        <p class="color_black mt-4">{{ description }}</p>
                    </div>
                    <div v-if="i === index" class="creators-values__bar-active">
                        <i
                            v-if="i === index"
                            class="creators-values__loader-active ri-shining-fill"
                        ></i>
                    </div>
                    <h5 v-else class="font-bold text-2xl">{{ title }}</h5>
                </div>
            </div>
            <div class="pt-8 sm:pt-0 flex  justify-center sm:justify-end">
                <video
                    class="video"
                    muted
                    autoplay
                    :src="values[index].video"
                ></video>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.creators-values {
    .icon {
        height: 60px;
        width: 60px;
    }
    .video {
        border-radius: 20px;
        outline: 1px solid rgba(27, 27, 27, 0.2);
    }
    &__tab-active {
        border-radius: 10px;
        border: 1px solid rgba(27, 27, 27, 0.2);
        // border-bottom: none;
        background: linear-gradient(103deg, #dee8e8 23.92%, rgba(222, 232, 232, 0) 105.14%);
        position: relative;
        animation: fadeInAnimation ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    &__loader-active {
        position: absolute;
        font-size: 12px;
        bottom: -9px;
    }
    &__bar-active {
        position: absolute;
        height: 1px;
        bottom: -1px;
        right: 10px;
        width: 100%;
        background-image: linear-gradient(to right, #ffffff, #f3f3f3, #e8e8e8, #dcdcdc, #d1d1d1);
        animation: loadingbar 5s linear infinite;
    }
    .title-active {
        span {
            font-family: Marck Script;
            font-size: 48px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 48px */
            letter-spacing: -2.4px;
            text-decoration: underline;
            transform: rotate(-3.671deg);
        }

        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 24px */
        letter-spacing: -0.48px;
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
