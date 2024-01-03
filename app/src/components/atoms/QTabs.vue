<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { computed, ref } from 'vue';

const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    modelValue: {
        type: Number,
        default: 0
    },
    block: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: 'pills',
        validators: (value) => ['bordered', 'pills'].includes(value)
    }
});

// inner value cause the modelValue is optional
const innerValue = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

const tabEl = ref(null);

const onChangeTab = (idx) => {
    innerValue.value = idx;
    emit('update:modelValue', idx);
};

const tabPresentationStyle = computed(() => {
    if (!tabEl.value) {
        return {};
    }
    const activeTab = tabEl.value.querySelectorAll('.tab__button')[innerValue.value];
    const { width } = getComputedStyle(activeTab);

    const offsetModifier = props.variant === 'bordered' ? 0 : 8;
    return { transform: `translateX(${activeTab.offsetLeft}px)`, width };
});
</script>

<template>
    <div ref="tabEl" :class="['tab', block && 'tab--block', `tab--${variant}`]">
        <tab-group :selected-index="innerValue" as="div" class="tab__group" @change="onChangeTab">
            <tab-list class="tab__list">
                <tab
                    v-for="(tab, i) in tabs"
                    :key="i"
                    v-slot="{ selected }"
                    as="div"
                    class="tab__button-wrapper"
                >
                    <button :class="['tab__button', selected && 'tab__button--selected']">
                        {{ tab.title }}
                    </button>
                </tab>

                <div class="tab__presentation" :style="tabPresentationStyle"></div>
            </tab-list>

            <tab-panels>
                <tab-panel
                    v-for="(tab, i) in tabs"
                    :key="i"
                    v-bind="tab.props"
                    v-slot="{ selected }"
                >
                    <Transition name="fade" mode="out-in">
                        <div v-show="selected" :class="['tab__panel']">
                            <slot :name="tab.slot"></slot>
                        </div>
                    </Transition>
                </tab-panel>
            </tab-panels>
        </tab-group>
    </div>
</template>

<style scoped lang="scss">
.tab {
    &.tab--block {
        .tab__list {
            @apply flex;
        }

        .tab__button-wrapper {
            @apply flex-grow;
        }
    }

    .tab__button-wrapper {
        @apply outline-none flex-shrink-0;
    }

    .tab__list {
        @include no_scrollbar();
    }

    &--pills {
        .tab__list {
            @apply bg-light inline-flex p-1 rounded-full relative;
        }

        .tab__button {
            // height: 48px;
            padding: 16px 12px;
            width: 100%;
            @apply rounded-full flex items-center justify-center text-sm relative z-10 text-black/50 font-semibold transition-colors duration-200;

            @include xs {
                @apply text-xs;
            }

            @include md_screen {
                padding: 16px 18px;
            }

            &:focus {
                outline: none;
            }

            &--selected {
                @apply text-black;
            }
        }

        .tab__presentation {
            position: absolute;
            height: 48px;
            left: 0;
            top: 4px;
            display: block;
            @apply bg-white rounded-full transition-all duration-500 ease-in-out;
            width: 50%;
            z-index: 0;

            @include md_screen {
                height: 52px;
            }
        }
    }

    &--bordered {
        .tab__list {
            @apply flex items-center py-4 w-full relative overflow-auto;
            background-image: linear-gradient(
                to right,
                rgb(34, 34, 34) 0px,
                rgb(34, 34, 34) 10%,
                rgba(255, 255, 255, 0) 10%
            );
            background-repeat: repeat-x;
            background-position: bottom;
            background-size: 8px 1px;
        }

        .tab__button {
            @apply px-3 flex-shrink-0 flex items-center h-full text-black/50 tracking-wide font-medium cursor-pointer transition-colors duration-500 ease-out;

            font-size: 14px;

            @include sm {
                @apply flex-grow;
            }

            &:hover,
            &--selected {
                @apply text-black;
            }
        }

        .tab__presentation {
            position: absolute;
            height: 2.2px;
            left: 0;
            bottom: 0px;
            display: block;
            @apply bg-black rounded-full transition-all duration-300 ease-linear;
            // width: 50%;
            z-index: 0;
        }
    }
}
</style>
