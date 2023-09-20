<script setup>
import Header from './HeaderView.vue';
Header
</script>

<template>
  <main style="background-color: rgb(197, 221, 243);border:1px solid #000;padding: 20px;">
    <h2>homeview</h2>
    <Header />
    <router-link to="/home/childoneview"><button>ChildOneView</button></router-link>
    <router-link to="/home/childtwoview"><button>ChildTwoView</button></router-link>
    <h3>this is routerview</h3>
    <router-view></router-view>

  </main>
</template>
