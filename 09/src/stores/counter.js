import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// use [파일명] Store
//defineStore(파일명{});
export const useCounterStore = defineStore("counter",()=>{
	// state:() => ({
  //   counter :ref(0),
  // }), //data
	// getters:{
  //   numOddEven(state){
  //     return state.counter %2 ===0 ? "짝" : "헐"
  //   },

  // }, //computed
	// actions:{
  //   decrement(){
  //     this.couter --;
  //   },
  //   increment(){
  //     this.couter ++;
  //   }
  // }, // methods
  //setup 방식
  const counter = ref(0);
  const numOddEven = computed(() =>
    counter.value % 2 === 0 ? "짝수" : "홀수"
  );
  const increment = () => {
    counter.value++;
  };
  const decrement = () => {
    counter.value--;
  };

  return { counter, numOddEven, increment, decrement };
});
