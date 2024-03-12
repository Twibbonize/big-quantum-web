<script setup>
import QMockup from '@/components/atoms/QMockup.vue';
</script>

<template>
    <QMockup>
        <div class="campaign">
            <div class="campaign__background"></div>
            <div class="campaign__linear"></div>
            <div class="campaign__content">
                <div class="grid grid-cols-12">
                    <div class="col-span-12"></div>

                    <div class="col-span-12"></div>
                </div>
            </div>
        </div>
    </QMockup>
</template>

<style scoped lang="scss">
.campaign {
    position: relative;
    z-index: 0;

    .campaign__background {
        width: 100%;
        top: 0;
        left: 0;
        height: 300px;
        position: absolute !important;

        @include before() {
            background: url('/assets/img/banners/hanoi.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: scroll;
            height: 300px;
            width: 100%;
            left: 0;
            top: 0;
        }
    }

    .campaign__linear {
        background: linear-gradient(0deg, #fff 0%, #dee8e8 22%, rgba(255, 255, 255, 0) 100%);
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 100%;
        width: 100%;
        display: none;
    }

    .campaign__content {
    }
}
</style>
