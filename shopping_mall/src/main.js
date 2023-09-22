import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from './components/Home.vue'; // Home 컴포넌트를 임포트합니다.

const routes =[
    { path: '/', component: Home },
]
const router  = createRouter({
    history:createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
