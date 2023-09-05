<template>
<div>
  <h3>{{propsdata}}</h3>
  <button v-on:click="sendEvent">send</button>
</div>

</template>

<script>
export default {
    //props사용해보기
    props:['propsdata'],
    methods:{
        sendEvent:function(e){
            e.prev
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>