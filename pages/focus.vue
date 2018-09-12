<template>
  <div class="page focus">
    <hero-section
      heading="Our Focus"
      description="Our investments are focused on fast-growing industries and market verticals that represent high potential return on equity."
      name="focus"
    >
    </hero-section>

    <section class="focus-grid">
      <div class="box label box-dark-gray hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-automotive-white.svg" alt="">
        <p>Automotive Tech</p>
      </div>
      <div class="box content content-gray">
        <h2 class="hidden" v-in-viewport.once>Automotive Tech</h2>
        <p class="hidden" v-in-viewport.once>
          Automotive technology, primarily “Off Vehicle” Tech, that can be added to or integrated
          with the OEM platforms, or Automotive Technologies that can potentially be purchased
          by the automakers or the tier-one suppliers.
        </p>
      </div>
      <div class="box image automotive hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-automotive-white.svg" alt="">
      </div>
      <div class="box label box-blue hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-b2b-white.svg" alt="">
        <p>B2B, B2C, &amp; H2H Platforms</p>
      </div>
      <div class="box image b2b hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-b2b-white.svg" alt="">
      </div>
      <div class="box content content-blue">
        <h2 class="hidden" v-in-viewport.once>B2B, B2C &amp; H2H SaaS Platform</h2>
        <p class="hidden" v-in-viewport.once>
          Business to Business scalable applications that are built on a SaaS (Software as
          a Service) platform for fast and easy adoption.
        </p>
      </div>
      <div class="box label box-yellow hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-fintech-white.svg" alt="">
        <p>FinTech</p>
      </div>
      <div class="box content content-yellow">
        <h2 class="hidden" v-in-viewport.once>FinTech</h2>
        <p class="hidden" v-in-viewport.once>
          Scalable financial technology that aims to compete with traditional
          financial methods in delivery, process, and transaction, especially in
          the application of Machine Learning and Artificial Intelligence and their
          role in the future financial market.
        </p>
      </div>
      <div class="box image fintech hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-fintech-white.svg" alt="">
      </div>
      <div class="box label box-light-gray hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-wearable-white.svg" alt="">
        <p>Wearable Tech</p>
      </div>
      <div class="box image wearable hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-wearable-white.svg" alt="">
      </div>
      <div class="box content content-light-gray">
        <h2 class="hidden" v-in-viewport.once>Wearable Tech</h2>
        <p class="hidden" v-in-viewport.once>
          Specifically, technologies that are intended for commercial use by law enforcement,
          military personnel, and safety / high-risk construction and maintenance crews.
        </p>
      </div>
      <div class="box label box-dark-gray hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-techinmotion-white.svg" alt="">
        <p>Technology in Motion</p>
      </div>
      <div class="box content content-dark-gray">
        <h2 class="hidden" v-in-viewport.once>Technology in Motion &amp; Mobility</h2>
        <p class="hidden" v-in-viewport.once>
          Software that is designed to be used on mobile devices that can be integrated with
          business systems that are in constant motion.
        </p>
      </div>
      <div class="box image techmotion hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-techinmotion-white.svg" alt="">
      </div>
      <div class="box label box-yellow hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-medical-white.svg" alt="">
        <p>Medical &amp; Health</p>
      </div>
      <div class="box image medical hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-medical-white.svg" alt="">
      </div>
      <div class="box content content-yellow">
        <h2 class="hidden" v-in-viewport.once>Medical &amp; Health Tech</h2>
        <p class="hidden" v-in-viewport.once>
          Technology applications that are designed for pre- &amp; post-procedural interactions.
          Applications that improve the patients' experience and reduce the cost of the
          health system while increasing revenue.
        </p>
      </div>
      <div class="box label box-blue hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-blockchain-white.svg" alt="">
        <p>Blockchain</p>
      </div>
      <div class="box content content-blue">
        <h2 class="hidden" v-in-viewport.once>Blockchain</h2>
        <p class="hidden" v-in-viewport.once>
          Focusing on Blockchain applications in the decentralizing infrastructure space,
          streamlining a business process that is in a higher-level need of visibility and
          verification applications.
        </p>
      </div>
      <div class="box image blockchain hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-blockchain-white.svg" alt="">
      </div>
      <div class="box label box-light-gray hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-agritech-white.svg" alt="">
        <p>Agri-Tech</p>
      </div>
      <div class="box image agritech hidden" v-in-viewport.once>
        <img src="~/assets/images/icons/focus-agritech-white.svg" alt="">
      </div>
      <div class="box content content-light-gray">
        <h2 class="hidden" v-in-viewport.once>Agri-Tech</h2>
        <p class="hidden" v-in-viewport.once>
          Agri-Tech companies and technologies that introduce a new and innovative way to
          supplement and convert old-fashioned farming technology that increase yields, quality,
          and health of everyday produce while dramatically reducing traditional operating costs.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';

export default {
  data() {
    return {};
  },
  components: {
    'hero-section': HeroSection,
  },
  head() {
    return {
      title: 'Our Focus | CitySide Ventures',
      meta: [
        { hid: 'description', name: 'description', content: 'Our investments are focused on fast-growing industries and market verticals that represent high potential return on equity.' },
      ],
    }
  }
}
</script>