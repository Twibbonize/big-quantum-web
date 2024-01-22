import { RouterView, createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CreatorsPage from '@/views/CreatorsPage.vue';
import PlusPage from '@/views/PlusPage.vue';
import TestPage from '@/views/TestPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import OwnProfilePage from '@/views/OwnProfilePage.vue';
import CampaignPage from '@/views/CampaignPage.vue';
import PreferencesPage from '@/views/PreferencesPage.vue';
import CollectionPage from '@/views/CollectionPage.vue';
import ExplorePage from '@/views/ExplorePage.vue';
import LeaderboardPage from '@/views/LeaderboardPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },

        {
            path: '/explore/:tab(campaign|collection|creator)?',
            name: 'explore',
            component: ExplorePage,
            props: true
        },
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: LeaderboardPage
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
            path: '/c/:uri',
            name: 'collection',
            component: CollectionPage
        },
        {
            path: '/profile',
            name: 'own-profile',
            component: OwnProfilePage
        },
        {
            path: '/hanoi-art',
            name: 'campaign',
            component: CampaignPage
        },
        {
            path: '/settings',
            name: 'settings',
            component: PreferencesPage
        },
        {
            path: '/p/:uri',
            name: 'post',
            component: RouterView
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 };
    }
});

export default router;
