import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld       from './components/HelloWorld';

import login            from './components/auth/monev_login.vue';
import register         from './components/website/register';


import pengumuman       from './components/website/pengumuman/pengumuman.vue';
import contact   from './components/website/contact';
import kakaoa         from './components/website/kegiatan/kakaoa';
import peraturan     from './components/website/peraturan';
import tentang     from './components/website/tentang';
import informasi     from './components/website/informasi';



// import './assets/css/kiken/kiken.css'

Vue.use(Router);


function loggedInRedirectDashboard(to, from, next) {
  if (localStorage.token) {
    next('/office');
  } else {
    next();
  }
}

function isLoggedIn(to, from, next) {
  if (localStorage.token) {
    next();
  } else {
    next('/login');
  }
}




let router =  new Router({
  routes : [

    {
      path: '/',
      name: '/HelloWorld',
      component: HelloWorld,
      beforeEnter: isLoggedIn,
    },
  
    {
    path: '/login',
    name: '/login',
    component: login,
    beforeEnter: loggedInRedirectDashboard,

    },
    {
      path: '/register',
      name: '/register',
      component: register,
      beforeEnter: isLoggedIn,

    },
    {
      path: '/kakaoa',
      name: '/kakaoa',
      component: kakaoa,
      beforeEnter: isLoggedIn,

    },
    {
      path: '/tentang',
      name: '/tentang',
      component: tentang,
      beforeEnter: isLoggedIn,

    },
    {
      path: '/informasi',
      name: '/informasi',
      component: informasi,
      beforeEnter: isLoggedIn,

    },
    {
      path: '/pengumuman',
      name: '/pengumuman',
      component: pengumuman,
      beforeEnter: isLoggedIn,

    },

    {
      path: '/contact',
      name: '/contact',
      component: contact,
      beforeEnter: isLoggedIn,

    },
    {
      path: '/peraturan',
      name: '/peraturan',
      component: peraturan,
      beforeEnter: isLoggedIn,

    },  
    ]

})


export default router;
 