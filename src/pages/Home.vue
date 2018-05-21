<template>
  <base-page>
    <template slot="content">
      <div class="intro">
        <div class="box">
          <div class="container">
            <h1>A different kind of <strong>venture group</strong></h1>
          </div>
          <img src="../assets/images/home/private-equity.jpg" alt="">
          <div class="overlay"></div>
        </div>
        <div class="box">
          <div class="container">
            <p>
              We are more than just traditional investors, we are a boutique early stage
              investment boutique firm that goes by a hybrid model of venture capital with
              private equity mindset. We are willing to look deeper, wider and bigger with
              all opportunities!
            </p>
            <p>
              City Side Ventures is a driven group of experienced business builders and a
              combination of serial entrepreneurs, disrupters, innovators, and technologists,
              all in one – aka a crazy bunch!
            </p>
            <router-link
              :to="{ name: 'About' }"
              class="button inverse"
            >
              Learn about City Side Ventures
            </router-link>
          </div>
          <img src="../assets/images/home/about.jpg" alt="">
          <div class="overlay"></div>
        </div>
      </div>
      <div class="statistics">
        <div class="outer-box">
          <div class="box">
            <p class="large color-yellow">$100M</p>
            <p class="small color-yellow">in access capital</p>
          </div>
          <div class="box image">
            <img src="../assets/images/home/stats1.jpg" alt="">
          </div>
          <div class="box image">
            <img src="../assets/images/home/stats2.jpg" alt="">
          </div>
          <div class="box">
            <p class="large color-blue">24</p>
            <p class="small color-blue">venture partners</p>
          </div>
        </div>
        <div class="outer-box">
          <div class="box">
            <p class="large color-red">16</p>
            <p class="small color-red">active investments</p>
          </div>
          <div class="box image">
            <img src="../assets/images/home/stats3.jpg" alt="">
          </div>
          <div class="box image">
            <img src="../assets/images/home/stats4.jpg" alt="">
          </div>
          <div class="box">
            <p class="large color-yellow">18x</p>
            <p class="small color-yellow">return on equity</p>
          </div>
        </div>
      </div>
      <div class="focus">
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
              <img src="../assets/images/icons/focus-automotive-black.svg" alt="">
              <p>Automotive Tech</p>
            </div>
            <div class="box">
              <img src="../assets/images/icons/focus-b2b-black.svg" alt="">
              <p>B2B, B2C, &amp; H2H Platforms</p>
            </div>
            <div class="box">
              <img src="../assets/images/icons/focus-fintech-black.svg" alt="">
              <p>Fintech</p>
            </div>
            <div class="box">
              <img src="../assets/images/icons/focus-wearable-black.svg" alt="">
              <p>Wearable Tech</p>
            </div>
            <div class="box">
              <img src="../assets/images/icons/focus-techinmotion-black.svg" alt="">
              <p>Technology in Motion</p>
            </div>
            <div class="box">
              <img src="../assets/images/icons/focus-medical-black.svg" alt="">
              <p>Medical &amp; Health</p>
            </div>
          </div>
        </div>
      </div>
      <div class="funds">
        <div class="container">
          <div class="box">
            <h2>Our Investment Platforms</h2>
            <p class="lead">
              We have created the following hybrid investment platform to accommodate
              startup companies to navigate seamlessly between Angel Funding to Seed
              Capital to Growth Capital.
            </p>
          </div>
          <div class="box">
            <h3>Great Lakes Angels Fund</h3>
            <p class="lead"><em>Angel Fund</em></p>
            <p class="lead"><em>Pre-Seed Capital</em></p>
            <br>
            <p>
              Great Lakes Angels Fund is an equity-based Angel Fund created to fund and grow early
              stage, tech-based companies.
            </p>
            <router-link
              :to="{ name: 'GreatLakes' }"
              class="button button-red"
            >
              Learn More
            </router-link>
            <img src="../assets/images/icons/fund-greenseed-gray.svg" alt="">
          </div>
          <div class="box">
            <h3>Venture (248)</h3>
            <p class="lead"><em>Venture Capital Fund</em></p>
            <p class="lead"><em>Seed Capital</em></p>
            <br>
            <p>
              Venture (248) is an equity-based Venture Capital Fund that was created to
              fund and grow second stage, Michigan-based technology companies.
            </p>
            <router-link
              :to="{ name: 'Venture248' }"
              class="button button-red"
            >
              Learn More
            </router-link>
            <img src="../assets/images/icons/fund-venture248-gray.svg" alt="">
          </div>
          <div class="box">
            <h3>Blue Venture</h3>
            <p class="lead"><em>Venture Capital Fund</em></p>
            <p class="lead"><em>Series A - C</em></p>
            <br>
            <p>
              Blue Venture was established to invest in fast growing, scalable, and
              post-revenue tech companies.
            </p>
            <router-link
              :to="{ name: 'BlueVenture' }"
              class="button button-red"
            >
              Learn More
            </router-link>
            <img src="../assets/images/icons/fund-blueventure-gray.svg" alt="">
          </div>
          <div class="box">
            <h3>City[X]</h3>
            <p class="lead"><em>Private Equity Fund</em></p>
            <p class="lead"><em>Growth Capital</em></p>
            <br>
            <p>
              CityX was established to invest in fast growing, scalable, and post-revenue
              tech companies.
            </p>
            <router-link
              :to="{ name: 'CityX' }"
              class="button button-red"
            >
              Learn More
            </router-link>
            <img src="../assets/images/icons/fund-cityx-gray.svg" alt="">
          </div>
        </div>
      </div>
      <div class="statistics statistics2">
        <div class="box image-background large">
          <img src="../assets/images/home/stats5.jpg" alt="">
          <div class="overlay"></div>
          <p class="large">246%</p>
          <p class="small">return on investment</p>
        </div>
        <div class="box">
          <div class="box image">
            <img src="../assets/images/home/stats6.jpg" alt="">
          </div>
          <div class="box box-yellow">
            <p class="large">6</p>
            <p class="small">on-boarding investments</p>
          </div>
          <div class="box box-blue">
            <p class="large">$100M</p>
            <p class="small">in access capital</p>
          </div>
          <div class="box image">
            <img src="../assets/images/home/stats7.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="portfolio">
        <div class="box">
          <div class="container">
            <h2>Our Current Investment Portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <router-link
              :to="{ name: 'Portfolio' }"
              class="button inverse"
            >
              View our Portfolio
            </router-link>
          </div>
        </div>
        <div class="box">
          <div class="upper">
            <div class="box">
              <img src="../assets/images/logos/wearli.png" alt="">
            </div>
            <div class="box">
              <img src="../assets/images/logos/coaching-standard.png" alt="">
            </div>
            <div class="box">
              <img src="../assets/images/logos/amtech.png" alt="">
            </div>
            <div class="box">
              <img src="../assets/images/logos/analyteum.png" alt="">
            </div>
          </div>
          <div class="lower">
            <div class="box">
              <img src="../assets/images/logos/tm.png" alt="">
            </div>
            <div class="box">
              <img src="../assets/images/logos/safewhistle.png" alt="">
            </div>
            <div class="box">
              <img src="../assets/images/logos/argonomo.png" alt="">
            </div>
            <div class="box">
              <img src="../assets/images/logos/we-conduct.png" alt="">
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
.intro {
  @include grid-boxes(1, 2, 1fr, 450px, 0);
  .box {
    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
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
    }
    &:nth-child(1) {
      color: $goldendream;
      .overlay {
        @include background-opacity(#343434, 0.9);
      }
    }
    &:nth-child(2) {
      .overlay {
        @include background-opacity($goldendream, 0.9);
      }
    }
    > .container {
      position: absolute;
      top: 0;
      left: 5%;
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      z-index: 3;
    }
    h1 {
      font-size: 53px;
      font-weight: 100;
    }
    a {
      margin-top: 20px;
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, 1, 1fr, 500px, 0);
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 50vw, 50vw, 0);
    .box {
      > .container {
        width: 80%;
        padding-left: 10%;
      }
      h1 {
        font-size: 68px;
      }
    }
  }
  @media only screen and (min-width: 1400px) {
    .box {
      h1 {
        font-size: 90px;
      }
      p {
        font-size: 20px;
      }
    }
  }
}
.statistics {
  .outer-box {
    @include grid-boxes(2, 2, 50vw, 50vw, 0);
  }
  .box {
    &.image {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    &.image-background {
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2;
      }
      p {
        z-index: 3;
        color: white;
      }
    }
    &:not(.image) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        margin: 0;
        text-align: center;
      }
      .large {
        font-size: 48px;
        font-weight: 100;
        @media only screen and (min-width: 1800px) {
          font-size: 68px;
        }
      }
      .small {
        @include title-font;
        @media only screen and (min-width: 1800px) {
          font-size: 15px;
        }
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 50vw, 50vw, 0);
    .outer-box {
      @include grid-boxes(2, 2, 25vw, 25vw, 0);
    }
  }
  &.statistics2 {
    @include grid-boxes(1, 2, 100vw, 100vw, 0);
    > .box:nth-child(2) {
      @include grid-boxes(2, 2, 50vw, 50vw, 0);
      align-items: initial;
      .box {
        align-items: center;
        justify-content: center;
      }
    }
    .box-yellow {
      background: $goldendream;
      p {
        color: $white;
      }
    }
    .box-blue {
      background: $danube;
      p {
        color: $white;
      }
    }
    @media only screen and (min-width: $medium) {
      @include grid-boxes(2, 1, 50vw, 50vw, 0);
      > .box:nth-child(2) {
        @include grid-boxes(2, 2, 25vw, 25vw, 0);
        width: auto;
      }
    }
  }
}
.focus {
  background: $goldendream;
  padding: 30px 0;
  h2 {
    color: #323232;
  }
  p {
    color: #313131;
  }
  a {
    margin-top: 20px;
    height: 44px;
  }
  .foci {
    @include grid-boxes(2, 3, 1fr, auto, 25px);
    padding: 50px 0;
    img {
      height: 60px;
      width: auto;
      display: block;
      margin: 0 auto 15px;
    }
    p {
      margin: 5px auto 0;
      max-width: 150px;
      text-align: center;
      @include title-font;
      color: #313131;
    }
    @media only screen and (min-width: $medium) {
      @include grid-boxes(3, 2, 1fr, auto, 25px);
    }
  }
  @media only screen and (min-width: $large) {
    > .container {
      @include grid-boxes(2, 1, 1fr, auto, 100px);
      grid-template-columns: 2fr 3fr;
      align-items: center;
      width: calc(100vw - 60px);
    }
  }
  @media only screen and (min-width: $xxlarge) {
    > .container {
      width: calc(100vw - 120px);
    }
  }
}
.funds {
  background: $danube;
  .box {
    padding: 20px 30px 120px 30px;
    position: relative;
    color: $cod;
    &:nth-child(odd) {
      background: $wildsand;
    }
    &:nth-child(even) {
      background: $white;
    }
    &:nth-child(1) {
      background: $danube;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;
      h2,
      p {
        color: $white;
      }
    }
  }
  h3 {
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 8px;
    font-size: 27px;
    color: #565656;
  }
  img {
    position: absolute;
    bottom: 20px;
    right: 20px;
    height: 60px;
    width: auto;
  }
  p {
    margin: 0;
    color: #5b5b5b;
  }
  .button {
    margin-top: 20px;
    position: absolute;
    bottom: 50px;
    height: 40px;
  }
  @media only screen and (min-width: $medium) {
    > .container {
      width: 100%;
      max-width: 100%;
      @include grid-boxes(2, 2, 1fr, auto, 0);
    }
    .box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &:nth-child(1) {
        padding: 30px;
        h2 {
          font-size: 34px;
        }
      }
      img {
        position: static;
      }
      img {
        order: 0;
        margin-bottom: 40px;
      }
      h3,
      p {
        order: 1;
      }
      p:not(.lead) {
        font-size: 14px;
        margin-top: 20px;
      }
    }
  }
  @media only screen and (min-width: $large) {
    > .container {
      @include grid-boxes(5, 1, 1fr, auto, 0);
    }
  }
  @media only screen and (min-width: $xxlarge) {
    .box:nth-child(1) {
      padding-left: 60px;
    }
  }
}
.portfolio {
  > .box:first-of-type {
    padding: 30px 0;
    background: $goldendream;
    color: $cod;
    .box {
      &:nth-child(1) {
        h2 {
          font-size: 36px;
        }
      }
      h3 {
        font-size: 24px;
      }
    }
  }
  .upper,
  .lower {
    @include grid-boxes(2, 2, 50vw, 50vw, 0);
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(2),
      &:nth-child(3) {
        background: #f5f5f5;
      }
    }
    img {
      max-width: 55%;
      max-height: 45px;
      display: block;
    }
  }
  @media only screen and (min-width: $medium) {
    .upper,
    .lower {
      @include grid-boxes(4, 1, 25vw, 25vw, 0);
    }
    .upper {
      .box:nth-child(even) {
        background: #f5f5f5;
      }
      .box:nth-child(odd) {
        background: white;
      }
    }
    .lower {
      .box:nth-child(odd) {
        background: #f5f5f5;
      }
      .box:nth-child(even) {
        background: white;
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, 300px, 0);
    grid-template-columns: auto 600px;
    .upper,
    .lower {
      @include grid-boxes(4, 1, 150px, 150px, 0);
    }
    > .box:first-of-type {
      .container {
        width: 100%;
        max-width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
  @media only screen and (min-width: $xlarge) {
    @include grid-boxes(2, 1, 1fr, 400px, 0);
    grid-template-columns: auto 800px;
    .upper,
    .lower {
      @include grid-boxes(4, 1, 200px, 200px, 0);
    }
  }
  @media only screen and (min-width: $xxlarge) {
    @include grid-boxes(2, 1, 1fr, 500px, 0);
    grid-template-columns: auto 1000px;
    .upper,
    .lower {
      @include grid-boxes(4, 1, 250px, 250px, 0);
    }
  }
  @media only screen and (min-width: $xxlarge) {
    > .box:first-of-type {
      .container {
        padding-left: 60px;
      }
    }
  }
}
</style>

