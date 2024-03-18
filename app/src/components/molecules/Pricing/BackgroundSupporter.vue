<script setup></script>

<template>
    <div class="bg-supporter">
        <img class="bg-vector" src="/assets/img/marketings/bg-supporters.png" />
        <img class="bg-color" src="/assets/img/patterns/background-banner-creators.png" />
    </div>
</template>

<style lang="scss">
.bg-supporter {
    @apply relative w-[600px] h-[600px];

    .bg-vector {
        @apply absolute w-full top-0;
    }

    .bg-color {
        @apply absolute top-0 rotate-[55deg] h-[940px] w-[940px];
    }
}
</style>
