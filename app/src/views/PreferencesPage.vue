<script setup>
import QCard from '@/components/atoms/QCard.vue';
import QTabs from '@/components/atoms/QTabs.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputPassword from '@/components/atoms/forms/QInputPassword.vue';
import QInputTextarea from '@/components/atoms/forms/QInputTextarea.vue';
import QButton from '@/components/atoms/QButton.vue';
import { Form as VeeForm, Field } from 'vee-validate';
import { string as yupString, object as yupObject } from 'yup';

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

const passwordValidation = yupObject().shape({
    old_password: yupString()
        .required('Old password is required')
        .min(6, 'Old password must be at least 6 characters'),

    new_password: yupString()
        .required('New password is required')
        .min(6, 'New password must be at least 6 characters')
});

const updateEmailValidation = yupObject().shape({
    new_emai: yupString().required().email()
});
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
                                                                    class="inline-flex flex-col justify-center items-start space-y-2 relative"
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

                                                                    <div
                                                                        class="flex items-center space-x-2"
                                                                    >
                                                                        <label
                                                                            for="profile_img"
                                                                            class="w-20"
                                                                        >
                                                                            <QButton
                                                                                size="xs"
                                                                                block
                                                                                variant="secondary"
                                                                            >
                                                                                Change
                                                                            </QButton>
                                                                        </label>

                                                                        <label
                                                                            for="profile_img"
                                                                            class="w-20"
                                                                        >
                                                                            <QButton
                                                                                size="xs"
                                                                                block
                                                                                variant="secondary"
                                                                            >
                                                                                <span
                                                                                    class="text-red-500"
                                                                                    >Delete</span
                                                                                >
                                                                            </QButton>
                                                                        </label>
                                                                    </div>
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

                                                                    <div
                                                                        class="flex items-center space-x-2"
                                                                    >
                                                                        <label
                                                                            for="banner"
                                                                            class="w-20"
                                                                        >
                                                                            <QButton
                                                                                size="xs"
                                                                                block
                                                                                variant="secondary"
                                                                            >
                                                                                Change
                                                                            </QButton>
                                                                        </label>

                                                                        <div class="w-20">
                                                                            <QButton
                                                                                size="xs"
                                                                                block
                                                                                variant="secondary"
                                                                            >
                                                                                <span
                                                                                    class="text-red-500"
                                                                                    >Delete</span
                                                                                >
                                                                            </QButton>
                                                                        </div>
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

                        <template #account>
                            <div class="mt-10">
                                <div class="space-y-10">
                                    <VeeForm
                                        :validation-schema="updateEmailValidation"
                                        v-slot="{ meta }"
                                    >
                                        <div class="grid grid-cols-12 gap-x-10">
                                            <div class="col-span-9 space-y-6">
                                                <div class="space-y-2">
                                                    <h3 class="text-lg font-black leading-none">
                                                        Update Email
                                                    </h3>
                                                </div>

                                                <QCard paddings="padless">
                                                    <div class="p-5">
                                                        <div class="space-y-6">
                                                            <div class="grid grid-cols-2 gap-6">
                                                                <div class="space-y-3">
                                                                    <label
                                                                        for="current_email"
                                                                        class="text-sm font-semibold"
                                                                    >
                                                                        Current Email
                                                                    </label>
                                                                    <QInputText
                                                                        name="current_email"
                                                                        :value="'universtech@gmail.com'"
                                                                    />
                                                                </div>

                                                                <div class="space-y-3">
                                                                    <label
                                                                        for="new_email"
                                                                        class="text-sm font-semibold"
                                                                    >
                                                                        New Email
                                                                    </label>
                                                                    <QInputText
                                                                        name="new_email"
                                                                        placeholder="Enter new email here"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </QCard>
                                            </div>
                                            <div class="col-span-3">
                                                <div
                                                    class="space-y-2 flex flex-col justify-end h-full pb-5"
                                                >
                                                    <QButton block :enabled="meta.valid">
                                                        <span class="text-sm">Update Email</span>
                                                    </QButton>
                                                </div>
                                            </div>
                                        </div>
                                    </VeeForm>

                                    <hr />

                                    <div class="space-y-6">
                                        <h3 class="text-lg font-black leading-none">
                                            Social Media Connects
                                        </h3>

                                        <div class="grid grid-cols-12">
                                            <div class="col-span-6">
                                                <div class="space-y-3">
                                                    <button
                                                        class="border border-stroke pl-1 px-4 py-1 flex items-center justify-between rounded-full w-full"
                                                    >
                                                        <div class="flex items-center space-x-3">
                                                            <div
                                                                class="brand-icon w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                >
                                                                    <rect
                                                                        width="32"
                                                                        height="32"
                                                                        fill="url(#pattern0)"
                                                                    />
                                                                    <defs>
                                                                        <pattern
                                                                            id="pattern0"
                                                                            patternContentUnits="objectBoundingBox"
                                                                            width="1"
                                                                            height="1"
                                                                        >
                                                                            <use
                                                                                xlink:href="#image0"
                                                                                transform="scale(0.0025)"
                                                                            />
                                                                        </pattern>
                                                                        <image
                                                                            id="image0"
                                                                            width="400"
                                                                            height="400"
                                                                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAgAElEQVR4Ae2dbWhs21nHB5IDoqBHKZQWKgcLFqFgvJnU6vVlzpyLIK1tmFyRFpXoB1/wSxSUoh8M9OQefMEREdsiGoSrya1tU221L8llRPBDQci3fo34rTm3puXMvVdvAiPPntnJJLNnZu2911r7WWv9DoTJmey99lr//aznt5+1nrV2q8U/FEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFEABFECBeBQYjUb3n77Q7kz/vLn/iQfxtJCWoAAKoAAKzChw0Vl7kDv+b3Tbu/nP+aP24PbPxuj8kdWf01vld9v9/NqvPVrflDqddzbWZirMFyiAAiiAAn4UuAZEt70jDvrGaVuFgW24FJQ3BloOGQDjx364CgqgQAIKyNO6PLmLg336qH10/mjj1HLEUODUlUCou34mYMwA2d3YJnJJwOBpIgqgQDUFxEGei6PstvvjiEKJI7c7xGUDWKevdTf2n3bbOxKxVFObs1AABVAgUAUuOmv3JbIAFtYgeSpaXvzqz2/L8F6gZkG1UQAFUGBWAQGGRBfy5JzUMFRT0Ut3/SzTursBUGbNkW9QAAW0K3ATYSQ0b9EUMJZdV+ZTuu2+3BOBuXbboX4ogAKJKZBlRsm4/Hiy28ZYP2UsA0Plv7cHMofCcFdinZTmooAmBWTie5xGS5QRbHbYJDohy0tTz6IuKBCpAuNsqXb/PEsztTYJTLRROZqweA+ASaS9lmahQIMK5MNTQMOis9YAjEV16K6fPf2FD/QZ5mqw43FpFAhVgTxziqyphKAxHyinkkXHBHyovZl6o4AnBWRx2iTdlmGl+Q41WW2yRYwsYPTUG7kMCgSggDxZSlYOQ1REG8bJADLENc7kIi04gD5OFVHAugIyIU60ATSMoVEUkXXbF2JDzJVY754UiAI6Fcj2nMq2Nsd51nKeRQ416e/aA/bn0tnnqRUK1FKAYSpg6Q2WWTrwxnYtg+VkFECB5hUQcIy3BG9feHMgST+FA6prOwMkzTsAaoACVRSQMelst9su4Lh2aICt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"
                                                                        />
                                                                    </defs>
                                                                </svg>
                                                            </div>
                                                            <div class="space-x-1">
                                                                <span class="text-black font-bold"
                                                                    >Google</span
                                                                >
                                                                <span class="text-content"
                                                                    >(Not connected)</span
                                                                >
                                                            </div>
                                                        </div>

                                                        <div class="text-xl font-medium">
                                                            <i class="ri-add-fill"></i>
                                                        </div>
                                                    </button>

                                                    <button
                                                        class="border border-stroke pl-1 px-4 py-1 flex items-center justify-between rounded-full w-full"
                                                    >
                                                        <div class="flex items-center space-x-3">
                                                            <div
                                                                class="brand-icon w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full"
                                                            >
                                                                <img
                                                                    src="assets/img/logos/facebook.svg"
                                                                    class="w-6 h-6"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="space-x-1">
                                                                <span class="text-black font-bold"
                                                                    >Facebook</span
                                                                >
                                                                <span class="text-content"
                                                                    >(Not connected)</span
                                                                >
                                                            </div>
                                                        </div>

                                                        <div class="text-xl font-medium">
                                                            <i class="ri-add-fill"></i>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div class="space-y-6">
                                        <div class="space-y-2">
                                            <h3 class="text-lg font-black leading-none">
                                                Verified Account
                                            </h3>
                                            <p class="text-content">
                                                A verified badge means that Twibbonize has confirmed
                                                the account belongs to the person or brand it
                                                represents.
                                            </p>
                                        </div>
                                    </div>

                                    <hr />

                                    <div class="space-y-6">
                                        <div class="space-y-2">
                                            <h3
                                                class="text-lg font-black leading-none text-red-500"
                                            >
                                                Unhappy?
                                            </h3>

                                            <p class="text-content">
                                                We’ll be sad to see you leave, but if you want to
                                                permanently delete your account and all its data,
                                                here’s the place.
                                            </p>
                                        </div>

                                        <div>
                                            <QButton variant="danger">Delete Account</QButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template #password>
                            <div class="mt-10">
                                <VeeForm :validation-schema="passwordValidation" v-slot="{ meta }">
                                    <div class="grid grid-cols-12 gap-x-10">
                                        <div class="col-span-9 space-y-6">
                                            <div class="space-y-2">
                                                <h3 class="text-lg font-black leading-none">
                                                    Change Password
                                                </h3>
                                            </div>

                                            <QCard paddings="padless">
                                                <div class="p-5">
                                                    <div class="space-y-6">
                                                        <div class="space-y-3">
                                                            <label
                                                                for="old_password"
                                                                class="text-sm font-semibold"
                                                            >
                                                                Old Password
                                                            </label>
                                                            <QInputPassword
                                                                placeholder="Enter old password here"
                                                                name="old_password"
                                                            />
                                                        </div>

                                                        <div class="space-y-3">
                                                            <label
                                                                for="new_password"
                                                                class="text-sm font-semibold"
                                                            >
                                                                New Password
                                                            </label>
                                                            <QInputPassword
                                                                placeholder="Enter new password here"
                                                                name="new_password"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </QCard>
                                        </div>
                                        <div class="col-span-3">
                                            <div class="space-y-2 sticky top-60">
                                                <QButton block :enabled="meta.valid">
                                                    <span class="text-sm">Update Password</span>
                                                </QButton>
                                            </div>
                                        </div>
                                    </div>
                                </VeeForm>
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
