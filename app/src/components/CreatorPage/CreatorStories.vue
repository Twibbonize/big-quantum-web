<script setup>
import { onMounted } from 'vue';
import { register } from 'swiper/element/bundle';

const stories = [
  {
    image: 'https://placehold.co/600x400',
    title: 'The 2024 State of the Website',
    description: 'Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024',
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'The 2024 State of the Website',
    description: 'Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024',
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'The 2024 State of the Website',
    description: 'Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024',
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'The 2024 State of the Website',
    description: 'Discover key challenges today’s marketing teams are facing, as well as opportunities for businesses in 2024',
  }
]

onMounted(() => {
  register();
})
</script>

<template>
  <div class="creator-stories d-flex flex-column align-items-center">
    <h4>Stories from our Creators</h4>
    <p>Unique campaigns brought to life with Twibbonize</p>
    <div class="container">
      <swiper-container class="creator-stories__swiper w-100" slides-per-view="3" space-between="32">
        <swiper-slide v-for="{ image, title, description},i in stories" :key="`stories-${i}`" class="creator-stories__card">
          <img
            class="w-100"
            :src="image"
            :alt="title"
          >
          <h5>{{ title }}</h5>
          <p>{{ description }}</p>
  
          <div class="heading-section d-flex align-items-end mt-5">
            <a class="d-flex align-items-center color_black" href="explore-3.html">View All<i class="ri-arrow-right-line"></i></a>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style lang="scss">
  .creator-stories {
    background: #DEE8E8;
    padding: 96px 0;

    h4 {
      text-align: center;
      font-family: Manrope;
      font-size: 56px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 56px */
      letter-spacing: -2.24px;
    }

    p {
      margin-top: 32px;
      text-align: center;
      font-family: Manrope;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 22px */
    }

    &__swiper {
      margin-top: 64px;
    }

    &__card {
      padding: 32px;
      border-radius: 16.73px;
      border: 1px solid rgba(27, 27, 27, 0.10);
      background: #FFF;

      img {
        border-radius: 10px;
      }

      h5 {
        text-align: left;
        margin-top: 32px;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 28px */
        letter-spacing: -1.12px;
      }

      p {
        text-align: left;
        margin-top: 16px;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 115%; /* 20.7px */
      }
    }
  }
</style>