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
              class="step"
              v-for="(step, index) in process"
              :key="index"
            >
              <img src="../assets/images/icons/bullet.svg" alt="">
              <p class="title">{{ step.title }}</p>
              <p class="lead"><em>{{ step.tagline }}</em></p>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
        <div class="box image">
          <img src="https://fillmurray.com/800/800" alt="">
        </div>
      </div>
      <div class="sidepitch">
        <div class="box image">
          <img src="https://fillmurray.com/800/800" alt="">
        </div>
        <div class="box">
          <div class="container">
            <h2>The Sidepitch Platform</h2>
            <p>
              Sidepitch is a Venture Management System (VMS) platform that is pioneering
              a new category within the financial technology market by leveraging a high-tech
              approach to the traditional venture capital market worldwide.
            </p>
            <p class="title">Deal flow highlighting the hottest startups</p>
            <p>
              Find, screen, qualify, vet, and select investment opportunities across the
              globe all from one platform from the contingency of your computer.
            </p>
            <p class="title">Collaborative Due Diligence For Investors and Startups</p>
            <p>
              Our progressive online platform allows investors to manage their entire
              due-diligence process online, in a dynamic, efficient, and collaborative fashion.
            </p>
            <p class="title">Syndicated investments with other venture capitalists</p>
            <p>
              Connect with other investors across the globe and build your own private
              syndication online. Built with privacy and confidentiality in mind.
            </p>
            <a href="https://sidepitch.com" class="button inverse">Learn More about Sidepitch</a>
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
.process {
  $bullet_width: 50px;
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
    p {
      margin: 0;
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
    img {
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: $medium) {
    .box:not(.image) {
      padding: 40px 0;
      .step {
        padding-left: $bullet_width / 2 + 30;
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box:not(.image) {
      > .container {
        width: 100%;
        padding-left: calc((100vw - 962px) / 2);
        padding-right: 30px;
      }
    }
  }
  @media only screen and (min-width: $xlarge) {
    .box:not(.image) {
      > .container {
        padding-left: calc((100vw - 1170px) / 2);
      }
    }
  }
}
.sidepitch {
  @include grid-boxes(1, 2, 1fr, auto, 0);
  .box.image {
    img {
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
    }
  }
  .box:not(.image) {
    background: black;
    color: white;
    padding: 40px 0;
  }
  p {
    margin-top: 5px;
    &.title {
      @include title-font;
      margin: 20px 0 0;
    }
  }
  a {
    margin-top: 20px;
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box:not(.image) {
      > .container {
        width: 100%;
        padding-left: 40px;
        padding-right: calc((100vw - 962px) / 2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
  @media only screen and (min-width: $xlarge) {
    .box:not(.image) {
      > .container {
        padding-right: calc((100vw - 1170px) / 2);
      }
    }
  }
}
</style>

