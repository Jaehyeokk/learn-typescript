// node_modules/vuex/types/vue.d.ts 를 삭제하세요.

import Vue from "vue";
import { MyStore } from "../store/types";

declare module "vue/types/vue" {
  interface Vue {
    $store: MyStore;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
