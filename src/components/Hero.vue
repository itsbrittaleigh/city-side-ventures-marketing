<template>
  <section class="hero">
    <div class="container">
      <h1>{{ heading }}</h1>
      <p
        v-if="lead"
        class="large"
      >
        <em>{{ lead }}</em>
      </p>
      <p v-if="description">{{ description }}</p>
    </div>
    <div class="overlay"></div>
    <img :src="image" :alt="alt">
  </section>
</template>

<script>
const defaultPhoto = require('../assets/images/covers/detroit.jpg');

export default {
  name: 'Hero',
  props: {
    heading: {
      default: '',
    },
    lead: {
      default: '',
    },
    description: {
      default: '',
    },
    image: {
      default: defaultPhoto,
    },
    alt: {
      default: 'Skyline of downtown Detroit on a sunny, clear day',
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/hero";
</style>

