<template>
    <div>
      <!-- ul대신transitiongroup -->
      <transition-group name="list" tag="ul">
        <!-- v-for="(todoItem,index) in propsdata -->
          <li class="shadow" v-for="(todoItem,index) in this.getTodoItems" v-bind:key="todoItem.item">
              <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
              <!-- mutations 떄매 toggleComplete v-on:click="toggleComplete(todoItem, index)" 에서 {} 씌우기-->
              <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
              <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                <!-- mutations 떄매 removeTodo v-on:click="removeTodo(todoItem, index)" 에서 {} 씌우기-->
                  <i class=" fas fa-trash-alt"></i>
              </span>
          </li>
      </transition-group>
        
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    // props:[
    // 'propsdata'
    // ],
    methods:{
        ...mapMutations({
          removeTodo: 'removeOneItem',//mutaions는 객체를 {todoItem,index} 넘겨줌
          toggleComplete: 'toggleOneItem',

        }),
        //mapMutations로 단순화 된 코드들
        // removeTodo(todoItem,index){
        //     //this.$emit('removeItem',todoItem,index);
        //     // const obj={
        //     //   todoItem,
        //     //   index:index
        //     // }
        //     this.$store.commit('removeOneItem',{todoItem,index});
        //     // this.$store.commit('removeOneItem',obj);
        // },
        // toggleComplete(todoItem,index){
        //     //로컬스토리지 데이터 갱신 toggleItem
        //      //this.$emit('toggleItem',todoItem,index)
        //     this.$store.commit('toggleOneItem', {todoItem,index});
        // },

    },
    computed: {
          // todoItems(){
          //   return this.$store.getters.getTodoItems;
          // },
          ...mapGetters([`getTodoItems`])
    }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* tradition */
.list-enter-active,.list-leave-active{transition:all 0.5s;}
.list-enter,.list-leave-to{opacity:0;transition:translateY(30px);}
</style>