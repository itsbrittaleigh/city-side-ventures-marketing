<template>
  <div class="page news">
    <section class="hero post-hero bkg-black">
      <div class="container">
        <span v-if="tags.length">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="title bkg-management"
          >
            {{ tag }}
          </span>
        </span>
        <h1 class="color-yellow">{{ title }}</h1>
      </div>
      <div class="overlay"></div>
    </section>
    <div class="news-grid post-page">
      <blog-sidebar :posts="posts"></blog-sidebar>
      <div id="post-content">
        <div class="post padded-section container">
          By {{ author }}
          <!-- {{ content }} -->
          <div class="social-sharing">
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
                <!-- <img src="{{ post.image }}" alt=""> -->
              </div>
              <h2>{{ post.title }}</h2>
              <!-- <p>{{ post.content | markdownify | strip_html | slice: 0,100 }}...</p> -->
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
};
</script>
