<script setup>
import QButton from '@/components/atoms/QButton.vue';
import QModal from '@/components/atoms/QModal.vue';
import QInputText from '@/components/atoms/forms/QInputText.vue';
import QInputPassword from '@/components/atoms/forms/QInputPassword.vue';
import { Form as VeeForm } from 'vee-validate';
import { computed, inject, ref } from 'vue';
import { object as yupObject, string as yupString } from 'yup';
import { authNative } from '@/apis';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStore';
const authStore = useAuthStore();
const { modal } = storeToRefs(authStore);

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
</script>

<template>
    <QModal :show="modal.show" :position="modalPosition" size="lg">
        <template #body>
            <div class="login">
                <div v-show="modal.authOption === 'sign-in'" class="login__wrapper">
                    <div class="login__close">
                        <QButton variant="black" size="sm" square @click="modal.show = false">
                            <i class="ri-close-fill ri-lg"></i>
                        </QButton>
                    </div>

                    <div class="login__left">
                        <div class="login__inner h-full">
                            <div class="flex flex-col h-full justify-between">
                                <div class="flex items-end justify-between">
                                    <img
                                        src="/assets/img/logos/twibbonize-logo-black.svg"
                                        class="mt-4 h-6"
                                        alt="Twibbonize"
                                    />
                                </div>

                                <div class="text-base">
                                    <span class="font-medium">Doesn't have a account yet? </span>
                                    <a
                                        class="link font-semibold"
                                        @click="modal.authOption = 'sign-up'"
                                        >Sign Up</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="login__right">
                        <VeeForm
                            :validation-schema="signInValidation"
                            class="login__inner"
                            v-slot="{ meta, values }"
                        >
                            <div class="space-y-">
                                <h1 class="text-2xl font-black">Sign In</h1>

                                <div class="space-y-4">
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

                                    <QButton
                                        block
                                        :enabled="meta.valid"
                                        @click="() => handleAuthNative(values)"
                                    >
                                        Sign In
                                    </QButton>

                                    <div class="flex justify-end">
                                        <a href="#" class="link text-sm font-medium"
                                            >Forgot your password?</a
                                        >
                                    </div>
                                </div>

                                <div class="space-y-3">
                                    <div class="text-sm font-medium">Or sign in with</div>

                                    <div class="flex space-x-3">
                                        <QButton variant="secondary">
                                            <img
                                                src="/assets/img/logos/google.svg"
                                                class="w-4 h-4"
                                                alt="Google Logo"
                                            />
                                            <span class="ml-2 font-medium">Google</span>
                                        </QButton>

                                        <QButton variant="secondary">
                                            <img
                                                src="/assets/img/logos/facebook.svg"
                                                class="w-4 h-4"
                                                alt="Facebook Logo"
                                            />
                                            <span class="ml-2 font-medium">Facebook</span>
                                        </QButton>
                                    </div>
                                </div>
                            </div>
                        </VeeForm>
                    </div>
                </div>

                <div v-show="modal.authOption === 'sign-up'" class="login__wrapper">
                    <div class="login__close">
                        <QButton variant="black" size="sm" square @click="modal.show = false">
                            <i class="ri-close-fill ri-lg"></i>
                        </QButton>
                    </div>

                    <div class="login__left">
                        <div class="login__inner h-full">
                            <div class="flex flex-col h-full justify-between">
                                <div class="flex items-end justify-between">
                                    <img
                                        src="/assets/img/logos/twibbonize-logo-black.svg"
                                        class="mt-4 h-6"
                                        alt="Twibbonize"
                                    />
                                </div>

                                <div class="text-base">
                                    <span class="font-medium">Already have an account? </span>
                                    <a
                                        class="link font-semibold"
                                        @click="modal.authOption = 'sign-in'"
                                        >Sign in</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="login__right">
                        <VeeForm
                            :validation-schema="signUpValidation"
                            class="login__inner"
                            v-slot="{ meta }"
                        >
                            <div class="space-y-8">
                                <h1 class="text-2xl font-black">Sign Up</h1>

                                <div class="space-y-4">
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

                                    <div class="grid grid-cols-2 gap-3">
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

                                    <QButton block :enabled="meta.valid"> Sign Up </QButton>

                                    <p class="text-sm text-content">
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
                                        >
                                    </p>
                                </div>

                                <div class="space-y-3">
                                    <div class="text-sm font-medium">Or sign up with</div>

                                    <div class="flex space-x-3">
                                        <QButton variant="secondary">
                                            <img
                                                src="/assets/img/logos/google.svg"
                                                class="w-4 h-4"
                                                alt="Google Logo"
                                            />
                                            <span class="ml-2 text-sm font-medium">Google</span>
                                        </QButton>

                                        <QButton variant="secondary">
                                            <img
                                                src="/assets/img/logos/facebook.svg"
                                                class="w-4 h-4"
                                                alt="Facebook Logo"
                                            />
                                            <span class="ml-2 text-sm font-medium">Facebook</span>
                                        </QButton>
                                    </div>
                                </div>
                            </div>
                        </VeeForm>
                    </div>
                </div>
            </div>
        </template>
    </QModal>
</template>

<style scoped lang="scss">
.login {
    @apply h-full bg-white rounded-3xl;

    .login__wrapper {
        @apply relative flex flex-col h-full;

        @include md_screen {
            @apply grid grid-cols-2;
        }
    }

    .login__close {
        @apply fixed right-5 top-5;

        @include md_screen {
            @apply absolute;
        }
    }

    .login__left {
        height: 36vh;
        min-height: 300px;

        @apply flex-grow flex-shrink-0 rounded-l-3xl;

        background-image: url('/assets/img/brandings/patterns.svg');
        @apply bg-gray-50;
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

        @include md_screen {
            @apply p-10 h-full;
        }
    }

    .login__right {
        @apply flex-grow flex-shrink-0 overflow-auto;

        @include md_screen {
            @apply h-full;
        }
    }
}
</style>
