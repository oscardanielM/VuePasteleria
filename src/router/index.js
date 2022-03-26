import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/Pedido',
    name: 'Pedido',
    component: () => import('../views/PedidoView.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: {}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
