<template>
   <div class="contentWrap">
        <!-- 제목 -->
        <article class="c_title active">
            <input  type="text" placeholder="제목">
            <input type="text" placeholder="설문지 설명">
        </article>
        <ContentMain/>
   </div>
</template>
<script>
import ContentMain from './ContentMain.vue';
    export default{
        components:{ContentMain},

    }

</script>
<style scoped>
    @import url("../index.css");
    /* contentWrap */
    .contentWrap{padding: 12px 0 64px;margin: auto;width:90%;max-width: 770px;min-width:370px;}
    .c_title{padding-bottom: 24px;position: relative;overflow: hidden;}
    /* c_title제목 */
    .c_title::before{content:"";position:absolute;top:0;left:0; width:100%;height:12px;background:rgb(103, 58, 183);z-index:10;}

    .c_title input:nth-child(1){width:100%; font-family: 'docs-Roboto';font-weight: 400;font-size: 24pt;line-height: 1.25;letter-spacing: 0;}
</style>