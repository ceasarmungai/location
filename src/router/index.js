import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Admin from '@/components/Admin'
import Driver from '@/components/Driver'

Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },{
      path: '/driver',
      name: 'Driver',
      component: Driver,
      meta: {
        requiresAuth: true
      }
    },{
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

/*export default new Router({
  routes: [{
      path: '/driver',
      name: 'Driver',
      component: Driver,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/signup',
      name: 'Signp',
      component: Signup,
      meta: {
        guest: true
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(userAuth => {
    if (!userAuth && to.matched.some(record => record.meta.requiresAuth)) {
      next({
        name: 'Signin'
      })
    } else if (userAuth) {
      if (to.matched.some(record => record.meta.guest)) {
        next(from.fullPath)
      } else {
        firebase.firestore().collection("roles").doc(userAuth.uid).get().then(snapShot => {
          if (snapShot.data().isAdmin) {
            next({
              name: 'Admin'
            })
          } else {
            next({
              name: 'Driver'
            })
          }
        })
      }
    } else {
      next()
    }
  })
  next()
})
*/