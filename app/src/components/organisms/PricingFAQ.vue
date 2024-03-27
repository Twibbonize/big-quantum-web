<script setup>
import { ref } from 'vue';

const faqLists = [
    {
        question:
            'Are the watermark-free and ad-free features only available to Twibbonize Premium account holders?',
        answer: 'Watermark-free and ad-free are two exclusive features for Twibbonize Premium users. These features allow users to download twibbon without any watermark and enjoy the Twibbonize experience without disruptive ads'
    },
    {
        question: 'How can we provide the free version of Twibbonize?',
        answer: 'There are ads in every campaign page in Twibbonize that allow us to grow and provide more campaign pages. Of course, we are trying to manage these ads so they won\'t disturb your campaign\'s quality and experience.'
    },
    {
        question: 'What does “Ad-Free” mean for the Twibbonize Premium users?',
        answer: '“Ad-Free” for Twibbonize Premium users means an uninterrupted experience with no advertisements. It allows for a cleaner, more user-friendly navigation throughout the Twibbonize platform.'
    },
    {
        question: 'What can we customize in the campaign?',
        answer: 'Twibbonize Premium users can customize the background and color of your campaign page on Twibbonize according to your brand or taste. So that your campaign can look different from the others.'
    },
    {
        question: 'What is private campaign?',
        answer: 'With private campaign feature, you can set your campaign to be visible only to certain people.'
    },
    {
        question: 'What kind of information do I get in Analytics?',
        answer: 'Analytics provide you with campaigns data. Those data include supporters, interactions, visitors, country & cities, and each module’s interactions data. With this information, you can predict and measure how successful your campaign is.'
    },
    {
        question: 'What are my payment options?',
        answer: 'You can easily pay online via a bank transfer, using a credit card, or e-wallet.'
    },
    {
        question: 'Will I get an invoice?',
        answer: 'You can easily download the invoice directly from your Twibbonize account.'
    },
    {
        question: 'Where can I find help related to Twibbonize usage?',
        answer: 'If you are looking for the “FAQ” page related to Twibbonize usage,click <a rel="noopener noreferrer" target="_blank" href="https://help.twibbonize.com/hc/en-us" class="font-bold text-main">Help Center</a>'
    }
];

const activeList = ref(null);

const changeActiveList = (i) => {
    if (activeList.value === i) activeList.value = null;
    else activeList.value = i;
};
</script>

<template>
    <div class="pricing-faq">
        <div class="container">
            <h2 class="title">Frequently asked questions</h2>
            <div class="content">
                <div
                    v-for="({ question, answer }, i) in faqLists"
                    class="accordion cursor-pointer"
                    :class="{ active: i === activeList, activeList }"
                    @click="changeActiveList(i)"
                >
                    <div class="flex flex-col gap-2">
                        <p class="question">{{ question }}</p>
                        <p class="answer" v-html="answer"></p>
                    </div>
                    <i class="ri-arrow-up-s-line arrow"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.pricing-faq {
    @apply bg-white;

    .container {
        @apply flex flex-col w-full xl:max-w-[1120px] sm:flex-row gap-[60px] px-5 sm:px-14 xl:px-0 py-20 sm:py-[100px];
    }

    .title {
        @apply flex-1 text-5xl sm:text-[48px] xl:text-[56px] lg:text-6xl font-bold leading-none;
    }

    .content {
        @apply flex flex-col flex-1 gap-6 xl:min-w-[416px];
    }

    .question {
        @apply text-xl leading-normal font-bold;
    }

    .accordion {
        @apply flex gap-6 pb-7 justify-between items-start;
        border-bottom: 1px solid #eaecf0;
    }

    .answer {
        @apply max-h-0 text-base leading-normal font-normal overflow-y-hidden;
        transition: all 0.3s ease-out;
    }

    .arrow {
        @apply text-main text-[32px] leading-none rotate-180;
        transition: all 0.3s linear;
    }

    .active {
        .arrow {
            @apply rotate-0;
            transition: all 0.3s linear;
        }

        .answer {
            @apply max-h-[200px];
            transition: all 0.3s ease-in;
        }
    }
}
</style>
