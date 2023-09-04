<template>
   <div class="contentWrap">
        <!-- 필수 응답 제목 -->
        <article class="c_title active">
            <input  type="text" placeholder="제목">
            <input type="text" placeholder="설문지 설명">
            <input type="text" placeholder="신청자수">
            <span>신청일자</span><input type="date" placeholder="일자">
            <span>마감일자</span><input type="date" placeholder="일자">
        </article>

            <ContentMain />

        <!-- <ContentNav/> -->
        <!-- <EmitTest/> -->

   </div>
</template>
<script>
import { ref } from 'vue';
import ContentMain from './ContentMain.vue';
// import ContentNav from './ContentNav.vue';
// import EmitTest from './EmitTest.vue';
// import SortableTest from './SortableTest.vue';


    export default{
        components:{ContentMain,},
         setup() {
           
            // const handleContentCopy = (data) =>{
            //     //console.log(data)
            //     clonedComponents.value.push({ data: data }); // 전달된 데이터를 직접 배열에 추가
            //     console.log(clonedComponents);

            // }
            return {
            // clonedComponents,
            // cloneComponent,
            // handleContentCopy
            };
        }, 
        // methods: {
        //     handleContentCopy(data) {
        //     // 받은 데이터 활용
        //     console.log('Received data:', data);
        //     },
        // }
    }

</script>
<style scoped>
    @import url("../index.css");
    /* contentWrap */
    .contentWrap{padding: 12px 0 64px;margin: auto;width:90%;max-width: 770px;min-width:370px;position: relative;}
    .c_title{padding-bottom: 24px;position: relative;overflow: hidden;}
    /* c_title제목 */
    .c_title::before{content:"";position:absolute;top:0;left:0; width:100%;height:12px;background:rgb(103, 58, 183);z-index:10;}

    .c_title input:nth-child(1){width:100%; font-family: 'docs-Roboto';font-weight: 400;font-size: 24pt;line-height: 1.25;letter-spacing: 0;}
</style>