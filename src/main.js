import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/flexible.min.js'
import './assets/css/index.css'

Vue.config.productionTip = false

//注册vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//api
import * as api from './api';
Vue.prototype.$api=api;
//js-cookie
import jscookie from 'js-cookie';
Vue.prototype.$cookie=jscookie;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
