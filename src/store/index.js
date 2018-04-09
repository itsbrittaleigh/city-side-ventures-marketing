import Vue from 'vue';
import Vuex from 'vuex';

import NavigationMenu from './modules/NavigationMenu';

Vue.use(Vuex);

const state = {};
const getters = {};
const actions = {};
const mutations = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    NavigationMenu,
  },
});
