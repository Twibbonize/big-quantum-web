<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    color: {
        type: String,
        default: 'main',
        required: true
    }
});

const image = computed(() => {
    if (props.color === 'white') return '/assets/img/logos/twibbonize-logo-white.svg';
    if (props.color === 'black') return '/assets/img/logos/twibbonize-logo-black.svg';
    return '/assets/img/logos/twibbonize-logo.svg';
});
</script>

<template>
    <RouterLink to="/">
        <img class="main-logo" :src="image" />
    </RouterLink>
</template>

<style scoped lang="scss">
.main-logo {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    filter: contrast(1);
    height: 24px;
    max-width: 110px;

    &:hover {
        cursor: pointer;
        filter: contrast(0.7);
    }

    @include md_screen {
        height: 32px;
        max-width: 140px;
    }
}
</style>
