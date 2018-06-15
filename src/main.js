import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import store from "@/store/store";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
