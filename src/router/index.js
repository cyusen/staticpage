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
        path: '/self',
        name: 'Self',
        component: () => import('../views/first/Self.vue')
      },
      {
        path: '/choice',
        name: 'Choice',
        component: () => import('../views/find/Choice.vue')
      },
      {
        path: '/python',
        name: 'Python',
        component: () => import('../views/find/Python.vue')
      },
      {
        path: '/every',
        name: 'Every',
        component: () => import('../views/find/Every.vue')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('../views/find/Shop.vue')
      },
      {
        path: '/notice',
        name: 'Notice',
        component: () => import('../views/notice/Notice.vue')
      },
      {
        path: '/conch',
        name: 'Conch',
        component: () => import('../views/notice/Conch.vue')
      },
      {
        path: '/convert',
        name: 'Convert',
        component: () => import('../views/notice/Convert.vue')
      },
      {
        path: '/exercise',
        name: 'Exercise',
        component: () => import('../views/notice/Exercise.vue')
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('../views/notice/Message.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../views/notice/Setting.vue')
      },
      {
        path: '/help',
        name: 'Help',
        component: () => import('../views/notice/Help.vue')
      },
      {
        path: '/word',
        name: 'Word',
        component: () => import('../views/person/Word.vue')
      },
      {
        path: '/pencil',
        name: 'Pencil',
        component: () => import('../views/person/Myword/Pencil.vue')
      },
      {
        path: '/book',
        name: 'Book',
        component: () => import('../views/person/Myword/Book.vue')
      },
      {
        path: '/things',
        name: 'Things',
        component: () => import('../views/person/Myword/Things.vue')
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
      },
      {
        path: '/clear1',
        name: 'Clear1',
        component: () => import('../views/person/Myword/Clear1.vue')
      },
      {
        path: '/new',
        name: 'New',
        component: () => import('../views/person/Myword/New.vue')
      },
      {
        path: '/bag',
        name: 'Bag',
        component: () => import('../views/person/Bag.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
