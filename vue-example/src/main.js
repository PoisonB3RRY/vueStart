// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { add } from '../comm/public'
import chat from '../comm/chat'
import store from './store'
import myTgr from './components/3-组件化/全局注册/index.js'

// 全局注册组件
Vue.use(myTgr);

Vue.prototype.$add=add;
Vue.prototype.chat=chat;

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
