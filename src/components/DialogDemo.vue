<template>
  <h3>
    <strong>Dialog 组件示例</strong>
  </h3>
  <Demo :component="DialogDemo1"/>
  <Demo :component="DialogDemo2"/>
</template>
<script lang="ts">
import DialogDemo1 from './Dialog1.demo.vue'
import DialogDemo2 from './Dialog2.demo.vue'
import Demo from './Demo.vue';

export default {
  components: {
    Demo,
    DialogDemo1,
    DialogDemo2
  },
  setup() {
    return{
      DialogDemo1,
      DialogDemo2
    }
  }
};
</script>

