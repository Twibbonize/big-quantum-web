import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

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
      component: () => import ('@/views/CreatorsPage.vue'),
    }
  ]
})

export default router
