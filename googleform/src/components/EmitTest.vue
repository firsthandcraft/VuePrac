<template>
  <div>
    <ChildComponent @custom-event="handleEvent" />
    <p>{{ eventData }}</p>
  </div>
</template>

<script>
import { defineComponent, toRefs, ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default defineComponent({
  components: {
    ChildComponent
  },
  setup() {
    const eventData = ref('');

    const handleEvent = (data) => {
      eventData.value = data; // 이벤트에서 전달된 데이터 처리
    };

    return {
      eventData,
      handleEvent
    };
  }
});
</script>