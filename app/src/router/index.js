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
import CampaignSupportPage from '@/views/CampaignSupportPage.vue';
import PostPage from '@/views/PostPage.vue';
import CreateCampaignPage from '@/views/CreateCampaignPage.vue';
import UseCasePage from '@/views/UseCasePage.vue';
import TestimonialPage from '@/views/TestimonialPage.vue';
import ArticlePage from '@/views/ArticlePage.vue';
import PricingPage from '@/views/PricingPage.vue';
import PricingSupporterPage from '@/views/PricingSupporterPage.vue';
import PricingCreatorPage from '@/views/PricingCreatorPage.vue';
import CheckoutPage from '@/views/CheckoutPage.vue';

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
            path: '/create/:type',
            name: 'create-campaign',
            component: CreateCampaignPage
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
            children: [
                {
                    path: '',
                    name: 'own-profile',
                    component: OwnProfilePage,
                    meta: {
                        navbarSearch: true
                    }
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: PreferencesPage,
                    meta: {
                        navbarSearch: true
                    }
                }
            ]
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
                    path: 'feeds',
                    name: 'campaign-feeds',
                    component: CampaignFeedsPage,
                    meta: {
                        transition: 'slide-up'
                    }
                },
                {
                    path: 'support',
                    name: 'campaign-support',
                    component: CampaignSupportPage,
                    meta: {
                        transition: 'slide-up'
                    }
                }
            ]
        },
        {
            path: '/hanoi-art/admin',
            name: 'own-campaign',
            component: OwnCampaignPage,
            meta: {
                navbarSearch: true,
                transition: 'slide-fade'
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
        },
        {
            path: '/use-cases',
            name: 'usecases',
            component: UseCasePage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/use-cases/:uri',
            name: 'use-cases-article',
            component: ArticlePage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/testimonials',
            name: 'testimonials',
            component: TestimonialPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/testimonials/:uri',
            name: 'testimonials-article',
            component: ArticlePage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: PricingPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/pricing/supporters',
            name: 'pricing-supporters',
            component: PricingSupporterPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/pricing/creators',
            name: 'pricing-creators',
            component: PricingCreatorPage,
            meta: {
                navbarSearch: true
            }
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: CheckoutPage
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 };
    }
});

export default router;
