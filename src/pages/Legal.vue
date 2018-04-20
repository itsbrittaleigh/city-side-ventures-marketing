<template>
  <base-page>
    <template slot="content">
      <hero-section
        heading="Legal Disclaimers and Notices"
        description="Company Offering Legal Disclaimer"
      >
      </hero-section>
      <div class="container padded-section">
        <p>
          City Side Ventures LLC (“CSV”) offers investment advisory and venture
          management services to qualified venture capital fund, private equity
          funds and family offices funds ONLY under contract. CSV is operating under
          the exemption of Section 203(I) of the Investment Adviser’s Act of 1940
          (the “Advisors Act”) pursuant to the final rules promulgated by the SEC1.
        </p>
        <p>
          City Side Ventures LLC (“CSV”) is a Private Equity firm that is in the
          business of offering variety of services which includes, but is not limited to:
        </p>
        <ul>
          <li>Early Stage Investment</li>
          <li>Venture Management</li>
          <li>Syndication Management</li>
          <li>Tech Incubation</li>
        </ul>
        <p class="title">
          CSV IS NOT A REGISTERED “INVESTMENT ADVISOR” UNDER STATE AND FEDERAL REGULATION.
          CSV IS NOT IN THE BUSINESS OF OFFERING INVESTMENT ADVICE TO THE PUBLIC, INDIVIDUAL
          INVESTORS NOR IN THE BUSINESS OF OFFERING, ENGAGED IN ANY ACTIVITIES OF SELLING OR
          TRADING SECURITIES OF ANY KIND TO THE PUBLIC.
        </p>
      </div>
    </template>
  </base-page>
</template>

<script>
import Base from './Base';
import Hero from '../components/Hero';

export default {
  name: 'Legal',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.container {
  max-width: ($large - 30);
}
.title {
  @include title-font;
}
</style>

