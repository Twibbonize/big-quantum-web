
<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
});

const url = computed(() => {
    if (props.type === 'ios') return 'https://apps.apple.com/id/app/twibbonize/id1610446264';
    if (props.type === 'android') return 'https://play.google.com/store/apps/details?id=com.twibbonize';
    return '';
});

const image = computed(() => {
    if (props.type === 'ios') return '/src/assets/img/logos/download-appstore.png';
    if (props.type === 'android') return '/src/assets/img/logos/download-playstore.png';
    return '';
});
</script>

<template>
    <a
        class="app-download"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            id="playstore"
            class="app-download"
            :src="image"
        />
    </a>
</template>

<style lang="scss">
.app-download {
    position: relative;
    height: 40px !important;
    width: auto !important;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        height: 0;
        width: 0;
        border-radius: 100%;
        background: #ffffff;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0.3;
    }

    &:hover {
        cursor: pointer;
        color: #ffffff;
        box-shadow: 0px 17px 13px 0px #192c4b0f;

        &::before {
            content: '';
            position: absolute;
            height: 15rem;
            width: 15rem;
            border-radius: 100%;
            background: #ffffff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0.3;
        }
    }
}
</style>
