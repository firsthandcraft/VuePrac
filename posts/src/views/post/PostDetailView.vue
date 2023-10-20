<template>
  <div>
    <h2>게시글제목</h2>
    <hr class="my-4">
    <p>params: {{ $route.params }}</p>
    <p>query: {{ $route.query }}</p>
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>
<script setup>
  import {useRouter,useRoute} from 'vue-router';
  
  const router = useRouter();
  // 주소값에 있는 아이디 값 가져오기 route
  const route= useRoute();
  const id = route.params.id;
  const goListPage = () => router.push({name:'PostList'})
  const goEditPage = () => router.push({name:'PostEdit',params:{id}})
</script>