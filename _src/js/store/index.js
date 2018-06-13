/* eslint-disable no-shadow */
/* eslint-disable global-require */

import Vue from 'vue';
import Vuex from 'vuex';

import NavigationMenu from './modules/NavigationMenu';

Vue.use(Vuex);

const state = {
  portfolio: [
    {
      name: 'Amtech Electronics, LLC',
      logo: require('../../../assets/images/logos/amtech.png'),
      color: 'blue',
      link: 'https://www.buildamtech.com/',
      showDescription: false,
      industry: 'Electronics Manufacturing & Assembly',
      category: 'Industrial',
      transactionDate: '1/20/2018',
      investment: 'N/A',
      equityPosition: '10%',
      investmentStage: 'Post revenue - Growth Capital',
      currentValuation: '$5M',
    },
    {
      name: 'Analyteum, LLC',
      logo: require('../../../assets/images/logos/analyteum.png'),
      color: 'blue',
      showDescription: false,
      industry: 'Data Analytics & Management',
      category: 'B2B',
      transactionDate: '1/20/2018',
      investment: '$250K - Seed capital',
      equityPosition: '70%',
      investmentStage: 'Pre-revenue - In Development',
      currentValuation: '$1.2M',
    },
    {
      name: 'Argonomo, LLC',
      logo: require('../../../assets/images/logos/argonomo.png'),
      color: 'gray',
      link: 'https://www.argonomo.com/',
      showDescription: false,
      industry: 'Venture Studio',
      category: 'B2B',
      transactionDate: '1/20/2017',
      investment: '$300K - Seed Capital',
      equityPosition: '36%',
      investmentStage: 'Post revenue',
      currentValuation: '$2M',
    },
    {
      name: 'Coaching Standard, LLC',
      logo: require('../../../assets/images/logos/coaching-standard.png'),
      color: 'gray',
      showDescription: false,
      industry: 'Business & Executive Coaching',
      category: 'B2B',
      transactionDate: '3/20/2018',
      investment: 'N/A - Seed-Capital',
      equityPosition: '36%',
      investmentStage: 'Pre-revenue',
      currentValuation: '$3.2M',
    },
    {
      name: 'SafeWhistle, LLC',
      logo: require('../../../assets/images/logos/safewhistle.png'),
      color: 'yellow',
      link: 'https://safewhistle.com/',
      showDescription: false,
      industry: 'Human Resources',
      category: 'B2B',
      transactionDate: '1/20/2018',
      investment: '$120K - Seed Capital',
      equityPosition: '60%',
      investmentStage: 'Post revenue',
      currentValuation: '$5M',
    },
    {
      name: 'Sidepitch, LLC',
      logo: require('../../../assets/images/logos/sidepitch.png'),
      color: 'yellow',
      link: 'https://sidepitch.com/',
      showDescription: false,
      industry: 'Venture Capital Management',
      category: 'Fin-Tech',
      transactionDate: '1/20/2017',
      investment: 'N/A - Blended Capital and Resources',
      equityPosition: '10%',
      investmentStage: 'Post-revenue',
      currentValuation: '$3.6M',
    },
    {
      name: 'Wearli, LLC',
      logo: require('../../../assets/images/logos/wearli.png'),
      color: 'yellow',
      showDescription: false,
      industry: 'Wearable Technology',
      category: 'B2B',
      transactionDate: '1/20/2018',
      investment: '$300K - Blended Capital and Resources',
      equityPosition: '80%',
      investmentStage: 'Pre-revenue',
      currentValuation: '$3.6M',
    },
    {
      name: 'Ensureum, LLC',
      logo: require('../../../assets/images/logos/ensureum.png'),
      color: 'blue',
      link: 'https://ensureum.com/',
      showDescription: false,
      industry: 'Blockchain & Data Management',
      category: 'B2B',
      transactionDate: '1/20/2018',
      investment: '$500K - Blended Capital and Resources',
      equityPosition: '100%',
      investmentStage: 'MVP Development',
      currentValuation: '$10M',
    },
    {
      name: 'MedDomo, LLC',
      color: 'blue',
      showDescription: false,
      industry: 'Health Care',
      category: 'Med Tech',
      transactionDate: '4/20/2018',
      investment: '$120 - Blended Capital and Resources',
      equityPosition: '30%',
      investmentStage: 'MVP Development',
      currentValuation: '$5M',
    },
    {
      name: 'Cozilo, LLC',
      logo: require('../../../assets/images/logos/cozilo.svg'),
      color: 'blue',
      link: 'https://cozilo.com',
      showDescription: false,
      industry: 'eCommerce',
      category: 'B2B',
      transactionDate: '2/20/2018',
      investment: 'N/A - Blended Capital and Resources',
      equityPosition: '10%',
      investmentStage: 'MVP Development',
      currentValuation: '$3M',
    },
    {
      name: 'WeConduct',
      logo: require('../../../assets/images/logos/we-conduct.png'),
      color: 'yellow',
      showDescription: false,
      industry: 'Market Data Analysis',
      category: 'B2B',
      transactionDate: '1/20/2018',
      investment: 'N/A - Blended Capital and Resources',
      equityPosition: '64%',
      investmentStage: 'MVP Development',
      currentValuation: '$1M',
    },
    {
      name: 'Argonize',
      logo: require('../../../assets/images/logos/argonize.png'),
      color: 'blue',
      link: 'https://argonize.com/',
      showDescription: false,
      industry: 'Project & Resource Management',
      category: 'B2B',
      transactionDate: '1/20/2018',
      investment: 'N/A - Blended Capital and Resources',
      equityPosition: '20%',
      investmentStage: 'MVP Development',
      currentValuation: '$1M',
    },
  ],
  team: [
    {
      name: 'Doron York',
      firstName: 'Doron',
      lastName: 'York',
      title: 'Chairman / CEO',
      photo: require('../../../assets/images/team/doron.jpg'),
    },
    {
      name: 'Kevin Yang',
      firstName: 'Kevin',
      lastName: 'Yang',
      title: 'President',
      photo: require('../../../assets/images/team/kevin.jpg'),
    },
    {
      name: 'Brandon Shamoun',
      firstName: 'Brandon',
      lastName: 'Shamoun',
      title: 'General Counsel',
      photo: require('../../../assets/images/team/brandon.jpg'),
    },
    {
      name: 'Anthony Steffens',
      firstName: 'Anthony',
      lastName: 'Steffens',
      title: 'Chief Information Officer',
      photo: require('../../../assets/images/team/anthony.jpg'),
    },
    {
      name: 'Bryan Culver',
      firstName: 'Bryan',
      lastName: 'Culver',
      title: 'Chief Technology Officer',
      photo: require('../../../assets/images/team/bryan.jpg'),
    },
    {
      name: 'Jay Patel',
      firstName: 'Jay',
      lastName: 'Patel',
      title: 'SVP / IoT',
      photo: require('../../../assets/images/team/jay.jpg'),
    },
    {
      name: 'Zoe (Ziva) Chen, PhD',
      firstName: 'Zoe',
      lastName: 'Chen',
      title: 'SVP / Intellectual Property',
      photo: require('../../../assets/images/team/zoe.jpg'),
    },
    {
      name: 'David Weaver',
      firstName: 'David',
      lastName: 'Weaver',
      title: 'Chief Investment Officer',
      photo: require('../../../assets/images/team/david.jpg'),
    },
    {
      name: 'Tom Coke',
      firstName: 'Tom',
      lastName: 'Coke',
      title: 'Chief Compliance Officer',
      photo: require('../../../assets/images/team/default.jpg'),
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
