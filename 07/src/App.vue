<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div>

  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>

<RouterView />
</div>
</template>

<style scoped>
</style>
