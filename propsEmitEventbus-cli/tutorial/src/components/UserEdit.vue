<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field label="Label" v-model="user.name">

    </v-text-field>
  </div>
</template>

<script>
import { ref } from 'vue';

export default{
    props:["name","address","phone","hasDog"]
    ,
    setup(props) {
      const user = ref({})
      const localName = ref(props.name); // 로컬 상태로 사용
      const created = function(){
        this.user.name = this.nane
        this.user.address = this.address
        this.user.phone = this.phone
        this.user.hasDog = this.hasDog
      }
      return {user,
        localName,created
      };
    },
  }
</script>
