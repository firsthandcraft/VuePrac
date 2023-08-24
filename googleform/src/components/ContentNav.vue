<template>
       <ul class="contentNav" :style="{ top: bannerTop }">
            <li><span class="material-symbols-outlined">add_circle</span></li>
        </ul> 
</template>
<script>
import { ref, reactive, onMounted } from 'vue';

    export default{
        setup() {
            const floatPosition = 100; // 예시로 값 설정
            const currentTop = ref(0);
            const bannerTop = ref('0px'); // 초기값 설정

            const handleScroll = () => {
            currentTop.value = window.scrollY;
            bannerTop.value = `${currentTop.value + floatPosition}px`;
            };

            onMounted(() => {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // 초기 스크롤 위치 설정
            });

            return {floatPosition,currentTop,
            bannerTop,handleScroll,
            };
        },
    };
</script>
<style scoped>
    @import url("../index.css");
    .contentNav{width:50px;position: absolute;right:-62px;background:#fff;transition: all .3s cubic-bezier(0.4,0,0.2,1);box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.141), 0 1px 3px 0 rgba(0,0,0,0.122);border: 1px solid #dadce0;border-radius: 8px;}
    .contentNav li{display:flex;justify-content:center;padding:8px 0;cursor: pointer;}
</style>