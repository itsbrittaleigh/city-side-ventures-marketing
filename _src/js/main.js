import Vue from 'vue';
import store from './store';

require('../css/app.scss');

Vue.config.productionTip = false;

Vue.component('app-menu', require('./components/Menu.vue').default);
Vue.component('hero-section', require('./components/Hero.vue').default);
Vue.component('portfolio-grid', require('./components/PortfolioGrid.vue').default);
Vue.component('team-grid', require('./components/TeamGrid.vue').default);
Vue.component('contact-form', require('./components/ContactForm.vue').default);
Vue.component('newsletter-form', require('./components/NewsletterForm.vue').default);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  data() {
    return {};
  },
});
