<script>
import SecondComponent from '@/components/SecondComponent.vue';
export default {
  components: {
    SecondComponent,
  },
  inject: ['provideNum'],
};
</script>
<template>
  <div>
    <h1>First Component</h1>
    <h2>First Component Num: {{ provideNum }}</h2>
    <SecondComponent />
  </div>
</template>
