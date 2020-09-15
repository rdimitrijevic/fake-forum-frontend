import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthView from "@/views/AuthView";
import TopicsView from "@/views/TopicsView";
import PostsView from "@/views/PostsView";

Vue.use(VueRouter)

const routes = [
   {
     path: '/',
     name: 'AuthView',
     component: AuthView,
     meta: {
       requiresAuth: false
     }
   },
   {
     path: '/home',
     name: 'TopicsView',
     component: TopicsView,
     meta: {
       requiresAuth: false
     }
   },
   {
     path: '/topic/:id',
     name: 'PostsView',
     component: PostsView,
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
