/* eslint-disable no-shadow */

const state = {
  menuIsMobile: window.innerWidth < 992,
  menuIsOpen: false,
};

const getters = {
  menuIsMobile: state => state.menuIsMobile,
  menuIsOpen: state => state.menuIsOpen,
};

const actions = {
  toggleMenu(context) {
    context.commit('toggleMenu');
  },
  resizeScreen(context) {
    context.commit('resizeScreen');
  },
  closeMenu(context) {
    context.commit('closeMenu');
  },
};

const mutations = {
  toggleMenu(state) {
    state.menuIsOpen = !state.menuIsOpen;
  },
  resizeScreen(state) {
    state.menuIsMobile = window.innerWidth < 992;
  },
  closeMenu(state) {
    state.menuIsOpen = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
