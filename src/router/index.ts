import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue")
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import("../views/Signup.vue")
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import("../views/Catalog.vue")
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/WishList.vue')
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
