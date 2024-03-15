<script setup>
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: [Object, String, Number]
    },
    isRequiredUpgrade: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(['update:modelValue', 'upgrade']);

const innerValue = ref(props.modelValue);

const backgrounds = [
    {
        id: 1,
        thumbnail: '/assets/img/banners/thumbnails/1.jpg',
        premium: false
    },
    {
        id: 2,
        thumbnail: '/assets/img/banners/thumbnails/2.jpg',
        premium: true
    },
    {
        id: 3,
        thumbnail: '/assets/img/banners/thumbnails/3.jpg',
        premium: true
    },
    {
        id: 4,
        thumbnail: '/assets/img/banners/thumbnails/4.jpg',
        premium: true
    },
    {
        id: 5,
        thumbnail: '/assets/img/banners/thumbnails/5.jpg',
        premium: true
    },
    {
        id: 6,
        thumbnail: '/assets/img/banners/thumbnails/6.jpg',
        premium: true
    },
    {
        id: 7,
        thumbnail: '/assets/img/banners/thumbnails/7.jpg',
        premium: true
    },
    {
        id: 8,
        thumbnail: '/assets/img/banners/thumbnails/8.jpg',
        premium: true
    },
    {
        id: 9,
        thumbnail: '/assets/img/banners/thumbnails/9.jpg',
        premium: true
    }
];

watch(innerValue, (newValue) => {
    // innerValue.value = newValue;
    emit('update:modelValue', newValue);

    const findBg = backgrounds.find((bg) => bg.id === newValue);

    if (findBg.premium && props.isRequiredUpgrade) {
        innerValue.value = 1;
        emit('upgrade');
    }
});
</script>

<template>
    <div class="cb-selection">
        <RadioGroup v-model="innerValue">
            <div class="cb-selection__grid">
                <!-- upload button -->
                <button class="cb-selection__upload">
                    <span class="cb-selection__upload-plus">
                        <i class="ri-add-line ri-xs"></i>
                    </span>
                    <span class="text-xs ml-1 font-semibold">Upload</span>
                </button>
                <!-- end of upload button -->

                <RadioGroupOption
                    v-for="background in backgrounds"
                    :key="background.id"
                    as="template"
                    :value="background.id"
                    v-slot="{ active, checked }"
                >
                    <div
                        :class="[
                            'cb-selection__option',
                            background.premium && 'cb-selection__option--premium',
                            checked && 'cb-selection__option--checked'
                        ]"
                    >
                        <img :src="background.thumbnail" :alt="background.id" />
                        <span class="cb-selection__upgrade-badge">Upgrade</span>
                    </div>
                </RadioGroupOption>
            </div>
        </RadioGroup>
    </div>
</template>

<style scoped lang="scss">
.cb-selection {
    .cb-selection__grid {
        @apply grid grid-cols-2 md:grid-cols-5 xl:grid-cols-5 gap-3;
    }

    .cb-selection__upload {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #d5dcdc;
        border-radius: 12px;
        aspect-ratio: 16/10;

        .cb-selection__upload-plus {
            height: 16px;
            width: 16px;
            border-radius: 100%;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #d8e7da;
        }
    }

    .cb-selection__option {
        // height: 88px;
        // width: 100%;
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        aspect-ratio: 16/10;

        &.cb-selection__option--checked {
            @apply border-2 border-main;
        }

        .cb-selection__option-overlay {
            @apply absolute h-full w-full top-0 left-0 flex items-center justify-center;
        }

        .cb-selection__upgrade-badge {
            display: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 70px;
            height: 24px;
            font-size: 11px;
            align-items: center;
            justify-content: center;
            border-radius: 100px;
            background: linear-gradient(237deg, rgba(3, 69, 61, 0.8) 2.65%, #03352f 102.96%), #fff;
            @apply text-white;

            @include xs {
                width: 7em;
                height: 2.4em;
                font-size: 0.44em;
            }

            @include sm_screen {
            }
        }

        &.cb-selection__option--premium img {
            filter: blur(1px);
            -webkit-filter: blur(1px);
        }

        &.cb-selection__option--premium .cb-selection__upgrade-badge {
            display: flex;
        }
    }
}
</style>
