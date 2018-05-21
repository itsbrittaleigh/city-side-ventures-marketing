<template>
  <base-project>
    <template slot="content">
      <hero-section
        :heading="post.title"
        :description="'by ' + post.author"
        :name="post.image.name"
      >
      </hero-section>
      <div class="news">
        <blog-sidebar></blog-sidebar>
        <div class="post padded-section" v-html="post.content"></div>
      </div>
    </template>
  </base-project>
</template>

<script>
import { mapGetters } from 'vuex';
import Base from './Base';
import Hero from '../components/Hero';
import Sidebar from '../components/BlogSidebar';

export default {
  name: 'Post',
  data() {
    return {
      post: {},
    };
  },
  components: {
    'base-project': Base,
    'hero-section': Hero,
    'blog-sidebar': Sidebar,
  },
  computed: {
    ...mapGetters([
      'articles',
    ]),
  },
  methods: {
    getPostBySlug(slug) {
      return this.articles.find(article => article.slug === slug);
    },
    parseHTML(content) {
      const doc = new DOMParser().parseFromString(content, 'text/html');
      // eslint-disable-next-line
      console.log(doc.body);
      return doc;
    },
  },
  mounted() {
    this.post = this.getPostBySlug(
      `${this.$route.params.year}/${this.$route.params.month}/${this.$route.params.date}/${this.$route.params.title}`,
    );
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.news {
  @include grid-boxes(1, 1, 1fr, auto, 0);
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, 1, (100vw / 3) ((100vw / 3) * 2), auto, 0);
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 25vw 75vw, auto, 0);
  }
}
.post {
  margin: 0 auto;
  width: 80%;
  max-width: 992px;
}
</style>

