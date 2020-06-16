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
      },
      {
        path: '/notice',
        name: 'Notice',
        component: () => import('../views/notice/Notice.vue')
      },
      {
        path: '/word',
        name: 'Word',
        component: () => import('../views/person/Word.vue')
      },
      {
        path: '/myclass',
        name: 'Myclass',
        component: () => import('../views/person/Myclass.vue')
      },
      {
        path: '/myword',
        name: 'Myword',
        component: () => import('../views/person/Myword.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
