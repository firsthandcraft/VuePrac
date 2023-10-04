import {defineStore} from "pinia";
import {ref, reactive,computed} from 'vue';

export const useTodoListCompositionsStore = defineStore("todolist_compositions",() => {
    const state = reactive({
        todoList : [
            {id: 1, todo: "ES6학습", done:"false"},
            {id: 2, todo: "Optionalchanging", done:"true"},
            {id: 3, todo: "React학습", done:"false"},
            {id: 4, todo: "정보처리기사", done:"false"},
        ]
    })
    const addTodo = (todo) =>{
        state.dotoList.push({id:new Date().getTime(), todo,done:false})
    }
    const deleteTodo =(todo) =>{
        state.sotoList.push({id:new Date().getTime(), todo,done:false})
    }
    const toggleDone = (id) => {
        let index = state.todoList.findIndex((todo)=> todo.id == id);
        state.todoList[index].done =!state.todoList[index].done;
    }
    const doneCount = computed(()=>{
        return state.todoList.filter((todoitem)=>todoitem.done ===true).length
    })
    const todoList = computed (()=> state.todoList);
    return {todoList, doneCount,addTodo,deleteTodo,toggleDone}
})
