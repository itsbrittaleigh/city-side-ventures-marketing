import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import About from '../pages/About';
import Process from '../pages/Process';
import Focus from '../pages/Focus';
import Portfolio from '../pages/Portfolio';

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
      path: '/process',
      name: 'Process',
      component: Process,
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
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      meta: {
        title: '',
        description: '',
      },
    },
  ],
});
