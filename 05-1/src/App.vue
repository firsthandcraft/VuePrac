<script>
import DefaultLayout from './layouts/DefaultLayout.vue';
import FancyButton from './components/FancyButton.vue';
export default {
  components: {
    DefaultLayout,
    FancyButton,
  },
};
</script>
<template>
  <DefaultLayout>
    <template v-slot:header>
      <header>slot header</header>
    </template>
    <template v-slot:main>
      <main>hello, main</main>
      <FancyButton> <i class="fa-solid fa-pen-to-square"></i>수정 </FancyButton>
    </template>
    <template v-slot:footer>
      <footer>footer slot</footer>
    </template>
  </DefaultLayout>
</template>
<style></style>
