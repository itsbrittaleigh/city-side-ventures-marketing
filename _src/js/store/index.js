/* eslint-disable no-shadow */
/* eslint-disable global-require */

import Vue from 'vue';
import Vuex from 'vuex';

import NavigationMenu from './modules/NavigationMenu';

Vue.use(Vuex);

const state = {
  portfolio: [
    {
      name: 'Amtech',
      logo: require('../../../assets/images/logos/amtech.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
      link: 'https://www.buildamtech.com/',
    },
    {
      name: 'Analyteum',
      logo: require('../../../assets/images/logos/analyteum.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
    },
    {
      name: 'Argonomo',
      logo: require('../../../assets/images/logos/argonomo.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'gray',
      link: 'https://www.argonomo.com/',
    },
    {
      name: 'Coaching Standard',
      logo: require('../../../assets/images/logos/coaching-standard.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'gray',
    },
    {
      name: 'Ensureum',
      logo: require('../../../assets/images/logos/ensureum.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
      link: 'https://ensureum.com/',
    },
    {
      name: 'Mtech[IQ]',
      logo: require('../../../assets/images/logos/mtech-iq.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
    },
    {
      name: 'SafeWhistle',
      logo: require('../../../assets/images/logos/safewhistle.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'yellow',
      link: 'https://safewhistle.com/',
    },
    {
      name: 'Sidepitch',
      logo: require('../../../assets/images/logos/sidepitch.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'yellow',
      link: 'https://sidepitch.com/',
    },
    {
      name: 'Sidepitch Media',
      logo: require('../../../assets/images/logos/sidepitch-media.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
    },
    {
      name: 'TM',
      logo: require('../../../assets/images/logos/tm.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
    },
    {
      name: 'Wearli',
      logo: require('../../../assets/images/logos/wearli.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'yellow',
    },
    {
      name: 'WeConduct',
      logo: require('../../../assets/images/logos/we-conduct.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'yellow',
    },
  ],
  team: [
    {
      name: 'Doron York',
      title: 'Chairman / CEO',
      photo: require('../../../assets/images/team/doron.jpg'),
    },
    {
      name: 'Kevin Yang',
      title: 'President',
      photo: require('../../../assets/images/team/kevin.jpg'),
    },
    {
      name: 'Brandon Shamoun',
      title: 'General Counsel',
      photo: require('../../../assets/images/team/brandon.jpg'),
    },
    {
      name: 'Anthony Steffens',
      title: 'Chief Information Officer',
      photo: require('../../../assets/images/team/anthony.jpg'),
    },
    {
      name: 'Bryan Culver',
      title: 'Chief Technology Officer',
      photo: require('../../../assets/images/team/bryan.jpg'),
    },
    {
      name: 'Jay Patel',
      title: 'SVP / IoT',
      photo: require('../../../assets/images/team/jay.jpg'),
    },
    {
      name: 'Zoe (Ziva) Chen, PhD',
      title: 'SVP / Intellectual Property',
      photo: require('../../../assets/images/team/zoe.jpg'),
    },
  ],
  socialSharing: {
    facebook: {
      base: 'https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description',
      type: 'popup'
    },
    linkedin: {
      base: 'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
      type: 'popup'
    },
    twitter: {
      base: 'https://twitter.com/intent/tweet?text=@title&url=@url@twitteruser',
      type: 'popup'
    },
    whatsapp: {
      base: 'whatsapp://send?text=@description%0D%0A@url',
      type: 'direct',
      action: 'share/whatsapp/share'
    },
    email: {
      base: 'mailto:?subject=@title&body=@url%20@description',
      type: ''
    },
  },
};
const getters = {
  portfolio: state => state.portfolio,
  team: state => state.team,
  socialSharing: state => state.socialSharing,
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
