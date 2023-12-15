<script setup>
import QCard from '@/components/atoms/QCard.vue';
import QTabs from '@/components/atoms/QTabs.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputTextarea from '@/components/atoms/forms/QInputTextarea.vue';
import QButton from '@/components/atoms/QButton.vue';
import { Field } from 'vee-validate';

const tabs = [
    {
        title: 'Public Profile',
        slot: 'profile'
    },
    {
        title: 'Account',
        slot: 'account'
    },
    {
        title: 'Password',
        slot: 'password'
    },
    {
        title: 'Notification',
        slot: 'notification'
    },
    {
        title: 'Billing',
        slot: 'billing'
    }
];
</script>

<template>
    <div class="page border-b border-stroke">
        <div class="py-6 md:py-12">
            <div class="container max-w-5xl px-5 md:px-0">
                <QCard paddings="padless">
                    <div class="p-5">
                        <div class="flex flex-col md:flex-row items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <img
                                    class="w-16 h-16 rounded-full"
                                    src="/assets/img/sample/sample-avatar-1.jpg"
                                    alt="Universe Tech"
                                />

                                <div class="profile-creator__ids">
                                    <h1 class="text-xl font-bold">Universe Tech</h1>
                                    <div class="text-sm text-content">@universetech</div>
                                    <div class="text-sm text-content">universtech@gmail.com</div>
                                </div>
                            </div>

                            <div
                                class="package text-white h-24 w-64 rounded-xl py-3 px-5 flex flex-col justify-between"
                            >
                                <h4 class="font-black text-xl">Free</h4>

                                <div class="flex">
                                    <a
                                        class="flex items-center space-x-2 cursor-pointer"
                                        @click="showAbout = true"
                                    >
                                        <span class="text-sm font-semibold">Upgrade</span>
                                        <i class="ri-arrow-right-line font-semibold ri-xs"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </QCard>

                <div class="space-y-4 mt-6">
                    <QTabs :tabs="tabs" variant="bordered">
                        <template #profile>
                            <div class="mt-10">
                                <div class="grid grid-cols-12 gap-x-10">
                                    <div class="col-span-9 space-y-6">
                                        <div class="space-y-2">
                                            <h3 class="text-lg font-black leading-none">
                                                Your Profile
                                            </h3>
                                            <p class="text-content">
                                                Add more information about you here.
                                            </p>
                                        </div>

                                        <QCard paddings="padless">
                                            <div class="p-5">
                                                <div class="space-y-6">
                                                    <div class="grid grid-cols-2 gap-1">
                                                        <Field
                                                            name="avatar"
                                                            v-slot="{ handleChange, handleBlur }"
                                                            as="div"
                                                        >
                                                            <div class="space-y-3">
                                                                <div class="text-sm font-semibold">
                                                                    Profile Image
                                                                </div>

                                                                <div
                                                                    class="inline-flex flex-col justify-center items-center space-y-2 relative"
                                                                >
                                                                    <input
                                                                        type="file"
                                                                        id="profile_img"
                                                                        class="hidden"
                                                                        @change="handleChange"
                                                                        @blur="handleBlur"
                                                                        accept=".jpg, .jpeg, .png"
                                                                    />

                                                                    <div class="avatar">
                                                                        <div
                                                                            class="avatar__wrapper"
                                                                        >
                                                                            <img
                                                                                src="/assets/img/sample/sample-avatar-1.jpg"
                                                                                alt="Universe Tech"
                                                                                class="avatar__img"
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <label class="w-20">
                                                                        <QButton
                                                                            size="xs"
                                                                            block
                                                                            variant="secondary"
                                                                        >
                                                                            Change
                                                                        </QButton>
                                                                    </label>
                                                                </div>

                                                                <p class="text-xs text-content">
                                                                    PNG or JPG. Recommended size:
                                                                    300x300px
                                                                </p>
                                                            </div>
                                                        </Field>

                                                        <Field
                                                            name="banner"
                                                            v-slot="{ handleChange, handleBlur }"
                                                        >
                                                            <div class="space-y-3">
                                                                <div class="text-sm font-semibold">
                                                                    Banner
                                                                </div>

                                                                <div
                                                                    class="inline-flex flex-col space-y-2 relative"
                                                                >
                                                                    <input
                                                                        type="file"
                                                                        id="banner"
                                                                        class="hidden"
                                                                        @change="handleChange"
                                                                        @blur="handleBlur"
                                                                        accept=".jpg, .jpeg, .png"
                                                                    />

                                                                    <div class="banner">
                                                                        <div
                                                                            class="banner__wrapper"
                                                                        >
                                                                            <img
                                                                                src="/assets/img/banners/banner-1.jpg"
                                                                                alt="Universe Tech"
                                                                                class="banner__img"
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div class="w-20">
                                                                        <QButton
                                                                            size="xs"
                                                                            block
                                                                            variant="secondary"
                                                                        >
                                                                            Change
                                                                        </QButton>
                                                                    </div>
                                                                </div>

                                                                <p class="text-xs text-content">
                                                                    PNG or JPG. Recommended size:
                                                                    1280x320px
                                                                </p>
                                                            </div>
                                                        </Field>
                                                    </div>

                                                    <div class="space-y-3">
                                                        <label
                                                            for="username"
                                                            class="text-sm font-semibold"
                                                            >Username</label
                                                        >
                                                        <QInputText
                                                            placeholder="username"
                                                            name="username"
                                                            :value="'universetech'"
                                                        />

                                                        <p class="text-xs text-content">
                                                            Your Twibbonize URL:
                                                            https://twb.nz/@universetech
                                                        </p>
                                                    </div>

                                                    <div class="space-y-3">
                                                        <label
                                                            for="display_name"
                                                            class="text-sm font-semibold"
                                                            >Display Name</label
                                                        >
                                                        <QInputText
                                                            placeholder="display_name"
                                                            name="display_name"
                                                            :value="'Universe Tech'"
                                                        />
                                                    </div>

                                                    <div class="space-y-3">
                                                        <label
                                                            for="bio"
                                                            class="text-sm font-semibold"
                                                            >Bio</label
                                                        >
                                                        <QInputTextarea name="bio" />
                                                    </div>

                                                    <div class="space-y-3">
                                                        <label
                                                            for="website"
                                                            class="text-sm font-semibold"
                                                            >Website</label
                                                        >
                                                        <QInputText
                                                            placeholder="website"
                                                            name="website"
                                                            :value="'wwww.universetech.com'"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </QCard>
                                    </div>
                                    <div class="col-span-3">
                                        <div class="space-y-2 sticky top-60">
                                            <QButton block>
                                                <span class="text-sm">Save Changes</span>
                                            </QButton>

                                            <p class="text-content text-xs">
                                                If you have made any edits, remember to save before
                                                you leave this page.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </QTabs>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.package {
    background-image: url('/assets/img/brandings/free.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.avatar {
    @apply h-24 w-24 rounded-full flex items-center justify-center border border-stroke flex-shrink-0 p-1;

    &__wrapper {
        @apply h-full w-full rounded-full;
    }

    &__img {
        @apply w-full h-full aspect-square rounded-full;
    }
}

.banner {
    @apply rounded-xl h-24 overflow-hidden flex items-center justify-center border border-stroke flex-shrink-0 p-1;

    &__wrapper {
        @apply w-full h-full rounded-lg;
        aspect-ratio: 16/4;
    }

    &__img {
        @apply w-full h-full rounded-lg object-center object-cover;
    }
}
</style>
