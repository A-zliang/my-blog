import Vue from 'vue'
import axios from './axios/index.js'
// import axios from 'axios'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

