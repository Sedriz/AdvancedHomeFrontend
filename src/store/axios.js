import Axios from 'axios'

const axios = Axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  maxRedirects: 0,
})

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if(!error.response){
      // eslint-disable-next-line no-undef
      location.href= process.env.NODE_ENV === 'production'
      // eslint-disable-next-line no-undef
      ? process.env.VUE_APP_BASE_URL
      // eslint-disable-next-line no-undef
      : process.env.VUE_APP_BASE_URL + '/user/login?target=' + window.location.pathname
    } else {
      throw error
    }
  }
)

export default {
  axios
}
