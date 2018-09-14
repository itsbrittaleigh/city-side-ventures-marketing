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
      title: 'Portfolio | CitySide Ventures',
      meta: [
        { hid: 'description', name: 'description', content: 'Our diverse portfolio represents a family of progressive tech-based companies in fast-growing market verticals with high potential return on equity for its shareholders.' },
      ],
    }
  },
};
</script>
