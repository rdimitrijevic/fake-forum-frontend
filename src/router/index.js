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
       requiresAuth: true
     }
   },
   {
     path: '/topic/:id',
     name: 'PostsView',
     component: PostsView,
     meta: {
       requiresAuth: true
     }
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
        const token = Vue.cookie.get('user-token');
        if(!token) {
            router.push('/');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
