<script setup>
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { onBeforeRouteLeave } from 'vue-router';
import { useModal } from '@/composables/modal';
import { useExpandMenuStore } from '@/stores/expandMenuStore';
import { useAuthStore } from '@/stores/authStore';
import AuthModal from '@/components/organisms/AuthModal.vue';
import QButton from '@/components/atoms/QButton.vue';
import CampaignCreationModal from '@/components/organisms/CampaignCreationModal.vue';

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual('sm');
const expandMenuStore = useExpandMenuStore();
const authStore = useAuthStore();
const { open } = storeToRefs(expandMenuStore);
const { modal, isLoggedIn } = storeToRefs(authStore);
const { logout } = authStore;
const { open: openModal } = useModal();

const handleOpenCreateModal = () => {
    open.value = false;
    openModal({
        component: CampaignCreationModal,
        config: { size: 'xl', position: 'screen' }
    });
};

const handleSignOut = () => {
    open.value = false;
    logout();
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

const handleOpenAuthModal = (opt) => {
    open.value = false;
    modal.value.authOption = opt;
    openModal({
        component: AuthModal,
        config: { size: 'lg', position: sm.value ? 'screen' : 'center' }
    });
};
</script>

<template>
    <div :class="['expand-menu', open && 'expand-menu--open']">
        <div class="expand-menu__overlay" @click="open = false"></div>
        <div class="expand-menu__wrapper">
            <div class="expand-menu__panel">
                <div class="expand-menu__close">
                    <QButton
                        variant="secondary"
                        :size="sm ? 'sm' : 'md'"
                        square
                        @click="open = false"
                    >
                        <i class="ri-close-line"></i>
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
                            <RouterLink :to="{ name: 'pricing' }" class="expand-menu__link">
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

                    <div v-if="sm" class="mt-10">
                        <QButton block variant="accent" size="sm" @click="handleOpenCreateModal">
                            <i class="ri-add-line mr-1"></i>
                            <span>Start a Campaign</span>
                        </QButton>
                    </div>

                    <div v-if="!isLoggedIn" class="space-y-4 mt-3 pt-3 border-t border-stroke">
                        <div class="flex space-x-3">
                            <QButton
                                variant="secondary"
                                block
                                :size="sm ? 'sm' : 'md'"
                                @click="() => handleOpenAuthModal('sign-in')"
                            >
                                <span>Sign In</span>
                            </QButton>
                            <QButton
                                block
                                :size="sm ? 'sm' : 'md'"
                                @click="() => handleOpenAuthModal('sign-up')"
                            >
                                <span>Sign Up</span>
                            </QButton>
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
                                @click="handleSignOut"
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
        @apply space-y-4;

        .expand-menu__link {
            @apply font-medium md:text-lg transition-colors duration-200;

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
