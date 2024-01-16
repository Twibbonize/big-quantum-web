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
const { modal } = storeToRefs(authStore);

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
                            <RouterLink :to="{ name: 'home' }" class="expand-menu__link">
                                Explore
                            </RouterLink>
                        </li>

                        <li>
                            <a href="#" class="expand-menu__link">Leaderboard</a>
                        </li>

                        <li>
                            <RouterLink :to="{ name: 'creators' }" class="expand-menu__link">
                                Creators
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink :to="{ name: 'plus' }" class="expand-menu__link">
                                Plus
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

                    <div class="space-y-4 mt-4 pt-4 border-t border-stroke">
                        <div
                            class="flex flex-col-reverse md:flex-row items-center space-y-3 space-y-reverse md:space-y-0 md:space-x-3"
                        >
                            <QButton variant="secondary" block @click="onClickSignIn"
                                >Sign In</QButton
                            >
                            <QButton block @click="onClickSignUp">Sign Up</QButton>
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
        @apply space-y-3;

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
