import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogView from '../views/BlogView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: Home
  },
  {
    path: '/BlogView',
    name: 'blogview',
    component: BlogView,
    meta: { 
      requiresAuth: true,
    },
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Register',
    name: 'register',
    component: Register
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/MyAccount',
    name: 'myaccount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/authorised/MyAccount.vue'),
    meta: { 
      requiresAuth: true,
    },
    
  },
  {
    path: '/integrity',
    name: 'Integrity',
    component: () => import('../views/Integrity.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/info/404.vue')
  },
  {
    path: '/logedout',
    name: 'Logedout',
    component: () => import('../views/Logedout.vue')
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.user){
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
