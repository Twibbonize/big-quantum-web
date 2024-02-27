<script setup>
import LayoutMain from '@/components/layouts/LayoutMain.vue';
import QBreadcrumbs from '@/components/atoms/QBreadcrumbs.vue';
import ArticleMore from '@/components/molecules/Article/More.vue';
import ArticleCategory from '@/components/molecules/Article/Category.vue';
import ArticleTitle from '@/components/molecules/Article/Title.vue';
import ArticleBlock from '@/components/molecules/Article/Block.vue';

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
            paragraph: 'In an era where digital engagement plays a pivotal role in shaping event experiences, Twibbonize emerges as a transformative ally for organizers seeking innovative ways to promote and elevate their events. This dynamic digital tool goes beyond conventional promotional strategies, offering organizers a multifaceted approach to prepare their digital marketing assets, engage with participants, and amplify their event visibility. See how this versatile tool enriches the landscape of event promotion by providing multifaceted solutions for event organizers.',
            line: true,
        },
        {
            subtitle: 'Facilitating Marketing Asset Creation',
            paragraph: 'Twibbonize functions as a valuable tool for organizers to seamlessly create marketing assets. Usually, Organizers need a unified design for social media posts in large quantities produced within a short period. There is this unspoken demand about making social media channels, usually Instagram, aesthetically pleasing and emphasize visual appearance. This functionality streamlines the process of generating visually cohesive and engaging promotional material. By providing organizers with the ability to quickly craft eye-catching frames that align with their event\'s branding, Twibbonize becomes an essential asset for producing marketing collateral that resonates with the target audience. This feature enhances efficiency, empowering organizers to work more effectively in creating compelling visual content for their promotional campaigns.'
        },
        {
            subtitle: 'Enhancing Digital Marketing and Online Presence',
            paragraph: 'The adoption of event-specific frames on social media platforms becomes a pivotal element in the digital marketing strategy for Organizers to promote their events. It serves as a visually compelling call-to-action, prompting the general public and their target market to engage with the event tangibly. When these twibbon frames circulate on participants\' profiles or exist in their social media posts, participants have already contributed to the event\'s online presence, creating a buzz that extends beyond traditional promotional methods. This user-driven content becomes a valuable asset for digital marketing campaigns, providing authentic and visually appealing material to showcase the event across various digital channels that benefit the Organizers and the event.'
        },
        {
            paragraph: 'Organizers from different industries can adapt and implement these functions at various events across music, fashion, conventions, awards, film, food and beverages, bazaars, workshops, sports, even competitions. We try to collect various examples from real creators on our platform that utilize Twibbonize as an extension of their Marketing measure by utilizing twibbon frames that you can learn from.'
        }
    ],
}
</script>

<template>
    <LayoutMain>
        <div class="article-page">
            <QBreadcrumbs :links="links"/>
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