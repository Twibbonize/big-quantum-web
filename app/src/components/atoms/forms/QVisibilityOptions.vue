<script setup>
import { toRef, watch } from 'vue';
import { useField } from 'vee-validate';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';

const props = defineProps({
    name: {
        type: String,
        default: 'visiblity'
    },
    rules: {
        type: Object,
        default: null
    },
    modelValue: {
        type: null
    },
    isRequiredUpgrade: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(['update:modelValue', 'upgrade']);

const name = toRef(props, 'name', props.rules);

const { value } = useField(name, props.rules);
value.value = props.modelValue;

function updateValue(newValue) {
    emit('update:modelValue', newValue);
}

watch(value, updateValue);
</script>

<template>
    <RadioGroup v-model="value">
        <div class="space-y-4 visibility">
            <RadioGroupOption v-slot="{ checked }" value="public">
                <div :class="['visibility__option', checked && 'visibility__option--checked']">
                    <div class="visibility__indicator"></div>
                    <div class="visibility__copy">
                        <div class="visibility__context">
                            <span class="visibility__title">
                                <i class="ri-global-line"></i>
                                <span class="ml-1 font-bold">Public</span>
                            </span>
                        </div>
                        <p class="visibility__desc">
                            Your campaign can be found by all Twibbonize users
                        </p>
                    </div>
                </div>
            </RadioGroupOption>

            <div class="visibility__trigger-upgrade" @click="emit('upgrade')">
                <RadioGroupOption
                    v-slot="{ checked }"
                    value="unlisted"
                    :disabled="isRequiredUpgrade"
                >
                    <div :class="['visibility__option', checked && 'visibility__option--checked']">
                        <div class="visibility__indicator"></div>
                        <div class="visibility__copy">
                            <div class="visibility__context">
                                <span class="visibility__title">
                                    <i class="ri-lock-unlock-line"></i>
                                    <span class="ml-1 font-bold">Unlisted</span>
                                </span>
                                <div class="visibility__badge">Upgrade</div>
                            </div>
                            <p class="visibility__desc">
                                Your campaign can only be accessed through the campaign link
                            </p>
                        </div>
                    </div>
                </RadioGroupOption>
            </div>

            <div class="visibility__trigger-upgrade" @click="emit('upgrade')">
                <RadioGroupOption
                    v-slot="{ checked }"
                    value="private"
                    :disabled="isRequiredUpgrade"
                >
                    <div :class="['visibility__option', checked && 'visibility__option--checked']">
                        <div class="visibility__indicator"></div>
                        <div class="visibility__copy">
                            <div class="visibility__context">
                                <span class="visibility__title">
                                    <i class="ri-lock-line"></i>
                                    <span class="ml-1 font-bold">Private</span>
                                </span>
                                <div class="visibility__badge">Upgrade</div>
                            </div>
                            <p class="visibility__desc">
                                Your campaign can only be accessed by people who have the access
                                code
                            </p>
                        </div>
                    </div>
                </RadioGroupOption>
            </div>
        </div>
    </RadioGroup>
</template>

<style scoped lang="scss">
.visibility {
    .visibility__option {
        @apply flex p-4 cursor-pointer;
        border-radius: 12px;
        border: 1px solid #eaedf3;

        &.visibility__option--checked {
            background-color: #f6fafa;
        }
    }

    .visibility__indicator {
        height: 24px;
        width: 24px;
        border-radius: 100%;
        @apply flex items-center justify-center border border-main flex-shrink-0;
        margin-right: 12px;

        @include xs {
            height: 16px;
            width: 16px;
            margin-top: 4px;
        }
    }

    .visibility__option.visibility__option--checked .visibility__indicator {
        @include before {
            height: 18px;
            width: 18px;
            border-radius: 100%;
            @apply bg-main;

            @include xs {
                height: 10px;
                width: 10px;
            }
        }
    }

    .visibility__context {
        @apply flex items-center;
    }

    .visibility__title {
        margin-right: 8px;
    }

    .visibility__desc {
        color: #667085;
        margin-top: 8px;

        @include xs {
            @apply text-sm;
        }
    }

    .visibility__badge {
        @apply rounded-full text-white flex items-center justify-center px-2;
        width: fit-content;
        height: 24px;
        font-size: 0.6rem;
        font-weight: 500;
        background: linear-gradient(237deg, rgba(3, 69, 61, 0.8) 2.65%, #03352f 102.96%), #fff;
    }
}
</style>
