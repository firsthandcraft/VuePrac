import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
// import * as getters from './getters'
// import * as mutations from './mutations'
// getters, mutations 모듈화 하기 
Vue.use(Vuex);
// 모든 기능 modules> todoApp.js 에 모듈화로 넣기
// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//           for (let i = 0; i < localStorage.length; i++) {
//             if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//               const item = localStorage.getItem(localStorage.key(i));
//               try {
//                 const parsedItem = JSON.parse(item);
//                 if (parsedItem) {
//                   arr.push(parsedItem);
//                 }
//               } catch (error) {
//                 console.error('JSON 파싱 오류:', error);
//               }
//             }
//           }
//         }
//         return arr;
// 	}
// }
export const store = new Vuex.Store({
    // modules:{
    //   todoApp :todoApp,
    // },
    // //
    // state:{
    //     // headerText :'TOTO it',
    //     todoItems:storage.fetch()
        
    // },
    //  //모듈화 만들기 getters.js
    // getters: getters,
    // // {
    // //   storedTodoItems(state) {
    // //       return state.todoItems;
    // //   }
    // // },
    // //모듈화 만들기 mutations.js
    // mutations:mutations,
    // {
    //   addOneItem(state,todoItem){
    //       let obj ={completed:false,item:todoItem};
    //       localStorage.setItem(todoItem,JSON.stringify(obj))
    //       // this.todoItems.push(obj)
    //       state.todoItems.push(obj)
    //   },
    //   removeOneItem(state,payload){
    //       localStorage.removeItem(payload.todoItem.item);
    //       state.todoItems.splice(payload.index,1);
          
    //   },
    //   toggleOneItem(state,payload){
    //       state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //       localStorage.removeItem(payload.todoItem.item);
    //       localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //   },
    //   clearAllItems(state) {
    //     state.todoItems = [];
    //     localStorage.clear();
    //   }
    // }

    //modeuls.> todoApp.js에 넣고 나서 import 불러오기 
    modules : {
      todo
    }
});