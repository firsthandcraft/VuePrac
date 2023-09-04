<template>
  <div class="red lighten-3 pa-3">
      <h3>자세한 회원 정보를 확인합니다.</h3>
      <p>상세사항</p>
      <p>name: {{nameOfChild.name}}</p>
      <p>familyName: {{nameOfChild.familyName}}</p>
      <p>{{sayHello}}</p>
      <v-btn @onlcick="switchName()">이름변경</v-btn>
  </div>
</template>
<script>
import { reactive } from 'vue';

  export default{
    props: {
      nameOfChild:reactive({
        type:Object,
        required : true, 
        default: () => ({ name: 'LEGO',familyName:'choi' }),//부모컴포넌트에서 아무것도 전달 안할때
      })
    },
    computed:{
      sayHello(){
        return this.nameOfChild.name+'안녕하세요'
      }
    },
    setup(props) {
        const switchName= function() {
          console.log(props)
        props.nameOfChild.name="컴퓨터";
        console.log(nameOfChild)
        }
        return { 
          switchName
        }
    },
  }
</script>