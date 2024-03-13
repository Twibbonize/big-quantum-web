<script setup>
import { useDropZone, useIntersectionObserver } from '@vueuse/core';
import {
    RadioGroup,
    RadioGroupOption,
    RadioGroupLabel,
    Popover,
    PopoverButton,
    PopoverPanel
} from '@headlessui/vue';
import QButton from '@/components/atoms/QButton.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import { onMounted, ref, watch } from 'vue';
import { getTemplateList } from '@/apis';

const dropzoneBox = ref(null);
const files = ref([]);
const { isOverDropzone } = useDropZone(dropzoneBox, {
    onDrop: (file) => {},
    dataTypes: ['image/png']
});

// templates
const templates = ref([]);
const page = ref(1);
const observerEl = ref(null);
const observerIsVisible = ref(false);
const filterCategory = ref(null);
const categoryRadio = ref(null);

const handleFetchTemplates = async () => {
    try {
        const { data } = await getTemplateList({ page: page.value, numItems: 20 });
        templates.value = [
            ...templates.value,
            ...data.map(({ thumbnail, ...other }) => {
                return {
                    thumbnail: `${import.meta.env.VITE_TEMPLATE_THUMBNAIL_URL}/${thumbnail}`,
                    ...other
                };
            })
        ];

        page.value++;
    } catch (error) {
        console.error('Error fetching data', error);
    }
};

const { stop } = useIntersectionObserver(observerEl, ([{ isIntersecting }]) => {
    observerIsVisible.value = isIntersecting;
});

watch(observerIsVisible, (newValue) => {
    if (newValue) {
        handleFetchTemplates();
    }
});

// onMounted(() => {
//     handleFetchTemplates();
// });
</script>

<template>
    <div class="create-campaign">
        <div class="create-campaign__header">
            <div class="px-20">
                <div class="flex items-center justify-between py-8">
                    <img src="/assets/img/logos/twibbonize-logo.svg" alt="Twibbonize" />
                    <QButton variant="subtle" size="lg" circle>
                        <span class="font-light flex items-center justify-center">
                            <i class="ri-close-line ri-2x"></i>
                        </span>
                    </QButton>
                </div>
            </div>
        </div>

        <div class="create-campaign__main">
            <div class="grid grid-cols-2 h-full">
                <!-- left -->
                <div class="frames-section">
                    <div class="dropzone">
                        <div class="dropzone__card space-y-10">
                            <div class="dropzone__header space-y-1">
                                <h2 class="text-xl font-bold">Upload frame of your campaign</h2>
                                <p class="text-content">
                                    In a few easy steps, you can add more or make changes later.
                                </p>
                            </div>

                            <div ref="dropzoneBox" class="dropzone__box">
                                <div class="dropzone__box__inner">
                                    <div class="dropbox__empty-state w-full">
                                        <img
                                            src="/assets/img/icons/upload.svg"
                                            class="mb-4 mx-auto"
                                            alt="upload"
                                        />
                                        <h3 class="text-lg font-bold mb-2 text-center">
                                            Drag your own frame design here
                                        </h3>
                                        <ul class="flex flex-col items-center space-y-1">
                                            <li class="text-sm">
                                                <span class="text-content mr-1">Type:</span>
                                                <span>Image/PNG</span>
                                            </li>

                                            <li class="text-sm">
                                                <span class="text-content mr-1">Size:</span>
                                                <span>Max. 5MB</span>
                                            </li>

                                            <li class="text-sm">
                                                <span class="text-content mr-1"
                                                    >Recommendation:</span
                                                >
                                                <span>1080x1080px</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="my-10">
                        <QSeparator alignment="center">or create your frame now</QSeparator>
                    </div>

                    <div class="tpl">
                        <div class="tpl__filter">
                            <div class="tpl__search">
                                <div class="tpl__search__icon">
                                    <i class="ri-search-line"></i>
                                </div>
                                <input class="tpl__search__input" placeholder="Search templates" />
                            </div>

                            <RadioGroup v-model="categoryRadio">
                                <div class="tpl__categories">
                                    <RadioGroupOption value="decorative" v-slot="{ checked }">
                                        <RadioGroupLabel
                                            :class="[
                                                'tpl__category',
                                                checked && 'tpl__category--checked'
                                            ]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M16.6667 2.58899C17.1269 2.58899 17.5 2.96208 17.5 3.42232V16.7557C17.5 17.2159 17.1269 17.589 16.6667 17.589H3.33333C2.8731 17.589 2.5 17.2159 2.5 16.7557V3.42232C2.5 2.96208 2.8731 2.58899 3.33333 2.58899H16.6667ZM9.324 11.0543L4.16667 11.9632V15.9223H10.1817L9.324 11.0543ZM15.8333 4.25566H9.8175L11.8742 15.9223H15.8333V4.25566ZM8.125 4.25566H4.16667V10.2707L9.03458 9.413L8.125 4.25566Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span class="tpl__category__name">Decorative</span>
                                        </RadioGroupLabel>
                                    </RadioGroupOption>

                                    <RadioGroupOption value="music" v-slot="{ checked }">
                                        <RadioGroupLabel
                                            :class="[
                                                'tpl__category',
                                                checked && 'tpl__category--checked'
                                            ]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M16.6693 2.5V14.1667C16.6693 16.0076 15.1769 17.5 13.3359 17.5C11.495 17.5 10.0026 16.0076 10.0026 14.1667C10.0026 12.3257 11.495 10.8333 13.3359 10.8333C13.9431 10.8333 14.5124 10.9957 15.0026 11.2793V4.16667H7.5026V14.1667C7.5026 16.0076 6.01022 17.5 4.16927 17.5C2.32832 17.5 0.835938 16.0076 0.835938 14.1667C0.835938 12.3257 2.32832 10.8333 4.16927 10.8333C4.77641 10.8333 5.34565 10.9957 5.83594 11.2793V2.5H16.6693ZM4.16927 15.8333C5.08975 15.8333 5.83594 15.0872 5.83594 14.1667C5.83594 13.2462 5.08975 12.5 4.16927 12.5C3.2488 12.5 2.5026 13.2462 2.5026 14.1667C2.5026 15.0872 3.2488 15.8333 4.16927 15.8333ZM13.3359 15.8333C14.2564 15.8333 15.0026 15.0872 15.0026 14.1667C15.0026 13.2462 14.2564 12.5 13.3359 12.5C12.4154 12.5 11.6693 13.2462 11.6693 14.1667C11.6693 15.0872 12.4154 15.8333 13.3359 15.8333Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span class="tpl__category__name">Music</span>
                                        </RadioGroupLabel>
                                    </RadioGroupOption>

                                    <RadioGroupOption value="more" v-slot="{ active, checked }">
                                        <div class="relative">
                                            <RadioGroupLabel
                                                :class="[
                                                    'tpl__category',
                                                    checked && 'tpl__category--checked'
                                                ]"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M10 2.5C9.3125 2.5 8.75 3.0625 8.75 3.75C8.75 4.4375 9.3125 5 10 5C10.6875 5 11.25 4.4375 11.25 3.75C11.25 3.0625 10.6875 2.5 10 2.5ZM10 15C9.3125 15 8.75 15.5625 8.75 16.25C8.75 16.9375 9.3125 17.5 10 17.5C10.6875 17.5 11.25 16.9375 11.25 16.25C11.25 15.5625 10.6875 15 10 15ZM10 8.75C9.3125 8.75 8.75 9.3125 8.75 10C8.75 10.6875 9.3125 11.25 10 11.25C10.6875 11.25 11.25 10.6875 11.25 10C11.25 9.3125 10.6875 8.75 10 8.75Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <span class="tpl__category__name">More</span>
                                            </RadioGroupLabel>

                                            <Transition
                                                enter-active-class="transition duration-200 ease-out"
                                                enter-from-class="translate-y-1 opacity-0"
                                                enter-to-class="translate-y-0 opacity-100"
                                                leave-active-class="transition duration-150 ease-in"
                                                leave-from-class="translate-y-0 opacity-100"
                                                leave-to-class="translate-y-1 opacity-0"
                                            >
                                                <div
                                                    v-show="active"
                                                    class="absolute left-1/2 z-10 mt-3 w-72 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
                                                >
                                                    <div
                                                        class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 bg-white"
                                                    >
                                                        <RadioGroup v-model="filterCategory">
                                                            <div class="p-1">
                                                                <RadioGroupOption
                                                                    value="sports"
                                                                    v-slot="{ checked }"
                                                                >
                                                                    <RadioGroupLabel
                                                                        :class="[
                                                                            'tpl__more-category',
                                                                            checked &&
                                                                                'tpl__more-category--checked'
                                                                        ]"
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M4.58203 10.0001H3.33203V5.83342H1.66536V4.16675H6.66536V5.83342H4.9987V8.16298L13.1763 5.97181L12.6926 4.16675H9.9987V2.50008H13.314C13.6892 2.4917 14.0355 2.73919 14.1369 3.11773L15.431 7.94737L13.8212 8.37875L13.6076 7.58169L4.58203 10.0001ZM4.16536 15.8334C5.08584 15.8334 5.83203 15.0873 5.83203 14.1668C5.83203 13.2463 5.08584 12.5001 4.16536 12.5001C3.24489 12.5001 2.4987 13.2463 2.4987 14.1668C2.4987 15.0873 3.24489 15.8334 4.16536 15.8334ZM4.16536 17.5001C2.32441 17.5001 0.832031 16.0077 0.832031 14.1668C0.832031 12.3258 2.32441 10.8334 4.16536 10.8334C6.00631 10.8334 7.4987 12.3258 7.4987 14.1668C7.4987 16.0077 6.00631 17.5001 4.16536 17.5001ZM14.9987 15.8334C16.3794 15.8334 17.4987 14.7142 17.4987 13.3334C17.4987 11.9527 16.3794 10.8334 14.9987 10.8334C13.6179 10.8334 12.4987 11.9527 12.4987 13.3334C12.4987 14.7142 13.6179 15.8334 14.9987 15.8334ZM14.9987 17.5001C12.6975 17.5001 10.832 15.6346 10.832 13.3334C10.832 11.0323 12.6975 9.16675 14.9987 9.16675C17.2999 9.16675 19.1654 11.0323 19.1654 13.3334C19.1654 15.6346 17.2999 17.5001 14.9987 17.5001Z"
                                                                                fill="currentColor"
                                                                            />
                                                                        </svg>
                                                                        <span
                                                                            class="font-semibold text-sm"
                                                                            >Sports</span
                                                                        >
                                                                    </RadioGroupLabel>
                                                                </RadioGroupOption>

                                                                <RadioGroupOption
                                                                    value="national-day"
                                                                    v-slot="{ checked }"
                                                                >
                                                                    <RadioGroupLabel
                                                                        :class="[
                                                                            'tpl__more-category',
                                                                            checked &&
                                                                                'tpl__more-category--checked'
                                                                        ]"
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M7.5013 0.833252V2.49992H12.5013V0.833252H14.168V2.49992H17.5013C17.9616 2.49992 18.3346 2.87302 18.3346 3.33325V16.6666C18.3346 17.1268 17.9616 17.4999 17.5013 17.4999H2.5013C2.04107 17.4999 1.66797 17.1268 1.66797 16.6666V3.33325C1.66797 2.87302 2.04107 2.49992 2.5013 2.49992H5.83464V0.833252H7.5013ZM16.668 9.16658H3.33464V15.8333H16.668V9.16658ZM9.16797 10.8333V14.1666H5.0013V10.8333H9.16797ZM5.83464 4.16659H3.33464V7.49992H16.668V4.16659H14.168V5.83325H12.5013V4.16659H7.5013V5.83325H5.83464V4.16659Z"
                                                                                fill="currentColor"
                                                                            />
                                                                        </svg>
                                                                        <span
                                                                            class="font-semibold text-sm"
                                                                            >National Day</span
                                                                        >
                                                                    </RadioGroupLabel>
                                                                </RadioGroupOption>

                                                                <RadioGroupOption
                                                                    value="goverment-politics"
                                                                    v-slot="{ checked }"
                                                                >
                                                                    <RadioGroupLabel
                                                                        :class="[
                                                                            'tpl__more-category',
                                                                            checked &&
                                                                                'tpl__more-category--checked'
                                                                        ]"
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M16.6654 5H19.1654V6.66667H18.332V15.8333H19.1654V17.5H0.832031V15.8333H1.66536V6.66667H0.832031V5H3.33203V3.33333C3.33203 2.8731 3.70513 2.5 4.16536 2.5H15.832C16.2923 2.5 16.6654 2.8731 16.6654 3.33333V5ZM16.6654 6.66667H3.33203V15.8333H5.83203V10H7.4987V15.8333H9.16537V10H10.832V15.8333H12.4987V10H14.1654V15.8333H16.6654V6.66667ZM4.9987 4.16667V5H14.9987V4.16667H4.9987Z"
                                                                                fill="currentColor"
                                                                            />
                                                                        </svg>
                                                                        <span
                                                                            class="font-semibold text-sm"
                                                                            >Goverment &
                                                                            Politics</span
                                                                        >
                                                                    </RadioGroupLabel>
                                                                </RadioGroupOption>

                                                                <RadioGroupOption
                                                                    value="celebrations"
                                                                    v-slot="{ checked }"
                                                                >
                                                                    <RadioGroupLabel
                                                                        :class="[
                                                                            'tpl__more-category',
                                                                            checked &&
                                                                                'tpl__more-category--checked'
                                                                        ]"
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M14.1663 1.00684L15.2653 3.06753L17.3259 4.16656L15.2653 5.26559L14.1663 7.32629L13.0672 5.26559L11.0065 4.16656L13.0672 3.06753L14.1663 1.00684ZM8.88844 7.77767L13.0551 9.99988L8.88844 12.2221L6.66623 16.3888L4.44401 12.2221L0.277344 9.99988L4.44401 7.77767L6.66623 3.611L8.88844 7.77767ZM9.51344 9.99988L7.65657 9.00954L6.66623 7.15267L5.67589 9.00954L3.81901 9.99988L5.67589 10.9902L6.66623 12.8471L7.65657 10.9902L9.51344 9.99988ZM16.3884 13.611L14.9996 11.0069L13.6107 13.611L11.0065 14.9999L13.6107 16.3888L14.9996 18.993L16.3884 16.3888L18.9926 14.9999L16.3884 13.611Z"
                                                                                fill="currentColor"
                                                                            />
                                                                        </svg>
                                                                        <span
                                                                            class="font-semibold text-sm"
                                                                            >Celebrations</span
                                                                        >
                                                                    </RadioGroupLabel>
                                                                </RadioGroupOption>
                                                            </div>
                                                        </RadioGroup>
                                                    </div>
                                                </div>
                                            </Transition>
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </div>
                        <div class="grid grid-cols-4 gap-6">
                            <div v-for="template in templates" class="tpl__item">
                                <img :src="template.thumbnail" :alt="template.title" />
                            </div>
                        </div>
                        <div ref="observerEl" class="tpl__observer"></div>
                    </div>
                </div>

                <div class="bg-white"></div>
                <!-- right -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.create-campaign {
    height: 100dvh;
    position: relative;

    .create-campaign__header {
        @apply border-b border-light fixed top-0 w-full bg-white z-50;
    }

    .create-campaign__main {
        padding-top: 117px;
        @apply h-full;
    }
}

.dropzone {
    .dropzone__card {
        @apply bg-white p-10 rounded-xl border border-light;
        box-shadow: 0px 8px 40px 0px rgba(111, 182, 182, 0.12);
    }

    .dropzone__box {
        @apply p-10;
        background-color: #f6fcfb;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23D0D5DDFF' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 8px;
    }

    .dropzone__box__inner {
        @apply flex flex-col items-center justify-center w-full h-full;
    }
}

.frames-section {
    @apply h-full border-r border-stroke pl-20 pr-10 pt-14;
    background-color: #fcfcfd;
}

.tpl {
    .tpl__observer {
        height: 40px;
        background-color: red;
    }

    .tpl__filter {
        @apply flex items-center space-x-5 mb-5;
    }

    .tpl__search {
        @apply flex items-center border border-stroke rounded-full overflow-hidden flex-grow;
        max-width: 347px;

        .tpl__search__icon {
            @apply text-content text-lg h-full;
            padding: 0px 8px 0px 14px;
        }

        .tpl__search__input {
            @apply text-sm flex-grow h-full focus:outline-none;
            padding: 10px 14px 10px 0px;
        }
    }

    .tpl__item {
        @apply aspect-square bg-gray-150 border border-light flex items-center justify-center rounded-md overflow-hidden;

        img {
            max-height: 100%;
            max-width: 100%;
        }
    }

    .tpl__categories {
        @apply flex items-center rounded-full py-1 px-1 space-x-1;
        @apply bg-gray-100;
    }

    .tpl__category {
        @apply flex items-center space-x-1 text-content rounded-full cursor-pointer transition-colors;
        padding: 6px 16px;

        &:hover {
            @apply bg-gray-200;
        }

        &.tpl__category--checked {
            @apply bg-white text-black;
        }

        .tpl__category__name {
            color: currentColor;
            @apply font-medium text-sm;
        }
    }

    .tpl__more-category {
        @apply p-2 flex items-center space-x-1 text-black/60 hover:text-black hover:bg-gray-150 cursor-pointer rounded-lg mb-1;

        &.tpl__more-category--checked {
            @apply bg-gray-150 text-black;
        }
    }
}
</style>
