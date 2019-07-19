import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Harga from './views/Harga.vue'
import Informasi from './views/Informasi.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/informasi',
      name: 'informasi',
      component: Informasi
    },
    {
      path: '/harga',
      name: 'harga',
      component: Harga
    },
    {
      path: '/tentang',
      name: 'tentang',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Tentang.vue')
    }
  ]
})
