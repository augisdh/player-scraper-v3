import Vue from 'vue'
import Router from 'vue-router'
import LogIn from './views/LogIn'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'logIn',
      component: LogIn,
      children: [
        {
          path: 'login',
          component: () => import(/* webpackChunkName: "login-comp" */ './components/LoginComp.vue')
        },
        {
          path: 'register',
          component: () => import(/* webpackChunkName: "register-comp" */ './components/RegisterComp.vue')
        }
      ],
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/app',
      name: 'mainApp',
      component: () => import(/* webpackChunkName: "main-app" */ './views/MainApp.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Checks for requiresAuth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // If not logged-in got to <login page> else <proceed to route>
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // If logged-in got to <app page> else <proceed to route>
    if (firebase.auth().currentUser) {
      next({
        path: '/app',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
