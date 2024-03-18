<script setup>
import { useDropZone, useIntersectionObserver, useElementSize } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import {
    RadioGroup,
    RadioGroupOption,
    RadioGroupLabel,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption
} from '@headlessui/vue';
import QButton from '@/components/atoms/QButton.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputTextarea from '@/components/atoms/forms/QInputTextarea.vue';
import QInputCaption from '@/components/atoms/forms/QInputCaption.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import QVisibilityOptions from '@/components/atoms/forms/QVisibilityOptions.vue';
import CampaignMockupPhone from '@/components/organisms/CampaignMockupPhone.vue';
import { getTemplateList } from '@/apis';

const dropzoneBox = ref(null);
const files = ref([]);

const { isOverDropZone } = useDropZone(dropzoneBox, {
    onDrop: (droppedFiles) => {
        // console.log(file)
        droppedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                // Get the data URL representing the image
                const imageDataURL = event.target.result;

                // Store the file and its data URL in the files array
                files.value.push(imageDataURL);
            };

            reader.readAsDataURL(file);
        });
        // Read the contents of the dropped file as a data URL
    },
    dataTypes: ['image/png']
});

const handleInputFile = (e) => {
    const targetFiles = e.target.files;
    if (targetFiles && targetFiles.length > 0) {
        for (let i = 0; i < targetFiles.length; i++) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const dataURL = event.target.result;
                files.value.push(dataURL);
            };

            reader.readAsDataURL(targetFiles[i]);
        }
    }
};

// steps
const STEPS = {
    FRAMES: 1,
    FORM: 2
};
const currentStep = ref(STEPS.FRAMES);

// forms
const campaignTitle = ref('');
const campaignDescription = ref('');
const campaignCategory = ref(null);
const campaignVisibility = ref('public');

// templates
const templates = ref([]);
const page = ref(1);
const observerEl = ref(null);
const observerIsVisible = ref(false);
const filterCategory = ref(null);
const categoryRadio = ref('decorative');

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

// mockups
const mockupWrapper = ref(null);
const mockupEl = ref(null);
const { height: mockupWrapperHeight } = useElementSize(mockupWrapper);
const { height: mockupElHeight } = useElementSize(mockupEl);

const mockupStyles = computed(() => {
    const targetScale = mockupElHeight.value / mockupWrapperHeight.value;

    return {
        transform: `scale(${targetScale})`
    };
});

// onMounted(() => {
//     handleFetchTemplates();
// });
</script>

<template>
    <div class="create-campaign">
        <div class="create-campaign__header">
            <div class="px-20">
                <div class="flex items-center justify-between py-4">
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
                <div v-show="currentStep === STEPS.FRAMES" class="left-section">
                    <div class="actions-bar pl-20 pr-10 shadow-md sticky top-0 bg-white z-50">
                        <div class="flex items-center justify-between py-4">
                            <QButton variant="secondary">
                                <span class="px-2">Cancel</span>
                            </QButton>

                            <QButton :enabled="files.length > 0" @click="currentStep = STEPS.FORM">
                                <span class="px-2">Save Frames</span>
                            </QButton>
                        </div>
                    </div>
                    <div class="pl-20 pr-10 pt-14">
                        <div class="dropzone">
                            <input
                                type="file"
                                accept="image/png"
                                class="hidden"
                                name="frame_files"
                                id="frame_files"
                                @change="handleInputFile"
                            />
                            <div
                                ref="dropzoneBox"
                                :class="['dropzone__box', isOverDropZone && 'dropzone__box--over']"
                            >
                                <div class="dropzone__box__inner">
                                    <label
                                        for="frame_files"
                                        v-if="!files.length"
                                        class="dropzone__empty-state"
                                    >
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
                                    </label>

                                    <div v-else class="flex items-center space-x-4 p-6">
                                        <div v-for="file in files" class="dropzone__file">
                                            <img :src="file" />
                                        </div>

                                        <label for="frame_files" class="dropzone__file--add">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M29.319 5.33321C29.319 4.59684 28.7221 3.99988 27.9857 3.99988H3.98568C3.2493 3.99988 2.65234 4.59684 2.65234 5.33321V26.6665C2.65234 27.4029 3.2493 27.9999 3.98568 27.9999H27.9857C28.7221 27.9999 29.319 27.4029 29.319 26.6665V5.33321ZM5.31901 19.9999H9.87373C10.9025 22.3544 13.2519 23.9999 15.9857 23.9999C18.7194 23.9999 21.0689 22.3544 22.0977 19.9999H26.6523V25.3332H5.31901V19.9999ZM5.31901 6.66654H26.6523V17.3332H19.9857C19.9857 19.5424 18.1949 21.3332 15.9857 21.3332C13.7765 21.3332 11.9857 19.5424 11.9857 17.3332H5.31901V6.66654ZM21.319 14.6665H17.319V18.6665H14.6523V14.6665H10.6523L15.9857 8.66654L21.319 14.6665Z"
                                                    fill="#475467"
                                                />
                                            </svg>

                                            <span class="font-medium mt-1">Upload</span>
                                        </label>
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
                                    <input
                                        class="tpl__search__input"
                                        placeholder="Search templates"
                                    />
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
                </div>

                <div v-if="currentStep === STEPS.FORM" class="left-section">
                    <div ref="mockupWrapper" class="flex items-center justify-center h-full w-full">
                        <CampaignMockupPhone
                            ref="mockupEl"
                            :frames="files"
                            :title="campaignTitle"
                            :description="campaignDescription"
                            :style="mockupStyles"
                        />
                    </div>
                </div>

                <div
                    :class="[
                        'right-section',
                        currentStep !== STEPS.FORM ? 'overflow-hidden' : 'overflow-y-auto'
                    ]"
                >
                    <div
                        v-show="currentStep === STEPS.FORM"
                        class="actions-bar pr-20 pl-10 shadow-md sticky top-0 bg-white z-50"
                    >
                        <div class="flex items-center justify-between py-4">
                            <QButton variant="secondary" @click="currentStep = STEPS.FRAMES">
                                <span class="px-2">Back</span>
                            </QButton>

                            <div class="flex items-center">
                                <span class="text-content text-xs mr-3">
                                    <i class="ri-information-line"></i>
                                    please fill in all the required campaign data below
                                </span>

                                <QButton
                                    :enabled="files.length > 0"
                                    @click="currentStep = STEPS.FORM"
                                >
                                    <span class="px-2">Publish</span>
                                </QButton>
                            </div>
                        </div>
                    </div>

                    <div class="pr-20 pl-10 pt-14 space-y-10">
                        <div
                            :class="[
                                'card-box',
                                currentStep !== STEPS.FORM && 'card-box--disabled'
                            ]"
                        >
                            <div class="card-box__header">
                                <div class="card-box__icon">
                                    <i class="ri-list-unordered"></i>
                                </div>
                                <h3 class="card-box__title">Campaign Details</h3>
                            </div>

                            <div class="card-box__body">
                                <div class="space-y-6">
                                    <div class="space-y-3">
                                        <label for="title" class="font-bold">
                                            Campaign Title
                                        </label>

                                        <QInputText
                                            v-model="campaignTitle"
                                            id="title"
                                            name="title"
                                            placeholder="Can consist of numbers, alphabets, or special characters."
                                        />
                                    </div>

                                    <div class="space-y-3">
                                        <label for="description" class="font-bold">
                                            Description
                                        </label>

                                        <QInputTextarea
                                            v-model="campaignDescription"
                                            id="description"
                                            name="description"
                                            placeholder="Share details about your campaign to grab attention and garner support."
                                            :maxLength="250"
                                        />
                                    </div>

                                    <div class="space-y-3">
                                        <label for="link" class="font-bold"> Campaign Link </label>

                                        <QInputText
                                            id="link"
                                            name="link"
                                            placeholder="campaign-link"
                                        >
                                            <template #prefix> twibbo.nz </template>
                                        </QInputText>
                                    </div>

                                    <div class="space-y-3">
                                        <label for="category" class="font-bold"
                                            >Campaign Category</label
                                        >
                                        <Listbox v-model="campaignCategory" v-slot="{ open }">
                                            <div class="relative category">
                                                <ListboxButton
                                                    :class="[
                                                        'category__button',
                                                        open && 'category__button--open'
                                                    ]"
                                                >
                                                    <span
                                                        v-if="campaignCategory"
                                                        class="category__value"
                                                    >
                                                        {{ campaignCategory }}
                                                    </span>

                                                    <span v-else class="category__placeholder">
                                                        Select Category
                                                    </span>

                                                    <span class="category__arrow">
                                                        <i class="ri-arrow-down-s-line ri-lg"></i>
                                                    </span>
                                                </ListboxButton>

                                                <transition
                                                    leave-active-class="transition duration-100 ease-in"
                                                    leave-from-class="opacity-100"
                                                    leave-to-class="opacity-0"
                                                >
                                                    <ListboxOptions class="category__options">
                                                        <ListboxOption
                                                            value="Decorative"
                                                            v-slot="{ active, selected }"
                                                        >
                                                            <div
                                                                :class="[
                                                                    'category__option',
                                                                    selected &&
                                                                        'category__option--selected',
                                                                    active &&
                                                                        'category__option--active'
                                                                ]"
                                                            >
                                                                <i class="ri-collage-line"></i>
                                                                <span class="ml-1">
                                                                    Decorative
                                                                </span>
                                                            </div>
                                                        </ListboxOption>
                                                        <ListboxOption
                                                            value="Music"
                                                            v-slot="{ active, selected }"
                                                        >
                                                            <div
                                                                :class="[
                                                                    'category__option',
                                                                    selected &&
                                                                        'category__option--selected',
                                                                    active &&
                                                                        'category__option--active'
                                                                ]"
                                                            >
                                                                <i class="ri-music-2-line"></i>
                                                                <span class="ml-1"> Music </span>
                                                            </div>
                                                        </ListboxOption>
                                                        <ListboxOption
                                                            value="Socials"
                                                            v-slot="{ active, selected }"
                                                        >
                                                            <div
                                                                :class="[
                                                                    'category__option',
                                                                    selected &&
                                                                        'category__option--selected',
                                                                    active &&
                                                                        'category__option--active'
                                                                ]"
                                                            >
                                                                <i class="ri-empathize-line"></i>
                                                                <span class="ml-1">Socials</span>
                                                            </div>
                                                        </ListboxOption>
                                                        <ListboxOption
                                                            value="Sports"
                                                            v-slot="{ active, selected }"
                                                        >
                                                            <div
                                                                :class="[
                                                                    'category__option',
                                                                    selected &&
                                                                        'category__option--selected',
                                                                    active &&
                                                                        'category__option--active'
                                                                ]"
                                                            >
                                                                <i class="ri-bike-line"></i>
                                                                <span class="ml-1">Sports</span>
                                                            </div>
                                                        </ListboxOption>
                                                        <ListboxOption
                                                            value="National Day"
                                                            v-slot="{ active, selected }"
                                                        >
                                                            <div
                                                                :class="[
                                                                    'category__option',
                                                                    selected &&
                                                                        'category__option--selected',
                                                                    active &&
                                                                        'category__option--active'
                                                                ]"
                                                            >
                                                                <i
                                                                    class="ri-calendar-event-line"
                                                                ></i>
                                                                <span class="ml-1"
                                                                    >National Day</span
                                                                >
                                                            </div>
                                                        </ListboxOption>
                                                        <ListboxOption
                                                            value="Goverment & Politics"
                                                            v-slot="{ active, selected }"
                                                        >
                                                            <div
                                                                :class="[
                                                                    'category__option',
                                                                    selected &&
                                                                        'category__option--selected',
                                                                    active &&
                                                                        'category__option--active'
                                                                ]"
                                                            >
                                                                <i class="ri-government-line"></i>
                                                                <span class="ml-1"
                                                                    >Goverment & Politics</span
                                                                >
                                                            </div>
                                                        </ListboxOption>
                                                        <ListboxOption
                                                            value="Celebrations"
                                                            v-slot="{ active, selected }"
                                                        >
                                                            <div
                                                                :class="[
                                                                    'category__option',
                                                                    selected &&
                                                                        'category__option--selected',
                                                                    active &&
                                                                        'category__option--active'
                                                                ]"
                                                            >
                                                                <i class="ri-bard-line"></i>
                                                                <span class="ml-1">
                                                                    Celebrations
                                                                </span>
                                                            </div>
                                                        </ListboxOption>
                                                    </ListboxOptions>
                                                </transition>
                                            </div>
                                        </Listbox>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            :class="[
                                'card-box',
                                currentStep !== STEPS.FORM && 'card-box--disabled'
                            ]"
                        >
                            <div class="card-box__header">
                                <div class="card-box__icon">
                                    <i class="ri-chat-quote-line"></i>
                                </div>
                                <h3 class="card-box__title">Caption Template</h3>
                            </div>

                            <div class="card-box__body">
                                <div class="space-y-4">
                                    <div class="space-y-1">
                                        <label for="" class="font-bold">Set a Template</label>
                                        <p class="text-sm">
                                            If others support your campaign without adding a
                                            caption, this will be the caption.
                                        </p>
                                    </div>
                                    <QInputCaption />
                                </div>
                            </div>
                        </div>

                        <div
                            :class="[
                                'card-box',
                                currentStep !== STEPS.FORM && 'card-box--disabled'
                            ]"
                        >
                            <div class="card-box__header">
                                <div class="card-box__icon">
                                    <i class="ri-palette-line"></i>
                                </div>
                                <h3 class="card-box__title">Campaign Customization</h3>
                            </div>

                            <div class="card-box__body"></div>
                        </div>

                        <div
                            :class="[
                                'card-box',
                                currentStep !== STEPS.FORM && 'card-box--disabled'
                            ]"
                        >
                            <div class="card-box__header">
                                <div class="card-box__icon">
                                    <i class="ri-eye-line"></i>
                                </div>
                                <h3 class="card-box__title">Campaign Visibility</h3>
                            </div>

                            <div class="card-box__body">
                                <QVisibilityOptions v-model="campaignVisibility" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- right -->
            </div>
        </div>

        <div class="create-campaign__footer">
            <div class="px-20">
                <div class="flex items-center justify-between py-4">
                    <QButton variant="secondary">
                        <span class="px-2">Cancel</span>
                    </QButton>

                    <QButton :enabled="files.length > 0" @click="currentStep = STEPS.FORM">
                        <span class="px-2">Next</span>
                    </QButton>
                </div>
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
        padding-top: 85px;
        @apply h-full;
    }

    .create-campaign__footer {
        @apply border-t border-light fixed bottom-0 w-full bg-white z-50;

        @include md_screen {
            display: none;
        }
    }
}

.dropzone {
    .dropzone__box {
        background-color: #f6fcfb;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23D0D5DDFF' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 8px;
        box-shadow: 0px 8px 40px 0px rgba(111, 182, 182, 0.12);

        &.dropzone__box--over {
            background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%2316DAC1FF' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        }
    }

    .dropzone__empty-state {
        @apply p-10 flex flex-col items-center justify-center w-full h-full cursor-pointer;
    }

    .dropzone__file {
        height: 80px;
        width: 80px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        @apply bg-gray-150 rounded-lg overflow-hidden;

        img {
            max-height: 100%;
            max-width: 100%;
        }
    }

    .dropzone__file--add {
        width: 80px;
        height: 80px;
        @apply flex flex-col items-center justify-center transition-colors cursor-pointer;
        border: 1px dashed #d0d5dd;
        border-radius: 8px;
        font-size: 14px;

        &:hover {
            @apply bg-white border-gray-300;
        }
    }
}

.left-section {
    max-height: calc(100dvh - 84px);
    @apply h-full border-r border-stroke overflow-y-auto;
}

.right-section {
    max-height: calc(100dvh - 84px);
    padding-bottom: 80px;
    background-color: #edf8f8;
}

.card-box {
    border-radius: 20px;
    box-shadow: 0px 12px 24px 0px rgba(27, 82, 78, 0.04);
    @apply bg-white transition-opacity duration-300;

    &.card-box--disabled {
        @apply opacity-10 pointer-events-none;
        user-select: none;
    }

    .card-box__header {
        @apply flex items-center p-6 border-b border-stroke;
    }

    .card-box__icon {
        @apply h-10 w-10 flex items-center justify-center rounded-full mr-3;
        background-color: #edf8f8;
    }

    .card-box__title {
        @apply font-bold text-xl;
    }

    .card-box__body {
        @apply p-6;
    }
}

.tpl {
    .tpl__observer {
        height: 40px;
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

.category {
    .category__button {
        padding: 14px;
        @apply relative w-full rounded-xl flex items-center transition-all ease-in text-sm border border-stroke;
        background-color: #f6fafa;
        height: 52px;
        min-width: 260px;

        &.category__button--open {
            @apply bg-white outline outline-offset-2 outline-main-darker;
        }
    }

    .category__button .category__value {
        @apply text-black;
    }

    .category__button .category__placeholder {
        color: #aaafb9;
    }

    .category__button .category__arrow {
        @apply absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center mr-2 transition-transform duration-200;
        height: 24px;
        width: 24px;
    }

    .category__button.category__button--open .category__arrow {
        @apply rotate-180;
    }

    .category__options {
        @apply absolute mt-2 max-h-64 w-full overflow-auto bg-white rounded-xl shadow-xl p-1 z-50;

        .category__option {
            padding: 8px 10px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            @apply transition-colors cursor-pointer mb-1;

            &.category__option--selected,
            &.category__option--active {
                @apply bg-gray-100;
            }
        }
    }
}
</style>
