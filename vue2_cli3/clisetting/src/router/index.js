//페이지 넘기는곳 대부분views의 내용들
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // children: [
    //   {
    //     path: '',
    //     name: 'Main',
    //     component: () => import('../views/pages/Main'),
    //   },
    // ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/pages/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
