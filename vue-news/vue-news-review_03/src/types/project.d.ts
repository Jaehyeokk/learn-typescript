// node_modules/vuex/vue.d.ts 파일을 삭제해야 아래 선언이 적용됩니다.

import Vue from 'vue';
import { MyStore } from '../store/types';

declare module 'vue/types/vue' {
  interface Vue {
    $store: MyStore;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
