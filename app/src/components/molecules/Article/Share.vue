<script setup>

</script>

<template>
    <div class="article-share">
        <div class="icon-container">
            <img class="icon" src="/assets/img/icons/twitter-icon-gray.svg" alt="fb">
        </div>
        <div class="icon-container">
            <img class="icon" src="/assets/img/icons/instagram-icon-gray.svg" alt="fb">
        </div>
        <div class="icon-container">
            <img class="icon" src="/assets/img/icons/facebook-icon-gray.svg" alt="fb">
        </div>
        <div class="icon-container">
            <img class="icon" src="/assets/img/icons/linkedin-icon-gray.svg" alt="fb">
        </div>
    </div>
</template>

<style lang="scss">
  .article-share {
    @apply rounded-r-2xl p-5 fixed left-0 top-80 flex flex-col gap-4;
    background: #E8F4F2;

    .icon-container {
        @apply bg-white rounded-full h-10 w-10 flex items-center justify-center cursor-pointer;
        border: 1px solid #D0D5DD;
    }

    .icon {
        @apply w-5 h-5;
    }
  }
</style>