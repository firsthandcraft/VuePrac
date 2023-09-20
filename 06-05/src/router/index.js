import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HeaderView from '../views/HeaderView.vue'
import FooterView from '../views/FooterView.vue'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      components:{
        default:IndexView,
        header:HeaderView,
        footer:FooterView,
        main:MainView
      },
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
