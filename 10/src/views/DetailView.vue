<script setup>
    import { onBeforeMount } from 'vue';
    import { useRoute,useRouter } from 'vue-router';
    import { useMovieStore } from '@/stores/movie.js';
    const route =useRoute();
    const movieStore = useMovieStore();
    onBeforeMount(()=>{
        console.log(route.params.id)
        movieStore.getMovieDetail(route.params.id);
    })

</script>

<template>
<div>
    <h1>Detail</h1>
    <div v-if="!movieStore.isLoading">
    <img :src="`https://image.tmdb.org/t/p/w500${movieStore.movieDetail?.poster_path}`" alt="">
    <p>{{ movieStore.movieDetail?.title }}</p>
   </div>
   <div v-else>isLoading...</div>
</div>
</template>