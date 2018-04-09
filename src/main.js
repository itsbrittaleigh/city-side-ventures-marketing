// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'Welcome | CitySide Ventures';
  document.querySelector('meta[name="description"').content = to.meta.description ? to.meta.description : '';
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
