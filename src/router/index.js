import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/customerService',
      name: 'customerService',
      component: () => import('../views/CustomerService.vue')
    },
    {
      path: '/deals',
      name: 'deals',
      component: () => import('../views/Deals.vue')
    },
    {
      path: '/giftCards',
      name: 'giftCards',
      component: () => import('../views/GiftCards.vue')
    },
    {
      path: '/sell',
      name: 'sell',
      component: () => import('../views/Sell.vue')
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import('../views/Lists.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/Privacy.vue')
    },
    {
      path: '/returns',
      name: 'returns',
      component: () => import('../views/Returns.vue')
    },
    {
      path: '/termsofuse',
      name: 'termsofuse',
      component: () => import('../views/TermsOfUse.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/forgotPass',
      name: 'forgotPass',
      component: () => import('../views/ForgotPass.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../views/Address.vue')
    },
    
  ]
})

export default router
