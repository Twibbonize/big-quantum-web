<script setup>
import QModal from '@/components/atoms/QModal.vue';
import QButton from '@/components/atoms/QButton.vue';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { Form, Field } from 'vee-validate';
import { object as yupObject, number as yupNumber } from 'yup';
import { ref } from 'vue';

defineProps({
    show: {
        type: Boolean,
        default: false
    },
    uuid: {
        type: String,
        required: true
    }
});
defineEmits(['close']);

const reasons = [
    {
        value: 0,
        text: 'Abusive or harmful'
    },
    {
        value: 1,
        text: 'Prentending to be someone else'
    },
    {
        value: 2,
        text: 'Senstive content'
    }
];

const selectedReason = ref(null);

const reportValidation = yupObject().shape({
    reason: yupNumber().required()
});
</script>
<template>
    <QModal :show="show" @close="$emit('close')">
        <template #header>
            <div class="flex items-center justify-between w-full">
                <h2 class="text-lg font-semibold">Why do you report this profile?</h2>

                <QButton variant="subtle" size="sm" square @click="$emit('close')">
                    <i class="ri-close-fill ri-lg"></i>
                </QButton>
            </div>
        </template>

        <template #body>
            <div class="px-5 pt-20 py-6">
                <Form :validation-schema="reportValidation" v-slot="{ meta }">
                    <div class="space-y-6">
                        <Field name="reason" v-model="selectedReason" v-slot="{ field }">
                            <RadioGroup v-bind="field">
                                <div class="space-y-3">
                                    <RadioGroupOption
                                        as="template"
                                        v-for="reason in reasons"
                                        :key="reason.value"
                                        :value="reason.value"
                                        v-slot="{ checked }"
                                    >
                                        <div
                                            :class="[
                                                'radio-option',
                                                checked && 'radio-option--checked'
                                            ]"
                                        >
                                            <div class="radio-option__indicator"></div>
                                            <div class="radio-option__text">
                                                {{ reason.text }}
                                            </div>
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </Field>

                        <p class="text-sm text-content">
                            Twibbonize Community Guidelines protect the privacy of reporter's
                            identity. <a href="#" class="link">Read more.</a>
                        </p>

                        <div class="flex justify-end space-x-2">
                            <QButton variant="subtle" @click="$emit('close')"> Cancel </QButton>
                            <QButton :enabled="meta.valid"> Send </QButton>
                        </div>
                    </div>
                </Form>
            </div>
        </template>
    </QModal>
</template>

<style scoped lang="scss">
.radio-option {
    @apply rounded-xl border border-stroke px-2 py-3 flex items-center space-x-2 cursor-pointer;

    &__indicator {
        @apply w-6 h-6 rounded-full border border-black/10 relative transition-colors duration-200 ease-in;

        @include before {
            @apply h-4 w-4 bg-main opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200;
        }
    }

    &__text {
        @apply text-sm tracking-wide;
    }

    &:hover &__indicator {
        @include before {
            @apply opacity-30;
        }
    }

    &.radio-option--checked &__indicator {
        @apply border-main/50;

        @include before {
            @apply opacity-100;
        }
    }
}
</style>
