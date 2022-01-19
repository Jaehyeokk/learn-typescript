import Vue from 'vue';
import { MyStore } from '@/store/types';

// NOTE: node_modules/vuex/vue.d.ts를 삭제해야 정상 추론 됨
declare module 'vue/types/vue' {
  interface Vue {
    $store: MyStore;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    store?: MyStoreore;
  }
}
