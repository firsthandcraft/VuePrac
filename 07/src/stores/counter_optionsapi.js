import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// by options API
//화살표 함수 제거this
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
