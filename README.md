# vue.js 

- [Vue2_Cli3](/vue2_cli3/)



## 환경
### vuetify, vuex


### 🔍 CSS 관리방법 
  공통 css는 보통 컴포넌트 안에 style안에
  <style scoped>
    @import url("../index.css"); import 하여 사용한다.
  </style>

### 🔍 테스트 실행 가이드

- cli 실행
- 해당페이지에서 명령어를 입력한다.

```bash
npm run serve
```

- vite 실행
- 해당페이지에서 명령어를 입력한다.

```bash
npm run dev
```

- cdn 실행
- html에 스크립트 삽입
- 
-vue 3
```bash
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

- vue 2
```bash
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
