<script setup>
import { computed } from 'vue';
import QCreator from '@/components/atoms/QCreator.vue';
import QButton from '@/components/atoms/QButton.vue';

const props = defineProps({
    name: {
        type: String
    },
    uri: {
        type: String
    },
    campaigns: {
        type: Array
    },
    creator: {
        type: Object
    },
    checkable: {
        type: Boolean,
        default: false
    },
    checked: {
        type: Boolean
    }
});

defineEmits(['click']);

const thumbnails = computed(() => {
    const { campaigns } = props;

    if (!campaigns.length) {
        return [];
    }

    if (campaigns.length < 4) {
        return [campaigns[0].thumbnail];
    }

    return campaigns.map(({ thumbnail }) => thumbnail);
});
</script>

<template>
    <div
        :class="['collection-card', checked && 'collection-card--checked']"
        @click="$emit('click')"
    >
        <div class="collection-card__covers">
            <div v-if="checkable" class="collection-card__check">
                <div class="collection-card__checkbox">
                    <div class="collection-card__checkbox__icon"></div>
                </div>
            </div>

            <div
                :class="[
                    'collection-card__covers__grid',
                    campaigns.length < 4 && 'collection-card__covers__grid--autofill'
                ]"
            >
                <div
                    v-for="(thumbnail, i) in thumbnails"
                    :key="i"
                    class="collection-card__covers__img"
                >
                    <img :src="thumbnail" :alt="i" />
                </div>
            </div>

            <div class="collection-card__actions">
                <QButton size="sm" @click="$router.push({ name: 'collection', params: { uri } })">
                    View
                </QButton>
            </div>

            <div class="collection-card__info">
                <div class="space-y-1">
                    <h5 class="font-semibold">{{ name }}</h5>
                    <div class="text-sm text-white/70">{{ campaigns.length }} Campaigns</div>
                </div>

                <QCreator v-if="creator" v-bind="creator" size="sm" class="text-white/70" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.collection-card {
    @apply relative shadow-card p-2 rounded-3xl transition-all duration-300 ease-in-out cursor-pointer;

    &:hover {
        transform: translateY(-10px);
    }

    &:hover .collection-card__covers__grid {
        transform: scale(1.1);
    }

    &:hover .collection-card__covers .collection-card__actions {
        @apply opacity-100;
    }

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
            display: grid;
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: repeat(2, 50%);
            @apply transition-all duration-300 ease-in-out;

            &--autofill .collection-card__covers__img {
                grid-row: span 2;
                grid-column: span 2;
            }
        }

        .collection-card__covers__img {
            @apply bg-gray-200 overflow-hidden w-full aspect-square;
        }

        .collection-card__covers__img img {
            @apply w-full h-full object-cover object-center scale-105;
        }

        .collection-card__info {
            @apply absolute bottom-0 w-full z-20 text-white p-3 space-y-2;
        }

        .collection-card__actions {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            @apply z-20 opacity-0 transition-opacity duration-300;
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
