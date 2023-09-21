// import { createApp } from 'vue'
// import App from './App.vue'
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);
// const router = new VueRouter({
//     routes:[

//     ]
// })

// new Vue({
//     rander: h => h(App),
//     router,
// }).$mount('#app')
// createApp(App)
//     .mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.js'; // 라우터 모듈을 import

const app = createApp(App);

// createApp() 인스턴스에 라우터를 적용
app.use(router);

app.mount('#app');