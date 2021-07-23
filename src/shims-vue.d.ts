declare module '*.vue' {
  import {ComponentOptions} from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

declare module '*.md'{
  const str:string
  export default str
}

// 让 ts 理解 vue