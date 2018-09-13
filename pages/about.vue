<template>
  <div class="page about">
    <hero-section
      :heading="header.headline"
      :description="header.description"
      :color="header.color"
      image="https://placekitten.com/800/800"
      name="about"
    >
    </hero-section>

    <section class="overview">
      <div class="box">
        <div class="container">
          <p class="hidden" v-in-viewport.once>Since our inception in 2015, our strategy has been to launch and build great companies. We acknowledge that startups operate in different steps along their journey, therefore our funds range from Angel Funding all the way to Growth Capital Investments. Having started in Farmington Hills, Michigan, we are focused on creating equity investment relationships in promising Michigan companies through all our various funds.</p>
          <ul class="hidden" v-in-viewport.once>
            <li>Angel Funding – “Crawling” (pre-seed capital)</li>
            <li>Venture Capital – “Walking” (seed to series D capital)</li>
            <li>Private Equity – “Running” (Growth Capital). </li>
          </ul>
          <nuxt-link to="/contact" class="button hidden button-red" v-in-viewport.once>{{ overview.buttonText }}</nuxt-link>
        </div>
      </div>
      <div class="box image hidden" v-in-viewport.once>
        <img src="https://placekitten.com/800/800" alt="">
      </div>
    </section>

    <section class="principles">
      <div class="principles-boxes">
        <div class="box box-dark-gray intro hidden" v-in-viewport.once>
          <h2>{{ principles.headline }}</h2>
          <p>{{ principles.description }}</p>
          <div class="equation">
            <p class="title">
              <span>+</span>
              Accountability
            </p>
            <p class="title">
              <span>+</span>
              Discipline
            </p>
            <p class="title">
              <span>+</span>
              Execution
            </p>
            <p class="title yellow">
              <span>=</span>
              Performance
            </p>
          </div>
        </div>
        <div
          v-for="(principle, index) in principles.principles"
          :key="index"
          :class="`principle box hidden box-${principle.color}`"
          v-in-viewport.once
        >
          <p class="number">{{ index + 1 }}</p>
          <p class="title">{{ principle.title }}</p>
          <p>{{ principle.description }}</p>
        </div>
      </div>
    </section>

    <section class="culture">
      <div class="box image hidden" v-in-viewport.once>
        <video src="~/assets/videos/culture.mp4" autoplay loop></video>
      </div>
      <div class="box hidden" v-in-viewport.once>
        <div class="container">
          <h2>{{ culture.headline }}</h2>
          <carousel
            :per-page="1"
            pagination-color="#808080"
            pagination-active-color="#9b2859"
          >
            <slide
              v-for="(slide, index) in culture.description"
              :key="index"
            >
              <vue-markdown>{{ slide.description }}</vue-markdown>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';
import VueMarkdown from 'vue-markdown';

export default {
  async asyncData({ params }) {
    const pageData = await import('~/content/pages/about.json');
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'hero-section': HeroSection,
  }
}
</script>
