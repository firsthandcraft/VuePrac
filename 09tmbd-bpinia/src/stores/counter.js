import { defineStore } from "pinia";
import { computed, ref } from "vue";

// use[파일명]Store
// defineStore(파일명, {});
export const useCounterStore = defineStore("counter", () => {
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
  const reset = () => {
    counter.value = 0;
  };

  return { counter, numOddEven, increment, decrement, reset };
});
