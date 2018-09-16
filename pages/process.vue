<template>
  <div class="page process">
    <hero-section :header="header"></hero-section>
    <div class="sidepitch">
      <div class="box image">
        <img :src="platform.image" alt="">
      </div>
      <div class="box">
        <div class="container">
          <h2 class="hidden" v-in-viewport.once>{{ platform.headline }}</h2>
          <p class="hidden" v-in-viewport.once>{{ platform.description }}</p>
          <div
            v-for="(step, index) in platform.bullets"
            :key="index"
            class="step hidden"
            v-in-viewport.once
          >
            <img src="~/assets/images/icons/bullet-dark-gray.svg" alt="">
            <p class="title">{{ step.title }}</p>
            <p>{{ step.description }}</p>
          </div>
          <a href="https://sidepitch.com" class="button button-black hidden" target="_blank" v-in-viewport.once>{{ platform.buttonText }}</a>
        </div>
      </div>
    </div>
    <section class="process">
      <div class="box">
        <div class="container">
          <h2 class="hidden" v-in-viewport.once>{{ overview.headline }}</h2>
          <p class="hidden" v-in-viewport.once>{{ overview.description }}</p>
          <div
            v-for="(step, index) in overview.bullets"
            :key="index"
            class="step hidden"
            v-in-viewport.once
          >
            <img src="~/assets/images/icons/bullet-dark-gray.svg" alt="">
            <p class="title">{{ step.title }}</p>
            <p class="lead"><em>{{ step.subhead }}</em></p>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
      <div class="box image">
        <img :src="overview.image" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '~/components/Hero.vue';
import VueMarkdown from 'vue-markdown';

export default {
  async asyncData({ params }) {
    const PAGE_DATA = await import('~/content/pages/process.json');
    return PAGE_DATA;
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
