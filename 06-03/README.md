# [Router](https://v3-docs.vuejs-korea.org/guide/typescript/options-api.html#augmenting-global-properties) 
뷰 라우터는 Vue.js를 이용하여 싱글 페이지 애플리케이션(SPA)을 구현할 때 사용하는 Vue.js의 공식 라우터 입니다.
### **라우터란? (Router)**

라우터라고 하면 일반적으로 네트워크간에 데이터를 전송하는 장치를 말합니다. 뷰에서 말하는 라우터는 쉽게 말해서 URL에 따라 어떤 페이지를 보여줄지 매핑해주는 라이브러리라고 보시면 될 것 같습니다.

예를 들어 “`‘/home’` 경로로 요청이 들어왔을때 `‘Home.vue’` 컴포넌트를 화면에 렌더링 해라!” 라는 역할을 수행하는 라이브러리라고 보시면 될 것 같습니다. 그리고 이때 `‘/home’` → `‘Home.vue’` 이러한 매핑정보를 라우트(Route)라고도 합니다.

### 라우트란? (Route)

어떤 URL에 대해 어떤 페이지를 표시해야 하는지에 대한 정보
## 설치

```bash
npm install vue-router
```

## 시작하기

`HomeView.vue`와 `AboutView.vue`라는 **페이지용 컴포넌트**를 만든후 `‘/’` 경로로 들어왔을 경우 `HomeView.vue` 페이지(컴포넌트)를 렌더링 하고 `‘/about’` 경로로 들어왔을 경우 `AboutView.vue` 페이지(컴포넌트)를 렌더링 하는 실습을 진행해 보도록 하겠습니다.

- `‘/’` → `HomeView.vue`
- `‘/about’` → `AboutView.vue`

---
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
