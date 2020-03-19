import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

import store from '../../store';
console.log(store);

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      light: {
        primary: colors.green.darken4,
        secondary: colors.blue.lighten2,
        accent: colors.yellow.darken5,
        error: colors.red.darken2,
      },
    },
  },
});
