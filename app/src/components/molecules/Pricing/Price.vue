<script setup>
defineProps({
    currency: {
        default: '$'
    },
    number: {
        type: Number
    },
    decimal: {
        type: Number
    }
});
</script>

<template>
    <div class="pricing-price">
        <span class="currency">{{ currency }}</span>
        <span class="number">{{ number }}</span>
        <span class="decimal">{{ `.${decimal}` }}</span>
    </div>
</template>

<style lang="scss" scoped>
.pricing-price {
    @apply flex;

    .currency {
        @apply self-start text-3xl font-bold py-[12px];
    }

    .number {
        @apply self-center text-[105px] font-bold leading-none tracking-tighter;
    }

    .decimal {
        @apply self-end text-3xl font-bold py-[7px];
    }
}
</style>
