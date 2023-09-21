<template>
  <div class="ground">
    <Header 
      @preview-content="sendPreviewContent($event)"
    />
    <router-view 
      :preview-data="previewData"
      @previewData-change="previewDataEvent($event)"
    ></router-view>
  </div>
</template>

<script setup>
import { reactive} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from './Header.vue';
const route = useRoute();
const router = useRouter(); // useRouter를 사용하여 라우터 객체를 가져옴
const previewData = reactive([]);
const sendPreviewContent= (e) =>{
  previewData.previewContent = e;
}
const previewDataEvent=(e)=>{
  console.log("eeeeeeeeeeeeeeee");
  console.log(e);
  const dataToSend = { previewData: e };
  router.push({ path: '/ground/preview', query: dataToSend });
}
</script>
