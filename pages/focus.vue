<template>
  <div class="page focus">
    <hero-section :header="header"></hero-section>
    <section class="focus-grid">
      <div
        v-for="(focus, index) in foci"
        :key="index"
        class="inner-box"
      >
        <div class="box label hidden" v-in-viewport.once>
          <img :src="focus.icon" alt="">
          <p>{{ focus.title }}</p>
        </div>
        <div class="box content">
          <h2 class="hidden" v-in-viewport.once>{{ focus.title }}</h2>
          <vue-markdown class="hidden" v-in-viewport.once>{{ focus.description }}</vue-markdown>
        </div>
        <div class="box image hidden" v-in-viewport.once>
          <img :src="focus.image" alt="">
          <img class="icon" :src="focus.icon" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';
import VueMarkdown from 'vue-markdown';

export default {
  async asyncData({ params }) {
    const pageData = await import('~/content/pages/focus.json');
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'hero-section': HeroSection,
    'vue-markdown': VueMarkdown,
  },
  head() {
    return {
      title: 'Our Focus | CitySide Ventures',
      meta: [
        { hid: 'description', name: 'description', content: 'Our investments are focused on fast-growing industries and market verticals that represent high potential return on equity.' },
      ],
    }
  }
}
</script>