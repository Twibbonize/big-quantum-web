import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CreatorsPage from '@/views/CreatorsPage.vue';
import PlusPage from '@/views/PlusPage.vue';
import TestPage from '@/views/TestPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import CampaignPage from '@/views/CampaignPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/creators',
            name: 'creators',
            component: CreatorsPage
        },
        {
            path: '/plus',
            name: 'plus',
            component: PlusPage
        },
        {
            path: '/test',
            name: 'test',
            component: TestPage
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfilePage
        },
        {
            path: '/campaign',
            name: 'campaign',
            component: CampaignPage
        },
    ]
});

export default router;
