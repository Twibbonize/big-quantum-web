<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useEyeDropper } from '@vueuse/core';
import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from '@headlessui/vue';
import WebFont from 'webfontloader';
import QButton from '@/components/atoms/QButton.vue';
import { BASIC_COLORS } from '@/libs/editor/constants/colors';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

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

const display = ref('main'); //main or pallete

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
        family: 'Courier',
        googleFont: false
    },
    {
        family: 'Oleo Script',
        googleFont: true
    },
    {
        family: 'Bebas Neue',
        googleFont: true
    },
    {
        family: 'Sacramento',
        googleFont: true
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

// const fontSize = ref(42);

const { isSupported, open, sRGBHex } = useEyeDropper();
const sipColor = ref('#000');

watch(sRGBHex, (newValue) => {
    const { activeObject, modify } = props;
    sipColor.value = compareContrastWithBlackAndWhite(newValue);
    modify('fill', newValue, activeObject);
});

watch(
    () => props.activeObject && props.activeObject.fill,
    (newValue) => {
        sipColor.value = compareContrastWithBlackAndWhite(newValue);
    },
    { deep: true }
);

const fontColor = computed(() => (props.activeObject && props.activeObject.fill) || '#000');

function getRelativeLuminance(color) {
    const rgb = [
        parseInt(color.slice(1, 3), 16) / 255.0,
        parseInt(color.slice(3, 5), 16) / 255.0,
        parseInt(color.slice(5, 7), 16) / 255.0
    ];

    for (let i = 0; i < rgb.length; i++) {
        if (rgb[i] <= 0.03928) {
            rgb[i] /= 12.92;
        } else {
            rgb[i] = Math.pow((rgb[i] + 0.055) / 1.055, 2.4);
        }
    }

    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function compareContrastWithBlackAndWhite(hexColor) {
    const blackLuminance = getRelativeLuminance('#000000');
    const whiteLuminance = getRelativeLuminance('#FFFFFF');
    const colorLuminance = getRelativeLuminance(hexColor);

    const contrastWithBlack = Math.abs(colorLuminance - blackLuminance);
    const contrastWithWhite = Math.abs(colorLuminance - whiteLuminance);

    if (contrastWithBlack > contrastWithWhite) {
        return '#000';
    } else if (contrastWithWhite > contrastWithBlack) {
        return '#FFF';
    } else {
        return '#000';
    }
}

const fontFamily = computed({
    get() {
        if (!props.activeObject) {
            return 6;
        }

        return fonts.findIndex((font) => font.family === props.activeObject.fontFamily);
    },
    set(newValue) {
        const font = fonts[newValue];
        const { modify, activeObject } = props;
        modify('fontFamily', font, activeObject);
    }
});

const fontSize = computed({
    get() {
        return props.activeObject ? props.activeObject.fontSize : 42;
    },
    set(newValue) {
        const { activeObject, modify } = props;
        modify('fontSize', newValue, activeObject);
    }
});
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

    new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        slidesPerGroup: 4,
        spaceBetween: 8,
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            enabled: true
        }
    });
});
</script>

<template>
    <div>
        <div v-show="display === 'main'" class="space-y-3">
            <div
                class="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 px-4 pt-4"
            >
                <Listbox v-model="fontFamily" :disabled="!activeObject" v-slot="{ disabled }">
                    <div :class="['font-selector', disabled && 'font-selector--disabled']">
                        <div
                            class="font-selector__toggle"
                            :style="{ fontFamily: fonts[fontFamily].family }"
                        >
                            <button
                                @click="fontFamily = Math.max(fontFamily - 1, 0)"
                                class="font-selector__arrow"
                            >
                                <i class="ri-arrow-left-s-line ri-lg"></i>
                            </button>
                            <ListboxButton class="flex-grow">
                                <span
                                    class="text-lg leading-none"
                                    :style="{ fontFamily: fontFamily, fontWeight: 'normal' }"
                                    >{{ fonts[fontFamily].family }}
                                </span>
                            </ListboxButton>
                            <button
                                @click="fontFamily = Math.min(fontFamily + 1, 13)"
                                class="font-selector__arrow"
                            >
                                <i class="ri-arrow-right-s-line ri-lg"></i>
                            </button>
                        </div>

                        <transition
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0"
                        >
                            <ListboxOptions
                                class="absolute mt-2 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-stroke focus:outline-none z-[101]"
                            >
                                <ListboxOption
                                    v-for="(font, i) in fonts"
                                    :value="i"
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

            <div
                :class="[
                    'px-4',
                    'flex',
                    'items-center',
                    !activeObject && 'opacity-40',
                    'flex-wrap',
                    'relative'
                ]"
            >
                <div class="font-size">
                    <input
                        v-model="fontSize"
                        type="number"
                        class="font-size__input"
                        :disabled="!activeObject"
                    />
                    <div class="font-size__arrows">
                        <button class="font-size__increase" @click="fontSize = fontSize + 1">
                            <i class="ri-arrow-up-s-fill"></i>
                        </button>
                        <button
                            class="font-size__decrease"
                            @click="fontSize = Math.max(6, fontSize - 1)"
                        >
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
                    <button class="color-selector__toggle" @click="display = 'pallete'">
                        <div
                            class="color-selector__preview"
                            :style="{ backgroundColor: fontColor }"
                        ></div>
                        <div class="color-selector__arrows">
                            <i class="ri ri-arrow-down-s-line"></i>
                        </div>
                    </button>

                    <button
                        v-if="isSupported"
                        class="color-selector__eyedropper"
                        :style="{ backgroundColor: fontColor, color: sipColor }"
                        @click="open"
                    >
                        <i class="ri-sip-line"></i>
                    </button>
                </div>
            </div>
        </div>

        <div v-show="display === 'pallete'" class="space-y-3">
            <div class="px-4 pt-3">
                <QButton variant="secondary" size="sm" @click="display = 'main'">
                    <i class="ri-arrow-left-line"></i>
                    <span class="ml-1">Back</span>
                </QButton>
            </div>

            <div class="swiper swiper-pallete">
                <div class="swiper-wrapper">
                    <div v-for="color in BASIC_COLORS" :key="color" class="swiper-slide">
                        <button
                            class="color-pallete"
                            :style="{ backgroundColor: color }"
                            @click="modify('fill', color, activeObject)"
                        ></button>
                    </div>
                </div>

                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

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

    @include md_screen {
        height: 54px;
    }

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

        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-left: 8px;
        cursor: pointer;
        @apply border border-stroke;

        &:hover {
            box-shadow:
                0px 4px 6px -2px rgba(16, 24, 40, 0.03),
                0px 12px 16px -4px rgba(16, 24, 40, 0.08);
        }
    }
}

.font-selector {
    @apply relative cursor-pointer flex-grow w-full;

    &.font-selector--disabled {
        opacity: 0.5;
        cursor: default;
    }

    .font-selector__option {
        @apply px-4 py-2 text-black/70 text-lg;

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
        @apply border border-stroke rounded-xl transition-all bg-gray-100;

        &:disabled {
            opacity: 0.5;
        }
    }

    .font-selector__arrow {
        @apply w-8 h-8 rounded-full flex items-center justify-center hover:bg-white;
    }
}

.color-pallete {
    @apply w-12 h-12 rounded-full block border border-light;
}

.swiper-slide {
    max-width: 48px;

    &:first-of-type {
        margin-left: 16px;
    }

    &:last-of-type {
        margin-right: 16px;
    }
}
</style>

<style lang="scss">
.swiper-pallete .swiper-pagination {
    position: relative;
    margin-top: 20px;

    .swiper-pagination-bullet {
        background-color: #d9d9d9;

        &.swiper-pagination-bullet-active {
            background-color: #1b1b1b;
        }
    }
}
</style>
