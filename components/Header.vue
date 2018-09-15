<template>
  <header>
    <div class="container">
      <nuxt-link to="/">
        <img src="~/assets/images/logos/cityside-black.png" alt="City Side Ventures logo">
      </nuxt-link>
      <app-menu></app-menu>
    </div>
  </header>
</template>

<script>
import NavigationMenu from '~/components/Menu.vue';

export default {
  data() {
    return {};
  },
  components: {
    'app-menu': NavigationMenu,
  },
};
</script>
