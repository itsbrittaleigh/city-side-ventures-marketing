<template>
  <base-project>
    <template slot="content">
      <hero-section
        :heading="post.title"
        :description="'by ' + post.author"
      >
      </hero-section>
      <div class="container post padded-section" v-html="post.content"></div>
    </template>
  </base-project>
</template>

<script>
import { mapGetters } from 'vuex';
import Base from './Base';
import Hero from '../components/Hero';

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
.container {
  max-width: 962px;
}
</style>

