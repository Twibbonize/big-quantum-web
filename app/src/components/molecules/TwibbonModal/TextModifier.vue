<script setup>
import { computed, onMounted, ref } from 'vue';
import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from '@headlessui/vue';
import WebFont from 'webfontloader';
import { BASIC_COLORS } from '@/libs/editor/constants/colors';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// import fabric from '@/libs/editor/fabric';

const props = defineProps({
    editor: {
        type: Object,
        required: true
    },
    modify: {
        type: Function,
        required: true
    },
    activeObject: {
        type: Object
    }
});

const fonts = [
    {
        family: 'Arial',
        googleFont: false
    },
    {
        family: 'Times New Roman',
        googleFont: false
    },
    {
        family: 'Calibri',
        googleFont: false
    },
    {
        family: 'Courier',
        googleFont: false
    },
    {
        family: 'Courier New',
        googleFont: false
    },
    {
        family: 'Verdana',
        googleFont: false
    },
    {
        family: 'Georgia',
        googleFont: false
    },
    {
        family: 'Brush Script',
        googleFont: false
    },
    {
        family: 'Cursive Standar',
        googleFont: false
    },
    {
        family: 'Segoe Script',
        googleFont: false
    },
    {
        family: 'Tahoma',
        googleFont: false
    },
    {
        family: 'Trebuchet',
        googleFont: false
    },
    {
        family: 'Roboto',
        googleFont: true
    },
    {
        family: 'Montserrat',
        googleFont: true
    },
    {
        family: 'Kalam',
        googleFont: true
    },
    {
        family: 'Playfair Display',
        googleFont: true
    },
    {
        family: 'Fira Mono',
        googleFont: true
    },
    {
        family: 'Zilla Slab',
        googleFont: true
    },
    {
        family: 'Raleway',
        googleFont: true
    }
];

const selectedFont = ref('Roboto');
// const control =
// const emit = defineEmits([''])

const isBold = computed(() => {
    const { activeObject } = props;
    return activeObject && activeObject.fontWeight === 'bold';
});

const toggleBold = () => {
    const { activeObject, modify } = props;
    if (!activeObject || activeObject.type !== 'textbox') {
        return;
    }
    const fontWeight = activeObject.fontWeight === 'normal' ? false : true;
    modify('fontWeight', fontWeight);
};

const isItalic = computed(() => {
    const { activeObject } = props;
    return activeObject && activeObject.fontStyle === 'italic';
});

const toggleItalic = () => {
    const { activeObject, modify } = props;
    if (!activeObject || activeObject.type !== 'textbox') {
        return;
    }
    const nextStyle = !(activeObject.fontStyle === 'normal');
    modify('fontStyle', nextStyle);
};

const isUnderline = computed(() => {
    const { activeObject } = props;
    return activeObject && activeObject.underline;
});

const toggleUnderline = () => {
    const { activeObject, modify } = props;
    if (!activeObject || activeObject.type !== 'textbox') {
        return;
    }
    const nextStyle = !activeObject.underline;
    modify('underline', nextStyle);
};

const isStrikethrough = computed(() => {
    const { activeObject } = props;
    return activeObject && activeObject.linethrough;
});

const toggleStrikethrough = () => {
    const { activeObject, modify } = props;
    if (!activeObject || activeObject.type !== 'textbox') {
        return;
    }

    console.log(activeObject.linethrough);

    const nextStyle = !activeObject.linethrough;
    modify('linethrough', nextStyle);
};

onMounted(() => {
    const googleFonts = fonts.filter((font) => font.googleFont).map((font) => font.family);

    WebFont.load({
        google: {
            families: googleFonts
        }
    });

    // new Swiper('#color-selector', {
    //     slidesPerView: 'auto',
    //     slidesPerGroup: 3,
    //     modules: [Pagination],
    //     pagination: {
    //         el: '.swiper-pagination',
    //         bulletActiveClass: 'color-selector__slide-active'
    //     },
    // });
});
</script>

<template>
    <div class="space-y-3">
        <div
            class="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 px-4 pt-4"
        >
            <Listbox v-model="selectedFont" :disabled="!activeObject" v-slot="{ disabled }">
                <div :class="['font-selector', disabled && 'font-selector--disabled']">
                    <ListboxButton class="font-selector__toggle">
                        <i class="ri-arrow-left-s-line ri-lg"></i>
                        <span
                            class="text-lg"
                            :style="{ fontFamily: selectedFont, fontWeight: 'normal' }"
                            >{{ selectedFont }}</span
                        >
                        <i class="ri-arrow-right-s-line ri-lg"></i>
                    </ListboxButton>

                    <transition
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                    >
                        <ListboxOptions
                            class="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-stroke focus:outline-none z-[101]"
                        >
                            <ListboxOption
                                v-for="(font, i) in fonts"
                                :value="font.family"
                                :key="i"
                                v-slot="{ active, selected }"
                            >
                                <li
                                    :class="[
                                        'font-selector__option',
                                        active && 'font-selector__option--active',
                                        selected && 'font-selector__option--selected'
                                    ]"
                                    :style="{ fontFamily: font.family, fontWeight: 'normal' }"
                                >
                                    {{ font.family }}
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
            </Listbox>
        </div>

        <div :class="['px-4', 'flex', 'items-center', !activeObject && 'opacity-40', 'flex-wrap']">
            <div class="font-size">
                <input
                    type="number"
                    class="font-size__input"
                    :value="42"
                    :disabled="!activeObject"
                />
                <div class="font-size__arrows">
                    <button class="font-size__increase hover:bg-red-500">
                        <i class="ri-arrow-up-s-fill"></i>
                    </button>
                    <button class="font-size__decrease">
                        <i class="ri-arrow-down-s-fill"></i>
                    </button>
                </div>
            </div>

            <div class="font-toolbar">
                <button
                    :class="['btn-toggle', isBold && 'btn-toggle--active']"
                    :disabled="!activeObject"
                    @click="toggleBold"
                >
                    <i class="ri-bold font-semibold"></i>
                </button>

                <button
                    :class="['btn-toggle', isItalic && 'btn-toggle--active']"
                    :disabled="!activeObject"
                    @click="toggleItalic"
                >
                    <i class="ri-italic"></i>
                </button>

                <button
                    :class="['btn-toggle', isUnderline && 'btn-toggle--active']"
                    :disabled="!activeObject"
                    @click="toggleUnderline"
                >
                    <i class="ri-underline"></i>
                </button>

                <button
                    :class="['btn-toggle', isStrikethrough && 'btn-toggle--active']"
                    :disabled="!activeObject"
                    @click="toggleStrikethrough"
                >
                    <i class="ri-strikethrough"></i>
                </button>
            </div>

            <div class="color-selector">
                <div class="color-selector__toggle">
                    <div class="color-selector__preview bg-black"></div>
                    <div class="color-selector__arrows">
                        <i class="ri ri-arrow-down-s-line"></i>
                    </div>
                </div>

                <div class="color-selector__eyedropper">
                    <i class="ri-sip-line"></i>
                </div>
            </div>
        </div>

        <!-- <div id="color-selector" class="swiper h-16">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div
                        class="flex items-center justify-center h-full w-full bg-gray-150 border border-stroke rounded-full">
                        <i class="ri-sip-line"></i>
                    </div>

                </div>
                <template v-for="color in BASIC_COLORS" :key="color">
                    <div class="swiper-slide w-8 h-8">
                        <div class="w-8 h-8 rounded-full flex-shrink-0 border border-stroke"
                            :style="{ backgroundColor: color }">
                        </div>
                    </div>
                </template>
            </div>
            <div class="swiper-pagination"></div>
        </div> -->
    </div>
</template>

<style>
.color-selector__slide-active {
    @apply bg-main opacity-100;
}
</style>

<style scoped lang="scss">
.btn-toggle {
    height: 36px;
    width: 36px;

    @include sm {
        height: 24px;
        width: 24px;
    }

    @apply rounded-lg flex-shrink-0 transition-all relative overflow-hidden cursor-pointer flex items-center justify-center;

    &:hover {
        @apply bg-black/10;
    }

    &.btn-toggle--active {
        @apply bg-white;
        box-shadow:
            0px 4.444px 6.667px -2.222px rgba(16, 24, 40, 0.03),
            0px 13.333px 17.778px -4.444px rgba(16, 24, 40, 0.08);
    }

    &:disabled {
        @apply cursor-default pointer-events-none;
    }
}

.font-size {
    @apply bg-gray-100 p-2 flex items-center rounded-lg border border-stroke relative transition-all duration-200 overflow-hidden;
    // height: 42px;

    .font-size__input {
        width: 42px;
        font-size: 14px;
        height: 24px;
        @apply bg-transparent focus:outline-none;

        @include md_screen {
            height: 36px;
        }

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    .font-size__icon {
        @apply absolute right-2;
    }

    &:focus-within {
        @apply bg-white;
    }

    .font-size__arrows {
        @apply flex flex-col justify-between h-full absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100;
        width: 24px;
    }

    .font-size__increase,
    .font-size__decrease {
        height: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;

        &:hover {
            @apply bg-gray-300;
        }
    }

    .font-size__increase {
        @apply rounded-tr;
    }

    .font-size__decrease {
        @apply rounded-br;
    }
}

.font-toolbar {
    @include xs {
        flex-grow: 1;
    }

    @apply flex justify-center items-center space-x-2 bg-gray-100 rounded-lg p-2 border border-stroke ml-2;
}

.color-selector {
    @include xs {
        margin-top: 12px;
        flex-basis: 100%;
        margin-left: 0px;
    }

    // width: 100%;
    display: flex;
    align-items: center;
    height: 42px;
    flex-grow: 1;
    flex-shrink: 0;
    margin-left: 8px;

    .color-selector__toggle {
        @apply w-full h-full flex items-center border border-stroke rounded-lg overflow-hidden;
    }

    .color-selector__preview {
        height: 100%;
        flex-grow: 1;
    }

    .color-selector__arrows {
        height: 100%;
        width: 32px;
        display: flex;
        align-items: center;
        font-size: 18px;
        justify-content: center;
    }

    .color-selector__eyedropper {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: #f6fafa;
        box-shadow:
            0px 4px 6px -2px rgba(16, 24, 40, 0.03),
            0px 12px 16px -4px rgba(16, 24, 40, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-left: 8px;
    }
}

.font-selector {
    @apply relative cursor-pointer flex-grow w-full;

    &.font-selector--disabled {
        opacity: 0.5;
        cursor: default;
    }

    .font-selector__option {
        @apply px-4 py-2 text-black/70;

        &.font-selector__option--active {
            @apply bg-gray-100 text-black;
        }

        &.font-selector__option--selected {
            @apply text-main;
        }
    }

    .font-selector__toggle {
        padding: 8px 8px;
        display: flex;

        align-items: center;
        width: 100%;
        font-size: 16px;
        justify-content: space-between;
        @apply border border-stroke rounded-xl transition-all;

        &:disabled {
            opacity: 0.5;
        }
    }
}

.swiper-slide {
    @apply w-8 h-8;

    &:first-of-type {
        @apply ml-4;
    }

    &:not(:last-of-type) {
        margin-right: 8px;
    }

    &:last-of-type {
        @apply mr-8;
    }
}
</style>
