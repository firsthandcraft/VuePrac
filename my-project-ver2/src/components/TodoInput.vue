<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer "  v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>
        <ModalView v-if="showModal" @close="showModal=false">
            <h3 slot="header">
              경고
              <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
            </h3>
            <p slot="body">
              입력하세요
            </p>
        
        </ModalView>
    </div>
</template>
<script>
import ModalView from './ModalView.vue'

export default {
  components: { // '컴포넌트이름 : 컴포넌트 내용'
    ModalView,
  },
  data:function(){
      return {
          newTodoItem:"",
          showModal:false,
      }
  },
  methods:{
      addTodo(){
          if(this.newTodoItem !==''){
            // this.$emit('이벤트이름',인자1,인자2...)
            // this.$emit('addTodoItem',this.newTodoItem)
            //vuex
            const item= this.newTodoItem.trim();
            this.$store.commit('addOneItem',item);
            this.clearInput();
          }else{
            this.showModal = !this.showModal;
          }
          
          
         
      },
      clearInput: function(){
          this.newTodoItem='';
      }
  }
}
</script>
<style scope>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
h3,.closeModalBtn{
  color: #42b983;
}
</style>