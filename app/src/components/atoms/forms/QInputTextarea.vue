<script setup>
import { ref, watch } from 'vue';
import { Field } from 'vee-validate';

const props = defineProps({
    modelValue: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    rules: {
        default: undefined
    },
    placeholder: {
        type: String,
        default: ''
    },
    variant: {
        type: String
    }
});

const innerValue = ref(props.modelValue);
const textarea = ref(null);
const emit = defineEmits(['update:modelValue']);

function adjustTextareaHeight(e) {
    textarea.value.style.height = 'auto';
    textarea.value.style.height = `${textarea.value.scrollHeight}px`;
    emit('update:modelValue', e.target.value);
}

watch(
    () => props.modelValue,
    (newValue) => {
        innerValue.value = newValue;
    }
);
</script>

<template>
    <Field :model-value="innerValue" :rules="rules" :name="name" v-slot="{ field, value, meta }">
        <div
            :class="[
                'field',
                !meta.valid && meta.dirty && 'field--error',
                variant && `field--${variant}`
            ]"
        >
            <textarea
                ref="textarea"
                v-bind="field"
                class="field__input"
                :id="name"
                :placeholder="placeholder"
                data-gramm="false"
                data-gramm_editor="false"
                data-enable-grammarly="false"
                @input="adjustTextareaHeight"
                >{{ value }}</textarea
            >

            <div v-if="$slots.suffix" class="field__suffix">
                <slot name="suffix"></slot>
            </div>
        </div>
    </Field>
</template>
<style scoped lang="scss">
.field {
    @apply rounded-xl border border-stroke transition-all duration-100 ease-in-out bg-gray-100;

    &:focus-within {
        @apply outline outline-offset-2 outline-main-darker;
    }

    &.field--white {
        @apply bg-white;
    }

    .field__input {
        @apply p-4 rounded-xl text-sm w-full bg-transparent transition-colors ease-in block;
        min-height: 86px;
        outline: none;
        resize: none;

        &:focus {
            @apply outline-none bg-white;
        }
    }
}
</style>
