// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//router 설치후 넣기
import router from '@/router';
createApp(App).use(router).mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
