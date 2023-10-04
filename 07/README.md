# [Pinia](https://pinia.vuejs.org/introduction.html)

상태 관리 라이브러리.

장점:
- 여러개의 스토어가 가능하다. 
- action, state 로 이루어져있다. 

## Getting Started

``` bash
yarn add pinia
# or with npm
npm install pinia

```
혹은 세팅때 추가 한다. 

#### 01. 피니아 import하기  
main.js 에서 import 
pinia 라이브러리에서 import  한 createpinia()함수를 호출하여 생성한pinia 객체를 Vue 애플리케이션인스턴스의 use 메서드 인자로 전달하여 호출
``` javascript
import {createPinia} from "pinia" 
const pinia = createPinia();
app.use(pinia)

```

#### 02. 피니아 사용하기 
store에서 js 폴더에 들어가 
스토어 정의 
``` javascript
import { defineStore } from 'pinia'
//defineStore : 스토어의 이름을 설정하는 것을 import 한다. 
import { ref, computed } from 'vue'
// ref나 reactive 을 이용할수 잇다. 

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})



```



