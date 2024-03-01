<script setup>
import { computed, onMounted, ref } from 'vue';
import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from '@headlessui/vue';
import WebFont from 'webfontloader';

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
});
</script>

<template>
    <div class="space-y-3">
        <Listbox v-model="selectedFont" :disabled="!activeObject" v-slot="{ disabled }">
            <div :class="['font-selector', disabled && 'font-selector--disabled']">
                <ListboxButton class="btn-control">
                    <span
                        class="text-lg"
                        :style="{ fontFamily: selectedFont, fontWeight: 'normal' }"
                        >{{ selectedFont }}</span
                    >
                    <i class="ri-arrow-down-s-line ri-lg"></i>
                </ListboxButton>

                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ListboxOptions
                        class="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-stroke focus:outline-none z-10"
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

        <div class="flex items-center space-x-2">
            <button class="btn-control" :disabled="!activeObject">
                <div class="flex items-center space-x-3">
                    <span class="w-6 h-6 bg-black rounded"></span>
                    <span>#000000</span>
                </div>
            </button>

            <button
                :class="['btn-toggle', isBold && 'btn-toggle--active']"
                :disabled="!activeObject"
                @click="toggleBold"
            >
                <i class="ri-bold ri-lg font-semibold"></i>
            </button>

            <button
                :class="['btn-toggle', isItalic && 'btn-toggle--active']"
                :disabled="!activeObject"
                @click="toggleItalic"
            >
                <i class="ri-italic ri-lg"></i>
            </button>

            <button
                :class="['btn-toggle', isUnderline && 'btn-toggle--active']"
                :disabled="!activeObject"
                @click="toggleUnderline"
            >
                <i class="ri-underline ri-lg"></i>
            </button>

            <button
                :class="['btn-toggle', isStrikethrough && 'btn-toggle--active']"
                :disabled="!activeObject"
                @click="toggleStrikethrough"
            >
                <i class="ri-strikethrough ri-lg"></i>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.btn-control {
    padding: 0 16px;
    height: 52px;
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

.btn-toggle {
    height: 52px;
    width: 52px;
    @apply border border-stroke rounded-xl flex-shrink-0 transition-all relative overflow-hidden cursor-pointer;

    &:hover {
        @apply bg-black/10;
    }

    &.btn-toggle--active {
        @apply text-main;
    }

    &:disabled {
        opacity: 0.5;
        @apply cursor-default;
    }
}

.font-selector {
    @apply relative cursor-pointer;

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
}
</style>
