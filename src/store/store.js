import Vue from 'vue'
import Vuex from 'vuex'
import axiosConf from './axios'
import employeeModule from './modules/employeeModule'

const axios = axiosConf.axios

Vue.use(Vuex, axios)
Vue.config.devtools = true

export default new Vuex.Store({
  modules: {
    employeeModule,
  },
  // eslint-disable-next-line no-undef
  strict: process.env.NODE_ENV !== 'production',
  state: {
    snackbar: {
      text: '',
      show: false,
      timeout: 3000,
      color: ''
    },
    isLoading: false
  },
  actions: {
  },
  mutations: {
    SET_SNACKBAR: (state, { showSnackbar, snackbarText, snackbarColor }) => {
      state.snackbar.text = snackbarText
      state.snackbar.show = showSnackbar
      state.snackbar.color = snackbarColor
    },
    SET_IS_LOADING: (state, isLoading) => {
      state.isLoading = isLoading
    }
  },
  getters: {
    casURL: () => {
      // eslint-disable-next-line no-undef
      return (process.env.VUE_APP_BASE_URL+ '/logout')
    }
  }
})
