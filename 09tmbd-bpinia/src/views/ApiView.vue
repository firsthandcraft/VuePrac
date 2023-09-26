<script setup>
import { onBeforeMount, ref } from "vue";

const movie = ref(null);

onBeforeMount(() => {
  // GET, POST, PATCH + PUT
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTZkYzU2NjEwMDE4ZTE0ZDg3ZDdmNjI4MjhlNjNhOSIsInN1YiI6IjYwNzFiYmNmNDk4YmMyMDA2YzdmODkyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TaPo1MElvCskaB0NtIo2jZabbZw6r4Q866fa8Puu2Z4",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((response) => (movie.value = response))
    .catch((err) => console.error(err));
});
</script>
<template>
  <h1>ApIView</h1>
  <ul>
    <li v-for="item in movie?.results" :key="item.id">
      <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`" />
      {{ item.title }}
    </li>
  </ul>
</template>
