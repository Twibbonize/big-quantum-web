<script setup>
import { useExpandMenuStore } from '@/stores/expandMenuStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import QButton from '@/components/atoms/QButton.vue';

const expandMenuStore = useExpandMenuStore();
const { open } = storeToRefs(expandMenuStore);

watch(open, (newValue) => {
    if (newValue) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
});
</script>

<template>
    <Teleport to="body">
        <div :class="['expand-menu', open && 'expand-menu--open']">
            <div class="expand-menu__overlay" @click="open = false"></div>
            <div class="expand-menu__wrapper">
                <div class="expand-menu__panel">
                    <div class="expand-menu__close">
                        <QButton variant="black" square @click="open = false">
                            <i class="ri-close-line ri-lg"></i>
                        </QButton>
                    </div>
                    <ul class="expand-menu__links">
                        <li>Explore</li>
                        <li>Pricing</li>
                        <li>Help Center</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    </Teleport>
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
        padding: 24px;
        position: relative;
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    .expand-menu__links {
        @apply space-y-3;

        li {
            @apply font-semibold text-xl;
        }
    }

    .expand-menu__close {
        @apply absolute right-4 top-4;
    }
}
</style>
