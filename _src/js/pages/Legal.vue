<template>
  <base-page>
    <template slot="content">
      
    </template>
  </base-page>
</template>

<script>
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Legal',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.container {
  max-width: ($large - 30);
}
.title {
  @include title-font;
}
</style>

