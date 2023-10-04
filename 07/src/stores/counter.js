import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {//'counter' 는 추후 보여지는 화면에서 식별이름으로 쓰인다. 
  const count = ref(0) // state:상태
  const doubleCount = computed(() => count.value * 2)
  //getters:게터는 스토어의 상태에 대한 계산된 값
  function increment() {
    count.value++
  }
  //action:액션은 컴포넌트의 메서드

  return { count, doubleCount, increment }
})
