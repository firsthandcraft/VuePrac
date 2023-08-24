<template>
    <div>
    <v-row justify="center">
      <v-col
        sm="7"
        md="7"
        lg="7"
        xl="7"
      >
        <img :src="preview">
        <v-file-input
          v-model="file"
          @change="previewFile(file)"
        />
        <v-btn
          block
          color="blue"
          @click="validateCheck"
        >
          추가
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  data:()=>({
    preview: '',
    saveFile: null
  }),
  methods:{
    previewFile(file){
      const fileData = (data) => {
        this.preview = data
      }
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener("load", function () {
        fileData(reader.result)
      }, false);
    },
  }
}

</script>
<style scoped>
    @import url("../index.css");
  


</style>