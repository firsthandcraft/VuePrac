<template>
    <header>
        <div class="h_top">
            <div class="ht_left">
                <p class="form_icon">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><rect x="-4" y="-4" class="st0" fill="none" width="48" height="48"></rect><g><polygon class="st1" fill="#56368A" points="24.5,10 30,11 34.5,10 24.5,0 23.2,4.7"></polygon><path class="st2" fill="#7248B9" d="M24.5,10V0H8.2C6.7,0,5.5,1.2,5.5,2.7v34.5c0,1.5,1.2,2.7,2.7,2.7h23.6c1.5,0,2.7-1.2,2.7-2.7V10H24.5z"></path><path class="st3" fill="#FFFFFF" d="M13.2,28.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4 C14.5,28.2,13.9,28.9,13.2,28.9z M13.2,23.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4S13.9,23.4,13.2,23.4z M13.2,17.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C14.5,17.3,13.9,17.9,13.2,17.9z M28.2,28.6H16.8 v-2.3h11.4V28.6z M28.2,23.2H16.8v-2.3h11.4V23.2z M28.2,17.7H16.8v-2.3h11.4V17.7z"></path></g></svg>
                </p>
                <h3 class="title">
                    제목 없는 설문지
                </h3>
            </div>
            <div class="ht_right">
                <p><span class="material-symbols-outlined">palette</span></p>
                <p><span class="material-symbols-outlined">visibility</span></p>
                <!-- <p><span class="material-symbols-outlined">undo</span></p> -->
                <p><span class="material-symbols-outlined">send</span></p>
                <p><span class="material-symbols-outlined">more_vert</span></p>
            </div>
        </div>
        <div class="h_bottom">
            <ul>
                <li><a class="active" href="#">질문</a></li>
                <li><a href="#">응답</a></li>
            </ul>
        </div>
    </header>
</template>
<style scoped>
   @import url("../index.css");
   /* ----- header ----- */
    .h_top,.ht_left,.ht_right{display:flex;justify-content:space-between;align-items:center;}
    .form_icon{height: 40px;width: 40px;margin:4px 10px 4px 0;}
    .ht_left .title{font-family: "Google Sans",Roboto,Arial,sans-serif;font-size: 18px;font-weight: 400;line-height: 24px;color: #202124;}
    .ht_right p{padding:0 10px;color: #5f6368;fill: #5f6368;}
    .h_bottom ul{display:flex;justify-content:center;align-items:center;margin-bottom:0;}
    .h_bottom a{display: block;padding: 10px 12px;font-size: 14px;color: #3C4043;}
    .h_bottom a.active{color: rgb(76, 43, 135);position: relative;}
    .h_bottom a.active::after{content:"";width:100%;height:3px;position:absolute;left:0; bottom:0;border-radius:2px;background:rgb(76, 43, 135);}
</style>