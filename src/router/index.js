import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/registro/usuario',
  },
  {
    path: '/registro/usuario',
    name: 'SignUp',
    component: () => import("../views/SignUp"),
    meta:{
      layout: 'RegisterLayout'
    }
  },
  {
    path: '/registro/telefono',
    name: 'Phone',
    component: () => import("../views/signUp/Phone"),
    meta:{
      layout: 'RegisterLayout'
    }
  },
  {
    path: '/registro/perfil',
    name: 'Profile',
    component: () => import("../views/signUp/Profile"),
    meta:{
      layout: 'RegisterLayout'
    }
  },
  {
    path: '/registro/curp',
    name: 'Curp',
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
