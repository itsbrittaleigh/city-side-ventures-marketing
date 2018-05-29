/* eslint-disable no-shadow */
/* eslint-disable global-require */
import _ from 'lodash';

const CATEGORIES = [
  {
    name: 'Business',
    slug: 'business',
  },
  {
    name: 'Management',
    slug: 'management',
  },
  {
    name: 'Press Room & News',
    slug: 'press',
  },
];
const INITIAL_ARTICLES = [
  {
    id: 7,
    title: 'Cash is not the Everything - Cash is the Only Thing',
    date: '2017-09-12 00:00:00 Z',
    author: 'Doron York',
    category: CATEGORIES[0],
    slug: '2017/09/12/cash-is-not-the-everything-cash-is-the-only-thing',
    image: {
      // image: require('../../assets/images/covers/news/cash.jpg'),
      alt: '',
      name: 'cashPost',
    },
    // content: require('../../assets/posts/2017/09/12/cash-is-not-the-everything-cash-is-the-only-thing.md'),
  },
  {
    id: 6,
    title: 'Press Release - Portfolio Update',
    date: '2017-08-18 00:00:00 Z',
    author: 'Doron York',
    category: CATEGORIES[2],
    slug: '2017/08/18/press-release-portfolio-update',
    image: {
      // image: require('../../assets/images/covers/news/press.jpg'),
      alt: '',
      name: 'pressPost',
    },
    // content: require('../../assets/posts/2017/08/18/press-release-portfolio-update.md'),
  },
  {
    id: 5,
    title: 'I Do Not Need a Weather Report!',
    date: '2017-08-16 00:00:01 Z',
    author: 'Doron York',
    slug: '2017/08/16/i-do-not-need-a-weather-report',
    category: CATEGORIES[1],
    image: {
      // image: require('../../assets/images/covers/news/weather.png'),
      alt: '',
      name: 'weatherPost',
    },
    // content: require('../../assets/posts/2017/08/16/i-do-not-need-a-weather-report.md'),
  },
  {
    id: 4,
    title: 'Did You Do a "Domino" Yet?',
    date: '2017-08-16 00:00:00 Z',
    author: 'Doron York',
    category: CATEGORIES[0],
    slug: '2017/08/16/did-you-do-a-domino-yet',
    image: {
      // image: require('../../assets/images/covers/news/domino.jpeg'),
      alt: '',
      name: 'dominoPost',
    },
    // content: require('../../assets/posts/2017/08/16/did-you-do-a-domino-yet.md'),
  },
  {
    id: 3,
    title: 'You Cannot Save Your Business Into Success!',
    date: '2017-08-14 00:00:00 Z',
    author: 'Doron York',
    category: CATEGORIES[0],
    slug: '2017/08/14/you-cannot-save-your-business-into-success',
    image: {
      // image: require('../../assets/images/covers/news/save.jpeg'),
      alt: '',
      name: 'savePost',
    },
    // content: require('../../assets/posts/2017/08/14/you-cannot-save-your-business-into-success.md'),
  },
  {
    id: 2,
    title: 'Press Release! - Portfolio Update',
    date: '2017-07-10 00:00:00 Z',
    author: 'Doron York',
    category: CATEGORIES[2],
    slug: '2017/07/10/press-release-portfolio-update',
    image: {
      // image: require('../../assets/images/covers/news/press.jpg'),
      alt: '',
      name: 'pressPost',
    },
    // content: require('../../assets/posts/2017/07/10/press-release-portfolio-update.md'),
  },
  {
    id: 1,
    title: 'Press Release! - Portfolio Update',
    date: '2017-03-08 00:00:00 Z',
    author: 'Doron York',
    category: CATEGORIES[2],
    slug: '2017/03/08/press-release-portfolio-update',
    image: {
      // image: require('../../assets/images/covers/news/news.jpg'),
      alt: '',
      name: 'newsPost',
    },
    // content: require('../../assets/posts/2017/03/08/press-release-portfolio-update.md'),
  },
  {
    id: 0,
    title: 'Press Release! - Portfolio Update',
    date: '2016-11-18 00:00:00 Z',
    author: 'Doron York',
    category: CATEGORIES[2],
    slug: '2016/11/18/press-release-portfolio-update',
    image: {
      // image: require('../../assets/images/covers/news/news.jpg'),
      alt: '',
      name: 'newsPost',
    },
    // content: require('../../assets/posts/2016/11/18/press-release-portfolio-update.md'),
  },
];

function mapMonth(mm) {
  switch (mm) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
    default:
      return 'January';
  }
}

function mapBack(month) {
  switch (month) {
    case 'January':
      return '01';
    case 'February':
      return '02';
    case 'March':
      return '03';
    case 'April':
      return '04';
    case 'May':
      return '05';
    case 'June':
      return '06';
    case 'July':
      return '07';
    case 'August':
      return '08';
    case 'September':
      return '09';
    case 'October':
      return '10';
    case 'November':
      return '11';
    case 'December':
      return '12';
    default:
      return 'January';
  }
}

const state = {
  categories: CATEGORIES,
  articles: INITIAL_ARTICLES,
  initialArticles: INITIAL_ARTICLES,
  archives: {},
};

const getters = {
  initialArticles: state => state.initialArticles,
  articles: state => state.articles,
  categories: state => state.categories,
  recentArticles: (state) => {
    const articles = state.initialArticles;
    _.sortBy(articles, o => o.id);
    return articles.slice(0, 5);
  },
  archives: (state) => {
    const archives = {};
    _.forEach(state.initialArticles, (article) => {
      const month = mapMonth(article.date.substr(5, 2));
      const year = article.date.substr(0, 4);
      if (archives[`${month}-${year}`]) {
        archives[`${month}-${year}`].push(article);
      } else {
        archives[`${month}-${year}`] = [];
        archives[`${month}-${year}`].push(article);
      }
    });
    return archives;
  },
};

const actions = {
  filterByCategory(context, category) {
    context.commit('filterByCategory', category);
  },
  filterByMonth(context, month) {
    context.commit('filterByMonth', month);
  },
};

const mutations = {
  filterByCategory(context, category) {
    state.articles = state.initialArticles;
    state.articles = state.articles.filter(article => category === article.category.slug);
  },
  filterByMonth(context, time) {
    const month = time.substr(0, time.length - 5);
    const year = time.substr(time.length - 4, time.length);
    const yearMonth = `${year}-${mapBack(month)}`;
    state.articles = state.initialArticles;
    state.articles = state.articles.filter(article => article.date.includes(yearMonth));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
