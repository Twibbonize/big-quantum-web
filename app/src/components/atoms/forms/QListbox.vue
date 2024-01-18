<script setup>
import { toRef, watch } from 'vue';
import { useField } from 'vee-validate';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    rules: {
        type: Object,
        default: null
    },
    options: {
        type: Array,
        required: true
    },
    prefix: {
        type: String
    },
    modelValue: {
        type: null
    }
});

const emit = defineEmits(['update:modelValue']);

const name = toRef(props, 'name', props.rules);

const { value } = useField(name, props.rules);
value.value = props.modelValue;

function updateValue(newValue) {
    emit('update:modelValue', newValue);
}

watch(value, updateValue);
</script>
<template>
    <Listbox v-model="value" v-slot="{ open }">
        <div :class="['listbox', open && 'listbox--open']">
            <ListboxButton class="listbox__button">
                <div class="block truncate">
                    <span v-if="prefix">{{ prefix }}</span>
                    <span class="font-medium">{{ value.name }}</span>
                </div>

                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <i class="ri-expand-up-down-line ri-lg"></i>
                </span>
            </ListboxButton>

            <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions class="listbox__options">
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="option in options"
                        :key="option.name"
                        :value="option"
                        as="template"
                    >
                        <li :class="['listbox__option', active && 'listbox__option--active']">
                            <span
                                :class="[
                                    selected ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                ]"
                            >
                                {{ option.name }}
                            </span>

                            <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <i class="ri-check-line ri-lg"></i>
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>
<style scoped lang="scss">
.listbox {
    @apply relative;

    .listbox__button {
        @apply px-4 py-3 first-letter:relative w-full h-full cursor-default rounded-xl border border-stroke bg-white text-sm text-left outline-none transition-all duration-100 ease-in-out;
    }

    &.listbox.listbox--open .listbox__button,
    .listbox__button:focus {
        @apply outline outline-offset-2 outline-main-darker transition-all duration-100 ease-in-out;
    }

    .listbox__options {
        @apply absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm border border-stroke focus:outline-none;
    }

    .listbox__option {
        @apply relative select-none py-2 pl-10 pr-4 cursor-pointer;

        &.listbox__option--active {
            @apply bg-gray-200;
        }
    }
}
</style>
