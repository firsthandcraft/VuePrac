<script setup>
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
</script>
<template>
  <!-- <h1>Counter: {{ counterStore.counter }}</h1>
  <button @click="counterStore.increment">증가</button>
  <button @click="counterStore.decrement">감소</button>
  <hr />
  <input type="text" v-model="counterStore.counter" />
  <hr />
  <h2>{{ counterStore.numOddEven }}</h2> -->
</template>