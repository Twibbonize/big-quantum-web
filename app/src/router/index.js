import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CreatorsPage from '@/views/CreatorsPage.vue';
import PlusPage from '@/views/PlusPage.vue';
import TestPage from '@/views/TestPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import OwnProfilePage from '@/views/OwnProfilePage.vue';
import CampaignPage from '@/views/CampaignPage.vue';
import PreferencesPage from '@/views/PreferencesPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/explore',
            name: 'explore',
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
            path: '/u/universetech',
            name: 'profile',
            component: ProfilePage
        },
        {
            path: '/profile',
            name: 'own-profile',
            component: OwnProfilePage
        },
        {
            path: '/campaign',
            name: 'campaign',
            component: CampaignPage
        },
        {
            path: '/settings',
            name: 'settings',
            component: PreferencesPage
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 };
    }
});

export default router;
