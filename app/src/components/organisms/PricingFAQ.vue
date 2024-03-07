<script setup>
import { ref } from 'vue';

const faqLists = [
  {
    question: 'Are the watermark-free and ad-free features only available to Twibbonize Premium account holders?',
    answer: 'Watermark-free and ad-free are two exclusive features for Twibbonize Premium users. These features allow users to download twibbon without any watermark and enjoy the Twibbonize experience without disruptive ads'
  },
  {
    question: 'How can we provide the free version of Twibbonize?',
  },
  {
    question: 'What does “Ad-Free” mean for the Twibbonize Premium users?'
  },
  {
    question: 'What can we customize in the campaign?'
  },
  {
    question: 'What is private campaign?'
  },
  {
    question: 'What kind of information do I get in Analytics?'
  },
  {
    question: 'What are my payment options?',
  },
  {
    question: 'Will I get an invoice?'
  },
  {
    question: 'Where can I find help related to Twibbonize usage?'
  }
];

const activeList = ref(null);

const changeActiveList = (i) => {
    if (activeList.value === i) activeList.value = null;
    else activeList.value = i;
}
</script>

<template>
    <div class="pricing-faq">
        <div class="container">
            <h2 class="title">Frequently asked questions</h2>
            <div class="content">
                <div
                    v-for="{ question, answer }, i in faqLists"
                    class="accordion cursor-pointer"
                    :class="{ 'active': i === activeList, activeList }"
                    @click="changeActiveList(i)"
                >
                    <div class="flex flex-col gap-2">
                        <p class="question">{{ question }}</p>
                        <p class="answer">{{ answer }}</p>
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
        @apply flex flex-col max-w-[1120px] sm:flex-row gap-[60px] px-5 sm:px-0 py-20 sm:py-[100px];
    }

    .title {
        @apply flex-1 text-5xl sm:text-[52px] md:text-[56px] lg:text-6xl font-bold leading-none;
    }

    .content {
        @apply flex flex-col flex-1 gap-6 sm:min-w-[416px];
    }

    .question {
        @apply text-xl leading-normal font-bold;
    }

    .accordion {
        @apply flex gap-6 pb-7 justify-between items-start;
        border-bottom: 1px solid #EAECF0;
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