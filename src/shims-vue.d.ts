declare module '*.vue' {
  import {ComponentOptions} from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

// 让 ts 理解 vue