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
    }
  ]
})

export default router
