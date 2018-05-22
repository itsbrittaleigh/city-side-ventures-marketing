<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="Our Process"
        description="City Side provides solutions to find and manage investments for investors
          and corporate ventures using today's technology. With the development of
          our online Venture Management System (VMS), we have automated the process
          of investments from start to finish."
        lead="Business + Technologhy + Capital = Success"
        name="process"
      >
      </hero-section>
      <div class="process">
        <div class="box">
          <div class="container">
            <h2>Pitch it. Fund it. Launch it.</h2>
            <p>
              We are business builders&mdash;not just traditional investors.
              We go all in or not at all.
            </p>
            <div
              v-for="(step, index) in process"
              :key="index"
              :class="'step step-' + (index + 1)"
            >
              <img :src="step.bullet" alt="">
              <p class="title">{{ step.title }}</p>
              <p class="lead"><em>{{ step.tagline }}</em></p>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
        <div class="box image"></div>
      </div>
      <div class="sidepitch">
        <div class="box image"></div>
        <div class="box">
          <div class="container">
            <h2>The Sidepitch Platform</h2>
            <p>
              Sidepitch is a Venture Management System (VMS) platform that is pioneering
              a new category within the financial technology market by leveraging a high-tech
              approach to the traditional venture capital market worldwide.
            </p>
            <div class="step">
              <img src="../assets/images/icons/bullet-darkgray.svg" alt="">
              <p class="title">Deal flow highlighting the hottest startups</p>
              <p>
                Find, screen, qualify, vet, and select investment opportunities across the
                globe all from one platform from the contingency of your computer.
              </p>
            </div>
            <div class="step">
              <img src="../assets/images/icons/bullet-darkgray.svg" alt="">
              <p class="title">Collaborative Due Diligence For Investors and Startups</p>
              <p>
                Our progressive online platform allows investors to manage their entire
                due-diligence process online, in a dynamic, efficient, and collaborative fashion.
              </p>
            </div>
            <div class="step">
              <img src="../assets/images/icons/bullet-darkgray.svg" alt="">
              <p class="title">Syndicated investments with other venture capitalists</p>
              <p>
                Connect with other investors across the globe and build your own private
                syndication online. Built with privacy and confidentiality in mind.
              </p>
            </div>
            <a href="https://sidepitch.com" class="button inverse" target="_blank">Learn More about Sidepitch</a>
          </div>
        </div>
      </div>
    </template>
  </base-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Process',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
  computed: {
    ...mapGetters([
      'process',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
$bullet_width: 40px;
.process {
  @include grid-boxes(1, 2, 1fr, auto, 0);
  .box:not(.image) {
    padding: 40px 0;
    .step {
      position: relative;
      padding-bottom: 40px;
      margin-left: $bullet_width / 2;
      padding-left: $bullet_width / 2 + 10;
      img {
        position: absolute;
        top: 0;
        left: -($bullet_width / 2);
        height: $bullet_width;
        width: $bullet_width;
      }
      &:first-of-type {
        margin-top: 40px;
      }
      &:not(:last-of-type) {
        border-left: 2px solid lightgray;
      }
    }
    .step-1 {
      .title {
        color: $goldendream;
      }
    }
    .step-2 {
      .title {
        color: $danube;
      }
    }
    .step-3 {
      .title {
        color: $gray;
      }
    }
    p {
      margin: 0;
      color: #747474;
      &.title {
        @include title-font;
        font-size: 18px;
      }
      &.lead {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
  .box.image {
    background: url('../assets/images/about-process.jpg') no-repeat center center;
    background-size: cover;
  }
  @media only screen and (min-width: $medium) {
    .box:not(.image) {
      padding: 40px 20px;
      .step {
        padding-left: $bullet_width / 2 + 30;
        &:last-of-type {
          padding-bottom: 0;
        }
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box:not(.image) {
      padding: 100px 20px;
      h2,
      p {
        padding-left: 72px;
      }
      > .container {
        width: 100%;
      }
      .step {
        p {
          padding-left: 0;
        }
      }
    }
  }
  @media only screen and (min-width: $xlarge) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box:not(.image) {
      > .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  @media only screen and (min-width: $xxlarge) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box:not(.image) {
      > .container {
        padding: 0;
        width: 650px;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: $xxxlarge) {
    .box:not(.image) {
      > .container {
        width: 800px;
      }
    }
  }
}
.sidepitch {
  @include grid-boxes(1, 2, 1fr, auto, 0);
  .box.image {
    background: url('../assets/images/sidepitch.jpg') no-repeat center center;
    background-size: cover;
  }
  .box:not(.image) {
    background: $goldendream;
    padding: 40px 20px;
    h2,
    p {
      color: $cod;
    }
    .step {
      position: relative;
      padding-bottom: 40px;
      margin-left: $bullet_width / 2;
      padding-left: $bullet_width / 2 + 10;
      img {
        position: absolute;
        top: 0;
        left: -($bullet_width / 2);
        height: $bullet_width;
        width: $bullet_width;
      }
      &:first-of-type {
        margin-top: 40px;
      }
      &:not(:last-of-type) {
        border-left: 2px solid $cod;
      }
    }
  }
  p {
    margin-top: 5px;
    &.title {
      @include title-font;
      margin: 0;
    }
  }
  a {
    margin-top: 20px;
  }
  @media only screen and (min-width: $medium) {
    .box:not(.image) {
      .step {
        padding-left: $bullet_width / 2 + 30;
        &:last-of-type {
          padding-bottom: 0;
        }
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box:not(.image) {
      padding: 100px 20px;
      h2,
      p {
        padding-left: 72px;
      }
      .button {
        margin-left: 72px;
      }
      .step p {
        padding-left: 0;
      }
      > .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
}
</style>
