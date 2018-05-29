<template>
  <section class="portfolio-grid">
    <div
      v-for="(project, index) in splitPortfolio"
      :key="index"
      class="project"
    >
      <div class="project-container">
        <div class="front">
          <div
            :class="{
              'box logo': true,
              'bkg-offset-desktop': isEvenRowedOnDesktop(index + 1),
              'bkg-offset-small-desktop': isEvenRowedOnSmallDesktop(index + 1),
            }"
            :key="index"
          >
            <img
              class="logo"
              :src="project[0].logo"
              :alt="project[0].name + ' logo'"
            >
          </div>
          <div
            :class="{
              'box content': true,
              'box-blue': project[0].color === 'blue',
              'box-yellow': project[0].color === 'yellow',
              'box-gray': project[0].color === 'gray',
            }"
            :key="`front-${index}`"
          >
            <div class="container">
              <p class="title">{{ project[0].name }}</p>
              <p>{{ project[0].description }}</p>
              <a
                v-if="project[0].link"
                :href="project[0].link"
                class="button"
                target="_blank"
              >
                View website
              </a>
            </div>
          </div>
        </div>
        <div class="back">
          <div
            :class="{
              'box content': true,
              'box-blue': project[1].color === 'blue',
              'box-yellow': project[1].color === 'yellow',
              'box-gray': project[1].color === 'gray',
            }"
            :key="index"
          >
            <div class="container">
              <p class="title">{{ project[1].name }}</p>
              <p>{{ project[1].description }}</p>
              <a
                :href="project[1].link"
                v-if="project[1].link"
                class="button"
                target="_blank"
              >
                View website
              </a>
            </div>
          </div>
          <div
            :class="{
              'box logo': true,
              'bkg-offset-desktop': isEvenRowedOnDesktop(index + 1),
              'bkg-offset-small-desktop': isEvenRowedOnSmallDesktop(index + 1),
            }"
            :key="`back-${index}`"
          >
            <img
              class="logo"
              :src="project[1].logo"
              :alt="project[1].name + ' logo'"
            >
          </div>
        </div>
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
    splitPortfolio() {
      const splitPortfolio = [];
      for (let i = 0, j = this.portfolio.length; i < j; i += 2) {
        splitPortfolio.push(this.portfolio.slice(i, i + 2));
      }
      return splitPortfolio;
    },
  },
  methods: {
    isEvenRowedOnDesktop(index) {
      return (((Math.ceil(index / 3) * 3) % 6) === 0);
    },
    isEvenRowedOnSmallDesktop(index) {
      return (((Math.ceil(index / 2) * 2) % 4) === 0);
    },
  },
};
</script>
