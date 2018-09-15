<template>
  <div class="page legal">
    <hero-section :header="header"></hero-section>
    <div class="container padded-section">
      <div class="padded-section">
        <h2>Company Offering Legal Disclaimer</h2>
        <vue-markdown>{{ disclaimer }}</vue-markdown>
      </div>
      <div class="padded-section">
        <h2>Privacy Policy</h2>
        <vue-markdown>{{ policy }}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import HeroSection from '~/components/Hero.vue';

export default {
  async asyncData({ params }) {
    const pageData = import('~/content/pages/legal.json');
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
      title: 'Legal | CitySide Ventures',
      meta: [
        { hid: 'description', name: 'description', content: '' },
      ],
    }
  },
};
</script>