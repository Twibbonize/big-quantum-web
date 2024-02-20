import { RouterView, createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CreatorsPage from '@/views/CreatorsPage.vue';
import PlusPage from '@/views/PlusPage.vue';
import TestPage from '@/views/TestPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import OwnProfilePage from '@/views/OwnProfilePage.vue';
import CampaignPage from '@/views/CampaignPage.vue';
import OwnCampaignPage from '@/views/OwnCampaignPage.vue';
import PreferencesPage from '@/views/PreferencesPage.vue';
import CollectionPage from '@/views/CollectionPage.vue';
import ExplorePage from '@/views/ExplorePage.vue';
import LeaderboardPage from '@/views/LeaderboardPage.vue';
import CampaignFeedsPage from '@/views/CampaignFeedsPage.vue';
import PostPage from '@/views/PostPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
            meta: {
                navbarSearch: true
            }
        },

        {
            path: '/explore/:tab(campaign|collection|creator)?',
            name: 'explore',
            component: ExplorePage,
            props: true,
            meta: {
                navbarSearch: false
            }
        },
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: LeaderboardPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/creators',
            name: 'creators',
            component: CreatorsPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/plus',
            name: 'plus',
            component: PlusPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/test',
            name: 'test',
            component: TestPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/u/universetech',
            name: 'profile',
            component: ProfilePage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/c/:uri',
            name: 'collection',
            component: CollectionPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/profile',
            name: 'own-profile',
            component: OwnProfilePage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/hanoi-art',
            name: 'campaign',
            component: CampaignPage,
            meta: {
                navbarSearch: true,
                transition: 'slide-fade'
            },
            children: [
                {
                    path: 'admin',
                    name: 'own-campaign',
                    component: OwnCampaignPage,
                    meta: {
                        navbarSearch: true,
                        transition: 'slide-fade'
                    }
                },
                {
                    path: 'feeds',
                    name: 'campaign-feeds',
                    component: CampaignFeedsPage,
                    meta: {
                        transition: 'slide-up'
                    }
                }
            ]
        },
        {
            path: '/settings',
            name: 'settings',
            component: PreferencesPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/p/:uri',
            name: 'post',
            component: PostPage,
            props: true,
            meta: {
                navbarSearch: false,
                transition: 'slide-fade'
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 };
    }
});

export default router;
