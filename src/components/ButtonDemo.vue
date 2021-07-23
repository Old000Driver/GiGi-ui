<template>
  <h3>
    <strong>Button 组件示例</strong>
  </h3>
  <Demo :component="Button1Demo"></Demo>
  <Demo :component="Button2Demo"></Demo>
  <Demo :component="Button3Demo"></Demo>
  <Demo :component="Button4Demo"></Demo>
  <Demo :component="Button5Demo"></Demo>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
import Demo from './Demo.vue';
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';


export default {
  components: {
    Button: Button,
    Demo,
    Button1Demo,
    Button2Demo,
    Button3Demo,
    Button4Demo,
    Button5Demo
  },
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {
      onClick,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    };
  }
};
</script>
