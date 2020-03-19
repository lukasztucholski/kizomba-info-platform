import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const baseStore = {
  namespaced: true,

  state: {},

  mutations: {},

  actions: {},

  getters: {},
};

export default new Vuex.Store({
  modules: { baseStore },
  // plugins: [createPersistedState()]
});
