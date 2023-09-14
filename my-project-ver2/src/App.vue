<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput v-on:addTodoItem="addOneItem"/>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"
    v-on:toggleItem="toggleOneItem"
    />
    <TodoFooter v-on:clearAll="clearAllItem"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  data: function(){
    return {
      todoItems:[]
    }
  },
  methods:{
    addOneItem:function(todoItem){
      let obj ={completed:false,
                item:todoItem};
      localStorage.setItem(todoItem,JSON.stringify(obj))
      console.log(obj)
      this.todoItems.push(obj)
      console.log(this.todoItems)
    },
    removeOneItem:function(todoItem,index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1)
    },
    toggleOneItem:function(todoItem,index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    },
    clearAllItem:function(){
      localStorage.clear();
      this.todoItems=[];
    }
  },  
  created: function(){
        if(localStorage.length>0){
            for(let i =0; i<localStorage.length;i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    // this.todoItems.push(localStorage.key(i));
                    //localStorage.getItem(localStorage.key(i));
                    // console.log("todo-local-created")
                    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));//JSON에서 String에서 다시 꺼내기,
                    // // console.log(localStorage.key(i)) 
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

                }
            
            }
           
        }
    },
  components: { // '컴포넌트이름 : 컴포넌트 내용'
    'TodoHeader':TodoHeader,'TodoInput':TodoInput,'TodoList':TodoList,'TodoFooter':TodoFooter
  }
}
</script>

<style>
  body{
    text-align:center;background-color:#f6f6f6;

  }
  input{
    border-style:groove;
  }
  .shadow{
    box-shadow:5px 10px 10px rgba(0, 0, 0, 0.3);
  }
</style>
