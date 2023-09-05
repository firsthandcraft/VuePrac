<template>
  <div id="app">
    {{ str }}
    <!-- <app-header v-bind:프롭스속성이름="상위컴포넌트 이름"></app-header> -->
    <h4>props& emit</h4>
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
    <hr>
    <h4>form 제작</h4>
    <a href="https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/">이벤트 버블링, 이벤트 캡처 그리고 이벤트 위임</a>
    <div>
      <form v-on:submit="submitForm">
        <div>
          <label for="username">id:</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div>
          <label for="userpass">password:</label>
          <input type="text" id="userpass" v-model="userpass">
        </div>
        <button type="submit" >login</button>
      </form>
    </div>
    <hr>
    <h4>C:\Users\uintone\Downloads\vue_basic\vue-captain\vuecli\vertwo>npm i axios</h4>
    <p>import axios from 'axios'</p>

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
import axios from 'axios'
export default {
  name: 'App',
  components: {
    'app-header':AppHeader
  },
  methods:{
    renewStr:function(){
      this.str ='hi'
    },//emit
    submitForm:function(e){//e
       e.preventDefault();
      console.log(this.username,this.userpass)
      //axios사용
      var url='https://jsonplaceholder.typicode.com/users';
      var data ={
        username : this.username,
        userpass : this.userpass,
      }
      axios.post(url,data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error)
        })
    }
  },
  data: function(){
    return {
      str:'Headerprops',//props사용해보기
      username:'',
      userpass:'',
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
