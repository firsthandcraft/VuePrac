import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostCreateView from '../views/post/PostCreateView.vue'
import PostDetailView from '../views/post/PostDetailView.vue'
import PostEditView from '../views/post/PostEditView.vue'
import PostListView from '../views/post/PostListView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts/create',
      name: 'PostCreate',
      component: PostCreateView
    },
    {
      path: '/posts/edit',
      name: 'PostEdit',
      component: PostEditView
    },
    {
      path: '/posts/:id/edit',
      name: 'PostEdit',
      component: PostEditView
    },
    {
      path: '/posts/',
      name: 'PostList',
      component: PostListView
    },
    {
      path: '/posts/:id',
      name: 'PostDetail',//동적 세그먼트는 콜론(:)으로 표시합니다.
      component: PostDetailView
    },
  ]
})

export default router
