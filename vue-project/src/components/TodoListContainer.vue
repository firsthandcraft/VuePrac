<template>
  <todo-list-new />
  <section class="container">
    <div class="row justify-content-center m-2">
      <todo-list-main />
    </div>
  </section>
</template>

<script>
export default {
  name: "TodoListContainer",
}
</script>

<script setup>
import { ref, readonly, provide } from "vue"
import { useStorage } from "../compositions/storage"
import TodoListNew from "./TodoListNew.vue"
import TodoListMain from "./TodoListMain.vue"

const todos = ref([]) // ref는 객체에게 반응성을 갖도록 반응형이 잇어야 
//ref에서는 String, Number, Object 등 어떠한 타입에서도 사용
const { loadTodos, saveTodos, storage_id } = useStorage()

provide("todos", readonly(todos))

const initTodos = (init_todos) => {
  todos.value = init_todos// ref는 .value를 이용하여 접근가능
}
const addTodo = (job, date) => {
  todos.value.push({
    id: storage_id.value++,
    job: job,
    date: date,
    completed: false,
  })
  saveTodos(todos)
}
const removeTodo = (id) => {
  todos.value.splice(id, 1)
  todos.value.forEach((todo, idx) => {
    todo.id = idx
  })
  saveTodos(todos)
}
const completeTodo = (id) => {
  todos.value.find((todo) => todo.id == id).completed = true
  saveTodos(todos)
}

provide("addTodo", addTodo)
provide("removeTodo", removeTodo)
provide("completeTodo", completeTodo)

loadTodos(initTodos)
</script>