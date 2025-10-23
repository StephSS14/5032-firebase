import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LogInView from '@/views/LogInView.vue'
import AccessDenied from '@/views/AccessDenied.vue'
import LogOut from '@/views/LogOut.vue'
import { isAuthenticated } from '@/states/global'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LogInView
  },
  {
    path: '/access-denied',
    name: 'Access-Denied',
    component: AccessDenied
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogOut,
    meta: { requiresAuth: true }
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/addBook',
    name: 'AddBook',
    component: AddBookView
  }
]

const router = createRouter({
  history: createWebHistory('/5032-firebase/'),
  routes
})

router.beforeEach((to, form, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/access-denied')
  } else {
    next()
  }
})

export default router
