<script setup>
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { ref, watch } from 'vue';

const props = defineProps({
    frames: {
        type: Array,
        required: true
    },
    size: {
        type: String,
        default: 'md',
        validators: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    modelValue: {
        type: [String, Number]
    }
});

const emit = defineEmits(['update:modelValue']);

const innerValue = ref(props.modelValue);

watch(innerValue, (newValue) => {
    emit('update:modelValue', innerValue);
});
</script>

<template>
    <RadioGroup v-model="innerValue" as="template">
        <div :class="['frame-selector', `frame-selector--${size}`]">
            <RadioGroupOption
                v-for="(frame, i) in frames"
                :key="i"
                :value="frame"
                v-slot="{ checked }"
            >
                <div :class="['frame-selector__item', checked && 'frame-selector__item--checked']">
                    <img :src="frame" :alt="i" />
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<style scoped lang="scss">
.frame-selector {
    @apply flex items-center justify-center space-x-4 max-w-full px-4;
    @include no_scrollbar();

    .frame-selector__item {
        @apply h-12 w-12 rounded-lg p-1 border border-stroke bg-white transition-colors duration-200 cursor-pointer;

        img {
            @apply rounded;
        }

        @include md_screen {
            @apply h-16 w-16;
        }

        &--checked {
            @apply border-main bg-gray-200;
        }
    }

    &.frame-selector--sm {
        @apply space-x-2;

        .frame-selector__item {
            @apply h-10 w-10;
        }
    }
}
</style>
