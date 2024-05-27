import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetallesProducto from '../views/DetallesProducto.vue'
import Carrito from '../views/Carrito.vue'


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
      path: '/producto/:id',
      name: 'detallesproducto',
      component: DetallesProducto,
      props: true
    },
    {
      path: '/customerService',
      name: 'customerService',
      component: () => import('../views/CustomerService.vue')
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: () => import('../views/Pedidos.vue')
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
      path: '/carrito',
      name: 'carrito',
      component: Carrito,
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
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Categories.vue')
    }
  ]
})

export default router
