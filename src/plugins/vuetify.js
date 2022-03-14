import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import en from 'vuetify/es5/locale/en'

Vue.use(Vuetify);

const opts = {

    icons: {
      iconfont: 'mdi',
    },
    lang: {
      locales: { en },
      current: 'en',
    },
    theme: {
      dark: true,
      //light: true,
      themes: {
        dark: {
          primary: '#3D3E41',
          secondary: '#0064C0',
          active: '#AA8A00',
          error: '#CC0000',
          textPrimary: '#FFF',
          background: '#060301'
        },
        light: {
          primary: '#818181',
          secondary: '#7D7E81',
          active: '#FFAA00',
          error: '#CC0000',
          textPrimary: '#000',
          background: '#DDDDDD'
        }
      }
    }
  }

export default new Vuetify(opts);
