<template>
  <button @click="emitEvent">이벤트 발생</button>
</template>

<script>
import { defineComponent, toRefs, ref } from 'vue';

export default defineComponent({
  emits: ['custom-event'], // 커스텀 이벤트 명 정의
  setup(props, { emit }) {//props 객체는 컴포넌트에 전달된 프로퍼티를 담고 있습니다.
    const emitEvent = () => {
      emit('custom-event', '이벤트 데이터'); // 이벤트 발생 및 데이터 전달
    };

    return {
      emitEvent
    };
  }
});
</script>