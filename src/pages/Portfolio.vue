<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="Our Investment Portfolio"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ullamco laboris nisi ut aliquip ex ea commodo consequat."
        name="portfolio"
      >
      </hero-section>
      <section class="portfolio">
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
                }"
                :key="index"
              >
                <img
                  class="logo"
                  :src="project[0].logo"
                  :alt="project[0].company + ' logo'"
                >
              </div>
              <div
                :class="{
                  'box content': true,
                  'box-blue': project[0].color === 'blue',
                  'box-yellow': project[0].color === 'yellow',
                  'box-gray': project[0].color === 'gray',
                }"
                :key="index"
              >
                <div class="container">
                  <p class="title">{{ project[0].name }}</p>
                  <p>{{ project[0].description }}</p>
                  <a
                    :href="project[0].link"
                    class="button"
                  >
                    View website
                  </a>
                </div>
              </div>
            </div>
            <div class="back">
              <div
                :class="{
                  'box logo': true,
                  'bkg-offset-desktop': isEvenRowedOnDesktop(index + 1),
                }"
                :key="index"
              >
                <img
                  class="logo"
                  :src="project[1].logo"
                  :alt="project[1].company + ' logo'"
                >
              </div>
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
                    class="button"
                  >
                    View website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import { mapGetters } from 'vuex';
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.portfolio {
  .box-blue {
    background: $danube;
    p {
      color: $white;
    }
  }
  .box-yellow {
    background: $goldendream;
    p {
      color: $cod;
    }
  }
  .box-gray {
    background: $gray;
    p {
      color: $white;
    }
  }
  .box.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    .logo {
      max-height: 50px;
      max-width: 55%;
      object-fit: contain;
      filter: grayscale(100%);
      transition: 0.3s;
    }
  }
  .box.content {
    padding: 30px 0;
    p {
      font-size: 15px;
      margin: 0;
      &.title {
        @include title-font;
      }
    }
    .button {
      height: auto;
      padding: 5px 10px;
      margin-top: 15px;
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(1, 6, 1fr, 200px, 0);
    .project {
      perspective: 1000px;
      width: 100%;
      height: 100%;
      &:hover {
        .project-container {
          transform: rotateY(180deg);
        }
      }
    }
    .project-container {
      height: 100%;
      transition: 0.6s;
      transform-style: preserve-3d;
      position: relative;
      .front,
      .back {
        @include grid-boxes(2, 1, 1fr, auto, 0);
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
      }
      .front {
        z-index: 2;
        transform: rotateY(0deg);
      }
      .back {
        transform: rotateY(180deg);
      }
    }
    .box.content {
      padding: 20px;
      > .container {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(3, 2, 1fr, 300px, 0);
    .box.bkg-offset-desktop {
      background: $wildsand;
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(3, 2, 100vw / 3, 100vw / 6, 0);
  }
}
</style>
