<template>
  <div class="page portfolio">
    <hero-section :header="header"></hero-section>
    <portfolio-grid :portfolio="investments"></portfolio-grid>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';
import PortfolioGrid from '~/components/PortfolioGrid.vue';

export default {
  async asyncData({ params }) {
    const pageData = await import('~/content/pages/portfolio.json');
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'hero-section': HeroSection,
    'portfolio-grid': PortfolioGrid,
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
