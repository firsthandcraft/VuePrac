<template>
<!--  //html 실ㄹ시간 미리보기 npm run serve-->
 <div>
    
    <div class="black-bg">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
      </div>
    </div>
    <ul class="menu">
      <li><a v-for="(a,i) in menus" v-bind:key="i">{{a}}</a></li>
    </ul>
    <div>
      
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div v-for="(pa,pi) in products" v-bind:key="pi">
      <img :src="require('@/assets/gundog' + 이미지[pi] + '.png')">
      <h4 :style="스타일">{{logo}}</h4>
      <p>실시간 렌더링 기능 -데이터 바인딩ㄴ</p>
      <h4>{{products[pi]}} 원룸</h4>
      <p>{{price1}} 만원</p>
      <button @click="신고수[pi]++">신고버튼</button> <span>신고수 : {{신고수[pi]}}</span>
    </div>
    
  </div>
</template>
<script>
// var array =[10,20,30];
// array[0]
export default {
  name: 'App',
  data(){
    return {
      // 데이터 보관함이다.
      // 데이터는 object로 저장
      //자주변하는 데이터만넣으면좋음
      모달창열렸니 :true,
      모달창닫혔니:false,
      menus:['home','shop','about'],
      price1 : 50,
      price2 : 70,
      logo: '원룸',
      스타일: 'color:red',
      신고수: [0,0,0],
      이미지: [1,2,3],
      products : ["역상동","천호동","마폭구"]
    }
  },
  methods : {
    // increase(){
    //   this.신고수 +=1;
    // }
  },
  components : {

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{background: darkslateblue;padding:15px;border-radius:5px;}
.menu a{color:#fff;padding:10px;}
.black-bg{width: 100%;height:100%;background: #0000006e;position:fixed;top:0;left:0; padding:20px;}
.white-bg{width:100%;background:white;border-radius:8px;padding:20px;}
</style>
