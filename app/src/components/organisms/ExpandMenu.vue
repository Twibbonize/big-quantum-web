<script setup>
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import { useExpandMenuStore } from '@/stores/expandMenuStore';
import { useAuthStore } from '@/stores/authStore';
import QButton from '@/components/atoms/QButton.vue';

const expandMenuStore = useExpandMenuStore();
const authStore = useAuthStore();
const { open } = storeToRefs(expandMenuStore);
const { modal, isLoggedIn } = storeToRefs(authStore);

const onClickSignIn = () => {
    modal.value.authOption = 'sign-in';
    modal.value.show = true;
    open.value = false;
};

const onClickSignUp = () => {
    modal.value.authOption = 'sign-up';
    modal.value.show = true;
    open.value = false;
};

onBeforeRouteLeave(() => {
    open.value = false;
});

watch(open, (newValue) => {
    if (newValue) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
});
</script>

<template>
    <div :class="['expand-menu', open && 'expand-menu--open']">
        <div class="expand-menu__overlay" @click="open = false"></div>
        <div class="expand-menu__wrapper">
            <div class="expand-menu__panel">
                <div class="expand-menu__close">
                    <QButton variant="secondary" square @click="open = false">
                        <i class="ri-close-line ri-lg"></i>
                    </QButton>
                </div>

                <div class="h-full flex flex-col md:justify-between">
                    <ul class="expand-menu__links">
                        <li>
                            <RouterLink :to="{ name: 'explore' }" class="expand-menu__link">
                                Explore
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink :to="{ name: 'leaderboard' }" class="expand-menu__link">
                                Leaderboard
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink :to="{ name: 'plus' }" class="expand-menu__link">
                                Pricing
                            </RouterLink>
                        </li>

                        <li>
                            <a href="https://help.twibbonize.com/hc/en-us" class="expand-menu__link"
                                >Help Center</a
                            >
                        </li>
                        <li>
                            <a href="https://about.twibbonize.com" class="expand-menu__link"
                                >About</a
                            >
                        </li>
                    </ul>

                    <div v-if="!isLoggedIn" class="space-y-4 mt-4 pt-4 border-t border-stroke">
                        <div
                            class="flex flex-col-reverse md:flex-row items-center space-y-3 space-y-reverse md:space-y-0 md:space-x-3"
                        >
                            <QButton variant="secondary" block @click="onClickSignIn"
                                >Sign In</QButton
                            >
                            <QButton block @click="onClickSignUp">Sign Up</QButton>
                        </div>
                    </div>

                    <div v-else class="mt-4">
                        <div class="flex items-center justify-between py-4 border-y border-stroke">
                            <div class="flex items-center">
                                <button @click="$router.push({ name: 'own-profile' })">
                                    <img
                                        class="w-10 h-10 rounded-full"
                                        src="/assets/img/sample/sample-avatar-1.jpg"
                                        alt="avatar"
                                    />
                                </button>

                                <div class="ml-2 flex flex-col">
                                    <button
                                        class="font-semibold hover:underline text-left text-base"
                                        @click="$router.push({ name: 'own-profile' })"
                                    >
                                        Universe Tech
                                    </button>
                                    <button
                                        class="text-content text-sm font-light text-left hover:underline"
                                        @click="$router.push({ name: 'own-profile' })"
                                    >
                                        @universetech
                                    </button>
                                </div>
                            </div>

                            <QButton
                                variant="subtle"
                                circle
                                @click="$router.push({ name: 'settings' })"
                            >
                                <i class="ri-settings-4-line ri-lg"></i>
                            </QButton>
                        </div>

                        <div class="flex items-center pt-4">
                            <button
                                class="font-medium flex items-center group hover:text-red-500 text-sm"
                            >
                                <i class="ri-logout-box-r-line ri-lg"></i>
                                <span class="ml-2 group-hover:underline">Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.expand-menu {
    @apply fixed top-0 left-0 invisible;
    z-index: 99;
    opacity: 0;
    transition:
        visibility 0s linear,
        opacity 0.2s linear;

    &.expand-menu--open {
        visibility: visible;
        opacity: 100;
    }

    .expand-menu__overlay {
        height: 100dvh;
        width: 100vw;
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.5);
        position: relative;
    }

    .expand-menu__wrapper {
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 100%;
        max-width: 408px;
        min-height: 100%;
    }

    .expand-menu__panel {
        -webkit-box-flex: 1;
        flex-grow: 1;
        box-shadow: rgba(27, 32, 50, 0.1) 0px 10px 60px;
        color: #16161a;
        background: white;
        padding: 40px 24px;
        padding-top: 27px;
        position: relative;
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    .expand-menu__links {
        @apply space-y-5;

        @include md_screen {
            @apply space-y-4;
        }

        .expand-menu__link {
            @apply font-medium text-lg transition-colors duration-200;

            &:hover {
                @apply text-main-darker;
            }
        }
    }

    .expand-menu__close {
        @apply absolute right-4;
        top: 27px;
    }
}
</style>
