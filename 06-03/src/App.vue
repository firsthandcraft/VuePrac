<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div>
  <RouterLink to="/home">Home</RouterLink>
  <br>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
</div>
</template>
