import { ref, computed } from 'vue'
import { defineStore, createPinia } from 'pinia'
import { piniaPluginPersistedstate } from "pinia-plugin-persistedstate"; // Import the correct plugin

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // Use the plugin

export const useCounterStore = defineStore('store', {

  actions: {
    setUser(data) {
      this.user = data
    }
  },
  plugins: [
    // Use PersistedState from piniaPluginPersistedstate
    piniaPluginPersistedstate({
      paths: ['user']
    })
  ]
})

export default pinia; // Export the configured Pinia instance
