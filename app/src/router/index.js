import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CreatorsPage from '@/views/CreatorsPage.vue'
import PlusPage from '@/views/PlusPage.vue'

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
    },
    {
      path: '/plus',
      name: 'plus',
      component: PlusPage,
    }
  ]
})

export default router
