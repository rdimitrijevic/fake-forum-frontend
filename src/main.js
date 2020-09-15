import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueCookie from 'vue-cookie';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueCookie);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.interceptors.request.use(config => {
  config.headers.common['X-Jwt-Token'] = Vue.cookie.get('user-token')
  return config
});

window.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
