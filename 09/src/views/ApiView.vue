<script setup>
import { onBeforeMount,ref } from 'vue';

const data= ref(null);
const movie= ref(null);
onBeforeMount(()=>{
  //GET,POST,PUT,PATCH -데이터 전체 업데이트 patch
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => response.json())
  //     .then((json) => (data.value=json));
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUwNzc3Zjg2YTNhNDZjZDYzZDgzY2NjZGUyYjRhYiIsInN1YiI6IjY1MGU0YWVmZTFmYWVkMDEwMGU3ZjBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljo6Zx-6_kL8WMzv07A_xXCPZllYUhAqJHSK041zD-Y'
    }
  };

  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=1&sort_by=popularity.desc', options)
    .then((response) => response.json())
    .then((response) => (movie.value=response))
    .catch(err => console.error(err));
})

</script>
<template>
<h1>api</h1>
<h3>{{ data }}</h3>
<ul>
  <li v-for="item in movie?.results" :key="item.title">
    <img :src="`https://image.tmdb.org/t/p/w500/${ item.poster_path }`" alt="">
   {{ item.title }}</li>
</ul>
<h3>{{ movie?.results }}</h3>
<p>movie?.results  => ?는 RESULTS가 잇을때마 출력</p>

<p>tmdb 에 가서 api 들어가서 만들기 </p>
</template>