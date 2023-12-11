<script setup>
import { computed, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

import MainLogo from '@/components/atoms/MainLogo.vue';
import QButton from '@/components/atoms/QButton.vue';
import QMenu from '@/components/atoms/QMenu.vue';
import QSearch from '@/components/atoms/QSearch.vue';
import QSearchMobile from '@/components/atoms/QSearchMobile.vue';

const { width, height } = useWindowSize();

const props = defineProps({
    color: String
});

const buttonColor = computed(() => {
    if (/(gradient|transparent)/gi.test(props.color)) return 'white';
    return 'main';
});

const navbarColor = computed(() => {
    if (props.color) return props.color;
    return '';
});

const logoColor = computed(() => {
    if (/(gradient)/ig.test(props.color)) return 'black';
    if (/(transparent)/ig.test(props.color)) return 'white';
    return 'main';
});

const searchQuery = ref('');
</script>

<template>
    <header class="navbar z-50" :class="navbarColor">
        <div class="container px-5 mx-auto">
            <div class="w-full flex flex-row items-center justify-between sm:gap-x-4">
                <MainLogo class="logo" :color="logoColor"/>
                <QSearch v-if="width >= 1024" v-model="searchQuery"/>
                <div class="action">
                    <QSearchMobile v-if="width < 640" v-model="searchQuery"/>
                    <QButton
                        v-if="width >= 1024"
                        class="text-xs whitespace-nowrap"
                        :color="buttonColor"
                        size="lg"
                        border-radius="circle"
                    >
                        <i class="ri-add-line"></i>
                        Start a Campaign
                    </QButton>
                    <QMenu/>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.navbar {
    @apply fixed;

    width: 100vw;
    background: $color_white;
    padding-top: 27px;
    padding-bottom: 18px;
    top: 0;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

    .logo {
        @apply xl:w-1/3;
    }

    .action {
        @apply xl:w-1/3 flex items-center justify-end gap-x-2 lg:gap-x-0 ;
    }
}

.navbar.gradient {
    background: linear-gradient(180deg, #16dac1 0%, rgba(22, 218, 193, 0) 100%);
    box-shadow: none;
}

.navbar.transparent {
    background: transparent;
    box-shadow: none;
}
</style>
