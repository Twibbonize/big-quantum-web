<script setup>
import { toRefs } from 'vue';
import { useField } from 'vee-validate';
const props = defineProps({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    modelValue: {
        type: null
    },
    // Field's own value
    value: {
        type: null,
        required: true
    },
    uncheckedValue: {
        type: null,
        default: undefined
    },
    rules: {
        default: undefined
    }
});

const emit = defineEmits(['update:modelValue']);
const { name } = toRefs(props);

const {
    handleChange,
    checkedValue,
    uncheckedValue,
    value: innerValue
} = useField(name, props.rules, {
    type: 'checkbox',
    checkedValue: props.value,
    uncheckedValue: props.uncheckedValue,
    initialValue: props.modelValue
});

function updateValue(e) {
    emit('update:modelValue', e.target.checked ? checkedValue : uncheckedValue);
}
</script>

<template>
    <input
        v-model="innerValue"
        type="checkbox"
        :id="id || name"
        :name="name"
        :value="value"
        style="display: none"
        @input="updateValue"
        @change="handleChange"
    />
    <label :for="id || name" class="checkbox-input">
        <div class="checkbox-input__wrapper">
            <div class="checkbox-input__indicator"></div>
        </div>
    </label>
</template>

<style scoped lang="scss">
input[type='checkbox']:checked + label.checkbox-input .checkbox-input__indicator {
    &::after {
        @apply bg-main-darker;
        background-image: url('/assets/img/icons/check.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 12px;
    }
}

.checkbox-input {
    @apply block;

    &__wrapper {
        @apply flex items-center space-x-2;
    }

    &__indicator {
        @apply w-8 h-8 rounded-lg border-2 border-stroke flex items-center justify-center bg-white/70;

        &::after {
            @apply w-6 h-6 rounded bg-transparent;
            content: '';
        }
    }

    &__text {
        @apply text-sm leading-5;
    }
}
</style>
