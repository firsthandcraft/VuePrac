<template>
<div class="home">

<div class="album py-5 bg-body-tertiary">
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="(item,idx) in state.items" :key="idx">
          <Card :item="item"/>
        </div>
    </div>
  </div>
</div>

</div>
</template>
<script>
import { reactive } from 'vue';
import Card from './Card.vue';
import axios from 'axios';

    export default{
        name:"Home",
        components: {
            Card
        },
        setup(){
          
          const state=reactive( {
            items:[]
          })
          const url = "/api/items"; // 변수를 정의하고 값을 할당합니다.

          axios.get(url).then((res) => {
            console.log(res);
            state.items=res.data
          });
          return {state}
        }
    }
</script>
<style></style>