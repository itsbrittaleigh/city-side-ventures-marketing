<template>
  <div class="page services">
    <hero-section
      heading="Our Services"
      description="From startup management, technology development, and more, CitySide Ventures can provide your business with more than just investment."
      name="services"
    >
    </hero-section>

    <section class="focus-grid">
      <div class="box label box-dark-gray hidden" v-in-viewport.once>
        <span class="number">1</span>
        <p>Early Stage Capital</p>
      </div>
      <div class="box content content-dark-gray">
        <h2 class="hidden" v-in-viewport.once>Early Stage Capital</h2>
        <p class="hidden" v-in-viewport.once>From pre-seed capital through growth capital, our various funds under management offer qualified tech based startup companies funding from $150K and up to $5M per deal.</p>
        <nuxt-link to="/contact" class="hidden button button-black" v-in-viewport.once>Request a meeting</nuxt-link>
      </div>
      <div class="box image early-stage hidden" v-in-viewport.once>
        <div class="overlay"></div>
      </div>

      <div class="box label box-blue hidden" v-in-viewport.once>
        <span class="number">2</span>
        <p>IP &amp; Technology Licensing</p>
      </div>
      <div class="box content content-blue">
        <h2 class="hidden" v-in-viewport.once>IP &amp; Technology Licensing</h2>
        <p class="hidden" v-in-viewport.once>Our exclusive network of corporate ventures provides an offering of complete technology & IP licensing services from perform a to close.</p>
        <nuxt-link to="/contact" class="hidden button button-blue" v-in-viewport.once>Request a meeting</nuxt-link>
      </div>
      <div class="box image tech-licensing hidden" v-in-viewport.once>
        <div class="overlay"></div>
      </div>

      <div class="box label box-red hidden" v-in-viewport.once>
          <span class="number">3</span>
          <p>Syndication and Fund Management</p>
        </div>
        <div class="box content content-red">
          <h2 class="hidden" v-in-viewport.once>Syndication and Fund Management</h2>
          <p class="hidden" v-in-viewport.once>Using our exclusive and innovative tech platform, we provide syndication and fund management services to investors and investor groups. The services include fund formation, real time deal flow, due diligence, and portfolio management.</p>
          <nuxt-link to="/contact" class="hidden button button-red" v-in-viewport.once>Request a meeting</nuxt-link>
        </div>
        <div class="box image syndication hidden" v-in-viewport.once>
          <div class="overlay"></div>
        </div>

        <div class="box label box-yellow hidden" v-in-viewport.once>
          <span class="number">4</span>
          <p>Venture Studio and Tech Lab</p>
        </div>
        <div class="box content content-yellow">
          <h2 class="hidden" v-in-viewport.once>Venture Studio and Tech Lab</h2>
          <p class="hidden" v-in-viewport.once>We provide our portfolio of companies full access to our own multi-discipline venture studio. The services range from branding to full stack mobile, web, and software development. It is second to none.</p>
          <nuxt-link to="/contact" class="hidden button button-yellow" v-in-viewport.once>Request a meeting</nuxt-link>
        </div>
        <div class="box image venture hidden" v-in-viewport.once>
          <div class="overlay"></div>
        </div>

        <div class="box label box-gray hidden" v-in-viewport.once>
          <span class="number">5</span>
          <p>Interim Startup Management</p>
        </div>
        <div class="box content content-gray">
          <h2 class="hidden" v-in-viewport.once>Interim Startup Management</h2>
          <p class="hidden" v-in-viewport.once>Gain access to our readily available, exclusive, and highly qualified network of members, business advisors, and experienced business professionals to fill interim position on the management team of your company.</p>
          <nuxt-link to="/contact" class="hidden button button-gray" v-in-viewport.once>Request a meeting</nuxt-link>
        </div>
        <div class="box image startup hidden" v-in-viewport.once>
          <div class="overlay"></div>
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
      title: 'Our Services | CitySide Ventures',
      meta: [
        { hid: 'description', name: 'description', content: 'From startup management, technology development, and more, CitySide Ventures can provide your business with more than just investment.' },
      ],
    }
  },
};
</script>
