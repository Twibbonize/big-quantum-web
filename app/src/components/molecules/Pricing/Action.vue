<script setup>
import QButton from '@/components/atoms/QButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
    variant: String,
    link: String,
    checkout: String,
});

const goToCheckout = (checkout) => {
    router.push(checkout);
};
</script>

<template>
    <div class="pricing-action">
        <QButton size="md" :variant="variant" class="w-full" @click="goToCheckout(checkout)">
            <span class="text-base gap-4 flex items-center"
                >Purchase Now <i class="ri-arrow-right-line"></i
            ></span>
        </QButton>
        <router-link class="text-base" :to="link">Learn More</router-link>
    </div>
</template>

<style lang="scss" scoped>
.pricing-action {
    @apply text-black bottom-0 left-0 w-full bg-white flex flex-col items-center py-8 px-5 sm:px-12 gap-4;
    box-shadow: 0px -4px 32px 0px rgba(27, 82, 78, 0.08);
}
</style>
