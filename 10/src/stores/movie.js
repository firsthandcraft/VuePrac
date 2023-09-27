import {defineStore} from "pinia"
import {ref} from 'vue';

export const useMovieStore= defineStore ("movie",()=>{
    const movie= ref(null);
    const movieDetail = ref(null);
    const isLoading = ref(false)

    const fetchAPI = async (url) => {
      isLoading.value = true;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUwNzc3Zjg2YTNhNDZjZDYzZDgzY2NjZGUyYjRhYiIsInN1YiI6IjY1MGU0YWVmZTFmYWVkMDEwMGU3ZjBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljo6Zx-6_kL8WMzv07A_xXCPZllYUhAqJHSK041zD-Y',
        }
      };
      const data= await fetch(`https://api.themoviedb.org/3${url}`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
      isLoading.value = false;
      return data;
    }
    const getMoviesList = async(page = 1)=>{
      const data = await fetchAPI(`/discover/movie?include_adult=false&include_video=false&language=ko&page=${page}&sort_by=popularity.desc`);
      movie.value = data.results;
    };

    const getMovieDetail = async(id) => {
      const data = await fetchAPI(`/movie/${id}?language=ko`)
      movieDetail.value = data;


      // const options = {
      //   method: 'GET',
      //   headers: {
      //     accept: 'application/json',
      //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUwNzc3Zjg2YTNhNDZjZDYzZDgzY2NjZGUyYjRhYiIsInN1YiI6IjY1MGU0YWVmZTFmYWVkMDEwMGU3ZjBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljo6Zx-6_kL8WMzv07A_xXCPZllYUhAqJHSK041zD-Y'
      //   }
      // };
      //  return await fetch(`/movie/${id}?language=en-US`, options)

      //   .then((response) => response.json())
      //   .then((response) => (movieDetail.value = response))
      //   .catch((err) => console.error(err));
      //   idLoading.value=false;
    };
    
    return {
      movie,
      movieDetail,
      isLoading,
      getMoviesList,
      getMovieDetail}
});