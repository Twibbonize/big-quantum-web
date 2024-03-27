<script setup>
import { Field } from 'vee-validate';
import { toRef } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
        validators: (value) => ['text', 'email', 'search'].includes(value)
    },
    modelValue: {
        type: String
    },
    name: {
        type: String
    },
    id: {
        type: String
    },
    placeholder: {
        type: String
    },
    rules: {
        type: null,
        default: undefined
    },
    readonly: {
        type: Boolean,
        default: false
    },
    minlength: {
        type: Number,
        default: undefined
    },
    maxlength: {
        type: Number,
        default: undefined
    },
    autocomplete: {
        type: String
    },
    size: {
        type: String,
        default: 'md',
        validators: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    variant: {
        type: String
    }
});

const emit = defineEmits(['update:modelValue']);

const name = toRef(props, 'name');
const type = toRef(props, 'type');

function updateValue(e) {
    emit('update:modelValue', e.target.value);
}
</script>
<template>
    <Field
        :model-value="modelValue"
        :rules="rules"
        :type="type"
        :name="name"
        v-slot="{ field, meta, value }"
    >
        <div
            :class="[
                'field',
                `field--${type}`,
                `field--${size}`,
                !meta.valid && meta.dirty && 'field--error',
                variant && `field--${variant}`
            ]"
        >
            <div class="field__wrapper">
                <div v-if="$slots.prefix" class="field__prefix">
                    <slot name="prefix"></slot>
                </div>
                <input
                    v-bind="field"
                    :value="value"
                    :id="id || name"
                    :class="['field__input', readonly && 'field__input--readonly']"
                    :readonly="readonly"
                    :placeholder="placeholder"
                    @input="updateValue"
                    :minlength="minlength"
                    :maxlength="maxlength"
                    :autocomplete="autocomplete"
                />

                <div v-if="$slots.suffix" class="field__suffix">
                    <slot name="suffix"></slot>
                </div>
            </div>
        </div>
    </Field>
</template>

<style scoped lang="scss">
.field {
    @apply rounded-xl border border-stroke transition-all duration-100 ease-in-out;

    &:focus-within {
        @apply outline outline-offset-2 outline-main-darker;
    }

    .field__wrapper {
        @apply w-full rounded-xl flex items-center transition-colors ease-in;
        background-color: #f6fafa;
        height: 52px;

        &:focus-within {
            @apply bg-white;
        }
    }

    &.field--sm .field__wrapper {
        height: auto;
    }

    &.field--white .field__wrapper {
        @apply bg-white;
    }

    &.field--text .field__prefix {
        padding: 14px 12px 14px 14px;
        font-size: 14px;
        color: #667085;
        @apply border-r border-stroke;
    }

    &__prefix,
    &__suffix {
        @apply flex items-center justify-center h-full;
    }

    &__input {
        @apply p-4 text-sm block flex-grow bg-transparent w-0 overflow-auto;

        &:focus {
            @apply outline-none;
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
            outline: none;
            -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
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

    &.field--sm .field__input {
        @apply px-4 py-3 text-xs;
    }

    &.field--sm &__prefix + &__input {
        @apply pl-1;
    }
}
</style>
