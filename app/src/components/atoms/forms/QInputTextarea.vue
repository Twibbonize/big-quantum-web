<script setup>
import { computed, ref, watch } from 'vue';
import { Field } from 'vee-validate';

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
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
    },
    maxLength: {
        type: Number
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

const totalChars = computed(() => innerValue.value.length);

watch(
    () => props.modelValue,
    (newValue) => {
        innerValue.value = newValue;
    }
);
</script>

<template>
    <Field v-model="innerValue" :rules="rules" :name="name" v-slot="{ field, value, meta }">
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
                :maxlength="maxLength"
                >{{ value }}</textarea
            >

            <div v-if="maxLength" class="field__counter">
                <span class="field__counter__current">{{ totalChars }}</span>
                <span>/</span>
                <span class="field__counter__max">{{ maxLength }}</span>
            </div>

            <div v-if="$slots.suffix" class="field__suffix">
                <slot name="suffix"></slot>
            </div>
        </div>
    </Field>
</template>
<style scoped lang="scss">
.field {
    @apply relative rounded-xl border border-stroke transition-all duration-100 ease-in-out;
    background-color: #f6fafa;

    &:focus-within {
        @apply outline outline-offset-2 outline-main-darker;
    }

    &.field--white {
        @apply bg-white;
    }

    .field__input {
        @apply p-4 rounded-xl text-sm w-full bg-transparent transition-colors ease-in block;
        min-height: 102px;
        outline: none;
        resize: none;

        &:focus {
            @apply outline-none bg-white;
        }

        &::placeholder {
            color: #aaafb9;
            opacity: 1;
            /* Firefox */
        }

        &::-ms-input-placeholder {
            /* Edge 12 -18 */
            color: #aaafb9;
        }
    }

    .field__counter {
        @apply absolute right-1 bottom-1 text-xs text-content;
        margin-right: 2px;
        margin-bottom: 2px;
    }
}
</style>
