<script setup>
import { useDropZone, useElementSize, useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { useSortable } from '@vueuse/integrations/useSortable';
import { computed, ref } from 'vue';
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from '@headlessui/vue';
import { Form as VeeForm, Field } from 'vee-validate';
import { string as yupString, object as yupObject } from 'yup';
import LayoutBlank from '@/components/layouts/LayoutBlank.vue';
import QButton from '@/components/atoms/QButton.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputTextarea from '@/components/atoms/forms/QInputTextarea.vue';
import QInputCaption from '@/components/atoms/forms/QInputCaption.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import QConfirmDialog from '@/components/atoms/QConfirmDialog.vue';
import QVisibilityOptions from '@/components/atoms/forms/QVisibilityOptions.vue';
import CampaignMockupPhone from '@/components/organisms/CampaignMockupPhone.vue';
import CampaignMockupDesktop from '@/components/organisms/CampaignMockupDesktop.vue';
import CampaignBackgroundSelection from '@/components/molecules/CampaignBackgroundSelection.vue';
import CreatorPremiumModal from '@/components/organisms/CreatorPremiumModal.vue';
import CampaignThumbnailModal from '@/components/organisms/CampaignThumbnailModal.vue';
import CaptionPreview from '@/components/organisms/CaptionPreview.vue';
import TemplateCatalog from '@/components/molecules/TemplateCatalog.vue';
import CampaignAnalytics from '@/components/molecules/CampaignAnalytics.vue';
import { useModal } from '@/composables/modal';

const { open: openModal } = useModal();

// cancel
const showConfirmCancel = ref(false);

// breakpoints
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');
const xl = breakpoints.greaterOrEqual('xl');

// logged in user
const creator = {
    name: 'Hanoi Art',
    username: 'hanoiart',
    avatar: '/assets/img/sample/sampel-avatar-18.jpg'
};

// steps
const STEPS = {
    FRAMES: 1,
    FORM: 2
};
const currentStep = ref(STEPS.FRAMES);

// forms
const dropzoneBox = ref(null);
const dropzoneSortable = ref(null);
const files = ref([
    '/assets/img/frames/hanoi-art-frame-1.png',
    '/assets/img/frames/hanoi-art-frame-2.png',
    '/assets/img/frames/hanoi-art-frame-3.png',
    '/assets/img/frames/hanoi-art-frame-4.png'
]);

const { isOverDropZone } = useDropZone(dropzoneBox, {
    onDrop: (droppedFiles) => {
        if (!droppedFiles) {
            return;
        }
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

useSortable(dropzoneSortable, files, {
    animation: 150
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

const handleRemoveFile = (idx) => {
    files.value.splice(idx, 1);
};

const campaignTitle = ref('');
const campaignDescription = ref('');
const campaignLink = ref('');
const campaignCategory = ref(null);
const campaignCaption = ref(
    "<p> Hi, My name is  <code>Your Name</code> , and I am all in to support this campaign. Let's gather and make a real impact with this campaign together!</p>"
);
const campaignVisibility = ref('public');
const campaignBackground = ref(1);

const validationSchema = yupObject().shape({
    title: yupString().required(),
    link: yupString().required(),
    category: yupString().required(),
    visibility: yupString().required()
});

const onClickPremiumItem = () => {
    openModal({
        component: CreatorPremiumModal,
        config: { size: 'sm', position: 'center' }
    });
};

// mockups
const mockupWrapper = ref(null);
const mockupEl = ref(null);
const { height: mockupWrapperHeight } = useElementSize(mockupWrapper);
const { height: mockupElHeight } = useElementSize(mockupEl);

const mockupStyles = computed(() => {
    const targetScale = Math.min(1, mockupElHeight.value / mockupWrapperHeight.value);

    return {
        transform: `scale(${targetScale})`
    };
});

// on click publish button in the page
const onClickPublish = () => {
    const modalComponent = CampaignThumbnailModal;

    const forms = {
        link: campaignLink.value,
        title: campaignTitle.value,
        description: campaignDescription.value,
        category: campaignCategory.value,
        visibility: campaignVisibility.value,
        background: campaignBackground.value,
        caption: campaignCaption.value
    };

    const modalProps = {
        creator,
        forms,
        frame: files.value[0]
    };

    const config = {
        position: sm.value ? 'bottom' : 'center',
        draggable: false,
        scrollable: false,
        transparent: true,
        static: true
    };

    openModal({ component: modalComponent, props: modalProps, config });
};
</script>

<template>
    <LayoutBlank>
        <Teleport to="body">
            <QConfirmDialog :show="showConfirmCancel" @close="showConfirmCancel = false">
                <div class="confirm">
                    <div class="confirm__question-mark">
                        <i class="ri-question-mark"></i>
                    </div>

                    <div class="confirm__body">
                        <div class="flex flex-col text-center space-y-2">
                            <h3 class="font-semibold text-xl">Are you sure?</h3>
                            <p class="text-sm">
                                If you leave this page, all unsaved changes will be lost
                            </p>
                        </div>

                        <div class="flex flex-col items-center space-y-2 mt-6 w-full">
                            <QButton
                                variant="primary"
                                @click="$router.push({ name: 'home' })"
                                block
                            >
                                Yes, Leave this Page
                            </QButton>
                            <QButton variant="subtle" @click="showConfirmCancel = false" block>
                                No, Stay on this Page
                            </QButton>
                        </div>
                    </div>
                </div>
            </QConfirmDialog>
        </Teleport>

        <VeeForm :validation-schema="validationSchema" v-slot="{ meta }" class="mcpg-page">
            <TabGroup>
                <div class="mcpg-page__header">
                    <div class="mcpg-page__header-wrapper">
                        <img
                            class="mcpg-page__logo"
                            src="/assets/img/logos/twibbonize-logo.svg"
                            alt="Twibbonize"
                        />
                        <QButton
                            variant="subtle"
                            :size="sm ? 'sm' : 'lg'"
                            circle
                            @click="showConfirmCancel = true"
                        >
                            <span class="font-light flex items-center justify-center">
                                <i :class="['ri-close-line', sm ? 'ri-lg' : 'ri-2x']"></i>
                            </span>
                        </QButton>
                    </div>
                </div>

                <div class="mcpg-page__main">
                    <div class="grid grid-cols-2 h-full">
                        <div v-if="xl" class="left-section">
                            <div
                                ref="mockupWrapper"
                                class="flex items-center justify-center h-full w-full"
                            >
                                <CampaignMockupPhone
                                    ref="mockupEl"
                                    :frames="files"
                                    :title="campaignTitle"
                                    :link="campaignLink"
                                    :description="campaignDescription"
                                    :style="mockupStyles"
                                />
                            </div>
                        </div>
                        <!-- end of left section -->

                        <div class="right-section col-span-2 xl:col-span-1 overflow-y-auto">
                            <div class="actions-bar sticky top-0 z-50">
                                <div
                                    class="flex items-center justify-end container px-5 xl:pr-20 xl:pl-10 py-4 bg-white"
                                >
                                    <QButton>
                                        <span class="px-2">Save Changes</span>
                                    </QButton>
                                </div>
                            </div>

                            <div class="right-section__wrapper">
                                <div class="tabs">
                                    <TabList class="tabs__list w-full md:w-auto">
                                        <Tab v-slot="{ selected }" as="template">
                                            <button
                                                :class="[
                                                    'tabs__tab',
                                                    selected && 'tabs__tab--selected'
                                                ]"
                                            >
                                                <i class="ri-megaphone-line"></i>
                                                <span class="ml-1.5 lg:flex-grow-1">Campaigns</span>
                                            </button>
                                        </Tab>

                                        <Tab v-slot="{ selected }" as="template">
                                            <button
                                                :class="[
                                                    'tabs__tab',
                                                    selected && 'tabs__tab--selected'
                                                ]"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <mask
                                                        id="path-1-outside-1_5186_39184"
                                                        maskUnits="userSpaceOnUse"
                                                        x="1"
                                                        y="1"
                                                        width="22"
                                                        height="22"
                                                        fill="currentColor"
                                                    >
                                                        <rect
                                                            fill="white"
                                                            x="1"
                                                            y="1"
                                                            width="22"
                                                            height="22"
                                                        />
                                                        <path
                                                            d="M3 5.68657C3 4.20282 4.20282 3 5.68657 3H18.3134C19.7972 3 21 4.20282 21 5.68657V18.3134C21 19.7972 19.7972 21 18.3134 21H5.68657C4.20282 21 3 19.7972 3 18.3134V5.68657Z"
                                                        />
                                                    </mask>
                                                    <path
                                                        d="M5.68657 4.5H18.3134V1.5H5.68657V4.5ZM19.5 5.68657V18.3134H22.5V5.68657H19.5ZM18.3134 19.5H5.68657V22.5H18.3134V19.5ZM4.5 18.3134V5.68657H1.5V18.3134H4.5ZM5.68657 19.5C5.03124 19.5 4.5 18.9688 4.5 18.3134H1.5C1.5 20.6256 3.37439 22.5 5.68657 22.5V19.5ZM19.5 18.3134C19.5 18.9688 18.9688 19.5 18.3134 19.5V22.5C20.6256 22.5 22.5 20.6256 22.5 18.3134H19.5ZM18.3134 4.5C18.9688 4.5 19.5 5.03124 19.5 5.68657H22.5C22.5 3.37439 20.6256 1.5 18.3134 1.5V4.5ZM5.68657 1.5C3.37439 1.5 1.5 3.37439 1.5 5.68657H4.5C4.5 5.03124 5.03124 4.5 5.68657 4.5V1.5Z"
                                                        fill="currentColor"
                                                        mask="url(#path-1-outside-1_5186_39184)"
                                                    />
                                                    <rect
                                                        width="13.4328"
                                                        height="13.4328"
                                                        rx="1.34328"
                                                        transform="matrix(1 0 0 -1 5.41797 18.8506)"
                                                        fill="white"
                                                        stroke="currentColor"
                                                        stroke-width="1.35"
                                                    />
                                                    <mask
                                                        id="mask0_5186_39184"
                                                        style="mask-type: alpha"
                                                        maskUnits="userSpaceOnUse"
                                                        x="4"
                                                        y="4"
                                                        width="16"
                                                        height="16"
                                                    >
                                                        <rect
                                                            width="13.5"
                                                            height="13.5"
                                                            rx="1.34328"
                                                            transform="matrix(1 0 0 -1 5.25 18.375)"
                                                            fill="white"
                                                            stroke="currentColor"
                                                            stroke-width="1.5"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask0_5186_39184)">
                                                        <path
                                                            d="M5.95703 21C6.08599 18.082 7.78927 16.5168 9.05733 16.0869C9.39224 15.9752 9.71198 15.8172 10.0084 15.6168C9.63643 15.1607 9.33859 14.6414 9.12718 14.0805C9.02562 14.0208 8.94043 13.9338 8.88002 13.8282C8.48778 13.083 8.39643 12.4925 8.60061 12.0224C8.66523 11.8783 8.75879 11.7511 8.87464 11.6498C8.88214 11.2302 8.93442 10.8128 9.03046 10.4058C9.23562 9.75018 9.63704 9.18462 10.1729 8.7962C10.7089 8.40777 11.3495 8.218 11.9964 8.25608C12.6442 8.21671 13.2861 8.40587 13.8231 8.79439C14.3601 9.18291 14.7624 9.74919 14.9678 10.4058C15.0637 10.8148 15.116 11.234 15.1236 11.6555C15.2402 11.7583 15.3338 11.8876 15.3976 12.0339C15.6018 12.504 15.5105 13.0944 15.1182 13.834C15.0584 13.9415 14.9731 14.0304 14.8711 14.0919C14.6597 14.6529 14.3618 15.1722 13.9899 15.6283C14.2863 15.8286 14.606 15.9866 14.9409 16.0984C16.209 16.5226 17.9123 18.0878 18.0466 21"
                                                            stroke="currentColor"
                                                            stroke-width="1.125"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </svg>
                                                <span class="ml-1.5 lg:flex-grow-1"> Frames </span>
                                            </button>
                                        </Tab>

                                        <Tab v-slot="{ selected }" as="template">
                                            <button
                                                :class="[
                                                    'tabs__tab',
                                                    selected && 'tabs__tab--selected'
                                                ]"
                                            >
                                                <i class="ri-line-chart-line"></i>
                                                <span class="ml-1.5 lg:flex-grow-1">
                                                    Analytics
                                                </span>
                                            </button>
                                        </Tab>
                                    </TabList>

                                    <TabPanels>
                                        <TabPanel :unmount="false">
                                            <div class="space-y-10">
                                                <div class="card-box">
                                                    <div class="card-box__header">
                                                        <div class="card-box__icon">
                                                            <i class="ri-list-unordered"></i>
                                                        </div>
                                                        <h3 class="card-box__title">
                                                            Campaign Details
                                                        </h3>
                                                    </div>

                                                    <div class="card-box__body">
                                                        <div class="space-y-6">
                                                            <div class="space-y-3">
                                                                <label
                                                                    for="title"
                                                                    class="form-label"
                                                                >
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
                                                                <label
                                                                    for="description"
                                                                    class="form-label"
                                                                >
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
                                                                <label
                                                                    for="link"
                                                                    class="form-label"
                                                                >
                                                                    Campaign Link
                                                                </label>

                                                                <QInputText
                                                                    v-model="campaignLink"
                                                                    id="link"
                                                                    name="link"
                                                                    placeholder="campaign-link"
                                                                >
                                                                    <template #prefix>
                                                                        twibbo.nz
                                                                    </template>
                                                                </QInputText>
                                                            </div>

                                                            <div class="space-y-3">
                                                                <label
                                                                    for="category"
                                                                    class="form-label"
                                                                    >Campaign Category</label
                                                                >
                                                                <Field
                                                                    v-model="campaignCategory"
                                                                    name="category"
                                                                    v-slot="{ field, value }"
                                                                >
                                                                    <Listbox
                                                                        v-bind="field"
                                                                        v-slot="{ open }"
                                                                    >
                                                                        <div
                                                                            class="relative category"
                                                                        >
                                                                            <ListboxButton
                                                                                :class="[
                                                                                    'category__button',
                                                                                    open &&
                                                                                        'category__button--open'
                                                                                ]"
                                                                            >
                                                                                <span
                                                                                    v-if="value"
                                                                                    class="category__value"
                                                                                >
                                                                                    {{ value }}
                                                                                </span>

                                                                                <span
                                                                                    v-else
                                                                                    class="category__placeholder"
                                                                                >
                                                                                    Select Category
                                                                                </span>

                                                                                <span
                                                                                    class="category__arrow"
                                                                                >
                                                                                    <i
                                                                                        class="ri-arrow-down-s-line ri-lg"
                                                                                    ></i>
                                                                                </span>
                                                                            </ListboxButton>

                                                                            <transition
                                                                                leave-active-class="transition duration-100 ease-in"
                                                                                leave-from-class="opacity-100"
                                                                                leave-to-class="opacity-0"
                                                                            >
                                                                                <ListboxOptions
                                                                                    class="category__options"
                                                                                >
                                                                                    <ListboxOption
                                                                                        value="Decorative"
                                                                                        v-slot="{
                                                                                            active,
                                                                                            selected
                                                                                        }"
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
                                                                                                class="ri-collage-line"
                                                                                            ></i>
                                                                                            <span
                                                                                                class="ml-1"
                                                                                            >
                                                                                                Decorative
                                                                                            </span>
                                                                                        </div>
                                                                                    </ListboxOption>
                                                                                    <ListboxOption
                                                                                        value="Music"
                                                                                        v-slot="{
                                                                                            active,
                                                                                            selected
                                                                                        }"
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
                                                                                                class="ri-music-2-line"
                                                                                            ></i>
                                                                                            <span
                                                                                                class="ml-1"
                                                                                            >
                                                                                                Music
                                                                                            </span>
                                                                                        </div>
                                                                                    </ListboxOption>
                                                                                    <ListboxOption
                                                                                        value="Socials"
                                                                                        v-slot="{
                                                                                            active,
                                                                                            selected
                                                                                        }"
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
                                                                                                class="ri-empathize-line"
                                                                                            ></i>
                                                                                            <span
                                                                                                class="ml-1"
                                                                                                >Socials</span
                                                                                            >
                                                                                        </div>
                                                                                    </ListboxOption>
                                                                                    <ListboxOption
                                                                                        value="Sports"
                                                                                        v-slot="{
                                                                                            active,
                                                                                            selected
                                                                                        }"
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
                                                                                                class="ri-bike-line"
                                                                                            ></i>
                                                                                            <span
                                                                                                class="ml-1"
                                                                                                >Sports</span
                                                                                            >
                                                                                        </div>
                                                                                    </ListboxOption>
                                                                                    <ListboxOption
                                                                                        value="National Day"
                                                                                        v-slot="{
                                                                                            active,
                                                                                            selected
                                                                                        }"
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
                                                                                            <span
                                                                                                class="ml-1"
                                                                                                >National
                                                                                                Day</span
                                                                                            >
                                                                                        </div>
                                                                                    </ListboxOption>
                                                                                    <ListboxOption
                                                                                        value="Goverment & Politics"
                                                                                        v-slot="{
                                                                                            active,
                                                                                            selected
                                                                                        }"
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
                                                                                                class="ri-government-line"
                                                                                            ></i>
                                                                                            <span
                                                                                                class="ml-1"
                                                                                                >Goverment
                                                                                                &
                                                                                                Politics</span
                                                                                            >
                                                                                        </div>
                                                                                    </ListboxOption>
                                                                                    <ListboxOption
                                                                                        value="Celebrations"
                                                                                        v-slot="{
                                                                                            active,
                                                                                            selected
                                                                                        }"
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
                                                                                                class="ri-bard-line"
                                                                                            ></i>
                                                                                            <span
                                                                                                class="ml-1"
                                                                                            >
                                                                                                Celebrations
                                                                                            </span>
                                                                                        </div>
                                                                                    </ListboxOption>
                                                                                </ListboxOptions>
                                                                            </transition>
                                                                        </div>
                                                                    </Listbox>
                                                                </Field>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="card-box">
                                                    <div class="card-box__header">
                                                        <div class="card-box__icon">
                                                            <i class="ri-chat-quote-line"></i>
                                                        </div>
                                                        <h3 class="card-box__title">
                                                            Caption Template
                                                        </h3>
                                                    </div>

                                                    <div class="card-box__body">
                                                        <div class="space-y-8">
                                                            <CaptionPreview
                                                                :frame="files[0]"
                                                                :caption="campaignCaption"
                                                                :creator="creator"
                                                            />
                                                            <div class="space-y-4">
                                                                <div class="space-y-1">
                                                                    <label for="" class="form-label"
                                                                        >Set a Template</label
                                                                    >
                                                                    <p class="form-desc">
                                                                        If others support your
                                                                        campaign without adding a
                                                                        caption, this will be the
                                                                        caption.
                                                                    </p>
                                                                </div>
                                                                <QInputCaption
                                                                    v-model="campaignCaption"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="card-box">
                                                    <div class="card-box__header">
                                                        <div class="card-box__icon">
                                                            <i class="ri-palette-line"></i>
                                                        </div>
                                                        <h3 class="card-box__title">
                                                            Campaign Customization
                                                        </h3>
                                                    </div>

                                                    <div class="card-box__body">
                                                        <div class="space-y-8">
                                                            <div
                                                                class="border border-light p-4 rounded-xl flex items-center justify-center"
                                                            >
                                                                <CampaignMockupDesktop
                                                                    :frames="files"
                                                                    :title="campaignTitle"
                                                                    :link="campaignLink"
                                                                    :description="
                                                                        campaignDescription
                                                                    "
                                                                />
                                                            </div>

                                                            <div
                                                                class="bg-turquoise p-4 rounded-2xl space-y-5 border border-light"
                                                            >
                                                                <h4
                                                                    class="text-base font-bold md:text-lg"
                                                                >
                                                                    Select Background
                                                                </h4>
                                                                <CampaignBackgroundSelection
                                                                    v-model="campaignBackground"
                                                                    @upgrade="onClickPremiumItem"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="card-box">
                                                    <div class="card-box__header">
                                                        <div class="card-box__icon">
                                                            <i class="ri-eye-line"></i>
                                                        </div>
                                                        <h3 class="card-box__title">
                                                            Campaign Visibility
                                                        </h3>
                                                    </div>

                                                    <div class="card-box__body">
                                                        <QVisibilityOptions
                                                            v-model="campaignVisibility"
                                                            name="visibility"
                                                            @upgrade="onClickPremiumItem"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel :unmount="false">
                                            <div class="dropzone">
                                                <input
                                                    type="file"
                                                    accept="image/png"
                                                    class="hidden"
                                                    name="frame_files"
                                                    id="frame_files"
                                                    multiple
                                                    @change="handleInputFile"
                                                />
                                                <div
                                                    ref="dropzoneBox"
                                                    :class="[
                                                        'dropzone__box',
                                                        isOverDropZone && 'dropzone__box--over'
                                                    ]"
                                                >
                                                    <div class="dropzone__box__inner">
                                                        <label
                                                            for="frame_files"
                                                            v-if="!files.length"
                                                            class="dropzone__empty-state"
                                                        >
                                                            <img
                                                                src="/assets/img/icons/upload.svg"
                                                                class="w-14 h-14 md:w-16 md:h-16 mb-4 mx-auto"
                                                                alt="upload"
                                                            />
                                                            <h3 class="dropzone__title">
                                                                Drag your own frame design here
                                                            </h3>
                                                            <ul
                                                                class="flex flex-col items-center space-y-1"
                                                            >
                                                                <li class="text-xs lg:text-sm">
                                                                    <span class="text-content mr-1"
                                                                        >Type:</span
                                                                    >
                                                                    <span>Image/PNG</span>
                                                                </li>

                                                                <li class="text-xs lg:text-sm">
                                                                    <span class="text-content mr-1"
                                                                        >Size:</span
                                                                    >
                                                                    <span>Max. 5MB</span>
                                                                </li>

                                                                <li class="text-xs lg:text-sm">
                                                                    <span class="text-content mr-1"
                                                                        >Recommendation:</span
                                                                    >
                                                                    <span>1080x1080px</span>
                                                                </li>
                                                            </ul>
                                                        </label>

                                                        <div
                                                            v-show="files.length"
                                                            class="flex items-center space-x-4 p-6 overflow-x-auto w-[99%]"
                                                        >
                                                            <label
                                                                for="frame_files"
                                                                class="dropzone__file--add"
                                                            >
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

                                                                <span class="font-medium mt-1"
                                                                    >Upload</span
                                                                >
                                                            </label>

                                                            <div
                                                                ref="dropzoneSortable"
                                                                class="flex items-center space-x-4"
                                                            >
                                                                <div
                                                                    v-for="(file, i) in files"
                                                                    :key="file"
                                                                    class="dropzone__file"
                                                                >
                                                                    <button
                                                                        class="dropzone__file-remove"
                                                                        @click="handleRemoveFile(i)"
                                                                    >
                                                                        <i
                                                                            class="ri-delete-bin-line"
                                                                        ></i>
                                                                    </button>
                                                                    <img :src="file" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="my-5 md:my-10">
                                                <QSeparator alignment="center"
                                                    >or create your frame now</QSeparator
                                                >
                                            </div>

                                            <TemplateCatalog />
                                        </TabPanel>

                                        <TabPanel>
                                            <CampaignAnalytics />
                                        </TabPanel>
                                    </TabPanels>
                                </div>
                            </div>
                        </div>
                        <!-- right -->
                    </div>
                </div>

                <!-- <div class="mcpg-page__footer"></div> -->
            </TabGroup>
        </VeeForm>
    </LayoutBlank>
</template>

<style scoped lang="scss">
// manage campaign
.mcpg-page {
    height: 100dvh;
    position: relative;

    .mcpg-page__header {
        @apply border-b border-light fixed top-0 w-full bg-white z-50;
    }

    .mcpg-page__header-wrapper {
        @apply px-5 xl:px-20 flex items-center justify-between py-4;

        @include xs {
            @apply px-4;
        }
    }

    .mcpg-page__logo {
        height: 24px;

        @include md_screen {
            height: 32px;
        }
    }

    .mcpg-page__main {
        padding-top: 65px;
        @apply h-full;

        @include md_screen {
            padding-top: 85px;
        }
    }

    .mcpg-page__footer {
        @apply border-t border-light fixed bottom-0 w-full bg-white z-50;

        @include xl_screen {
            display: none;
        }

        .mcpg-page__footer-wrapper {
            @apply px-5 xl:px-20;

            @include xs {
                @apply px-4;
            }
        }
    }
}

// tabs
.tabs {
    .tabs__list {
        @apply flex items-center space-x-3 md:space-x-6 mb-8 border-b border-light;
    }

    .tabs__tab {
        @apply relative outline-none py-4 md:py-6 flex items-center justify-center h-full text-black/50 tracking-wide font-semibold cursor-pointer transition-colors duration-200 ease-out text-base;

        @include sm_screen {
            font-size: 0.8rem;
        }

        @include sm {
            @apply flex-grow;
        }

        &:hover,
        &--selected {
            @apply text-black;
        }

        &--selected::after {
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            display: block;
            background-color: black;
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
        }
    }
}

// confirm dialog
.confirm {
    .confirm__question-mark {
        @apply absolute top-0 left-1/2 w-20 h-20 rounded-full bg-light text-black flex items-center justify-center text-4xl -mt-10 -translate-x-1/2;
    }

    .confirm__body {
        @apply pt-14 pb-6 px-5 flex flex-col items-center justify-center text-center;
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

        .dropzone__title {
            @apply text-base lg:text-lg font-bold mb-2 text-center;

            @include xs {
                @apply text-sm;
            }
        }
    }

    .dropzone__file {
        height: 80px;
        width: 80px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        @apply bg-gray-150 rounded-lg relative;

        img {
            max-height: 100%;
            max-width: 100%;
            @apply rounded-lg;
        }

        .dropzone__file-remove {
            position: absolute;
            right: 0;
            top: 0;
            width: 24px;
            height: 24px;
            z-index: 10;
            transform: translate(35%, -35%);
            font-size: 12px;
            @apply bg-red-600 hover:bg-red-500 text-red-50 border border-red-50 rounded-full;
        }
    }

    .dropzone__file--add {
        width: 80px;
        height: 80px;
        @apply flex flex-col items-center justify-center transition-colors cursor-pointer flex-shrink-0;
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

    .left-section__wrapper {
        @apply container px-5 xl:pl-20 xl:pr-10 pt-5 lg:pt-14 pb-10;

        @include xs {
            @apply px-4;
        }
    }
}

.right-section {
    max-height: calc(100dvh - 84px);
    padding-bottom: 80px;
    background-color: #edf8f8;

    .right-section__wrapper {
        @apply px-5 xl:pr-20 xl:pl-10 pt-2 md:pt-5 space-y-10;

        @include xs {
            @apply px-4;
        }
    }
}

.actions-bar {
    @apply hidden xl:block;
    box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.06);
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

        @include xs {
            @apply p-4;
        }
    }

    .card-box__icon {
        @apply h-10 w-10 flex items-center justify-center rounded-full mr-3 flex-shrink-0;
        background-color: #edf8f8;

        @include xs {
            @apply h-8 w-8 mr-2;
        }
    }

    .card-box__title {
        @apply font-bold text-xl w-0 flex-grow;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @include xs {
            @apply text-base;
        }
    }

    .card-box__body {
        @apply p-6;

        @include xs {
            @apply p-4;
        }
    }
}

.category {
    .category__button {
        padding: 14px;
        @apply relative w-full rounded-xl flex items-center transition-all ease-in text-sm border border-stroke;
        background-color: #f6fafa;
        height: 52px;
        // min-width: 260px;
        max-width: 100%;

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

.form-label {
    @apply font-bold;

    @include xs {
        @apply text-sm;
    }
}

.form-desc {
    @apply text-sm;

    @include xs {
        font-size: 13px;
    }
}

.stats-tabs {
    @apply flex items-center px-4 md:px-5 py-3;

    .stat {
        @apply flex-grow flex-shrink-0 w-0 overflow-hidden outline-none;

        .stat__wrapper {
            @apply flex flex-col items-start border-b border-r border-light pl-3 pb-3 md:p-5 transition-all duration-200;

            .stat__title,
            .stat__value,
            .stat__info {
                @apply opacity-30;
            }
        }

        .stat__wrapper.stat__wrapper--selected {
            @apply border-b-transparent;

            .stat__title,
            .stat__value,
            .stat__info {
                @apply opacity-100;
            }
        }

        &:first-of-type {
            .stat__wrapper {
                @apply pl-0;
            }
        }

        &:last-of-type {
            .stat__wrapper {
                @apply border-r-transparent pr-0;
            }
        }

        .stat__title {
            @apply font-medium text-content;

            font-size: 0.7rem;

            @include md_screen {
                font-size: 0.9rem;
            }
        }

        .stat__info {
            @apply text-content;
        }

        .stat__value {
            @apply text-xl font-bold;
        }
    }
}

.chart__tabs {
    @apply flex items-center space-x-2 px-4 md:px-5 mt-5;
}

.chart__tab {
    @apply rounded-full px-3 border border-light hover:border-main font-medium text-light hover:text-main flex items-center justify-center transition-colors duration-200;
    min-width: 72px;
    height: 40px;

    font-size: 0.8rem;

    @include xs {
        min-width: unset;
    }

    @include md_screen {
        font-size: 0.9rem;
    }

    &.chart__tab--selected {
        @apply bg-main text-black;
    }
}
</style>
