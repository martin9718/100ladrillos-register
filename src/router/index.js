import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/signup',
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import("../views/SignUp"),
    meta:{
      layout: 'RegisterLayout'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
