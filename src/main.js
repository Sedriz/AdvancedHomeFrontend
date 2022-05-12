import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import VueGoogleCharts from 'vue-google-charts'

Vue.config.productionTip = false
Vue.use(VueGoogleCharts)

new Vue({
  vuetify,
  Vuex,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
