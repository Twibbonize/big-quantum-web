<script setup>
import QButton from '@/components/atoms/QButton.vue';
import QModal from '@/components/atoms/QModal.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputPassword from '@/components/atoms/forms/QInputPassword.vue';
import QSeparator from '@/components/atoms/QSeparator.vue';
import { Form as VeeForm } from 'vee-validate';
import { computed, inject, ref } from 'vue';
import { object as yupObject, string as yupString } from 'yup';
import { authNative } from '@/apis';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
const authStore = useAuthStore();
const { modal } = storeToRefs(authStore);
const { login, logout } = authStore;

const router = useRouter();

const isMobile = inject('isMobile');

const modalPosition = computed(() => {
    return isMobile.value ? 'screen' : 'center';
});

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

const handleAuthNative = async (formValues) => {
    try {
        const data = await authNative(formValues);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const handleLogin = () => {
    login();
    router.push({ name: 'own-profile' });
    modal.value.show = false;
};
</script>

<template>
    <QModal
        :show="modal.show"
        :position="modalPosition"
        size="lg"
        @close="modal.show = false"
        :closeBtn="false"
    >
        <template #body>
            <div class="login">
                <div class="absolute top-5 lg:top-8 right-10">
                    <div class="fixed z-10 -translate-x-1/2 lg:-translate-x-full">
                        <QButton variant="subtle" size="sm" square @click="modal.show = false">
                            <i class="ri-close-fill ri-xl"></i>
                        </QButton>
                    </div>
                </div>

                <template v-if="modal.authOption === 'sign-in'">
                    <div class="login__wrapper">
                        <VeeForm
                            :validation-schema="signInValidation"
                            class="login__inner"
                            v-slot="{ meta, values }"
                        >
                            <div class="space-y-10">
                                <h1 class="text-2xl font-bold">Log in</h1>
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

                                <div class="space-y-6">
                                    <div class="space-y-3">
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

                                    <div class="space-y-3">
                                        <label for="password" class="text-sm font-semibold"
                                            >Password</label
                                        >
                                        <QInputPassword
                                            name="password"
                                            placeholder="Enter password"
                                            autocomplate="current-password"
                                        />
                                    </div>

                                    <div class="flex">
                                        <a href="#" class="link text-sm font-semibold"
                                            >Forgot your password?</a
                                        >
                                    </div>

                                    <QButton block :enabled="meta.valid" @click="handleLogin">
                                        Log In
                                    </QButton>

                                    <p class="text-center text-sm text-content">
                                        Don't have an account?
                                        <a
                                            class="link font-semibold"
                                            @click="modal.authOption = 'sign-up'"
                                            >Sign up</a
                                        >.
                                    </p>
                                </div>
                            </div>
                        </VeeForm>
                    </div>
                </template>

                <template v-if="modal.authOption === 'sign-up'">
                    <div class="login__wrapper">
                        <VeeForm
                            :validation-schema="signUpValidation"
                            class="login__inner"
                            v-slot="{ meta }"
                        >
                            <div class="space-y-10">
                                <h1 class="text-2xl font-black">Sign Up</h1>

                                <div class="space-y-4 w-full">
                                    <QButton
                                        block
                                        variant="secondary"
                                        @click="
                                            [
                                                $router.push({ name: 'own-profile' }),
                                                (modal.show = false)
                                            ]
                                        "
                                    >
                                        <img
                                            src="/assets/img/logos/google.svg"
                                            class="w-4 h-4"
                                            alt="Google Logo"
                                        />
                                        <span class="ml-2">Sign Up With Google</span>
                                    </QButton>

                                    <QButton
                                        variant="secondary"
                                        block
                                        @click="
                                            [
                                                $router.push({ name: 'own-profile' }),
                                                (modal.show = false)
                                            ]
                                        "
                                    >
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
                                    <div class="space-y-3">
                                        <label for="name" class="text-sm font-semibold">
                                            Name
                                        </label>

                                        <QInputText
                                            name="name"
                                            type="text"
                                            placeholder="Enter name"
                                        />
                                    </div>

                                    <div class="space-y-3">
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
                                        <div class="space-y-3">
                                            <label
                                                for="sign_up_password"
                                                class="text-sm font-semibold"
                                                >Password</label
                                            >
                                            <QInputPassword
                                                id="sign_up_password"
                                                name="password"
                                                placeholder="Enter password"
                                                autocomplete="new-password"
                                            />
                                        </div>

                                        <div class="space-y-3">
                                            <label
                                                for="confirm_password"
                                                class="text-sm font-semibold"
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

                                    <QButton
                                        block
                                        :enabled="meta.valid"
                                        @click="
                                            [
                                                $router.push({ name: 'own-profile' }),
                                                (modal.show = false)
                                            ]
                                        "
                                    >
                                        Sign Up
                                    </QButton>

                                    <p class="text-center text-sm text-content">
                                        Already have an account?
                                        <a
                                            class="link font-semibold"
                                            @click="modal.authOption = 'sign-in'"
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
    </QModal>
</template>

<style scoped lang="scss">
.login {
    @apply rounded-3xl h-full relative;

    .login__wrapper {
        @apply relative;
    }

    .login__left {
        height: 36vh;
        min-height: 300px;

        @apply flex-grow flex-shrink-0 rounded-l-3xl;

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @include md_screen {
            height: 100%;
            // @apply w-0;
        }
    }

    .login__inner {
        @apply p-5 overflow-auto;

        @include lg_screen {
            @apply p-10;
        }
    }

    .login__right {
        @apply flex-grow flex-shrink-0 overflow-auto;

        @include md_screen {
            @apply h-full;
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
