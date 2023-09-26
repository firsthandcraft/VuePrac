<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>
<template>
  <button>
    <slot></slot>
  </button>
</template>
<style>
button {
  width: 100px;
  height: 50px;
  background-color: blue;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
