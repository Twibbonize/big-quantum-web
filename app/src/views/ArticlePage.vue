<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QBreadcrumbs from '@/components/atoms/QBreadcrumbs.vue';
import ArticleMore from '@/components/molecules/Article/More.vue';
import ArticleCategory from '@/components/molecules/Article/Category.vue';
import ArticleTitle from '@/components/molecules/Article/Title.vue';

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

const articleData = {
    title: 'How Twibbonize Becomes a Visual Marvel for Various Events',
    publishedDate: 1704938439000,
    readtime: 4,
    content: [
        {

        },
        {

        },
        {

        }
    ],
}
</script>

<template>
    <LayoutMain>
        <div class="article-page">
            <QBreadcrumbs :links="links"/>
            <div class="article-container">
                <div class="article-content">
                    <ArticleCategory title="events"/>
                    <ArticleTitle
                        :title="articleData.title"
                        :published-date="articleData.publishedDate"
                        :readtime="articleData.readtime"
                    />
                    <ArticleBlock/>
                </div>
                <ArticleMore  class="article-more" title="More Use Cases" :links="moreLinks"/>
            </div>
        </div>
    </LayoutMain>
</template>

<style lang="scss" scoped>
.article-page {
    @apply container sm:mt-[88px] px-5 sm:py-14 flex flex-col gap-16;

    .article-container {
        @apply w-full flex gap-[30px];
    }

    .article-content {
        @apply sm:max-w-[820px] w-full;
    }

    .article-more {
        @apply sm:max-w-[256px];
    }
}
</style>