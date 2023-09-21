<template>
    <div>
        <!-- <p>{{ this.$store.getters.originalPrice }}</p>
        <p>{{ this.$store.getters.doublePrice }}</p>
        <p>{{ this.$store.getters.triplePrice }}</p> -->
                <!-- 상단의 값을 간단하게 표현-->
                <!--computed에  originalPrice(state){
            return  this.$store.getters.originalPrice ;
            },
            doublePrice(state){
                return  this.$store.getters.doublePrice ;
            },
            triplePrice(state){
                return  this.$store.getters.triplePrice ;
            },를 넣고 태그 부분을  
            <p>{{ this.$store.getters.originalPrice }}</p>  -> 
            <p>{{ originalPrice }}</p> 로 만들기 -->
            <p>{{ originalPrice}}</p>
            <p>{{ doublePrice}}</p>
            <p>{{ triplePrice}}</p>

    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default{
        computed:{
            
            // originalPrice(state){
            // return  this.$store.getters.originalPrice ;
            // },
            // doublePrice(state){
            //     return  this.$store.getters.doublePrice ;
            // },
            // triplePrice(state){
            //     return  this.$store.getters.triplePrice ;
            // },
            //상단의 부분 간단히 만들기 mapGetters사용하기 
            ...mapGetters(['originalPrice','doublePrice','triplePrice'])
            // 결론 mapGetters 헬퍼 함수 간단하게 만들어준다. 
        }
    }
</script>
<style>
</style>