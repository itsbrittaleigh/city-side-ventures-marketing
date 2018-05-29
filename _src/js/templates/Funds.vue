<template>
  <div class="funds-template">
    <section :class="['hero', 'funds', `bkg-${fund.hero.color}`]">
      <img :src="fund.hero.image" :alt="fund.hero.alt">
      <div class="overlay"></div>
      <div class="container">
        <div class="information-box">
          <div class="logo-container">
            <img :src="fund.icon.image" :alt="fund.icon.alt">
          </div>
          <div class="content">
            <h1>{{ fund.name }}</h1>
            <p><em>{{ fund.market }}</em></p>
            <a
              href="https://app.sidepitch.com/auth/register"
              class="button inverse"
              target="_blank"
            >
              Apply with City Side
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="introduction padded-section">
      <div class="container">
        <p>{{ fund.intro }}</p>
        <div class="statistics">
          <div class="box">
            <p :class="`large color-${fund.hero.color}`">{{ fund.investmentCapital }}</p>
            <p class="small">in investment capital</p>
          </div>
          <div class="box">
            <p :class="`large color-${fund.hero.color}`">{{ fund.maxInvestmentSize }}</p>
            <p class="small">maximum investment size</p>
          </div>
        </div>
      </div>
    </section>
    <section class="qualifications">
      <div class="box">
        <div class="container">
          <h2 :class="`color-${fund.hero.color}`">Minimum Qualifications</h2>
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
          <h2 :class="`color-${fund.hero.color}`">Funding Requirements</h2>
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
      <div :class="['box', `bkg-${fund.hero.color}`]">
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
            :class="['section', `border-${fund.hero.color}`]"
          >
            <img :src="icon[fund.hero.color]" alt="bullet point">
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
    <section class="portfolio padded-section">
      <div class="container">
        <h2>The {{ fund.name }} Portfolio</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi vero ea labore eveniet,
          cum distinctio sunt quisquam, delectus deserunt quidem ut? Quaerat reprehenderit
          asperiores molestiae, ullam debitis consequatur quidem numquam.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
const blueIcon = require('../assets/images/icons/bullet-blue.svg');
const redIcon = require('../assets/images/icons/bullet-red.svg');
const yellowIcon = require('../assets/images/icons/bullet-yellow.svg');
const grayIcon = require('../assets/images/icons/bullet-dark-gray.svg');

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
      icon: {
        blue: blueIcon,
        red: redIcon,
        black: grayIcon,
        yellow: yellowIcon,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/components/hero";
@import "../assets/styles/templates/funds";

</style>
