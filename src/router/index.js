import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../views/FirstPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/firstpage',
    children: [
      {
        path: '/firstpage',
        name: 'FirstPage',
        component: FirstPage
      },
      { 
        path: '/class',
        name: 'Class',
        component: () => import('../views/Class.vue')
      },
      {
        path: '/find',
        name: 'Find',
        component: () => import('../views/Find.vue')
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('../views/Personal.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
