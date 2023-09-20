<script setup>
import {computed,onBeforeMount,ref,onMounted,onBeforeUpdate, onUpdated,reactive} from "vue";
defineProps({
    title:String,
    default(){
      return "default"
    }
})
const count = ref(0);
  //ref는 .value로 접근
  //refImp로 변경추적이 가능한 것으로 감싸주는것임
const numOddAdd = computed(() => {
  return count.value % 2 === 0 ? "짝수" : "홀수";
});
const arr = reactive(['banana','apple']);
const arr2 = reactive({name:'park',age:"12"});
//reactive는 .value없이 접근가능
// const count3 = ref(0); 
// const count3 = (0);  같은 내용이므로 
//reactive에서 자료형을 바꿀때 추적이 안된다.
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
onBeforeMount(()=>{
  console.log("onBeforeMount")
  console.log(arr);
  console.log(arr[0]);
  console.log(arr2.name);
  console.log(arr2);
  console.log(count);
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onUpdated(() => {
  console.log("onUpdated");
});
</script>
<template>
<div>
  <h1>ver.3.2 ::CompositionUpAPI</h1>
  <p>3.2에서 업그레이드 된 api를 사용한다.  </p>
  <p>script에 setup만 붙이고 return을 제거한다.</p>
  <h2>count: {{ count }}</h2>
  <h2>{{ numOddAdd }}</h2>
  <button @click="increment">증가</button>
  <button @click="decrement">감소</button>
</div>
</template>