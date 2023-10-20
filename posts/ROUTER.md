# VueRouter_1 란?

## 뷰 라우터 (Vue Router)

뷰 라우터는 Vue.js를 이용하여 싱글 페이지 애플리케이션(SPA)을 구현할 때 사용하는 Vue.js의 공식 라우터 입니다.

[Getting Started | Vue Router](https://router.vuejs.org/guide/)

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
src 폴더 > router 파일 만들고 > index.js 파일 만들기

`HomeView.vue`와 `AboutView.vue`라는 **페이지용 컴포넌트**를 만든후 `‘/’` 경로로 들어왔을 경우 `HomeView.vue` 페이지(컴포넌트)를 렌더링 하고 `‘/about’` 경로로 들어왔을 경우 `AboutView.vue` 페이지(컴포넌트)를 렌더링 하는 실습을 진행해 보도록 하겠습니다.

- `‘/’` → `HomeView.vue`
- `‘/about’` → `AboutView.vue`

### 페이지 컴포넌트 생성

`HomeView.vue`와 `AboutView.vue` 페이지(컴포넌트)를 생성해보도록 하겠습니다.

```jsx
// src/views/HomeView.vue
<script setup></script>
<template>
  <h1>Home Page</h1>
</template>
```

```jsx
// src/views/AboutView.vue
<script setup></script>
<template>
  <h1>About Page</h1>
</template>
```

```jsx
// TheHeader.vue
<li class="nav-item">
  <RouterLink class="nav-link active" to="/">Home</RouterLink>
</li>
<li class="nav-item">
  <RouterLink class="nav-link" to="/about">About</RouterLink>
</li>
```
```jsx
// TheView.vue
<RouterView />
```
vue3-posts폴더 바로 아래 
components.d.ts 생성
```jsx
// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('router-link')['RouterLink'];
    RouterView: typeof import('router-link')['RouterView'];
  }
}

export {};
```
### 라우트(routes) 정의

먼저 URL 요청에 대해 어떤 페이지(컴포넌트)를 보여줄지에 대한 매핑정보를 정의해보도록 하겠습니다.

```jsx
// src/router/index.js
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];
```

### 라우터(router) 설정

라우터를 설정해보도록 하겠습니다.

```jsx
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
```

설정한 라우터 객체를 Vue 인스턴스에 추가해보도록 하겠습니다.

```jsx
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

`app.use(router)`를 호출 함으로써 컴포넌트 내부에서 `$router`, `$route` 객체에 접근할 수 있습니다.

## 네이게이션

뷰 라우터를 HTML과 JavaScript로 사용하는 방법에 대해 알아보도록 하겠습니다.

### HTML

```jsx
// src/App.vue
<script setup></script>

<template>
  <nav>
    <Routerlink to="/">Home</Routerlink>
    <span> | </span>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main>
    <RouterView></RouterView>
  </main>
</template>
```

- `<RouterLink>`
    
    Vue Router 에서는 페이지를 이동할 때는 일반 `a`태그를 사용하는 대신 **커스텀 컴포넌트인** `<RouterLink>`를 사용하여 다른 페이지 링크를 만들어야 합니다.
    
    이를 통해 **Vue Router는 페이지를 리로딩 하지 않고 URL에 매핑된 페이지를 렌더링**할 수 있습니다.
    
- `<RouterView>`
    
    `<RouterView>`는 URL에 매핑된 컴포넌트를 화면에 표시합니다.
    

### JavaScript

위에서 `router`를 설정할 때 `app.use(router)`를 호출했습니다. 이렇게 호출 함으로써 모든 자식 컴포넌트에 `router`, `route` 같은 객체를 사용할 수 있습니다. 그리고 이러한 객체는 페이지 이동 또는 현재 활성 라우트(경로 매핑)정보 에 접근하는 데 사용할 수 있습니다.

- `router`
    
    라우터 인스턴스로 JavaScript에서 다른 페이지(컴포넌트)로 이동할 수 있다.
    
    - Options API : **this.$router**
    - Composition API : [**useRouter()**](https://router.vuejs.org/api/#userouter)
    - template : $router
- `route`
    
    현재 활성 라우트 정보에 접근할 수 있다. (이 속성은 읽기 전용 입니다.)
    
    - Options API : **this.$route**
    - Composition API : [**useRoute()**](https://router.vuejs.org/api/#useroute)
    - template : $route

```html
<!-- HomeView.vue -->
<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const goAboutPage = () => router.push('/about');
</script>
<template>
  <h1>Home Page</h1>
  <button @click="goAboutPage">About 페이지로 이동</button>
</template>
```

```html
<!-- AboutView.vue -->
<script setup></script>
<template>
  <h1>About Page</h1>
  <ul>
    <li>$route.name: {{ $route.name }}</li>
    <li>$route.path: {{ $route.path }}</li>
  </ul>
  <button @click="$router.push('/')">Home 페이지로 이동</button>
</template>
```

## components.d.ts

로컬 컴포넌트, 내장 컴포넌트, 기본 HTML 요소 구성 없이 Type-Checking을 사용할 수 있습니다.

전역 컴포넌트의 경우 GlobalComponents 인터페이스를 정의해야 합니다. 예를 들면 다음과 같습니다.

```jsx
// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('router-link')['RouterLink'];
    RouterView: typeof import('router-link')['RouterView'];
  }
}
export {};
```

## 동적라우티 매칭
```jsx
//router >> index.js
const User = {
  template: '<div>User</div>',
}

const routes = [
  {   path: '/posts/:id',//동적 세그먼트는 콜론(:)으로 표시합니다.
      name: 'PostListView',
      component: PostDetailView
  },
]
```

 #### query, hash
 $route.params 외에도 $route 객체는 $route.query(쿼리스트링), $route.hash(해시태그) 등과 같은 다른 유용한 정보도 노출합니다.

##### query예시:::>>>>> 

 /users?searchText=love
{ params: {...}, hash: '...', query: { searchText: love } }

---

##### hash예시:::>>>>>

/users/alice#profile
{ params: {...}, hash: 'profile', query: { ... } }
```html
<!-- PostDetailview.vue -->
<template>
  <div>
    <h2>게시글 detil</h2>
    <hr class="my-4">
    <p>params: {{ $route.params }}</p>
    <p>query: {{ $route.query }}</p>
  </div>
</template>
<script setup>

</script>
```
주소창에 

params 일경우
http://localhost:5175/posts/dfg
   
query 일경우 
http://localhost:5175/posts/dfg?searchText=%E3%85%81%E3%85%81%E3%85%81%E3%85%81

```html
<!-- 이런식으로 나옴 결과가 -->
params: { "id": "dfg" }

query: { "searchText": "ㅁㅁㅁㅁ" }
```
### [api 참고](https://router.vuejs.org/api/#routelocationnormalized)

``` html
<!-- PostListView.vue -->
<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem :title="post.title" :content="post.content" :created-at="post.createdAt" @click="goPage(post.id)" />
      </div>
    </div>
  </div>
</template>


<script setup>
  import PostItem from '@/components/posts/PostItem.vue';
  import { getPosts } from '@/api/posts.js';
  import {ref} from 'vue';
  import {useRouter} from 'vue-router';
  const router = useRouter();
  const posts = ref([]);
  const fetchPosts = async () => {
    posts.value = await getPosts();
  };

  fetchPosts();
  const goPage = (id) =>{
    // router.push(`/posts/${id}`)// 1.주소로 전달하기

    //2.router 객체 전달가능
    router.push({
      name:"PostDetail",
      params:{
        id,
      }
    })
  }

</script>
```
#### router.push 파라미터는 문자열 경로 또는 객체가 될 수 있습니다.
```jsx
// 리터럴 문자열 경로
router.push('/users/eduardo')

// 경로가 있는 개체
router.push({ path: '/users/eduardo' })

// 이름을 가지는 라우트
router.push({ name: 'user', params: { username: 'eduardo' } })

// 쿼리와 함께 사용, 결과적으로 /register?plan=private가 됩니다.
router.push({ path: '/register', query: { plan: 'private' } })

// 해시와 함께 사용, 결과적으로 /about#team가 됩니다.
router.push({ path: '/about', hash: '#team' })
```

```jsx
const username = 'eduardo'
// URL을 수동으로 작성할 수 있지만 인코딩을 직접 처리해야 합니다.
router.push(`/user/${username}`) // -> /user/eduardo
// 위와 동일
router.push({ path: `/user/${username}` }) // -> /user/eduardo
// 가능하면 `name`과 `params`를 사용하여 자동 URL 인코딩의 이점을 얻습니다.
router.push({ name: 'user', params: { username } }) // -> /user/eduardo
// `params`는 `path`와 함께 사용할 수 없습니다.
router.push({ path: '/user', params: { username } }) // -> /user
```