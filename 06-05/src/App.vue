<script setup>
</script>

<template>
<div>
  <h2>app.vue</h2>
  <div style="width:80%;height:80vh;margin:0 auto; background-color: aliceblue;border:1px solid #000;padding: 40px;">
    <h3>this is routerview</h3>
    <router-view></router-view>
    <router-view name="header"></router-view>
    <router-view name="main"></router-view>
    <router-view name="footer"></router-view>
  </div>
</div>
</template>
