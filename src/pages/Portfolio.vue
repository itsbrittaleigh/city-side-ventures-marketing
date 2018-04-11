<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="Our Investment Portfolio"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ullamco laboris nisi ut aliquip ex ea commodo consequat."
      >
      </hero-section>
    </template>
  </base-page>
</template>

<script>
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Portfolio',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>
