<template>
  <div id="app">
    {{ str }}
    <!-- <app-header v-bind:프롭스속성이름="상위컴포넌트 이름"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>

</template>

<script>
// new Vue({
//   data:{}
// })
// var AppHeader ={
//   template:'<header>appheader</header>'
// }
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    'app-header':AppHeader
  },
  methods:{
    renewStr:function(){
      this.str ='hi'
    }
  },
  data: function(){
    return {//props사용해보기
      str:'Headerprops'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
