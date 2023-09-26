# 🔍Vue  CSS 관리방법 

## 01. 외부 스타일 시트

초기화 css 파일 업로드할떄 자주사용

#### src > assets 폴더 안에 css 파일을 넣고 

![20230925_135904](https://github.com/firsthandcraft/VuePrac/assets/97497153/aec6b7df-4623-4d3e-9ee0-4c2df3116cf2)


#### main.js에 import를 한다. 

![20230925_140338](https://github.com/firsthandcraft/VuePrac/assets/97497153/22556624-11d5-46ff-b989-9b652b4b6e2d)

#### css폴더 안에도 import 가 가능하다는거는 잊지 않기
css 안 css import는 대부분 라이브러리 애니메이션등등일경우 함
![20230925_141739](https://github.com/firsthandcraft/VuePrac/assets/97497153/44d52a7d-89d6-41e0-bcf0-d89c5f3ce0f6)

--- 

## 02. 내부 스타일 시트와 내부에 css import하기 

  Vue 컴포넌트 >> style안에 scoped 라고 하면 해당 컴포넌트만 css가 처리된다. 

  그안에 css 파일 impoert 가능

```html
        <style scoped>
            @import url("../index.css"); 
            /*import 하여 사용한다.*/


            /* 혹은 if문으로 css를 넣을수 있다. */
            @import navUtils from './assets/js/navUtils';
            const mobileCheck = !!navUtils.any();
            if(mobileCheck){
              @import("@/assets/mobile/common.css");
              @import("@/assets/mobile/page.main.css");
              @import("@/assets/mobile/page.popup.css");
              @import("@/assets/mobile/page.mypage.css");
            } else {
              @import("@/assets/page.common.css");
              @import("@/assets/page.main.css");
              @import("@/assets/page.popup.css");
              @import("@/assets/page.mypage.css");
            }

            .p{color:red}
        </style>
```
  혹은 script 폴더안에 import 하기 
```html
    <script>
      import("./assets/css/reset.css");
    </script>
```
## 03. 인라인 방식
Html 태그안에 style넣기 
```html
        <div style="margin:10px;background-color:yellow;">
        html태그안에 style넣는방법
        </div>
```
