<template>
    <div >
         <article class="c_content">
            <div class="cc_top">
                <!--질문제목 -->
                <input class="cc_qustion" type="text" placeholder="제목없는질문"  v-model="itemData.title" @change="titleChange($event)">
                <!--설명 이미지-->
                <div class="cc_image" >
                    <label><span class="material-symbols-outlined">image</span>
                    <input type="file" hidden  @change="fileChange($event)">
                    </label>
                </div>
                <!--질문유형-->
                <label  class="selectWrap" ><!--@click="toggleDropdown($event)"-->
                    <input type="checkbox" hidden class="modal_checkbox">
                    <ul class="select_header">
                        <li class="selected_option" >
                            <p ><span class="material-symbols-outlined">{{ changeTypeImg(itemData.qustion_type) }}</span>
                                {{ changeTypeText(itemData.qustion_type) }}
                            </p>
                            <span class="material-symbols-outlined">expand_more</span>
                        </li>
                    </ul>
                    <!-- 질문내용 -->
                    <div class="optionsWrap"></div>
                    <ul class="options">
                        <li v-for="(pa) in options" :key="pa"  @click="selectOption($event,pa)" >
                            <span class="material-symbols-outlined">{{ pa.question_img }}</span>
                            {{ pa.question}}
                        </li>
                    </ul>
                
                </label>
                
            </div>
            <div class="cc_img"  v-if="itemData.img != ''">
                <button  @click="deleteImg($event)">삭제</button>
                <img :src="itemData.img" alt="optionimg" style="width:200px" />

            </div>

            <div class="cc_middle">
                <div v-if="itemData.qustion_type == 'ShortAnswer'">
                    <div class="inputType">
                        <p>
                            <input type="text" placeholder="단답형 텍스트" disabled > 
                        </p>
                    </div>
                </div>
                <div v-if="itemData.qustion_type == 'Long'"> 
                    <div class="inputType">
                        <p>
                            <input type="text" placeholder="장문형 텍스트" disabled> 
                        </p>
                    </div>
                </div>
                <div  v-if="itemData.qustion_type == 'MultipleChoiceQuestions'">
                    <ul>
                        <li class="inputType" v-for="(d,idx) in itemData.qustion_data" :key="d">
                            <span class="material-symbols-outlined">circle</span>
                            <p>
                                <input type="text" :value="d" @change="setRadioInput($event,idx)" >
                            </p>
                            <span class="material-symbols-outlined optiondelete close_btn" v-if="idx !== 0" @click="remove_radio_option($event,idx)">close</span>
                        </li>
                    </ul> 
                    <div class="inputType" v-if="itemData.etc==true">
                        <span class="material-symbols-outlined">circle</span>
                        <p>
                            <input type="text" value="기타..." disabled>
                        </p>
                            <span class="material-symbols-outlined close_btn"  @click="radio_etc($event)">close</span>
                    </div>
                    <div class="inputType" >
                        <p>
                            <span class="material-symbols-outlined">circle</span>
                            <button @click="add_radio_option($event)">옵션추가</button>
                            <span class="add_etc" v-if="itemData.etc==false" >
                                또는 <button @click="radio_etc($event)">'기타'추가</button>
                            </span>
                        </p>
                    </div>
                  
                </div>
                <div  v-if="itemData.qustion_type == 'CheckBox'">
                    <ul>
                        <li class="inputType" v-for="(d,idx) in itemData.qustion_data" :key="d">
                            <span class="material-symbols-outlined">square</span>
                            <p>
                                <input type="text" :value="d" @change="setRadioInput($event,idx)" >
                            </p>
                            <span class="material-symbols-outlined optiondelete close_btn" v-if="idx !== 0" @click="remove_radio_option($event,idx)">close</span>
                        </li>
                    </ul> 
                    <div class="inputType" v-if="itemData.etc==true">
                        <span class="material-symbols-outlined">circle</span>
                        <p>
                            <input type="text" value="기타..." disabled>
                        </p>
                            <span class="material-symbols-outlined close_btn"  @click="radio_etc($event)">close</span>
                    </div>
                    <div class="inputType" >
                        <p>
                            <span class="material-symbols-outlined">circle</span>
                            <button @click="add_radio_option($event)">옵션추가</button>
                            <span class="add_etc" v-if="itemData.etc==false" >
                                또는 <button @click="radio_etc($event)">'기타'추가</button>
                            </span>
                        </p>
                    </div>
                  
                </div>
                <div v-if="itemData.qustion_type == 'FileUpload'">
                    <input type="file" disabled>
                </div>
            </div>
            <div class="cc_bottom">
                <p class="bottom_btn" @click="content_copy($event)"><span class="material-symbols-outlined">content_copy</span></p>
                <p class="bottom_btn" @click="content_delete($event)"><span class="material-symbols-outlined" >delete</span></p><!---->
                <p class="necessary" @click="necessary_check($event)">                               
                    <label  class="toggleSwitch" :class="{ active: itemData.necessary === true}">
                        <span class="toggleButton "></span>
                    </label>
                </p>
            </div>
        </article>
      
    </div>
       
</template>
<script>
import { reactive, ref,defineComponent } from "vue";

    export default defineComponent({//01,02,03... 순서가 있는것은 데이터에 
        props: {
            itemData: Object, // ContentMain2로부터 받을 props
        },
        //Options APi
        setup(props, { emit }) {

            const options = reactive([
                { question: '단답형', question_img: 'notes',value:'ShortAnswer' },
                { question: '장문형', question_img: 'subject' ,value:'Long'},
                { question: '객관식질문', question_img: 'radio_button_checked',value:'MultipleChoiceQuestions' },
                { question: '체크박스', question_img: 'check_box',value:'CheckBox' },
                { question: '파일업로드', question_img: 'cloud_upload',value:'FileUpload' },
            ]); 
            // 제목
            const titleChange= (e)=>{
                let title =e.target.value;
                emit('title-change',title)
            }
            //이미지
            const fileChange= (e)=>{
                const selectedFile = e.target.files[0];
                const img_reader = new FileReader();//새로운 파일 리더
                
                if (selectedFile instanceof Blob) {
                        img_reader.addEventListener('load', () => {
                           
                            emit('img-change',img_reader.result)
                        });
                        img_reader.readAsDataURL(selectedFile);
                } else {
                        console.error('Selected file is not a Blob.');
                }
                //
            }
            //질문옵션 선택
            const selectOption= (e,pa)=>{
                let option=pa.value;
                emit('option-change',option)
            }
             //라디오옵션선택된 화면으로 보이게
             const changeTypeText = (qustionType) => {
                const option = options.find((opt) => opt.value === qustionType);
                return option ? option.question : ''; // 찾은 옵션의 질문을 반환하거나 빈 문자열 반환
            };
            const changeTypeImg = (qustionType) => {
                const option = options.find((opt) => opt.value === qustionType);
                return option ? option.question_img : '';
            };
            //라디오옵션제목
            const setRadioInput= (e,idx)=>{
                let radioInput=[e.target.value,idx];
                emit('radioInput-change',radioInput)
            }
            //옵션추가
            const add_radio_option= function(e){
                emit('radioAdd-change',"add")
            };
            //옵션삭제
            const remove_radio_option= function(e,idx ){
                emit('radioRemove-change',idx)
            };
            //라디오기타추가
            const radio_etc= (e)=>{
                emit('radioEtc-change',"etc")
            }
            //선택질문삭제
            const content_delete= (e)=>{
                emit('remove-change',"remove")
            }
           //선택질문 복제 
           const content_copy =(e) =>{
                emit('copy-change','copy')
           }
            //이미지 삭제 
            const deleteImg =(e) =>{
                emit('img-delete','delete')
            }
            // 필수 값
            const necessary_check = (e) =>{
                emit('necessary-change','necessary')
            }
            return { options,titleChange,fileChange,selectOption,setRadioInput,add_radio_option,remove_radio_option,
                radio_etc,
                content_delete,
                changeTypeText,changeTypeImg,content_copy,
                deleteImg,necessary_check
            }
        },
     
    });

</script>
<style scoped>
    @import url("../index.css");
    /* 상단 */
    .cc_top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;}
    .cc_qustion{min-width:300px;width:60%;font-family: 'docs-Roboto';font-weight: 400;font-size: 12pt;line-height: 1.5;letter-spacing: 0;}
    .selectWrap{position: relative;}
    .select_header{min-width:200px;width:30%;padding:10px; border: 1px solid #dadce0;border-radius:4px;}
    .select_header li{display:flex; justify-content:space-between;align-items:center;}
    .selectWrap:focus {background-color: yellow;}
    .select_header li p{margin:0;display:flex;align-items:center;}
    .select_header li p span{margin-right: 8px;}
    .optionsWrap{width:100%;height:100vh; position: fixed;top:0;left: 0;}
    .options{width:100%; position:absolute;top:0;left:0; min-width: 209px;box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);background: #fff;    z-index: 10;}
    .options li{padding:8px;}
    .options li:hover{background-color: rgba(0,0,0,.2);}
    
    /*  중간 */
    .inputType{display:flex;align-items:center;}
    .inputType>p{width:80%;display:flex;align-items:center;}
    .inputType>p input{width:100%;}
    /*  */
    .options,.optionsWrap{display: none;}
    .selectWrap input[type="checkbox"]:checked ~ .options{display: block;}
    .selectWrap input[type="checkbox"]:checked ~ .optionsWrap{display: block;}
    /* 하단 */
    .cc_bottom{margin-top:20px; display: flex;justify-content:end; align-items:center;border-top:1px solid #dadce0;height: 64px;}
    .cc_bottom p{width:48px;height:48px;display:flex;justify-content:center;align-items:center;}
    .cc_bottom .bottom_btn:hover{background-color: rgba(95,99,104,.04);border-radius:50%;}
    .cc_bottom p span{display:block;}
    /* 필수 버튼 */
    .cc_bottom .necessary{width: 100px;justify-content:end;}
    .toggleSwitch {width:36px;height:14px;display: block;position: relative;border-radius: 30px;background-color:#9b9b9b;box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0,0,0,.05), 0 0.1875rem 0.1875rem 0 rgba(0,0,0,.1), 0 0.1875rem 0.0625rem 0 rgba(0,0,0,.05);cursor: pointer;}
    .toggleSwitch::before{content:"필수";position:absolute;top:calc(50% - 10px);left:-40px;}
    .toggleSwitch .toggleButton {width:20px;height:20px;position: absolute;top: 50%;left: calc(100% - 38px);transform: translateY(-50%);border-radius: 50%;background: #fff;}
    .toggleSwitch.active {background:rgba(104, 58, 183, 0.338);} 
    /* b9b9b9 */
   .toggleSwitch.active .toggleButton { left:19px;background:rgb(103, 58, 183);}
    .toggleSwitch, .toggleButton{transition: all 0.2s ease-in;}
</style>