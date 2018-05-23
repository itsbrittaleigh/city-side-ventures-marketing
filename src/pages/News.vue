<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="News, Thoughts, and Updates"
        name="news"
        color="black"
      >
      </hero-section>
      <div class="news">
        <blog-sidebar :is-stuck="isStuck"></blog-sidebar>
        <div class="box articles" id="articles">
          <div
            v-for="(article, index) in articles"
            :key="index"
            :class="`box ${article.category.slug}`"
          >
            <img :src="article.image.image" :alt="article.image.alt">
            <div class="content">
              <p class="tag">{{ article.category.name }}</p>
              <h2 class="title">{{ article.title }}</h2>
              <p>{{ stripHTML(article.content).substr(0, index === 0 ? 250 : 100) }}...</p>
              <router-link
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
                <span class="overlay"></span>
                <img src="../assets/images/icons/news.svg" alt="">
                Read More
              </router-link>
            </div>
          </div>
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
    return {
      isMobile: window.innerWidth < 768,
      isPastArticles: false,
    };
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
    isStuck() {
      return !this.isMobile && this.isPastArticles;
    },
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
    stripHTML(html) {
      const temporalDivElement = document.createElement('div');
      temporalDivElement.innerHTML = html;
      return temporalDivElement.textContent || temporalDivElement.innerText || '';
    },
    updateArticlesToTop() {
      if (document.getElementById('articles')) {
        const articlesToTop = document.getElementById('articles').getBoundingClientRect().top;
        this.isPastArticles = articlesToTop <= 0;
      } else this.isPastArticles = false;
    },
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('tag')) this.filterByCategory(urlParams.get('tag'));
    if (urlParams.has('month')) this.filterByMonth(urlParams.get('month'));

    this.updateArticlesToTop();

    window.addEventListener('scroll', () => {
      this.updateArticlesToTop();
    });

    window.addEventListener('resize', () => {
      this.isMobile = (window.innerWidth < 768);
    });
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
  img {
    display: block;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  .box {
    display: flex;
    flex-direction: column;
    &.business {
      .tag {
        color: $danube;
      }
      a {
        background: $danube;
      }
    }
    &.management {
      .tag {
        color: $goldendream;
      }
      a {
        background: $goldendream;
      }
    }
    &.press {
      .tag {
        color: $nightshadz;
      }
      a {
        background: $nightshadz;
      }
    }
    .content {
      background: #f5f5f5;
      padding: 30px 30px 100px;
      position: relative;
      flex: 1;
      .tag {
        @include title-font;
      }
      a {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 70px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: $white;
        text-decoration: none;
        img {
          height: 25px;
          width: auto;
          margin: 0 15px 0 20px;
        }
        @include title-font;
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 10px;
          background: rgba($white, 0.2);
          transition: 0.4s;
        }
        &:hover {
          .overlay {
            width: 100%;
          }
        }
      }
      h2,
      p {
        color: #747474;
      }
    }
    &:nth-child(even) {
      .content {
        background: #ebebeb;
      }
    }
    &:first-of-type {
      .content {
        padding: 30px 40px 140px;
      }
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, auto, 1fr, auto, 0);
    .box {
      &:first-of-type {
        grid-column: 1 / 3;
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(3, auto, 1fr, auto, 0);
  }
}
</style>

