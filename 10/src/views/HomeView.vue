<script setup>
import {useMovieStore} from '@/stores/movie.js'
import {onBeforeMount} from 'vue'

const movieStore = useMovieStore();
onBeforeMount(()=>{
movieStore.getMoviesList();
})

const getMovie=(num)=>{
  movieStore.getMoviesList(num);
}
</script>

<template>
  <main>
    <h3>home</h3>
    <ul>
      <li v-for="movie in movieStore.movie" :key="movie.id">
        <router-link :to="`/detail/${movie.id}`">{{ movie.title }}</router-link>
      </li>
    </ul>
    <button @click="getMovie">1</button>
    <button @click="getMovie">2</button>
  </main>
</template>
