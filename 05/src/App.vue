<template>
  <FirstComponent />
</template>
<script>
import { computed } from 'vue';
import FirstComponent from '@/components/FirstComponent.vue';
export default {
  components: {
    FirstComponent,
  },
  data() {
    return {
      num: 0,
    };
  },
  provide() {
    return {
      provideNum: computed(() => this.num),
      incrementNumFunc: this.incrementNum,
    };
  },
  methods: {
    incrementNum() {
      this.num++;
    },
  },
};
</script>

