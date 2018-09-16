<template>
  <div class="page news">
    <hero-section :header="header"></hero-section>
    <div class="news-grid">
      <blog-sidebar :posts="posts"></blog-sidebar>
      <div class="articles" id="relative-anchor-for-stick">
        <div
          v-for="(post, index) in activePosts"
          :key="index"
          :class="`box hidden management`"
          v-in-viewport.once
        >
          <nuxt-link :to="post._path"></nuxt-link>
          <img :src="post.image" alt="">
          <div class="content">
            <p>
              <span
                v-for="(tag, index) in post.tags"
                :key="index"
                class="tag"
              >
                {{ tag }}
              </span>
            </p>
            <h2 class="title">{{ post.title }}</h2>
            <p>{{ removeMarkdown(post.content.slice(0,250)) }}...</p>
            <div class="read-more" :href="post._path">
              <span class="overlay"></span>
              <img src="~/assets/images/icons/news.svg" alt="">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogSidebar from '~/components/BlogSidebar.vue';
import HeroSection from '~/components/Hero.vue';
import RemoveMD from 'remove-markdown';

export default {
  async asyncData({ params }) {
    const NEWS_PAGE_DATA = await import('~/content/pages/news.json');
    const POSTS = await require.context('~/content/posts/', false, /\.json$/);
    const SEARCH_POSTS = await POSTS.keys().map((key) => ({
      ...POSTS(key),
      _path: `/news/${key.replace('.json', '').replace('./', '')}`
    }));
    const PAGE_DATA = {
      ...NEWS_PAGE_DATA,
      posts: SEARCH_POSTS.reverse(),
    }
    return PAGE_DATA;
  },
  data() {
    return {
      activeTag: '',
    };
  },
  components: {
    'blog-sidebar': BlogSidebar,
    'hero-section': HeroSection,
  },
  computed: {
    activePosts() {
      if (this.activeTag) {
        let activePosts = [];
        _.forEach(this.posts, (post) => {
          if (_.includes(this.slugify(post.tags), this.activeTag)) activePosts.push(post);
        })
        return activePosts;
      }
      return this.posts;
    },
  },
  methods: {
    slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    },
    removeMarkdown(text) {
      return RemoveMD(text);
    },
  },
  mounted() {
    this.activeTag = this.$route.query.tag;
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
      ],
    }
  },
};
</script>
