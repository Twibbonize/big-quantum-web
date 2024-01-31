<script setup>
import { computed, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import MainLogo from '@/components/atoms/MainLogo.vue';
import QButton from '@/components/atoms/QButton.vue';
import QMenu from '@/components/atoms/QMenu.vue';
import QSearch from '@/components/atoms/QSearch.vue';
import QSearchMobile from '@/components/atoms/QSearchMobile.vue';
import { useExpandMenuStore } from '@/stores/expandMenuStore';
import { storeToRefs } from 'pinia';

const { width, height } = useWindowSize();

const expandMenuStore = useExpandMenuStore();
const { open } = storeToRefs(expandMenuStore);

const props = defineProps({
    color: String,
    shadow: {
        type: Boolean,
        default: true
    }
});

const buttonVariant = computed(() => {
    if (/(gradient|transparent)/gi.test(props.color)) return 'secondary';
    return 'primary';
});

const navbarColor = computed(() => {
    if (props.color) return props.color;
    return '';
});

const logoColor = computed(() => {
    if (/(gradient)/gi.test(props.color)) return 'black';
    if (/(transparent)/gi.test(props.color)) return 'white';
    return 'main';
});

const searchQuery = ref('');
</script>

<template>
    <header
        :class="[
            'header',
            navbarColor !== '' && `header--${navbarColor}`,
            shadow && 'header--shadow'
        ]"
    >
        <div class="header__wrapper">
            <div class="header__left">
                <MainLogo class="logo" :color="logoColor" />
            </div>
            <div class="header__center">
                <QSearch v-if="width >= 1024" v-model="searchQuery" />
            </div>

            <div class="header__right">
                <div class="header__actions">
                    <div class="block lg:hidden mr-2">
                        <QSearchMobile
                            :variant="navbarColor === 'transparent' ? 'white' : 'black'"
                        />
                    </div>

                    <div class="header__links">
                        <RouterLink :to="{ name: 'explore' }" class="header__link">
                            <i class="ri ri-compass-line"></i>
                        </RouterLink>
                    </div>

                    <div class="hidden sm:flex mr-2">
                        <QButton :variant="buttonVariant">
                            <i class="ri-add-line mr-1"></i>
                            <span>Start a Campaign</span>
                        </QButton>
                    </div>

                    <button
                        :class="['header__burger', open && 'header__burger--open']"
                        @click="open = !open"
                    >
                        <div class="header__burger__js">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div class="header__burger__avatar">
                            <img src="/assets/img/avatars/default.svg" alt="Avatar" />
                        </div>
                    </button>
                </div>
            </div>
            <div class="header__mobile"></div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    @apply fixed bg-white top-0 w-screen z-50 transition-colors duration-300 ease-in-out;

    &.header--shadow {
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
        @apply border-0;
    }

    &__wrapper {
        padding-top: 18px;
        padding-bottom: 18px;

        @apply w-full flex items-center justify-between container px-5 2xl:px-0 relative;
    }

    &__left,
    &__right {
        flex: 1 1 0;
        min-width: 24px;
    }

    &__center {
        flex: 0 1 0;
        white-space: nowrap;
        @apply flex justify-center;
    }

    &__actions {
        @apply flex items-center justify-end;
    }

    .header__links {
        @apply hidden lg:flex items-center pr-2 border-r border-stroke mr-4;

        .header__link {
            height: 48px;
            width: 48px;
            font-size: 28px;

            @apply text-black rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300;

            @include before {
                height: 0;
                width: 0;
                border-radius: 100%;
                @apply bg-black;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s var(--transition-function);
                opacity: 0.1;
            }

            &:hover {
                @include before {
                    height: 20rem;
                    width: 20rem;
                }
            }
        }
    }

    &--transparent {
        background: transparent linear-gradient(180deg, #000 0%, rgba(22, 218, 193, 0) 100%);;
        box-shadow: none;
    }

    &.header--transparent .header__links .header__link {
        @apply text-white;
    }

    &--gradient {
        background: linear-gradient(180deg, #16dac1 0%, rgba(22, 218, 193, 0) 100%);
        box-shadow: none;
    }

    &__burger {
        @apply bg-white rounded-full flex items-center justify-center border border-stroke;
        height: 40px;
        width: 40px;
        // padding: 12px;

        @include md_screen {
            width: 32px;
            height: 32px;
        }

        .header__burger__js {
            @apply hidden;
        }

        .header__burger__avatar {
            height: 48px;
            width: 48px;
            flex-shrink: 0;
            @apply hidden;

            @include md_screen {
                width: 32px;
                height: 32px;
                @apply block;
            }

            img {
                height: 100%;
                width: 100%;
                @apply border-2 border-gray-200 rounded-full;
            }
        }

        .header__burger__js {
            height: 16px;
            width: 18px;
            @apply flex items-center justify-center relative;
        }

        .header__burger__js span {
            display: block;
            position: absolute;
            height: 2px;
            width: 18px;
            opacity: 1;
            right: 0;
            background-color: #000;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition:
                background-color 0.05s ease-in-out,
                transform 0.2s ease-in-out,
                top 0.2s ease-in-out;
            transition:
                background-color 0.05s ease-in-out,
                transform 0.2s ease-in-out,
                top 0.2s ease-in-out;

            border-radius: 1px;

            &:nth-child(1) {
                top: 1px;
            }

            &:nth-child(2) {
                top: 7px;
            }

            &:nth-child(3) {
                top: 13px;
            }
        }

        @include md_screen {
            @apply flex items-center rounded-full bg-white flex-shrink-0 border-stroke space-x-2 relative overflow-hidden;
            padding: 4px 10px;
            width: auto;
            height: 48px;

            @include before {
                height: 0;
                width: 0;
                border-radius: 100%;
                @apply bg-black;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s var(--transition-function);
                opacity: 0.1;
            }

            &:hover {
                @include before {
                    height: 20rem;
                    width: 20rem;
                }
            }

            // &.header__burger--open .header__burger__js span:nth-child(1) {
            //     top: 7px;
            //     transform: rotate(45deg);
            // }

            // &.header__burger--open .header__burger__js span:nth-child(2) {
            //     transform: rotate(-45deg);
            //     top: 7px;
            // }
        }
    }
}
</style>
