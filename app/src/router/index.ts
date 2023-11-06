import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404View.vue')
    },
    {
      path: '/activity',
      name: 'Activity',

      component: () => import('@/views/ActivityView.vue')
    },
    {
      path: '/article',
      name: 'Article',

      component: () => import('@/views/ArticleView.vue')
    },
    {
      path: '/blog',
      name: 'Blog',

      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/collections',
      name: 'Collections',
      component: () => import('@/views/CollectionsView.vue')
    },
    {
      path: '/connect-wallet',
      name: 'ConnectWaller',
      component: () => import('@/views/ConnectWalletView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/creators',
      name: 'Creators',
      component: () => import('@/views/CreatorsView.vue')
    },
    {
      path: '/edit-profile',
      name: 'EditProfile',
      component: () => import('@/views/EditProfileView.vue')
    },
    {
      path: '/forum',
      name: 'Forum',
      component: () => import('@/views/ForumView.vue')
    },
    {
      path: '/home-1',
      name: 'Home1',
      component: () => import('@/views/Home1View.vue')
    },
    {
      path: '/home-2',
      name: 'Home2',
      component: () => import('@/views/Home2View.vue')
    },
    {
      path: '/home-3',
      name: 'Home3',
      component: () => import('@/views/Home3View.vue')
    },
    {
      path: '/home-4',
      name: 'Home4',
      component: () => import('@/views/Home4View.vue')
    },
    {
      path: '/item-details',
      name: 'ItemDetails',
      component: () => import('@/views/ItemDetailsView.vue')
    },
    {
      path: '/kit',
      name: 'Kit',
      component: () => import('@/views/KitView.vue')
    },
    {
      path: '/live-auctions',
      name: 'LiveAuctions',
      component: () => import('@/views/LiveAuctionsView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/market-place',
      name: 'MarketPlace',
      component: () => import('@/views/MarketPlaceView.vue')
    },
    {
      path: '/newsletter',
      name: 'Newsletter',
      component: () => import('@/views/NewsletterView.vue')
    },
    {
      path: '/no-results',
      name: 'NoResults',
      component: () => import('@/views/NoResultsView.vue')
    },
    {
      path: '/post-details',
      name: 'PostDetails',
      component: () => import('@/views/PostDetailsView.vue')
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: () => import('@/views/PrivacyView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/questions',
      name: 'Questions',
      component: () => import('@/views/QuestionsView.vue')
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: () => import('@/views/RankingView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/request',
      name: 'Request',
      component: () => import('@/views/RequestView.vue')
    },
    {
      path: '/submit-request',
      name: 'SubmitRequest',
      component: () => import('@/views/SubmitRequestView.vue')
    },
    {
      path: '/upcoming-projects',
      name: 'UpcomingProjects',
      component: () => import('@/views/UpcomingProjectsView.vue')
    },
    {
      path: '/upload-type',
      name: 'UploadType',
      component: () => import('@/views/UploadTypeView.vue')
    },
    {
      path: '/upload',
      name: 'Upload',
      component: () => import('@/views/UploadView.vue')
    }
  ]
})

export default router
