# 🔍Vue  CSS 관리방법 

## 01. 외부 스타일 시트

초기화 css 파일 업로드할떄 자주사용

#### src > assets 폴더 안에 css 파일을 넣고 

![Alt text](image.png)

#### main.js에 import를 한다. 

![Alt text](image-1.png)

#### css폴더 안에도 import 가 가능하다는거는 잊지 않기
css 안 css import는 대부분 라이브러리 애니메이션등등일경우 많이람
![Alt text](image-2.png)


--- 

## 02. 내부 스타일 시트와 내부에 css import하기 

  Vue 컴포넌트 >> style안에 scoped 라고 하면 해당 컴포넌트만 css가 처리된다. 

  그안에 css 파일 impoert 가능

```html
        <style scoped>
            @import url("../index.css"); 
            /*import 하여 사용한다.*/

            .p{color:red}
        </style>
```

## 03. 인라인 방식
Html 태그안에 style넣기 
```html
        <div style="margin:10px;background-color:yellow;">
        html태그안에 style넣는방법
        </div>
```
