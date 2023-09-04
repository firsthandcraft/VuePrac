<template>
  <div class="ground">
    <Header/>
    <Content/>
    <ContentPre/>

  </div>
</template>

<script>
import Header from './Header.vue';
import Content from './Content.vue';
import ContentPre from './ContentPre.vue';
export default {
  components:{Header,Content,ContentPre}
}
</script>

s