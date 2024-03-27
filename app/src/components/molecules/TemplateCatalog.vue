<script setup>
import { ref, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import TemplateCatalogItem from './TemplateCatalogItem.vue';
import TemplateCatalogSearch from './TemplateCatalogSearch.vue';
import TemplateCatalogCategory from './TemplateCatalogCategory.vue';
import { getTemplateList } from '@/apis';

const props = defineProps({
    modelValue: {
        type: String
    }
});

const emit = defineEmits(['update:modelValue']);

const templates = ref([]);
const page = ref(1);

const observerEl = ref(null);
const observerIsVisible = ref(false);

const handleFetchTemplates = async () => {
    try {
        const thumbnailBaseUrl =
            'https://twb-template-dummy.s3.ap-southeast-1.amazonaws.com/template';
        const { data } = await getTemplateList({ page: page.value, numItems: 20 });
        templates.value = [
            ...templates.value,
            ...data.map(({ thumbnail, ...other }) => {
                return {
                    thumbnail: `${thumbnailBaseUrl}/${thumbnail}`,
                    ...other
                };
            })
        ];

        page.value++;
    } catch (error) {
        console.error('Error fetching data', error);
    }
};

const { stop } = useIntersectionObserver(observerEl, ([{ isIntersecting }]) => {
    observerIsVisible.value = isIntersecting;
});

watch(observerIsVisible, (newValue) => {
    if (newValue) {
        handleFetchTemplates();
    }
});
</script>

<template>
    <div class="tpl">
        <div class="tpl__filter">
            <TemplateCatalogSearch />

            <TemplateCatalogCategory />
        </div>

        <div class="tpl__grid">
            <div class="tpl__add">
                <i class="ri-add-box-line ri-2x"></i>
                <span>Start from Blank</span>
            </div>

            <TemplateCatalogItem v-for="(template, i) in templates" :key="i" v-bind="template" />
        </div>

        <div ref="observerEl" class="tpl__observer"></div>
    </div>
</template>

<style scoped lang="scss">
.tpl {
    .tpl__observer {
        height: 40px;
    }

    .tpl__filter {
        @apply flex flex-col mb-5 space-y-3;

        @include md_screen {
            @apply flex-row space-y-0 space-x-2;
        }
    }

    .tpl__grid {
        @apply grid grid-cols-2 md:grid-cols-4 gap-4;

        @include xs {
            @apply gap-4;
        }
    }

    .tpl__item {
        img {
            max-height: 100%;
            max-width: 100%;
        }
    }

    .tpl__add {
        @apply aspect-square bg-white border flex-col text-xs border-dashed flex items-center justify-center rounded-md overflow-hidden;

        span {
            @apply font-medium text-sm mt-2;

            @include xs {
                @apply text-xs;
            }
        }
    }
}
</style>
