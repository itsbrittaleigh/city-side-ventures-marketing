<template>
  <div class="funds-template">
    <section class="hero funds">
      <img :src="fund.hero.image" :alt="fund.hero.alt">
      <div class="container">
        <div class="information-box">
          <img :src="fund.icon.image" :alt="fund.icon.alt">
          <h1>{{ fund.name }}</h1>
          <p><em>{{ fund.market }}</em></p>
          <a href="#" class="button inverse">Apply with City Side</a>
        </div>
      </div>
    </section>
    <section class="introduction padded-section">
      <div class="container">
        <p>{{ fund.intro }}</p>
        <div class="statistics">
          <div class="box">
            <p class="large">{{ fund.investmentCapital }}</p>
            <p class="small">in investment capital</p>
          </div>
          <div class="box">
            <p class="large">{{ fund.maxInvestmentSize }}</p>
            <p class="small">maximum investment size</p>
          </div>
        </div>
      </div>
    </section>
    <section class="qualifications">
      <div class="box">
        <div class="container">
          <h2>Minimum Qualifications</h2>
          <p>
            <em>
              Companies that are considering applying must be qualified based on the following:
            </em>
          </p>
          <ul>
            <li
              v-for="(qualification, index) in fund.minimumQualifications"
              :key="index"
            >
              {{ qualification }}
            </li>
          </ul>
        </div>
      </div>
      <div class="box">
        <div class="container">
          <h2>Funding Requirements</h2>
          <p>
            <em>
              Companies that will qualify for the fund will agree to the following conditions:
            </em>
          </p>
          <ul>
            <li
              v-for="(requirement, index) in fund.fundingRequirements"
              :key="index"
            >
              {{ requirement }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="apply">
      <div class="box">
        <div class="container">
          <h2>How to Apply</h2>
          <p>
            To make sure that we process your request quickly and efficiently, we will be
            using Sidepitch as our venture fund management system. Please read the instructions
            and follow the process for quick turn around. We will not respond until the
            application process is complete and submitted. Please use our unique Pitchmark.
          </p>
          <a href="" class="button inverse">Apply with City Side</a>
        </div>
      </div>
      <div class="box image">
        <img :src="fund.contentImage.image" :alt="fund.contentImage.alt">
      </div>
    </section>
    <section class="app-process padded-section">
      <div class="container">
        <h2>The application process</h2>
        <p>
          City Side provides solutions to find and manage investments for investors
          and corporate ventures using today's technology. With the development of our
          online Venture Management System (VMS), we have automated the process of
          investments from start to finish.
        </p>
        <div class="bar-graph">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="section"
          >
            <img src="../assets/images/icons/bullet.svg" alt="bullet point">
            <div class="step">
              <p
                v-if="step.days"
                class="days"
              >
                {{ step.days }}
              </p>
              <p><em>{{ step.label }}</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FundsTemplate',
  props: ['fund'],
  data() {
    return {
      processSteps: [
        {
          label: 'Application Submitted',
        },
        {
          days: '0 - 14 days',
          label: 'Application Review',
        },
        {
          days: '14 - 25 days',
          label: 'Due Diligence',
        },
        {
          days: '25 - 30 days',
          label: 'Final Selection',
        },
        {
          days: '30 - 35 days',
          label: 'Final Decision',
        },
        {
          days: '35 - 45 days',
          label: 'Deal Closure',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/components/hero";
@import "../assets/styles/templates/funds";
.introduction {
  .statistics {
    p.large {
      font-size: 70px;
      font-weight: 100;
      margin: 40px 0 0;
      text-align: center;
    }
    p.small {
      @include title-font;
      text-align: center;
    }
  }
  @media only screen and (min-width: $medium) {
    .statistics {
      display: flex;
      justify-content: center;
      .box:first-of-type {
        margin-right: 90px;
      }
    }
  }
}
.qualifications {
  .box {
    padding: 40px 0;
    background: lightslategray;
    &:first-of-type {
      background: lightgray;
    }
  }
  h2 {
    @include title-font;
  }
  p, ul, li {
    font-size: 14px;
  }
  ul {
    padding-left: 15px;
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box {
      padding: 40px;
      &:first-of-type {
        padding-left: calc((100vw - 738px) / 2);
      }
      &:last-of-type {
        padding-right: calc((100vw - 738px) / 2);
      }
      > .container {
        width: 100%;
        max-width: 100%;
      }
    }
  }
  @media only screen and (min-width: $large) {
    .box {
      padding: 70px;
      &:first-of-type {
        padding-left: calc((100vw - 962px) / 2);
      }
      &:last-of-type {
        padding-right: calc((100vw - 962px) / 2);
      }
    }
  }
}
.apply {
  @include grid-boxes(1, 2, 1fr, auto, 0);
  .box:not(.image) {
    background: gray;
    color: white;
    padding: 30px 0;
  }
  .box.image {
    max-height: 350px;
    img {
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(2, 1, 1fr, auto, 0);
    .box:not(.image) {
      padding-left: calc((100vw - 738px) / 2);
      padding-right: 40px;
      > .container {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
  @media only screen and (min-width: $large) {
    .box:not(.image) {
      padding-left: calc((100vw - 962px) / 2);
    }
  }
}
.app-process {
  $bullet_width: 40px;
  .bar-graph {
    width: 220px;
    margin: $bullet_width auto 0;
    .section {
      border-left: 2px solid gray;
      position: relative;
      margin-left: ($bullet_width / 2);
      padding: 0 0 60px $bullet_width;
      &:last-of-type {
        border-left: none;
      }
      img {
        position: absolute;
        top: 0;
        left: -20px;
        width: $bullet_width;
        height: $bullet_width;
      }
      p {
        margin: 0;
        &.days {
          @include title-font;
          font-size: 14px;
        }
      }
    }
  }
  @media only screen and (min-width: $large) {
    .bar-graph {
      display: flex;
      width: 100%;
      margin: 80px 0 0;
      .section {
        border-top: 2px solid gray;
        border-left: none;
        padding: $bullet_width 10px 0;
        margin: 0;
        width: calc(100% / 6);
        img {
          position: absolute;
          top: -($bullet_width / 2);
          left: 50%;
          margin-left: -($bullet_width / 2);
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>
