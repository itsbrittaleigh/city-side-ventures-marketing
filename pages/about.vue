<template>
  <div class="page about">
    <hero-section :header="header"></hero-section>
    <section class="overview">
      <div class="box">
        <div class="container">
          <vue-markdown class="hidden" v-in-viewport.once>{{ overview.introduction }}</vue-markdown>
          <nuxt-link to="/contact" class="button hidden button-red" v-in-viewport.once>{{ overview.buttonText }}</nuxt-link>
        </div>
      </div>
      <div class="box image hidden" v-in-viewport.once>
        <img :src="overview.image" alt="">
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
        <video :src="culture.video" autoplay loop></video>
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
