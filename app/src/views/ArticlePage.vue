<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QBreadcrumbs from '@/components/atoms/QBreadcrumbs.vue';
import ArticleMore from '@/components/molecules/Article/More.vue';
import ArticleCategory from '@/components/molecules/Article/Category.vue';
import ArticleTitle from '@/components/molecules/Article/Title.vue';
import ArticleBlock from '@/components/molecules/Article/Block.vue';
import ArticleShare from '@/components/molecules/Article/Share.vue';

const route = useRoute();

const articleType = computed(() => {
    if (/(use-case)/ig.test(route.name)) return 'use-case';
    if (/(testimonial)/ig.test(route.name)) return 'testimonial';
    return route.name;
});

const moreLinks = computed(() => {
    if (articleType.value === 'use-case') {
        return [
            {
                title: 'How Twibbonize Becomes a Visual Marvel for Various Events',
                link: '/use-cases/events',
            },
            {
                title: 'How Twibbonize Innovates Government Communication in the Digital Age',
                link: '/use-cases/government',
            },
            {
                title: 'Twibbonize Elevate Personal Celebrations with Customized Digital Flair',
                link: '/use-cases/personal',
            },
            {
                title: 'How Twibbonize Elevates Political Engagement with Visual Frames',
                link: '/use-cases/political',
            },
            {
                title: 'Empowering Social Causes Through Twibbonize\'s Visual Impact',
                link: '/use-cases/social',
            },
        ];
    }
    if (articleType.value === 'testimonial') {
        return [
            {
                title: 'How Danone Does Their Internal Giveaways Competition Using Twibbonize',
                link: '/testimonials/danone',
            },
            {
                title: 'Acer\'s Practical Way In Utilizing Twibbonize',
                link: '/testimonials/acer',
            },
            {
                title: 'Embracing The Convenience Of Twibbonize, Just Like AIESEC',
                link: '/testimonials/aiesec',
            },
        ]
    }
    return null;
});

const filteredMoreLinks = computed(() => {
    return moreLinks.value.filter(({ link }) => link !== route.path);
});

let articleData = ref('');

import(`@/assets/json/${route.params.uri}.json`).then((module) => {
    articleData.value = module.default;
});

const breadcrumbLinks = computed(() => {
    let links = [{ title: articleData.value.title }];

    if (articleType.value === 'use-case') links.unshift({ title: 'Use Case', link: '/use-cases' });
    if (articleType.value === 'testimonial')  links.unshift({ title: 'Testimonial', link: '/testimonials' });

    return links;
});
</script>

<template>
    <LayoutMain>
        <div class="article-page">
            <ArticleShare/>
            <div class="article-container">
                <QBreadcrumbs class="article-breadcrumbs" :links="breadcrumbLinks"/>
            </div>
            <div class="article-container">
                <article class="article-content">
                    <ArticleCategory :title="articleData.category"/>
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
                <ArticleMore  v-if="moreLinks" class="article-more" title="More Use Cases" :links="filteredMoreLinks"/>
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