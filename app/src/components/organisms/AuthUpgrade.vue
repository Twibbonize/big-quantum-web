<script setup>
import { ref } from 'vue';
import QButton from '@/components/atoms/QButton.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputPassword from '@/components/atoms/forms/QInputPassword.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';

import { Form as VeeForm } from 'vee-validate';
import { object as yupObject, string as yupString } from 'yup';

const authOption = ref('sign-in');

const signInValidation = yupObject().shape({
    email: yupString().email().required(),
    password: yupString().required()
});

const signUpValidation = yupObject().shape({
    name: yupString().required(),
    email: yupString().email().required(),
    password: yupString().required(),
    confirm_password: yupString().required()
});

const handleLogin = () => {};
</script>

<template>
    <div class="login">
        <template v-if="authOption === 'sign-in'">
            <div class="login__wrapper">
                <VeeForm
                    :validation-schema="signInValidation"
                    class="login__inner"
                    v-slot="{ meta, values }"
                >
                    <div class="space-y-5">
                        <h1 class="text-2xl font-semibold text-center">Log in</h1>
                        <div class="space-y-4 w-full">
                            <QButton block variant="secondary" @click="handleLogin">
                                <img
                                    src="/assets/img/logos/google.svg"
                                    class="w-4 h-4"
                                    alt="Google Logo"
                                />
                                <span class="ml-2">Sign In With Google</span>
                            </QButton>

                            <QButton variant="secondary" block @click="handleLogin">
                                <img
                                    src="/assets/img/logos/facebook.svg"
                                    class="w-4 h-4"
                                    alt="Facebook Logo"
                                />
                                <span class="ml-2">Sign In With Facebook</span>
                            </QButton>
                        </div>

                        <QSeparator alignment="center"> or login with email </QSeparator>

                        <div class="space-y-4">
                            <div class="space-y-2">
                                <label for="sign_in_email" class="text-sm font-semibold"
                                    >Email</label
                                >

                                <QInputText
                                    id="sign_in_email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    autocomplete="username"
                                />
                            </div>

                            <div class="space-y-2">
                                <label for="password" class="text-sm font-semibold">Password</label>
                                <QInputPassword
                                    name="password"
                                    placeholder="Enter password"
                                    autocomplate="current-password"
                                />

                                <div class="flex">
                                    <a href="#" class="link text-sm font-semibold"
                                        >Forgot your password?</a
                                    >
                                </div>
                            </div>

                            <QButton block :enabled="meta.valid" @click="handleLogin">
                                Log In
                            </QButton>

                            <p class="text-center text-sm text-content">
                                Don't have an account?
                                <a class="link font-semibold" @click="authOption = 'sign-up'"
                                    >Sign up</a
                                >.
                            </p>
                        </div>
                    </div>
                </VeeForm>
            </div>
        </template>

        <template v-if="authOption === 'sign-up'">
            <div class="login__wrapper">
                <VeeForm
                    :validation-schema="signUpValidation"
                    class="login__inner"
                    v-slot="{ meta }"
                >
                    <div class="space-y-10">
                        <h1 class="text-2xl font-semibold">Sign Up</h1>

                        <div class="space-y-4 w-full">
                            <QButton block variant="secondary" @click="handleLogin">
                                <img
                                    src="/assets/img/logos/google.svg"
                                    class="w-4 h-4"
                                    alt="Google Logo"
                                />
                                <span class="ml-2">Sign Up With Google</span>
                            </QButton>

                            <QButton variant="secondary" block @click="handleLogin">
                                <img
                                    src="/assets/img/logos/facebook.svg"
                                    class="w-4 h-4"
                                    alt="Facebook Logo"
                                />
                                <span class="ml-2">Sign Up With Facebook</span>
                            </QButton>
                        </div>

                        <QSeparator alignment="center"> or sign up with email </QSeparator>

                        <div class="space-y-6">
                            <div class="space-y-2">
                                <label for="name" class="text-sm font-semibold"> Name </label>

                                <QInputText name="name" type="text" placeholder="Enter name" />
                            </div>

                            <div class="space-y-2">
                                <label for="sign_up_email" class="text-sm font-semibold">
                                    Email
                                </label>

                                <QInputText
                                    id="sign_up_email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    autocomplete="username"
                                />
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label for="sign_up_password" class="text-sm font-semibold"
                                        >Password</label
                                    >
                                    <QInputPassword
                                        id="sign_up_password"
                                        name="password"
                                        placeholder="Enter password"
                                        autocomplete="new-password"
                                    />
                                </div>

                                <div class="space-y-2">
                                    <label for="confirm_password" class="text-sm font-semibold"
                                        >Confirm Password</label
                                    >
                                    <QInputPassword
                                        name="confirm_password"
                                        placeholder="Re-enter your password"
                                        autocomplete="new-password"
                                    />
                                </div>
                            </div>

                            <p class="text-sm text-center text-content max-w-md mx-auto">
                                By clicking “Sign up”, you have read and agree with our
                                <a
                                    href="https://about.twibbonize.com/terms"
                                    target="_blank"
                                    class="link"
                                    >Terms</a
                                >
                                &
                                <a
                                    href="https://about.twibbonize.com/privacy-policy"
                                    target="_blank"
                                    class="link"
                                    >Privacy Policy</a
                                >.
                            </p>

                            <QButton block :enabled="meta.valid" @click="handleLogin">
                                Sign Up
                            </QButton>

                            <p class="text-center text-sm text-content">
                                Already have an account?
                                <a class="link font-semibold" @click="authOption = 'sign-in'"
                                    >Log in</a
                                >.
                            </p>
                        </div>
                    </div>
                </VeeForm>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
.login {
    @apply h-full relative;

    .login__wrapper {
        @apply relative;
    }

    .login__inner {
        @apply px-6 py-10 overflow-auto;

        @include lg_screen {
            @apply px-10 py-10;
        }
    }

    .login__separator {
        @apply flex items-center;

        &__text {
            @apply text-sm text-content;
        }

        &__line {
            @apply flex-grow bg-stroke ml-3;
            height: 1px;
            width: 0;
            transform: translateY(2px);
        }
    }
}
</style>
