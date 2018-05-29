/* eslint-disable no-shadow */
/* eslint-disable global-require */

import Vue from 'vue';
import Vuex from 'vuex';

import NavigationMenu from './modules/NavigationMenu';
import News from './modules/News';

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
  funds: {
    greatLakes: {
      name: 'Great Lakes Angels Fund',
      market: 'Angel Fund, Pre-Seed Capital',
      hero: {
        // image: require('../assets/images/covers/greatlakes.jpg'),
        alt: '',
        color: 'yellow',
      },
      icon: {
        // image: require('../assets/images/icons/fund-greenseed-black.svg'),
        alt: '',
      },
      intro: 'Great Lakes Angels Fund is an early stage equity-based venture capital fund that was created to seed and grow early stage tech-based companies. It is our highly attractive hybrid investment model. The fund will match the founder(s) capital investment of up to $150K in mix resources per deal for qualified startups. City Side will provide a Full-Stack development team, Seasoned Go-To-Market management team, Board of Directors, Coaching and Mentoring, and Startup Capital to the companies.',
      investmentCapital: '$10M',
      maxInvestmentSize: '$150K',
      minimumQualifications: [
        'The company must be a tech-based company',
        'The company must have a viable business use case',
        'Provide a solid and fully developed business & execution plan',
        'Must be a for-profit entity',
        'Must have a fully developed POC and be Development-Ready.',
      ],
      fundingRequirements: [
        'The company must be registered within the US',
        'Have a management team.',
        'Have an advisory board.',
        'Pass our due-diligence process',
      ],
      contentImage: {
        // image: require('../assets/images/funds/greatlakes.jpg'),
        alt: '',
      },
    },
    venture248: {
      name: 'Venture 248 Fund',
      market: 'Venture Capital Fund, Seed Capital',
      hero: {
        // image: require('../assets/images/covers/venture248.jpg'),
        alt: '',
        color: 'red',
      },
      icon: {
        // image: require('../assets/images/icons/fund-venture248-black.svg'),
        alt: '',
      },
      intro: 'Venture (248) is an equity-based Venture Capital Fund that was created to fund and grow second stage, Michigan-based technology companies. Its sole purpose is to help grow the Michigan tech startup ecosystem. Venture (248) is an equity-based Venture Capital Fund that was created to fund and grow Second Stage Michigan Tech companies. Its sole purpose is to grow the Michigan Tech Startup Ecosystem. The fund provides equity-based capital investment of up to $500K per deal for qualified startups.',
      investmentCapital: '$20M',
      maxInvestmentSize: '$500K',
      minimumQualifications: [
        'The company must be a tech-based company',
        'The company must have a viable business use case',
        'Provide a solid and fully developed business & execution plan',
        'Must be a for-profit entity',
        'Must have a fully developed POC and be Development-Ready.',
      ],
      fundingRequirements: [
        'The company must be registered in the US and also be located in Michigan (or plan to relocate to Michigan?)',
        'Have a management team.',
        'Have an advisory board.',
        'Pass our due-diligence process.',
      ],
      contentImage: {
        // image: require('../assets/images/funds/venture248.jpg'),
        alt: '',
      },
    },
    blueVenture: {
      name: 'Blue Venture',
      market: 'Venture Capital Fund, Series A - C',
      hero: {
        // image: require('../assets/images/covers/blueventure.jpg'),
        alt: '',
        color: 'blue',
      },
      icon: {
        // image: require('../assets/images/icons/fund-blueventure-black.svg'),
        alt: '',
      },
      intro: 'Blue Venture is a Michigan-based Venture Capital Fund that was established to invest in fast growing, scalable, and post-revenue tech companies located in the US and North America. Blue Venture Fund is an equity-based Venture Capital Fund. It was created to provide capital investments for fast-growing scalable post revenue Tech companies in North America. The sole purpose of the Blue Venture Fund is to grow the North American startup ecosystem. The fund will make capital investments up to $5M per deal for qualified companies.',
      investmentCapital: '$100M',
      maxInvestmentSize: '$5M',
      minimumQualifications: [
        'The company must be registered in the United States.',
        'The company must be in located and operate within the United States.',
        'Company ownership of 51% by a founder of United States residency.',
        'Must be a for-profit entity.',
        'Must have a fully functioning product or service.',
        'The company is post-revenue.',
      ],
      fundingRequirements: [
        'The company must have at a minimum of $1.5M in annual revenue',
        'The company is at a profitable state',
        'Have a management team.',
        'Have a complete Advisory board.',
        'Pass our Due-Diligence Process.',
      ],
      contentImage: {
        // image: require('../assets/images/funds/blueventure.jpg'),
        alt: '',
      },
    },
    cityX: {
      name: 'City[X]',
      market: 'Private Equity Fund, Growth Capital',
      hero: {
        // image: require('../assets/images/covers/cityx.jpg'),
        alt: '',
        color: 'black',
      },
      icon: {
        // image: require('../assets/images/icons/fund-cityx-black.svg'),
        alt: '',
      },
      intro: 'City[X] is a Michigan-based Private Equity Fund that was established to invest in fast growing, scalable, and post-revenue tech companies located in the US and North America. City[X] Fund is an equity-based Private Equity Fund. It was created to provide capital investments for fast-growing scalable post revenue Tech companies in North America. The sole purpose of City[X] Fund is to grow the North American Startup ecosystem. The fund will make capital investments up to $10M per deal for qualified companies.',
      investmentCapital: '$120M',
      maxInvestmentSize: '$10M',
      minimumQualifications: [
        'The company must be registered in the United States.',
        'The company must be in located and operated within the United States.',
        'Company ownership of 51% by a founder of United States residency.',
        'Must be a for-profit entity.',
        'Must have a fully functioning product/service that is ready to scale.',
        'The company is post-revenue.',
      ],
      fundingRequirements: [
        'The company must have at least $4.5M in annual revenue',
        'The company is profitable',
        'Have a management team.',
        'Have a complete Advisory board.',
        'Pass our Due-Diligence Process.',
      ],
      contentImage: {
        // image: require('../assets/images/funds/cityx.jpg'),
        alt: '',
      },
    },
  },
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
