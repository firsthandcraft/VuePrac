<script>
import FirstChild from '@/components/FirstChild.vue'
export default{
  components:{FirstChild},
  data(){},
  computed:{},
  mehtods:{},
  props:{},
  emits:{},
  provide(){
    return {};
  },
  inject:{},
  //lifeCycle
  data(){
    return {num:0}
  },
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this.num);
  },
  created() {
    console.log("created");
    console.log(this.num);
  },
  beforeMount() {
    console.log("beforeMount");
    console.log(this.num);
  },
  mounted() {
    console.log("mounted");
    console.log("mounted::",this.num);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
    console.log(this.num);
  },
  updated() {
    console.log("update");
    console.log(this.num);
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },

}
</script>

<template>
  <div>
    <h1>LIFECYCLE</h1>
    <a href="https://v3-docs.vuejs-korea.org/guide/essentials/lifecycle.html">생명주기</a>

    <hr>
    {{ num }}
    <button @click="num++">증가</button>
    <p>버튼을 누르면 app.vue에서 beforeUpdate가 호출되고 증가된 num과 update
 된 num이 나옴 (둘다 같은값 나옴)</p>
    <br>
    <FirstChild v-if="num <3"/> 
    <p style="text-align: center;"><b>v-if와 v-show</b> <br>
    ::v-if 는 화면에서 없애는거<br> :: v- show는 displaynone으로 컴포넌트를 해지하지는 않아</p>
  
    <hr>

  </div>

</template>

<style>

</style>
