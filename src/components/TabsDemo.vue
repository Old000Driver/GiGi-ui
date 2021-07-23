<template>
  <h3>
    <strong>Tabs 组件示例</strong>
  </h3>
  <Demo :component="Tab1Demo"/>
</template>
<script lang="ts">
import Tab1Demo from './Tab1.demo.vue';
import Demo from './Demo.vue';

export default {
  components: {
    Tab1Demo,
    Demo
  },
  setup() {
    return {
      Tab1Demo
    };
  }

};
</script>
