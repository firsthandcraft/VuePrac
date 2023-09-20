<script>
import {computed,onBeforeMount,ref,onMounted,onBeforeUpdate, onUpdated, reactive} from "vue";export default {
  setup() {
    const count = ref(0);
    const arr = reactive([]);
    const arr2 = reactive({});
    //reactive 배열과 객체를 정의할때 사용
    const numOddAdd = computed(() => {
      return count.value % 2 === 0 ? "짝수" : "홀수";
    });
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    onBeforeMount(() => {
      // code...
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(()=>{
      console.log("onBeforeUpdate")
    })
    onUpdated(()=>{
      console.log("onUpdated")
    })
    return {count,numOddAdd,increment,decrement,arr,arr2
    };
  },
};
</script>
<template>
<div>
  <h1>ver 3.0 ::Composition API</h1>
  <p>options api처러 setup 기능을 넣어주었다. </p>
  <h2>count: {{ count }}</h2>
  <h2>{{ numOddAdd }}</h2>
  <button @click="increment">증가</button>
  <button @click="decrement">감소</button>
</div>
</template>