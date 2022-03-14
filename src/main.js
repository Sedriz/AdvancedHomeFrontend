import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import VueGoogleCharts from 'vue-google-charts'

Vue.config.productionTip = false
Vue.use(VueGoogleCharts)

new Vue({
  vuetify,
  Vuex,
  router,
  render: h => h(App)
}).$mount('#app')
