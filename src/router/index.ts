import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../views/Signup.vue'
import Catalog from '../views/Catalog.vue'
import Cart from '../views/Cart.vue'
import WishList from '../views/WishList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishList
    },
    {
      path: '/item/:id',
      name: 'item-id',
      component: () => import('../views/Product.vue')
    },
    // Error 404
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: () => import('../views/Error404.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
