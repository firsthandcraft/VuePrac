<template>
<!--  //html 실시간 미리보기 npm run serve-->
 <div>
    <div class="black-bg" v-if="modalopen==true" >
      <div class="white-bg">
        <h4><p>{{selectedTitle}}</p></h4>
        <select class="form-control empty">
          <option value="" disabled="">색상(방향)</option>
          <option value="0">리세3인소파 (라이트그레이/좌형)(A)(268,750원)</option>
          <option value="1">리세3인소파 (라이트그레이/우형)(B)(268,750원)</option>
          <option value="2">리세3인소파 (딥그린/좌형)(E)(268,750원)</option>
          <option value="3">리세3인소파 (딥그린/우형)(F)(268,750원)</option>
          <option value="4">리세3인소파 (아이보리/좌형)(C)(268,750원)</option>
          <option value="5">리세3인소파 (아이보리/우형)(D)(268,750원)</option>
        </select>
        <div class="btnWrap">
          <button @click="modalopen=false">취소</button>
          <button @click="modalopen=false">구매</button>
        </div>
        
      </div>
      <!-- <div class="imgWrap" v-for="(pa,pi) in imgModal" v-bind:key="pi"> -->
            <div class="imgWrap">
              <transition name="fade" mode="out-in">
                <img :key="currentIndex" :src="require(`@/assets/gundog${currentIndex}.png`)" />
              </transition>
      
        <!-- <ul>
          <li><img :src="require('@/assets/gundog' + imgModal[pi] + '.png')"  :key="currentIndex"></li>
        </ul> -->
      </div>
    </div>
    <ul class="menu">
      <li>
        <a >
          <svg class="css-1qa5cvy" xmlns="http://www.w3.org/2000/svg" width="74" height="30" fill="none" viewBox="0 0 74 30"><path fill="currentColor" fill-rule="evenodd" d="M14.2 25.17H9.28V20.7a1.45 1.45 0 00-2.9 0v4.47H1.44a1.45 1.45 0 100 2.9H14.2a1.45 1.45 0 000-2.9zM4.5 9.15c0-4.6 2.08-5.28 3.33-5.28 1.24 0 3.33.69 3.33 5.28v.36c0 4.6-2.09 5.28-3.33 5.28-1.25 0-3.34-.69-3.34-5.28v-.36zm3.33 8.54c3.84 0 6.23-3.13 6.23-8.18v-.36c0-5.05-2.39-8.18-6.23-8.18-3.85 0-6.24 3.13-6.24 8.18v.36c0 5.05 2.39 8.18 6.24 8.18zM33.37 10.35H17.81a1.45 1.45 0 000 2.9h15.56a1.45 1.45 0 100-2.9zM31.82 25.84c-7.08 1.84-9.45.8-10.14.26-.45-.35-.65-.8-.65-1.48v-.87h10.25c.8 0 1.46-.65 1.46-1.45v-5.08c0-.8-.65-1.45-1.46-1.45h-11.7a1.45 1.45 0 100 2.9h10.25v2.18H19.57c-.8 0-1.45.65-1.45 1.45v2.32a4.6 4.6 0 001.78 3.78c1.2.92 2.94 1.39 5.21 1.39 2.05 0 4.54-.38 7.44-1.13a1.45 1.45 0 10-.73-2.82zM20.3 7.83h10.82a1.45 1.45 0 100-2.9h-9.36V1.44a1.45 1.45 0 10-2.9 0v4.93c0 .8.65 1.45 1.45 1.45z" clip-rule="evenodd"></path><rect width="3" height="15" x="70" fill="currentColor" rx="1.5"></rect><path fill="currentColor" fill-rule="evenodd" d="M64.5 13.28a1.45 1.45 0 002.73-1c-.05-.13-1-2.68-3.38-4.5l3.7-4.1a1.45 1.45 0 00-1.09-2.42h-9.05a1.45 1.45 0 100 2.9h5.8l-6.88 7.64a1.45 1.45 0 102.16 1.95l3.41-3.8a8.02 8.02 0 012.6 3.33zM69.56 26.52h-7.01a.82.82 0 01-.82-.82v-1.95h8.65v1.95c0 .45-.37.82-.82.82zm2.27-9.37c-.8 0-1.45.65-1.45 1.45v2.25h-8.65V18.6a1.45 1.45 0 10-2.9 0v7.1a3.72 3.72 0 003.72 3.72h7.01a3.72 3.72 0 003.72-3.72v-7.1c0-.8-.65-1.45-1.45-1.45zM42.46 3.87c2.22 0 2.33 4.24 2.33 5.08 0 .85-.11 5.09-2.33 5.09-2.21 0-2.32-4.24-2.32-5.09 0-.84.11-5.08 2.32-5.08zm0 13.07c1.76 0 3.23-.93 4.14-2.62.71-1.34 1.1-3.2 1.1-5.37 0-2.16-.39-4.02-1.1-5.36A4.59 4.59 0 0042.46.97c-1.75 0-3.22.93-4.13 2.62-.72 1.34-1.1 3.2-1.1 5.36 0 2.17.38 4.03 1.1 5.37a4.59 4.59 0 004.13 2.62z" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M51.4.49c-.8 0-1.45.65-1.45 1.45v17.78c-1.93.6-5.75 1.12-10.38 1.12h-2.2a1.45 1.45 0 000 2.91h2.2c2.64 0 7.21-.23 10.38-1.02v4.84a1.45 1.45 0 002.9 0V1.94c0-.8-.65-1.45-1.45-1.45z" clip-rule="evenodd"></path></svg>
        </a>
        </li>
      <li v-for="(a,i) in menus" v-bind:key="i"><a>{{a}}</a></li>
    </ul>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="cardWrap">
      <div class="card" v-for="(pa,pi) in sofa" v-bind:key="pi">
        <img :src="sofa[pi].image" @click="openModal(pa.title)">
        <div class="content">
          <small>{{sofa[pi].brand}}</small>
          <p>{{sofa[pi].title}}</p>
          <h4>{{sofa[pi].price}}</h4>
          <div class="likeWrap">
            <button @click="sofa[pi].like++"><span class="material-symbols-outlined">thumb_up</span></button> 
            <span>{{sofa[pi].like}}</span>
          </div>
          
        </div>
      </div>
    </div>
    
    
  </div>
</template>
<script>
import data from './assets/data';//.js확장자 생략가능

data

export default {
  name: 'App',
  data(){
    return {
      // 데이터 보관함이다.
      // 데이터는 object로 저장
      //자주변하는 데이터만넣으면좋음
      sofa : data,
      selectedTitle: '', // 모달 창에 표시할 선택된 title 데이터
      modalopen :false,
      menus:['커뮤니티','쇼핑','이사/시공/생활'],
      imgModal: [0,1,2,3],
      currentIndex: 0,
      intervalId: null,
    }
  },
  methods : {
    openModal(title) {
      this.selectedTitle = title;
      this.modalopen = true;
    },
    startSlideShow() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000); // 3초마다 이미지 변경
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.imgModal.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.imgModal.length) % this.imgModal.length;
    },
  },
  mounted() {
    this.startSlideShow();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },

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
.menu{padding:22px;margin:0; border-radius:0; display:flex;align-items: flex-end; border-bottom:1px solid #999;}
.menu li{list-style:none;font-weight:600;}
.menu li:nth-child(1){margin-right: 30px;}
.menu a{color:#2F3438;padding:10px;}
.black-bg{width: 100%;height:100%;background: #0000006e;position:fixed;top:0;left:0; padding:20px;}
.white-bg{width:90%;background:white;border-radius:8px;padding:20px;position:fixed;bottom:0;display:flex;justify-content:space-between;align-items: center;z-index: 1000;}
.white-bg h4{width: 330px;}
.white-bg h4 p{width:100%;display:inline-block;
overflow:hidden;font-size:20px;text-overflow:ellipsis;white-space:nowrap;}
.white-bg select{border-radius: 4px;border-color: #35c5f0;color: #424242;height: 40px;}
.btnWrap{display:flex;    height: 45px;width:30%;}
.btnWrap button{width:50%; background-color:#35c5f0;border-radius:8px;border:1px solid #35c5f0;margin:0 2px;font-weight:600;color:#fff;font-size: 18px;}
.btnWrap button:first-child{color:#35c5f0;background-color:#fff;}

.cardWrap{width:100%; display:flex;flex-wrap:wrap;justify-content:center;}
.card{width:46%;padding:15px; margin-bottom:30px;}
.card img{width:100%;}
.card .content{text-align:left;padding:8px 0;}
.card .content p{margin:4px 0;font-size: 16px;}
.card .content h4{margin:8px 0;font-size:22px;}
.likeWrap{display:flex;align-items:center;color:555}
.likeWrap button{background:none;border:none;color:inherit;}
.likeWrap:last-child{ font-size:18px;color:inherit;}
.likeWrap button{margin-right:18px;color:inherit;}

.imgWrap {
  position: relative;top: 200px; width: 450px;margin:0 auto;
  max-height: 400px; /* 이미지 높이 설정 */}
  .imgWrap img{width:100%;}
.carousel-item {max-height: 400px;}
.fade-enter-active,
.fade-leave-active {
    left:  0;
    transition: 300ms;
}

</style>
