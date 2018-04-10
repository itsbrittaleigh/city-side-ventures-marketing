<template>
  <base-page>
    <template slot="content">
      <div class="hero">
        <div class="box">
          <div class="container">
            <h1>A different kind of <strong>private equity</strong></h1>
          </div>
        </div>
        <div class="box">
          <div class="container">
            <p>
              <strong>It takes a village to launch a startup.</strong>
              We are not looking to invest in cars. We are looking to invest in drivers &mdash;
              confident, aggressive, open-minded drivers
              <strong>with endless energy and passion.</strong>
              <br>
              <router-link :to="{ name: 'About' }">Learn about City Side Ventures</router-link>
            </p>
          </div>
        </div>
      </div>
    </template>
  </base-page>
</template>

<script>
import Base from './Base';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.hero {
  @include grid-boxes(1, 2, 1fr, calc((100vh - 70px) / 2), 0);
  .box {
    color: white;
    > .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 {
      font-size: 52px;
    }
    a {
      padding: 20px;
      background: white;
      color: black;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
      text-decoration: none;
      font-weight: bold;
      margin-top: 20px;
      display: inline-block;
    }
    &:nth-child(1) {
      background: steelblue;
    }
    &:nth-child(2) {
      background: palevioletred;
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, 1, 1fr, calc((100vh - 70px) / 2), 0);

    .box {
      > .container {
        width: auto;
        padding: 0 calc((100vw - 738px) / 2);
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, calc(100vh - (70px + 25vh)), 0);
    .box {
      h1 {
        font-size: 64px;
      }
      > .container {
        padding: 0 calc((100vw - 962px) / 2);
      }
    }
  }
  @media only screen and (min-width: $xlarge) {
    .box {
      > .container {
        padding: 0 calc((100vw - 1170px) / 2);
      }
    }
  }
}
</style>

