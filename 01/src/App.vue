
<template>
  <div>
    <p><a href="https://ko.vuejs.org/api/">빌트인</a></p>
    <h3>{{message.split("").reverse().join("")}}</h3>
    <p>콧수염 태그에서 가공이 가능하나 최대한 템플릿 안의 데이터는 간단하고 직관적이게 만들자</p>

    <h3>v-html</h3>
    <div v-html="message1"></div><!--v안의 어떤 내용도 있으면 안된다. -->

    <h3>v-text</h3>
    <div v-text="message2"></div>

    <h3>v-bind </h3>
    <p v-bind:class="`red`" >v-text는 {{}}를 대신쓰는게 좋다</p>
    <p v-bind:class="warning" >warning</p>
    <p><i>반드시 변수에 담아 red를 하던가 ``를 이용하자</i></p>
    <h4>조건식을 v-bind에 추가하자</h4>
    <h3 :class="{red:condition =='bad',blue:condition=='good'}"> 조건으로 넣는방법</h3>
    <!-- <button v-on="click=conditionState()">click</button> -->
    <button :disabled="condition =='good'">요트투어취소</button>

    <h4>v-if</h4>
    <h5 v-if="condition=='good'">날씨가 좋네요</h5>
    <h5 v-if="condition=='bad'">날씨가 나브네용</h5>

    <h4>v-else-if || v-else</h4>
    <p>v-else 문은 v-if와 꼭 같이 써야한다. 중간에 다른애가 끼면 안됨</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message : "hello vue JS",
      message1 : "<h1>hello vue JS</h1>",
      message2 : "<h2>hello vue JS</h2>",
      warning:"red",
      condition:'good', //bad
    }
  },
  methods: {
    // conditionState (){
    //   // condition.value = !condition.value
    //   console.log(condition)
    // }
  },
}
</script>
<style >
  .red{color:red;}
  .blue{color: blue;}
</style>