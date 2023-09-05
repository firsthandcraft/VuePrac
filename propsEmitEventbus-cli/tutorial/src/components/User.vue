<template>
    <div class="blue lighten-3 pa-3">
        <h1>User 컴포넌트</h1>
        
    </div>
</template>

<script>
import { reactive, ref,defineComponent } from "vue";
 export default defineComponent({
    setup(props,{ emit }) {
        const allData =  reactive({
            data :[
                {title: 'ㄹ', img: '', qustion_type: 'ShortAnswer', qustion_data:[''], etc: false},
                {title: '', img: '', qustion_type: 'ShortAnswer', qustion_data:['옵션1', '옵션 2'], etc: false}
            ], 
        })
        return {
            allData
        }
    }
 })
</script>

<style>

</style>