<script setup>
import { useExpandMenuStore } from '@/stores/expandMenuStore';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
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

                <div class="h-full flex flex-col justify-between">
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

                    <div class="space-y-4">
                        <div class="inline-flex flex-col space-y-3">
                            <div>
                                <QButton variant="secondary" size="sm">
                                    <div class="flex items-center space-x-2">
                                        <span
                                            class="w-6 h-6 rounded-full bg-black flex items-center justify-center"
                                        >
                                            <img
                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTQ3NzdlLTA1IDMuNzQzOEMtMC4wMDEzMjI2OSAzLjgyODI2IDAuMDIzMDA1MiAzLjkxMTE1IDAuMDY5ODEzNiAzLjk4MTQ4QzAuMTE2NjIyIDQuMDUxOCAwLjE4MzcgNC4xMDYyNCAwLjI2MjE1MyA0LjEzNzU3TDQuMjYyNzkgNS43MzgwN0w1Ljg2MzI5IDkuNzM5MTJDNS44OTQyMSA5LjgxNjUxIDUuOTQ3NjIgOS44ODI4NSA2LjAxNjYyIDkuOTI5NTdDNi4wODU2MyA5Ljk3NjI5IDYuMTY3MDYgMTAuMDAxMiA2LjI1MDM5IDEwLjAwMTJINi4yNTcwNkM2LjM0MTQ2IDkuOTk5ODkgNi40MjM0NiA5Ljk3Mjk2IDYuNDkyMjEgOS45MjRDNi41NjA5NiA5Ljg3NTA0IDYuNjEzMjMgOS44MDYzNiA2LjY0MjA4IDkuNzI3MDRMOS45NzU2IDAuNTU5ODc0QzEwLjAwMjkgMC40ODUyOTggMTAuMDA4MyAwLjQwNDQ3NiA5Ljk5MTE5IDAuMzI2OTI4QzkuOTc0MDggMC4yNDkzOCA5LjkzNTE3IDAuMTc4MzM1IDkuODc5MDQgMC4xMjIxNjFDOS44MjI5MSAwLjA2NTk4NTYgOS43NTE4OSAwLjAyNzAyIDkuNjc0MzYgMC4wMDk4NTI5NUM5LjU5NjgyIC0wLjAwNzMxNDEyIDkuNTE2IC0wLjAwMTk2Nzc5IDkuNDQxNCAwLjAyNTI2MjJMMC4yNzQyMzcgMy4zNTg3OEMwLjE5NDg4NSAzLjM4NzcxIDAuMTI2MTg2IDMuNDQwMDUgMC4wNzcyMjc2IDMuNTA4ODdDMC4wMjgyNjkyIDMuNTc3NyAwLjAwMTM1ODU0IDMuNjU5NzYgNS41NDc3N2UtMDUgMy43NDQyMVYzLjc0MzhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                                                style="margin-top: 2px"
                                                alt="country"
                                            />
                                        </span>

                                        <span>Indonesia</span>
                                    </div>
                                </QButton>
                            </div>

                            <div>
                                <QButton variant="secondary" size="sm">
                                    <div class="flex items-center space-x-2">
                                        <span
                                            class="w-6 h-6 rounded-full bg-black flex items-center justify-center"
                                        >
                                            <img
                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTI1IDYuMzhDMS4xMjUgNy4xOCAxLjY4NjUgNy44NzcgMi40Nzg1IDcuOTkzNUMzLjAyMiA4LjA3MzUgMy41NzEgOC4xMzUgNC4xMjUgOC4xNzhWMTAuNUw2LjE2MyA4LjQ2MkM2LjMwMTIxIDguMzI0NjggNi40ODY3MyA4LjI0NTQzIDYuNjgxNSA4LjI0MDVDNy42MzIyMSA4LjIxNDE4IDguNTgwNTIgOC4xMzE3MSA5LjUyMTUgNy45OTM1QzEwLjMxMzUgNy44NzcgMTAuODc1IDcuMTgwNSAxMC44NzUgNi4zNzk1VjMuMzcwNUMxMC44NzUgMi41Njk1IDEwLjMxMzUgMS44NzMgOS41MjE1IDEuNzU2NUM4LjM1NTQ4IDEuNTg1MzYgNy4xNzg1MSAxLjQ5OTYzIDYgMS41QzQuODA0IDEuNSAzLjYyOCAxLjU4NzUgMi40Nzg1IDEuNzU2NUMxLjY4NjUgMS44NzMgMS4xMjUgMi41NyAxLjEyNSAzLjM3MDVWNi4zNzk1VjYuMzhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                                                alt="language"
                                            />
                                        </span>
                                        <span class="flex-shrink-0">English (United States)</span>
                                    </div>
                                </QButton>
                            </div>
                        </div>

                        <hr />

                        <div class="flex items-center space-x-2">
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
        height: 100vh;
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
        position: relative;
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    .expand-menu__links {
        @apply space-y-4;

        .expand-menu__link {
            @apply font-medium text-lg transition-colors duration-200;

            &:hover {
                @apply text-main-darker;
            }
        }
    }

    .expand-menu__close {
        @apply absolute right-4 top-10;
    }
}
</style>
