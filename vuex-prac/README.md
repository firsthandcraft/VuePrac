# vuex

## 설치하기
``` bash
npm install vuex --save
```

### vuex는 store > store.js와 같은 폴더에서 코드가 구현된다.
``` javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        price:100
    },
    getters:{
        originalPrice(state){
            return state.price;
        },
        doublePrice(state){
            return state.price*2;
        },
        triplePrice(state){
            return state.price*3;
        },
    }
})
```