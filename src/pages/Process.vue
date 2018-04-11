<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="Our Process"
        description="City Side provides solutions to find and manage investments for investors
          and corporate ventures using today's technology. With the development of
          our online Venture Management System (VMS), we have automated the process
          of investments from start to finish."
        lead="Business + Technologhy + Capital = Success"
      >
      </hero-section>
    </template>
  </base-page>
</template>

<script>
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Process',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>
