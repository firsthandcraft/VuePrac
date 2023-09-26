<script>
import ThirdComponent from '@/components/ThirdComponent.vue';
export default {
  components: {
    ThirdComponent,
  },
  inject: ['provideNum'],
};
</script>
<template>
  <div>
    <h1>Second Component</h1>
    <h2>Second Num provide: {{ provideNum }}</h2>
    <ThirdComponent />
  </div>
</template>
<style></style>
