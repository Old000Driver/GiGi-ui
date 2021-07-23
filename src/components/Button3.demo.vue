<demo>
示例3
</demo>
<template>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button level="main" theme="link">主要按钮</Button>
    <Button theme="link">普通按钮</Button>
    <Button level="danger" theme="link">危险按钮</Button>
  </div>
  <div>
    <Button level="main" theme="text">主要按钮</Button>
    <Button theme="text">普通按钮</Button>
    <Button level="danger" theme="text">危险按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {
    Button
  }
};
</script>