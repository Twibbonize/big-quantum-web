<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    step: {
        type: Number
    },
    max: {
        type: Number
    },
    min: {
        type: Number
    },
    name: {
        type: String
    },
    modelValue: {
        type: [Number, String]
    }
});

const innerValue = ref(props.modelValue);

const emit = defineEmits(['update:modelValue']);

const handleInputRange = (e) => {
    emit('update:modelValue', e.target.value);
};

watch(
    () => props.modelValue,
    (newValue) => {
        innerValue.value = newValue;
    }
);
</script>

<template>
    <div class="range-slider">
        <span class="range-slider__icon">
            <i class="ri-subtract-line"></i>
        </span>
        <input
            v-model="innerValue"
            type="range"
            :name="name"
            :id="name"
            :min="min"
            :max="max"
            :step="step"
            class="range-slider__input"
            @input="handleInputRange"
        />
        <span class="range-slider__icon">
            <i class="ri-add-line"></i>
        </span>
    </div>
</template>

<style scoped lang="scss">
.range-slider {
    @apply flex items-center space-x-2.5 p-2.5 bg-white border border-light rounded-lg relative;

    .range-slider__icon {
        @apply flex items-center justify-center;
        height: 16px;
        width: 16px;
    }

    .range-slider__input {
        @apply flex-grow;
        -webkit-appearance: none;
        border-radius: 100px;
        // background: rgba(22, 218, 193, 0.2);

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            cursor: pointer;
            border: 1px solid #16dac1;
            @apply bg-white;
            background-clip: content-box;
            transform: translateY(-4px);
        }

        &::-webkit-slider-runnable-track {
            height: 6px;
            border-radius: 2.5px;
            background-color: #eaecf0;
        }
    }
}
</style>
