<template>
   <div class="contentWrap">
        <!-- 제목 -->
        <article class="c_title active">
            <input  type="text" placeholder="제목">
            <input type="text" placeholder="설문지 설명">
        </article>
        <article class="c_content">
            <div class="cc_top">
                <input class="cc_qustion" type="text" placeholder="제목없는 질문">
                <a class="cc_image" href="#">
                    <span class="material-symbols-outlined">image</span>
                </a>
                <div class="selectWrap">
                    <ul class="select_header" @click="toggleDropdown">
                        <li class="selected_option">
                            <p><span class="material-symbols-outlined">{{ selectedOption.question_img }}</span>
                            {{ selectedOption.question }}</p>
                            <span class="material-symbols-outlined">expand_more</span>
                        </li>
                        <!-- <span class="dropdown-icon material-icons-outlined" :class="{ 'open': dropdownOpen }"></span> -->
                    </ul>
                    <!-- 반복문 -->
                    <ul class="options" v-if="dropdownOpen">
                        <li v-for="d in options" :key="d.question" @click="selectOption(d)" >
                            <span class="material-symbols-outlined">{{ d.question_img }}</span>
                            {{ d.question }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cc_middle">
                <div  v-for="type in input_type" :key="type.value">
                    <div class="inputType" v-if="selectedOption.value == type.value">
                        <span class="material-symbols-outlined">{{type.icon}}</span>
                        <p>
                            <input :type="type.type" :value="type.text"  :disabled="type.disabled === 'true' ? true : false">
                        </p>
                        <!-- <span class="material-symbols-outlined">close</span> -->
                    </div>
                    
                </div>
                
              
                <div class="inputType">
                    <p><span class="material-symbols-outlined">circle</span><a href="#">옵션추가</a>또는 <a href="#">'기타'추가</a></p>
                    <!-- <p><span class="material-symbols-outlined">circle</span><input type="text" value="기타..." disabled><span class="material-symbols-outlined">close</span></p>
                    <p><span class="material-symbols-outlined">circle</span><a href="#">옵션추가</a></p> -->
                </div>
                <div class="inputType">
                    <p><span class="material-symbols-outlined">square</span><a href="#">옵션추가</a>또는 <a href="#">'기타'추가</a></p>
                    <!-- <p><span class="material-symbols-outlined">square</span><input type="text" value="옵션"><span class="material-symbols-outlined">close</span></p> -->
                </div>
            </div>
            <div class="cc_bottom">
                <p><span class="material-symbols-outlined">content_copy</span></p>
                <p><span class="material-symbols-outlined">delete</span></p>
                <p class="necessary">필수</p>
                <p><span class="material-symbols-outlined">more_vert</span></p>
                
            </div>
            
        </article>

   </div>
</template>
<script>
import { reactive, ref } from "vue";
    export default{
        setup() {
            const options = reactive([
                { question: '단답형', question_img: 'notes',value:'ShortAnswer' },
                { question: '장문형', question_img: 'subject' ,value:'Long'},
                { question: '객관식질문', question_img: 'radio_button_checked',value:'MultipleChoiceQuestions' },
                { question: '체크박스', question_img: 'check_box',value:'CheckBox' },
                { question: '파일업로드', question_img: 'cloud_upload',value:'FileUpload' },
            ]);
            const selectedOption = ref(options[0]);
            const dropdownOpen = ref(false);//모달창
            const toggleDropdown = () => {
                dropdownOpen.value = !dropdownOpen.value;
            };
            const selectOption = (option) => {
                selectedOption.value = option;
                dropdownOpen.value = false;
            };
            const input_type  = reactive([
                { value:'ShortAnswer',text:'단답형 텍스트',type:'text',icon:'',disabled:'true'},
                { value:'Long',text:'장문형 텍스트',type:'text',icon:'',disabled:'true'},
                { value:'MultipleChoiceQuestions',text:'옵션',type:'text',icon:'circle' ,disabled:'false' },
                { value:'CheckBox',text:'옵션',type:'text',icon:'square' ,disabled:'false' },
                { value:'FileUpload',text:'',type:'file',icon:'' ,disabled:'false' },
            ]);
            

        return { options, selectedOption, dropdownOpen, toggleDropdown, selectOption ,input_type};
        },
    }

</script>
<style scoped>
    ul,li{list-style:none;padding:0;margin:0;}
    .cc_image,.cc_bottom,.selectWrap,.inputType{color: #5f6368;fill: #5f6368;}
    input{box-sizing:border-box;}
    .contentWrap{padding: 12px 0 64px;margin: auto;width:90%;max-width: 770px;min-width:370px;}
    .contentWrap article{padding:20px 20px 0;margin-top: 12px;border: 1px solid #dadce0;border-radius: 8px;background:#fff;}
    .contentWrap .c_title{padding-bottom: 24px;position: relative;overflow: hidden;}
    .c_title::before{content:"";position:absolute;top:0;left:0; width:100%;height:12px;background:rgb(103, 58, 183);z-index:10;}
    .contentWrap article.active{position: relative;box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.141), 0 1px 3px 0 rgba(0,0,0,0.122);}
    .contentWrap article.active::after{content:"";position:absolute;top:0;left:0; width:6px;height:100%;background: #4285f4;}
    .c_title input:nth-child(1){width:100%; font-family: 'docs-Roboto';font-weight: 400;font-size: 24pt;line-height: 1.25;letter-spacing: 0;}
    .cc_top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;}
    .cc_qustion{min-width:300px;width:60%;font-family: 'docs-Roboto';
    font-weight: 400;
    font-size: 12pt;
    line-height: 1.5;
    letter-spacing: 0;}

    .selectWrap{position: relative;}
    .select_header{min-width:200px;width:30%;padding:10px; border: 1px solid #dadce0;border-radius:4px;}
    .select_header li{display:flex; justify-content:space-between;align-items:center;}
    .select_header li p{margin:0;display:flex;align-items:center;}
    .select_header li p span{margin-right: 8px;}
    .options{width:100%; position:absolute;top:0;left:0; min-width: 209px;box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);background: #fff;}
    .options li{padding:8px;}
     .options li:hover{background-color: rgba(0,0,0,.2);}
    /*  */
    .cc_bottom{margin-top:20px; display: flex;justify-content:end; align-items:center;border-top:1px solid #dadce0;height: 64px;}
    .cc_bottom p{width:48px;height:48px;display:flex;justify-content:center;align-items:center;}
    .cc_bottom p span{display:block;}
    /*  */
    .inputType{display:flex;align-items:center;}
    .inputType>p{width:80%;}
    .inputType>p input{width:100%;}

</style>