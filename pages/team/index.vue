<template>
  <div class="page team">
    <hero-section
      heading="The Team"
      description="We are active investors full of energy. A savvy tribe of
        entrpreneurs ready to go to work with you in the trenches, in the mud,
        and on the grind. Our managing partners are multi-generational and
        highly diverse with over 100+ years of combined business success."
      name="team"
    >
    </hero-section>

    <team-grid :team="team"></team-grid>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';
import TeamGrid from '~/components/TeamGrid.vue';

export default {
  async asyncData({ params }) {
    const BIOS = await require.context('~/content/bios/', false, /\.json$/);
    const SEARCH_BIOS = await BIOS.keys().map((key) => ({
      ...BIOS(key),
      _path: `/team/${key.replace('.json', '').replace('./', '')}`
    }));
    const pageData = {
      team: SEARCH_BIOS,
    }
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'hero-section': HeroSection,
    'team-grid': TeamGrid,
  },
  head() {
    return {
      title: 'Our Team | CitySide Ventures',
      meta: [
        { hid: 'description', name: 'description', content: 'We are active investors full of energy. A savvy tribe of entrpreneurs ready to go to work with you in the trenches, in the mud, and on the grind. Our managing partners are multi-generational and highly diverse with over 100+ years of combined business success.' },
      ],
    }
  },
};
</script>
