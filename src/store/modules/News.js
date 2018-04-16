/* eslint-disable no-shadow */
const CATEGORIES = [
  'Business',
  'Management',
  'Press Room & News',
];
const INITIAL_ARTICLES = [
  {
    title: 'I am a really freaking long article title holy hell so long',
    date: 'July 24, 1991',
    category: CATEGORIES[0],
    image: {
      image: 'https://fillmurray.com/700/700',
      alt: '',
    },
  },
  {
    title: 'I am an article title',
    date: 'July 24, 1991',
    category: CATEGORIES[1],
    image: {
      image: 'https://fillmurray.com/700/300',
      alt: '',
    },
  },
  {
    title: 'I am an article title',
    date: 'July 24, 1991',
    category: CATEGORIES[2],
    image: {
      image: 'https://fillmurray.com/400/400',
      alt: '',
    },
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
