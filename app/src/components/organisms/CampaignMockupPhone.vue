<script setup>
import { computed, ref, watch } from 'vue';
import QMockup from '@/components/atoms/QMockup.vue';
import QButton from '@/components/atoms/QButton.vue';
import QCreator from '@/components/atoms/QCreator.vue';
import QShareButton from '@/components/atoms/QShareButton.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import CampaignMeta from '@/components/molecules/CampaignMeta.vue';
import FrameSelector from '@/components/molecules/FrameSelector.vue';
import PostMockup from '@/components/molecules/PostMockup.vue';

const props = defineProps({
    frames: {
        type: Array
    },
    title: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
});

// ui states
const selectedFrame = ref(props.frames[0]);
const displayType = ref('grid');
const mocks = computed(() => {
    if (!selectedFrame.value) return [];

    const photos = [
        '/assets/img/sample/sample-person-1.jpg',
        '/assets/img/sample/sample-person-2.jpg',
        '/assets/img/sample/sample-person-3.jpg',
        '/assets/img/sample/sample-person-4.jpg',
        '/assets/img/sample/sample-person-5.jpg',
        '/assets/img/sample/sample-person-8.jpg',
        '/assets/img/sample/sample-person-10.jpg',
        '/assets/img/sample/sample-person-11.jpg',
        '/assets/img/sample/sample-person-12.jpg'
    ];

    return photos.map(({ photo }) => {
        // const photo = photos[Math.floor(Math.random() * photos.length)];
        return {
            photo,
            frame: selectedFrame.value
        };
    });
});

const computedDescription = computed(() => {
    return props.description !== '' ? props.description : 'Campaign description';
});

const computedLink = computed(() => {
    return props.link !== '' ? `twibbo.nz/${props.link}` : 'twibbo.nz/campaign-link';
});

watch(
    () => props.frames,
    (newValue) => {
        selectedFrame.value = newValue[0];
    }
);
</script>

<template>
    <QMockup>
        <div class="campaign">
            <div class="navbar">
                <div class="navbar__wrapper">
                    <div class="navbar__left">
                        <img
                            class="navbar__logo"
                            src="/assets/img/logos/twibbonize-logo-black.svg"
                        />
                    </div>

                    <div class="navbar__right">
                        <button class="navbar__search">
                            <i class="ri-search-line"></i>
                        </button>

                        <button class="navbar__burger">
                            <span class="navbar__burger__js">
                                <i class="ri-menu-line"></i>
                            </span>
                            <span class="navbar__burger__avatar">
                                <img src="/assets/img/avatars/default.svg" alt="avatar" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="campaign__background"></div>
            <div class="campaign__content">
                <div class="grid grid-cols-12">
                    <div class="col-span-12">
                        <div class="campaign__main">
                            <div class="campaign__frames">
                                <div class="campaign__frames__stage">
                                    <router-link :to="{ name: 'campaign-support' }">
                                        <img
                                            :src="selectedFrame"
                                            class="campaign__frames__stage__image"
                                        />
                                    </router-link>
                                </div>

                                <div class="campaign__frames__card">
                                    <FrameSelector
                                        v-model="selectedFrame"
                                        :frames="frames"
                                        size="sm"
                                    />

                                    <div class="campaign__frames__action">
                                        <QButton>
                                            <span class="flex items-center font-semibold">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="21"
                                                    height="20"
                                                    viewBox="0 0 21 20"
                                                    fill="none"
                                                >
                                                    <g clip-path="url(#clip0_2061_6507)">
                                                        <path
                                                            d="M19.6663 15.8333C19.6663 16.2754 19.4907 16.6993 19.1782 17.0118C18.8656 17.3244 18.4417 17.5 17.9997 17.5H2.99967C2.55765 17.5 2.13372 17.3244 1.82116 17.0118C1.5086 16.6993 1.33301 16.2754 1.33301 15.8333V6.66667C1.33301 6.22464 1.5086 5.80072 1.82116 5.48816C2.13372 5.17559 2.55765 5 2.99967 5H6.33301L7.99967 2.5H12.9997L14.6663 5H17.9997C18.4417 5 18.8656 5.17559 19.1782 5.48816C19.4907 5.80072 19.6663 6.22464 19.6663 6.66667V15.8333Z"
                                                            stroke="#1B1B1B"
                                                            stroke-width="1.66667"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M10.5003 14.1669C12.3413 14.1669 13.8337 12.6745 13.8337 10.8336C13.8337 8.99263 12.3413 7.50024 10.5003 7.50024C8.65938 7.50024 7.16699 8.99263 7.16699 10.8336C7.16699 12.6745 8.65938 14.1669 10.5003 14.1669Z"
                                                            stroke="#1B1B1B"
                                                            stroke-width="1.66667"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2061_6507">
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                fill="white"
                                                                transform="translate(0.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span class="ml-1">Choose Your Photo</span>
                                            </span>
                                        </QButton>
                                    </div>
                                </div>
                            </div>

                            <div class="campaign__detail">
                                <div class="campaign__detail__title">
                                    {{ title !== '' ? title : 'Campaign Title' }}
                                </div>

                                <div class="campaign__detail__creator">
                                    <QCreator
                                        name="Hanoi Art 2025"
                                        username="hanoiart"
                                        avatar="/assets/img/sample/sampel-avatar-18.jpg"
                                        size="md"
                                    />
                                </div>

                                <p class="campaign__detail__description">
                                    <QEllipsisText :text="computedDescription" />
                                </p>

                                <div class="campaign__detail__meta">
                                    <div class="campaign__detail__meta-wrapper">
                                        <CampaignMeta title="Supporters" value="-">
                                            <template #icon>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    :width="20"
                                                    :height="20"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M2.00016 14.6667C1.63197 14.6667 1.32913 14.3668 1.37459 14.0014C1.70207 11.3699 3.94663 9.33342 6.66683 9.33342C9.38705 9.33342 11.6316 11.3699 11.9591 14.0014C12.0045 14.3668 11.7017 14.6667 11.3335 14.6667C10.9653 14.6667 10.6727 14.366 10.612 14.0029C10.2958 12.1097 8.6498 10.6667 6.66683 10.6667C4.68386 10.6667 3.0379 12.1097 2.72167 14.0029C2.66101 14.366 2.36835 14.6667 2.00016 14.6667ZM6.66683 8.66675C4.45683 8.66675 2.66683 6.87675 2.66683 4.66675C2.66683 2.45675 4.45683 0.666748 6.66683 0.666748C8.87683 0.666748 10.6668 2.45675 10.6668 4.66675C10.6668 6.87675 8.87683 8.66675 6.66683 8.66675ZM6.66683 7.33342C8.14016 7.33342 9.3335 6.14008 9.3335 4.66675C9.3335 3.19341 8.14016 2.00008 6.66683 2.00008C5.1935 2.00008 4.00016 3.19341 4.00016 4.66675C4.00016 6.14008 5.1935 7.33342 6.66683 7.33342ZM11.9155 10.4104C12.0667 10.0744 12.4646 9.92134 12.7789 10.1136C14.132 10.9411 15.0876 12.3549 15.2924 14.0016C15.3379 14.367 15.035 14.6667 14.6668 14.6667C14.2986 14.6667 14.006 14.3661 13.9453 14.003C13.7604 12.8955 13.1203 11.942 12.224 11.3414C11.9182 11.1365 11.7644 10.7461 11.9155 10.4104ZM11.5191 3.01714C11.632 2.62181 12.069 2.40958 12.4078 2.6424C13.3697 3.30317 14.0002 4.41099 14.0002 5.66675C14.0002 7.3214 12.9055 8.71921 11.4005 9.17589C11.0158 9.29264 10.6668 8.97201 10.6668 8.5699C10.6668 8.2294 10.9234 7.95066 11.2373 7.81875C12.0773 7.46576 12.6668 6.63541 12.6668 5.66675C12.6668 4.95265 12.3464 4.31371 11.8415 3.88579C11.5871 3.67024 11.4275 3.33772 11.5191 3.01714Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </template>
                                        </CampaignMeta>
                                    </div>
                                    <div class="campaign__detail__meta-separator"></div>
                                    <div class="campaign__detail__meta-wrapper">
                                        <CampaignMeta
                                            :iconClass="['ri', 'ri-time-line', 'ri-lg'].join(' ')"
                                            title="Created"
                                            value="-"
                                        />
                                    </div>
                                </div>
                                <div class="campaign__detail__actions">
                                    <div class="flex-grow">
                                        <QShareButton :link="computedLink" />
                                    </div>

                                    <div class="flex-shrink-0">
                                        <QButton circle variant="secondary">
                                            <i class="ri-bookmark-line"></i>
                                        </QButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 bg-transparent">
                        <div class="campaign-feeds">
                            <div class="campaign-feeds__overlay">
                                <div class="campaign-feeds__empty-copy">
                                    <h4 class="text-lg font-bold">No Post Yet</h4>
                                    <p class="text-content leading-tight text-xs mt-1">
                                        Be the first to post your support here. Start with uploading
                                        your photo!
                                    </p>
                                </div>
                            </div>

                            <div class="campaign-feeds__panels">
                                <div
                                    :class="[
                                        'campaign-feeds__wrapper',
                                        'campaign-feeds__wrapper--mock',
                                        displayType === 'grid'
                                            ? 'campaign-feeds__grid'
                                            : 'campaign-feeds__list'
                                    ]"
                                >
                                    <PostMockup
                                        v-for="(mock, i) in mocks"
                                        :key="i"
                                        v-bind="mock"
                                        :display="displayType"
                                        rounded
                                    />
                                </div>
                            </div>

                            <div class="campaign-feeds__control">
                                <QButton circle variant="secondary">
                                    <i
                                        :class="[
                                            displayType === 'grid'
                                                ? 'ri-list-unordered'
                                                : 'ri-layout-grid-line',
                                            'ri-lg',
                                            'font-normal'
                                        ]"
                                    ></i>
                                </QButton>

                                <QButton circle variant="secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                    >
                                        <path
                                            d="M27 6V12C27 12.2652 26.8946 12.5196 26.7071 12.7071C26.5196 12.8946 26.2652 13 26 13C25.7348 13 25.4804 12.8946 25.2929 12.7071C25.1054 12.5196 25 12.2652 25 12V8.41375L18.7075 14.7075C18.5199 14.8951 18.2654 15.0006 18 15.0006C17.7346 15.0006 17.4801 14.8951 17.2925 14.7075C17.1049 14.5199 16.9994 14.2654 16.9994 14C16.9994 13.7346 17.1049 13.4801 17.2925 13.2925L23.5863 7H20C19.7348 7 19.4804 6.89464 19.2929 6.70711C19.1054 6.51957 19 6.26522 19 6C19 5.73478 19.1054 5.48043 19.2929 5.29289C19.4804 5.10536 19.7348 5 20 5H26C26.2652 5 26.5196 5.10536 26.7071 5.29289C26.8946 5.48043 27 5.73478 27 6ZM13.2925 17.2925L7 23.5863V20C7 19.7348 6.89464 19.4804 6.70711 19.2929C6.51957 19.1054 6.26522 19 6 19C5.73478 19 5.48043 19.1054 5.29289 19.2929C5.10536 19.4804 5 19.7348 5 20V26C5 26.2652 5.10536 26.5196 5.29289 26.7071C5.48043 26.8946 5.73478 27 6 27H12C12.2652 27 12.5196 26.8946 12.7071 26.7071C12.8946 26.5196 13 26.2652 13 26C13 25.7348 12.8946 25.4804 12.7071 25.2929C12.5196 25.1054 12.2652 25 12 25H8.41375L14.7075 18.7075C14.8951 18.5199 15.0006 18.2654 15.0006 18C15.0006 17.7346 14.8951 17.4801 14.7075 17.2925C14.5199 17.1049 14.2654 16.9994 14 16.9994C13.7346 16.9994 13.4801 17.1049 13.2925 17.2925Z"
                                            fill="#1B1B1B"
                                        />
                                    </svg>
                                </QButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </QMockup>
</template>

<style scoped lang="scss">
.campaign {
    position: relative;
    z-index: 0;
    padding-top: 76px;

    .navbar {
        position: absolute;
        top: 0;
        z-index: 50;
        width: 100%;
        background: transparent;
        box-shadow: none;
        transition-property: color, background-color, border-color, text-decoration-color, fill,
            stroke;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        .navbar__wrapper {
            position: relative;
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            padding-top: 18px;
            padding-bottom: 18px;
            margin-right: auto;
            margin-left: auto;
        }

        .navbar__right {
            @apply flex items-center justify-end;
        }

        .navbar__search {
            width: 32px;
            height: 32px;
            border-radius: 100%;
            font-size: 18px;
            @apply bg-white flex items-center justify-center mr-1;
        }

        .navbar__burger {
            @apply bg-white rounded-full flex items-center justify-center border border-stroke pl-2 pr-1;
            height: 32px;

            .navbar__burger__avatar {
                height: 24px;
                width: 24px;
                flex-shrink: 0;
                margin-left: 4px;
            }
        }

        .navbar__logo {
            height: 20px;
        }
    }

    .campaign__background {
        width: 100%;
        top: 0;
        left: 0;
        height: 300px;
        position: absolute !important;

        @include before() {
            // background-color: #e6e6e6;
            background: url('/assets/img/banners/default.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: scroll;
            height: 300px;
            width: 100%;
            left: 0;
            top: 0;
        }
    }

    .campaign__content {
        position: relative;
        z-index: 1;
        width: 100%;
        padding-top: 24px;
        @apply container px-0;
    }

    .campaign__main {
        height: fit-content;
    }

    .campaign__frames {
        .campaign__frames__stage {
            @apply z-10 relative bg-white p-1 flex items-center mx-auto rounded-xl;
            width: fit-content;
            max-width: 96px;

            .campaign__frames__stage__image {
                @apply rounded-lg;
                max-width: 100%;
            }
        }

        .campaign__frames__card {
            @apply px-2.5 pt-16 pb-2.5 z-0 -mt-12 bg-white relative space-y-4 w-full;
        }

        .campaign__frames__options {
            @apply flex items-center justify-center space-x-2 max-w-full overflow-scroll;
            @include no_scrollbar();
        }

        .campaign__frames__option {
            @apply h-10 w-10 rounded-lg p-2 border border-stroke bg-white transition-colors duration-200 cursor-pointer;

            @include md_screen {
                @apply h-14 w-14;
            }

            &--checked {
                @apply border-main bg-gray-200;
            }
        }

        .campaign__frames__action {
            @apply flex items-center justify-center;
        }
    }

    .campaign__detail {
        @apply relative px-4 sm:mx-0 pt-8 bg-white space-y-4 flex flex-col justify-center;
        margin-top: -1px;
        padding-bottom: 24px;
        box-shadow: 0 19px 24px rgba(0, 0, 0, 0.15);

        @include before {
            height: 1px;
            width: calc(100% - 32px);
            left: 50%;
            transform: translate(-50%, 0%);
            @apply bg-stroke top-2;
        }

        .campaign__detail__title {
            @apply text-lg lg:text-2xl font-bold text-ellipsis overflow-hidden truncate whitespace-nowrap leading-none text-center;
        }

        .campaign__detail__description {
            @apply text-center;
        }

        .campaign__detail__creator {
            @apply flex items-center justify-center;
        }

        .campaign__detail__actions {
            @apply flex items-center space-x-1 max-w-full;
        }

        .campaign__detail__meta {
            @apply flex items-center justify-center space-x-3 border-t border-transparent;

            .campaign__detail__meta-separator {
                @apply bg-stroke;
                width: 1px;
                height: 34px;
                display: block;
                min-height: 100%;
            }
        }
    }
}

// campaign feeds
.campaign-feeds {
    @apply h-full w-full bg-white relative overflow-hidden;

    .campaign-feeds__overlay {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 83.09%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .campaign-feeds__empty-copy {
        @apply text-center max-w-sm;
    }

    .campaign-feeds__header {
        @apply flex items-center justify-between w-full py-6 container;

        .campaign-feeds__header__left {
            @apply flex items-center;
        }
    }

    .campaign-feeds__panels {
        @include no_scrollbar();

        @include before {
            height: 16px;
            top: -24px;
            left: 0;
            display: block;
            width: 100%;
            background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 91%);
            filter: blur(10px);
            z-index: 10;
            pointer-events: none;
        }

        @include after {
            height: 24px;
            bottom: -24px;
            left: 0px;
            display: block;
            width: 100%;
            background: linear-gradient(0deg, rgb(0 0 0) 0%, rgba(0, 0, 0, 0.1) 100%);
            filter: blur(10px);
            z-index: 10;
            pointer-events: none;
        }
    }

    .campaign-feeds__wrapper {
        // padding: 7px 0px;
        padding-top: 8px;
        position: relative;
        z-index: 0;

        @apply rounded-none;
    }

    .campaign-feeds__grid {
        @apply container grid grid-cols-3 gap-1 overflow-y-auto;
        max-height: 420px;
        @include no_scrollbar();

        // @include before {
        //     height: 8px;
        //     top: 0px;
        //     left: 0;
        //     display: block;
        //     width: 100%;
        //     @apply bg-stroke;
        // }

        // @include after {
        //     height: 8px;
        //     position: relative;
        //     display: block;
        //     width: 100%;
        //     margin-top: -4px;
        //     @apply bg-stroke col-span-3;
        // }
    }

    .campaign-feeds__wrapper.campaign-feeds__wrapper--mock.campaign-feeds__grid,
    .campaign-feeds__wrapper.campaign-feeds__wrapper--mock.campaign-feeds__list {
        @apply overflow-y-hidden;
    }

    .campaign-feeds-all {
        @apply container px-4 pt-6;
    }

    .campaign-feeds__control {
        @apply absolute w-full z-10 top-0 right-0 flex items-center justify-end pt-6 pr-5 space-x-1;
    }
}
</style>
