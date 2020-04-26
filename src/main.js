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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
