<template>
     <div class="card shadow-sm">
            <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}"></span>
            <!-- <img :src="item.imgPath" > -->
            <div class="card-body">
                <p class="card-text">
                    <span>{{item.name}} &nbsp;</span>
                    <small class="discount badge bg-danger ">{{ lib.getNumberFormatted(item.discount_per)}}%</small>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button class="btn btn-primary">구입하기</button>
                </div>
                <small class="price text-muted">{{ lib.getNumberFormatted(item.price) }}만원</small>
                
                <small class="real text-danger ">{{ lib.getNumberFormatted(item.price-(item.price * item.discount_per / 100))}}만원</small>
                </div>
            </div>
            </div>
</template>
<script >
 import lib from "@/scripts/lib";
    export default{
        name:"card",
        props:{
            item:Object
        },
        setup(){
            return {lib}
        }
    }
</script>
<style scoped>
.card .img{
    display:inline-block;
    width:100%;
    height:250px;
    background-size:cover;
    background-position:center;
}
.card .card-body .price{text-decoration: line-through;}
</style>