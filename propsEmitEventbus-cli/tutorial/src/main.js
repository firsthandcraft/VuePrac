import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// 
import StatusComopnents from './components/Header.vue'
loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  //.component('컴포넌트명','옵션')
  .component('AppStatus',StatusComopnents)
  .mount('#app')
