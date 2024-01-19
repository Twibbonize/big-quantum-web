<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    links: Array
});
</script>

<template>
    <div class="widget widget-menu">
        <h5 class="title-widget">{{ title }}</h5>
        <ul>
            <li v-for="{ url, text, isInAppPage } in links" :key="text">
                <RouterLink :to="url" v-if="isInAppPage">
                    {{ text }}
                </RouterLink>
                <a :href="url" v-else="isInAppPage">{{ text }}</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.widget-menu {
    .title-widget {
        @apply font-extrabold mb-5;
    }

    ul {
        li {
            @apply mb-1;

            &:last-child {
                @apply mb-0;
            }

            a {
                @apply text-sm text-black hover:underline;
            }
        }
    }
}
</style>
