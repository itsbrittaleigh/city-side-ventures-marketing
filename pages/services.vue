<template>
  <div class="page services">
    <hero-section :header="header"></hero-section>
    <section class="focus-grid">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="inner-box"
      >
        <div class="box label hidden" v-in-viewport.once>
          <span class="number">{{ index + 1 }}</span>
          <p>{{ service.title }}</p>
        </div>
        <div class="box content">
          <h2 class="hidden" v-in-viewport.once>{{ service.title }}</h2>
          <p class="hidden" v-in-viewport.once>{{ service.description }}</p>
          <nuxt-link to="/contact" class="hidden button" v-in-viewport.once>Request a meeting</nuxt-link>
        </div>
        <div class="box image hidden" v-in-viewport.once>
          <img :src="service.image" alt="">
          <div class="overlay"></div>
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
    const PAGE_DATA = await import('~/content/pages/services.json');
    return PAGE_DATA;
  },
  data() {
    return {};
  },
  components: {
    'hero-section': HeroSection,
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
