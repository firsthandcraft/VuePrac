<template>
    <div >
        <button @click="addComponent">추가</button>
         <article class="c_content" v-for="item in allData.data" :key="item.id">
            <div class="cc_top">
                <!--질문제목 -->
                <input class="cc_qustion" type="text" placeholder="제목없는 질문" v-model="item.title" @change="titleChange($event, item)">
             
                <!--설명 이미지-->
                <div class="cc_image" >
                    <label><span class="material-symbols-outlined">image</span>
                    <input type="file" hidden  @change="fileChange($event, item)" >
                    </label>
                </div>
                <!--질문유형-->
                <div class="selectWrap">
                    <ul class="select_header" @click="toggleDropdown" >
                        <li class="selected_option">
                            <p>
                                <span class="material-symbols-outlined">{{ modalOption.question_img }}</span>
                                {{ modalOption.question }}
                            </p>
                            <span class="material-symbols-outlined">expand_more</span>
                        </li>
                    </ul>
                    <!-- 질문내용 -->
                    <ul class="options" v-if="item.modal==true">
                        {{item.modal}}
                        <li v-for="d in options" :key="d.question" @click="selectOption(d)" >
                            <span class="material-symbols-outlined">{{ d.question_img }}</span>
                            {{ d.question }}
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 설명이미지  -->
            <div class="cc_img" >
                <img :src="item.img" alt="optionimg" style="width:200px" v-if="item.img!=''"/>
            </div>
            <div class="cc_middle">
                <div v-if="modalOption.value == 'ShortAnswer'">
                    <div class="inputType">
                        <p>
                            <input type="text" placeholder="단답형 텍스트" disabled > 
                        </p>
                    </div>
                </div>
                <div v-if="modalOption.value == 'Long'">
                    <div class="inputType">
                        <p>
                            <input type="text" placeholder="장문형 텍스트" disabled> 
                        </p>
                    </div>
                </div>
                <div v-if="modalOption.value == 'MultipleChoiceQuestions'">
                    <ul>
                        <li class="inputType" v-for="(d,index) in radio_option.radio_data" :key="d">
                            <span class="material-symbols-outlined">circle</span>
                            <p>
                                <input type="text"  v-bind:value="d"  @change="setRadioInput(index,$event)" >
                            </p>
                            <span class="material-symbols-outlined optiondelete close_btn" v-if="index !== 0" @click="remove_radio_option(index)">close</span>
                        </li>
                    </ul>
                    <div class="inputType" v-if="add_radio==true">
                        <span class="material-symbols-outlined">circle</span>
                        <p>
                            <input type="text" value="기타..." disabled>
                        </p>
                            <span class="material-symbols-outlined close_btn"  @click="radio_etc()">close</span>
                            <!-- @click="add_radio = false" -->
                    </div>
                    <div class="inputType" >
                        <p>
                            <span class="material-symbols-outlined">circle</span>
                            <button @click="add_radio_option()">옵션추가</button>
                            <span class="add_etc" v-if="add_radio==false" >
                                또는 <button @click="radio_etc()">'기타'추가</button>
                            </span>
                        </p>
                    </div>
                </div>
                <!-- 체크박스 -->
                <div v-if="modalOption.value == 'CheckBox'">
                    <ul>
                        <li class="inputType" v-for="(c,index) in check_option.check_data" :key="c">
                            <span class="material-symbols-outlined">square</span>
                            <p>
                                <input type="text" :value="c" @change="setCheckInput(index,$event)"  >
                            </p>
                            <span class="material-symbols-outlined optiondelete close_btn" v-if="index !== 0" @click="remove_check_option(index)">close</span>
                        </li>
                    </ul>
                    <div class="inputType" v-if="add_check==true" >
                        <p>
                            <span class="material-symbols-outlined">square</span>
                            <input type="text" value="기타..." disabled>
                            <span class="material-symbols-outlined close_btn" @click="check_etc()">close</span>
                        </p>
                    </div>
                    <div class="inputType" >
                        <p>
                            <span class="material-symbols-outlined">square</span>
                            <button @click="add_check_option()">옵션추가</button>
                            <span class="add_etc" v-if="add_check==false">
                                또는 <button @click="check_etc()" >'기타'추가</button>
                            </span>
                        </p>
                    </div>
                </div>
                <div v-if="modalOption.value == 'FileUpload'">
                    <input type="file" disabled>
                </div>
            </div>
            <!--  -->
            <!--  -->
            <!--  -->
            <div class="cc_bottom">
                <p @click="content_copy()"><span class="material-symbols-outlined">content_copy</span></p>
                <p><span class="material-symbols-outlined">delete</span></p>
                <p class="necessary">                               
                    <input id="toggle" type="checkbox" hidden @change="necessary_check(e)">
                    <label for="toggle" class="toggleSwitch">
                        <span class="toggleButton"></span>
                    </label>
                </p>
                <p><span class="material-symbols-outlined">more_vert</span></p>
            </div>
        </article>
    </div>
       
</template>
<script>
import { reactive, ref,defineComponent } from "vue";
    export default defineComponent({//01,02,03... 순서가 있는것은 데이터에 넣는 기능입니다.
        // props: {
        //    copyText:{
        //         type:Object,
        //         required: true,
        //         default: () => ({ 
        //             title :"",
        //             img :"",
        //             qustion_type:"",
        //             qustion_data :[],
        //             etc:"",
        //             necessary:"",
        //          }),
        //    }
        // },
        // emits: ['contentCopyEvent'],
        //Options APi
        setup() { //props, { emit }
            //00. 전체 질문들
            const allData =  reactive({
                   data :[], 
            })
            //01.첫번째 질문 복제
            allData.data.push(
                { title :"",
                img :"",
                qustion_type:"",
                qustion_data :[],
                etc:"",
                necessary:"",
                modal:"false",
                }
            );
            //02.세부 질문 추가 +
            const addComponent = () => {
                    const newComponent  = ({
                        title :"newData",
                        img :"",
                        qustion_type:"",
                        qustion_data :[],
                        etc:"",
                        necessary:"",
                        modal:"false",
                    });
                    allData.data.push(newComponent);
                    console.log(allData.data)
            };
            
            //세부 질문 내용 데이터틀 바뀐데이터를 여기에 넣고 다시 세팅할것임
            let data_card = reactive({
                title :"",
                img :"",
                qustion_type:"",
                qustion_data :[],
                etc:"",
                necessary:"",
                modal:"false",
            });
           
            //02.질문 제목 데이터에 넣음
            const titleChange=function(e,itemId){
                const itemToUpdate = allData.data.find(item => item === itemId);
                if (itemToUpdate) {
                    itemToUpdate.title = e.target.value;
                    // console.log("Title changed for item with ID:", itemId);
                    // console.log("New title:", itemToUpdate.title);
                }
                console.log(allData.data)
            }
            //03.이미지 
            const fileChange = function(e,itemId){//inputfile에이미지를 넣을때
                const selectedFile = e.target.files[0];
                const img_reader = new FileReader();//새로운 파일 리더
                const itemToUpdate = allData.data.find(item => item === itemId);
                if (itemToUpdate) {
                    if (selectedFile instanceof Blob) {
                        img_reader.addEventListener('load', () => {
                            itemToUpdate.img=img_reader.result;
                        });
                        img_reader.readAsDataURL(selectedFile);
                    } else {
                        console.error('Selected file is not a Blob.');
                    }
                }
             }
            //질문유형_메뉴 ::select 태그는 이미지가 못들어간다.
            const options = reactive([
                { question: '단답형', question_img: 'notes',value:'ShortAnswer' },
                { question: '장문형', question_img: 'subject' ,value:'Long'},
                { question: '객관식질문', question_img: 'radio_button_checked',value:'MultipleChoiceQuestions' },
                { question: '체크박스', question_img: 'check_box',value:'CheckBox' },
                { question: '파일업로드', question_img: 'cloud_upload',value:'FileUpload' },
            ]);
           //질문유형_모달창
           const modalOption = ref(options[0]);//기본값
           console.log(modalOption)//단답형

            const toggleDropdown = function(e,itemId ){
                const itemToUpdate = allData.data.find(item => item === itemId);
                if (itemToUpdate.modal = false) {
                    itemToUpdate.modal = true; // 'modal' 프로퍼티 추가
                    console.log( itemToUpdate.modal )
                }
                // dropdownOpen = !dropdownOpen;

            };
            //질문유형_선택된 것
            
            
            /** 알고 가기 - 라디오나 체크박스를 총데이터 배열에 안넣는 이유는?
            * =>  질문유형 선택 창에서 라디오질문을 선택하고 데이터를 넣다가 다시 체크박스로 바꿔서 쓰다가 다시 라디오로 넘어갈때 기존 데이터가 남아있게 하기 위해
            */
            //라디오_옵션
            const add_radio = ref(false);//기타 상태 false가 없는 상태
            const radio_option = reactive({//옵션 질문데이터
                radio_data :['옵션1'], 
            })
            let radioOptionCount = 2; //옵션1이 있으니 2부터 시작
            const add_radio_option =() =>{
                const newOption = "옵션" + radioOptionCount;
                radio_option.radio_data.push(newOption);
                radioOptionCount++;
                //console.log(radio_option.radio_data)
            };
            const  remove_radio_option  = (index) => {
                radio_option.radio_data.splice(index, 1);
            };
            //04.수정된 라디오 옵션 값  저장하기
            const setRadioInput = function(index, event){//index:배열순서
                const newValue = event.target.value;
                this.radio_option.radio_data[index]=newValue;
                //console.log(this.radio_option.radio_data[index]);
                //console.log(radio_option.radio_data);
                data_card.qustion_data= radio_option.radio_data;//04.총질문 데이터에 넣음
            }
            //05.수정된 기타 값 저장하기 
            const radio_etc =() =>{
                add_radio.value = !add_radio.value;
                data_card.etc =add_radio.value;//05.총질문 기타여부 데이터에 넣음
                // console.log(data_card)
            }
            //체크박스_옵션
            const add_check = ref(false);//기타 상태 false가 없는 상태
            const check_option = reactive({//옵션 질문데이터
                check_data :['옵션1'], 
            })
            let checkOptionCount = 2;//옵션1이 있으니 2부터 시작
            const add_check_option =() =>{
                check_option.check_data.push("옵션"+checkOptionCount);
                checkOptionCount++;
                //console.log(check_option.check_data)
            };
            const  remove_check_option  = (index) => {
                check_option.check_data.splice(index, 1);
            };
            //04.수정된 체크박스옵션 값  저장하기
            const setCheckInput = function(index, event){//index:배열순서
                const newValue = event.target.value;
                this.check_option.check_data[index]=newValue;
                // console.log(this.check_option.check_data[index]);
                //console.log(check_option.check_data);
                data_card.qustion_data= check_option.check_data;//04.총질문 데이터에 넣음
            }
             //05.수정된 기타 값 저장하기 
            const check_etc =() =>{
                add_check.value = !add_check.value;
                data_card.etc =add_check.value;//05.총질문 기타여부 데이터에 넣음
                // console.log(data_card);
            }
           //06.질문유형_선택
            const selectOption = (option) => {
                modalOption.value = option;
                //dropdownOpen.value = false;
                //console.log(option.value)
                data_card.qustion_type=option.value//06.질문유형 총데이터 값에 넣음
                if(data_card.qustion_type=="MultipleChoiceQuestions"){//06-1.라디오 버튼일 경우
                    data_card.qustion_data= radio_option.radio_data;
                    data_card.etc =add_radio.value;
                } else if(data_card.qustion_type=="CheckBox"){//06-1.체크박스일경우
                    data_card.qustion_data= check_option.check_data;
                    data_card.etc =add_check.value;
                } else{
                     data_card.qustion_data= '';
                    data_card.etc =false;
                }
                // console.log(data_card);
            };
            //07.필수체크
            let necessary = ref(false);
            const necessary_check = (e) =>{
                 necessary.value = !necessary.value;
                 data_card.necessary=  necessary.value;
                //  console.log(necessary.value)//07.필수체크 총데이터 값에 넣음
            };
         
            //복제 emit
            //  const content_copy =function(e){
            //     let content_gg=data_card
            //     emit('contentCopyEvent', content_gg); // 'contentCopyEvent'라는 이벤트와 데이터를 발생시킴
            //     console.log(data_card)
            //  };
      
            return {
                data_card,titleChange,
                fileChange,
                
                toggleDropdown, 
                options, selectOption,modalOption,
                radio_option,add_radio,radioOptionCount,add_radio_option,remove_radio_option,setRadioInput,radio_etc,
                check_option,add_check,checkOptionCount,add_check_option,remove_check_option,setCheckInput,check_etc,
                necessary_check,
                //content_copy
                addComponent,
                allData,//allData
            };
        },
        methods: {
            
        }
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
    .select_header li p{margin:0;display:flex;align-items:center;}
    .select_header li p span{margin-right: 8px;}
    .options{width:100%; position:absolute;top:0;left:0; min-width: 209px;box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);background: #fff;    z-index: 10;}
    .options li{padding:8px;}
    .options li:hover{background-color: rgba(0,0,0,.2);}
    
    /*  중간 */
    .inputType{display:flex;align-items:center;}
    .inputType>p{width:80%;display:flex;align-items:center;}
    .inputType>p input{width:100%;}
    /* 하단 */
    .cc_bottom{margin-top:20px; display: flex;justify-content:end; align-items:center;border-top:1px solid #dadce0;height: 64px;}
    .cc_bottom p{width:48px;height:48px;display:flex;justify-content:center;align-items:center;}
    .cc_bottom p span{display:block;}
    /* 필수 버튼 */
    .cc_bottom .necessary{width: 100px;justify-content:end;}
    .toggleSwitch {width:36px;height:14px;display: block;position: relative;border-radius: 30px;background-color:#9b9b9b;box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0,0,0,.05), 0 0.1875rem 0.1875rem 0 rgba(0,0,0,.1), 0 0.1875rem 0.0625rem 0 rgba(0,0,0,.05);cursor: pointer;}
    .toggleSwitch::before{content:"필수";position:absolute;top:calc(50% - 10px);left:-40px;}
    .toggleSwitch .toggleButton {width:20px;height:20px;position: absolute;top: 50%;left: calc(100% - 38px);transform: translateY(-50%);border-radius: 50%;background: #fff;}
    #toggle:checked ~ .toggleSwitch {background:rgba(104, 58, 183, 0.338);} 
    /* b9b9b9 */
    #toggle:checked ~ .toggleSwitch .toggleButton { left:19px;background:rgb(103, 58, 183);}
    .toggleSwitch, .toggleButton{transition: all 0.2s ease-in;}
</style>