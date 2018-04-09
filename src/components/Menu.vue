<template>
  <div class="menu">
    <button
      v-if="menuIsMobile"
      @click="toggleMenu()"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul>
      <span class="container">
        <li>
          <router-link :to="{ name: 'Portfolio' }">Portfolio</router-link>
        </li>
      </span>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Menu',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'menuIsMobile',
      'menuIsOpen',
    ]),
  },
  methods: {
    ...mapActions([
      'toggleMenu',
      'resizeScreen',
    ]),
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.resizeScreen();
    });
  },
  destroyed() {
    window.removeEventListener('resize');
  },
};
</script>
