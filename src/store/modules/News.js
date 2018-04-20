/* eslint-disable no-shadow */
/* eslint-disable global-require */
const CATEGORIES = [
  'Business',
  'Management',
  'Press Room & News',
];
const INITIAL_ARTICLES = [
  {
    id: 7,
    title: 'Cash is not the Everything - Cash is the Only Thing',
    date: '2017-08-18 00:00:00 EST',
    author: 'Doron York',
    category: CATEGORIES[2],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
    content: require('../../assets/posts/2017/09/12/cash-is-not-the-everything-cash-is-the-only-thing.md'),
  },
  {
    id: 6,
    title: 'Press Release - Portfolio Update',
    date: '2017-08-18 00:00:00 EST',
    author: 'Doron York',
    category: CATEGORIES[2],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
    content: require('../../assets/posts/2017/08/18/press-release-portfolio-update.md'),
  },
  {
    id: 5,
    title: 'I Do Not Need a Weather Report!',
    date: '2017-08-16 00:00:01 EST',
    author: 'Doron York',
    category: CATEGORIES[1],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
    content: require('../../assets/posts/2017/08/16/i-do-not-need-a-weather-report.md'),
  },
  {
    id: 4,
    title: 'Did You Do a "Domino" Yet?',
    date: '2017-08-16 00:00:00 EST',
    author: 'Doron York',
    category: CATEGORIES[0],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
    content: require('../../assets/posts/2017/08/16/did-you-do-a-domino-yet.md'),
  },
  {
    id: 3,
    title: 'You Cannot Save Your Business Into Success!',
    date: '2017-08-14 00:00:00 EST',
    author: 'Doron York',
    category: CATEGORIES[0],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
    content: require('../../assets/posts/2017/08/14/you-cannot-save-your-business-into-success.md'),
  },
  {
    id: 2,
    title: 'Press Release! - Portfolio Update',
    date: '2017-07-10 00:00:00 EST',
    author: 'Doron York',
    category: CATEGORIES[2],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
    content: require('../../assets/posts/2017/07/10/press-release-portfolio-update.md'),
  },
  {
    id: 1,
    title: 'Press Release! - Portfolio Update',
    date: '2017-03-08 00:00:00 EST',
    author: 'Doron York',
    category: CATEGORIES[2],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
    content: require('../../assets/posts/2017/03/08/press-release-portfolio-update.md'),
  },
  {
    id: 0,
    title: 'Press Release! - Portfolio Update',
    date: '2016-11-18 00:00:00 EST',
    author: 'Doron York',
    category: CATEGORIES[2],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
    content: require('../../assets/posts/2016/11/18/press-release-portfolio-update.md'),
  },
];

const state = {
  categories: CATEGORIES,
  articles: INITIAL_ARTICLES,
  initialArticles: INITIAL_ARTICLES,
};

const getters = {
  articles: state => state.articles,
  categories: state => state.categories,
};

const actions = {
  filterByCategory(context, category) {
    context.commit('filterByCategory', category);
  },
};

const mutations = {
  filterByCategory(context, category) {
    state.articles = state.initialArticles;
    state.articles = state.articles.filter((article, index) => category === index);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
