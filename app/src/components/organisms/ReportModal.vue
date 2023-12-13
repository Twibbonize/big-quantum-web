<script setup>
import QModal from '@/components/atoms/QModal.vue';
import QButton from '@/components/atoms/QButton.vue';
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption
} from '@headlessui/vue';
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

const reasons = ['Abusive or harmful', 'Prentending to be someone else', 'Senstive content'];

const selectedReason = ref(null);
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
            <div class="pt-2 pb-6">
                <RadioGroup>
                    <div class="space-y-3">
                        <RadioGroupOption
                            as="template"
                            v-for="(reason, i) in reasons"
                            :key="i"
                            :value="reason"
                            v-slot="{ checked }"
                        >
                            <div :class="['radio-option', checked && 'radio-option--checked']">
                                <div class="radio-option__indicator"></div>
                                <div class="radio-option__text">
                                    {{ reason }}
                                </div>
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
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
