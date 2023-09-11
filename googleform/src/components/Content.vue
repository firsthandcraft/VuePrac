<template>
   <div class="contentWrap" @change="fileChange()">
        <ContentNav  @custom-event="handleEvent"/>
        <!-- 필수 응답 제목 -->
        <article class="c_title active" >
            <input  type="text" placeholder="제목" v-model="alldata2.formTitle">
            <input type="text" placeholder="설문지 설명" v-model="alldata2.formDetails"  >
            <input type="text" placeholder="신청자수" v-model="alldata2.formApplicants"  >
            <span>신청일자</span><input type="date" placeholder="일자" v-model="alldata2.formStartDate"  >
            <span>마감일자</span><input type="date" placeholder="일자" v-model="alldata2.formEndDate"  >
        </article>
        <!-- 선택응답 -->
        <ContentMain2  v-for="(item,index) in alldata2.data3" :key="index" 
        
            @click="indexData($event,index)"  

            :itemData="item"

            @title-change="titleEvent($event,index)"
            @img-change="imgEvent($event,index)"
            @option-change="optionEvent($event,index)"
            @radioInput-change="radioInputEvent($event,index)"
            @radioEtc-change="radioEtcEvent($event,index)"
            @radioAdd-change="radioAddEvent($event,index)"
            @radioRemove-change="radioRemoveEvent($event,index,idx)"
            @remove-change="removeEvent($event,index)"
            @copy-change="copyEvent($event,index)"
            @necessary-change="necessaryEvent($event,index)"
            @img-delete="deleteImgEvent($event,index)"

        ></ContentMain2>

   </div>
</template>
<script>
import { ref,reactive } from 'vue';
// import ContentMain from './ContentMain.vue';
import ContentMain2 from './ContentMain2.vue';
import ContentNav from './ContentNav.vue';

    export default{
        components:{ContentMain2,ContentNav},
         setup() {
            const alldata2 =  reactive({
                formTitle:'',
                formDetails:'',
                formApplicants:'',
                formStartDate:'',
                formEndDate:'',
                data3:[]
            })
            //01.첫번째 질문 데이터삽입
            alldata2.data3.push(
                { title :"content제목",
                img :"",
                qustion_type:"ShortAnswer",
                qustion_data :[],
                etc:false,
                necessary:false,
                modal:false,
                }
            );
            //이벤트 추가
            const handleEvent = (data) => {
                alldata2.data3.push(data); // 이벤트에서 전달된 데이터 처리
                //console.log("chage:::",alldata2)
            };
            //------------------------------------------
            const fileChange = () => {
                console.log("chage:::",alldata2)
            };
            
            const indexData  = function(e,index){
                //console.log(this) //alldata2가 나옴
                console.log(index) //순서가나옴
            }
            //---------------------------------------------
            //emit로 데이터 받기
            const titleEvent=(data,index)=>{ //제목
                alldata2.data3[index].title=data;
            }
            const imgEvent=(data,index)=>{ //이미지
                alldata2.data3[index].img=data;
            }
            const optionEvent=(data,index)=>{ //질문타입
                console.log('ssss',data)
                if(alldata2.data3[index].qustion_type==data){
                    console.log("없다.")
                }else{
                    alldata2.data3[index].qustion_type=data
                    if(data=="MultipleChoiceQuestions"){//라디오 버튼일 경우
                    alldata2.data3[index].qustion_data=['옵션1']
                    alldata2.data3[index].etc = false;;
                } else if(data=="CheckBox"){//체크박스일경우
                    alldata2.data3[index].qustion_data=['옵션1']
                    alldata2.data3[index].etc = false;
                } else{
                    alldata2.data3[index].qustion_data=['']
                    alldata2.data3[index].etc =false;
                }
                }
            }
            const radioInputEvent=(data,index)=>{ //옵션값이름변경
                alldata2.data3[index].qustion_data[data[1]]=data[0];
            }
            const radioAddEvent=(data,index)=>{ //라디오옵션추가
                alldata2.data3[index].qustion_data.push(`옵션 ${alldata2.data3[index].qustion_data.length
                +1}`);
            }
            const  radioRemoveEvent  = (data,index) => {//라디오옵션삭제
                alldata2.data3[index].qustion_data.splice(data, 1);
            };
            const radioEtcEvent=(data,index)=>{ //라디오기타변경
                alldata2.data3[index].etc =! alldata2.data3[index].etc
            }
            const removeEvent=(data,index)=>{ //선택질문삭제
                alldata2.data3.splice(index, 1);
            }
            const necessaryEvent=(data,index)=>{ //선택질문삭제
                alldata2.data3[index].necessary =! alldata2.data3[index].necessary
            }
            const copyEvent = (data,index)=>{
                let copyArray = [];
                for(let i=0;  i<alldata2.data3[index].qustion_data.length; i++){
                    copyArray.push(alldata2.data3[index].qustion_data[i])
                }
                let copyAlldata ={ 
                    title :alldata2.data3[index].title,
                    img :alldata2.data3[index].img,
                    qustion_type:alldata2.data3[index].qustion_type,
                    qustion_data :copyArray,
                    etc:alldata2.data3[index].etc,
                    necessary:alldata2.data3[index].necessary,
                    modal:alldata2.data3[index].modal,
                }
                alldata2.data3.push(copyAlldata); 
            }
            //이미지 삭제 
            const deleteImgEvent =(data,index) =>{
                alldata2.data3[index].img = '';
            }
            
            //props로 전달된 
            return {
                alldata2,
                handleEvent,
                titleEvent,
                fileChange,imgEvent,optionEvent,radioInputEvent,radioEtcEvent,radioAddEvent,radioRemoveEvent,
                indexData,
                removeEvent,copyEvent,necessaryEvent,
                deleteImgEvent,
            };
        }, 
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