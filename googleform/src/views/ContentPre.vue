<template>

  <div class="contentWrap">

    <!-- 필수 응답 제목 -->
        <article class="c_title active">
            <h3 class="qtitle"></h3>
            <p class="explanation">{{ previewData }}</p>
            <!-- previewData안받아와짐 -->
            <p class="applicant">20 <span>명</span></p>
            <div class="application period">
              <p>신청기간</p>
              <p class="startdate">2023-09-01</p>
              <p class="enddate">2023-09-10</p>
            </div>
            <div class="eventperiod">
              <p>행사기간</p>
              <p class="startdate">2023-09-01</p>
              <p class="enddate">2023-09-10</p>
            </div>
       
        </article>
        <article>
          <p class="qtitle">질문제목</p>
          <div class="img"></div>
          <input type="text" placeholder="단답형 텍스트"> 
          <input type="text" placeholder="장문형 텍스트">
          <label ><input type="radio" name="radioanswer">옵션1 </label>
          <label ><input type="radio" name="radioanswer">옵션2 </label>
          <label ><input type="radio" name="radioanswer">옵션3 </label>
          <label ><input type="checkbox" name="checkanswer">옵션1 </label>
          <label ><input type="checkbox" name="checkanswer">옵션2 </label>
          <label ><input type="checkbox" name="checkanswer">옵션3 </label>
          <input type="file">
        </article>
  </div>
</template>

<script setup>

</script>

<style>
    /* contentWrap */
    .contentWrap{padding: 12px 0 64px;margin: auto;width:90%;max-width: 770px;min-width:370px;position: relative;}
    .c_title{padding-bottom: 24px;position: relative;overflow: hidden;}
    .c_title .qtitle{font-family: 'docs-Roboto';font-weight: 400;font-size: 24pt;line-height: 1.25;letter-spacing: 0;}
    /* c_title제목 */
    .c_title::before{content:"";position:absolute;top:0;left:0; width:100%;height:12px;background:rgb(103, 58, 183);z-index:10;}
    .c_title input:nth-child(1){width:100%; font-family: 'docs-Roboto';font-weight: 400;font-size: 24pt;line-height: 1.25;letter-spacing: 0;}
    /* 설문지 미리보기 */
    .explanation{font-family: 'docs-Roboto';font-weight: 400;font-size: 11pt;line-height: 1.5;letter-spacing: 0;}
    .period,.eventperiod{display: flex;}
    .img{background:rgba(104, 58, 183, 0.288);width: 100%;height:500px;}

</style>