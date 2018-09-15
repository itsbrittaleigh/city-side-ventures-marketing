<template>
  <div class="page news">
    <section class="hero post-hero bkg-black">
      <div class="container">
        <span v-if="tags.length">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="title bkg-management hidden"
            v-in-viewport.once
          >
            {{ tag }}
          </span>
        </span>
        <h1 class="color-yellow hidden" v-in-viewport.once>{{ title }}</h1>
      </div>
      <img :src="image" alt="">
    </section>
    <div class="news-grid post-page">
      <blog-sidebar :posts="posts"></blog-sidebar>
      <div id="post-content">
        <div class="post padded-section container">
          <p class="hidden" v-in-viewport.once>By {{ author }}</p>
          <vue-markdown class="hidden" v-in-viewport.once>{{ content }}</vue-markdown>
          <div class="social-sharing hidden" v-in-viewport.once>
            <p class="title">Share this post</p>
            <social-sharing network="twitter"></social-sharing>
            <social-sharing network="facebook"></social-sharing>
            <social-sharing network="email"></social-sharing>
          </div>
        </div>
      </div>
      <div class="additional-articles">
        <template v-if="additionalArticles.length > 0">
          <p class="title">More {{ tags[0] }} news</p>
          <div
            v-for="(post, index) in additionalArticles"
            :key="index"
            class="additional-post"
          >
            <nuxt-link :to="post._path">
              <div class="img-container">
                <img :src="post.image" alt="">
              </div>
              <h2>{{ post.title }}</h2>
              <vue-markdown>{{ post.content.slice(0, 200) }}</vue-markdown>
            </nuxt-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import BlogSidebar from '~/components/BlogSidebar.vue';
import SocialSharing from '~/components/SocialSharing.vue';
import VueMarkdown from 'vue-markdown';

export default {
  async asyncData({ params }) {
    const POST = await import(`~/content/posts/${params.slug}.json`);
    const POSTS = await require.context('~/content/posts/', false, /\.json$/);
    const SEARCH_POSTS = await POSTS.keys().map((key) => ({
      ...POSTS(key),
      _path: `/news/${key.replace('.json', '').replace('./', '')}`
    }));
    const pageData = {
      ...POST,
      posts: SEARCH_POSTS.reverse()
    };
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'blog-sidebar': BlogSidebar,
    'social-sharing': SocialSharing,
    'vue-markdown': VueMarkdown,
  },
  computed: {
    additionalArticles() {
      let additionalArticles = [];
      _.forEach(this.posts, (post) => {
        _.forEach(post.tags, (tag) => {
          if (_.includes(this.tags, tag)) additionalArticles.push(post);
        });
      });
      return additionalArticles.slice(0, 2);
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.content.slice(0, 100) },
      ],
    }
  },
};
</script>
