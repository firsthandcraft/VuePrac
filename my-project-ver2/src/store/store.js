import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
          for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
              const item = localStorage.getItem(localStorage.key(i));
              try {
                const parsedItem = JSON.parse(item);
                if (parsedItem) {
                  arr.push(parsedItem);
                }
              } catch (error) {
                console.error('JSON 파싱 오류:', error);
              }
            }
          }
        }
        return arr;
	}
}
export const store = new Vuex.Store({
    //
    state:{
        // headerText :'TOTO it',
        todoItems:storage.fetch()
    },
    getters: {
		getTodoItems(state) {
			return state.todoItems;
		}
	},
    mutations:{
        addOneItem(state,todoItem){
            let obj ={completed:false,item:todoItem};
            localStorage.setItem(todoItem,JSON.stringify(obj))
            // this.todoItems.push(obj)
            state.todoItems.push(obj)
        },
        removeOneItem(state,payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
            
        },
        toggleOneItem(state,payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
			state.todoItems = [];
			localStorage.clear();
		}
    }
});