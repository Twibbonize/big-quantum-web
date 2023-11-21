import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CreatorsPage from '@/views/CreatorsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:HomePage,
    },
    {
      path: '/creators',
      name: 'creators',
      component: CreatorsPage,
    }
  ]
})

export default router
