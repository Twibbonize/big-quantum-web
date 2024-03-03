<script setup>
import presets from '@/libs/editor/constants/presets';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';

const props = defineProps({
    editor: {
        type: Object,
        required: true
    },
    modify: {
        type: Function,
        required: true
    },
    activeObject: {
        type: Object
    }
});
</script>

<template>
    <RadioGroup>
        <div class="presets">
            <RadioGroupOption
                v-for="preset in presets"
                :key="preset.name"
                as="template"
                :value="preset"
                v-slot="{ active, checked }"
            >
                <div :class="['preset', checked && 'preset--selected']">
                    <img
                        :src="`/assets/img/presets/${preset.name.toLowerCase()}.webp`"
                        alt=""
                        class="preset__preview"
                    />
                    <div class="preset__title">{{ preset.name }}</div>
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<style scoped lang="scss">
.presets {
    @apply flex items-center space-x-3 overflow-x-auto pb-2;
}

.preset {
    @apply bg-white flex-shrink-0 flex-grow relative;

    &:first-of-type {
        @apply ml-4;
    }

    &:last-of-type {
        margin-right: 16px !important;
    }

    .preset__preview {
        @apply h-16 w-24 rounded;
    }

    .preset__title {
        display: block;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        position: relative;
        text-align: center;
        text-transform: capitalize;
        z-index: 1;
    }

    @include after {
        height: 30px;
        bottom: 0;
        width: 100%;
        @apply bg-main rounded-b;
        opacity: 0;
        transition: all 0.15s linear;
    }

    &.preset--selected .preset__preview {
        @apply rounded-b-none;
    }

    &.preset--selected .preset__title {
        @apply font-semibold;
    }

    &.preset--selected {
        @include after {
            opacity: 100;
        }
    }
}
</style>
