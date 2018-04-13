/* eslint-disable no-shadow */

import Vue from 'vue';
import Vuex from 'vuex';

import NavigationMenu from './modules/NavigationMenu';

Vue.use(Vuex);

const state = {
  principles: [
    {
      title: 'Integrity',
      description: 'Doing business in an open, honest and transparent way that is completely visible to our stakeholders and venture partners.',
    },
    {
      title: 'Courage and Drive',
      description: 'Boldly forge and moves ahead with full force and high velocity. Take bold calculated risks that will yield a high level of return on equity.',
    },
    {
      title: 'Making an Impact',
      description: 'Positively influence communities across the globe. Investing in businesses that create an economic impact, creating jobs and expanding ecosystems across the country.',
    },
    {
      title: 'Fiscal Responsibility',
      description: 'To be aggressive while watching the bottom-line. Be calculated, responsible in our decision-making process, providing the most progressive risk management.',
    },
    {
      title: 'Doing the Impossible',
      description: 'Moving beyond "impossible" with power and ease. Taking on an industry game-changing companies. Operating inside “Can Do” mindset, if it is impossible we can do it.',
    },
    {
      title: 'We Think Big!',
      description: 'We have the vision and the foresight to take on big dreams. We are patient and resilient. WE know it takes a village to launch a business.',
    },
  ],
  process: [
    {
      title: 'The Driver [The Entrepreneur]',
      tagline: 'We invest in drivers, not cars.',
      description: 'We will pick the driver regardless of what kind of car they drive. As long is it is a legal, moral and ethical business, - we are all in!',
    },
    {
      title: 'The Car [The Business]',
      tagline: 'Our philosophy is simple.',
      description: 'If you put a great driver in an average car, you will get above average performance. A great driver will perform with any car, at any time, in any race.',
    },
    {
      title: 'The Race [The Market]',
      tagline: 'Finishing the Race.',
      description: 'We can fix or suit up the car. We are not "Industry" focused we are "Driver" focused. Find the driver, fix him a car, and get him in the race.',
    },
  ],
};
const getters = {
  principles: state => state.principles,
  process: state => state.process,
};
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
