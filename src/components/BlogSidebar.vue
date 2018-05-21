<!-- eslint-disable max-len -->
<template>
  <aside class="box navigation">
    <h3>News Menu</h3>
    <ul>
      <li
        v-for="(category, index) in categories"
        :key="index"
        @click="redirectTo(`/news?tag=${category.slug}`)"
      >
        <img src="../assets/images/icons/bullet-small.svg" alt="">
        {{ category.name }}
      </li>
    </ul>
    <h3>Recent Posts</h3>
    <ul class="recent">
      <li
        v-for="(article, index) in recentArticles"
        :key="index"
        @click="redirectTo(`/news/${getYear(article.date)}/${getMonth(article.date)}/${getDate(article.date)}/${slugify(article.title)}`)"
      >
        <img src="../assets/images/icons/bullet-small.svg" alt="">
        {{ article.title }}
      </li>
    </ul>
    <h3>Archives</h3>
    <ul>
      <li
        v-for="(value, key) in archives"
        :key="key"
        @click="redirectTo(`/news?month=${key}`)"
      >
        <img src="../assets/images/icons/bullet-small.svg" alt="">
        {{ key }} ({{ value.length }})
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default {
  name: 'BlogSidebar',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'articles',
      'categories',
      'recentArticles',
      'archives',
    ]),
  },
  methods: {
    ...mapActions([
      'filterByCategory',
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.navigation {
  padding: 20px;
  background: $wildsand;
  h3 {
    @include title-font;
    color: $danube;
    margin-bottom: 5px;
  }
  ul {
    padding-left: 5px;
    margin: 5px 0 50px;
    list-style-type: none;
    li {
      margin-bottom: 10px;
      display: flex;
      cursor: pointer;
      transition: 0.4s;
      img {
        width: 3px;
        height: 3px;
        display: block;
        margin-top: 12px;
        margin-right: 10px;
      }
      &:hover {
        color: $nightshadz;
      }
    }
    a {
      text-decoration: none;
      transition: 0.4s;
      &:hover {
        color: $nightshadz;
      }
    }
  }
  @media only screen and (min-width: $large) {
    padding: 20px 40px;
  }
}
</style>

