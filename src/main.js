import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.qs = qs
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://localhost/api/v1/'

new Vue({
  vuetify,
  router,
  Vuex,
  render: h => h(App)
}).$mount('#app')
