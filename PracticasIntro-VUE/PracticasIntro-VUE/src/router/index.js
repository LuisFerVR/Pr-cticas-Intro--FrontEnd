import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import paginaDelPastelero from '../views/paginaDelPastelero.vue'
import pasteleriaMenu from '../views/pasteleriaMenu.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/paginaDelPastelero',
    name: 'paginaDelPastelero',
    component: paginaDelPastelero
  },
  {
    path: '/MenuPasteleria',
    name: 'MenuPasteleria',
    component: pasteleriaMenu
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
