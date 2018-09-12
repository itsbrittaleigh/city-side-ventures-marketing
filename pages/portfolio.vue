<template>
  <div class="page portfolio">
    <hero-section
      heading="Our Investment Portfolio"
      description="Our diverse portfolio represents a family of progressive tech-based companies in fast-growing market verticals with high potential return on equity for its shareholders."
      name="portfolio"
    >
    </hero-section>

    <portfolio-grid></portfolio-grid>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';
import PortfolioGrid from '~/components/PortfolioGrid.vue';

export default {
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
