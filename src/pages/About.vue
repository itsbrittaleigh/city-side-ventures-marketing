<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="About Us"
        description="Our venture group is more than just traditional investors, we are an early
          stage hybrid boutique private equity and venture capital firm that is willing to look
          deeper, wider, and bigger."
        name="about"
      >
      </hero-section>
      <section class="about">
        <div class="box">
          <div class="container">
            <p>
              City Side Venture is a boutique investment firm that is being managed by a unique,
              distinct and highly diverse group of seasoned and accomplished entrepreneurs. We are
              an ideal partner for early stage tech-based startup companies and have a deep
              appreciation and understanding of what it takes to build businesses.
            </p>
            <p>
              We have established ourselves as a “Game Changer” in the traditional startup
              experience.  Unlike most early stage investment firms that are chasing the next
              “Unicorn”, we are looking to build them. We want to be involved on the ground floor,
              in the beginning with the startup companies. By putting our experience, expertise,
              our sweat, and capital to work, we can succeed in building great companies.
            </p>
            <p>
              Our business mindset is that it takes a village to launch a startup. We are not
              looking to invest in cars, we are looking to invest in drivers. Confident,
              aggressive, open minded drivers, with an endless energy and passion for success.
            </p>
            <p>If you are this kind of a driver, call us.</p>
          </div>
        </div>
        <div class="box image">
          <img src="../assets/images/about.jpg" alt="">
        </div>
      </section>
      <section class="principles">
        <div class="principles-boxes">
          <div class="box box-dark-gray intro">
            <h2>Our Operating Principles</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maiores
              corrupti recusandae quos hic facilis ut soluta asperiores, ex iusto minus,
              suscipit beatae officiis sit dicta voluptas nemo ipsam vero.
            </p>
          </div>
          <div
            v-for="(principle, index) in principles"
            :key="index"
            :class="['box', principle.class]"
          >
            <span>{{ index + 1}}</span>
            <p class="title">{{ principle.title }}</p>
            <p>{{ principle.description }}</p>
          </div>
        </div>
      </section>
      <section class="partners">
        <div class="box statistic">
          <div class="container">
            <h2>Our Venture Partners</h2>
            <p class="large">$500M</p>
            <p class="small">
              In investment capital. Represented by our global syndication of
              venture partners
            </p>
          </div>
        </div>
        <div class="box logos">
          <div class="box">
            <img src="../assets/images/logos/argonomo-ventures.png" alt="">
          </div>
          <div class="box">
            <img src="../assets/images/logos/blue-venture-fund.png" alt="">
          </div>
          <div class="box">
            <img src="../assets/images/logos/bss-capital-ventures.png" alt="">
          </div>
          <div class="box">
            <img src="../assets/images/logos/cynthetik-ventures.png" alt="">
          </div>
          <div class="box">
            <img src="../assets/images/logos/eiconica-ventures.png" alt="">
          </div>
          <div class="box">
            <img src="../assets/images/logos/ksy-ventures.png" alt="">
          </div>
          <div class="box">
            <img src="../assets/images/logos/motor-city-venture-fund.png" alt="">
          </div>
          <div class="box">
            <img src="../assets/images/logos/sidepitch.png" alt="">
          </div>
          <div class="box">
            <img src="../assets/images/logos/venture-248.png" alt="">
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
  name: 'About',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
  computed: {
    ...mapGetters([
      'principles',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.about {
  @include grid-boxes(1, 2, 1fr, auto, 0);
  .box.image {
    img {
      min-width: 100%;
      min-height: 100%;
      max-height: 400px;
      object-fit: cover;
    }
  }
  .box:not(.image) {
    padding: 40px 0;
    background: #f2f2f2;
    p {
      color: #747474;
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box:not(.image) {
      padding: 0;
      > .container {
        width: 100%;
        max-width: 100%;
        padding: 100px 80px;
      }
    }
  }
}
.principles {
  .principles-boxes {
    @include grid-boxes(1, 7, 1fr, 1fr, 0);
    .box {
      padding: 80px 20px 30px;
      &.box-yellow {
        background: $goldendream;
        p {
          color: #313131;
        }
      }
      &.box-dark-gray {
        background: $cod;
        h2,
        p {
          color: $white;
        }
      }
      &.box-blue {
        background: $danube;
        p {
          color: $white;
        }
      }
      &.box-light-gray {
        background: $gray;
        p {
          color: $white;
        }
      }
    }
    p {
      margin: 0;
      &.title {
        @include title-font;
        margin-bottom: 10px;
      }
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      @include background-opacity(black, 0.25);
      color: white;
      font-size: 32px;
    }
    @media only screen and (min-width: $medium) {
      @include grid-boxes(2, 4, 1fr, 1fr, 0);
    }
    @media only screen and (min-width: $large) {
      @include grid-boxes(3, 3, 1fr, 1fr, 0);
    }
    @media only screen and (min-width: $xlarge) {
      @include grid-boxes(4, 2, 1fr, auto, 0);
      .box {
        padding: 120px 40px 60px;
      }
      .intro {
        grid-row: 1 / 3;
      }
    }
  }
  @media only screen and (min-width: $xxlarge) {
    .container {
      width: 1170px;
    }
  }
}
.partners {
  .box.statistic {
    background: $danube;
    text-align: center;
    padding: 40px 0;
    > .container {
      max-width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h2,
    p {
      color: $white;
    }
    .large {
      margin: 30px 0 5px;
      font-size: 70px;
      font-weight: 100;
    }
    .small {
      @include title-font;
    }
  }
  .logos {
    @include grid-boxes(3, 3, (100vw / 3), (100vw / 3), 0);
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:nth-child(odd) {
        background: $wildsand;
      }
    }
    img {
      max-height: 75px;
      max-width: 80%;
      object-fit: contain;
    }
    p {
      text-align: center;
    }
    @media only screen and (min-width: $large) {
      @include grid-boxes(3, 3, (100vw / 6), 1fr, 0);
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box.statistic {
      padding: 80px 0;
    }
  }
}
</style>

