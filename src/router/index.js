import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Movie',
    name: 'Movie',
    component: () => import("@/views/Movie")
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: () => import("@/views/Mine")
  },
  {
    path: '/Cinema',
    name: 'Cinema',
    component: () => import("@/views/Cinema")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
