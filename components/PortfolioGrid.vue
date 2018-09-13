<template>
  <section class="portfolio-grid">
    <div
      v-for="(project, index) in localPortfolio"
      :key="index"
      :class="{
        'project': true,
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
      v-in-viewport.once
    >
      <div class="box logo">
        <img :src="project.logo" :alt="`${project.name}`">
      </div>
      <div class="box content">
        <h3 class="title">{{ project.name }}</h3>
        <ul>
          <li>
            <strong>Industry: </strong>
            {{ project.industry }}
          </li>
          <li>
            <strong>Investment Category: </strong>
            {{ project.category }}
          </li>
          <li>
            <strong>Transaction Date: </strong>
            {{ project.date }}
          </li>
          <li>
            <strong>Investment: </strong>
            {{ project.investment }}
          </li>
          <li>
            <strong>Equity Position: </strong>
            {{ project.equity }}
          </li>
          <li>
            <strong>Investment Stage: </strong>
            {{ project.stage }}
          </li>
          <li>
            <strong>Current Valuation: </strong>
            {{ project.valuation }}
          </li>
        </ul>
        <a
          v-if="project.website"
          :href="project.website" class="button" target="_blank"
        >
          Visit Website
        </a>
        <span v-else class="button muted">Website coming soon...</span>
        <i class="close" @click="hideDescription(index)">X</i>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash';

export default {
  props: ['portfolio'],
  data() {
    return {
      localPortfolio: this.portfolio,
    };
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
      return this.localPortfolio.length - index <= 2;
    },
    isLastRowTablet(index) {
      return this.localPortfolio.length - index <= 4;
    },
    isLastRowDesktop(index) {
      return this.localPortfolio.length - index <= 6;
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
    showDescription(index) {
      this.localPortfolio[index].showDescription = true;
    },
    hideDescription(index) {
      this.localPortfolio[index].showDescription = false;
    },
  },
  mounted() {
    _.forEach(this.localPortfolio, (project) => {
      project.showDescription = false;
    });
  },
};
</script>
