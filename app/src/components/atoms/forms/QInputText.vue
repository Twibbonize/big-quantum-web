<script setup>
import { Field } from 'vee-validate';
import { toRef } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
        validators: (value) => ['text', 'email'].includes(value)
    },
    modelValue: {
        type: String
    },
    name: {
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
        <div :class="['field', `field--${type}`, !meta.valid && meta.dirty && 'field--error']">
            <input
                v-bind="field"
                :value="value"
                :id="name"
                :class="['field__input', readonly && 'field__input--readonly']"
                :readonly="readonly"
                :placeholder="placeholder"
                @input="updateValue"
                :minlength="minlength"
                :maxlength="maxlength"
            />
        </div>
    </Field>
</template>

<style scoped lang="scss">
.field {
    @apply rounded-xl border border-stroke transition-all duration-100 ease-in-out;

    &:focus-within {
        @apply outline outline-offset-2 outline-main-darker;
    }

    &__input {
        @apply p-4 rounded-xl text-sm w-full bg-gray-100 transition-colors ease-in block;
        transition-duration: 0.4s;

        &:focus {
            @apply outline-none bg-white;
        }
    }

    // &.field--email .field__input {
    //     @apply text-center;
    // }

    // .field__input {
    //     height: 48px;
    //     padding: 0 12px;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     font-size: 14px;
    //     width: 100%;
    //     @apply rounded-lg border border-stroke text-sm;

    //     &::placeholder {
    //         color: #757484;
    //         opacity: 0.8;
    //         @apply font-light;
    //     }

    //     &--readonly {
    //         @apply bg-gray-100;

    //         &:focus {
    //             outline: none !important;
    //         }
    //     }
    // }

    // & .field__error {
    //     font-size: 12px;
    //     margin-top: 8px;
    //     @apply text-red-600;
    // }

    // &.field--error .field__input {
    //     @apply outline outline-red-500;
    // }

    // &:not(.field--error) .field__input:focus {
    //     @apply outline outline-primary;
    // }
}
</style>
