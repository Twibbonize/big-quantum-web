<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QBreadcrumbs from '@/components/atoms/QBreadcrumbs.vue';
import ArticleMore from '@/components/molecules/Article/More.vue';
import ArticleCategory from '@/components/molecules/Article/Category.vue';
import ArticleTitle from '@/components/molecules/Article/Title.vue';
import ArticleBlock from '@/components/molecules/Article/Block.vue';

const route = useRoute();

const links = [
    {
        title: 'Use Case',
        link: '/use-cases',
    },
    {
        title: 'How Twibbonize Becomes a Visual Marvel for Various Events',
    },
];

const moreLinks = [
    {
        title: 'How Twibbonize Innovates Government Communication in the Digital Age',
        link: '/use-cases',
    },
    {
        title: 'Twibbonize Elevate Personal Celebrations with Customized Digital Flair',
        link: '/use-cases',
    },
    {
        title: 'How Twibbonize Elevates Political Engagement with Visual Frames',
        link: '/use-cases',
    },
    {
        title: 'Empowering Social Causes Through Twibbonize\'s Visual Impact',
        link: '/use-cases',
    },
];

let articleData = ref('');

import(`@/assets/json/${route.params.uri}.json`).then((module) => {
    articleData.value = module.default;
});
</script>

<template>
    <LayoutMain>
        <div class="article-page">
            <div class="article-container">
                <QBreadcrumbs class="article-breadcrumbs" :links="links"/>
            </div>
            <div class="article-container">
                <article class="article-content">
                    <ArticleCategory title="events"/>
                    <ArticleTitle
                        :title="articleData.title"
                        :published-date="articleData.publishedDate"
                        :readtime="articleData.readtime"
                    />
                    <ArticleBlock
                        v-for="block in articleData.content"
                        :block="block"
                    />
                </article>
                <ArticleMore class="article-more" title="More Use Cases" :links="moreLinks"/>
            </div>
        </div>
    </LayoutMain>
</template>

<style lang="scss" scoped>
.article-page {
    @apply container sm:mt-[88px] px-5 sm:py-14 flex flex-col gap-16 justify-center;

    .article-breadcrumbs {
        @apply md:max-w-[1106px];
    }

    .article-container {
        @apply w-full flex gap-[30px] flex-col md:flex-row md:justify-center mx-auto;
    }

    .article-content {
        @apply md:max-w-[820px] w-full;
    }

    .article-more {
        @apply md:max-w-[256px];
    }
}
</style>