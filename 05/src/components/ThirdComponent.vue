<script>
export default {
  inject: ['provideNum', 'incrementNumFunc'],
};
</script>
<template>
  <div>
    <hr>
    <h1>Third Component</h1>
    <h2>Third Num: {{ provideNum }}</h2>
    <h3>Third Provide Num: {{ provideNum }}</h3>
    <button @click="incrementNumFunc">Third 클릭</button>
  </div>
</template>
<style></style>
