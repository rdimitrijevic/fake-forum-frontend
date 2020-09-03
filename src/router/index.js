import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthView from "@/views/AuthView";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'AuthView',
    component: AuthView,
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
