<script setup>
import {
    useDropZone,
    useIntersectionObserver,
    useElementSize,
    useBreakpoints,
    breakpointsTailwind,
    useVibrate
} from '@vueuse/core';
import { useSortable } from '@vueuse/integrations/useSortable';
import { useRouter } from 'vue-router';
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
import { Form as VeeForm, Field } from 'vee-validate';
import { string as yupString, object as yupObject } from 'yup';
import { useToast } from 'vue-toast-notification';
import { confetti } from '@tsparticles/confetti';
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
import ShareModal from '@/components/organisms/ShareModal.vue';
import CaptionPreview from '@/components/organisms/CaptionPreview.vue';
import { useModal } from '@/composables/modal';
import { getTemplateList } from '@/apis';

const dropzoneBox = ref(null);
const dropzoneSortable = ref(null);
const files = ref([]);

const { open: openModal, close: closeModal } = useModal();

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

useSortable(dropzoneSortable, files);

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

// templates
const templates = ref([]);
const page = ref(1);
const observerEl = ref(null);
const observerIsVisible = ref(false);
const filterCategory = ref(null);
const categoryRadio = ref('decorative');

const handleFetchTemplates = async () => {
    try {
        const thumbnailBaseUrl = 'https://twb-template-dummy.s3.ap-southeast-1.amazonaws.com/template';
        const { data } = await getTemplateList({ page: page.value, numItems: 20 });
        templates.value = [
            ...templates.value,
            ...data.map(({ thumbnail, ...other }) => {
                return {
                    thumbnail: `${thumbnailBaseUrl}/${thumbnail}`,
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

// forms
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

// publish
const router = useRouter();
const toast = useToast();
const { vibrate, isSupported } = useVibrate({ pattern: [300, 100, 300] });
const isLoading = ref(false);

// for submit form and show share modal
const openShareCampaign = (thumbnail) => {
    const modalComponent = ShareModal;
    const modalProps = {
        link: `twibbo.nz/${campaignLink.value}`,
        payload: { thumbnail },
        type: 'campaign'
    };

    const config = {
        position: sm.value ? 'bottom' : 'center',
        draggable: false,
        transparent: false,
        premiumBanner: true,
        onAfterClose: () => {
            router.push({ name: 'campaign' });
        }
    };

    openModal({ component: modalComponent, props: modalProps, config });
};

const handlePublish = (thumbnail) => {
    isLoading.value = true;

    setTimeout(() => {
        isLoading.value = false;

        if (isSupported) {
            vibrate();
        }

        confetti('tsparticles',{
            fullScreen: {
                zIndex: 99999
            },
            zIndex: 999999,
            color: {
                    value: ['#ffffff', '#FF0000']
                },
                move: {
                    decay: 0.05,
                    direction: 'top',
                    enable: true,
                    gravity: {
                        enable: true
                    },
                    outModes: {
                        top: 'none',
                        default: 'destroy'
                    },
                    speed: {
                        min: 10,
                        max: 50
                    }
                },
                number: {
                    value: 0
                },
                opacity: {
                    value: 1
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360
                    },
                    direction: 'random',
                    animation: {
                        enable: true,
                        speed: 30
                    }
                },
                tilt: {
                    direction: 'random',
                    enable: true,
                    value: {
                        min: 0,
                        max: 360
                    },
                    animation: {
                        enable: true,
                        speed: 30
                    }
                },
                size: {
                    value: {
                        min: 0,
                        max: 2
                    },
                    animation: {
                        enable: true,
                        startValue: 'min',
                        count: 1,
                        speed: 16,
                        sync: true
                    }
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 25
                    },
                    enable: true,
                    speed: {
                        min: 5,
                        max: 15
                    }
                },
                wobble: {
                    distance: 30,
                    enable: true,
                    speed: {
                        min: -7,
                        max: 7
                    }
                },
                shape: {
                    type: ['circle', 'square'],
                    options: {}
                }
        });

        openShareCampaign(thumbnail);

        toast.open({
            type: 'success',
            message: 'Campaign Successfully Created',
            position: 'top'
        });
    }, 2500);
};

// on click publish button in the page
const onClickPublish = () => {
    const modalComponent = CampaignThumbnailModal;
    const modalProps = {
        creator,
        handlePublish,
        frame: files.value[0],
        loading: isLoading
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
            <div id="tsparticles"></div>
        </Teleport>
        
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

        <VeeForm :validation-schema="validationSchema" v-slot="{ meta }" class="create-campaign">
            <div class="create-campaign__header">
                <div class="create-campaign__header-wrapper">
                    <img
                        class="create-campaign__logo"
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

            <div class="create-campaign__main">
                <div class="grid grid-cols-2 h-full">
                    <!-- left -->
                    <div
                        v-show="currentStep === STEPS.FRAMES"
                        :class="['left-section', 'col-span-2', 'xl:col-span-1']"
                    >
                        <div class="actions-bar shadow-md sticky top-0 bg-white z-50">
                            <div
                                class="flex items-center justify-between py-4 container px-5 xl:pl-20 xl:pr-10"
                            >
                                <QButton variant="secondary" @click="showConfirmCancel = true">
                                    <span class="px-2">Cancel</span>
                                </QButton>

                                <QButton
                                    :enabled="files.length > 0"
                                    @click="currentStep = STEPS.FORM"
                                >
                                    <span class="px-2">Next</span>
                                </QButton>
                            </div>
                        </div>
                        <div class="left-section__wrapper">
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
                                            <ul class="flex flex-col items-center space-y-1">
                                                <li class="text-xs lg:text-sm">
                                                    <span class="text-content mr-1">Type:</span>
                                                    <span>Image/PNG</span>
                                                </li>

                                                <li class="text-xs lg:text-sm">
                                                    <span class="text-content mr-1">Size:</span>
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
                                                        <i class="ri-delete-bin-line"></i>
                                                    </button>
                                                    <img :src="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="my-5 md:my-10">
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

                                    <RadioGroup
                                        v-model="categoryRadio"
                                        class="flex-grow flex-shrink-0 md:flex-grow-0"
                                    >
                                        <div class="tpl__categories">
                                            <RadioGroupOption
                                                value="decorative"
                                                v-slot="{ checked }"
                                                as="template"
                                            >
                                                <div
                                                    :class="[
                                                        'tpl__category',
                                                        checked && 'tpl__category--checked'
                                                    ]"
                                                >
                                                    <i class="ri-collage-line hidden sm:inline"></i>
                                                    <span class="tpl__category__name"
                                                        >Decorative</span
                                                    >
                                                </div>
                                            </RadioGroupOption>

                                            <RadioGroupOption
                                                value="music"
                                                v-slot="{ checked }"
                                                as="template"
                                            >
                                                <div
                                                    :class="[
                                                        'tpl__category',
                                                        checked && 'tpl__category--checked'
                                                    ]"
                                                >
                                                    <i class="ri-music-2-line hidden sm:inline"></i>
                                                    <span class="tpl__category__name">Music</span>
                                                </div>
                                            </RadioGroupOption>

                                            <RadioGroupOption
                                                value="more"
                                                v-slot="{ active, checked }"
                                                as="template"
                                            >
                                                <div
                                                    :class="[
                                                        'tpl__category',
                                                        checked && 'tpl__category--checked'
                                                    ]"
                                                >
                                                    <i class="ri-more-2-line hidden sm:inline"></i>
                                                    <span class="tpl__category__name">More</span>

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
                                                            class="absolute top-0 mt-10 left-0 -translate-x-1/2 z-10 w-48 transform px-4 sm:px-0 lg:max-w-3xl"
                                                        >
                                                            <div
                                                                class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 bg-white"
                                                            >
                                                                <RadioGroup
                                                                    v-model="filterCategory"
                                                                >
                                                                    <div class="p-1">
                                                                        <RadioGroupOption
                                                                            value="socials"
                                                                            v-slot="{ checked }"
                                                                        >
                                                                            <RadioGroupLabel
                                                                                :class="[
                                                                                    'tpl__more-category',
                                                                                    checked &&
                                                                                        'tpl__more-category--checked'
                                                                                ]"
                                                                            >
                                                                                <i
                                                                                    class="ri-empathize-line"
                                                                                ></i>
                                                                                <span
                                                                                    class="tpl__more-category__name"
                                                                                    >Socials</span
                                                                                >
                                                                            </RadioGroupLabel>
                                                                        </RadioGroupOption>

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
                                                                                <i
                                                                                    class="ri-bike-line"
                                                                                ></i>
                                                                                <span
                                                                                    class="tpl__more-category__name"
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
                                                                                <i
                                                                                    class="ri-calendar-event-line"
                                                                                ></i>
                                                                                <span
                                                                                    class="tpl__more-category__name"
                                                                                    >National
                                                                                    Day</span
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
                                                                                <i
                                                                                    class="ri-government-line"
                                                                                ></i>
                                                                                <span
                                                                                    class="tpl__more-category__name"
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
                                                                                <i
                                                                                    class="ri-bard-line"
                                                                                ></i>
                                                                                <span
                                                                                    class="tpl__more-category__name"
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
                                <div class="tpl__grid">
                                    <div class="tpl__item tpl__item--add">
                                        <i class="ri-add-box-line ri-2x"></i>
                                        <span>Start from Blank</span>
                                    </div>
                                    <div v-for="template in templates" class="tpl__item">
                                        <img :src="template.thumbnail" :alt="template.title" />
                                    </div>
                                </div>
                                <div ref="observerEl" class="tpl__observer"></div>
                            </div>
                        </div>
                    </div>

                    <div v-if="xl && currentStep === STEPS.FORM" class="left-section">
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

                    <div
                        v-show="xl || currentStep === STEPS.FORM"
                        :class="[
                            'right-section',
                            'col-span-2   ',
                            'xl:col-span-1',
                            currentStep !== STEPS.FORM ? 'overflow-hidden' : 'overflow-y-auto'
                        ]"
                    >
                        <div
                            v-if="currentStep === STEPS.FORM"
                            class="actions-bar shadow-md sticky top-0 bg-white z-50"
                        >
                            <div
                                class="flex items-center justify-between container px-5 xl:pr-20 xl:pl-10 py-4"
                            >
                                <QButton variant="secondary" @click="currentStep = STEPS.FRAMES">
                                    <span class="px-2">Back</span>
                                </QButton>

                                <div class="flex items-center">
                                    <span class="text-content text-xs mr-3">
                                        <i class="ri-information-line"></i>
                                        please fill in all the required campaign data below
                                    </span>

                                    <QButton
                                        :enabled="files.length > 0 && meta.valid"
                                        @click="onClickPublish"
                                    >
                                        <span class="px-2">Publish</span>
                                    </QButton>
                                </div>
                            </div>
                        </div>

                        <div class="right-section__wrapper">
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
                                            <label for="title" class="form-label">
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
                                            <label for="description" class="form-label">
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
                                            <label for="link" class="form-label">
                                                Campaign Link
                                            </label>

                                            <QInputText
                                                v-model="campaignLink"
                                                id="link"
                                                name="link"
                                                placeholder="campaign-link"
                                            >
                                                <template #prefix> twibbo.nz </template>
                                            </QInputText>
                                        </div>

                                        <div class="space-y-3">
                                            <label for="category" class="form-label"
                                                >Campaign Category</label
                                            >
                                            <Field
                                                v-model="campaignCategory"
                                                name="category"
                                                v-slot="{ field, value }"
                                            >
                                                <Listbox v-bind="field" v-slot="{ open }">
                                                    <div class="relative category">
                                                        <ListboxButton
                                                            :class="[
                                                                'category__button',
                                                                open && 'category__button--open'
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

                                                            <span class="category__arrow">
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
                                                                            class="ri-collage-line"
                                                                        ></i>
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
                                                                        <i
                                                                            class="ri-music-2-line"
                                                                        ></i>
                                                                        <span class="ml-1">
                                                                            Music
                                                                        </span>
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
                                                                        <i
                                                                            class="ri-empathize-line"
                                                                        ></i>
                                                                        <span class="ml-1"
                                                                            >Socials</span
                                                                        >
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
                                                                        <span class="ml-1"
                                                                            >Sports</span
                                                                        >
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
                                                                        <i
                                                                            class="ri-government-line"
                                                                        ></i>
                                                                        <span class="ml-1"
                                                                            >Goverment &
                                                                            Politics</span
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
                                            </Field>
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
                                                    If others support your campaign without adding a
                                                    caption, this will be the caption.
                                                </p>
                                            </div>
                                            <QInputCaption v-model="campaignCaption" />
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
                                        <i class="ri-palette-line"></i>
                                    </div>
                                    <h3 class="card-box__title">Campaign Customization</h3>
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
                                                :description="campaignDescription"
                                            />
                                        </div>

                                        <div
                                            class="bg-turquoise p-4 rounded-2xl space-y-5 border border-light"
                                        >
                                            <h4 class="text-base font-bold md:text-lg">
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
                                    <QVisibilityOptions
                                        v-model="campaignVisibility"
                                        name="visibility"
                                        @upgrade="onClickPremiumItem"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- right -->
                </div>
            </div>

            <div class="create-campaign__footer">
                <div v-show="currentStep === STEPS.FRAMES" class="create-campaign__footer-wrapper">
                    <div class="flex items-center justify-between py-4">
                        <QButton variant="secondary" @click="showConfirmCancel = true" size="sm">
                            <span class="px-2">Cancel</span>
                        </QButton>

                        <QButton
                            :enabled="files.length > 0"
                            @click="currentStep = STEPS.FORM"
                            size="sm"
                        >
                            <span class="px-2">Next</span>
                        </QButton>
                    </div>
                </div>

                <div v-show="currentStep === STEPS.FORM" class="create-campaign__footer-wrapper">
                    <div class="flex items-center justify-between py-4">
                        <QButton variant="secondary" @click="currentStep = STEPS.FRAMES" size="sm">
                            <span class="px-2">Back</span>
                        </QButton>

                        <QButton
                            :enabled="files.length > 0 && meta.valid"
                            @click="onClickPublish"
                            size="sm"
                        >
                            <span class="px-2">Publish</span>
                        </QButton>
                    </div>
                </div>
            </div>
        </VeeForm>
    </LayoutBlank>
</template>

<style scoped lang="scss">
#tsparticles {
    position: relative;
    z-index: 9999;
}

.create-campaign {
    height: 100dvh;
    position: relative;

    .create-campaign__header {
        @apply border-b border-light fixed top-0 w-full bg-white z-50;
    }

    .create-campaign__header-wrapper {
        @apply px-5 xl:px-20 flex items-center justify-between py-4;

        @include xs {
            @apply px-4;
        }
    }

    .create-campaign__logo {
        height: 24px;

        @include md_screen {
            height: 32px;
        }
    }

    .create-campaign__main {
        padding-top: 65px;
        @apply h-full;

        @include md_screen {
            padding-top: 85px;
        }
    }

    .create-campaign__footer {
        @apply border-t border-light fixed bottom-0 w-full bg-white z-50;

        @include xl_screen {
            display: none;
        }

        .create-campaign__footer-wrapper {
            @apply px-5 xl:px-20;

            @include xs {
                @apply px-4;
            }
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
        @apply container px-5 xl:pr-20 xl:pl-10 pt-5 space-y-10;

        @include xs {
            @apply px-4;
        }
    }
}

.actions-bar {
    @apply hidden xl:block;
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

.tpl {
    .tpl__observer {
        height: 40px;
    }

    .tpl__filter {
        @apply flex flex-col mb-5 space-y-3;

        @include md_screen {
            @apply flex-row space-y-0 space-x-2;
        }
    }

    .tpl__search {
        @apply flex items-center border border-stroke rounded-full overflow-hidden flex-grow;

        @include md_screen {
            max-width: 347px;
        }

        .tpl__search__icon {
            @apply text-content text-lg h-full flex items-center justify-center;
            padding: 0px 8px 0px 14px;

            @include xs {
                @apply text-sm;
            }
        }

        .tpl__search__input {
            @apply text-sm flex-grow h-full focus:outline-none;
            padding: 10px 14px 10px 0px;

            @include xs {
                @apply text-xs;
            }
        }
    }

    .tpl__grid {
        @apply grid grid-cols-2 md:grid-cols-4 gap-6;

        @include xs {
            @apply gap-4;
        }
    }

    .tpl__item {
        @apply aspect-square bg-gray-150 border border-light flex items-center justify-center rounded-md overflow-hidden;

        img {
            max-height: 100%;
            max-width: 100%;
        }


        &.tpl__item--add {
            @apply bg-white flex-col text-xs border-dashed;


            span {
                @apply font-medium text-sm mt-2;


                @include xs {
                    @apply text-xs;
                }
            }
        }
    }

    .tpl__categories {
        @apply flex items-center rounded-full py-1 px-1 space-x-1 flex-grow;
        @apply bg-gray-100;
    }

    .tpl__category {
        @apply flex items-center justify-center text-content rounded-full cursor-pointer transition-colors flex-grow relative;
        padding: 6px 16px;
        flex: 1 1 0;
        width: 0;

        @include md_screen {
            flex: 0 0 0;
            width: auto;
        }

        &:hover {
            @apply bg-gray-200;
        }

        &.tpl__category--checked {
            @apply bg-white text-black;
        }

        .tpl__category__name {
            color: currentColor;
            @apply font-medium text-sm ml-0 sm:ml-1;

            @include xs {
                font-size: 12px;
            }
        }
    }

    .tpl__more-category {
        @apply p-2 flex items-center space-x-1 text-black/60 hover:text-black hover:bg-gray-150 cursor-pointer rounded-lg mb-1;

        &.tpl__more-category--checked {
            @apply bg-gray-150 text-black;
        }

        .tpl__more-category__name {
            @apply font-semibold text-sm;

            @include xs {
                @apply text-xs;
            }
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
</style>
