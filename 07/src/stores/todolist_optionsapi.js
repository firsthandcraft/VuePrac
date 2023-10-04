import {defineStore} from "pinia";
import {reactive,computed} from 'vue';

export const useTodoListOptionsStore = defineStore("todolist_options",{
    state:() => ({
        todolist:[
            {id: 1, todo: "ES6학습", done:"false"},
            {id: 2, todo: "Optionalchanging", done:"true"},
            {id: 3, todo: "React학습", done:"false"},
            {id: 4, todo: "정보처리기사", done:"false"},
        ]
    }),
    getters : {
        donCount : (state) => {
            return state.dotoList.filter((todoItem)=> todoItem.done == true).length;
        }
    },
    actions:{
        addTodo(todo){
            this.dotoList.push({id:new Date().getTime(),todo,done: false})
        }, 
        deleteTodo(id){
            let index= this.dotoList.findIndex((todo)=>todo.id == id);
            this.todolist.splice(index,1)
        },
        toggleDone(id){
            let index = this.dotoList.findIndex((todo)=>todo.id = id);
            this.todolist[index].done= !this.todolist[index].done;
        }
    }
})