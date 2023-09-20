<script setup >
import router from '../router';
import userouter from 'vue-router'

const router= userouter ();
const goAbout=()=>{
  router.push('./about')
}
</script>
<template>
  <div>
    <h3>home</h3>
    <button @click="$router.push('./about')">move to about</button>
    <button @click="router.push('./about')">move to about</button>
    <button @click="goAbout">goAboutmove to about</button>
  </div>
</template>