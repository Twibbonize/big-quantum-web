<script setup>
import { ref } from 'vue';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';

const filterCategory = ref(null);
const categoryRadio = ref('decorative');
</script>

<template>
    <RadioGroup v-model="categoryRadio" class="flex-grow flex-shrink-0 md:flex-grow-0">
        <div class="tpl__categories">
            <RadioGroupOption value="decorative" v-slot="{ checked }" as="template">
                <div :class="['tpl__category', checked && 'tpl__category--checked']">
                    <i class="ri-collage-line hidden sm:inline"></i>
                    <span class="tpl__category__name">Decorative</span>
                </div>
            </RadioGroupOption>

            <RadioGroupOption value="music" v-slot="{ checked }" as="template">
                <div :class="['tpl__category', checked && 'tpl__category--checked']">
                    <i class="ri-music-2-line hidden sm:inline"></i>
                    <span class="tpl__category__name">Music</span>
                </div>
            </RadioGroupOption>

            <RadioGroupOption value="more" v-slot="{ active, checked }" as="template">
                <div :class="['tpl__category', checked && 'tpl__category--checked']">
                    <i class="ri-more-2-line hidden sm:inline"></i>
                    <span class="tpl__category__name">More</span>

                    <Transition
                        enter-active-class="transition duration-200 ease-out"
                        enter-from-class="translate-y-1 opacity-0"
                        enter-to-class="translate-y-0 opacity-100"
                        leave-active-class="transition duration-150 ease-in"
                        leave-from-class="translate-y-0 opacity-100"
                        leave-to-class="translate-y-1 opacity-0"
                    >
                        <div
                            v-show="active"
                            class="absolute top-0 mt-10 left-0 -translate-x-1/2 z-10 w-48 transform px-4 sm:px-0 lg:max-w-3xl"
                        >
                            <div
                                class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 bg-white"
                            >
                                <RadioGroup v-model="filterCategory">
                                    <div class="p-1">
                                        <RadioGroupOption value="socials" v-slot="{ checked }">
                                            <div
                                                :class="[
                                                    'tpl__more-category',
                                                    checked && 'tpl__more-category--checked'
                                                ]"
                                            >
                                                <i class="ri-empathize-line"></i>
                                                <span class="tpl__more-category__name"
                                                    >Socials</span
                                                >
                                            </div>
                                        </RadioGroupOption>

                                        <RadioGroupOption value="sports" v-slot="{ checked }">
                                            <div
                                                :class="[
                                                    'tpl__more-category',
                                                    checked && 'tpl__more-category--checked'
                                                ]"
                                            >
                                                <i class="ri-bike-line"></i>
                                                <span class="tpl__more-category__name">Sports</span>
                                            </div>
                                        </RadioGroupOption>

                                        <RadioGroupOption value="national-day" v-slot="{ checked }">
                                            <div
                                                :class="[
                                                    'tpl__more-category',
                                                    checked && 'tpl__more-category--checked'
                                                ]"
                                            >
                                                <i class="ri-calendar-event-line"></i>
                                                <span class="tpl__more-category__name"
                                                    >National Day</span
                                                >
                                            </div>
                                        </RadioGroupOption>

                                        <RadioGroupOption
                                            value="goverment-politics"
                                            v-slot="{ checked }"
                                        >
                                            <div
                                                :class="[
                                                    'tpl__more-category',
                                                    checked && 'tpl__more-category--checked'
                                                ]"
                                            >
                                                <i class="ri-government-line"></i>
                                                <span class="tpl__more-category__name"
                                                    >Goverment & Politics</span
                                                >
                                            </div>
                                        </RadioGroupOption>

                                        <RadioGroupOption value="celebrations" v-slot="{ checked }">
                                            <div
                                                :class="[
                                                    'tpl__more-category',
                                                    checked && 'tpl__more-category--checked'
                                                ]"
                                            >
                                                <i class="ri-bard-line"></i>
                                                <span class="tpl__more-category__name"
                                                    >Celebrations</span
                                                >
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                    </Transition>
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<style scoped lang="scss">
.tpl__categories {
    @apply flex items-center rounded-full py-1 px-1 space-x-1 flex-grow bg-gray-150;
}

.tpl__category {
    @apply flex items-center justify-center text-content rounded-full cursor-pointer transition-colors flex-grow relative;
    padding: 6px 16px;
    flex: 1 1 0;
    width: 0;

    @include md_screen {
        flex: 0 0 0;
        width: auto;
    }

    &:hover {
        @apply bg-gray-200;
    }

    &.tpl__category--checked {
        @apply bg-white text-black;
    }

    .tpl__category__name {
        color: currentColor;
        @apply font-medium text-sm ml-0 sm:ml-1;

        @include xs {
            font-size: 12px;
        }
    }
}

.tpl__more-category {
    @apply p-2 flex items-center space-x-1 text-black/60 hover:text-black hover:bg-gray-150 cursor-pointer rounded-lg mb-1;

    &.tpl__more-category--checked {
        @apply bg-gray-150 text-black;
    }

    .tpl__more-category__name {
        @apply font-semibold text-sm;

        @include xs {
            @apply text-xs;
        }
    }
}
</style>
