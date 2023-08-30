<template>
    <div class="blue lighten-3 pa-3">
        <h1>User 컴포넌트</h1>
        <p>이름: {{name}}</p>
        <v-btn @click="changeName()">변경</v-btn>
        <hr>
        <v-layout row wrap>
        <v-layout xs12 sm6>
            <UserDetail 
                :name= "name"
                :address= "address"
                :phone = "phone"
                :hasDog= "hasDog"
            ></UserDetail>
            <!-- <UserDetail :nameOfChild="{name:name,familyName:'Cho'}"></UserDetail> -->
        </v-layout>
        <v-layout xs12 sm6>
            <UserEdit :nameOfChild="{name:name,familyName:'Cho'}"></UserEdit>
        </v-layout>
        </v-layout>
    </div>
</template>

<script>
import { VueElement } from 'vue'
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"
import { ref } from 'vue';
export default {
    components: {
        UserDetail,
        UserEdit
    },
    setup() {
        let resss= ref({
            name:"Hoza",
            address:'Seoul',
            phone:'000df0d',
            hasDog:true,
        })
        // let name= ref('뷰제이에스')
        // const changeName = function(){
        //     this.name="Hoza";
        // }
        return { resss
        
        }
    },
}
</script>

<style>

</style>