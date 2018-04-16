<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="News, Thoughts, and Updates"
      >
      </hero-section>
      <div class="news">
        <aside class="box navigation">
          <h3>News Menu</h3>
          <ul>
            <li
              v-for="(category, index) in categories"
              :key="index"
              @click="filterByCategory(index)"
            >
              {{ category }}
            </li>
          </ul>
          <h3>Recent Posts</h3>
          <ul>
            <li
              v-for="(article, index) in recentArticles"
              :key="index"
            >
              <router-link :to="{ name: 'News' }">{{ article.name }}</router-link>
            </li>
          </ul>
          <h3>Archives</h3>
          <ul>
            <li
              v-for="(month, index) in archivedArticleMonths"
              :key="index"
              @click="filterByArchiveDate(index)"
            >
              {{ month }} ({{ month.length }})
            </li>
          </ul>
        </aside>
        <div class="box articles">
          <div
            v-for="(article, index) in articles"
            :key="index"
            class="box"
          >
            <img :src="article.image.image" :alt="article.image.alt">
            <h2 class="title">{{ article.title }}</h2>
          </div>
        </div>
      </div>
    </template>
  </base-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'News',
  data() {
    return {
      recentArticles: [],
      archivedArticleMonths: [],
    };
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
  computed: {
    ...mapGetters([
      'articles',
      'categories',
    ]),
  },
  methods: {
    ...mapActions([
      'filterByCategory',
    ]),
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
  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-overflow: ellipsis;
    background: black;
    padding: 15px;
    margin: 0;
    @include title-font;
    color: white;
    text-align: center;
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
.navigation {
  padding: 20px;
  background: lightgray;
  h3 {
    @include title-font;
    margin-bottom: 5px;
  }
  ul {
    padding-left: 15px;
    margin: 5px 0 50px;
  }
}
</style>

