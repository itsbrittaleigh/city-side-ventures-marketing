/* eslint-disable no-shadow */

import Vue from 'vue';
import Vuex from 'vuex';

import NavigationMenu from './modules/NavigationMenu';
import News from './modules/News';

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
  portfolio: [
    {
      name: 'Wearli',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
    {
      name: 'Coaching Standard',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
    {
      name: 'Amtech',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
    {
      name: 'TM',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
    {
      name: 'SafeWhistle',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
    {
      name: 'Mtech[IQ]',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
    {
      name: 'Analyteum',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
    {
      name: 'WeConduct',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
    {
      name: 'Argonomo',
      logo: 'https://fillmurray.com/500/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
    },
  ],
  funds: {
    greenseed: {
      name: 'Greenseed Fund',
      market: 'Venture Capital Fund, Seed Capital',
      hero: {
        image: 'https://fillmurray.com/900/300',
        alt: '',
      },
      icon: {
        image: 'https://fillmurray.com/100/100',
        alt: '',
      },
      intro: 'Greenseed is an early stage equity based venture capital fund that was created to seed and grow early stage tech based companies. It is our highly attractive hybrid investment model. The fund will match the founder(s) capital investment of up to $150K in mix resources per deal for qualified startups. City Side will provide a full-stack development team, go-to market management team, board of directors, coaching, mentoring and startup capital.',
      investmentCapital: '$10M',
      maxInvestmentSize: '$150M',
      minimumQualifications: [
        'The company must be in a B2B space',
        'The company must have a solid use case',
        'Solid an fully developed business plan',
        'Must be a for-profit entity',
        'Must have a fully developed POC and be development-ready',
      ],
      fundingRequirements: [
        'The company must be registered in US',
        'Must be registered as an LLC',
        'Have a management team',
        'Have an advisory board',
        'Pass the due-diligence process',
      ],
      contentImage: {
        image: 'https://fillmurray.com/500/500',
        alt: '',
      },
    },
    venture248: {
      name: 'Venture 248 Fund',
      market: 'Venture Capital Fund, Series A - B',
      hero: {
        image: 'https://fillmurray.com/900/300',
        alt: '',
      },
      icon: {
        image: 'https://fillmurray.com/100/100',
        alt: '',
      },
      intro: 'Greenseed is an early stage equity based venture capital fund that was created to seed and grow early stage tech based companies. It is our highly attractive hybrid investment model. The fund will match the founder(s) capital investment of up to $150K in mix resources per deal for qualified startups. City Side will provide a full-stack development team, go-to market management team, board of directors, coaching, mentoring and startup capital.',
      investmentCapital: '$10M',
      maxInvestmentSize: '$150M',
      minimumQualifications: [
        'The company must be in a B2B space',
        'The company must have a solid use case',
        'Solid an fully developed business plan',
        'Must be a for-profit entity',
        'Must have a fully developed POC and be development-ready',
      ],
      fundingRequirements: [
        'The company must be registered in US',
        'Must be registered as an LLC',
        'Have a management team',
        'Have an advisory board',
        'Pass the due-diligence process',
      ],
      contentImage: {
        image: 'https://fillmurray.com/500/500',
        alt: '',
      },
    },
    blueVenture: {
      name: 'Blue Venture',
      market: 'Private Equity Fund, Series C & Growth Capital',
      hero: {
        image: 'https://fillmurray.com/900/300',
        alt: '',
      },
      icon: {
        image: 'https://fillmurray.com/100/100',
        alt: '',
      },
      intro: 'Greenseed is an early stage equity based venture capital fund that was created to seed and grow early stage tech based companies. It is our highly attractive hybrid investment model. The fund will match the founder(s) capital investment of up to $150K in mix resources per deal for qualified startups. City Side will provide a full-stack development team, go-to market management team, board of directors, coaching, mentoring and startup capital.',
      investmentCapital: '$10M',
      maxInvestmentSize: '$150M',
      minimumQualifications: [
        'The company must be in a B2B space',
        'The company must have a solid use case',
        'Solid an fully developed business plan',
        'Must be a for-profit entity',
        'Must have a fully developed POC and be development-ready',
      ],
      fundingRequirements: [
        'The company must be registered in US',
        'Must be registered as an LLC',
        'Have a management team',
        'Have an advisory board',
        'Pass the due-diligence process',
      ],
      contentImage: {
        image: 'https://fillmurray.com/500/500',
        alt: '',
      },
    },
  },
  team: [
    {
      name: 'Doron York',
      title: 'Chairman / CEO',
      photo: 'https://fillmurray.com/400/400',
    },
    {
      name: 'Kevin Yang',
      title: 'President',
      photo: 'https://fillmurray.com/400/400',
    },
    {
      name: 'Brandon Shamoun',
      title: 'General Counsel',
      photo: 'https://fillmurray.com/400/400',
    },
    {
      name: 'Anthony Steffens',
      title: 'Chief Information Officer',
      photo: 'https://fillmurray.com/400/400',
    },
    {
      name: 'Bryan Culver',
      title: 'Chief Technology Officer',
      photo: 'https://fillmurray.com/400/400',
    },
    {
      name: 'Kendra Corman',
      title: 'Chief Marketing Officer',
      photo: 'https://fillmurray.com/400/400',
    },
    {
      name: 'Jay Patel',
      title: 'SVP / IoT',
      photo: 'https://fillmurray.com/400/400',
    },
    {
      name: 'Zoe (Ziva) Chen, PhD',
      title: 'SVP / Intellectual Property',
      photo: 'https://fillmurray.com/400/400',
    },
  ],
};
const getters = {
  principles: state => state.principles,
  process: state => state.process,
  portfolio: state => state.portfolio,
  funds: state => state.funds,
  team: state => state.team,
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
    News,
  },
});
