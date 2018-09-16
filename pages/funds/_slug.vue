<template>
  <div class="page fund">
    <div class="funds-template">
      <section :class="`hero funds bkg-${color}`">
        <img :src="heroImage" alt="">
        <div class="overlay"></div>
        <div class="container">
          <div class="content">
            <h1 :class="`hidden color-${color}`" v-in-viewport.once>{{ name }}</h1>
            <p class="larger hidden" v-in-viewport.once><em>{{ market }}</em></p>
            <p class="hidden" v-in-viewport.once><em>{{ toMarket }}</em></p>
          </div>
        </div>
      </section>
      <section class="introduction">
        <div class="box col-lt">
          <!-- logo -->
          <vue-markdown class="hidden" v-in-viewport.once>{{ intro }}</vue-markdown>
        </div>
        <div class="box statistics">
          <div class="box hidden bkg-black" v-in-viewport.once>
            <p :class="`large color-${color}`">{{ investmentCapital }}</p>
            <p :class="`small color-${color}`">in investment capital</p>
          </div>
          <div :class="`box hidden bkg-${color}`" v-in-viewport.once>
            <p class="large">{{ maxInvestmentSize }}</p>
            <p class="small">maximum investment size</p>
          </div>
        </div>
      </section>
      <section class="qualifications">
        <div class="box hidden" v-in-viewport.once>
          <div class="container">
            <h2>Minimum Qualifications</h2>
            <p>
              <em>
                Companies that are considering applying must be qualified based on the following:
              </em>
            </p>
            <ul>
              <li
                v-for="(qualification, index) in minimumQualifications"
                :key="index"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="box hidden" v-in-viewport.once>
          <div class="container">
            <h2>Funding Requirements</h2>
            <p>
              <em>
                Companies that will qualify for the fund will agree to the following conditions:
              </em>
            </p>
            <ul>
              <li
                v-for="(requirement, index) in fundingRequirements"
                :key="index"
              >
                {{ requirement }}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="app-process padded-section">
        <div class="wide-container">
          <h2 class="hidden" v-in-viewport.once>The application process</h2>
          <p class="hidden" v-in-viewport.once>
            City Side provides solutions to find and manage investments for investors
            and corporate ventures using today's technology. With the development of our
            online Venture Management System (VMS), we have automated the process of
            investments from start to finish.
          </p>
          <div :class="`graph-container border-${color}`">
            <div class="container">
              <div class="svg-container hidden" v-in-viewport.once>
                <span style="display: none; visibility: hidden;">&nbsp;</span>
                <svg viewBox="0 0 100 2" xmlns="http://www.w3.org/2000/svg" class="line">
                  <line x1="0" y1="0" x2="100" y2="0"/>
                </svg>
              </div>
              <div class="img-container">
                <img :src="bullet" alt="bullet point" class="hidden" v-in-viewport.once>
              </div>
              <div class="img-container">
                <img :src="bullet" alt="bullet point" class="hidden" v-in-viewport.once>
              </div>
              <div class="img-container">
                <img :src="bullet" alt="bullet point" class="hidden" v-in-viewport.once>
              </div>
              <div class="img-container">
                <img :src="bullet" alt="bullet point" class="hidden" v-in-viewport.once>
              </div>
              <div class="img-container">
                <img :src="bullet" alt="bullet point" class="hidden" v-in-viewport.once>
              </div>
              <div class="img-container">
                <img :src="bullet" alt="bullet point" class="hidden" v-in-viewport.once>
              </div>
            </div>
            
            <div class="bar-graph">
              <div class="step">
                <p><em>Application Submitted</em></p>
              </div>
              <div class="step">
                <p class="days">0 - 14 days</p>
                <p><em>Application Review</em></p>
              </div>
              <div class="step">
                <p class="days">14 - 25 days</p>
                <p><em>Initial Selection</em></p>
              </div>
              <div class="step">
                <p class="days">25 - 35 days</p>
                <p><em>Due Diligence</em></p>
              </div>
              <div class="step">
                <p class="days">35 - 45 days</p>
                <p><em>Final Decision</em></p>
              </div>
              <div class="step">
                <p class="days">45 - 60 days</p>
                <p><em>Deal Closure</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="apply">
        <div :class="`box bkg-${color}`">
          <div class="container">
            <h2 class="hidden" v-in-viewport.once>How to Apply</h2>
            <p class="hidden" v-in-viewport.once>
              To make sure that we process your request quickly and efficiently, we will be
              using Sidepitch as our venture fund management system. Please read the instructions
              and follow the process for quick turn around. We will not respond until the
              application process is complete and submitted. Please use our unique Pitchmark.
            </p>
            <a href="https://app.sidepitch.com/auth/register" class="button inverse" target="_blank">Apply with City Side</a>
          </div>
        </div>
        <div class="box image">
          <img :src="contentImage" alt="">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  async asyncData({ params }) {
    const PAGE_DATA = await import(`~/content/funds/${params.slug}.json`);
    return PAGE_DATA;
  },
  data() {
    return {};
  },
  components: {
    'vue-markdown': VueMarkdown,
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
      ],
    }
  },
};
</script>
