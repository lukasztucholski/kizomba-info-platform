import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    dark: true,

    themes: {
      light: {
        primary: '#00baff',
        secondary: colors.indigo.base,
        accent: colors.deepOrange.base,
        error: colors.red.base,
        warning: colors.brown.base,
        info: colors.orange.base,
        success: colors.green.base,
      },
      dark: {
        primary: '#1EB980',
        secondary: '#045D56',
        accent: '#FF6859',
        error: colors.red.accent3,
        info: '#FFCF44',
        success: '#72DEFF',
        warning: '#B15DFF',
      },
    },
  },
});
