<template>
  <div class="page team">
    <hero-section :header="header"></hero-section>
    <team-grid :team="team"></team-grid>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';
import TeamGrid from '~/components/TeamGrid.vue';

export default {
  async asyncData({ params }) {
    const TEAM_PAGE_DATA = await import('~/content/pages/team.json');
    const BIOS = await require.context('~/content/bios/', false, /\.json$/);
    const SEARCH_BIOS = await BIOS.keys().map((key) => ({
      ...BIOS(key),
      _path: `/team/${key.replace('.json', '').replace('./', '')}`
    }));
    const PAGE_DATA = {
      team: SEARCH_BIOS,
      ...TEAM_PAGE_DATA,
    }
    return PAGE_DATA;
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
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
      ],
    }
  },
};
</script>
