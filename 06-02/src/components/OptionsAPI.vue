<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    numOddAdd() {
      return this.count % 2 === 0 ? "짝수" : "홀수";
    },
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
<template>
<div>
  <h1>ver 2 ::Options API</h1>
  <h2>count: {{ count }}</h2>
  <h2>{{ numOddAdd }}</h2>
  <button @click="increment">increment</button>
  <button @click="decrement">decrement</button>
</div>
</template>