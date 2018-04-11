<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="The Team"
        description="We are active investors full of energy. A savvy tribe of
          entrpreneurs ready to go to work with you in the trenches, in the mud,
          and on the grind. Our managing partners are multi-generational and
          highly diverse with over 100+ years of combined business success."
      >
      </hero-section>
    </template>
  </base-page>
</template>

<script>
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Team',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>
