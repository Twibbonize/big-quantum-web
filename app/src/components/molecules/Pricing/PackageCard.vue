<script setup>
const props = defineProps({
    isDark: {
        type: Boolean,
        default: false
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    type: String,
    title: String,
    description: String,
    price: String,
    features: Array
});
</script>

<template>
    <div class="package-card" :class="{ 'is-dark': isDark }">
        <div class="card-container">
            <div class="flex-1">
                <h6 v-if="type" class="type">{{ type }}</h6>
                <h5 class="title">{{ title }}</h5>
                <p class="description">{{ description }}</p>
                <span class="price">{{ price }}</span>

                <div class="button-container top">
                    <slot name="cta-top"></slot>
                </div>
                <div class="line button-container bottom"></div>
            </div>
            <div class="flex flex-col items-start flex-1 gap-6 w-full">
                <p v-if="isPremium">All same benefits from <strong>Free</strong>, plus:</p>
                <div
                    v-for="(feature, i) in features"
                    :key="`${title}-feature-${i}`"
                    class="flex items-center"
                >
                    <div class="icon-container">
                        <i class="ri-check-line"></i>
                    </div>
                    <p>{{ feature }}</p>
                </div>
            </div>
        </div>
        <div class="button-container bottom">
            <slot name="cta-bottom"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.package-card {
    @apply py-16 px-8 sm:px-16 w-full flex flex-col justify-between rounded-3xl relative z-10 xl:max-w-[360px];
    .card-container {
        @apply w-full flex flex-col sm:flex-row lg:flex-col gap-8 justify-between;
    }

    .type {
        @apply text-xxs font-bold uppercase absolute;
        letter-spacing: 2.4px;
        top: 48px;
    }

    .title {
        @apply font-bold text-xl lg:text-2xl;
    }

    .description {
        @apply text-sm lg:text-base mt-4 mb-6;
    }

    .price {
        @apply text-2xl	font-bold;
    }

    .button-container {
        @apply w-full;
        &.top {
            @apply hidden sm:flex lg:hidden mt-8;
        }

        &.bottom {
            @apply flex sm:hidden lg:flex mt-8;
        }
    }
}

.line {
    @apply w-full mt-8;
    border: 1px solid rgba(0, 0, 0, 0.2);
}

.is-dark {
    .line {
        @apply w-full mt-8;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
}

.icon-container {
    @apply flex items-center justify-center rounded-full px-1 mr-2;
    height: 24px;
    width: 24px;
    background: rgba(255, 255, 255, 0.2);
}

.package-basic {
    .icon-container {
        @apply flex items-center justify-center rounded-full px-1 mr-2;
        height: 24px;
        width: 24px;
        background: rgba(0, 0, 0, 0.2);
    }
}
</style>
