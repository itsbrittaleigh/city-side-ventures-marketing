<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="About Us"
        description="Our venture group is more than just traditional investors, we are an early
          stage hybrid boutique private equity and venture capital firm"
      >
      </hero-section>
    </template>
  </base-page>
</template>

<script>
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'About',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>
