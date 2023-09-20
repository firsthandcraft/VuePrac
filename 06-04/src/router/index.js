import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import ChildDefaultView from '../views/ChildDefaultView.vue'
import ChildOneView from '../views/ChildOneView.vue'
import ChildTwoView from '../views/ChildTwoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:IndexView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      redirect: "/home/childdefaultview",
        children:[
          {
            path : 'childdefaultview',
            component:ChildDefaultView
          },
          {
            path : 'childoneview',
            component:ChildOneView
          },
          {
            path : 'childtwoview',
            component:ChildTwoView
          },
        ]
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
