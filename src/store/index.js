/* eslint-disable no-shadow */
/* eslint-disable global-require */

import Vue from 'vue';
import Vuex from 'vuex';

import NavigationMenu from './modules/NavigationMenu';
import News from './modules/News';

Vue.use(Vuex);

const state = {
  principles: [
    {
      title: 'Integrity',
      description: 'Doing business in an open, honest, and transparent way that is completely visible to our stakeholders and venture partners.',
      class: 'box-yellow',
    },
    {
      title: 'Courage and Drive',
      description: 'Boldly forging companies and moving ahead with full force and high velocity. We take bold and calculated risks that will yield a high level of return on equity.',
      class: 'box-light-gray',
    },
    {
      title: 'Making an Impact',
      description: 'Positively influencing communities across the globe. Investing in businesses that create an economic impact, creating jobs, and expanding ecosystems across the country is our mission.',
      class: 'box-blue',
    },
    {
      title: 'Fiscal Responsibility',
      description: 'To be aggressive while watching the bottom-line. By being calculative, we are responsible with our decision-making process and provide the most progressive risk management output.',
      class: 'box-light-gray',
    },
    {
      title: 'Doing the Impossible',
      description: 'Moving beyond "impossible" with power and ease. Taking on an industry with game-changing companies. We operate inside a “can do” mindset. if it is impossible, we “can do” it.',
      class: 'box-blue',
    },
    {
      title: 'We Think Big!',
      description: 'We have the vision and the foresight to take on big dreams. Patient and resilient, we know that it takes a village to launch a successful business.',
      class: 'box-yellow',
    },
  ],
  process: [
    {
      title: 'The Driver [The Entrepreneur]',
      tagline: 'We invest in drivers, not cars.',
      description: 'We will pick the driver regardless of what kind of car they drive. As long is it is a legal, moral and ethical business, - we are all in!',
      bullet: require('../assets/images/icons/bullet-step-1.svg'),
    },
    {
      title: 'The Car [The Business]',
      tagline: 'Our philosophy is simple.',
      description: 'If you put a great driver in an average car, you will get above average performance. A great driver will perform with any car, at any time, in any race.',
      bullet: require('../assets/images/icons/bullet-step-2.svg'),
    },
    {
      title: 'The Race [The Market]',
      tagline: 'Finishing the Race.',
      description: 'We can fix or suit up the car. We are not "Industry" focused we are "Driver" focused. Find the driver, fix him a car, and get him in the race.',
      bullet: require('../assets/images/icons/bullet-step-3.svg'),
    },
  ],
  portfolio: [
    {
      name: 'Amtech',
      logo: require('../assets/images/logos/amtech.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
      link: '',
    },
    {
      name: 'Analyteum',
      logo: require('../assets/images/logos/analyteum.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'gray',
      link: '',
    },
    {
      name: 'Argonomo',
      logo: require('../assets/images/logos/argonomo.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
      link: '',
    },
    {
      name: 'Coaching Standard',
      logo: require('../assets/images/logos/coaching-standard.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'yellow',
      link: '',
    },
    {
      name: 'Ensureum',
      logo: require('../assets/images/logos/ensureum.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
      link: '',
    },
    {
      name: 'Mtech[IQ]',
      logo: require('../assets/images/logos/mtech-iq.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'yellow',
      link: '',
    },
    {
      name: 'SafeWhistle',
      logo: require('../assets/images/logos/safewhistle.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'gray',
      link: '',
    },
    {
      name: 'Sidepitch',
      logo: require('../assets/images/logos/sidepitch.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'yellow',
      link: '',
    },
    {
      name: 'Sidepitch Media',
      logo: require('../assets/images/logos/sidepitch-media.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'gray',
      link: '',
    },
    {
      name: 'TM',
      logo: require('../assets/images/logos/tm.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
      link: '',
    },
    {
      name: 'Wearli',
      logo: require('../assets/images/logos/wearli.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'gray',
      link: '',
    },
    {
      name: 'WeConduct',
      logo: require('../assets/images/logos/we-conduct.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum rolo sit.',
      color: 'blue',
      link: '',
    },
  ],
  funds: {
    greatLakes: {
      name: 'Great Lakes Angels Fund',
      market: 'Angel Fund, Pre-Seed Capital',
      hero: {
        image: require('../assets/images/covers/greatlakes.jpg'),
        alt: '',
        color: 'yellow',
      },
      icon: {
        image: require('../assets/images/icons/fund-greenseed-black.svg'),
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
        image: require('../assets/images/funds/greatlakes.jpg'),
        alt: '',
      },
    },
    venture248: {
      name: 'Venture 248 Fund',
      market: 'Venture Capital Fund, Seed Capital',
      hero: {
        image: require('../assets/images/covers/venture248.jpg'),
        alt: '',
        color: 'red',
      },
      icon: {
        image: require('../assets/images/icons/fund-venture248-white.svg'),
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
        image: require('../assets/images/funds/venture248.jpg'),
        alt: '',
      },
    },
    blueVenture: {
      name: 'Blue Venture',
      market: 'Venture Capital Fund, Series A - C',
      hero: {
        image: require('../assets/images/covers/blueventure.jpg'),
        alt: '',
        color: 'blue',
      },
      icon: {
        image: require('../assets/images/icons/fund-blueventure-white.svg'),
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
        image: require('../assets/images/funds/blueventure.jpg'),
        alt: '',
      },
    },
    cityX: {
      name: 'City[X]',
      market: 'Private Equity Fund, Growth Capital',
      hero: {
        image: require('../assets/images/covers/cityx.jpg'),
        alt: '',
        color: 'black',
      },
      icon: {
        image: require('../assets/images/icons/fund-cityx-white.svg'),
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
        image: require('../assets/images/funds/cityx.jpg'),
        alt: '',
      },
    },
  },
  team: [
    {
      name: 'Doron York',
      title: 'Chairman / CEO',
      photo: require('../assets/images/team/doron.jpg'),
    },
    {
      name: 'Kevin Yang',
      title: 'President',
      photo: require('../assets/images/team/kevin.jpg'),
    },
    {
      name: 'Brandon Shamoun',
      title: 'General Counsel',
      photo: require('../assets/images/team/brandon.jpg'),
    },
    {
      name: 'Anthony Steffens',
      title: 'Chief Information Officer',
      photo: require('../assets/images/team/anthony.jpg'),
    },
    {
      name: 'Bryan Culver',
      title: 'Chief Technology Officer',
      photo: require('../assets/images/team/bryan.jpg'),
    },
    // {
    //   name: 'Kendra Corman',
    //   title: 'Chief Marketing Officer',
    //   photo: require('../assets/images/team/default.jpg'),
    // },
    {
      name: 'Jay Patel',
      title: 'SVP / IoT',
      photo: require('../assets/images/team/default.jpg'),
    },
    {
      name: 'Zoe (Ziva) Chen, PhD',
      title: 'SVP / Intellectual Property',
      photo: require('../assets/images/team/zoe.jpg'),
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
