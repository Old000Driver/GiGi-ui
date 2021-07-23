<demo>示例2</demo>
<template>
  <Button @click="showDialog">一句话打开Dialog</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import {h} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {
    Button,
    Dialog
  },
  setup() {
    const showDialog = () => {
      console.log('showDialog:');
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
        },
        cancel() {
          console.log('cancel');
        }
      });
    };
    return {
      showDialog
    };
  }
};
</script>