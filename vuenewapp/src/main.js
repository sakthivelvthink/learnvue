import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import globlaMixin from "./mixins/globlaMixin"
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
window.axios = require('axios');
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

Vue.mixin(globlaMixin);
