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
    return { transform: `translateX(${activeTab.offsetLeft - 8}px)`, width };
});
</script>

<template>
    <div ref="tabEl" class="tab">
        <tab-group :selected-index="innerValue" as="div" class="tab__group" @change="onChangeTab">
            <tab-list class="tab__list">
                <tab
                    v-for="(tab, i) in tabs"
                    :key="i"
                    v-slot="{ selected }"
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
    .tab__list {
        @apply bg-light inline-flex space-x-2 p-1 rounded-full relative;
    }

    .tab__button-wrapper {
        @apply outline-none;
    }

    .tab__button {
        height: 48px;
        padding: 0 18px;
        width: auto;
        @apply rounded-full flex items-center justify-center text-sm relative z-10 text-black/50 font-semibold transition-colors duration-200;

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
        @apply bg-white rounded-full transition-transform duration-500 ease-in-out;
        width: 50%;
        z-index: 0;
    }
}
</style>
