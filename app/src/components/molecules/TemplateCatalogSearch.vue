<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: String
    }
});

const emit = defineEmits(['update:modelValue']);

const innerValue = ref(props.modelValue);

watch(innerValue, (newValue) => {
    emit('update:modelValue');
});
</script>

<template>
    <div class="tpl__search">
        <div class="tpl__search__icon">
            <i class="ri-search-line"></i>
        </div>
        <input v-model="innerValue" class="tpl__search__input" placeholder="Search templates" />
    </div>
</template>

<style scoped lang="scss">
.tpl__search {
    @apply flex items-center border border-stroke rounded-full overflow-hidden flex-grow;

    @include md_screen {
        max-width: 347px;
    }

    .tpl__search__icon {
        @apply text-content text-lg h-full flex items-center justify-center bg-white;
        padding: 0px 8px 0px 14px;

        @include xs {
            @apply text-sm;
        }
    }

    .tpl__search__input {
        @apply text-sm flex-grow h-full focus:outline-none;
        padding: 10px 14px 10px 0px;

        @include xs {
            @apply text-xs;
        }
    }
}
</style>
