<script setup>
defineProps({
    name: {
        type: String
    },
    campaigns: {
        type: Array
    },
    updatedAt: {
        type: String
    },
    checked: {
        type: Boolean
    }
});

defineEmits(['click']);
</script>

<template>
    <div
        :class="['collection-card', checked && 'collection-card--checked']"
        @click="$emit('click')"
    >
        <div class="collection-card__covers">
            <div class="collection-card__check">
                <div class="collection-card__checkbox">
                    <div class="collection-card__checkbox__icon"></div>
                </div>
            </div>

            <div class="collection-card__covers__grid">
                <div
                    v-for="(campaign, i) in campaigns"
                    :key="i"
                    class="collection-card__covers__img"
                >
                    <img :src="campaign" :alt="i" />
                </div>
            </div>

            <div class="collection-card__info">
                <h5 class="font-semibold">{{ name }}</h5>
                <div class="text-xs text-white/70">{{ campaigns.length }} Campaigns</div>
                <div class="text-xs text-white/70">{{ updatedAt }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.collection-card {
    @apply relative border border-stroke p-2 rounded-3xl transition-colors cursor-pointer;

    .collection-card__covers {
        @apply rounded-xl overflow-hidden relative;

        @include before {
            height: 100%;
            width: 100%;
            background: linear-gradient(0deg, #282828 0%, rgba(0, 0, 0, 0) 100%);
            z-index: 10;
            bottom: 0;
            @apply rounded-xl;
        }

        .collection-card__covers__grid {
            @apply grid grid-cols-2 transition-all;
        }

        .collection-card__covers__img {
            @apply bg-gray-200;
        }
        .collection-card__covers__img img {
            @apply w-full h-full object-cover object-center;
        }

        .collection-card__info {
            @apply absolute bottom-0 w-full z-20 text-white p-3 space-y-1;
        }

        .collection-card__check {
            @apply absolute right-0 top-0 p-3 z-20;
        }

        .collection-card__checkbox {
            @apply w-8 h-8 rounded bg-main-darker opacity-0 flex items-center justify-center transition-all;

            .collection-card__checkbox__icon {
                @apply h-6 w-6;
                background-image: url('/assets/img/icons/check.svg');
                background-repeat: no-repeat;
                background-position: center;
                // background-size: cover;
            }
        }
    }

    &.collection-card--checked .collection-card__checkbox {
        @apply opacity-100;
    }

    &.collection-card--checked {
        @apply border-main-darker;
    }
}
</style>
