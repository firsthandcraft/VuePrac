<template>
        <article class="c_content">
            <div class="cc_top">
                <!--질문제목 -->
                <input class="cc_qustion" type="text" placeholder="제목없는 질문">
             
                <!--설명 이미지-->
                <a class="cc_image" href="#">
                    <label><span class="material-symbols-outlined">image</span>
                    <input type="file" hidden  @change="fileChange" >
                    </label>
                </a>
                <!--질문유형-->
                <div class="selectWrap">
                    <ul class="select_header" @click="toggleDropdown">
                        <li class="selected_option">
                            <p>
                                <span class="material-symbols-outlined">{{ selectedOption.question_img }}</span>
                                {{ selectedOption.question }}
                            </p>
                            <span class="material-symbols-outlined">expand_more</span>
                        </li>
                    </ul>
                    <!-- 질문내용 -->
                    <ul class="options" v-if="dropdownOpen">
                        <li v-for="d in options" :key="d.question" @click="selectOption(d)" >
                            <span class="material-symbols-outlined">{{ d.question_img }}</span>
                            {{ d.question }}
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 설명이미지  -->
            <div class="cc_img" >
                <div v-for="(url, index) in img_file" :key="index">
                    <img :src="url" :alt="url" style="width:200px" />
                </div>
            </div>
            <div class="cc_middle">
                <div v-if="selectedOption.value == 'ShortAnswer'">
                    <div class="inputType">
                        <p>
                            <input type="text" placeholder="단답형 텍스트" disabled> 
                        </p>
                    </div>
                </div>
                <div v-if="selectedOption.value == 'Long'">
                    <div class="inputType">
                        <p>
                            <input type="text" placeholder="장문형 텍스트" disabled> 
                        </p>
                    </div>
                </div>
                <div v-if="selectedOption.value == 'MultipleChoiceQuestions'">
                    <ul>
                        <li class="inputType" v-for="(d,index) in radio_option.radio_data" :key="d">
                            <span class="material-symbols-outlined">circle</span>
                            <p>
                                <input type="text"  v-bind:value="d"  @change="setRadioInput(index,$event)" >
                            </p>
                            <span class="material-symbols-outlined optiondelete" v-if="index !== 0" @click="remove_radio_option(index)">close</span>
                        </li>
                    </ul>
                    <div class="inputType" v-if="add_radio==true">
                        <span class="material-symbols-outlined">circle</span>
                        <p>
                            <input type="text" value="기타..." disabled>
                        </p>
                            <span class="material-symbols-outlined"  @click="add_radio = false">close</span>
                    </div>
                    <div class="inputType" >
                        <p>
                            <span class="material-symbols-outlined">circle</span>
                            <button @click="add_radio_option()">옵션추가</button>
                            <span class="add_etc" v-if="add_radio==false" >
                                또는 <button @click="add_radio = true">'기타'추가</button>
                            </span>
                        </p>
                    </div>
                </div>
                <div v-if="selectedOption.value == 'CheckBox'">
                    <ul>
                        <li class="inputType" v-for="(c,index) in check_option.check_data" :key="c">
                            <span class="material-symbols-outlined">square</span>
                            <p>
                                <input type="text" :value="c" @change="setCheckInput(index,$event)"  >
                            </p>
                            <span class="material-symbols-outlined optiondelete" v-if="index !== 0" @click="remove_check_option(index)">close</span>
                        </li>
                    </ul>
                    <div class="inputType" v-if="add_check==true" >
                        <p>
                            <span class="material-symbols-outlined">square</span>
                            <input type="text" value="기타..." disabled>
                            <span class="material-symbols-outlined" @click="add_check = false">close</span>
                        </p>
                    </div>
                    <div class="inputType" >
                        <p>
                            <span class="material-symbols-outlined">square</span>
                            <button @click="add_check_option()">옵션추가</button>
                            <span class="add_etc" v-if="add_check==false">
                                또는 <button @click="add_check= true" >'기타'추가</button>
                            </span>
                        </p>
                    </div>
                </div>
                <div v-if="selectedOption.value == 'FileUpload'">
                    <input type="file" disabled>
                </div>
            </div>
            <!--  -->
            <!--  -->
            <!--  -->
            <div class="cc_bottom">
                <p><span class="material-symbols-outlined">content_copy</span></p>
                <p><span class="material-symbols-outlined">delete</span></p>
                <p class="necessary">필수</p>
                <p><span class="material-symbols-outlined">more_vert</span></p>
                
            </div>
        </article>
</template>
<script>
import { reactive, ref } from "vue";
    export default{
        //Options APi
        data(){
            return{
                add_radio :false,add_check: false
            }
        },
        setup() {
            //이미지 
            let img_file =ref([])
            const img_reader = new FileReader();
            const fileChange=(e) =>{
                const selectedFile = e.target.files[0];
                if (selectedFile instanceof Blob) {
                    img_reader.addEventListener('load', () => {
                        img_file.value.push(img_reader.result)
                        //console.log(img_reader.result);
                    });
                    img_reader.readAsDataURL(selectedFile);
                } else {
                    console.error('Selected file is not a Blob.');
                }
             }
            //질문유형
            const options = reactive([
                { question: '단답형', question_img: 'notes',value:'ShortAnswer' },
                { question: '장문형', question_img: 'subject' ,value:'Long'},
                { question: '객관식질문', question_img: 'radio_button_checked',value:'MultipleChoiceQuestions' },
                { question: '체크박스', question_img: 'check_box',value:'CheckBox' },
                { question: '파일업로드', question_img: 'cloud_upload',value:'FileUpload' },
            ]);
           //질문유형 모달창
            const dropdownOpen = ref(false);
            const toggleDropdown = () => {
                dropdownOpen.value = !dropdownOpen.value;
            };
            //선택된 질문유형
            const selectedOption = ref(options[0]);//기본값
            //질문유형 선택
            const selectOption = (option) => {
                selectedOption.value = option;
                dropdownOpen.value = false;
                //console.log(option.value)
            };
            //라디오옵션
            const add_radio = ref(false);//기타 상태
            const radio_option = reactive({
                radio_data :['옵션1'], 
            })
            let radioOptionCount = 2;
            const add_radio_option =() =>{
                //radio_option.radio_data.push("옵션"+radioOptionCount);
                const newOption = "옵션" + radioOptionCount;
                radio_option.radio_data.push(newOption);
                radioOptionCount++;
                console.log(radio_option.radio_data)
            };
            const  remove_radio_option  = (index) => {
                radio_option.radio_data.splice(index, 1);
            };
            //수정된 라디오 옵션 값  저장하기
            const setRadioInput = function(index, event){
                const newValue = event.target.value;
                this.radio_option.radio_data[index]=newValue;
                // console.log(this.radio_option.radio_data[index]);
                //console.log(radio_option.radio_data);
            }
            //체크박스옵션
            const add_check = ref(false);//기타 상태
            const check_option = reactive({
                check_data :['옵션1'], 
            })
            let checkOptionCount = 2;
            const add_check_option =() =>{
                check_option.check_data.push("옵션"+checkOptionCount);
                checkOptionCount++;
                //console.log(check_option.check_data)
            };
            const  remove_check_option  = (index) => {
                check_option.check_data.splice(index, 1);
            };
            //수정된 체크박스옵션 값  저장하기
            const setCheckInput = function(index, event){
                const newValue = event.target.value;
                this.check_option.check_data[index]=newValue;
                // console.log(this.check_option.check_data[index]);
                // console.log(check_option.check_data);
            }
            return {
                dropdownOpen, toggleDropdown, 
                options, selectOption,selectedOption,
                radio_option,add_radio,radioOptionCount,add_radio_option,remove_radio_option,
                setRadioInput,setCheckInput,
                check_option,add_check,checkOptionCount,add_check_option,remove_check_option,
                img_file,img_reader,fileChange,
                
            };
        },
        methods: {
            
        },
    }

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
    .options{width:100%; position:absolute;top:0;left:0; min-width: 209px;box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);background: #fff;}
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


</style>