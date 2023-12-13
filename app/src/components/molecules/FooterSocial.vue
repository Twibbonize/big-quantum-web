<script setup></script>

<template>
    <div class="widget-social">
        <ul class="flex items-center gap-2">
            <li class="icon">
                <i class="ri-facebook-fill"></i>
            </li>
            <li class="icon">
                <i class="ri-twitter-fill"></i>
            </li>
            <li class="icon">
                <i class="ri-discord-fill"></i>
            </li>
            <li class="icon">
                <i class="ri-tiktok-fill"></i>
            </li>
            <li class="icon">
                <i class="ri-youtube-fill"></i>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.widget-social {
    .icon {
        @apply rounded-full flex items-center justify-center;
        width: 38px;
        height: 38px;
        background: #F4F4f4;

        &:hover {
            background: rgba(var(--color-black), 0.2);
            cursor: pointer;
        }

        i {
            color: var(--color-black);
        }
    }
}
</style>
