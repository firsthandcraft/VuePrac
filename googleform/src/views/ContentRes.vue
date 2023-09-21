<template>

  <div class="contentWrap">

    <!-- 필수 응답 제목 -->
        <article class="c_title active">
            <h3 class="qtitle">응답 <span>n</span>개</h3>
            <p>excel로 보기</p>
            <p class="necessary">                               
                <label class="toggleSwitch">
                    <span class="toggleButton "></span>
                </label>
            </p>
            <table>
              <thead>
                <tr>
                <th>번호</th>
                <th>신청인</th>
                <th>신청일자</th>
                <th>첨부파일</th>
                <th>신청여부</th>
                <th>거절사유</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
       
        </article>
  
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  components: { 
  },
  setup() {
    const data4 =reactive({
      formTitle:"test",
      formDetails:"description",
      formApplicants:"14",
      formStartDate:"2023-09-20",
      formEndDate:"2023-09-23",
      data3:[
        { 
          title :"content제목",
          img :"",
          qustion_type:"ShortAnswer",
          qustion_data :[],
          etc:false,
          necessary:false,
          modal:false,
        },
        { 
          title :"content제목",
          img :"",
          qustion_type:"ShortAnswer",
          qustion_data :[],
          etc:false,
          necessary:false,
          modal:false,
        },
        { 
          title :"content제목",
          img :"",
          qustion_type:"ShortAnswer",
          qustion_data :[],
          etc:false,
          necessary:false,
          modal:false,
        },

      ]
    })
  },

}
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
    /*  */
    .toggleSwitch {width:36px;height:14px;margin-left:100px; display: block;position: relative;border-radius: 30px;background-color:#9b9b9b;box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0,0,0,.05), 0 0.1875rem 0.1875rem 0 rgba(0,0,0,.1), 0 0.1875rem 0.0625rem 0 rgba(0,0,0,.05);cursor: pointer;}
    .toggleSwitch::before{content:"응답받기";position:absolute;top:calc(50% - 10px);left:-40px;}
    .toggleSwitch .toggleButton {width:20px;height:20px;position: absolute;top: 50%;left: calc(100% - 38px);transform: translateY(-50%);border-radius: 50%;background: #fff;}
    .toggleSwitch.active {background:rgba(104, 58, 183, 0.338);} 
    /* b9b9b9 */
   .toggleSwitch.active .toggleButton { left:19px;background:rgb(103, 58, 183);}
    .toggleSwitch, .toggleButton{transition: all 0.2s ease-in;}
</style>