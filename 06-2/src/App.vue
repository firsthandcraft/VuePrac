<script>
import OptionsAPI from "@/components/OptionsAPI.vue";
import CompositionAPI from "@/components/CompositionAPI.vue";
import CompositionUpAPI from "@/components/CompositionUpAPI.vue";
export default {
  components: {
    OptionsAPI,
    CompositionAPI,CompositionUpAPI
  },
};
</script>
<template>
<div>
  <OptionsAPI />
  <hr>
  <CompositionAPI/>
  <hr>
  <CompositionUpAPI/>
</div>
</template>