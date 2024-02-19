<script setup>
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption
} from '@headlessui/vue';
import QButton from '@/components/atoms/QButton.vue';
import QSlider from '@/components/atoms/QSlider.vue';
import { watch } from 'vue';
import { Form as VeeForm, useField, Field } from 'vee-validate';
import { string as yupString, object as yupObject } from 'yup';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

import { useModal } from '@/composables/modal';
// import { useField } from "vee-validate";

const { update, close } = useModal();

const frameGalleries = [
    '/assets/img/sample/frame-creation/1.png',
    '/assets/img/sample/frame-creation/2.png',
    '/assets/img/sample/frame-creation/3.png',
    '/assets/img/sample/frame-creation/4.png',
    '/assets/img/sample/frame-creation/5.png',
    '/assets/img/sample/frame-creation/6.png'
];

const bgGalleries = [
    '/assets/img/sample/bg-creation/1.jpg',
    '/assets/img/sample/bg-creation/2.jpg',
    '/assets/img/sample/bg-creation/3.jpg',
    '/assets/img/sample/bg-creation/4.jpg',
    '/assets/img/sample/bg-creation/5.jpg',
    '/assets/img/sample/bg-creation/6.jpg',
    '/assets/img/sample/bg-creation/7.jpg'
];

const validationSchema = yupObject().shape({
    campaign_type: yupString().required()
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');
watch(sm, (newValue) => {
    update({ position: newValue ? 'screen' : 'center' });
});
</script>

<template>
    <VeeForm
        :validation-schema="validationSchema"
        v-slot="{ meta, values }"
        as="div"
        class="creation"
    >
        <div class="creation__header">
            <QButton variant="subtle" square @click="close">
                <i class="ri-close-line ri-lg"></i>
            </QButton>
        </div>

        <div class="creation__body">
            <div class="space-y-8 container px-5 md:px-0">
                <div class="space-y-2 text-center">
                    <h1 class="text-2xl font-semibold">What do you want to create?</h1>
                    <p class="text-content font-light">
                        Spice up your online campaign game, not only with a frame, but also with
                        creative backgrounds
                    </p>
                </div>

                <Field name="campaign_type" v-slot="{ field }">
                    <RadioGroup v-bind="field">
                        <RadioGroupLabel class="sr-only">Campaign Type</RadioGroupLabel>
                        <div
                            class="grid grid-cols-2 place-items-center md:place-items-baseline gap-5"
                        >
                            <RadioGroupOption
                                value="frame"
                                v-slot="{ checked }"
                                class="col-span-2 sm:col-span-1 flex justify-end w-full"
                            >
                                <div
                                    class="campaign-type"
                                    :class="[checked ? 'border-main' : 'border-gray-200']"
                                >
                                    <div class="space-y-5">
                                        <img
                                            class="mx-auto w-20 h-20"
                                            src="/assets/img/icons/frame.png"
                                            alt="frame"
                                        />
                                        <div class="space-y-1 text-center">
                                            <h3 class="text-lg font-semibold">Frame Twibbon</h3>
                                            <p class="text-sm text-content max-w-xs mx-auto">
                                                The OG Twibbon a frame that’s placed on your picture
                                            </p>
                                        </div>
                                    </div>

                                    <QSlider
                                        class="w-full overflow-hidden mt-5"
                                        style="--swiper-wrapper-transition-timing-function: linear"
                                        direction="horizontal"
                                        :space-between="0"
                                        :grab-cursor="false"
                                        :speed="5000"
                                        :centered-slides="false"
                                        :loop="true"
                                        slides-per-view="auto"
                                        :autoplay-delay="0"
                                        :autoplay-disable-on-interaction="false"
                                        :autoplay-reverse-direction="true"
                                        :allow-touch-move="false"
                                    >
                                        <swiper-slide
                                            v-for="(filename, i) in frameGalleries"
                                            :key="i"
                                            class="campaign-type__gallery"
                                        >
                                            <img :src="filename" :alt="filename" />
                                        </swiper-slide>
                                    </QSlider>
                                </div>
                            </RadioGroupOption>

                            <RadioGroupOption
                                value="background"
                                v-slot="{ checked }"
                                class="col-span-2 sm:col-span-1 flex justify-start w-full"
                            >
                                <div
                                    class="campaign-type"
                                    :class="[checked ? 'border-main' : 'border-gray-200']"
                                >
                                    <div class="space-y-5">
                                        <img
                                            class="mx-auto w-20 h-20"
                                            src="/assets/img/icons/frame.png"
                                            alt="frame"
                                        />
                                        <div class="space-y-1 text-center">
                                            <h3 class="text-lg font-semibold">
                                                Background Twibbon
                                            </h3>
                                            <p class="text-sm text-content max-w-xs mx-auto">
                                                A fresh variation of Twibbon that poses as the
                                                background of your picture
                                            </p>
                                        </div>
                                    </div>

                                    <QSlider
                                        class="w-full overflow-hidden mt-5"
                                        style="--swiper-wrapper-transition-timing-function: linear"
                                        direction="horizontal"
                                        :space-between="0"
                                        :grab-cursor="false"
                                        :speed="5000"
                                        :centered-slides="false"
                                        :loop="true"
                                        slides-per-view="auto"
                                        :autoplay-delay="0"
                                        :autoplay-disable-on-interaction="false"
                                        :autoplay-reverse-direction="true"
                                        :allow-touch-move="false"
                                    >
                                        <swiper-slide
                                            v-for="(filename, i) in bgGalleries"
                                            :key="i"
                                            class="campaign-type__gallery"
                                        >
                                            <img :src="filename" :alt="filename" />
                                        </swiper-slide>
                                    </QSlider>
                                </div>
                            </RadioGroupOption>
                        </div>
                    </RadioGroup>
                </Field>
            </div>
        </div>

        <div class="creation__footer">
            <QButton variant="secondary" @click="close"> Cancel </QButton>

            <QButton :enabled="meta.valid"> Get Started </QButton>
        </div>
    </VeeForm>
</template>

<style scoped lang="scss">
.creation {
    @apply flex flex-col h-full;

    .creation__header {
        @apply flex items-center justify-end py-4 px-5;
    }

    .creation__body {
        @apply flex-grow pb-5;

        @include sm {
            @apply pb-24;
        }
    }

    .creation__footer {
        @apply flex items-center justify-between py-4 px-5;

        @include sm {
            position: fixed;
            bottom: 0;
            width: 100%;
            z-index: 99;
            @apply bg-white border-t border-stroke;
        }
    }
}

.campaign-type {
    @apply flex flex-col border rounded-xl pt-8 pb-4 transition-all cursor-pointer hover:shadow;
    max-width: 100%;

    @include md_screen {
        max-width: 350px;
    }

    // max-width: 300px;
}

.campaign-type__gallery {
    height: auto;
    width: auto;
    max-height: 120px;
    max-width: 120px;
    height: 120px;
    width: 120px;
    aspect-ratio: 1/1;
    flex-shrink: 0;
    border-radius: 8px;
    margin-right: 8px;
    overflow: hidden;
}
</style>
