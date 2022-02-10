import Chart from "chart.js/auto";
import { VueConstructor } from "vue";

export default {
  install(Vue: VueConstructor): void {
    Vue.prototype.$_Chart = Chart;
  },
};
