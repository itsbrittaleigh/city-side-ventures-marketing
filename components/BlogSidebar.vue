<template>
  <aside class="blog-sidebar box navigation">
    <div class="navigation-container" id="container-to-stick">
      <div class="inner-container">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          class="category"
        >
          <h3>
            {{ index }}
            <span><em>({{ tag.length }})</em></span>
          </h3>
          <ul>
            <li
              v-for="(post, postIndex) in tag.slice(0, 3)"
              :key="postIndex"
            >
              <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
            </li>
            <li class="all color-blue">
              <a :href="`/news?tag=${slugify(index)}`">See all {{ index }} posts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import _ from 'lodash';

export default {
  props: ['posts'],
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    splitPostsByTag() {
      let explodedPosts = [];
      _.forEach(this.posts, (post) => {
        _.forEach(post.tags, (tag) => {
          explodedPosts.push({
            ...post,
            category: tag,
          });
        });
      });
      return _.groupBy(explodedPosts, 'category');
    },
    slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    },
  },
  mounted() {
    this.tags = this.splitPostsByTag();
  },
};
</script>