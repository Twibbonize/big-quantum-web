<script setup>
import { computed } from 'vue';
import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from '@headlessui/vue';

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

// const control =
// const emit = defineEmits([''])

const isBold = computed(() => {
    const { activeObject } = props;
    return activeObject.fontWeight === 'bold';
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
    return activeObject.fontStyle === 'italic';
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
    return activeObject.underline;
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
    return activeObject.linethrough;
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
</script>

<template>
    <div class="space-y-3">
        <Listbox>
            <div class="relative font-selector">
                <ListboxButton class="btn-control">
                    <span>Roboto</span>
                    <i class="ri-arrow-down-s-line ri-lg"></i>
                </ListboxButton>

                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ListboxOptions
                        class="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-stroke focus:outline-none sm:text-sm"
                    >
                        <ListboxOption value="Roboto" v-slot="{ active, selected }">
                            <li
                                :class="[
                                    'font-selector__option',
                                    active && 'font-selector__option--active',
                                    selected && 'font-selector__option--selected'
                                ]"
                            >
                                Roboto
                            </li>
                        </ListboxOption>

                        <ListboxOption value="Arial" v-slot="{ active, selected }">
                            <li
                                :class="[
                                    'font-selector__option',
                                    active && 'font-selector__option--active',
                                    selected && 'font-selector__option--selected'
                                ]"
                            >
                                Arial
                            </li>
                        </ListboxOption>

                        <ListboxOption value="Times New Roman" v-slot="{ active, selected }">
                            <li
                                :class="[
                                    'font-selector__option',
                                    active && 'font-selector__option--active',
                                    selected && 'font-selector__option--selected'
                                ]"
                            >
                                Times New Roman
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>

        <div class="flex items-center space-x-2">
            <button class="btn-control">
                <div class="flex items-center space-x-3">
                    <span class="w-6 h-6 bg-black rounded"></span>
                    <span>#000000</span>
                </div>
            </button>

            <button :class="['btn-toggle', isBold && 'btn-toggle--active']" @click="toggleBold">
                <i class="ri-bold ri-lg font-semibold"></i>
            </button>

            <button :class="['btn-toggle', isItalic && 'btn-toggle--active']" @click="toggleItalic">
                <i class="ri-italic ri-lg"></i>
            </button>

            <button
                :class="['btn-toggle', isUnderline && 'btn-toggle--active']"
                @click="toggleUnderline"
            >
                <i class="ri-underline ri-lg"></i>
            </button>

            <button
                :class="['btn-toggle', isStrikethrough && 'btn-toggle--active']"
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
    @apply border border-stroke rounded-xl;
}

.btn-toggle {
    height: 52px;
    width: 52px;
    @apply border border-stroke rounded-xl flex-shrink-0 transition-colors relative overflow-hidden;

    &:hover {
        @apply bg-black/10;
    }

    &.btn-toggle--active {
        @apply text-main;
    }
}

.font-selector {
    .font-selector__option {
        @apply px-4 py-2 text-sm text-content;

        &.font-selector__option--active {
            @apply bg-gray-100 text-black;
        }

        &.font-selector__option--selected {
            @apply text-main;
        }
    }
}
</style>
