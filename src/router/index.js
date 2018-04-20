import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Focus from '../pages/Focus';
import Funds from '../pages/Funds';
import Legal from '../pages/Legal';
import News from '../pages/News';
import Portfolio from '../pages/Portfolio';
import Post from '../pages/Post';
import Process from '../pages/Process';
import Team from '../pages/Team';

import BlueVenture from '../pages/funds/BlueVenture';
import Greenseed from '../pages/funds/Greenseed';
import Venture248 from '../pages/funds/Venture248';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/focus',
      name: 'Focus',
      component: Focus,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/funds',
      name: 'Funds',
      component: Funds,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/funds/greenseed',
      name: 'Greenseed',
      component: Greenseed,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/funds/venture-248',
      name: 'Venture248',
      component: Venture248,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/funds/blue-venture',
      name: 'BlueVenture',
      component: BlueVenture,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/legal',
      name: 'Legal',
      component: Legal,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/process',
      name: 'Process',
      component: Process,
      meta: {
        title: '',
        description: '',
      },
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
      meta: {
        title: '',
        description: '',
      },
    },
  ],
});
