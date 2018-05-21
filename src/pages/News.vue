<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="News, Thoughts, and Updates"
        name="news"
      >
      </hero-section>
      <div class="news">
        <blog-sidebar></blog-sidebar>
        <div class="box articles">
          <router-link
            v-for="(article, index) in articles"
            :key="index"
            class="box"
            :to="{
              name: 'Post',
              params: {
                year: getYear(article.date),
                month: getMonth(article.date),
                date: getDate(article.date),
                title: slugify(article.title),
              },
            }"
          >
            <img :src="article.image.image" :alt="article.image.alt">
            <div class="title-container">
              <h2 class="title">{{ article.title }}</h2>
            </div>
          </router-link>
        </div>
      </div>
    </template>
  </base-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import Base from './Base';
import Hero from '../components/Hero';
import Sidebar from '../components/BlogSidebar';

export default {
  name: 'News',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
    'blog-sidebar': Sidebar,
  },
  computed: {
    ...mapGetters([
      'articles',
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
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('tag')) this.filterByCategory(urlParams.get('tag'));
    if (urlParams.has('month')) this.filterByMonth(urlParams.get('month'));
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.news {
  @include grid-boxes(1, 1, 1fr, auto, 0);
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, 1, (100vw / 3) ((100vw / 3) * 2), auto, 0);
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 25vw 75vw, auto, 0);
  }
}
.articles {
  @include grid-boxes(1, 1, 1fr, auto, 0);
  .title-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    @include background-opacity($cod, 0.8);
    h2 {
      @include title-font;
      color: $white;
      text-align: center;
    }
  }
  img {
    display: block;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, auto, 1fr, auto, 0);
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(3, auto, 1fr, auto, 0);
  }
}
</style>

