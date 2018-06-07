<template>
  <section class="portfolio-grid">
    <div
      v-for="(project, index) in portfolio"
      :key="index"
      :class="{
        'project visible': true,
        'even-mobile': isEvenRowedMobile(index + 1),
        'even-tablet': isEvenRowedTablet(index + 1),
        'even-desktop': isEvenRowedDesktop(index + 1),
        'last-row-mobile': isLastRowMobile(index),
        'last-row-tablet': isLastRowTablet(index),
        'last-row-desktop': isLastRowDesktop(index),
        'last-column-mobile': isLastColumnMobile(index + 1),
        'last-column-tablet': isLastColumnTablet(index + 1),
        'last-column-desktop': isLastColumnDesktop(index + 1),
      }"
    >
      <div class="box logo">
        <img :src="project.logo" :alt="`${project.name} logo`">
      </div>
      <div class="box content">
        <h3 class="title">{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a
          v-if="project.link"
          :href="project.link" class="button" target="_blank"
        >
          Visit Website
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PortfolioGrid',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'portfolio',
    ]),
  },
  methods: {
    isEvenRowedMobile(index) {
      return (((Math.ceil(index / 2) * 2) % 4) === 0);
    },
    isEvenRowedTablet(index) {
      return (((Math.ceil(index / 4) * 4) % 8) === 0);
    },
    isEvenRowedDesktop(index) {
      return (((Math.ceil(index / 6) * 6) % 12) === 0);
    },
    isLastRowMobile(index) {
      return this.portfolio.length - index <= 2;
    },
    isLastRowTablet(index) {
      return this.portfolio.length - index <= 4;
    },
    isLastRowDesktop(index) {
      return this.portfolio.length - index <= 6;
    },
    isLastColumnMobile(index) {
      return index % 2 === 0;
    },
    isLastColumnTablet(index) {
      return index % 4 === 0;
    },
    isLastColumnDesktop(index) {
      return ((index % 6) === 0);
    },
  },
};
</script>
