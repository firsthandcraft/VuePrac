<script setup>
import { RouterLink, RouterView } from 'vue-router'
import{useCounterStore} from "@/stores/counter.js"
const counterStore= useCounterStore();
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/api">Api</RouterLink>
      </nav>
    </div>

    <h1>couter:: {{ counterStore.counter }}</h1>
    <h1>couter:: {{ counterStore.numOddEven }}</h1>
    <input type="text" v-model="counterStore.couter">
    <button @click="counterStore.increment">+</button>
    <button  @click="counterStore.decrement">-</button>
  </header>

  <RouterView />
</template>
