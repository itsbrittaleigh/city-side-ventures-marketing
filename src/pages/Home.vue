<template>
  <base-page>
    <template slot="content">
      <div class="hero">
        <div class="box">
          <div class="container">
            <h1>A different kind of <strong>private equity</strong></h1>
          </div>
          <img src="https://fillmurray.com/600/800" alt="">
          <div class="overlay"></div>
        </div>
        <div class="box">
          <div class="container">
            <p>
              <strong>It takes a village to launch a startup.</strong>
              We are not looking to invest in cars. We are looking to invest in drivers &mdash;
              confident, aggressive, open-minded drivers
              <strong>with endless energy and passion.</strong>
              <br>
              <router-link
                :to="{ name: 'About' }"
                class="button inverse"
              >
                Learn about City Side Ventures
              </router-link>
            </p>
          </div>
          <img src="https://fillmurray.com/900/700" alt="">
          <div class="overlay"></div>
        </div>
      </div>
      <div class="statistics">
        <div class="outer-box">
          <div class="box">
            <p class="large">$100M</p>
            <p class="small">in access capital</p>
          </div>
          <div class="box image">
            <img src="https://fillmurray.com/200/300" alt="">
          </div>
          <div class="box image">
            <img src="https://fillmurray.com/200/300" alt="">
          </div>
          <div class="box">
            <p class="large">24</p>
            <p class="small">venture partners</p>
          </div>
        </div>
        <div class="outer-box">
          <div class="box">
            <p class="large">16</p>
            <p class="small">active investments</p>
          </div>
          <div class="box image">
            <img src="https://fillmurray.com/200/300" alt="">
          </div>
          <div class="box image">
            <img src="https://fillmurray.com/200/300" alt="">
          </div>
          <div class="box">
            <p class="large">18x</p>
            <p class="small">return on equity</p>
          </div>
        </div>
      </div>
      <div class="focus padded-section">
        <div class="container">
          <div class="box">
            <h2>Our Focus</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam deleniti est
              ut ipsa itaque corrupti, quasi eveniet atque sed possimus inventore. Eius, in
              corporis temporibus unde ab vel atque.
              <br>
              <router-link
                :to="{ name: 'Focus' }"
                class="button inverse"
              >
                Learn more
              </router-link>
            </p>
          </div>
          <div class="box foci">
            <div class="box">
              <img src="https://fillmurray.com/300/300" alt="">
              <p>Automotive Tech</p>
            </div>
            <div class="box">
              <img src="https://fillmurray.com/300/300" alt="">
              <p>B2B, B2C, &amp; H2H Platforms</p>
            </div>
            <div class="box">
              <img src="https://fillmurray.com/300/300" alt="">
              <p>Fintech</p>
            </div>
            <div class="box">
              <img src="https://fillmurray.com/300/300" alt="">
              <p>Wearable Tech</p>
            </div>
            <div class="box">
              <img src="https://fillmurray.com/300/300" alt="">
              <p>Technology in Motion</p>
            </div>
            <div class="box">
              <img src="https://fillmurray.com/300/300" alt="">
              <p>Medical &amp; Health</p>
            </div>
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
    img {
      position: absolute;
      top: 0;
      left: 0;
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      background: rgba(0, 0, 0, 0.8);
    }
    > .container {
      position: absolute;
      top: 0;
      left: 5%;
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 3;
    }
    h1 {
      font-size: 52px;
    }
    a {
      margin-top: 20px;
    }
  }
  @media only screen and (min-width: $small) {
    .box {
      > .container {
        width: $small - 30px;
        left: calc((100vw - 576px) / 2);
      }
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, 1, 1fr, calc((100vh - 70px) / 2), 0);
    .box {
      > .container {
        width: auto;
        left: calc((100vw - 738px) / 2);
        right: calc((100vw - 738px) / 2);
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
        left: calc((100vw - 962px) / 2);
        right: calc((100vw - 962px) / 2);
      }
    }
  }
  @media only screen and (min-width: $xlarge) {
    .box {
      > .container {
        left: calc((100vw - 1170px) / 2);
        right: calc((100vw - 1170px) / 2);
      }
    }
  }
}
.statistics {
  .outer-box {
    @include grid-boxes(2, 2, 1fr, 200px, 0);
  }
  .box {
    &.image {
      background: navajowhite;
      img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
      }
    }
    &:not(.image) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        margin: 0;
      }
      .large {
        font-size: 48px;
      }
      .small {
        @include title-font;
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, 400px, 0);
  }
}
.focus {
  background: black;
  h2,
  p {
    color: white;
  }
  a {
    margin-top: 20px;
  }
  .foci {
    @include grid-boxes(2, 3, 1fr, auto, 25px);
    padding: 50px 0;
    img {
      width: 60%;
      max-width: 100px;
      height: auto;
      display: block;
      margin: 0 auto 15px;
    }
    p {
      margin: 5px 0 0;
      text-align: center;
      @include title-font;
    }
    @media only screen and (min-width: $medium) {
      @include grid-boxes(3, 2, 1fr, auto, 25px);
    }
  }
  @media only screen and (min-width: $large) {
    > .container {
      @include grid-boxes(2, 1, 1fr, auto, 0);
      align-items: center;
      width: $large - 30px;
    }
  }
  @media only screen and (min-width: $xlarge) {
    > .container {
      width: $xlarge - 30px;
    }
  }
}
</style>

