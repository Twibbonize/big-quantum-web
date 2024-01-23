<script setup>
import { ref } from 'vue';
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import QButton from '@/components/atoms/QButton.vue';

const frames = [
    '/assets/img/frames/hanoi-art-frame-1.png',
    '/assets/img/frames/hanoi-art-frame-2.png',
    '/assets/img/frames/hanoi-art-frame-3.png',
    '/assets/img/frames/hanoi-art-frame-4.png'
];

const selectedFrames = ref(frames[0]);
</script>
<template>
    <LayoutMain navbarColor="transparent" :navbarShadow="false">
        <div class="page campaign">
            <div class="container px-4 lg:px-0 py-24">
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-3">
                        <div class="campaign__frames">
                            <div class="campaign__frames__stage">
                                <img :src="selectedFrames" class="campaign__frames__stage__image">
                            </div>

                            <div class="campaign__frames__card">
                                <RadioGroup v-model="selectedFrames">
                                    <div class="campaign__frames__options">
                                        <RadioGroupOption v-for="(frame, i) in frames" :key="i" :value="frame"
                                            v-slot="{ checked }">
                                            <div
                                                :class="['campaign__frames__option', checked && 'campaign__frames__option--checked']">
                                                <img :src="frame" :alt="i">
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup>

                                <div class="campaign__frames__action">
                                    <QButton block>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                            fill="none">
                                            <path
                                                d="M20 4.875H17.6019L16.4375 3.12563C16.3346 2.97138 16.1952 2.84497 16.0316 2.75763C15.868 2.67029 15.6854 2.62473 15.5 2.625H9.5C9.31458 2.62473 9.13197 2.67029 8.96841 2.75763C8.80484 2.84497 8.66541 2.97138 8.5625 3.12563L7.39719 4.875H5C4.30381 4.875 3.63613 5.15156 3.14384 5.64385C2.65156 6.13613 2.375 6.80381 2.375 7.5V18C2.375 18.6962 2.65156 19.3639 3.14384 19.8562C3.63613 20.3484 4.30381 20.625 5 20.625H20C20.3447 20.625 20.6861 20.5571 21.0045 20.4252C21.323 20.2933 21.6124 20.0999 21.8562 19.8562C22.0999 19.6124 22.2933 19.323 22.4252 19.0045C22.5571 18.6861 22.625 18.3447 22.625 18V7.5C22.625 7.15528 22.5571 6.81394 22.4252 6.49546C22.2933 6.17698 22.0999 5.8876 21.8562 5.64385C21.6124 5.40009 21.323 5.20674 21.0045 5.07482C20.6861 4.9429 20.3447 4.875 20 4.875ZM20.375 18C20.375 18.0995 20.3355 18.1948 20.2652 18.2652C20.1948 18.3355 20.0995 18.375 20 18.375H5C4.90054 18.375 4.80516 18.3355 4.73484 18.2652C4.66451 18.1948 4.625 18.0995 4.625 18V7.5C4.625 7.40055 4.66451 7.30516 4.73484 7.23484C4.80516 7.16451 4.90054 7.125 5 7.125H8C8.18542 7.12528 8.36803 7.07972 8.53159 6.99237C8.69516 6.90503 8.83459 6.77862 8.9375 6.62438L10.1019 4.875H14.8972L16.0625 6.62438C16.1654 6.77862 16.3048 6.90503 16.4684 6.99237C16.632 7.07972 16.8146 7.12528 17 7.125H20C20.0995 7.125 20.1948 7.16451 20.2652 7.23484C20.3355 7.30516 20.375 7.40055 20.375 7.5V18ZM12.5 7.875C11.61 7.875 10.74 8.13892 9.99993 8.63339C9.25991 9.12785 8.68314 9.83066 8.34254 10.6529C8.00195 11.4752 7.91283 12.38 8.08647 13.2529C8.2601 14.1258 8.68868 14.9276 9.31802 15.557C9.94736 16.1863 10.7492 16.6149 11.6221 16.7885C12.495 16.9622 13.3998 16.8731 14.2221 16.5325C15.0443 16.1919 15.7471 15.6151 16.2416 14.8751C16.7361 14.135 17 13.265 17 12.375C16.9988 11.1819 16.5243 10.038 15.6806 9.19439C14.837 8.35075 13.6931 7.87624 12.5 7.875ZM12.5 14.625C12.055 14.625 11.62 14.493 11.25 14.2458C10.88 13.9986 10.5916 13.6472 10.4213 13.236C10.251 12.8249 10.2064 12.3725 10.2932 11.936C10.38 11.4996 10.5943 11.0987 10.909 10.784C11.2237 10.4693 11.6246 10.2551 12.061 10.1682C12.4975 10.0814 12.9499 10.126 13.361 10.2963C13.7722 10.4666 14.1236 10.755 14.3708 11.125C14.618 11.495 14.75 11.93 14.75 12.375C14.75 12.9717 14.5129 13.544 14.091 13.966C13.669 14.3879 13.0967 14.625 12.5 14.625Z"
                                                fill="#1B1B1B" />
                                        </svg>
                                        <span class="ml-1 font-bold">Upload Your Photo</span>
                                    </QButton>
                                </div>
                            </div>
                        </div>


                        <div class="campaign__detail">
                            <div class="campaign__detail__title"></div>
                            <div class="campaign__detail__description"></div>
                            <div class="campaign__detail__creator"></div>
                            <div class="campaign__detail__meta"></div>
                            <div class="campaign__detail__actions"></div>
                        </div>
                    </div>

                    <div class="col-span-9">
                        <div class="campaign__posts">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LayoutMain>
</template>


<style scoped lang="scss">
.page {
    background: url('/assets/img/background/bg-default.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}


.campaign {



    .campaign__frames {

        .campaign__frames__stage {
            @apply z-10 relative bg-white p-2 flex items-center mx-auto rounded-xl;
            width: fit-content;
            max-width: 94%;
            box-shadow: 0px 3.972px 3.972px 0px rgba(0, 0, 0, 0.25);

            .campaign__frames__stage__image {
                @apply rounded-xl;
                max-width: 100%;
            }
        }

        .campaign__frames__card {
            @apply px-2.5 pt-12 pb-2.5 -mt-4 z-0 bg-white relative rounded-3xl space-y-4;


            @include before {
                @apply w-full bg-light border border-white top-0 left-0 rounded-3xl;
                box-shadow: 0px 5.064px 25.321px 0px rgba(0, 0, 0, 0.10);
                height: 28px
            }
        }

        // .campaign__frames__stage {
        //     @apply absolute;
        // }

        .campaign__frames__options {
            @apply flex items-center justify-center space-x-4;
        }

        .campaign__frames__option {
            @apply h-14 w-14 rounded-lg p-2 border border-stroke bg-white transition-colors duration-200;

            &--checked {
                @apply border-main bg-gray-200;
            }
        }
    }


    .campaign__posts {
        @apply h-full w-full bg-white;
    }


}</style>