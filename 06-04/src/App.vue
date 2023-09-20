<script setup>
</script>

<template>
<div>
  <h2>app.vue</h2>
  <div style="width:80%;height:80vh;margin:0 auto; background-color: aliceblue;border:1px solid #000;padding: 40px;">
    <router-link to="/home"><button>HomeView</button></router-link>
    <router-link to="/"><button>IndexView</button></router-link>
    <h3>this is routerview</h3>
    <router-view></router-view>
  </div>
</div>
</template>
