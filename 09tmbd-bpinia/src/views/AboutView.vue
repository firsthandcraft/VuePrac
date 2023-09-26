<script setup>
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
</script>
<template>
  <h1>Counter: {{ counterStore.counter }}</h1>
  <button @click="counterStore.reset">리셋</button>
</template>
