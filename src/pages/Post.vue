<template>
  <base-project>
    <template slot="content">
      <hero-section
        :heading="post.title"
        :description="'by ' + post.author"
      >
      </hero-section>
      <div class="container post padded-section">
        {{ post.content }}
      </div>
    </template>
  </base-project>
</template>

<script>
import { mapGetters } from 'vuex';
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Post',
  props: ['post'],
  data() {
    return {};
  },
  components: {
    'base-project': Base,
    'hero-section': Hero,
  },
  computed: {
    ...mapGetters([
      'news',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 962px;
}
</style>

