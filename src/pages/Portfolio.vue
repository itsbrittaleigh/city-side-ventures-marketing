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
        <template v-for="(project, index) in portfolio">
          <div
            :class="{
              'box logo': true,
              'bkg-offset-desktop': isEvenRowedOnDesktop(index + 1),
            }"
            :key="index"
          >
            <img
              class="logo"
              :src="project.logo"
              :alt="project.company + ' logo'"
            >
          </div>
          <div
            :class="{
              'box content': true,
              'box-blue': project.color === 'blue',
              'box-yellow': project.color === 'yellow',
              'box-gray': project.color === 'gray',
            }"
            :key="index"
          >
            <div class="container">
              <p class="title">{{ project.name }}</p>
              <p>{{ project.description }}</p>
              <a
                :href="project.link"
                class="button"
              >
                Visit {{ project.name }} &rarr;
              </a>
            </div>
          </div>
        </template>
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
    &:hover {
      .logo {
        filter: grayscale(0%);
        transform: scale(1.2);
      }
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
      height: 32px;
      padding: 0 10px;
      margin-top: 15px;
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, 12, 1fr, 200px, 0);
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
    @include grid-boxes(6, 4, 1fr, 300px, 0);
    .box.bkg-offset-desktop {
      background: $wildsand;
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(6, 4, 100vw / 6, 100vw / 6, 0);
  }
}
</style>
