import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/product/index.vue'
import ProductDetail from '../views/product/detail.vue'
import Server from '../views/server/index.vue'
import Contact from '../views/server/contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/product/detail',
      name: 'productDetail',
      component: ProductDetail
    },
    {
      path: '/server',
      name: 'Server',
      component: Server
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router
