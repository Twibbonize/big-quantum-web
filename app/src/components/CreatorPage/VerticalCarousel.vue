<script setup>
import { ref } from 'vue';

const values = [
  {
    icon: '/assets/img/icons/inspire.svg',
    title: 'Inspire',
  },
  {
    icon: '/assets/img/icons/unite.svg',
    video: '/assets/videos/unite.mp4',
    title: 'Unite',
    subtitle: 'your supporters',
    description: 'Bring all your campaign’s supporter community  on your Twibbonize page; where supporters connect and you see the impact!'
  },
  {
    icon: '/assets/img/icons/entertain.svg',
    title: 'Entertain',
  },
  {
    icon: '/assets/img/icons/grow.svg',
    title: 'Grow',
  },
]

const index = ref(1);
</script>

<template>
  <div class="container">
    <div class="d-flex pt-5 row">
      <div class="d-flex flex-column justify-content-center col">
        <div
          v-for="{ icon, title, subtitle, description }, i in values" :key="`value-${i}`"
          class="d-flex p-4"
          :class="{ 'creators-values__tab-active': i === index, 'align-items-center': i !== index }"
        >
          <img class="creators-values__icon mr-3" :src="icon" :alt="title">
          <div v-if="i === index" class="d-flex flex-column">
            <div class="d-flex">
              <h5 class="creators-values__title-active">
                <span class="mr-1">{{ title }}</span>{{ subtitle }}
              </h5>
            </div>
            <p class="color_black mt-3">{{ description }}</p>
          </div>
          <h5 v-else class="fw-bold fs-4">{{ title }}</h5>
        </div>
      </div>
      <div class="d-flex col justify-content-end">
        <video class="creators-values__video" muted autoplay :src="values[index].video"></video>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .creators-values {
    &__icon {
      height: 60px;
      width: 60px;
    }
    &__video {
      border-radius: 20px;
      outline: 1px solid rgba(27, 27, 27, .2);
    }
    &__tab-active {
      border-radius: 10px;
      border: 1px solid rgba(27, 27, 27, 0.20);
      background: linear-gradient(103deg, #DEE8E8 23.92%, rgba(222, 232, 232, 0.00) 105.14%);
    }
    &__title-active {
      span {
        font-family: Marck Script;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 48px */
        letter-spacing: -2.4px;
        text-decoration: underline;
        transform: rotate(-3.671deg);

      }

      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%; /* 24px */
      letter-spacing: -0.48px;
    }
  }
</style>
