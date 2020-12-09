import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import store from './store'
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
import startQiankun from "./utils";

Vue.config.productionTip = false

import routes from "./routes";

Vue.use(VueRouter);
Vue.use(Antd);

startQiankun();

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#main-app");