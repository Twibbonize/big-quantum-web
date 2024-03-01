<script setup>
import QButton from '@/components/atoms/QButton.vue';
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: [Number, String]
    }
});

const innerValue = ref(props.modelValue);

const emit = defineEmits(['increate', 'decrease', 'update:modelValue']);

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
    <div class="rotate-slider">
        <QButton square size="sm" @click="emit('decrease')">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M4 6V11H9"
                    stroke="#1B1B1B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6.00814 14.9922C6.52689 16.5259 7.51012 17.8424 8.80967 18.7434C10.1092 19.6444 11.6547 20.081 13.2132 19.9876C14.7718 19.8942 16.2589 19.2757 17.4507 18.2253C18.6424 17.175 19.4741 15.7497 19.8205 14.1642C20.1669 12.5787 20.0092 10.9189 19.3712 9.43481C18.7332 7.95076 17.6494 6.72289 16.2831 5.9362C14.9169 5.1495 13.3422 4.84661 11.7963 5.07316C10.2504 5.2997 8.81707 6.04341 7.71226 7.19222L4 10.8256"
                    stroke="#1B1B1B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </QButton>

        <input
            v-model="innerValue"
            type="range"
            name="rotate"
            id="rotate"
            :min="-180"
            :max="180"
            class="rotate-slider__input"
            @input="handleInputRange"
        />

        <QButton square size="sm" @click="emit('increate')">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M20.001 6V11H15.001"
                    stroke="#1B1B1B"
                    stroke-width="1.55556"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M17.9928 14.9922C17.4741 16.5259 16.4909 17.8424 15.1913 18.7434C13.8918 19.6444 12.3463 20.081 10.7878 19.9876C9.22922 19.8942 7.74205 19.2757 6.55032 18.2253C5.3586 17.175 4.52688 15.7497 4.18048 14.1642C3.83408 12.5787 3.99177 10.9189 4.62979 9.43481C5.26781 7.95076 6.35159 6.72289 7.71784 5.9362C9.08409 5.1495 10.6588 4.84661 12.2047 5.07316C13.7506 5.2997 15.1839 6.04341 16.2887 7.19222L20.001 10.8256"
                    stroke="#1B1B1B"
                    stroke-width="1.94444"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </QButton>
    </div>
</template>

<style scoped lang="scss">
.rotate-slider {
    @apply flex items-center space-x-4 p-3 bg-gray-150 rounded-xl relative;

    @include before {
        width: 6px;
        height: 10px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(22, 218, 193, 0.2);
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    @include after {
        width: 6px;
        height: 10px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(22, 218, 193, 0.2);
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    .rotate-slider__input {
        @apply flex-grow;
        -webkit-appearance: none;
        height: 8px;
        border-radius: 100px;
        background: rgba(22, 218, 193, 0.2);

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 6px;
            height: 8px;
            background: #16dac1;
            border-radius: 50%;
            cursor: pointer;
        }

        &::-webkit-slider-runnable-track {
            height: 8px;
            border-radius: 100px;
            background: rgba(22, 218, 193, 0.2);
        }
    }
}
</style>
