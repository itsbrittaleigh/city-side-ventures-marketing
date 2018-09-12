<template>
  <main class="main-content">
    <app-header></app-header>
    <nuxt/>
    <app-footer></app-footer>
  </main>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style lang="scss">
@import '~/assets/css/app.scss';
</style>
