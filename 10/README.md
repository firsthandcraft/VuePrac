# [Pinia](https://pinia.vuejs.org/introduction.html)

마지막 수업

## Getting Started

``` bash
yarn add pinia
# or with npm
npm install pinia

```

#### 
main.js 에서 import
``` javascript
import {createPinia} from "pinia"
const pinia = createPinia();
app.use(pinia)

```

 하고 store 폴더 만들고 movie.js파일만들기 



 ### API 가져올때 나에대한 api를 가져온 정보를 알아보고자 한다면 
 https://jwt.io/

 tmdb node.js 코드 가져와서 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUwNzc3Zjg2YTNhNDZjZDYzZDgzY2NjZGUyYjRhYiIsInN1YiI6IjY1MGU0YWVmZTFmYWVkMDEwMGU3ZjBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljo6Zx-6_kL8WMzv07A_xXCPZllYUhAqJHSK041zD-Y' 


 Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUwNzc3Zjg2YTNhNDZjZDYzZDgzY2NjZGUyYjRhYiIsInN1YiI6IjY1MGU0YWVmZTFmYWVkMDEwMGU3ZjBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljo6Zx-6_kL8WMzv07A_xXCPZllYUhAqJHSK041zD-Y를 encoded를 붙여넣기 

