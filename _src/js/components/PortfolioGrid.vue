<template>
  <section class="portfolio-grid">
    <div
      v-for="(project, index) in portfolio"
      :key="index"
      :class="{
        'project': true,
        'even-mobile': isEvenRowedMobile(index + 1),
        'even-tablet': isEvenRowedTablet(index + 1),
        'even-desktop': isEvenRowedDesktop(index + 1),
        'last-row-mobile': isLastRowMobile(index),
        'last-row-tablet': isLastRowTablet(index),
        'last-row-desktop': isLastRowDesktop(index),
      }"
    >
      <div class="box logo">
        <img :src="project.logo" :alt="`${project.name} logo`">
      </div>
      <div :class="{
        'box content': true,
        'bkg-blue': project.color === 'blue',
        'bkg-yellow': project.color === 'yellow',
        'bkg-gray': project.color === 'gray',
      }">
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
  },
};
</script>
