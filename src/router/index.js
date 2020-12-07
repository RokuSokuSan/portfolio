import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogView from '../views/BlogView.vue'
import Login from '../views/Login.vue'





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
    component: BlogView
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/BlogView',
    name: 'BlogView',
    component: BlogView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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

export default router
