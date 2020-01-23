import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import data_siswa from '../views/data_siswa.vue'
import data_petugas from '../views/data_petugas.vue'
import input_pelanggaran from '../views/input_pelanggaran'
import data_pelanggaran from '../views/data_pelanggaran'
import poin_siswa from '../views/poin_siswa.vue'
import Login from '../views/Login.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/data_petugas',
    name: 'data_petugas',
    components: {default: data_petugas, header: Navbar, footer: Footer},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/data_siswa',
    name: 'data_siswa',
    components: {default: data_siswa, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/data_pelanggaran',
    name: 'data_pelanggaran',
    components: {default: data_pelanggaran, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/input_pelanggaran',
    name: 'input_pelanggaran',
    components: {default: input_pelanggaran, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/poin_siswa',
    name: 'poin_siswa',
    components: {default: poin_siswa, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
