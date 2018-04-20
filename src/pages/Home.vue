<template>
  <base-page>
    <template slot="content">
      <div class="intro">
        <div class="box">
          <div class="container">
            <h1>A different kind of <strong>venture group</strong></h1>
          </div>
          <img src="https://fillmurray.com/600/800" alt="">
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
      <div class="padded-section">
        <div class="container">
          <h2>Our Investment Platforms</h2>
          <p class="lead">
            We have created the following hybrid investment platform to accommodate
            startup companies to navigate seamlessly between Angel Funding to Seed
            Capital to Growth Capital.
          </p>
        </div>
      </div>
      <div class="funds">
        <div class="container">
          <div class="box">
            <h3>Greenseed</h3>
            <p class="lead"><em>Angel Fund</em></p>
            <p class="lead"><em>Pre-Seed Capital</em></p>
            <br>
            <p>
              GREENSEED is an Angel Fund that invests in early stage companies. It is an
              equity-based fund created to fund and grow early stage, tech-based companies.
              It is our highly attractive hybrid investment model.
            </p>
            <router-link
              :to="{ name: 'Greenseed' }"
              class="button inverse"
            >
              Learn More
            </router-link>
            <img src="https://fillmurray.com/100/100" alt="">
          </div>
          <div class="box">
            <h3>Venture (248)</h3>
            <p class="lead"><em>Venture Capital Fund</em></p>
            <p class="lead"><em>Seed Capital</em></p>
            <br>
            <p>
              Venture (248) is an equity-based Venture Capital Fund that was created to
              fund and grow second stage, Michigan-based technology companies. Its sole
              purpose is to help grow the Michigan tech startup ecosystem.
            </p>
            <router-link
              :to="{ name: 'Venture248' }"
              class="button inverse"
            >
              Learn More
            </router-link>
            <img src="https://fillmurray.com/100/100" alt="">
          </div>
          <div class="box">
            <h3>Blue Venture</h3>
            <p class="lead"><em>Venture Capital Fund</em></p>
            <p class="lead"><em>Series A - C</em></p>
            <br>
            <p>
              Blue Venture is a Michigan-based Venture Capital Fund that was established to
              invest in fast growing, scalable, and post-revenue tech companies located in
              the US and North America.
            </p>
            <router-link
              :to="{ name: 'BlueVenture' }"
              class="button inverse"
            >
              Learn More
            </router-link>
            <img src="https://fillmurray.com/100/100" alt="">
          </div>
          <div class="box">
            <h3>City[X]</h3>
            <p class="lead"><em>Private Equity Fund</em></p>
            <p class="lead"><em>Growth Capital</em></p>
            <br>
            <p>
              CityX is a Michigan-based Private Equity Fund that was established to invest
              in fast growing, scalable, and post-revenue tech companies located in the US
              and North America.
            </p>
            <router-link
              :to="{ name: 'BlueVenture' }"
              class="button inverse"
            >
              Learn More
            </router-link>
            <img src="https://fillmurray.com/100/100" alt="">
          </div>
        </div>
      </div>
      <div class="statistics statistics2">
        <div class="box image-background large">
          <img src="https://fillmurray.com/600/600" alt="">
          <div class="overlay"></div>
          <p class="large">246%</p>
          <p class="small">return on investment</p>
        </div>
        <div class="box">
          <div class="box image">
            <img src="https://fillmurray.com/200/300" alt="">
          </div>
          <div class="box">
            <p class="large">6</p>
            <p class="small">on-boarding investments</p>
          </div>
          <div class="box">
            <p class="large">$100M</p>
            <p class="small">in access capital</p>
          </div>
          <div class="box image">
            <img src="https://fillmurray.com/200/300" alt="">
          </div>
        </div>
      </div>
      <div class="portfolio">
        <div class="box">
          <div class="container">
            <h2>Our current investment portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <router-link
              :to="{ name: 'Portfolio' }"
              class="button inverse"
            >
              Learn More
            </router-link>
          </div>
        </div>
        <div class="box">
          <div class="upper">
            <div class="box">
              <img src="https://fillmurray.com/200/600" alt="">
            </div>
            <div class="box">
              <img src="https://fillmurray.com/600/200" alt="">
            </div>
            <div class="box">
              <img src="https://fillmurray.com/400/400" alt="">
            </div>
            <div class="box">
              <img src="https://fillmurray.com/300/300" alt="">
            </div>
          </div>
          <div class="lower">
            <div class="box">
              <img src="https://fillmurray.com/200/600" alt="">
            </div>
            <div class="box">
              <img src="https://fillmurray.com/600/200" alt="">
            </div>
            <div class="box">
              <img src="https://fillmurray.com/400/400" alt="">
            </div>
            <div class="box">
              <img src="https://fillmurray.com/300/300" alt="">
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
  @include grid-boxes(1, 2, 1fr, 300px, 0);
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
      align-items: flex-start;
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
    @include grid-boxes(2, 2, 50vw, 50vw, 0);
  }
  .box {
    &.image {
      img {
        min-height: 100%;
        min-width: 100%;
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
      }
      .small {
        @include title-font;
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
.funds {
  .box {
    padding: 20px 20px 120px 20px;
    position: relative;
    color: white;
    &:nth-child(1) {
      background: gray;
    }
    &:nth-child(2) {
      background: black;
    }
    &:nth-child(3) {
      background: lightgray;
    }
    &:nth-child(4) {
      background: gray;
    }
  }
  h3 {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    font-size: 24px;
  }
  img {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  p {
    margin: 0;
  }
  .button {
    margin-top: 20px;
    position: absolute;
    bottom: 50px;
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
      justify-content: center;
      img {
        position: static;
      }
      img {
        order: 0;
        height: 100px;
        width: 100px;
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
      @include grid-boxes(4, 1, 1fr, auto, 0);
    }
  }
}
.portfolio {
  > .box:first-of-type {
    padding: 40px 0;
    background: black;
    color: white;
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
        background: lightgray;
      }
    }
    img {
      max-width: 80%;
      max-height: 75px;
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
        background: lightgray;
      }
      .box:nth-child(odd) {
        background: white;
      }
    }
    .lower {
      .box:nth-child(odd) {
        background: lightgray;
      }
      .box:nth-child(even) {
        background: white;
      }
    }
  }
  @media only screen and (min-width: $large) {
    @include grid-boxes(2, 1, 1fr, 400px, 0);
    grid-template-columns: auto 800px;
    .upper,
    .lower {
      @include grid-boxes(4, 1, 200px, 200px, 0);
    }
    > .box:first-of-type {
      .container {
        width: 100%;
        max-width: 100%;
        padding-left: calc((100vw - 962px) / 2);
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
  @media only screen and (min-width: $xlarge) {
    > .box:first-of-type {
      .container {
        padding-left: calc((100vw - 1170px) / 2);
      }
    }
  }
}
</style>

