<script setup>
import { RadioGroup, RadioGroupLabel, RadioGroupDescription, RadioGroupOption } from '@headlessui/vue'

const props = defineProps({
    modelValue: {
        type: Object,
    },
    options: {
        type: Array,
    }
});

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <RadioGroup
        :modelValue="modelValue"
        @update:modelValue="value => emit('update:modelValue', value)"
        class="checkout-option"
        by="key"
    >
        <RadioGroupLabel class="sr-only">Checkout Options</RadioGroupLabel>
        <div class="space-y-4">
            <RadioGroupOption
                as="div"
                v-for="option in options"
                :key="option.key"
                :value="option"
                v-slot="{ checked }"
            >
                <div class="card" :class="{ 'checked': checked }">
                    <div class="flex">
                        <div class="indicator"></div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <RadioGroupLabel
                            as="p"
                            class="label"
                        >
                            {{ `Pay ${option.key}` }}
                        </RadioGroupLabel>
                        <RadioGroupDescription
                            as="span"
                            class="description"
                        >
                            {{ `$${option.value} / Month` }}
                        </RadioGroupDescription>
                    </div>
                    <div class="ml-auto">
                        <span v-show="option.key === 'annual'" class="label-save">
                            Save 14%
                        </span>
                    </div>
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<style lang="scss">
.checkout-option {
    @apply mt-3;

    .card {
        @apply p-4 rounded-lg flex gap-3 w-full cursor-pointer;
        border: 1px solid #EAEDF3;

        .label {
            @apply font-bold;
        }

        .description {
            @apply whitespace-nowrap text-sm sm:text-base;
            color: #667085;
        }

        .indicator {
            @apply w-6 h-6 rounded-xl hover:bg-[#EDF8F8] cursor-pointer;
            border: 1px solid #D0D5DD;
        }

        .label-save {
            @apply bg-black text-white text-xs py-1 px-3 rounded-full whitespace-nowrap;
        }
    }

    .checked.card {
        @apply cursor-default;
        background: #F6FAFA;

        .indicator {
            @apply border border-main border-solid relative;

            &::before {
                @apply w-[18px] h-[18px] bg-main absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full;
                content: '';
            }
        }
    }
}
</style>