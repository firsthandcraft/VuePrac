# [Router](https://v3-docs.vuejs-korea.org/guide/typescript/options-api.html#augmenting-global-properties) 

## Setting
Router는 router폴더 >  index.js  에서 실행이 되고 views의 vue 파일로 보여진다. 

### 01. index.js 에서 경로를 넣는다. (경로는 넣는방법은 2가지가 있다.)

``` javascript
    import HomeView from '../views/HomeView.vue' 
    ...
    {
      path: '/home',
      name: 'home',
      component: HomeView // import를 상단에 해줘야한다.
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
```

### 02. 컴포넌트에서 경로 넣기 (2가지 방법이 있다.)
``` javascript
<script setup >
import router from '../router'; // html태그안의 $가 없는 router에 필요한것 
import userouter from 'vue-router' // script안의 이벤트의 router를 위한것

const router= userouter (); 
const goAbout=()=>{ // 방법1 :: 해당이벤트를 만들어 router 로 보내기
  router.push('./about')
}
</script>
<template>
  <div>
    <h3>home</h3>
    <!--방법2 ::  html태그안에 바로 router로 보내기 -->
    <button @click="$router.push('./about')">move to about</button>
    <!--router 에서 $를 안 붙이면 script에 import하기 -->
    <button @click="router.push('./about')">move to about</button>
    <button @click="goAbout">goAboutmove to about</button>
  </div>
</template>
```

## Project Setup

```sh
npm init vue@latest

#초기 세팅에 router 설치하기

Vue.js - The Progressive JavaScript Framework
$$ ? Project name: › 06-3 #프로젝트 이름
✔ Project name: … 01
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
 #router yes로 
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
? Add ESLint for code quality? › No / Yes
$$-> ALL no 로 만들기 
Done. Now run:
  cd 06-3
  npm install
  npm run dev
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
