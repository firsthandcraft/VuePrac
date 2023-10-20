<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{content}}</p>
        <p class="text-muted">{{createdAt}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script setup>
  defineProps({
    title:{
      type:String,
      required: true,
    },
    content:{
      type:String,
    },
    createdAt:{
      type:[String, Date, Number]
    }
  })
</script>