// import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import ContentPre from '../views/ContentPre.vue'
import Content from '../components/Content.vue'
import ContentMenu from '../components/ContentMenu.vue'
import Ground from '../components/Ground.vue'
import ContentRes from '../views/ContentRes.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path:'/',
        component:ContentMenu,
      },
      {
        path:'/ground',
        component:Ground,
        redirect: "/ground/content",
        children:[
          {
            path : 'preview',
            component:ContentPre
          },
          {
            path : 'content',
            component:Content
          },
          {
            path : 'response',
            component:ContentRes
          },
        ]
      },


    ],
  });
  
  export { router }; // 라우터를 내보내기

