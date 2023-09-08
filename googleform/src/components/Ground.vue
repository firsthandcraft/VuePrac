<template>
  <div class="ground">
    <Header/>
    <Content />
    <p>------------------------------- Ground view -------------------------------</p>
  </div>
</template>

<script>
import Header from './Header.vue';
import Content from './Content.vue';
export default {
  components:{Header,Content},
  setup(){
   
  }
}
</script>
