<!-- eslint-disable max-len -->
<template>
  <aside class="box navigation">
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
            <img src="../assets/images/icons/bullet-small.svg" alt="">
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
            <img src="../assets/images/icons/bullet-small.svg" alt="">
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
            <img src="../assets/images/icons/bullet-small.svg" alt="">
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
            <img src="../assets/images/icons/bullet-small.svg" alt="">
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
  props: ['isStuck'],
  data() {
    return {
      footerToTop: 0,
    };
  },
  computed: {
    ...mapGetters([
      'initialArticles',
      'articles',
      'categories',
      'archives',
    ]),
    businessArticles() {
      const articles = [];
      _.forEach(this.initialArticles, (article) => {
        if (article.category.slug === 'business') {
          articles.push(article);
        }
      });
      return articles.splice(0, 3);
    },
    managementArticles() {
      const articles = [];
      _.forEach(this.initialArticles, (article) => {
        if (article.category.slug === 'management') {
          articles.push(article);
        }
      });
      return articles.splice(0, 3);
    },
    pressArticles() {
      const articles = [];
      _.forEach(this.initialArticles, (article) => {
        if (article.category.slug === 'press') {
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

<style lang="scss" scoped>
@import "../assets/styles/variables";
.navigation {
  display: none;
  .navigation-container {
    padding: 20px;
    max-height: 100vh;
    overflow: hidden;
  }
  .inner-container {
    height: 100%;
    width: calc(100% + 50px);
    overflow-y: scroll;
    padding-right: 50px;
  }
  h3 {
    @include title-font;
    margin-bottom: 5px;
    &.color-red {
      color: $nightshadz;
    }
    &.color-yellow {
      color: $goldendream;
    }
    &.color-blue {
      color: $danube;
    }
    &.color-gray {
      color: #808080;
    }
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
      color: #808080;
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
  .stick {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
  }
  @media only screen and (min-width: $medium) {
    display: block;
    .stick {
      width: calc(100vw / 3);
      padding-right: 20px;
    }
  }
  @media only screen and (min-width: $large) {
    .navigation-container {
      padding: 20px 40px;
    }
    .stick {
      width: 25vw;
    }
  }
}
</style>

