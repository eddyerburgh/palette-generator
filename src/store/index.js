import Vue from 'vue';
import Vuex from 'vuex';
import palette from './modules/palette';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    palette,
  },
  strict: debug,
});
