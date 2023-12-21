<script setup>
import { toRefs } from 'vue';
import { useField } from 'vee-validate';
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    modelValue: {
        type: null
    },
    // Field's own value
    checkedValue: {
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
    checkedValue: props.checkedValue,
    uncheckedValue: props.uncheckedValue,
    initialValue: props.modelValue
});

function updateValue(e) {
    emit('update:modelValue', e.target.checked ? checkedValue : uncheckedValue);
}
</script>
<template>
    <div>
        <input
            v-model="innerValue"
            type="checkbox"
            :id="id"
            :name="name"
            :value="value"
            style="display: none"
            @input="updateValue"
            @change="handleChange"
        />

        <label :for="id" :class="['switch', innerValue && 'switch--checked']">
            <span class="switch__toggle"></span>
        </label>
    </div>
</template>

<style scoped lang="scss">
.switch {
    @apply cursor-pointer w-11 h-6 rounded-full block relative bg-light transition-colors duration-150;

    &__toggle {
        position: absolute;
        top: 3px;
        left: 2px;
        width: 18px;
        height: 18px;
        @apply bg-white transition-all duration-300 rounded-full outline-none;
    }

    &--checked {
        @apply bg-main-darker;
    }

    &:active &__toggle {
        width: 40px;
    }

    &--checked &__toggle {
        left: calc(100% - 2px);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
}
</style>
