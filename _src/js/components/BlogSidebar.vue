<!-- eslint-disable max-len -->
<template>
  <aside class="blog-sidebar box navigation">
    <div
      :class="{ 'navigation-container': true, 'stick': isStuck }"
      :style="`height: ${footerToTop}px`"
    >
      <div class="inner-container">
        <h3 class="color-blue">Business</h3>
        <ul>
          <li
            v-for="(article, index) in businessArticles"
            :key="index"
            @click="redirectTo(`/news/${getYear(article.date)}/${getMonth(article.date)}/${getDate(article.date)}/${slugify(article.title)}`)"
          >
            <img src="/assets/images/icons/bullet-small.svg" alt="">
            {{ article.title }}
          </li>
        </ul>
        <h3 class="color-yellow">Management</h3>
        <ul>
          <li
            v-for="(article, index) in managementArticles"
            :key="index"
            @click="redirectTo(`/news/${getYear(article.date)}/${getMonth(article.date)}/${getDate(article.date)}/${slugify(article.title)}`)"
          >
            <img src="/assets/images/icons/bullet-small.svg" alt="">
            {{ article.title }}
          </li>
        </ul>
        <h3 class="color-red">Press Room &amp; News</h3>
        <ul>
          <li
            v-for="(article, index) in pressArticles"
            :key="index"
            @click="redirectTo(`/news/${getYear(article.date)}/${getMonth(article.date)}/${getDate(article.date)}/${slugify(article.title)}`)"
          >
            <img src="/assets/images/icons/bullet-small.svg" alt="">
            {{ article.title }}
          </li>
        </ul>
        <h3 class="color-gray">Archives</h3>
        <ul>
          <li
            v-for="(value, key) in archives"
            :key="key"
            @click="redirectTo(`/news?month=${key}`)"
          >
            <img src="/assets/images/icons/bullet-small.svg" alt="">
            {{ key }} ({{ value.length }})
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import _ from 'lodash';

export default {
  name: 'BlogSidebar',
  props: ['articles', 'anchor'],
  data() {
    return {
      footerToTop: 0,
    };
  },
  computed: {
    ...mapGetters([
      'initialArticles',
      'categories',
      'archives',
    ]),
    businessArticles() {
      const articles = [];
      _.forEach(this.articles, (article) => {
        if (article.tag === 'business') {
          articles.push(article);
        }
      });
      return articles.splice(0, 3);
    },
    managementArticles() {
      const articles = [];
      _.forEach(this.articles, (article) => {
        if (article.tag === 'management') {
          articles.push(article);
        }
      });
      return articles.splice(0, 3);
    },
    pressArticles() {
      const articles = [];
      _.forEach(this.articles, (article) => {
        if (article.tag === 'press') {
          articles.push(article);
        }
      });
      return articles.splice(0, 3);
    },
  },
  methods: {
    ...mapActions([
      'filterByMonth',
    ]),
    getYear(datetime) {
      return moment(datetime, 'YYYY-MM-DD').year();
    },
    getMonth(datetime) {
      const month = moment(datetime, 'YYYY-MM-DD').month() + 1;
      if (month < 10) {
        return `0${month}`;
      }
      return month;
    },
    getDate(datetime) {
      const date = moment(datetime, 'YYYY-MM-DD').date();
      if (date < 10) {
        return `0${date}`;
      }
      return date;
    },
    slugify(text) {
      /* eslint-disable no-useless-escape */
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    redirectTo(location) {
      window.location = location;
    },
    updateFooterToTop() {
      this.footerToTop = document.getElementById('footer').getBoundingClientRect().top;
    },
  },
  mounted() {
    this.updateFooterToTop();
    window.addEventListener('resize', () => {
      this.updateFooterToTop();
    });
    window.addEventListener('scroll', () => {
      this.updateFooterToTop();
    });
  },
};
</script>
