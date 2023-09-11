<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer "  v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>
        
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            newTodoItem:"",
        }
    },
    setup() {
        
    },
    methods:{
        addTodo:function(){
            if(this.newTodoItem !==''){
                let obj ={
                completed:false,
                item:this.newTodoItem
                };
                //localStorage에 저장하기
                //localStorage는 f12-> application안의 storage에있다. 
                // localStorage.setItem(this.newTodoItem,this.newTodoItem)
                // obj가 생기고 이후 
                localStorage.setItem(this.newTodoItem,JSON.stringify(obj))//스트링으로 자바스크립트객체를 변환해준다.
                // localStorage.setItem(this.newTodoItem,JSON.stringify(obj)) 안하면 objobj로 나타난다.
                console.log(this.newTodoItem);
                //저장후 
                
            }
            
           
            this.clearInput();
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

</style>